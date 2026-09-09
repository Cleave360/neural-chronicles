# Issue 03 source allowlist (proposed)

**Issue:** 03 — The Context We Keep<br>
**Research cutoff:** 9 September 2026<br>
**Foundational lookback:** 2020–2026<br>
**Status:** Proposed for editorial approval

This allowlist favours papers, official standards and regulator guidance. Product
blogs, vendor benchmarks and secondary reporting may help find leads, but they
cannot support a critical claim unless the claim is independently grounded in a
primary source.

## Technical foundations

| ID | Source | Why it is in scope | Use with care |
|---|---|---|---|
| S01 | [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) (Lewis et al., 2020) | Foundational distinction between parametric and retrieved non-parametric knowledge. | Early RAG design, not a description of every modern retrieval system. |
| S02 | [Lost in the Middle](https://arxiv.org/abs/2307.03172) (Liu et al., 2023) | Evidence that nominal context capacity and effective use of context are different. | Model results are dated; retain the evaluation principle, not a universal performance number. |
| S03 | [LaRA](https://arxiv.org/abs/2502.09977) (Li et al., 2025) | Direct comparison of long-context and retrieval approaches across tasks. | Preprint; inspect tasks and model versions before quoting results. |
| S04 | [MemGPT](https://arxiv.org/abs/2310.08560) (Packer et al., 2023) | Influential tiered-memory architecture and useful operating-system analogy. | Architecture paper and project lineage; do not generalise its results to all agents. |
| S05 | [Generative Agents](https://arxiv.org/abs/2304.03442) (Park et al., 2023) | Early architecture combining an experience record, retrieval and reflection. | Measures believability in a simulation, not enterprise reliability. |
| S06 | [From Local to Global: A Graph RAG Approach](https://www.microsoft.com/en-us/research/publication/from-local-to-global-a-graph-rag-approach-to-query-focused-summarization/) (Edge et al., 2024) | Primary project publication for graph-derived summaries over private corpora. | GraphRAG is one graph-based approach, not a synonym for knowledge graphs or systems of record. |

## Current evaluation and failure modes

| ID | Source | Why it is in scope | Use with care |
|---|---|---|---|
| S07 | [MemoryAgentBench](https://arxiv.org/abs/2507.05257) (Hu, Wang & McAuley, 2025) | Evaluates retrieval, test-time learning, long-range understanding and selective forgetting in incremental interactions. | Preprint; review full methods and transformations before using numeric comparisons. |
| S08 | [MemBench](https://aclanthology.org/2025.findings-acl.989/) (Tan et al., ACL 2025) | Separates factual and reflective memory and reports effectiveness, efficiency and capacity. | Benchmark definitions do not settle the best production architecture. |
| S09 | [Mem2ActBench](https://aclanthology.org/2026.acl-long.370/) (Shen et al., ACL 2026) | Tests whether remembered constraints can ground later tool actions, not merely answer recall questions. | Synthetic construction and seven evaluated frameworks bound the conclusions. |
| S10 | [From Recall to Forgetting](https://aclanthology.org/2026.findings-acl.1337/) (Uddin et al., Findings ACL 2026) | Directly examines obsolete memories, evolving user information and forgetting-aware evaluation. | Confirm all reported numbers in the paper before publication. |
| S11 | [Memory as Action](https://aclanthology.org/2026.findings-acl.956/) (ACL Findings 2026) | Treats context curation as a learned sequence of deletion and insertion actions. | A research system, not evidence that autonomous deletion is safe in production. |
| S12 | [How Memory Management Impacts LLM Agents](https://aclanthology.org/2026.acl-long.27/) (Xiong et al., ACL 2026) | Studies how memory addition and deletion affect experience-following behaviour. | Review task domains and similarity measures before translating to operational advice. |

## Governance and organisational controls

| ID | Source | Why it is in scope | Use with care |
|---|---|---|---|
| S13 | [GDPR, Articles 5 and 17–19](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04) | Primary legal text for accuracy, storage limitation, erasure and downstream notification. | Legal duties depend on role, jurisdiction, purpose, lawful basis and exceptions; obtain legal review. |
| S14 | [EDPB Opinion 28/2024 on AI models](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en) | EU regulator analysis of anonymity, legitimate interest and unlawfully processed personal data in AI models. | Its scope is AI models trained with personal data, not every external-memory store. |
| S15 | [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/about-this-guidance/) | UK framing across purpose limitation, minimisation, accuracy, retention, security and individual rights. | Guidance is being updated around UK legislative changes; re-check at copy lock. |
| S16 | [NIST AI RMF Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) | Cross-sector risk-management and documentation source. | Voluntary US framework, not a legal requirement and not memory-specific. |

## Editorial gate

- [x] Reporting cutoff and foundational lookback recorded.
- [ ] Editor approves or amends this allowlist.
- [ ] Full texts reviewed for every claim used in prose.
- [ ] UK guidance re-checked at copy lock because the ICO flags ongoing updates.
- [ ] Interviewees and any company-specific sources approved separately.
