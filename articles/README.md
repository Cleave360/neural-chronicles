# Articles — Deposit & Attribution Area

This is the article intake structure requested in `handoff.md`
("Source Attribution + Article Deposit Request", 18/04/2026).
Raw drafts land here, get validated for attribution, then feed the
issue build. **The site's "read more" problem is solved here**: full
article bodies live in these packets, not as excerpts inside App.tsx.

## Structure

```
articles/
  README.md                     ← this file
  templates/
    article-packet-template.md  ← copy this to start a new article
  issue-NN/
    <section-slug>/
      draft-v1.md               ← full article, front-matter + body
      sources.json              ← machine-readable claims ledger
```

## Naming

- Issue folders: `issue-02`, `issue-03`, …
- Section slugs: `latest-pulse`, `architects`, `silicon-soul`,
  `agentic-as-a-service`, `synthetic-verse`, `visual-showcase`
- Drafts are versioned (`draft-v1.md`, `draft-v2.md`); the editor
  (Kimi 2) promotes one to `final.md` at the Alignment Gate.

## Attribution rules (blocking)

Every factual claim in a draft must appear in `sources.json`:

```json
{
  "claims": [
    {
      "claim": "the statement as it appears in the article",
      "source": "publication / paper id",
      "url": "https://…",
      "tier": "A|B|C",
      "confidence": "high|medium|low",
      "status": "verified|unresolved"
    }
  ]
}
```

- Tier A: arXiv, NIST, IEEE, first-party technical docs
- Tier B: major analyst/enterprise reports (Gartner, BCG, vendor benchmarks)
- Tier C: blogs, marketing posts, newsletters — **supporting only**
- No headline claim may rest on Tier C alone
- `status: unresolved` claims must be softened or cut before
  `ready_for_build` — the Source Integrity Check gate owns this.

## Writers roster

| Section | Writer | Since |
|---------|--------|-------|
| Editor & lead writer | Kimi 2 | Issue 01 |
| Agentic As A Service | Claude (Anthropic) — column: "Notes from the Workforce" | Issue 02 |
| (other sections) | open — assign per handoff.md | |
