export interface LevelInfo {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
}

export const LEVEL_DEFINITIONS: LevelInfo[] = [
  { level: 1, title: "Beginner", minXP: 0, maxXP: 250 },
  { level: 2, title: "Novice", minXP: 250, maxXP: 600 },
  { level: 3, title: "Coder", minXP: 600, maxXP: 1100 },
  { level: 4, title: "Developer", minXP: 1100, maxXP: 1800 },
  { level: 5, title: "Builder", minXP: 1800, maxXP: 2600 },
  { level: 6, title: "Advanced", minXP: 2600, maxXP: 3600 },
  { level: 7, title: "Expert", minXP: 3600, maxXP: 5000 },
  { level: 8, title: "Master", minXP: 5000, maxXP: 7000 },
  { level: 9, title: "Architect", minXP: 7000, maxXP: 10000 },
  { level: 10, title: "Grandmaster", minXP: 10000, maxXP: 15000 },
];

export function getLevelInfo(totalXP: number): LevelInfo {
  for (let i = LEVEL_DEFINITIONS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_DEFINITIONS[i].minXP) {
      return LEVEL_DEFINITIONS[i];
    }
  }
  return LEVEL_DEFINITIONS[0];
}

export function calculateLevelProgress(totalXP: number): {
  level: number;
  title: string;
  currentXP: number;
  xpInLevel: number;
  xpNeededForLevel: number;
  percentage: number;
} {
  const currentLevelInfo = getLevelInfo(totalXP);
  const xpInLevel = totalXP - currentLevelInfo.minXP;
  const xpNeededForLevel = currentLevelInfo.maxXP - currentLevelInfo.minXP;
  const percentage = Math.min(100, Math.max(0, Math.floor((xpInLevel / xpNeededForLevel) * 100)));

  return {
    level: currentLevelInfo.level,
    title: currentLevelInfo.title,
    currentXP: totalXP,
    xpInLevel,
    xpNeededForLevel,
    percentage,
  };
}
