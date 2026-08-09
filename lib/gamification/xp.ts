export const XP_REWARDS = {
  CORRECT_ANSWER: 5,
  CODE_CHALLENGE: 15,
  LESSON_COMPLETED: 30,
  PERFECT_LESSON: 20,
  DAILY_GOAL: 50,
  PRACTICE_CHALLENGE_EASY: 10,
  PRACTICE_CHALLENGE_MEDIUM: 20,
  PRACTICE_CHALLENGE_HARD: 35,
} as const;

export function formatXP(xp: number): string {
  return xp.toLocaleString();
}
