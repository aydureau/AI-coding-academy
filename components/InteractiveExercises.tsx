"use client";

import { useMemo, useState } from "react";
import type { LanguageExercise } from "@/data/courses";
import { usePoints } from "@/components/PointsProvider";
import styles from "./InteractiveExercises.module.css";

type InteractiveExercisesProps = {
  title: string;
  exercises: LanguageExercise[];
};

export function InteractiveExercises({ title, exercises }: InteractiveExercisesProps) {
  const [activeLangIndex, setActiveLangIndex] = useState(0);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"idle" | "correct" | "retry" | "already">("idle");
  const { solvedExercises, awardExerciseCompletion, isExerciseSolved } = usePoints();

  const activeLanguage = exercises[activeLangIndex];
  const activeExercise = activeLanguage.items[activeExerciseIndex];

  const progress = useMemo(() => {
    const total = exercises.reduce((sum, ex) => sum + ex.items.length, 0);
    const solved = exercises
      .flatMap((group) => group.items)
      .filter((item) => Boolean(solvedExercises[item.id])).length;

    return `${solved}/${total}`;
  }, [exercises, solvedExercises]);

  function evaluateAnswer() {
    const normalized = answer.trim().toLowerCase();
    const isMatch = activeExercise.expectedAnswers.some((candidate) =>
      normalized.includes(candidate.toLowerCase()),
    );

    if (isMatch) {
      if (isExerciseSolved(activeExercise.id)) {
        setResult("already");
        return;
      }

      awardExerciseCompletion(activeExercise.id);
      setResult("correct");
      return;
    }

    setResult("retry");
  }

  function nextExercise() {
    setAnswer("");
    setResult("idle");

    if (activeExerciseIndex < activeLanguage.items.length - 1) {
      setActiveExerciseIndex((prev) => prev + 1);
      return;
    }

    const nextLanguage = (activeLangIndex + 1) % exercises.length;
    setActiveLangIndex(nextLanguage);
    setActiveExerciseIndex(0);
  }

  function onSelectLanguage(index: number) {
    setActiveLangIndex(index);
    setActiveExerciseIndex(0);
    setAnswer("");
    setResult("idle");
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{title} Interactive Lab</h2>
        <p>
          Practice by language, test your answer, and level up your score. Progress: <strong>{progress}</strong>
        </p>
      </div>

      <div className={styles.tabRow}>
        {exercises.map((group, index) => (
          <button
            key={group.language}
            type="button"
            onClick={() => onSelectLanguage(index)}
            className={index === activeLangIndex ? styles.tabActive : styles.tab}
          >
            <span>{group.emoji}</span> {group.language}
          </button>
        ))}
      </div>

      <article className={styles.panel}>
        <p className={styles.description}>{activeLanguage.description}</p>
        <h3>{activeExercise.title}</h3>
        <p>{activeExercise.prompt}</p>

        <pre className={styles.code}>{activeExercise.starterCode}</pre>

        <label className={styles.label} htmlFor="answer-box">
          Your answer
        </label>
        <textarea
          id="answer-box"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          rows={6}
          className={styles.textarea}
          placeholder="Type your code or snippet here..."
        />

        <div className={styles.actions}>
          <button type="button" className={styles.primary} onClick={evaluateAnswer}>
            Check Answer
          </button>
          <button type="button" className={styles.secondary} onClick={nextExercise}>
            Next Challenge
          </button>
        </div>

        {result === "correct" && <p className={styles.correct}>Nice! Correct direction. +1 point</p>}
        {result === "already" && <p className={styles.already}>Challenge already solved. Try the next one.</p>}
        {result === "retry" && (
          <div className={styles.retry}>
            <p>Almost there. Try using one of these hints:</p>
            <ul>
              {activeExercise.solutionHints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </section>
  );
}
