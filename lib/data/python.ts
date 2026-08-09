import { LearningPath } from "../types";

export const PYTHON_PATH: LearningPath = {
  language: "python",
  title: "Keahlian Python",
  description: "Pelajari sintaks Python yang bersih, struktur data, alur kontrol, fungsi, dan OOP.",
  icon: "file-code",
  sections: [
    {
      id: "py_sec_1",
      title: "01 Dasar Bahasa Python",
      description: "Mulai belajar sintaks Python, variabel, cetak kalimat, dan tipe data.",
      lessons: [
        {
          id: "py_lesson_1",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Bahasa Python",
          title: "Pengenalan Python",
          description: "Pelajari sintaks Python yang bersih dan aturan indentasi spasi.",
          icon: "file-code",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Selamat Datang di Python!",
              content: `Python adalah bahasa pemrograman tingkat tinggi yang mudah dibaca.

Konsep utama:
1. Tidak menggunakan kurung kurawal {} atau titik koma ; untuk blok kode.
2. Indentasi spasi sangat penting (4 spasi tiap tingkatan).
3. Penentuan tipe data variabel terjadi secara otomatis.

nama = "Kadez"
level = 7
print(f"Halo {nama}, Level {level}!")`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1",
                type: "true_false",
                prompt: "Python menggunakan kurung kurawal {} untuk menentukan blok kode seperti fungsi dan perulangan.",
                statement: "Blok kode ditentukan dengan kurung kurawal.",
                correctAnswer: false,
                explanation: "Salah. Python menggunakan indentasi spasi dan titik dua (:) sebagai penanda blok kode.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2",
                type: "predict_output",
                prompt: "Apakah hasil keluaran dari kode Python berikut?",
                code: `x = 10\ny = 5\nprint(x + y)`,
                options: ["15", "105", "x + y", "SyntaxError"],
                correctAnswer: "15",
                explanation: "10 ditambah 5 menghasilkan nilai 15.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3",
                type: "code_challenge",
                prompt: "Tulis kode Python yang mencetak kalimat 'Python CodeQuest'",
                starterCode: `print("Python CodeQuest")`,
                expectedOutput: "Python CodeQuest",
                explanation: "Fungsi print() menampilkan keluaran teks ke layar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_lesson_2",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Bahasa Python",
          title: "List dan Dictionary",
          description: "Simpan kumpulan data dalam list berurutan dan dictionary pasangan kunci-nilai.",
          icon: "box",
          xp: 50,
          prerequisites: ["py_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "List dan Dictionary",
              content: `List menyimpan kumpulan data berurutan, sedangkan dictionary menyimpan himpunan pasangan kunci dan nilai:

keahlian = ["Python", "TypeScript", "SQL"]
pengguna = {"nama": "Kadez", "xp": 2450}

print(keahlian[0])      # Hasil: Python
print(pengguna["xp"])   # Hasil: 2450`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4",
                type: "predict_output",
                prompt: "Apakah hasil keluaran pengaksesan dictionary Python berikut?",
                code: `pahlawan = {"nama": "Alex", "level": 5}\nprint(pahlawan["level"])`,
                options: ["5", "level", "Alex", "KeyError"],
                correctAnswer: "5",
                explanation: "Pengaksesan pahlawan[\"level\"] mengembalikan angka 5.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
