import Link from "next/link";
import type { Course } from "@/data/courses";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.meta}>
          {course.brand ? (
            <span className={styles.brand}>{course.brand}</span>
          ) : (
            <span>{course.level}</span>
          )}
          <span>{course.duration}</span>
        </div>
        <h3>{course.title}</h3>
        <p>{course.summary}</p>
        <div className={styles.tags}>
          {course.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <span className={styles.cta}>View course →</span>
      </article>
    </Link>
  );
}
