import { InteractiveExercises } from "@/components/InteractiveExercises";
import { AuthGate } from "@/components/AuthGate";
import { courses } from "@/data/courses";

export default function PracticePage() {
  const aiBasics = courses.find((course) => course.slug === "ai-basics");

  return (
    <AuthGate>
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h1>Practice Lab</h1>
        <p style={{ color: "var(--muted)" }}>
          Hands-on coding challenges, by language. Pick a skill, write code, and level up.
        </p>
        {aiBasics?.exercises ? (
          <InteractiveExercises title={aiBasics.title} exercises={aiBasics.exercises} />
        ) : null}
      </section>
    </AuthGate>
  );
}
