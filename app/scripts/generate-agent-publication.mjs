import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(appRoot, 'dist');
const siteUrl = 'https://neural-chronicles.uk';
const issuePath = '/issues/02';
const source = await readFile(join(appRoot, 'src/content/issue02.ts'), 'utf8');
const match = source.match(/export const issue02Articles: IssueArticle\[\] = (\[[\s\S]*\]);\s*$/);

if (!match) throw new Error('Could not extract issue02Articles from src/content/issue02.ts');

// The content module intentionally contains only literal data. Evaluating that
// literal keeps the browser, prerendered HTML, and Markdown outputs in lockstep.
const articles = Function(`"use strict"; return (${match[1]});`)();
const shell = await readFile(join(distRoot, 'index.html'), 'utf8');

const escapeHtml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const escapeXml = escapeHtml;

async function write(relativePath, content) {
  const target = join(distRoot, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content);
}

function articleMarkdown(article) {
  const sources = article.sources?.length
    ? `\n## Sources and further reading\n\n${article.sources.map((item) => `- [${item.label}](${item.url})`).join('\n')}\n`
    : '';
  const takeaways = article.takeaways?.length
    ? `\n## Field notes\n\n${article.takeaways.map((item) => `- ${item}`).join('\n')}\n`
    : '';
  return `---\ntitle: "${article.title.replaceAll('"', '\\"')}"\nsection: "${article.section}"\nissue: "02"\npublished: "2026-09-09"\ncanonical: "${siteUrl}${issuePath}/articles/${article.slug}"\n---\n\n# ${article.title}\n\n${article.dek}\n\n${article.paragraphs.join('\n\n')}${takeaways}${sources}\n`;
}

function staticHeader() {
  return `<header style="padding:20px 5%;border-bottom:1px solid #29252f"><a href="/" style="color:#fff;text-decoration:none;font:700 20px system-ui">Neural Chronicles</a> <nav style="float:right"><a href="/issues" style="color:#c4b5fd">Past issues</a></nav></header>`;
}

function staticArticle(article) {
  const paragraphs = article.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll('\n', '<br>')}</p>`).join('');
  const sources = article.sources?.length ? `<h2>Sources and further reading</h2><ul>${article.sources.map((item) => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.label)}</a></li>`).join('')}</ul>` : '';
  return `${staticHeader()}<article style="max-width:760px;margin:auto;padding:64px 24px;color:#d8d5de;font:18px/1.8 system-ui"><p style="color:#c4b5fd;text-transform:uppercase;letter-spacing:.18em;font-size:12px">${escapeHtml(article.section)} · Issue 02</p><h1 style="color:#fff;font-size:48px;line-height:1.05">${escapeHtml(article.title)}</h1><p style="font-size:22px;color:#aaa3b2">${escapeHtml(article.dek)}</p>${paragraphs}${sources}<p><a href="${issuePath}" style="color:#c4b5fd">Back to Issue 02</a></p></article>`;
}

function staticIssue() {
  return `${staticHeader()}<main style="max-width:1100px;margin:auto;padding:72px 24px;color:#d8d5de;font:18px/1.6 system-ui"><p style="color:#c4b5fd;text-transform:uppercase;letter-spacing:.18em;font-size:12px">Current issue · September 2026</p><h1 style="color:#fff;font-size:64px;line-height:1">Issue 02: The Agentic Turn</h1><p>From chat to choreography: systems that plan, use tools, ask for permission and leave traces.</p><p><strong>Archive note:</strong> developed from an April–July 2026 editorial packet and published in September 2026.</p><section>${articles.map((article) => `<article style="border-top:1px solid #29252f;padding:28px 0"><p style="color:#c4b5fd">${escapeHtml(article.section)}</p><h2><a href="${issuePath}/articles/${article.slug}" style="color:#fff">${escapeHtml(article.title)}</a></h2><p>${escapeHtml(article.dek)}</p></article>`).join('')}</section></main>`;
}

function staticArchive() {
  return `${staticHeader()}<main style="max-width:900px;margin:auto;padding:72px 24px;color:#d8d5de;font:18px/1.6 system-ui"><h1 style="color:#fff;font-size:56px">Past issues</h1><article><h2><a href="/issues/02" style="color:#c4b5fd">Issue 02: The Agentic Turn</a></h2><p>September 2026 · Current issue</p></article><article><h2><a href="/issues/01" style="color:#c4b5fd">Issue 01: The Inaugural Edition</a></h2><p>March 2026 · Archive</p></article></main>`;
}

