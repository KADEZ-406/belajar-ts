import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript (Kurikulum 65 Materi)",
  description: "Kurikulum super-lengkap dari dasar variabel, tipe primitif, array, tuple, fungsi, interface, generics, hingga level Master arsitektur CRUD dan Auth Engine.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Dasar & Tooling (7 Lesson)",
      description: "Sejarah TypeScript, keunggulan tipe statis, setup environment, tsc, tsconfig.json, dan program pertama.",
      lessons: [
        {
          id: "ts_l1_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Sejarah & Evolusi TypeScript",
          description: "Mengenal asal-usul TypeScript yang diciptakan Microsoft untuk mengatasi keterbatasan JavaScript skala besar.",
          icon: "rocket",
          xp: 40,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Mengapa TypeScript Diciptakan?",
              content: `TypeScript dikembangkan oleh Anders Hejlsberg di Microsoft pada tahun 2012.

Tujuan utama TypeScript:
1. Menyediakan **Static Type Checking** untuk aplikasi JavaScript skala besar.
2. Membantu developer menemukan bug saat masa penulisan kode (compile-time) bukan saat runtime di produksi.
3. Meningkatkan kemampuan Autocomplete (IntelliSense) di IDE modern seperti VS Code.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_1_mc",
                type: "multiple_choice",
                prompt: "Siapakah pencipta utama TypeScript dari Microsoft?",
                conceptGuide: "TypeScript dirancang oleh perancang C# ternama di Microsoft.",
                options: ["Anders Hejlsberg", "Brendan Eich", "Guido van Rossum", "James Gosling"],
                correctAnswer: 0,
                explanation: "Tepat sekali! Anders Hejlsberg memimpin perancangan TypeScript di Microsoft.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_1_po",
                type: "predict_output",
                prompt: "Apakah keluaran dari penggabungan versi TypeScript berikut?",
                conceptGuide: "Perintah `console.log()` menggabungkan string teks dengan angka.",
                code: `console.log("TypeScript Versi " + 5);`,
                options: ["TypeScript Versi 5", "TypeScript Versi5", "Error", "undefined"],
                correctAnswer: "TypeScript Versi 5",
                explanation: "Bener banget! Hasil cetakannya adalah 'TypeScript Versi 5'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_1_cc",
                type: "code_challenge",
                prompt: "Tuliskan kode untuk mencetak pesan 'TypeScript 2026' ke konsol!",
                conceptGuide: "Gunakan `console.log(\"TypeScript 2026\");` untuk mencetak teks.",
                starterCode: `// Tuliskan perintah cetak kamu di bawah ini\n`,
                expectedOutput: "TypeScript 2026",
                explanation: "Luar biasa! Kamu berhasil menuntaskan tantangan koding pertama di TypeScript!",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_2",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Keunggulan Tipe Statis vs Dinamik",
          description: "Membandingkan penanganan tipe data JavaScript (dinamik) dengan TypeScript (statis).",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l1_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Static Typing vs Dynamic Typing",
              content: `JavaScript menggunakan **Dynamic Typing**: Tipe data variabel bisa berubah kapan saja di tengah jalan, yang rawan menimbulkan bug.

TypeScript menggunakan **Static Typing**: Tipe data diikat sejak awal deklarasi sehingga variabel tidak bisa sembarangan diisi tipe data lain.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_2_tf",
                type: "true_false",
                prompt: "Apakah Static Typing pada TypeScript membantu mencegah kesalahan tipe data sebelum kode dijalankan di browser?",
                conceptGuide: "Static type checking mengecek kesesuaian tipe saat kompilasi.",
                statement: "Static Typing mencegah bug tipe data saat masa kompilasi.",
                correctAnswer: true,
                explanation: "Mantap! Static typing mendeteksi eror lebih awal sebelum kode di-deploy.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_2_fc",
                type: "fix_code",
                prompt: "Perbaiki variabel harga agar menggunakan tipe angka 50000 tanpa tanda kutip!",
                conceptGuide: "Tipe data number tidak boleh diberi tanda kutip.",
                buggyCode: `let harga: number = "50000";\nconsole.log(harga);`,
                correctCode: `let harga: number = 50000;\nconsole.log(harga);`,
                hint: "Hapus tanda kutip dari angka 50000",
                explanation: "Super! Angka bertipe number kini valid tanpa kutip.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_2_cc",
                type: "code_challenge",
                prompt: "Buat variabel nama bertipe string dengan nilai 'Kadez' dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const nama: string = \"Kadez\"; console.log(nama);`.",
                starterCode: `const nama: string = "Kadez";\nconsole.log(nama);\n`,
                expectedOutput: "Kadez",
                explanation: "Keren! Variabel bertipe statis berhasil dibuat dan dicetak.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_3",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Instalasi & Setup Node.js & TypeScript",
          description: "Cara menginstall pengompilasi TypeScript melalui npm dan Node.js.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l1_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Instalasi via Node Package Manager (npm)",
              content: `Untuk menjalankan TypeScript di komputer lokal, kita menginstall paket \`typescript\` secara global via npm:

\`\`\`bash
npm install -g typescript
\`\`\`

Setelah ter-install, kita bisa mengecek versi pengompilasi dengan perintah \`tsc -v\`.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_3_mc",
                type: "multiple_choice",
                prompt: "Perintah CLI apakah yang digunakan untuk menginstall TypeScript secara global?",
                conceptGuide: "Penginstalan paket global menggunakan flag `-g` pada perintah npm.",
                options: ["npm install -g typescript", "node install typescript", "tsc install global", "git clone typescript"],
                correctAnswer: 0,
                explanation: "Tepat! `npm install -g typescript` memasang compiler secara global.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_3_po",
                type: "predict_output",
                prompt: "Apakah perintah CLI untuk memeriksa versi compiler TypeScript yang terinstall?",
                conceptGuide: "Perintah `tsc -v` atau `tsc --version` menampilkan versi compiler.",
                code: `console.log("Perintah: tsc -v");`,
                options: ["Perintah: tsc -v", "Perintah: node -v", "Error", "undefined"],
                correctAnswer: "Perintah: tsc -v",
                explanation: "Bener! `tsc -v` memeriksa versi TypeScript.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_3_cc",
                type: "code_challenge",
                prompt: "Cetak teks status instalasi 'TypeScript Compiler Ready'!",
                conceptGuide: "Gunakan `console.log(\"TypeScript Compiler Ready\");`.",
                starterCode: `console.log("TypeScript Compiler Ready");\n`,
                expectedOutput: "TypeScript Compiler Ready",
                explanation: "Hebat! Lingkungan kompilasi TypeScript siap digunakan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_4",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Perintah tsc & File Konfigurasi tsconfig.json",
          description: "Memahami opsi kompilasi dan konfigurasi proyek TypeScript melalui tsconfig.json.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l1_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Konfigurasi Proyek `tsconfig.json`",
              content: `File \`tsconfig.json\` digunakan untuk mengatur aturan pengompilasian proyek TypeScript.

Perintah pembuatan file konfigurasi default:
\`\`\`bash
tsc --init
\`\`\`

Aturan penting di \`tsconfig.json\`:
- \`target\`: Versi JavaScript hasil output (contoh: "ES6", "ES2022").
- \`strict\`: Mengaktifkan pemeriksaan tipe data super ketat.
- \`outDir\`: Folder hasil file JavaScript yang sudah di-compile.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_4_mc",
                type: "multiple_choice",
                prompt: "Perintah apakah yang digunakan untuk membuat file tsconfig.json baru?",
                conceptGuide: "Inisialisasi konfigurasi menggunakan flag `--init`.",
                options: ["tsc --init", "npm init tsconfig", "typescript create", "tsc start"],
                correctAnswer: 0,
                explanation: "Sip! `tsc --init` menghasilkan file tsconfig.json.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_4_tf",
                type: "true_false",
                prompt: "Apakah properti 'strict: true' di tsconfig.json berfungsi untuk mengaktifkan aturan pengetesan tipe data yang sangat ketat?",
                conceptGuide: "Properti strict mengaktifkan strict type-checking options.",
                statement: "strict: true mengaktifkan pemeriksaan tipe data ketat.",
                correctAnswer: true,
                explanation: "Tepat sekali! 'strict: true' adalah praktik terbaik di proyek modern.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_4_cc",
                type: "code_challenge",
                prompt: "Cetak nilai opsi target kompilasi 'ES6' ke konsol!",
                conceptGuide: "Tulis `console.log(\"ES6\");`.",
                starterCode: `console.log("ES6");\n`,
                expectedOutput: "ES6",
                explanation: "Mantap! Opsi target kompilasi berhasil dikonfigurasi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_5",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Alur Kompilasi TypeScript ke JavaScript",
          description: "Memahami proses transpilasi dari file .ts menjadi file .js yang siap dijalankan.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l1_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Proses Transpilation Flow",
              content: `Proses kompilasi TypeScript disebut **Transpilation** (Source-to-Source Compilation).

Alur kerja:
1. Kamu menulis kode di file \`main.ts\`.
2. Menjalankan perintah \`tsc main.ts\`.
3. Pengompilasi mengecek apakah ada error tipe data. Jika bersih, dihasilkanlah file \`main.js\`.
4. File \`main.js\` siap dijalankan oleh Node.js atau Browser.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_5_mc",
                type: "multiple_choice",
                prompt: "Apakah istilah untuk proses pengubahan kode TypeScript menjadi kode JavaScript?",
                conceptGuide: "Mengubah source code bahasa ke source code bahasa lain disebut Transpilation.",
                options: ["Transpilation", "Interpretation", "Decompilation", "Assembly"],
                correctAnswer: 0,
                explanation: "Tepat! Proses ini dinamakan Transpilation.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_5_po",
                type: "predict_output",
                prompt: "Apa ekstensi file output yang dihasilkan dari kompilasi index.ts?",
                conceptGuide: "Kompilasi TypeScript menghasilkan file JavaScript .js.",
                code: `console.log("Output: index.js");`,
                options: ["Output: index.js", "Output: index.ts", "Error", "undefined"],
                correctAnswer: "Output: index.js",
                explanation: "Bener! File output ber-ekstensi .js.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_5_cc",
                type: "code_challenge",
                prompt: "Tuliskan kode cetak yang menampilkan nama file hasil kompilasi 'app.js'!",
                conceptGuide: "Tulis `console.log(\"app.js\");`.",
                starterCode: `console.log("app.js");\n`,
                expectedOutput: "app.js",
                explanation: "Luar biasa! Alur kompilasi file TypeScript telah dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_6",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Program Pertama: Console Log & Variable Typing",
          description: "Menulis program TypeScript mandiri pertama dengan pengetikan variabel ketat.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l1_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Program Pertama TypeScript",
              content: `Mari kita buat program pertama yang menyimpan nama pengguna dan tahun belajar dalam variabel bertipe data ketat:

\`\`\`typescript
const namaSiswa: string = "Budi";
const tahun: number = 2026;
console.log(namaSiswa + " - " + tahun);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_6_mc",
                type: "multiple_choice",
                prompt: "Manakah sintaks yang paling tepat untuk membuat variabel tahun bertipe number?",
                conceptGuide: "Sintaks deklarasi variabel bertipe adalah `const name: type = value;`.",
                options: [
                  "const tahun: number = 2026;",
                  "number tahun = 2026;",
                  "const tahun = number(2026);",
                  "var tahun as number = 2026;",
                ],
                correctAnswer: 0,
                explanation: "Tepat sekali! `const tahun: number = 2026;` adalah sintaks TypeScript yang benar.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_6_po",
                type: "predict_output",
                prompt: "Apakah hasil cetakan variabel gabungan berikut?",
                conceptGuide: "Perhatikan spasi di antara penggabungan teks string.",
                code: `const nama: string = "Kadez";\nconst peranan: string = "Developer";\nconsole.log(nama + " - " + peranan);`,
                options: ["Kadez - Developer", "Kadez-Developer", "Error", "undefined"],
                correctAnswer: "Kadez - Developer",
                explanation: "Bener banget! Hasilnya adalah 'Kadez - Developer'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_6_cc",
                type: "code_challenge",
                prompt: "Buat variabel bahasa bertipe string dengan nilai 'TypeScript' lalu cetak kalimat 'Saya Belajar TypeScript'!",
                conceptGuide: "Tulis `const bahasa: string = \"TypeScript\"; console.log(\"Saya Belajar \" + bahasa);`.",
                starterCode: `const bahasa: string = "TypeScript";\nconsole.log("Saya Belajar " + bahasa);\n`,
                expectedOutput: "Saya Belajar TypeScript",
                explanation: "Mantap! Program pertama kamu berjalan dengan sempurna!",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_7",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar & Tooling",
          title: "Ekosistem Tools: TS-Node, Vite, & Monorepo",
          description: "Mengenal perkakas pendukung ekosistem TypeScript modern untuk mengeksekusi kode secara cepat.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l1_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Perkakas Ekosistem TypeScript Modern",
              content: `Dalam pengembangan aplikasi dunia nyata, dev menggunakan perkakas pembantu:
1. **ts-node / tsx**: Eksekutor yang langsung mengompilasi dan menjalankan file \`.ts\` di memori tanpa perlu membuat file \`.js\` di disk secara manual.
2. **Vite / Next.js**: Bundler modern yang memiliki compiler TypeScript super cepat bawaan.
3. **ESLint & Prettier**: Linter untuk menjaga kerapihan dan aturan koding.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_7_mc",
                type: "multiple_choice",
                prompt: "Tool apakah yang memungkinkan kita menjalankan file .ts secara langsung tanpa menulis file .js ke disk?",
                conceptGuide: "ts-node atau tsx mengeksekusi file TypeScript langsung di Node.js.",
                options: ["ts-node", "git", "npm init", "docker"],
                correctAnswer: 0,
                explanation: "Sip! `ts-node` berguna untuk langsung mengeksekusi file TypeScript.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_7_tf",
                type: "true_false",
                prompt: "Apakah Bundler modern seperti Vite memiliki dukungan langsung untuk kompilasi TypeScript secara bawaan?",
                conceptGuide: "Vite mendukung pembacaan dan transpilation TypeScript secara out-of-the-box.",
                statement: "Vite mendukung TypeScript secara langsung tanpa konfigurasi rumit.",
                correctAnswer: true,
                explanation: "Tepat sekali! Ekosistem modern sudah sangat terintegrasi dengan TypeScript.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_1_7_cc",
                type: "code_challenge",
                prompt: "Cetak pesan kesiapan ekosistem 'TS-Node & Vite Ready' ke konsol!",
                conceptGuide: "Tulis `console.log(\"TS-Node & Vite Ready\");`.",
                starterCode: `console.log("TS-Node & Vite Ready");\n`,
                expectedOutput: "TS-Node & Vite Ready",
                explanation: "LUAR BIASA! Kamu telah menuntaskan seluruh 7 Lesson pada Section 1 Dasar & Tooling!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
  ],
};
