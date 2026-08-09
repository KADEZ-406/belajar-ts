import { LearningPath } from "../types";

export const TSX_PATH: LearningPath = {
  language: "tsx",
  title: "Keahlian TSX / React",
  description: "Bikin komponen web interaktif, animasi scroll, modal dialog, hingga Form CRUD kompleks pakai TSX & React.",
  icon: "atom",
  sections: [
    {
      id: "tsx_sec_1",
      title: "01 Fondasi Komponen TSX",
      description: "Pahami sintaks JSX dalam TypeScript dan pembuatan Props Interface.",
      lessons: [
        {
          id: "tsx_lesson_1",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi Komponen TSX",
          title: "Pengenalan Komponen React TSX",
          description: "Belajar membuat komponen functional dengan Props bertipe.",
          icon: "rocket",
          xp: 50,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Interface Props pada TSX",
              content: `Di React TSX, setiap properti komponen (Props) wajib didefinisikan antarmuka tipe datanya.

Contoh:
interface ButtonProps {
  label: string;
  onClick: () => void;
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1",
                type: "code_completion",
                prompt: "Lengkapi tipe data untuk properti judul pada interface CardProps!",
                conceptGuide: "Interface props untuk teks judul biasanya menggunakan kata kunci `string`.",
                template: "interface CardProps {\n  judul: ___\n}",
                options: ["string", "number", "boolean", "any"],
                correctAnswer: "string",
                explanation: "Tepat sekali! Properti judul bertipe string.",
                xpReward: 20,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_2",
      title: "02 MASTER LEVEL: Animasi UI, Modal, & Full Form CRUD",
      description: "Level Master: Membangun Modal Dialog, Animasi Scroll Interaktif, dan Form Handling.",
      lessons: [
        {
          id: "tsx_lesson_2",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 MASTER LEVEL: Animasi UI, Modal, & Full Form CRUD",
          title: "Master Challenge: Modal Dialog & State",
          description: "Level Master: Membuat komponen Modal Pop-up bertipe interaktif.",
          icon: "box",
          xp: 100,
          prerequisites: ["tsx_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Komponen Modal Dialog & Scroll State",
              content: `Di level Master UI, kamu akan membangun komponen kompleks seperti Modal Dialog dan Animasi Scroll:
1. Modal State ('isOpen: boolean')
2. Event Handler ('onClose: () => void')
3. Children ReactNode Types

Mari kita buat simulasi komponen Modal Dialog!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_master_modal",
                type: "code_challenge",
                prompt: "Level Master: Buat fungsi renderModal(isOpen: boolean, title: string) yang mengembalikan pesan status modal!",
                conceptGuide: "Di TSX Master Level, kembalikan teks 'Modal Terbuka: ' + title jika isOpen true.",
                starterCode: `function renderModal(isOpen: boolean, title: string): string {
  if (isOpen) {
    return "Modal Terbuka: " + title;
  }
  return "Modal Tertutup";
}

console.log(renderModal(true, "Konfirmasi Hapus"));
`,
                expectedOutput: "Modal Terbuka: Konfirmasi Hapus",
                explanation: "Luar biasa! Komponen Modal State Master Level berhasil dijalankan!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
