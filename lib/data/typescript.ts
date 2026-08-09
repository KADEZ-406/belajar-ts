import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "TypeScript Mastery",
  description: "Learn type safety, interfaces, generics, and async programming with TypeScript.",
  icon: "📘",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Fundamentals & Setup",
      description: "Understand why TypeScript exists and how type annotations make code robust.",
      lessons: [
        {
          id: "ts_lesson_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fundamentals & Setup",
          title: "Introduction to TypeScript",
          description: "Discover what static typing is and write your first TypeScript code.",
          icon: "🚀",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "What is TypeScript?",
              content: `TypeScript is a **strongly typed superset of JavaScript** developed by Microsoft. 

Key benefits:
- **Catch errors at compile time** before running the code.
- **Auto-completion & IntelliSense** in editors.
- **Self-documenting code** with clear type annotations.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1",
                type: "true_false",
                prompt: "TypeScript code can be executed directly in web browsers without transpiling.",
                statement: "Browsers execute TypeScript natively.",
                correctAnswer: false,
                explanation: "False! TypeScript must be compiled/transpiled into standard JavaScript before browsers or Node.js can execute it.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2",
                type: "multiple_choice",
                prompt: "Which tool transpiles TypeScript code to JavaScript?",
                options: ["tsc (TypeScript Compiler)", "npm", "Python", "V8 Engine"],
                correctAnswer: 0,
                explanation: "The official TypeScript compiler command is `tsc`.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_challenge",
                prompt: "Write a console.log statement that prints 'Hello TypeScript!'",
                starterCode: `// Write your code here
console.log("Hello TypeScript!");`,
                expectedOutput: "Hello TypeScript!",
                explanation: "Great job! `console.log()` outputs message to stdout.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_lesson_2",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fundamentals & Setup",
          title: "Primitive Types & Annotations",
          description: "Learn how to annotate string, number, boolean, and array types.",
          icon: "🏷️",
          xp: 50,
          prerequisites: ["ts_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Type Annotations",
              content: `In TypeScript, you add type annotations after variable names using a colon \`:\`.

\`\`\`typescript
const username: string = "Kadez";
const level: number = 7;
const isOnline: boolean = true;
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4",
                type: "code_completion",
                prompt: "Complete the type annotation for `score`.",
                template: 'const score: _____ = 100;',
                options: ["string", "number", "boolean", "any"],
                correctAnswer: "number",
                explanation: "Numeric values like `100` must be typed as `number`.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5",
                type: "predict_output",
                prompt: "What will this TypeScript code output?",
                code: `const language: string = "TypeScript";
const score: number = 10;
console.log(language + " Level " + score);`,
                options: ["TypeScript Level 10", "TypeScript10", "TypeError", "NaN"],
                correctAnswer: "TypeScript Level 10",
                explanation: "String concatenation coerces the number into string representation.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6",
                type: "fix_code",
                prompt: "Fix the type mismatch error in this variable assignment.",
                buggyCode: `let age: number = "25";\nconsole.log(age);`,
                correctCode: `let age: number = 25;\nconsole.log(age);`,
                hint: "Change string \"25\" to numeric literal 25.",
                explanation: "TypeScript prevents assigning a string to a variable typed as number.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_2",
      title: "02 Functions & Types",
      description: "Define typed parameters, return values, arrow functions, and optional parameters.",
      lessons: [
        {
          id: "ts_lesson_3",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Functions & Types",
          title: "Typed Functions",
          description: "Specify argument types and explicit return types for functions.",
          icon: "⚙️",
          xp: 50,
          prerequisites: ["ts_lesson_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Function Signatures",
              content: `Specify parameter types inside parentheses, and the return type after the parameter list:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7",
                type: "arrange_code",
                prompt: "Arrange the code blocks to form a valid typed function `greet`.",
                codeSnippets: [
                  "function greet(name: string): string {",
                  "  return 'Hello ' + name;",
                  "}",
                  "console.log(greet('Kadez'));",
                ],
                correctOrder: [
                  "function greet(name: string): string {",
                  "  return 'Hello ' + name;",
                  "}",
                  "console.log(greet('Kadez'));",
                ],
                explanation: "Functions must be declared before calling them, returning a string value.",
                xpReward: 15,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8",
                type: "code_challenge",
                prompt: "Write a function `doubleNumber(x: number): number` that returns `x * 2`.",
                starterCode: `function doubleNumber(x: number): number {
  return x * 2;
}

console.log(doubleNumber(21));`,
                expectedOutput: "42",
                explanation: "21 * 2 equals 42!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_3",
      title: "03 Interfaces & Objects",
      description: "Model structured object schemas with interfaces and custom type aliases.",
      lessons: [
        {
          id: "ts_lesson_4",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Interfaces & Objects",
          title: "Interfaces & Type Aliases",
          description: "Create contract specifications for complex objects.",
          icon: "🏗️",
          xp: 60,
          prerequisites: ["ts_lesson_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Defining Interfaces",
              content: `Use the \`interface\` keyword to define structural types for objects:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // Optional property
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9",
                type: "multiple_choice",
                prompt: "Which symbol makes an interface property optional in TypeScript?",
                options: ["?", "!", "*", "&"],
                correctAnswer: 0,
                explanation: "The `?` modifier marks a property as optional (value can be undefined).",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
