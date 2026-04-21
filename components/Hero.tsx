import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>Train for real-world projects</p>
            <h1 className={styles.title}>Master AI and Coding Through Guided Practice</h1>
            <p className={styles.text}>
              Learn by building portfolio-ready apps, from prompt engineering to fullstack AI
              products.
            </p>
            <div className={styles.actions}>
              <Link href="/courses" className={styles.primary}>
                Browse Courses
              </Link>
              <Link href="/lessons" className={styles.secondary}>
                Explore Lessons
              </Link>
            </div>
          </div>
          <aside className={styles.panel}>
            <h2>What you get</h2>
            <ul>
              <li>Project-based curriculum</li>
              <li>Weekly coding challenges</li>
              <li>AI tools and coding workflows</li>
              <li>Career-focused capstone</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
