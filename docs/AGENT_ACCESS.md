# Agent Access and Content Policy

Neural Chronicles publishes one canonical editorial work in multiple transport
formats. The agent-readable form is not a separate edition and must not contain
claims or wording absent from the human publication.

## Discovery surfaces

- `/llms.txt` — concise publication map and Markdown links
- `/llms-full.txt` — complete current issue in one Markdown document
- `/issues/02/articles/<slug>.md` — one Markdown article
- `/sitemap.xml` — canonical human-facing URLs
- `/feed.xml` — RSS 2.0 issue feed
- `/robots.txt` — crawler access and content-use signals

Every human article route also returns complete prose in its initial HTML,
before React runs. Its `<head>` includes a canonical URL, a Markdown alternate,
an `llms.txt` description link and Schema.org JSON-LD.

## Content-use policy

The origin publishes this policy in both `robots.txt` and the `Content-Signal`
response header:

```text
search=yes, ai-input=yes, ai-train=no, use=reference
```

This permits indexing and real-time agent retrieval with reference attribution,
while reserving model-training rights. These signals communicate policy; they
do not by themselves force every crawler to comply. Cloudflare AI Crawl Control
can monitor crawlers and enforce bot-specific access decisions.

## Build contract

`app/src/content/issue02.ts` is the canonical deployed Issue 02 content source.
After Vite builds the browser application,
`app/scripts/generate-agent-publication.mjs` derives every agent and prerendered
artifact from that same source. A build fails if the content cannot be parsed.

For Issue 03, move the canonical source to a content format suitable for both
editorial review and application import, then retain this single-source output
contract.

## Verification

After each publication build, check:

1. A raw HTTP fetch of a deep article contains its full prose.
2. Its `.md` alternative returns `text/markdown` and the same prose.
3. `llms.txt` links every current article.
4. Sitemap and feed XML parse successfully.
5. Canonical and Markdown-alternate links match the deployed route.
6. The response includes the intended `Content-Signal` header.
