import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript",
  description: "Pelajari tipe data, interface, fungsi bertipe, dan pemrograman modern pakai TypeScript.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Dasar dan Persiapan",
      description: "Pahami kenapa TypeScript dipake dev seluruh dunia dan cara nulis variabel bertipe.",
      lessons: [
        {
          id: "ts_lesson_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar dan Persiapan",
          title: "Pengenalan TypeScript",
          description: "Pahami konsep tipe data statis dan tulis kode TypeScript pertama kamu.",
          icon: "rocket",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu TypeScript?",
              content: `TypeScript adalah versi super dari JavaScript yang dilengkapi sistem tipe data statis.

Kenapa dev pada suka TypeScript?
1. Menemukan bug atau eror langsung saat koding (sebelum di-run).
2. Auto-complete di editor (VS Code) jadi makin pintar.
3. Kodenya gampang dibaca karena tipe data variabelnya jelas banget.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1",
                type: "true_false",
                prompt: "Apakah browser bisa langsung menjalankan kode TypeScript secara native tanpa perlu dikompilasi?",
                conceptGuide: "Browser (Chrome, Edge, Firefox) hanya bisa menjalankan JavaScript. Kode TypeScript harus di-compile dulu ke JavaScript biasa pakai alat pengompilasi (tsc).",
                statement: "Browser bisa menjalankan TypeScript secara langsung.",
                correctAnswer: false,
                explanation: "Benar sekali! Kode TypeScript harus di-compile dulu jadi JavaScript standar sebelum dijalankan di browser.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2",
                type: "multiple_choice",
                prompt: "Alat apa yang biasa dipakai buat ngompilasi berkas TypeScript (.ts) jadi JavaScript (.js)?",
                conceptGuide: "TypeScript menyertakan alat perintah bawaan bernama `tsc` (TypeScript Compiler) untuk mengubah kode `.ts` menjadi `.js`.",
                options: ["tsc (TypeScript Compiler)", "npm", "Python", "Mesin V8"],
                correctAnswer: 0,
                explanation: "Tepat! Perintah tsc adalah compiler resmi dari TypeScript.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_challenge",
                prompt: "Coba tulis perintah console.log untuk mencetak kalimat 'Halo TypeScript!'",
                conceptGuide: "Perintah `console.log(\"Teks Kamu\");` digunakan untuk mencetak teks ke layar konsol.",
                starterCode: `// Tulis kode kamu di bawah ini\n`,
                expectedOutput: "Halo TypeScript!",
                explanation: "Mantap! Kamu berhasil mencetak pesan pertama kamu di TypeScript.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_lesson_2",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar dan Persiapan",
          title: "Tipe Primitif dan Anotasi",
          description: "Belajar cara menentukan tipe string, number, dan boolean pada variabel.",
          icon: "tag",
          xp: 50,
          prerequisites: ["ts_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data Primitif",
              content: `Di TypeScript, kita menambahkan tipe data setelah nama variabel pakai titik dua (:).

const nama: string = "Kadez";
const level: number = 7;
const statusAktif: boolean = true;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4",
                type: "code_completion",
                prompt: "Pilih tipe data yang pas untuk nilai angka 100 pada variabel nilaiSkor.",
                conceptGuide: "Tipe data untuk angka (baik bulat maupun desimal) di TypeScript selalu menggunakan nama tipe `number`.",
                template: 'const nilaiSkor: _____ = 100;',
                options: ["string", "number", "boolean", "any"],
                correctAnswer: "number",
                explanation: "Tepat! Nilai angka seperti 100 menggunakan tipe data number.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5",
                type: "predict_output",
                prompt: "Kira-kira apa hasil keluaran dari kode berikut saat dijalankan?",
                conceptGuide: "Ketika string digabungkan dengan angka pakai operator `+`, TypeScript akan mengubah angka tersebut jadi string.",
                code: `const bahasa: string = "TypeScript";
const skor: number = 10;
console.log(bahasa + " Level " + skor);`,
                options: ["TypeScript Level 10", "TypeScript10", "TypeError", "NaN"],
                correctAnswer: "TypeScript Level 10",
                explanation: "Pintar! Penggabungan string menghasilkan teks 'TypeScript Level 10'.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6",
                type: "fix_code",
                prompt: "Perbaiki kesalahan tipe data pada variabel umur (ubah string \"25\" menjadi angka 25).",
                conceptGuide: "Variabel yang udah diberi tipe `: number` gak boleh diisi teks string berpembatas kutipan `\"25\"`. Kamu harus mengubahnya jadi angka murni `25`.",
                buggyCode: `let umur: number = "25";\nconsole.log(umur);`,
                correctCode: `let umur: number = 25;\nconsole.log(umur);`,
                hint: "Ubah string \"25\" menjadi angka 25.",
                explanation: "Keren! Kamu udah memperbaiki kesalahan tipe data.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_2",
      title: "02 Fungsi dan Tipe Data",
      description: "Pahami cara menentukan tipe parameter dan nilai kembalian pada fungsi.",
      lessons: [
        {
          id: "ts_lesson_3",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Fungsi dan Tipe Data",
          title: "Fungsi Bertipe",
          description: "Bikin fungsi yang jelas tipe parameter dan return valuenya.",
          icon: "settings",
          xp: 50,
          prerequisites: ["ts_lesson_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Deklarasi Fungsi",
              content: `Di TypeScript, kita bisa menentukan tipe parameter dan tipe return value fungsi:

function tambah(a: number, b: number): number {
  return a + b;
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7",
                type: "arrange_code",
                prompt: "Urutkan baris kode di bawah biar membentuk fungsi sapaan yang benar.",
                conceptGuide: "Deklarasikan fungsi `function sapa(...)` terlebih dahulu, baru kemudian panggil fungsi tersebut dengan `console.log(...)`.",
                codeSnippets: [
                  "function sapa(nama: string): string {",
                  "  return 'Halo ' + nama;",
                  "}",
                  "console.log(sapa('Kadez'));",
                ],
                correctOrder: [
                  "function sapa(nama: string): string {",
                  "  return 'Halo ' + nama;",
                  "}",
                  "console.log(sapa('Kadez'));",
                ],
                explanation: "Sip! Fungsi harus dibuat dulu sebelum dipanggil.",
                xpReward: 15,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8",
                type: "code_challenge",
                prompt: "Lengkapi fungsi kaliDua(x: number): number agar mengembalikan nilai x * 2.",
                conceptGuide: "Gunakan kata kunci `return x * 2;` di dalam bodi fungsi untuk mengembalikan perkalian dua.",
                starterCode: `function kaliDua(x: number): number {
  // Tulis logika fungsi di sini
  return 0;
}

console.log(kaliDua(21));`,
                expectedOutput: "42",
                explanation: "Luar biasa! 21 dikali 2 menghasilkan angka 42.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
  ],
};
