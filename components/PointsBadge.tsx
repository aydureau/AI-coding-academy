"use client";

import { usePoints } from "@/components/PointsProvider";
import styles from "./PointsBadge.module.css";

export function PointsBadge() {
  const { points, level, pointsToNextLevel } = usePoints();

  return (
    <div className={styles.badge} aria-live="polite">
      <span className={styles.level}>Lvl {level}</span>
      <span className={styles.points}>{points} pts</span>
      <span className={styles.next}>{pointsToNextLevel} to next level</span>
    </div>
  );
}
