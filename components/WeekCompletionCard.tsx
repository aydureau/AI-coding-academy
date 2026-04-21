"use client";

import { useState } from "react";
import { usePoints } from "@/components/PointsProvider";
import styles from "./WeekCompletionCard.module.css";

type WeekCompletionCardProps = {
  weekKey: string;
  weekLabel: string;
};

export function WeekCompletionCard({ weekKey, weekLabel }: WeekCompletionCardProps) {
  const { isWeekCompleted, awardWeekCompletion } = usePoints();
  const [showFlash, setShowFlash] = useState(false);

  const completed = isWeekCompleted(weekKey);

  function completeWeek() {
    const awarded = awardWeekCompletion(weekKey);

    if (awarded) {
      setShowFlash(true);
      window.setTimeout(() => setShowFlash(false), 1600);
    }
  }

  return (
    <aside className={styles.card}>
      <div>
        <p className={styles.label}>Mission</p>
        <h3>Finish {weekLabel}</h3>
        <p className={styles.text}>
          Mark this chapter as completed to earn <strong>+50 points</strong>.
        </p>
      </div>

      <button
        type="button"
        onClick={completeWeek}
        className={completed ? styles.doneBtn : styles.claimBtn}
        disabled={completed}
      >
        {completed ? "Completed" : "Complete & Claim +50"}
      </button>

      {showFlash ? <p className={styles.flash}>Great job! +50 points unlocked.</p> : null}
    </aside>
  );
}
