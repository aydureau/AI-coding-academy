import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import styles from "./page.module.css";

export default function CoursesPage() {
  const levelCourses = courses.filter((c) => c.category === "level");
  const techCourses = courses.filter((c) => c.category === "technology");

  return (
    <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <h1>All Courses</h1>
      <p style={{ color: "var(--muted)" }}>
        Structured paths in AI and hands-on tracks for the tools you actually use.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Learning paths — by level</h2>
        <div className={styles.grid}>
          {levelCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technology tracks — AI native tools</h2>
        <div className={styles.grid}>
          {techCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
