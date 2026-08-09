import { LearningPath } from "../types";

export const TSX_PATH: LearningPath = {
  language: "tsx",
  title: "Inti TSX dan React",
  description: "Kuasai pembuatan komponen React, antarmuka props, pengelolaan state, dan hooks dengan TSX.",
  icon: "atom",
  sections: [
    {
      id: "tsx_sec_1",
      title: "01 Komponen dan Sintaks JSX",
      description: "Pahami sintaks TSX, komponen fungsi, dan tipe data props.",
      lessons: [
        {
          id: "tsx_lesson_1",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Komponen dan Sintaks JSX",
          title: "Pengenalan Komponen TSX",
          description: "Gabungkan sintaks tampilan JSX dengan pemeriksaan tipe data TypeScript.",
          icon: "zap",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu TSX?",
              content: `TSX adalah TypeScript yang dilengkapi sintaks JSX. TSX memungkinkan penulisan elemen tampilan di dalam berkas TypeScript (.tsx).

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
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1",
                type: "code_completion",
                prompt: "Lengkapi tipe data antarmuka props untuk ButtonProps.",
                template: "interface ButtonProps {\n  judul: ____;\n  nonaktif?: boolean;\n}",
                options: ["string", "number", "void", "any"],
                correctAnswer: "string",
                explanation: "Judul tombol menggunakan tipe data string.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2",
                type: "code_challenge",
                prompt: "Buat fungsi komponen yang mengembalikan teks 'React TSX Siap'.",
                starterCode: `function Header() {
  // Tulis kode kamu di sini untuk mengembalikan "React TSX Siap"
  return "";
}

console.log(Header());`,
                expectedOutput: "React TSX Siap",
                explanation: "Komponen fungsi mengembalikan elemen tampilan atau teks.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_lesson_2",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Komponen dan Sintaks JSX",
          title: "useState Bertipe",
          description: "Gunakan hook pengelolaan state bertipe data pada komponen React.",
          icon: "repeat",
          xp: 50,
          prerequisites: ["tsx_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data pada Hook useState",
              content: `React dapat mengenali tipe data state secara otomatis, namun tipe generik juga dapat ditentukan secara eksplisit:

const [jumlah, setJumlah] = useState<number>(0);
const [pengguna, setPengguna] = useState<User | null>(null);`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3",
                type: "multiple_choice",
                prompt: "Bagaimana cara menentukan tipe data eksplisit pada useState?",
                options: [
                  "useState<number>(0)",
                  "useState(0): number",
                  "useState[number](0)",
                  "useState.type(number)",
                ],
                correctAnswer: 0,
                explanation: "Tipe data generik menggunakan tanda kurung siku siku <Tipe>.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
