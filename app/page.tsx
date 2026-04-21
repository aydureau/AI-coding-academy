import { CourseCard } from "@/components/CourseCard";
import { Hero } from "@/components/Hero";
import { courses } from "@/data/courses";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container">
        <div className={styles.headingRow}>
          <h2>Featured Courses</h2>
          <p>Start with a path that fits your level and learning goals.</p>
        </div>
        <div className={styles.grid}>
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
