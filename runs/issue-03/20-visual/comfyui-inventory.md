# Issue 03 ComfyUI inventory

**Checked:** 9 September 2026<br>
**Purpose:** Establish where the visual pipeline lives and what is actually ready

## Finding

There is currently **no ComfyUI workflow in the `neural_chronicles` repository**.
The proven Neural Chronicles production path is the sibling content engine:

`/Users/geofflundholm/Documents/property-social-media-posts`

That engine owns the brand configuration, API-format Flux workflows, prompt
injection, queue/poll/download code and generated working files. Branding Lab
describes and routes the broader creative system, while the ComfyUI application
and models live separately under `/Users/geofflundholm/Documents/ComfyUI`.

This separation is useful: model files, content databases, video/audio work and
generated batches should not enter the publication repository.

## Proven production path

Neural Chronicles is configured in:

`property-social-media-posts/brands/neural-chronicles.json`

It points to three generic, API-format Flux workflows:

| Kind | Workflow | Canvas | SHA-256 |
|---|---|---:|---|
| Square | `brands/workflows/generic/flux_square.json` | 1080 × 1080 | `063265525968ebbd97a512aa674d07b5662c194b2ea8708faed4974a20a4b8e0` |
| Landscape | `brands/workflows/generic/flux_landscape.json` | 1200 × 628 | `1f274ddd2aa70130d1f16891f35046aa7741c0353a88fb339f7e838bdd4795ba` |
| Story | `brands/workflows/generic/flux_story.json` | 1080 × 1920 | `2043c1f5ae612f62d325231bdda4e24d3ced0af1c279d74a6216e072d98995bc` |

Each is a complete 12-node graph using `flux1-schnell.safetensors`, Euler,
the simple scheduler and six steps. `backend/imagery.py` replaces
`PROMPT_PLACEHOLDER`, randomises the seed, submits the graph to `/prompt`, polls
`/history/{prompt_id}` and downloads from `/view`.

## Current evidence

- ComfyUI responded at `http://127.0.0.1:8188/system_stats`.
- Reported ComfyUI version: `0.7.0`.
- Reported device: Apple MPS.
- All four workflow dependencies were present locally:
  - `flux1-schnell.safetensors`
  - `ae.safetensors`
  - `clip_l.safetensors`
  - `t5xxl_fp16.safetensors`
- `data/neural-chronicles/content.db` records four ideas with square,
  landscape and story images credited to these ComfyUI workflows.
- The latest recorded set (`idea4`) was created on 8 September 2026; all three
  output files are present. This is durable evidence of prior successful
  renders, though a fresh Issue 03 render has not yet been run.

## Other paths inspected

`/Users/geofflundholm/Documents/ComfyUI/ComfyUI-workflows/neural_chronicle_workflow.json`
is a separate 12-node, 1344 × 768 UI-format graph. It is useful for visual
editing but is not the pipeline used by the content engine.

Branding Lab's `agent_harness/tools/comfyui.py` has a valid online check, but its
generic generation payload contains only two incomplete nodes. Do not use that
adapter as the Issue 03 execution path without first replacing or repairing it.

## Naming debt outside this repository

The property content engine still contains three live-text references to the
old `neural-chronicals.uk` spelling:

- `brands/neural-chronicles.json` — voice prompt
- `brands/neural-chronicles.json` — section spotlight brief
- `brands/neural-chronicles.json` — open transmission brief

`CREDENTIALS-SETUP.md` contains one further historical/setup reference. That
sibling repository already has unrelated working-tree changes, so these have
been identified but not edited from the current task.

The same brand profile also still declares Issue 02 as current. It should move
to Issue 03 only at the publication handoff, not during research.

## Repository boundary for Issue 03

Keep these external:

- ComfyUI application and Python environment
- model weights
- content database and scratch generations
- rejected image batches, video and audio production
- Branding Lab and content-engine routing code

Version these here once the Issue 03 art direction is approved:

- a manifest pinning the three workflow hashes above
- final selected web images only
- prompt, seed, generation date and human selection notes for each published image

The content engine already versions the API workflows, so copying them here
would create two owners. Pinning hashes gives this issue reproducibility without
forking the pipeline.

## Proposed visual division of labour

- **Property social pipeline + ComfyUI:** cinematic hero and section plates
  without baked-in text.
- **HTML/SVG:** the canonical “Architecture of Recall” diagram, labels, arrows
  and deletion paths, so the information remains exact, accessible and responsive.
- **Editorial gate:** render one contact sheet first; select a direction before
  a larger batch.

## Next gate

Create an Issue 03 prompt pack, run one deterministic seed through each of the
three production workflows, record the prompt IDs and hashes, then select the
visual direction before generating the full set.
