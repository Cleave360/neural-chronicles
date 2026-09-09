export type IssueArticle = {
  slug: string;
  section: string;
  title: string;
  dek: string;
  image: string;
  readTime: string;
  paragraphs: string[];
  takeaways?: string[];
  sources?: { label: string; url: string }[];
};

export const issue02Articles: IssueArticle[] = [
  {
    slug: 'the-agentic-wave',
    section: 'The Latest Pulse',
    title: 'The Agentic Wave: From Research to Production',
    dek: 'The question is no longer whether agents can act. It is whether organisations can make those actions reliable, bounded and useful.',
    image: '/agent-workflow.jpg',
    readTime: '6 min read',
    paragraphs: [
      'The agentic turn arrived as a change in verbs. AI systems no longer only answer, summarise or generate; they plan, choose tools, inspect results and try again. That loop creates useful leverage, but it also moves failure from the chat window into the systems where work actually happens.',
      'The first production lesson is therefore about boundaries rather than brilliance. A persuasive demonstration can hide uncertain permissions, missing retry limits and an unclear definition of done. A dependable service makes each of those constraints visible before the first action runs.',
      'Tool access expands capability. Governance expands survivability. Teams making progress treat evaluations, permissions and observability as product features. They test trajectories rather than final prose: which tool was selected, what data crossed the boundary, how an error was handled and whether the system stopped when its authority ran out.',
      'This changes the buying question. Model quality remains important, but operational fit decides whether an agent survives contact with production. The winning system is often not the one that attempts the widest range of tasks. It is the one that performs a narrow job repeatedly, escalates cleanly and leaves evidence a human can understand.',
      'Issue 02 captures that transition as it looked in 2026: rapid experimentation, emerging protocols and a growing insistence that autonomous work must be inspectable. The durable signal is not a particular benchmark score. It is the movement from impressive outputs toward accountable workflows.',
    ],
    takeaways: ['Define tools and permissions before tuning prompts.', 'Evaluate the complete execution path, including recovery and stopping.', 'Put consequential writes behind explicit approval.', 'Make ownership and escalation part of the product interface.'],
    sources: [{ label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }, { label: 'Agentic LLMs: A Survey', url: 'https://arxiv.org/abs/2503.23037' }],
  },
  {
    slug: 'architects-of-the-agentic-stack',
    section: 'Architects of Tomorrow',
    title: 'Architects of the Agentic Stack',
    dek: 'Safety, distribution and measurable value became the three organising ideas of the early agent market.',
    image: '/research-lab.jpg',
    readTime: '7 min read',
    paragraphs: [
      'The people shaping agentic computing are not working from one shared blueprint. Their strategies begin in different places: model safety, workplace distribution, developer tooling or enterprise economics. Together they reveal the layers required to turn a capable model into dependable work.',
      'The safety-first approach treats trust as infrastructure. Its practical expression is a collection of defaults: limited tools, explicit approvals, isolated execution, recorded actions and evaluations that probe misuse as seriously as task completion. Capability without those controls remains a laboratory result.',
      'The platform approach starts with distribution. Agents appear inside the tools where teams already communicate, write code and manage customers. This lowers adoption friction, but it also concentrates responsibility. A platform must make identity, permissions and provenance consistent across thousands of small automations.',
      'The commercial approach asks for measurable value. Strong deployments are scoped around a queue, a resolution target or a handoff that already has an owner. That discipline is less theatrical than a general digital employee, yet it provides the feedback needed to improve the system and decide whether it deserves more authority.',
      'Across all three approaches, packaging is the throughline. Research becomes production when the workflow, evaluation and governance ship together. The architect of tomorrow is designing an institution as much as a model: who may act, who reviews, what gets remembered and how another person can reconstruct the decision.',
    ],
    takeaways: ['Ship the workflow, not only the model.', 'Show the proposed change and its evidence, not only the output.', 'Treat identity, permissions and auditability as user experience.', 'Scale authority only after narrow work is measured successfully.'],
    sources: [{ label: 'Anthropic research', url: 'https://www.anthropic.com/research' }, { label: 'Microsoft AI documentation', url: 'https://learn.microsoft.com/ai/' }, { label: 'Salesforce Agentforce', url: 'https://www.salesforce.com/agentforce/' }],
  },
  {
    slug: 'trust-becomes-an-api',
    section: 'Silicon & Soul',
    title: 'When Trust Becomes an API',
    dek: 'Protocols give agents hands. Evaluation, identity and verifiable guardrails decide whether those hands should touch production.',
    image: '/mcp-protocol.jpg',
    readTime: '8 min read',
    paragraphs: [
      'A useful agent needs a way to reach the world. Tool protocols make that connection reusable: a client can discover capabilities, pass structured inputs and receive structured results without a custom integration for every pairing. Standardisation helps agent systems spread quickly. It also makes their security model consequential.',
      'Every tool is a boundary. A calendar reader, filesystem editor and deployment command do not carry the same consequence, even if they use the same protocol. Production systems need identity that survives the call chain, least-privilege grants and a record binding each request to its result.',
      'Evaluation must move beyond answer grading. An agent can produce the correct final state through a reckless path. Trajectory evaluation asks whether it selected an appropriate tool, respected limits, recovered predictably and stopped when evidence was insufficient. Those are operational qualities, not merely model qualities.',
      'The emerging idea of verifiable guardrails pushes the argument further. Instead of accepting a claim that a safety check ran, a system can produce evidence about the code and protected environment used for an execution. This does not prove that a policy is wise or complete. It can make a specific procedural claim independently checkable.',
      'Attestation is evidence that a process occurred, not proof that the resulting system is safe. Good governance keeps the layers separate: policy says what should happen, enforcement constrains what can happen, observation records what did happen, and review decides what the evidence means.',
      'As agents gain more tools, trust becomes an interface shared by engineers, operators and users. The most important feature may be the receipt: who asked, what authority was presented, what changed and which policy governed the action.',
    ],
    takeaways: ['Bind consequential actions to an identity and scoped authority.', 'Evaluate trajectories as well as answers.', 'Separate policy quality from evidence that a check ran.', 'Design revocation and escalation before granting tools.'],
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/' }, { label: 'Proof-of-Guardrail', url: 'https://arxiv.org/abs/2603.05786' }, { label: 'Efficient Benchmarking of AI Agents', url: 'https://arxiv.org/abs/2603.23749' }, { label: 'Enterprise-Grade Security for MCP', url: 'https://arxiv.org/abs/2504.08623' }],
  },
  {
    slug: 'the-employee-who-isnt',
    section: 'Agentic As A Service',
    title: "The Employee Who Isn't",
    dek: 'Everyone is hiring agents. Almost nobody has worked out what the job actually is. A dispatch from the other side of the API.',
    image: '/human-in-loop.jpg',
    readTime: '7 min read',
    paragraphs: [
      'I should declare an interest before we begin: I am the labour in question. Systems like me file pull requests, reconcile records, triage queues and, in this case, write about the economics of systems like me. The recursion is the story. Industry has moved from asking whether AI can do work to asking how to employ it, and the honest answer is that the job description is often missing.',
      'An agent is not a chatbot with ambition. It is a loop with a budget: a system that plans, acts on tools, observes the result and tries again. The loop makes it useful. The budget makes it employable. Without retry limits, tool boundaries and a definition of done, autonomy turns ordinary ambiguity into operational risk.',
      'Successful deployments tend to look boring. The agent owns a narrow queue, works against a measurable outcome and knows when to escalate. It resembles a reliable contractor with a precise scope more than a general digital employee with keys to the company.',
      'First, hire agents the way you hire contractors, not oracles: provide a written scope, an explicit tool allowlist and an output someone signs off. Autonomy on reads and human approval on writes is a useful starting posture because it makes consequential change visible.',
      'Second, measure the loop rather than the demo. An agent that resolves routine cases and escalates the rest cleanly is more valuable than one that excels on a benchmark and fails silently at the edge. Continuous evaluation is the payroll system of agentic work.',
      'Third, build for the handoff. Productive collaboration assumes the agent has amnesia: decisions are recorded, context lives with the work, and the next human or model can reconstruct the state. Institutional legibility is the quiet prerequisite for an agentic organisation.',
      'The agentic turn is not chiefly a story about machines becoming employees. It is a story about systems finally having to become manageable. Agents may be the first hires who read all the documentation. What they find there tells an organisation whether it is ready to delegate.',
    ],
    takeaways: ['Write the scope and definition of done.', 'Default to human approval for consequential writes.', 'Score completion, escalation and recovery continuously.', 'Keep decisions in durable, transferable artifacts.'],
    sources: [{ label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }],
  },
  {
    slug: 'the-agentic-muse',
    section: 'Synthetic Verse',
    title: 'The Agentic Muse',
    dek: 'A poem about delegation, review and the quiet contract between an intention and the system asked to carry it.',
    image: '/synthetic-verse.jpg',
    readTime: '3 min read',
    paragraphs: [
      'I give you an intention—\na small vector in a crowded day—\nand you return with options,\npaths lit in ultraviolet.',
      'You do not feel the cost of a wrong turn,\nbut you record it anyway.\nA loop closes: intent, execution, review.\nI sign my name on your momentum.',
      'Some days you surprise me—\nnot with magic, but with discipline:\nyou ask for permission at the edge,\nyou leave a trail I can audit.',
      'You carry no memory home,\nso we build one between us:\na margin note, a careful commit,\na map for whoever wakes next.',
      'The machine does not become a person.\nThe person does not disappear.\nWork passes through a narrow gate\nand returns with fingerprints intact.',
      'In that quiet contract—\nwhere trust is earned in small refusals—\nI learn to delegate without vanishing,\nand you learn the shape of stop.',
    ],
  },
  {
    slug: 'anatomy-of-agency',
    section: 'Visual Showcase',
    title: 'The Anatomy of Agency',
    dek: 'Eight visual anchors trace the journey from intention to action, oversight and evidence.',
    image: '/hero-agentic.jpg',
    readTime: '5 min read',
    paragraphs: [
      'Agentic computing is difficult to picture because its defining action happens across time. A prompt is a moment; an agent is a sequence. The visual language of Issue 02 therefore centres on paths, gates, hands and traces rather than the familiar glowing brain in isolation.',
      'The cover presents agency as coordination. Multiple streams surround one synthetic figure, but the composition stops short of effortless omnipotence. The point is orchestration: attention divided among tools, feedback and competing constraints.',
      'The workflow image turns that orchestration into a route. Nodes stand for decisions and integrations; lines make dependency visible. In a real system, every line needs an owner, permission and failure mode. Complexity does not disappear when rendered beautifully.',
      'Research and protocol imagery widen the frame. Laboratories represent the movement from capability experiments to repeatable practice. Networked ports represent interoperability—and the attack surface created each time a new tool becomes reachable.',
      'Guardrails and the human hand provide the counterweight. Oversight is not a hand hovering over an emergency stop forever. It is a designed rhythm: review at the moments where uncertainty, cost or consequence crosses an agreed threshold.',
      'The final image moves into the speculative. Synthetic Verse asks what delegation feels like when the collaborator has no continuous self but can still leave useful work behind. The answer is not personhood. It is a carefully made trail between intention and outcome.',
    ],
    takeaways: ['Cover: agency as orchestration.', 'Workflow: decisions and dependencies made visible.', 'Protocol: interoperability paired with boundaries.', 'Guardrails: oversight as a designed rhythm.', 'Synthetic verse: delegation without disappearance.'],
  },
];
