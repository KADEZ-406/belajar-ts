import { LearningPath } from "../types";

export const PYTHON_PATH: LearningPath = {
  language: "python",
  title: "Keahlian Python",
  description: "Kuasai sintaks Python yang bersih, struktur data List & Dict, dan fungsi modern.",
  icon: "file-code",
  sections: [
    {
      id: "py_sec_1",
      title: "01 Dasar Bahasa Python",
      description: "Mulai belajar sintaks Python yang super ekspresif dan mudah dipahami.",
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
              content: `Python adalah bahasa pemrograman yang simpel, bersih, dan gampang dibaca.

Karakteristik unik Python:
1. Gak pake kurung kurawal {} atau titik koma ; untuk penutup baris.
2. Indentasi spasi (4 spasi) sangat penting untuk struktur blok kode.
3. Tipe data variabel langsung terdeteksi secara otomatis!

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
                prompt: "Apakah Python memakai kurung kurawal {} untuk menandai blok kode fungsi dan perulangan?",
                conceptGuide: "Berbeda dari bahasa lain, Python tidak menggunakan kurung kurawal `{}`. Python memakai indentasi spasi dan tanda titik dua `:` untuk menentukan blok kode.",
                statement: "Python menggunakan kurung kurawal {} untuk blok kode.",
                correctAnswer: false,
                explanation: "Tepat sekali! Python memakai indentasi spasi dan titik dua (:) sebagai penanda blok kode.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2",
                type: "predict_output",
                prompt: "Kira-kira apa hasil cetakan dari kode Python berikut?",
                conceptGuide: "Operator `+` pada dua variabel angka di Python akan melakukan penjumlahan matematika murni.",
                code: `x = 10\ny = 5\nprint(x + y)`,
                options: ["15", "105", "x + y", "SyntaxError"],
                correctAnswer: "15",
                explanation: "Mantap! 10 ditambah 5 menghasilkan angka 15.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3",
                type: "code_challenge",
                prompt: "Tulis perintah print di Python untuk mencetak kalimat 'Python CodeQuest'",
                conceptGuide: "Di Python, fungsi `print(\"Teks Kamu\")` digunakan untuk mencetak keluaran ke layar konsol.",
                starterCode: `# Tulis kode kamu di bawah ini\n`,
                expectedOutput: "Python CodeQuest",
                explanation: "Keren! Perintah print() berhasil menampilkan keluaran teks ke konsol.",
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
          description: "Simpan kumpulan data di List dan Dictionary pasangan Key-Value.",
          icon: "box",
          xp: 50,
          prerequisites: ["py_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "List dan Dictionary",
              content: `List menyimpan kumpulan data berurutan, sedangkan Dictionary menyimpan pasangan Key dan Value:

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
                prompt: "Kira-kira apa hasil cetakan dari pengaksesan dictionary berikut?",
                conceptGuide: "Untuk mengambil nilai di Dictionary Python, gunakan nama key di dalam kurung siku `dict[\"key\"]`.",
                code: `pahlawan = {"nama": "Alex", "level": 5}\nprint(pahlawan["level"])`,
                options: ["5", "level", "Alex", "KeyError"],
                correctAnswer: "5",
                explanation: "Mantap! `pahlawan[\"level\"]` mengembalikan angka 5.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
