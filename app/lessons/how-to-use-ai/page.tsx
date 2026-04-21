import Link from "next/link";
import styles from "../lesson.module.css";

const weeks = [
  {
    week: "Week 1",
    topic: "AI Foundations",
    outcome: "Understand model types and key terminology.",
    content: [
      "What is a Large Language Model and how does it generate text?",
      "Tokens, context windows, and temperature explained",
      "Comparison: GPT-4.1, Claude 3.7, Gemini 2.5 — when to use which",
      "The difference between AI assistants, agents, and copilots",
    ],
    resources: [
      { label: "How LLMs work — Andrej Karpathy", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
      { label: "OpenAI Models overview", url: "https://platform.openai.com/docs/models" },
      { label: "Anthropic model docs", url: "https://docs.anthropic.com/en/docs/about-claude/models/overview" },
    ],
  },
  {
    week: "Week 2",
    topic: "Prompt Engineering",
    outcome: "Write reliable prompts for coding tasks.",
    content: [
      "The anatomy of a good prompt: role, context, task, constraints, format",
      "Zero-shot vs few-shot vs chain-of-thought prompting",
      "System prompts vs user prompts — how to use both",
      "Common failure modes and how to fix them",
    ],
    resources: [
      { label: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
      { label: "Anthropic Prompt Library", url: "https://docs.anthropic.com/en/prompt-library/library" },
      { label: "OpenAI Prompt Engineering guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
  },
  {
    week: "Week 3",
    topic: "Coding with AI",
    outcome: "Build a mini app with an AI-assisted workflow.",
    content: [
      "Using AI for code generation, refactoring, and explanation",
      "GitHub Copilot in the editor: tab completion, inline chat, agent mode",
      "When to trust the model and when to review carefully",
      "Hands-on: build a simple AI-powered tool end-to-end",
    ],
    resources: [
      { label: "GitHub Copilot docs", url: "https://docs.github.com/en/copilot" },
      { label: "Awesome Copilot Learning Hub", url: "https://awesome-copilot.github.com/learning-hub/" },
      { label: "GitHub Skills", url: "https://learn.github.com/skills" },
    ],
  },
  {
    week: "Week 4",
    topic: "Evaluation & Iteration",
    outcome: "Measure quality and improve outputs.",
    content: [
      "How to evaluate AI outputs: correctness, relevance, safety",
      "Building a simple eval checklist for your use case",
      "Spotting hallucinations and handling them gracefully",
      "Iterating on prompts and measuring improvement",
    ],
    resources: [
      { label: "Evals — OpenAI guide", url: "https://platform.openai.com/docs/guides/evals" },
      { label: "Anthropic evaluations overview", url: "https://docs.anthropic.com/en/docs/test-and-evaluate/eval-intro" },
      { label: "RAGAS — evaluation framework", url: "https://github.com/explodinggradients/ragas" },
    ],
  },
];

export default function Lesson1Page() {
  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/lessons">← All Lessons</Link>
      </div>
      <header className={styles.header}>
        <span className={styles.lessonNum}>Lesson 01</span>
        <h1>How to use AI in AI</h1>
        <p>A practical 4-week roadmap to integrate AI into your coding and learning workflow.</p>
      </header>

      <div className={styles.body}>
        {weeks.map((w) => (
          <section key={w.week} className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.weekBadge}>{w.week}</span>
              <h2>{w.topic}</h2>
              <p className={styles.outcome}>{w.outcome}</p>
            </div>
            <ul className={styles.contentList}>
              {w.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.resources}>
              <p className={styles.resourcesLabel}>Go deeper</p>
              <div className={styles.resourceLinks}>
                {w.resources.map((r) => (
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
        <span />
        <Link href="/lessons/ai-and-sdlc" className={styles.nextBtn}>
          Lesson 02: AI &amp; the new SDLC →
        </Link>
      </div>
    </div>
  );
}
