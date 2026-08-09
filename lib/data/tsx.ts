import { LearningPath } from "../types";

export const TSX_PATH: LearningPath = {
  language: "tsx",
  title: "Inti TSX dan React",
  description: "Bikin komponen React yang aman dengan Props interface, State bertipe, dan Hooks di TSX.",
  icon: "atom",
  sections: [
    {
      id: "tsx_sec_1",
      title: "01 Komponen dan Sintaks JSX",
      description: "Yuk kuasai komponen fungsi React dan penulisan Props di TSX.",
      lessons: [
        {
          id: "tsx_lesson_1",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Komponen dan Sintaks JSX",
          title: "Pengenalan Komponen TSX",
          description: "Gabungkan tampilan JSX dengan kemudahan tipe data TypeScript.",
          icon: "zap",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu TSX?",
              content: `TSX adalah gabungan antara TypeScript dan sintaks JSX. Di TSX, kita bisa nulis komponen React lengkap dengan Props interface biar kodenya makin rapi dan aman!

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
                prompt: "Lengkapi tipe data untuk properti 'judul' di Props ButtonProps.",
                conceptGuide: "Di React TSX, properti berupa teks (seperti judul tombol atau label) selalu menggunakan tipe data `string`.",
                template: "interface ButtonProps {\n  judul: ____;\n  nonaktif?: boolean;\n}",
                options: ["string", "number", "void", "any"],
                correctAnswer: "string",
                explanation: "Mantap! Properti teks seperti judul tombol selalu bertipe string.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2",
                type: "code_challenge",
                prompt: "Buat fungsi komponen Header yang mengembalikan teks 'React TSX Siap'.",
                conceptGuide: "Komponen fungsi React sederhana akan mengembalikan teks atau elemen JSX saat dipanggil.",
                starterCode: `function Header() {
  // Tulis kode kamu di sini untuk mengembalikan "React TSX Siap"
  return "";
}

console.log(Header());`,
                expectedOutput: "React TSX Siap",
                explanation: "Kerja bagus! Komponen fungsi berhasil mengembalikan teks tampilan.",
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
          description: "Kelola State React dengan tipe data generik yang aman.",
          icon: "repeat",
          xp: 50,
          prerequisites: ["tsx_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data pada Hook useState",
              content: `Di React TSX, kita bisa menentukan tipe data State secara jelas pakai kurung sudut <Tipe>:

const [jumlah, setJumlah] = useState<number>(0);
const [pengguna, setPengguna] = useState<User | null>(null);`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3",
                type: "multiple_choice",
                prompt: "Gimana cara nulis tipe data angka secara eksplisit pada hook useState?",
                conceptGuide: "Tipe data generik pada TypeScript ditulis di dalam tanda kurung sudut `<Tipe>` tepat sebelum tanda kurung nilai awal `(nilai)`. Contoh: `useState<number>(0)`.",
                options: [
                  "useState<number>(0)",
                  "useState(0): number",
                  "useState[number](0)",
                  "useState.type(number)",
                ],
                correctAnswer: 0,
                explanation: "Tepat sekali! Tipe data generik selalu ditulis pakai tanda kurung sudut <Tipe>.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
