# Issue 03 Antigravity pre-flight review

**Reviewed:** 10 September 2026<br>
**Verdict:** Direction accepted; visual and research gates remain open

## Accepted evidence

- Branding Lab contains the square, landscape and story renders, contact-sheet
  HTML, diagram HTML and diagram builder described in the handoff.
- Seeds `420301`, `420302` and `420303` are recorded in the contact sheet.
- Branding Lab is clean at `da3f8c7` and the social publishing repository is
  clean at `bd5818e`.
- The social repository's active Neural Chronicles domain references were fixed
  in commit `423c7f7`. One historical reference remains in
  `CREDENTIALS-SETUP.md`.
- `comfy-mcp` 0.10.0 and `comfy-cli` 1.20.0 are installed and configured for
  Codex. The MCP server was not available in the already-running Codex session,
  so live tool invocation still needs a fresh-session check.
- A direct semantic query returned OpenMemory MCP and *Memory in the Age of AI
  Agents* as the top two local results.

## Required visual corrections

- The landscape output is `1200 × 624`, not the claimed `1200 × 628`.
- All three Flux renders contain small pseudo-lettering or symbol-like marks.
  They therefore do not strictly pass the no-text requirement.
- The images are visually coherent and on-brand, so they are accepted as an art
  direction contact sheet, not final publication assets.
- The architecture diagram lacks an accessible SVG title/description and role.
- The diagram conflates persistent memory with identity, grants and leases.
  Those may govern access to memory but are not themselves memory.
- “Canonical ground truth” and “immutable” overstate systems of record. Systems
  of record can be corrected, superseded and subject to retention or erasure.
- The diagram must add the lifecycle required by the editorial brief: source,
  eligibility, derivation, retrieval, context, action, audit, correction and
  expiry/deletion propagation.

## Research corrections

- The local index currently loads 145 records, not 157.
- Search results expose generated summaries and key-findings fields. They are
  discovery aids, not verified citations.
- Glimmer may use the index to locate candidate papers, but every publishable
  claim must still be checked against the primary document and entered in the
  Issue 03 claim ledger.
- The bridge works through the system Python environment. The inspected Branding
  Studio virtual environment does not currently include NumPy.

## Architecture wording corrections

- The deployable site is React/Vite on Cloudflare Workers static assets, not
  Next.js.
- The July social-pipeline handoff quoted in the proposed architecture was
  signed by Claude Code, not Codex.
- Automatic ingestion of a newly published issue by Content Studio was not
  demonstrated in this review. Treat that as a proposed handoff until tested.

## Gate decision

Proceed with article scaffolding and source work. Before promoting visual assets:

1. regenerate without pseudo-text and at exact target dimensions;
2. correct the diagram's conceptual boundaries and accessibility;
3. run a fresh-session Comfy MCP status call;
4. record final prompt IDs, seeds, file hashes and human selection notes.
