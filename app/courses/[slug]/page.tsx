import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import styles from "./page.module.css";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

const courseContent: Record<
  string,
  {
    intro: string;
    modules: { week: string; topic: string; outline: string[]; weekSlug?: string }[];
    outcomes: string[];
    resources?: { label: string; url: string; note: string }[];
  }
> = {
  "ai-basics": {
    intro:
      "Start from zero and build an accurate mental model of how AI works. You will understand the key concepts, learn to write effective prompts, and complete small projects with AI tools.",
    modules: [
      {
        week: "Week 1",
        topic: "How AI really works",
        outline: [
          "What is a language model?",
          "Training vs inference",
          "Tokens and context windows",
        ],
      },
      {
        week: "Week 2",
        topic: "Prompt Engineering",
        outline: [
          "Writing clear instructions",
          "Role, context, and constraints",
          "Iterating on outputs",
        ],
      },
      {
        week: "Week 3",
        topic: "AI in a coding workflow",
        outline: [
          "Code generation and review",
          "Debugging with AI assistance",
          "When not to trust the model",
        ],
      },
      {
        week: "Week 4",
        topic: "Evaluating AI outputs",
        outline: [
          "Quality metrics for text",
          "Spotting hallucinations",
          "Building a simple evaluation checklist",
        ],
      },
    ],
    outcomes: [
      "Understand how LLMs generate text",
      "Write reliable prompts for any task",
      "Evaluate AI output quality",
      "Build a small AI-assisted project",
    ],
  },
  "ai-in-practice": {
    intro:
      "Move from concepts to real automation. You will connect AI to APIs, build multi-step pipelines, and automate repetitive tasks using AI tools in real workflows.",
    modules: [
      {
        week: "Week 1",
        topic: "Connecting to AI APIs",
        outline: ["REST vs streaming APIs", "Authentication and rate limits", "Parsing AI responses"],
      },
      {
        week: "Week 2",
        topic: "Automating with AI",
        outline: [
          "Chaining prompts together",
          "Summarization pipelines",
          "Classification and routing",
        ],
      },
      {
        week: "Week 3",
        topic: "AI + Data workflows",
        outline: [
          "Working with structured data",
          "Generating reports from data",
          "Validating AI-generated content",
        ],
      },
      {
        week: "Week 4",
        topic: "Building a mini product",
        outline: [
          "Designing a simple AI feature",
          "User-facing error handling",
          "Testing AI pipeline outputs",
        ],
      },
      {
        week: "Week 5",
        topic: "Reliability and safety",
        outline: [
          "Prompt injection risks",
          "Output filtering strategies",
          "Graceful fallbacks",
        ],
      },
      {
        week: "Week 6",
        topic: "Capstone project",
        outline: [
          "End-to-end automation project",
          "Peer review and feedback",
          "Iteration and polish",
        ],
      },
    ],
    outcomes: [
      "Integrate AI into real workflows with APIs",
      "Build multi-step AI automation pipelines",
      "Handle edge cases and failures safely",
      "Ship a working AI-powered mini product",
    ],
  },
  "ai-product-builder": {
    intro:
      "Design, build, and deploy AI-powered products from scratch. Covers architecture decisions, retrieval-augmented generation, user experience for AI features, and production deployment.",
    modules: [
      {
        week: "Week 1",
        topic: "AI product architecture",
        outline: [
          "System design for AI products",
          "Choosing the right model",
          "Cost and latency trade-offs",
        ],
      },
      {
        week: "Week 2",
        topic: "RAG — Retrieval-Augmented Generation",
        outline: [
          "Vector databases basics",
          "Chunking and embedding documents",
          "Building a knowledge-based assistant",
        ],
      },
      {
        week: "Week 3",
        topic: "UX for AI features",
        outline: [
          "Streaming responses to users",
          "Progress indicators and skeleton states",
          "Communicating uncertainty to users",
        ],
      },
      {
        week: "Week 4",
        topic: "Evaluation loops",
        outline: [
          "Automated evals and regression testing",
          "Human-in-the-loop feedback",
          "Logging and monitoring AI outputs",
        ],
      },
      {
        week: "Week 5",
        topic: "Deployment and scaling",
        outline: [
          "Containerising an AI service",
          "Environment management",
          "Cost monitoring in production",
        ],
      },
      {
        week: "Week 6",
        topic: "Security and guardrails",
        outline: [
          "Prompt injection defence",
          "Content moderation layers",
          "Compliance considerations",
        ],
      },
      {
        week: "Week 7",
        topic: "Advanced patterns",
        outline: [
          "Agents and tool use",
          "Multi-model routing",
          "Fine-tuning vs prompting",
        ],
      },
      {
        week: "Week 8",
        topic: "Capstone — ship your product",
        outline: [
          "Final project build",
          "Code review and feedback",
          "Demo and retrospective",
        ],
      },
    ],
    outcomes: [
      "Architect scalable AI-powered products",
      "Build and deploy a RAG system",
      "Create reliable evaluation and monitoring",
      "Ship a production-ready AI feature",
    ],
  },
  "github-copilot-track": {
    intro:
      "Become a power user of GitHub Copilot. Based on the official GitHub Learning Hub and awesome-copilot resources, this track walks you through every customization primitive — from agents and skills to MCP servers and the Copilot CLI — so you can delegate real work to Copilot confidently.",
    modules: [
      {
        week: "Week 1",
        topic: "Fundamentals & configuration",
        weekSlug: "week-1",
        outline: [
          "What are Agents, Skills, and Instructions?",
          "Understanding Copilot context",
          "Copilot configuration basics",
          "Defining custom instructions",
        ],
      },
      {
        week: "Week 2",
        topic: "Customization & agents",
        weekSlug: "week-2",
        outline: [
          "Creating effective skills",
          "Building custom agents",
          "Agents and subagents patterns",
          "Understanding MCP servers",
        ],
      },
      {
        week: "Week 3",
        topic: "Advanced workflows & CLI",
        outline: [
          "Agentic workflows end-to-end",
          "Using the Copilot coding agent on issues",
          "Automating with hooks",
          "Copilot CLI: context, conversations, and MCP",
        ],
      },
    ],
    outcomes: [
      "Configure Copilot with custom instructions and skills",
      "Build and publish custom agents",
      "Integrate MCP servers into your workflow",
      "Use Copilot CLI to automate development tasks",
      "Delegate multi-file agentic tasks safely",
    ],
    resources: [
      {
        label: "Awesome Copilot — Learning Hub",
        url: "https://awesome-copilot.github.com/learning-hub/",
        note: "Official community learning hub: fundamentals, cookbook, CLI track",
      },
      {
        label: "GitHub Learn",
        url: "https://learn.github.com/",
        note: "Curated courses, interactive exercises, and GitHub certifications",
      },
      {
        label: "Accelerate dev with Copilot (6h course)",
        url: "https://learn.github.com/courses/accelerateappdevelopmentbyusingGitHubCopilot",
        note: "Intermediate · 6h 38m — VS Code + Copilot Chat in depth",
      },
      {
        label: "Integrate MCP with GitHub Copilot",
        url: "https://learn.github.com/courses/integrateMCPwithGitHubCopilot",
        note: "Beginner · 1h — MCP basics and Copilot Agent Mode",
      },
      {
        label: "Expand your team with Copilot coding agent",
        url: "https://learn.github.com/courses/expandyourteamwithCopilotcodingagent",
        note: "Beginner · 1h — delegate issues directly on GitHub",
      },
    ],
  },
  "claude-track": {
    intro:
      "Learn to build reliable, nuanced AI features using Anthropic's Claude API. This track covers system prompt design, multi-turn conversations, tool use, and Constitutional AI safety patterns — Claude's key differentiators.",
    modules: [
      {
        week: "Week 1",
        topic: "Claude API essentials",
        outline: [
          "Authentication and API structure",
          "Messages API: roles, turns, content blocks",
          "System prompts and persona design",
          "Streaming responses",
        ],
      },
      {
        week: "Week 2",
        topic: "Advanced prompting with Claude",
        outline: [
          "XML tags for structured outputs",
          "Extended thinking mode",
          "Handling 200k-token context windows",
          "Chain-of-thought patterns",
        ],
      },
      {
        week: "Week 3",
        topic: "Tool use, safety, and shipping",
        outline: [
          "Defining and calling tools",
          "Constitutional AI and refusal handling",
          "Building a safe, production-ready chatbot",
          "Testing and evaluating Claude outputs",
        ],
      },
    ],
    outcomes: [
      "Call the Claude API with well-structured prompts",
      "Use XML formatting for reliable structured outputs",
      "Implement multi-turn conversations with tool use",
      "Apply safety patterns and handle refusals gracefully",
      "Ship a tested Claude-powered feature",
    ],
    resources: [
      {
        label: "Anthropic Documentation",
        url: "https://docs.anthropic.com/",
        note: "Official API reference, guides, and model overview",
      },
      {
        label: "Anthropic Cookbook",
        url: "https://github.com/anthropics/anthropic-cookbook",
        note: "Practical code samples for common Claude use cases",
      },
      {
        label: "Claude Prompt Library",
        url: "https://docs.anthropic.com/en/prompt-library/library",
        note: "Ready-to-use prompt templates for production scenarios",
      },
    ],
  },
  "openai-track": {
    intro:
      "Master the full OpenAI API surface: chat completions, function calling, streaming, the Assistants API with file search and code interpreter, vision, and embeddings. Build real features step by step.",
    modules: [
      {
        week: "Week 1",
        topic: "Chat completions & function calling",
        outline: [
          "Chat completions API in depth",
          "Defining tools and parsing structured responses",
          "Streaming tokens to the UI",
          "Handling errors and retries",
        ],
      },
      {
        week: "Week 2",
        topic: "Assistants API",
        outline: [
          "Creating and configuring assistants",
          "Threads, runs, and messages lifecycle",
          "File search and vector stores",
          "Code interpreter in practice",
        ],
      },
      {
        week: "Week 3",
        topic: "Vision, embeddings & fine-tuning",
        outline: [
          "Sending images with GPT-4.1 vision",
          "Embeddings for semantic search and RAG",
          "When and how to fine-tune a model",
          "Cost and latency optimisation",
        ],
      },
    ],
    outcomes: [
      "Use chat completions and function calling confidently",
      "Build a working Assistants API integration",
      "Implement vision and semantic search features",
      "Choose between prompting, RAG, and fine-tuning",
      "Optimise for cost and latency in production",
    ],
    resources: [
      {
        label: "OpenAI Platform Documentation",
        url: "https://platform.openai.com/docs",
        note: "Full API reference, guides, and model details",
      },
      {
        label: "OpenAI Cookbook",
        url: "https://cookbook.openai.com/",
        note: "Practical examples and best-practice recipes",
      },
      {
        label: "OpenAI Playground",
        url: "https://platform.openai.com/playground",
        note: "Experiment with models and prompts interactively",
      },
    ],
  },
};

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const content = courseContent[slug];

  if (!course || !content) notFound();

  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/courses">← All Courses</Link>
      </div>

      <header className={styles.header}>
        <div className={styles.badges}>
          {course.brand ? (
            <span className={styles.brandBadge}>{course.brand}</span>
          ) : null}
          <span className={styles.level}>{course.level}</span>
          <span className={styles.duration}>{course.duration}</span>
        </div>
        <h1>{course.title}</h1>
        <p className={styles.intro}>{content.intro}</p>
        <div className={styles.skills}>
          {course.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.modules}>
          <h2>Course Modules</h2>
          <div className={styles.moduleGrid}>
            {content.modules.map((mod) => {
              const card = (
                <article className={`${styles.moduleCard}${mod.weekSlug ? ` ${styles.moduleCardClickable}` : ""}`}>
                  <p className={styles.weekLabel}>{mod.week}</p>
                  <h3>{mod.topic}</h3>
                  <ul>
                    {mod.outline.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {mod.weekSlug ? <span className={styles.moduleCardCta}>Open guide →</span> : null}
                </article>
              );
              return mod.weekSlug ? (
                <Link key={mod.week} href={`/courses/${slug}/${mod.weekSlug}`}>{card}</Link>
              ) : (
                <div key={mod.week}>{card}</div>
              );
            })}
          </div>
        </section>

        <aside className={styles.outcomes}>
          <h2>What you will be able to do</h2>
          <ul>
            {content.outcomes.map((outcome) => (
              <li key={outcome}>
                <span className={styles.check}>✓</span> {outcome}
              </li>
            ))}
          </ul>
          <Link href="/practice" className={styles.ctaButton}>
            Start practising →
          </Link>
        </aside>

        {content.resources && content.resources.length > 0 ? (
          <section className={styles.resources}>
            <h2>Official Resources</h2>
            <ul className={styles.resourceList}>
              {content.resources.map((res) => (
                <li key={res.url}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                    {res.label} ↗
                  </a>
                  <p>{res.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}
