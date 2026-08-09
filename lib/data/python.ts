import { LearningPath } from "../types";

export const PYTHON_PATH: LearningPath = {
  language: "python",
  title: "Keahlian Python",
  description: "Dari dasar variabel, list, fungsi, hingga level Master backend REST API parser dan pemrosesan data.",
  icon: "file-code",
  sections: [
    {
      id: "py_sec_1",
      title: "01 Fondasi Python",
      description: "Sintaks dasar Python yang bersih, variabel, dan percabangan.",
      lessons: [
        {
          id: "py_lesson_1",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Fondasi Python",
          title: "Pengenalan Python",
          description: "Belajar perintah print dan variabel tanpa tanda titik koma.",
          icon: "rocket",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Sintaks Bersih Python",
              content: `Python terkenal karena kodenya yang sangat mirip bahasa Inggris dan tidak memakai titik koma (;).

Contoh:
nama = "Kadez"
print("Halo " + nama)`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1",
                type: "true_false",
                prompt: "Apakah Python memerlukan tanda titik koma (;) di setiap akhir baris kode?",
                conceptGuide: "Di Python, setiap instruksi kode cukup dipisahkan oleh baris baru (enter), tanpa titik koma.",
                statement: "Python memerlukan titik koma di akhir baris.",
                correctAnswer: false,
                explanation: "Tepat! Python tidak memerlukan titik koma di akhir baris.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2",
                type: "predict_output",
                prompt: "Apa hasil cetakan dari perintah Python berikut?",
                conceptGuide: "Perintah `print(5 + 10)` di Python akan menjumlahkan kedua nilai angka.",
                code: `print(5 + 10)`,
                options: ["15", "510", "Error", "None"],
                correctAnswer: "15",
                explanation: "Bener banget! Hasilnya adalah 15.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_2",
      title: "02 MASTER LEVEL: Backend REST API & Data Parser",
      description: "Level Master: Pemrosesan Data Kompleks, List Comprehension, dan Parser JSON.",
      lessons: [
        {
          id: "py_lesson_2",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 MASTER LEVEL: Backend REST API & Data Parser",
          title: "Master Challenge: Fast Data Filter & REST API Parser",
          description: "Level Master: Membangun mesin filter data berkecepatan tinggi dengan Python.",
          icon: "zap",
          xp: 100,
          prerequisites: ["py_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pemrosesan Data Kompleks & List Comprehension",
              content: `Di level Master Python, kamu akan sering mengolah data dari REST API atau Database:
1. List Comprehension ('[x for x in data if condition]')
2. Dictionary Filtering
3. Data Aggregation

Mari buat simulasi parser data transaksi API!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_master_api",
                type: "code_challenge",
                prompt: "Level Master Python: Tulis fungsi filter_transaksi_lunas(data) yang memfilter transaksi dengan status 'LUNAS'!",
                conceptGuide: "Gunakan list comprehension Python `[item for item in data if item['status'] == 'LUNAS']`.",
                starterCode: `transaksi = [
    {"id": 1, "total": 50000, "status": "LUNAS"},
    {"id": 2, "total": 75000, "status": "PENDING"},
    {"id": 3, "total": 100000, "status": "LUNAS"}
]

def filter_transaksi_lunas(data):
    return [t for t in data if t["status"] == "LUNAS"]

lunas = filter_transaksi_lunas(transaksi)
print(len(lunas))
`,
                expectedOutput: "2",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan Tantangan Level Master Data Processing Python!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
