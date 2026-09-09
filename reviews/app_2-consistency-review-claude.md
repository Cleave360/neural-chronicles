# app_2 Consistency Review
**Reviewer:** Claude Code (Anthropic) · 2026-07-07
**Scope:** `app_2/` vs `app/` (Issue 01 live) vs `issue_2/Kimi_Agent/app` (Issue 02 candidate)

## What app_2 actually is

app_2 is **not an Issue 02 build**. It is an expanded rework of Issue 01
(13 components vs 11 in `app/`, adding an Editor's Letter and a Market
Analysis section) with zero Issue 02 content — no "Agentic Turn", no April
dating. It matches the pitch deck's description of the monorepo *template*
("app_2 ready" for launching additional titles). Codex's execution quality
is good; the confusion is about its role. Recommend renaming the directory
`template/` (or documenting its purpose in app_2/README) so nobody ships it
believing it's the next issue. The real Issue 02 candidate in
`issue_2/Kimi_Agent/app` is correctly themed and dated.

## Consistency findings (ordered by severity)

1. **Brand-name schism (site-wide).** Three spellings coexist:
   `NEURAL CHRONICLES` (app_2 nav, footer), `NEURAL CHRONICLE` (app_2 hero
   H1, singular), and `Neural Chronicles` (recent Issue 01 fix, commit
   8e890fa). The domain itself is `neural-chronicles.uk` while the team
   writes "neural-chronicles.uk" in conversation. **Decision needed:** pick
   one canonical spelling (recommend *Neural Chronicles*, matching the
   commit direction), register/redirect the -chronicles.uk domain if
   available, and keep the former domain 301-redirecting. Then sweep all
   three apps + pitch deck + wrangler.toml comments in one commit.

2. **Stale issue identity in app_2.** Hero reads "March 2026 | Inaugural
   Issue". If app_2 is the template, these strings should become template
   variables/placeholders (`{{ISSUE_MONTH}} | {{ISSUE_LABEL}}`), not copy.

3. **Excerpt-only content architecture — the "read more" root cause.**
   In all three apps, stories are hardcoded arrays inside App.tsx with only
   `excerpt` fields. Full articles do not exist in the codebase, so no
   button can reveal them. Fix at the content layer, not the UI layer:
   full bodies now live in `articles/issue-NN/<section>/draft-v1.md`
   (scaffolded 2026-07-07 per the handoff request). The build step should
   render article pages (or an in-page reader) from those packets. This
   also carries the mandatory source attribution.

4. **Monolithic App.tsx (1,335 lines).** Content and presentation are
   fused; every issue rebuild is a code edit. Recommend the Kimi scaffold
   for Issue 03 split: `src/content/issue.ts` (typed data imported from the
   articles/ packets) + presentational components. Keeps the cinematic
   design, makes monthly production a data drop instead of a rewrite.

5. **Minor:** ~50 shadcn/ui components are vendored in app_2 while App.tsx
   uses none of them (imports only lucide icons) — dead weight for bundle
   hygiene; app_2 hero image parallax listens on `mousemove` without
   throttling (fine on desktop, wasted work on mobile); nav anchor ids
   (`whoswho`, `poetry`) don't match section labels (cosmetic, but keep a
   canonical slug set — the six section slugs in articles/README.md).

## Verdict

Ship-blocking for Issue 02: none of the above — Issue 02 lives in
Kimi_Agent/app. Brand-name schism (1) and the content model (3) are the
two to fix before Issue 03 scaffolding, and (3) is what makes the
"3 posts a week + monthly issue + weekly video" cadence sustainable:
one article packet feeds the site page, the social excerpts, and the
video script.
