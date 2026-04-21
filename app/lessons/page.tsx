import Link from "next/link";
import styles from "./page.module.css";

const lessons = [
  {
    number: "01",
    slug: "how-to-use-ai",
    title: "How to use AI in AI",
    summary:
      "A practical roadmap for integrating AI tools into your daily coding and learning workflow — from prompt fundamentals to evaluation.",
    topics: ["AI Foundations", "Prompt Engineering", "Coding with AI", "Evaluation & Iteration"],
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    number: "02",
    slug: "ai-and-sdlc",
    title: "How AI is impacting the new SDLC",
    summary:
      "Understand how AI is reshaping every phase of the Software Development Life Cycle — from planning and coding to build, test, deploy, and run.",
    topics: ["AI in planning", "Code generation", "CI/CD automation", "Monitoring & ops"],
    duration: "3 weeks",
    level: "Intermediate",
  },
  {
    number: "03",
    slug: "ai-and-infrastructure",
    title: "Impact of AI on infrastructure services",
    summary:
      "Explore how AI is transforming cloud infrastructure, cost management, security, observability, and platform engineering.",
    topics: ["Cloud & AI", "FinOps with AI", "AI-driven security", "Intelligent observability"],
    duration: "3 weeks",
    level: "Intermediate",
  },
];

export default function LessonsPage() {
  return (
    <section className="container">
      <div className={styles.hero}>
        <h1>Lessons</h1>
        <p>Three structured learning tracks — pick the one that matches where you are right now.</p>
      </div>
      <div className={styles.grid}>
        {lessons.map((lesson) => (
          <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className={styles.card}>
            <span className={styles.number}>{lesson.number}</span>
            <div className={styles.meta}>
              <span>{lesson.level}</span>
              <span>{lesson.duration}</span>
            </div>
            <h2>{lesson.title}</h2>
            <p>{lesson.summary}</p>
            <ul className={styles.topics}>
              {lesson.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className={styles.cta}>Start lesson →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
