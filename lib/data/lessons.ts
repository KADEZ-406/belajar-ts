import { LearningPath, Lesson, Language } from "../types";
import { TYPESCRIPT_PATH } from "./typescript";
import { TSX_PATH } from "./tsx";
import { PYTHON_PATH } from "./python";

export const LEARNING_PATHS: Record<Language, LearningPath> = {
  typescript: TYPESCRIPT_PATH,
  tsx: TSX_PATH,
  python: PYTHON_PATH,
};

export function getLearningPath(language: Language): LearningPath {
  return LEARNING_PATHS[language] || TYPESCRIPT_PATH;
}

export function getAllLessons(language?: Language): Lesson[] {
  if (language) {
    const path = LEARNING_PATHS[language];
    return path.sections.flatMap((sec) => sec.lessons);
  }
  return Object.values(LEARNING_PATHS).flatMap((path) =>
    path.sections.flatMap((sec) => sec.lessons)
  );
}

export function getLessonById(id: string): Lesson | undefined {
  const all = getAllLessons();
  return all.find((l) => l.id === id);
}

export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const current = getLessonById(currentLessonId);
  if (!current) return undefined;
  const lessonsInLang = getAllLessons(current.language);
  const index = lessonsInLang.findIndex((l) => l.id === currentLessonId);
  if (index !== -1 && index + 1 < lessonsInLang.length) {
    return lessonsInLang[index + 1];
  }
  return undefined;
}
