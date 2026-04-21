"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ProgressState = {
  points: number;
  completedWeeks: Record<string, true>;
  solvedExercises: Record<string, true>;
};

type PointsContextValue = ProgressState & {
  level: number;
  pointsToNextLevel: number;
  awardWeekCompletion: (weekKey: string) => boolean;
  awardExerciseCompletion: (exerciseId: string) => boolean;
  isWeekCompleted: (weekKey: string) => boolean;
  isExerciseSolved: (exerciseId: string) => boolean;
};

const STORAGE_KEY = "academy-gamification-v1";
const WEEK_POINTS = 50;
const EXERCISE_POINTS = 10;
const POINTS_PER_LEVEL = 100;

const defaultState: ProgressState = {
  points: 0,
  completedWeeks: {},
  solvedExercises: {},
};

const PointsContext = createContext<PointsContextValue | null>(null);

function getLevel(points: number) {
  return Math.floor(points / POINTS_PER_LEVEL) + 1;
}

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as ProgressState;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState({
        points: parsed.points ?? 0,
        completedWeeks: parsed.completedWeeks ?? {},
        solvedExercises: parsed.solvedExercises ?? {},
      });
    } catch {
      setState(defaultState);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<PointsContextValue>(() => {
    const level = getLevel(state.points);
    const nextThreshold = level * POINTS_PER_LEVEL;

    return {
      ...state,
      level,
      pointsToNextLevel: Math.max(0, nextThreshold - state.points),
      awardWeekCompletion: (weekKey) => {
        if (state.completedWeeks[weekKey]) return false;

        setState((prev) => ({
          ...prev,
          points: prev.points + WEEK_POINTS,
          completedWeeks: { ...prev.completedWeeks, [weekKey]: true },
        }));

        return true;
      },
      awardExerciseCompletion: (exerciseId) => {
        if (state.solvedExercises[exerciseId]) return false;

        setState((prev) => ({
          ...prev,
          points: prev.points + EXERCISE_POINTS,
          solvedExercises: { ...prev.solvedExercises, [exerciseId]: true },
        }));

        return true;
      },
      isWeekCompleted: (weekKey) => Boolean(state.completedWeeks[weekKey]),
      isExerciseSolved: (exerciseId) => Boolean(state.solvedExercises[exerciseId]),
    };
  }, [state]);

  return <PointsContext.Provider value={value}>{children}</PointsContext.Provider>;
}

export function usePoints() {
  const ctx = useContext(PointsContext);

  if (!ctx) {
    throw new Error("usePoints must be used inside PointsProvider");
  }

  return ctx;
}
