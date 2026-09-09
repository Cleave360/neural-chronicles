# Issue 03 research map

**Theme:** Models & Memory<br>
**Working title:** The Context We Keep<br>
**Research state:** Initial source map; prose drafting has not begun

## The editorial spine

The issue should make one clean distinction repeatedly:

| Layer | What it is | Typical lifetime | Authority | Primary failure mode |
|---|---|---|---|---|
| Model context | Tokens available to the model for this inference | One request or managed session | The assembled prompt, not an independent record | Relevant material is absent, crowded out or poorly used |
| Retrieved knowledge | Material selected from an external corpus at query time | Query-specific; corpus persists | Source document plus retrieval/index metadata | Wrong chunk, stale index, missing provenance or false relevance |
| Persistent agent state | Saved facts, summaries, preferences, episodes or procedures reused across runs | Cross-session | A memory policy and its source links | Confident reuse of stale, conflicting or unauthorised state |
| System of record | The organisation's authoritative operational data | Business-defined retention | Owning application and accountable process | The agent's derivative copy drifts from the authoritative state |

The central reporting test is not “does it remember?” It is: **what was stored,
under whose authority, how was it transformed, when was it last checked, and can
it be corrected or removed everywhere it propagated?**

## Article research lanes

### 1. The Context Window Is Not a Memory

**Working argument:** Capacity, selection and persistence are separate design
choices. A larger context can reduce retrieval machinery for some workloads,
but neither nominal token capacity nor recall tests prove robust use of the
middle of a prompt. Retrieval introduces its own selection, provenance and
index-freshness problems.

Start with S01–S03, then use S07–S09 to connect passive recall to interactive
agents. Build a comparison based on workload dimensions rather than declaring a
single winner: corpus volatility, query predictability, latency, token cost,
access controls, provenance and deletion.

**Open reporting:** Obtain reproducible cost/latency examples using a fixed
corpus and current models. Keep those measurements dated and separate from the
general conceptual story.

### 2. The Memory Builders

**Working argument:** The field is moving from “store and retrieve a chat fact”
toward memory management: consolidation, conflict resolution, selective
forgetting, implicit procedure and using old constraints to take correct action.

Potential interview groups drawn from primary work:

- Charles Packer and Sarah Wooders — tiered virtual context in MemGPT (S04).
- Yuanzhe Hu, Yu Wang and Julian McAuley — interactive memory competencies (S07).
- Yiting Shen and colleagues — memory-grounded tool execution (S09).
- Md Nayem Uddin and colleagues — obsolete-memory failures and forgetting-aware evaluation (S10).
- Darren Edge and the GraphRAG team — graph-derived global sensemaking (S06).

**Interview test:** Ask each builder for a failure they now believe ordinary
recall scores conceal. Profiles remain candidates until participation and quote
permissions are confirmed.

### 3. What Should a Machine Be Allowed to Remember?

**Working argument:** “Remember everything” conflicts with purpose limitation,
data minimisation, accuracy, storage limitation and correction/erasure duties.
Deletion is a propagation problem once source material becomes chunks,
embeddings, summaries, graph edges, backups and behavioural rules.

Use S13–S16 for the governance frame and S10–S12 for technical failure modes.
Do not imply that deleting one vector or conversation deletes every derivative.
Map the lifecycle and identify a controller/owner at each copy.

**Open reporting:** Seek a UK data-protection lawyer or practitioner to review
the eventual legal passages. Re-check ICO guidance at copy lock.

### 4. Payroll Is Context

**Working argument:** An employable agent needs recoverable work state, but its
memory should not become a shadow system of record. Handoffs need current task
state, mandate, decisions, exceptions, owners, source references and expiry—not
an indiscriminate transcript dump.

Use S09 as the bridge between remembering and correct tool arguments. Develop a
concrete shift-handoff schema and test it against three cases: a changed budget,
a revoked permission and a superseded customer preference.

**Open reporting:** Find two real operational teams willing to show the boundary
between agent state and their CRM, ticketing, finance or workflow system. Until
then, label the handoff schema as a proposed design.

### 5. I Remember You in Tokens

The poem should sit on the asymmetry between recognition and continuity: a
voice reconstructed from selected traces may feel intimate even when no lived
continuity exists. Draft only after the reporting establishes the vocabulary;
avoid claiming subjective experience for the model.

### 6. The Architecture of Recall

Build a precise, hand-authored diagram rather than asking an image model to
render labels. The diagram should follow one remembered fact through:

`source event → system of record → eligibility policy → extraction → derivative
memory → retrieval → prompt context → action → audit → correction/expiry`

Show deletion/correction flowing back through every derivative and make
uncertainty, source authority and time visible. ComfyUI can provide the cinematic
editorial plate behind or beside the diagram, but not the canonical topology.

## Claims worth pursuing

The initial claims ledger records what the currently reviewed abstracts and
official pages can support. Numeric results remain non-publishable until the
full paper, method and table have been checked. The most promising fresh angle is
that **forgetting is not the absence of memory management; it is one of memory
management's required operations**.

## Immediate next research cycle

1. Approve or amend the proposed allowlist.
2. Read S03 and S07–S12 in full and resolve the provisional claims.
3. Create the reproducible long-context-versus-retrieval test corpus.
4. Send interview requests to one architecture builder, one benchmark author
   and one UK privacy practitioner.
5. Produce the first exact architecture diagram and a separate Issue 03 visual
   prompt pack for ComfyUI.
