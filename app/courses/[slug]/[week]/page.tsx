import { notFound } from "next/navigation";
import Link from "next/link";
import { weekPages } from "@/data/weekPages";
import styles from "./page.module.css";

type WeekPageProps = {
  params: Promise<{ slug: string; week: string }>;
};

export default async function WeekPage({ params }: WeekPageProps) {
  const { slug, week } = await params;
  const key = `${slug}/${week}`;
  const page = weekPages[key];

  if (!page) notFound();

  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/courses">All Courses</Link>
        <span> / </span>
        <Link href={`/courses/${slug}`}>{page.courseTitle}</Link>
        <span> / </span>
        <span>{page.weekLabel}</span>
      </div>

      <header className={styles.header}>
        <span className={styles.weekPill}>{page.weekLabel}</span>
        <h1>{page.title}</h1>
        <p className={styles.intro}>{page.intro}</p>
      </header>

      <div className={styles.body}>
        {page.sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNum}>{section.step}</span>
              <div>
                <h2>{section.title}</h2>
                <p className={styles.sectionSub}>{section.subtitle}</p>
              </div>
            </div>

            {section.video ? (
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${section.video.youtubeId}`}
                  title={section.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className={styles.videoCaption}>{section.video.title}</p>
              </div>
            ) : null}

            <div className={styles.steps}>
              {section.steps.map((step, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepBullet}>{i + 1}</div>
                  <div className={styles.stepContent}>
                    <strong>{step.label}</strong>
                    <p>{step.detail}</p>
                    {step.tip ? (
                      <div className={styles.tip}>
                        <span>💡 Tip</span> {step.tip}
                      </div>
                    ) : null}
                    {step.screenshot ? (
                      <div className={styles.screenshot}>
                        <div className={styles.screenshotBar}>
                          <span /><span /><span />
                          <span className={styles.screenshotUrl}>github.com</span>
                        </div>
                        <div className={styles.screenshotContent}>
                          {step.screenshot}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {section.resources && section.resources.length > 0 ? (
              <div className={styles.resources}>
                <p className={styles.resourcesLabel}>Official docs & videos</p>
                <div className={styles.resourceChips}>
                  {section.resources.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.chip} ${r.type === "video" ? styles.chipVideo : ""}`}
                    >
                      {r.type === "video" ? "▶ " : "📄 "}
                      {r.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}

        <div className={styles.navRow}>
          <Link href={`/courses/${slug}`} className={styles.backBtn}>← Back to course</Link>
          <Link href="/practice" className={styles.practiceBtn}>Go to Practice Lab →</Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(weekPages).map((key) => {
    const [slug, week] = key.split("/");
    return { slug, week };
  });
}
