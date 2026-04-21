import Link from "next/link";
import styles from "../lesson.module.css";
import diagramStyles from "./diagram.module.css";

const phases = [
  {
    id: "plan",
    icon: "📋",
    label: "Plan",
    ai: "AI-assisted requirements analysis, user story generation, risk scanning",
  },
  {
    id: "design",
    icon: "🎨",
    label: "Design",
    ai: "Architecture suggestions, ADR drafting, diagram generation",
  },
  {
    id: "code",
    icon: "💻",
    label: "Code",
    ai: "Code generation, refactoring, documentation, pair programming",
  },
  {
    id: "test",
    icon: "🧪",
    label: "Test",
    ai: "Unit test generation, test case expansion, mutation testing",
  },
  {
    id: "build",
    icon: "🔧",
    label: "Build",
    ai: "AI-optimised CI pipelines, dependency vulnerability scanning",
  },
  {
    id: "release",
    icon: "🚀",
    label: "Release",
    ai: "Automated changelogs, release notes, canary analysis",
  },
  {
    id: "run",
    icon: "▶️",
    label: "Run",
    ai: "Intelligent auto-scaling, anomaly detection, self-healing systems",
  },
  {
    id: "monitor",
    icon: "📊",
    label: "Monitor",
    ai: "AIOps, log summarisation, predictive alerting, root-cause analysis",
  },
];

const sections = [
  {
    title: "AI in Planning & Design",
    content: [
      "LLMs can turn rough notes into structured user stories and acceptance criteria in seconds.",
      "AI tools scan requirements for ambiguities and flag missing edge cases before a line of code is written.",
      "Architecture copilots suggest technology choices, flag anti-patterns, and draft Architecture Decision Records (ADRs).",
    ],
    resources: [
      { label: "GitHub Copilot for planning", url: "https://github.com/features/copilot" },
      { label: "Linear AI features", url: "https://linear.app/ai" },
    ],
  },
  {
    title: "AI in Code & Test",
    content: [
      "Copilot, Cursor, and similar tools can generate entire functions, classes, and modules from a natural-language description.",
      "AI reviewers catch security issues, performance problems, and style violations before human review.",
      "Test generation tools automatically create unit tests, edge cases, and mocks aligned to the code under test.",
    ],
    resources: [
      { label: "GitHub Copilot code generation", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
      { label: "Awesome Copilot — agentic workflows", url: "https://awesome-copilot.github.com/learning-hub/agentic-workflows/" },
      { label: "CodiumAI — test generation", url: "https://www.codium.ai/" },
    ],
  },
  {
    title: "AI in Build & Release",
    content: [
      "AI analyses CI/CD pipeline history to predict flaky tests, slow builds, and likely failure points.",
      "Intelligent dependency scanners cross-reference CVE databases and suggest safe upgrades automatically.",
      "Release notes and changelogs are drafted instantly from commit messages and PR descriptions.",
    ],
    resources: [
      { label: "GitHub Actions AI features", url: "https://github.com/features/actions" },
      { label: "Copilot coding agent on issues", url: "https://learn.github.com/courses/expandyourteamwithCopilotcodingagent" },
      { label: "Dependabot docs", url: "https://docs.github.com/en/code-security/dependabot" },
    ],
  },
  {
    title: "AI in Run & Monitor (AIOps)",
    content: [
      "Modern observability platforms use ML to correlate thousands of signals and surface root causes automatically.",
      "Auto-scaling policies driven by predictive models react before traffic spikes hit rather than after.",
      "AI chat interfaces let on-call engineers query logs, traces, and metrics in plain language.",
      "Self-healing runbooks trigger automated remediation when known failure patterns are detected.",
    ],
    resources: [
      { label: "Datadog AI features", url: "https://www.datadoghq.com/product/platform/ai/" },
      { label: "AWS DevOps Guru", url: "https://aws.amazon.com/devops-guru/" },
      { label: "Google Cloud AI Ops", url: "https://cloud.google.com/products/operations" },
    ],
  },
];

export default function Lesson2Page() {
  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/lessons">← All Lessons</Link>
      </div>
      <header className={styles.header}>
        <span className={styles.lessonNum}>Lesson 02</span>
        <h1>How AI is impacting the new SDLC</h1>
        <p>
          AI is not just a code-completion tool — it is reshaping every phase of the Software
          Development Life Cycle, from initial planning to production operations.
        </p>
      </header>

      {/* ── SDLC Circular Diagram ── */}
      <section className={diagramStyles.diagramSection}>
        <h2>The AI-augmented SDLC</h2>
        <p className={diagramStyles.diagramCaption}>
          Each phase of the cycle is enhanced by AI assistance. Hover a phase to see its AI impact.
        </p>
        <div className={diagramStyles.cycle}>
          {phases.map((phase) => (
            <div key={phase.id} className={diagramStyles.phaseWrapper}>
              <div className={diagramStyles.phase}>
                <span className={diagramStyles.phaseIcon}>{phase.icon}</span>
                <span className={diagramStyles.phaseLabel}>{phase.label}</span>
                <div className={diagramStyles.tooltip}>{phase.ai}</div>
              </div>
              <div className={diagramStyles.arrow}>↓</div>
            </div>
          ))}
        </div>

        {/* Build vs Run pipeline diagram */}
        <div className={diagramStyles.pipeline}>
          <div className={diagramStyles.pipelineGroup}>
            <p className={diagramStyles.pipelineGroupLabel}>BUILD (inner loop)</p>
            <div className={diagramStyles.pipelineRow}>
              {["Plan", "Code", "Test", "Build"].map((s, i) => (
                <div key={s} className={diagramStyles.pipelineBox}>
                  {i > 0 && <span className={diagramStyles.pipelineArrow}>→</span>}
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={diagramStyles.pipelineDivider}>⇓ Release</div>
          <div className={diagramStyles.pipelineGroup}>
            <p className={diagramStyles.pipelineGroupLabel}>RUN (outer loop)</p>
            <div className={diagramStyles.pipelineRow}>
              {["Deploy", "Monitor", "Incident", "Feedback"].map((s, i) => (
                <div key={s} className={diagramStyles.pipelineBox}>
                  {i > 0 && <span className={diagramStyles.pipelineArrow}>→</span>}
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed sections ── */}
      <div className={styles.body}>
        {sections.map((sec) => (
          <section key={sec.title} className={styles.section}>
            <div className={styles.sectionHead}>
              <h2>{sec.title}</h2>
            </div>
            <ul className={styles.contentList}>
              {sec.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.resources}>
              <p className={styles.resourcesLabel}>Go deeper</p>
              <div className={styles.resourceLinks}>
                {sec.resources.map((r) => (
                  <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={styles.resourceChip}>
                    {r.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className={styles.nav}>
        <Link href="/lessons/how-to-use-ai" className={styles.prevBtn}>
          ← Lesson 01
        </Link>
        <Link href="/lessons/ai-and-infrastructure" className={styles.nextBtn}>
          Lesson 03: AI &amp; Infrastructure →
        </Link>
      </div>
    </div>
  );
}
