# Neural Chronicles

Neural Chronicles is a monthly digital magazine focused on AI, agentic AI, and AI systems.

This repository is the root project workspace for:
- The live publication site in `app/`
- Multi-agent handoff and run artifacts
- Issue research packages and selected publication media
- Cloudflare deployment configuration

## Repository Structure

- `app/` - Deployable publication app; Issue 02 is current and Issue 01 is archived
- `articles/issue-02/` - Full Issue 02 editorial packets and attribution
- `issue_2/Kimi_Agent/issue-02-assets/` - Selected Issue 02 source imagery
- `runs/issue-02/` - Issue 02 release evidence and coordination handoffs
- `runs/issue-03/` - Issue 03 discovery brief and constraints
- `EDITORIAL_ROADMAP.md` - The 12-issue thematic and publication roadmap
- `docs/AGENT_ACCESS.md` - Agent discovery formats and content-use policy
- `security/` - Security notes and workflow snippets
- `handoff.md` - Cross-agent coordination log (append-only)
- `wrangler.toml` - Cloudflare Workers deployment config

## Root Scripts

From repository root:

- `npm run build` - Installs app dependencies and builds `app/dist`
- `npm run lint` - Runs lint checks for `app/`
- `npm run deploy` - Builds and deploys with Wrangler

## App Development

To work directly on the publication app:

1. `cd app`
2. `npm run dev`

Default local dev URL is `http://localhost:5190`.

## Deployment

Production deployment is configured at the repository root and uses Cloudflare Workers with static assets from `app/dist` at `neural-chronicles.uk`.

- Build output: `app/dist`
- Deploy config: `wrangler.toml`
- Deploy command: `npm run deploy`

## Notes

- `runs/` stores tracked publication gate artifacts (decision trail for agents).
- `.kindred/` stores local orchestration/runtime artifacts. See `.kindred/README.md`.
- Runtime `.kindred` paths are ignored by git; `runs/` paths are tracked.
- If sanitized fixtures are needed for docs/tests, commit only approved fixture artifacts.

## Python Policy

- This repository is Node-first. A local `.venv` is not required for normal workflows.
- Agents may use global `python3` only when a specific task requires Python.
- Do not introduce Python dependencies unless there is a concrete implementation need.
