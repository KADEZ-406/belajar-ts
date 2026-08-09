import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript",
  description: "Pelajari tipe data, antarmuka, generik, dan pemrograman asinkron dengan TypeScript.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Dasar dan Persiapan",
      description: "Pahami alasan penggunaan TypeScript dan cara anotasi tipe data membuat kode lebih aman.",
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
              content: `TypeScript adalah superset dari JavaScript yang dilengkapi dengan tipe data statis.

Keuntungan utama:
1. Mendeteksi kesalahan saat kompilasi sebelum kode dijalankan.
2. Fitur melengkapi kode otomatis pada editor.
3. Kode lebih mudah dibaca dan dipahami dengan anotasi tipe data yang jelas.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1",
                type: "true_false",
                prompt: "Kode TypeScript dapat dijalankan langsung di peramban web tanpa kompilasi terlebih dahulu.",
                statement: "Peramban menjalankan TypeScript secara langsung.",
                correctAnswer: false,
                explanation: "Salah. TypeScript harus dikompilasi menjadi JavaScript standar terlebih dahulu sebelum dijalankan oleh peramban.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2",
                type: "multiple_choice",
                prompt: "Alat apa yang digunakan untuk mengompilasi kode TypeScript ke JavaScript?",
                options: ["tsc (TypeScript Compiler)", "npm", "Python", "Mesin V8"],
                correctAnswer: 0,
                explanation: "Kompiler resmi TypeScript dijalankan dengan perintah tsc.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_challenge",
                prompt: "Tulis perintah console.log yang mencetak teks 'Halo TypeScript!'",
                starterCode: `// Tulis kode kamu di bawah ini\n`,
                expectedOutput: "Halo TypeScript!",
                explanation: "Bagus. Perintah console.log() menampilkan keluaran teks.",
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
          description: "Pelajari cara menentukan tipe string, number, boolean, dan array.",
          icon: "tag",
          xp: 50,
          prerequisites: ["ts_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Anotasi Tipe Data",
              content: `Di TypeScript, anotasi tipe data ditambahkan setelah nama variabel menggunakan titik dua (:).

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
                prompt: "Lengkapi anotasi tipe data untuk nilai variabel nilaiSkor.",
                template: 'const nilaiSkor: _____ = 100;',
                options: ["string", "number", "boolean", "any"],
                correctAnswer: "number",
                explanation: "Nilai angka seperti 100 menggunakan tipe data number.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5",
                type: "predict_output",
                prompt: "Apakah hasil keluaran dari kode TypeScript berikut?",
                code: `const bahasa: string = "TypeScript";
const skor: number = 10;
console.log(bahasa + " Level " + skor);`,
                options: ["TypeScript Level 10", "TypeScript10", "TypeError", "NaN"],
                correctAnswer: "TypeScript Level 10",
                explanation: "Penggabungan string mengubah angka menjadi format teks.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6",
                type: "fix_code",
                prompt: "Perbaiki kesalahan ketidakcocokan tipe data pada variabel umur.",
                buggyCode: `let umur: number = "25";\nconsole.log(umur);`,
                correctCode: `let umur: number = 25;\nconsole.log(umur);`,
                hint: "Ubah string \"25\" menjadi angka 25.",
                explanation: "TypeScript mencegah pengisian string ke variabel bertipe number.",
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
      description: "Definisikan parameter fungsi, nilai kembalian, dan fungsi panah.",
      lessons: [
        {
          id: "ts_lesson_3",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Fungsi dan Tipe Data",
          title: "Fungsi Bertipe",
          description: "Tentukan tipe data parameter dan tipe nilai kembalian fungsi.",
          icon: "settings",
          xp: 50,
          prerequisites: ["ts_lesson_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Deklarasi Fungsi",
              content: `Tentukan tipe parameter di dalam kurung, dan tipe nilai kembalian setelah kurung parameter:

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
                prompt: "Susun baris kode agar membentuk fungsi sapaan yang benar.",
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
                explanation: "Fungsi didefinisikan terlebih dahulu sebelum dipanggil.",
                xpReward: 15,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8",
                type: "code_challenge",
                prompt: "Buat fungsi kaliDua(x: number): number yang mengembalikan nilai x * 2.",
                starterCode: `function kaliDua(x: number): number {
  // Tulis logika fungsi di sini
  return 0;
}

console.log(kaliDua(21));`,
                expectedOutput: "42",
                explanation: "21 dikali 2 menghasilkan nilai 42.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
  ],
};