function pageDocument({ path, title, description, body, markdownPath, jsonLd }) {
  const canonicalPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
  const canonical = `${siteUrl}${canonicalPath}`;
  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const discovery = `${markdownPath ? `<link rel="alternate" type="text/markdown" href="${markdownPath}" />` : ''}<link rel="describedby" href="/llms.txt" />${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}</script>` : ''}`;
  return html.replace('</head>', `${discovery}</head>`);
}

const urls = ['/', '/issues', '/issues/01', '/issues/02'];

for (const article of articles) {
  const path = `${issuePath}/articles/${article.slug}`;
  const markdownPath = `${path}.md`;
  urls.push(path, markdownPath);
  await write(markdownPath.slice(1), articleMarkdown(article));
  await write(`${path.slice(1)}/index.html`, pageDocument({
    path,
    title: `${article.title} — Neural Chronicles`,
    description: article.dek,
    body: staticArticle(article),
    markdownPath,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': article.section === 'Synthetic Verse' ? 'CreativeWork' : 'Article',
      headline: article.title,
      description: article.dek,
      datePublished: '2026-09-09',
      isPartOf: { '@type': 'PublicationIssue', issueNumber: '02', name: 'The Agentic Turn' },
      publisher: { '@type': 'Organization', name: 'Neural Chronicles', url: siteUrl },
      mainEntityOfPage: `${siteUrl}${path}/`,
      image: `${siteUrl}${article.image}`,
    },
  }));
}

const issueBody = staticIssue();
const issueDocument = pageDocument({ path: '/issues/02', title: 'Issue 02: The Agentic Turn — Neural Chronicles', description: 'Six views of agency: systems, builders, infrastructure, production, imagination and visual culture.', body: issueBody, markdownPath: '/llms-full.txt' });
await write('issues/02/index.html', issueDocument);
await write('index.html', pageDocument({ path: '/', title: 'Neural Chronicles — Issue 02: The Agentic Turn', description: 'Long-form reporting on AI agents, infrastructure, governance and culture.', body: issueBody, markdownPath: '/llms-full.txt' }));
await write('issues/index.html', pageDocument({ path: '/issues', title: 'Past Issues — Neural Chronicles', description: 'The Neural Chronicles publication archive.', body: staticArchive() }));
await write('issues/01/index.html', pageDocument({ path: '/issues/01', title: 'Issue 01: The Inaugural Edition — Neural Chronicles', description: 'The March 2026 inaugural edition of Neural Chronicles.', body: `${staticHeader()}<main style="max-width:800px;margin:auto;padding:72px 24px;color:#d8d5de;font:18px/1.7 system-ui"><h1 style="color:#fff;font-size:56px">Issue 01: The Inaugural Edition</h1><p>The issue that established the publication's six-part editorial rhythm.</p><p><a href="/issues" style="color:#c4b5fd">Back to past issues</a></p></main>` }));

const articleLinks = articles.map((article) => `- [${article.title}](${siteUrl}${issuePath}/articles/${article.slug}.md): ${article.dek}`).join('\n');
await write('llms.txt', `# Neural Chronicles\n\n> An independent monthly journal about artificial intelligence, agentic systems, infrastructure, governance and culture.\n\nCanonical site: ${siteUrl}\nContent policy: search and real-time AI retrieval are permitted with reference attribution; model training is not permitted.\n\n## Current issue\n\n- [Issue 02: The Agentic Turn](${siteUrl}${issuePath})\n${articleLinks}\n\n## Archive\n\n- [Past issues](${siteUrl}/issues)\n- [Sitemap](${siteUrl}/sitemap.xml)\n- [RSS feed](${siteUrl}/feed.xml)\n`);
await write('llms-full.txt', `# Neural Chronicles — Issue 02: The Agentic Turn\n\n> Developed April–July 2026 and published September 2026. Time-sensitive statements describe that editorial period.\n\n${articles.map(articleMarkdown).join('\n---\n\n')}`);
await write('robots.txt', `User-agent: *\nContent-Signal: search=yes, ai-input=yes, ai-train=no, use=reference\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.filter((url) => !url.endsWith('.md')).map((url) => `<url><loc>${siteUrl}${url === '/' ? '/' : `${url}/`}</loc><lastmod>2026-09-09</lastmod></url>`).join('')}</urlset>\n`);
await write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Neural Chronicles</title><link>${siteUrl}</link><description>Signal, systems and the people building what comes next.</description>${articles.map((article) => `<item><title>${escapeXml(article.title)}</title><link>${siteUrl}${issuePath}/articles/${article.slug}/</link><guid>${siteUrl}${issuePath}/articles/${article.slug}/</guid><pubDate>Wed, 09 Sep 2026 09:00:00 GMT</pubDate><description>${escapeXml(article.dek)}</description></item>`).join('')}</channel></rss>\n`);

console.log(`Generated agent publication: ${articles.length} articles, ${urls.length} indexed URLs`);
