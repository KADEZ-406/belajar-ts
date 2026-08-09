import { LearningPath } from "../types";

export const TSX_PATH: LearningPath = {
  language: "tsx",
  title: "TSX & React Core",
  description: "Master React component creation, props interface design, state management, and hooks with TSX.",
  icon: "⚛️",
  sections: [
    {
      id: "tsx_sec_1",
      title: "01 JSX & Component Basics",
      description: "Understand TSX syntax, functional components, and typed props.",
      lessons: [
        {
          id: "tsx_lesson_1",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 JSX & Component Basics",
          title: "Introduction to TSX Components",
          description: "Combine HTML-like JSX markup with full TypeScript type checking.",
          icon: "⚡",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "What is TSX?",
              content: `**TSX** is TypeScript with JSX (JavaScript XML) syntax. It allows writing HTML structure inside React TypeScript files (\`.tsx\`).

\`\`\`tsx
interface BadgeProps {
  label: string;
  count: number;
}

export function Badge({ label, count }: BadgeProps) {
  return (
    <div className="badge">
      <span>{label}</span>: {count}
    </div>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1",
                type: "code_completion",
                prompt: "Complete the prop interface type definition for `ButtonProps`.",
                template: "interface ButtonProps {\n  title: ____;\n  disabled?: boolean;\n}",
                options: ["string", "number", "void", "any"],
                correctAnswer: "string",
                explanation: "Button titles are textual data typed as `string`.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2",
                type: "code_challenge",
                prompt: "Define a component render logic returning 'React TSX Ready'.",
                starterCode: `function Header() {
  const title: string = "React TSX Ready";
  return title;
}

console.log(Header());`,
                expectedOutput: "React TSX Ready",
                explanation: "Functional components evaluate JSX or primitive values.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_lesson_2",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 JSX & Component Basics",
          title: "useState with Types",
          description: "Use typed state hooks in React components.",
          icon: "🔄",
          xp: 50,
          prerequisites: ["tsx_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Typing useState Hook",
              content: `React infers state types automatically, but generics can be explicitly specified:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3",
                type: "multiple_choice",
                prompt: "How do you specify an explicit generic type for `useState`?",
                options: [
                  "useState<number>(0)",
                  "useState(0): number",
                  "useState[number](0)",
                  "useState.type(number)",
                ],
                correctAnswer: 0,
                explanation: "Generics use angle bracket syntax `<Type>` in TypeScript.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
