import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript (Kurikulum 65 Materi Utuh)",
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
    {
      id: "ts_sec_2",
      title: "02 Tipe Primitif (7 Lesson)",
      description: "String, Number, Boolean, Null/Undefined, Void/Never, Any/Unknown, dan Inference vs Annotation.",
      lessons: [
        {
          id: "ts_l2_1",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Tipe Data String & Template Literals",
          description: "Mengolah variabel teks menggunakan kutip tunggal, ganda, dan template literals.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l1_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "String & Template Literals",
              content: `Tipe data \`string\` menyimpan teks. Kita dapat menggabungkan string menggunakan **Template Literals** (\` \${variabel} \`).

Contoh:
const kota: string = "Bandung";
const salam: string = \`Selamat Datang di \${kota}\`;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_1_mc",
                type: "multiple_choice",
                prompt: "Karakter apakah yang digunakan untuk mengawali dan mengakhiri Template Literals di TypeScript?",
                conceptGuide: "Template literals menggunakan tanda backtick (`)",
                options: ["Backtick (`)", "Kutip Tunggal (')", "Kutip Ganda (\")", "Kurung Siku ([])"],
                correctAnswer: 0,
                explanation: "Tepat! Tanda backtick (`) digunakan untuk template literals.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_1_po",
                type: "predict_output",
                prompt: "Apakah keluaran dari cetakan template string berikut?",
                conceptGuide: "Nilai variabel nama disisipkan ke dalam string.",
                code: `const nama: string = "Budi";\nconsole.log(\`Halo \${nama}\`);`,
                options: ["Halo Budi", "Halo ${nama}", "Error", "undefined"],
                correctAnswer: "Halo Budi",
                explanation: "Bener! Teks variabel 'Budi' disisipkan dengan sempurna.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_1_cc",
                type: "code_challenge",
                prompt: "Buat variabel kota bertipe string berisi 'Jakarta', lalu cetak 'Kota: Jakarta' memakai template literals!",
                conceptGuide: "Tulis `const kota: string = \"Jakarta\"; console.log(\`Kota: \${kota}\`);`.",
                starterCode: `const kota: string = "Jakarta";\nconsole.log(\`Kota: \${kota}\`);\n`,
                expectedOutput: "Kota: Jakarta",
                explanation: "Keren! Template literals string kamu bekerja dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_2",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Tipe Data Number (Bulat, Desimal, & Hex)",
          description: "Menangani angka bulat, desimal, dan kalkulasi ilmiah.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Number di TypeScript",
              content: `Di TypeScript, tidak ada tipe pisah \`int\` atau \`float\`. Semua angka (bulat, desimal, desimal negatif) bertipe \`number\`.

Contoh:
let umur: number = 25;
let IPK: number = 3.95;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_2_tf",
                type: "true_false",
                prompt: "Apakah angka desimal seperti 3.14 dan angka bulat seperti 100 sama-sama menggunakan tipe data number di TypeScript?",
                conceptGuide: "TypeScript hanya memiliki satu tipe number untuk semua nilai numerik.",
                statement: "Angka desimal dan bulat sama-sama bertipe number.",
                correctAnswer: true,
                explanation: "Mantap! `number` mencakup angka bulat dan desimal.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_2_po",
                type: "predict_output",
                prompt: "Berapakah hasil cetakan dari penjumlahan berikut?",
                conceptGuide: "Penjumlahan variabel number bertipe angka.",
                code: `const a: number = 15;\nconst b: number = 25;\nconsole.log(a + b);`,
                options: ["40", "1525", "Error", "undefined"],
                correctAnswer: "40",
                explanation: "Bener! 15 + 25 = 40.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_2_cc",
                type: "code_challenge",
                prompt: "Buat variabel skor bertipe number bernilai 100 dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const skor: number = 100; console.log(skor);`.",
                starterCode: `const skor: number = 100;\nconsole.log(skor);\n`,
                expectedOutput: "100",
                explanation: "Sip! Variabel number berhasil dibuat dan dicetak.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_3",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Tipe Data Boolean & Evaluasi Ekspresi",
          description: "Menyimpan nilai logika true dan false serta evaluasi ekspresi kondisi.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Boolean di TypeScript",
              content: `Tipe \`boolean\` hanya bernilai dua kemungkinan: \`true\` (benar) atau \`false\` (salah).

Contoh:
const isLulus: boolean = true;
const isEror: boolean = 10 < 5; // menghasilkan false`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_3_mc",
                type: "multiple_choice",
                prompt: "Apakah tipe data untuk nilai logika true atau false di TypeScript?",
                conceptGuide: "Kata kunci tipe logika adalah `boolean`.",
                options: ["boolean", "bool", "bit", "logic"],
                correctAnswer: 0,
                explanation: "Tepat! Kata kunci yang benar adalah `boolean`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_3_po",
                type: "predict_output",
                prompt: "Apakah hasil cetakan dari ekspresi perbandingan 20 > 10?",
                conceptGuide: "Operator `>` mengembalikan nilai boolean true jika kiri lebih besar dari kanan.",
                code: `const hasil: boolean = 20 > 10;\nconsole.log(hasil);`,
                options: ["true", "false", "Error", "undefined"],
                correctAnswer: "true",
                explanation: "Bener! 20 lebih besar dari 10 sehingga hasilnya true.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_3_cc",
                type: "code_challenge",
                prompt: "Buat variabel isAktif bertipe boolean bernilai true dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const isAktif: boolean = true; console.log(isAktif);`.",
                starterCode: `const isAktif: boolean = true;\nconsole.log(isAktif);\n`,
                expectedOutput: "true",
                explanation: "Mantap! Variabel boolean berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_4",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Null & Undefined (Strict Null Checks)",
          description: "Pahami penanganan nilai kosong null dan belum terdefinisi undefined.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Null vs Undefined",
              content: `- \`undefined\`: Variabel telah dideklarasikan tetapi belum diberi nilai apa pun.
- \`null\`: Variabel secara sengaja diisi nilai kosong/nihil oleh programmer.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_4_mc",
                type: "multiple_choice",
                prompt: "Tipe apakah yang dimiliki variabel saat dideklarasikan tanpa diisi nilai awal?",
                conceptGuide: "Variabel tanpa nilai awal bertipe undefined.",
                options: ["undefined", "null", "void", "never"],
                correctAnswer: 0,
                explanation: "Tepat! Variabel tanpa isi awal bertipe `undefined`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari variabel data bertipe null berikut?",
                conceptGuide: "Variabel bertipe null dicetak sebagai null.",
                code: `const data: null = null;\nconsole.log(data);`,
                options: ["null", "undefined", "Error", "0"],
                correctAnswer: "null",
                explanation: "Bener! Nilainya adalah null.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_4_cc",
                type: "code_challenge",
                prompt: "Buat variabel kosong bertipe null dengan nilai null dan cetak ke konsol!",
                conceptGuide: "Tulis `const kosong: null = null; console.log(kosong);`.",
                starterCode: `const kosong: null = null;\nconsole.log(kosong);\n`,
                expectedOutput: "null",
                explanation: "Keren! Penanganan nilai null berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_5",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Void & Never Return Types",
          description: "Fungsi tanpa return value (void) dan fungsi yang tidak pernah selesai (never).",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Void vs Never Types",
              content: `- \`void\`: Tipe kembalian fungsi yang **tidak mengembalikan nilai apa pun** (misal hanya menjalankan console.log).
- \`never\`: Tipe kembalian fungsi yang **tidak pernah selesai/kembali**, seperti fungsi perulangan tak terbatas atau fungsi yang selalu melempar (throw) Error.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_5_mc",
                type: "multiple_choice",
                prompt: "Tipe return apakah yang digunakan untuk fungsi yang hanya mencetak pesan tanpa return value?",
                conceptGuide: "Fungsi tanpa return value menggunakan tipe `void`.",
                options: ["void", "never", "null", "undefined"],
                correctAnswer: 0,
                explanation: "Tepat! `void` menandakan fungsi tidak memiliki nilai kembalian.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_5_po",
                type: "predict_output",
                prompt: "Apakah keluaran dari pemanggilan fungsi bersignature void berikut?",
                conceptGuide: "Fungsi memanggil console.log di dalamnya.",
                code: `function sapa(): void {\n  console.log("Halo!");\n}\nsapa();`,
                options: ["Halo!", "void", "undefined", "Error"],
                correctAnswer: "Halo!",
                explanation: "Bener! Perintah console.log di dalam fungsi mencetak 'Halo!'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_5_cc",
                type: "code_challenge",
                prompt: "Buat fungsi tampilkanPesan(): void yang mencetak 'Pesan Void' saat dipanggil!",
                conceptGuide: "Tulis `function tampilkanPesan(): void { console.log(\"Pesan Void\"); } tampilkanPesan();`.",
                starterCode: `function tampilkanPesan(): void {\n  console.log("Pesan Void");\n}\ntampilkanPesan();\n`,
                expectedOutput: "Pesan Void",
                explanation: "Super! Fungsi bertipe void berhasil dibuat dan dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_6",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Any vs Unknown Type Safety",
          description: "Perbedaan tipe any yang tidak aman dengan unknown yang aman.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Any vs Unknown",
              content: `- \`any\`: Mematikan fitur pemeriksaan tipe data TypeScript (sangat tidak disarankan).
- \`unknown\`: Tipe data yang belum diketahui, tetapi TypeScript mewajibkan kita mengecek tipenya dulu sebelum dipakai (lebih aman dari \`any\`).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_6_mc",
                type: "multiple_choice",
                prompt: "Manakah tipe yang lebih aman digunakan daripada 'any' ketika tipe data belum pasti?",
                conceptGuide: "unknown memerlukan type checking sebelum digunakan.",
                options: ["unknown", "any", "void", "never"],
                correctAnswer: 0,
                explanation: "Tepat! `unknown` mewajibkan type checking sehingga jauh lebih aman.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari variabel bertipe unknown berikut setelah dikonversi?",
                conceptGuide: "Tipe unknown dapat dikonversi atau dicetak jika valid.",
                code: `const nilai: unknown = "TypeScript";\nconsole.log(nilai);`,
                options: ["TypeScript", "unknown", "Error", "undefined"],
                correctAnswer: "TypeScript",
                explanation: "Bener! Variabel unknown mencetak nilai string-nya.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_6_cc",
                type: "code_challenge",
                prompt: "Buat variabel info bertipe unknown bernilai 'Data Aman' dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const info: unknown = \"Data Aman\"; console.log(info);`.",
                starterCode: `const info: unknown = "Data Aman";\nconsole.log(info);\n`,
                expectedOutput: "Data Aman",
                explanation: "Hebat! Penggunaan tipe unknown yang aman berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l2_7",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Tipe Primitif",
          title: "Type Inference vs Explicit Annotation",
          description: "Kapan menggunakan anotasi eksplisit dan kapan memanfaatkan inferensi otomatis.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l2_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Inference vs Annotation",
              content: `- **Explicit Type Annotation**: Menuliskan tipe data secara tegas (\`let x: number = 10\`). Digunakan pada parameter fungsi & variabel tanpa nilai awal.
- **Type Inference**: Biarkan TypeScript menebak tipenya (\`let x = 10\`). Digunakan untuk variabel yang langsung diberi nilai awal sederhana.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_7_tf",
                type: "true_false",
                prompt: "Apakah penulisan 'let x = 100' memanfaatkan fitur Type Inference sehingga x otomatis bertipe number?",
                conceptGuide: "Penulisan tanpa anotasi tipe langsung menebak dari nilai 100.",
                statement: "let x = 100 memanfaatkan Type Inference.",
                correctAnswer: true,
                explanation: "Tepat! TypeScript otomatis menebak x bertipe number.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan variabel bertipe eksplisit berikut?",
                conceptGuide: "Anotasi eksplisit diisi nilai yang sesuai.",
                code: `const versi: number = 5;\nconsole.log("V" + versi);`,
                options: ["V5", "V 5", "Error", "undefined"],
                correctAnswer: "V5",
                explanation: "Bener! 'V' + 5 = 'V5'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_2_7_cc",
                type: "code_challenge",
                prompt: "Buat variabel judul bertipe string secara eksplisit dengan nilai 'Section 2 Selesai' dan cetak ke konsol!",
                conceptGuide: "Tulis `const judul: string = \"Section 2 Selesai\"; console.log(judul);`.",
                starterCode: `const judul: string = "Section 2 Selesai";\nconsole.log(judul);\n`,
                expectedOutput: "Section 2 Selesai",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson di Section 02 Tipe Primitif!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_3",
      title: "03 Operator & Kondisi (7 Lesson)",
      description: "Aritmatika, Perbandingan, Logika, Assignment, If/Else, Ternary, dan Switch Case.",
      lessons: [
        {
          id: "ts_l3_1",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Operator Aritmatika Bertipe",
          description: "Operasi matematika tambah, kurang, kali, bagi, dan modulus pada tipe number.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l2_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Operator Aritmatika",
              content: `Operator aritmatika bekerja pada operands bertipe \`number\`:
- Penjumlahan (\`+\`)
- Pengurangan (\`-\`)
- Perkalian (\`*\`)
- Pembagian (\`/\`)
- Modulus Sisa Bagi (\`%\`)`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_1_mc",
                type: "multiple_choice",
                prompt: "Operator apakah yang digunakan untuk menghitung sisa hasil bagi matematika di TypeScript?",
                conceptGuide: "Sisa bagi menggunakan operator persen (%).",
                options: ["%", "/", "*", "^"],
                correctAnswer: 0,
                explanation: "Tepat! `%` adalah operator Modulus (sisa bagi).",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_1_po",
                type: "predict_output",
                prompt: "Berapakah hasil cetakan perkalian 8 * 5?",
                conceptGuide: "Perkalian menggunakan operator *.",
                code: `const hasil: number = 8 * 5;\nconsole.log(hasil);`,
                options: ["40", "13", "3", "Error"],
                correctAnswer: "40",
                explanation: "Bener! 8 * 5 = 40.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_1_cc",
                type: "code_challenge",
                prompt: "Hitung perkalian 10 * 10 dan cetak hasilnya ke konsol!",
                conceptGuide: "Tulis `const hasil: number = 10 * 10; console.log(hasil);`.",
                starterCode: `const hasil: number = 10 * 10;\nconsole.log(hasil);\n`,
                expectedOutput: "100",
                explanation: "Mantap! Operasi aritmatika berhasil dijalankan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_2",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Operator Perbandingan (Strict Equality)",
          description: "Membandingkan dua nilai memakai ===, !==, >, <, >=, dan <=.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Strict Equality (===)",
              content: `Di TypeScript, selalu gunakan **Strict Equality** (\`===\`) untuk membandingkan nilai dan tipe data sekaligus. Jangan gunakan \`==\` biasa yang mengabaikan tipe data.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_2_tf",
                type: "true_false",
                prompt: "Apakah operator === memeriksa kesamaan nilai dan kesamaan tipe data sekaligus?",
                conceptGuide: "=== mengecek nilai dan tipe data tanpa konversi tipe otomatis.",
                statement: "=== memeriksa nilai dan tipe data secara ketat.",
                correctAnswer: true,
                explanation: "Sip! === mengecek nilai dan tipe data sekaligus.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_2_po",
                type: "predict_output",
                prompt: "Apakah hasil cetakan dari perbandingan 100 === 100?",
                conceptGuide: "Kedua angka bernilai sama.",
                code: `console.log(100 === 100);`,
                options: ["true", "false", "Error", "undefined"],
                correctAnswer: "true",
                explanation: "Bener! 100 sama dengan 100.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_2_cc",
                type: "code_challenge",
                prompt: "Cetak hasil perbandingan 50 >= 50 ke konsol!",
                conceptGuide: "Tulis `console.log(50 >= 50);`.",
                starterCode: `console.log(50 >= 50);\n`,
                expectedOutput: "true",
                explanation: "Super! Operator perbandingan bekerja dengan benar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_3",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Operator Logika (AND, OR, NOT)",
          description: "Penggabungan ekspresi kondisi dengan &&, ||, dan !",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Operator Logika",
              content: `- **AND (\`&&\`)**: True jika SELURUH kondisi bernilai true.
- **OR (\`||\`)**: True jika SALAH SATU kondisi bernilai true.
- **NOT (\`!\`)**: Membalikkan nilai boolean (true jadi false, false jadi true).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_3_mc",
                type: "multiple_choice",
                prompt: "Operator manakah yang bernilai true hanya jika KEDUA kondisi bernilai benar?",
                conceptGuide: "Operator logika DAN menggunakan dua ampersand (&&).",
                options: ["&&", "||", "!", "=="],
                correctAnswer: 0,
                explanation: "Tepat! Operator `&&` memerlukan kedua kondisi true.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari perbandingan logika (true && false)?",
                conceptGuide: "AND memerlukan kedua operand bernilai true.",
                code: `console.log(true && false);`,
                options: ["false", "true", "Error", "undefined"],
                correctAnswer: "false",
                explanation: "Bener! Karena salah satu bernilai false, hasilnya false.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_3_cc",
                type: "code_challenge",
                prompt: "Cetak hasil perbandingan logika (10 > 5 && 20 > 10) ke konsol!",
                conceptGuide: "Tulis `console.log(10 > 5 && 20 > 10);`.",
                starterCode: `console.log(10 > 5 && 20 > 10);\n`,
                expectedOutput: "true",
                explanation: "Keren! Operator logika AND dievaluasi dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_4",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Percabangan If / Else",
          description: "Mengontrol alur eksekusi program berdasarkan evaluasi kondisi boolean.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Struktur If / Else",
              content: `Sintaks percabangan:
\`\`\`typescript
const nilai: number = 85;
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_4_mc",
                type: "multiple_choice",
                prompt: "Blok koding manakah yang akan dieksekusi jika kondisi di dalam if bernilai false?",
                conceptGuide: "Blok else dieksekusi ketika kondisi if tidak terpenuhi.",
                options: ["Blok else", "Blok if", "Blok switch", "Blok try"],
                correctAnswer: 0,
                explanation: "Tepat! Blok `else` dieksekusi jika kondisi `if` bernilai false.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari percabangan nilai 90 berikut?",
                conceptGuide: "90 >= 75 bernilai true.",
                code: `const skor: number = 90;\nif (skor >= 75) {\n  console.log("Lulus");\n} else {\n  console.log("Gagal");\n}`,
                options: ["Lulus", "Gagal", "Error", "undefined"],
                correctAnswer: "Lulus",
                explanation: "Bener! 90 >= 75 bernilai true sehingga mencetak 'Lulus'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_4_cc",
                type: "code_challenge",
                prompt: "Buat percabangan jika nilai 80 >= 75 cetak 'Lulus', jika kurang cetak 'Gagal'!",
                conceptGuide: "Tulis `const nilai: number = 80; if (nilai >= 75) { console.log(\"Lulus\"); } else { console.log(\"Gagal\"); }`.",
                starterCode: `const nilai: number = 80;\nif (nilai >= 75) {\n  console.log("Lulus");\n} else {\n  console.log("Gagal");\n}\n`,
                expectedOutput: "Lulus",
                explanation: "Hebat! Percabangan if/else berjalan dengan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_5",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Ternary Operator Short-hand",
          description: "Menulis percabangan kondisi ringkas satu baris dengan operator ternary.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Operator Ternary (`? :`)",
              content: `Sintaks ringkas percabangan satu baris:
\`\`\`typescript
const umur: number = 20;
const status: string = umur >= 17 ? "Dewasa" : "Anak-anak";
console.log(status);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_5_mc",
                type: "multiple_choice",
                prompt: "Simbol apakah yang memisahkan antara kondisi benar dan salah pada Ternary Operator?",
                conceptGuide: "Ternary operator menggunakan format `kondisi ? benar : salah`.",
                options: ["Tanda titik dua (:)", "Tanda tanya (?)", "Tanda koma (,)", "Tanda titik koma (;)"],
                correctAnswer: 0,
                explanation: "Tepat! Tanda titik dua (:) memisahkan ekspresi true dan false.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan hasil ternary 15 >= 17?",
                conceptGuide: "15 >= 17 bernilai false.",
                code: `const teks: string = 15 >= 17 ? "Dewasa" : "Remaja";\nconsole.log(teks);`,
                options: ["Remaja", "Dewasa", "Error", "undefined"],
                correctAnswer: "Remaja",
                explanation: "Bener! 15 >= 17 bernilai false sehingga mencetak 'Remaja'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_5_cc",
                type: "code_challenge",
                prompt: "Gunakan operator ternary untuk mencetak 'Aktif' jika isOnline bernilai true, jika tidak cetak 'Offline'!",
                conceptGuide: "Tulis `const isOnline: boolean = true; console.log(isOnline ? \"Aktif\" : \"Offline\");`.",
                starterCode: `const isOnline: boolean = true;\nconsole.log(isOnline ? "Aktif" : "Offline");\n`,
                expectedOutput: "Aktif",
                explanation: "Super! Operator ternary ringkas berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_6",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Switch Case Statement",
          description: "Percabangan banyak pilihan kondisi berdasarkan kecocokan nilai eksplisit.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Switch Case",
              content: `\`\`\`typescript
const peran: string = "admin";
switch (peran) {
  case "admin":
    console.log("Akses Penuh");
    break;
  default:
    console.log("Akses Terbatas");
    break;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_6_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk menghentikan percabangan switch agar tidak melompat ke case berikutnya?",
                conceptGuide: "Perintah break menghentikan eksekusi blok switch.",
                options: ["break", "stop", "exit", "continue"],
                correctAnswer: 0,
                explanation: "Tepat! `break` menghentikan alur switch case.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari switch case peran 'admin' berikut?",
                conceptGuide: "Case 'admin' mencetak 'Akses Penuh'.",
                code: `const p: string = "admin";\nswitch(p) {\n  case "admin": console.log("Akses Penuh"); break;\n  default: console.log("User"); break;\n}`,
                options: ["Akses Penuh", "User", "Error", "undefined"],
                correctAnswer: "Akses Penuh",
                explanation: "Bener! Nilai 'admin' cocok dengan case pertama.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_6_cc",
                type: "code_challenge",
                prompt: "Buat switch case untuk variabel lang = 'TS'. Jika 'TS' cetak 'TypeScript', default cetak 'Lainnya'!",
                conceptGuide: "Tulis `const lang: string = \"TS\"; switch(lang) { case \"TS\": console.log(\"TypeScript\"); break; default: console.log(\"Lainnya\"); }`.",
                starterCode: `const lang: string = "TS";\nswitch(lang) {\n  case "TS":\n    console.log("TypeScript");\n    break;\n  default:\n    console.log("Lainnya");\n    break;\n}\n`,
                expectedOutput: "TypeScript",
                explanation: "Sip! Switch case statement berjalan dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l3_7",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Operator & Kondisi",
          title: "Operator Assignment & Compound Assignment",
          description: "Mengisi dan memperbarui nilai variabel menggunakan =, +=, -=, *=, dan /=.",
          icon: "zap",
          xp: 40,
          prerequisites: ["ts_l3_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Compound Assignment",
              content: `Operator singkatan pembaruan variabel:
- \`x += 5\` sama dengan \`x = x + 5\`
- \`x -= 2\` sama dengan \`x = x - 2\`
- \`x *= 3\` sama dengan \`x = x * 3\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_7_tf",
                type: "true_false",
                prompt: "Apakah penulisan 'x += 10' identik dengan penulisan 'x = x + 10'?",
                conceptGuide: "+= adalah operator compound assignment penjumlahan.",
                statement: "x += 10 identik dengan x = x + 10.",
                correctAnswer: true,
                explanation: "Tepat sekali! Operator compound assignment membuat kode lebih ringkas.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_7_po",
                type: "predict_output",
                prompt: "Apakah nilai akhir variabel poin setelah dijalankan perintah += 50?",
                conceptGuide: "100 + 50 = 150.",
                code: `let poin: number = 100;\npoin += 50;\nconsole.log(poin);`,
                options: ["150", "10050", "50", "Error"],
                correctAnswer: "150",
                explanation: "Bener! 100 + 50 = 150.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3_7_cc",
                type: "code_challenge",
                prompt: "Buat variabel let koin: number = 10, tambahkan 5 dengan += 5, lalu cetak nilai akhirnya ke konsol!",
                conceptGuide: "Tulis `let koin: number = 10; koin += 5; console.log(koin);`.",
                starterCode: `let koin: number = 10;\nkoin += 5;\nconsole.log(koin);\n`,
                expectedOutput: "15",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 7 Lesson pada Section 03 Operator & Kondisi!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_4",
      title: "04 Perulangan (7 Lesson)",
      description: "For Loop, While Loop, Do-While, For-Of, For-In, Break & Continue, dan Nested Loops.",
      lessons: [
        {
          id: "ts_l4_1",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "For Loop Standard & Iterasi Angka",
          description: "Perulangan dengan penjelajah indeks dari nilai awal sampai batas kondisi.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l3_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "For Loop Standard",
              content: `\`\`\`typescript
for (let i: number = 1; i <= 3; i++) {
  console.log("Angka: " + i);
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_1_mc",
                type: "multiple_choice",
                prompt: "Bagian manakah di dalam perulangan for yang bertugas menambahkan nilai variabel counter?",
                conceptGuide: "Increment seperti i++ menambahkan nilai counter pada setiap putaran.",
                options: ["Increment (i++)", "Inisialisasi (let i=0)", "Kondisi (i < 5)", "Header"],
                correctAnswer: 0,
                explanation: "Tepat! `i++` bertugas menambah nilai counter i di setiap putaran.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_1_po",
                type: "predict_output",
                prompt: "Berapa kali cetakan console.log dipanggil untuk perulangan for (let i=0; i<2; i++)?",
                conceptGuide: "i = 0 (dipanggil 1x), i = 1 (dipanggil 1x) -> total 2 kali.",
                code: `for (let i: number = 0; i < 2; i++) {\n  console.log("Putaran");\n}`,
                options: ["Putaran\\nPutaran", "Putaran", "Error", "undefined"],
                correctAnswer: "Putaran\nPutaran",
                explanation: "Bener! Perulangan berjalan 2 kali untuk i = 0 dan i = 1.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_1_cc",
                type: "code_challenge",
                prompt: "Gunakan perulangan for i=1 sampai i<=2 untuk mencetak 'Iterasi 1' dan 'Iterasi 2'!",
                conceptGuide: "Tulis `for (let i: number = 1; i <= 2; i++) { console.log(\"Iterasi \" + i); }`.",
                starterCode: `for (let i = 1; i <= 2; i++) {\n  console.log("Iterasi " + i);\n}\n`,
                expectedOutput: "Iterasi 1\nIterasi 2",
                explanation: "Sip! Perulangan for standard berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_2",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "While Loop & Kondisi Perhentian",
          description: "Perulangan berbasis pengecekan kondisi sebelum mengeksekusi blok kode.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "While Loop",
              content: `\`\`\`typescript
let count: number = 1;
while (count <= 3) {
  console.log("Count: " + count);
  count++;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_2_tf",
                type: "true_false",
                prompt: "Apakah perulangan while memeriksa kondisi di awal sebelum menjalankan blok kodenya?",
                conceptGuide: "While loop mengecek kondisi sebelum blok kode dijalankan.",
                statement: "While loop mengecek kondisi di awal perulangan.",
                correctAnswer: true,
                explanation: "Mantap! Pengecekan kondisi dilakukan di awal putaran.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan akhir perulangan while berikut?",
                conceptGuide: "Count bernilai 1.",
                code: `let c: number = 1;\nwhile (c <= 1) {\n  console.log("Hitung " + c);\n  c++;\n}`,
                options: ["Hitung 1", "Hitung 2", "Error", "undefined"],
                correctAnswer: "Hitung 1",
                explanation: "Bener! c berjalan 1 kali untuk c = 1.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_2_cc",
                type: "code_challenge",
                prompt: "Gunakan while loop dengan variabel i=1 selama i<=2 untuk mencetak 'Langkah 1' dan 'Langkah 2'!",
                conceptGuide: "Tulis `let i: number = 1; while (i <= 2) { console.log(\"Langkah \" + i); i++; }`.",
                starterCode: `let i: number = 1;\nwhile (i <= 2) {\n  console.log("Langkah " + i);\n  i++;\n}\n`,
                expectedOutput: "Langkah 1\nLangkah 2",
                explanation: "Super! Perulangan while loop bekerja dengan benar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_3",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "Do-While Loop",
          description: "Perulangan yang dijamin mengeksekusi blok kode minimal 1 kali.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Do-While Loop",
              content: `\`\`\`typescript
let i: number = 1;
do {
  console.log("Eksekusi Min 1x");
  i++;
} while (i <= 0);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_3_mc",
                type: "multiple_choice",
                prompt: "Mengapa do-while loop dijamin selalu mengeksekusi blok kodenya minimal 1 kali?",
                conceptGuide: "Do-while memeriksa kondisi di akhir perulangan.",
                options: [
                  "Pengecekan kondisi dilakukan di akhir perulangan",
                  "Karena tidak memiliki variabel counter",
                  "Karena kondisi selalu bernilai true",
                  "Karena di-compile dua kali",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Pengecekan kondisi di akhir membuat blok kode minimal jalan 1x.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari do-while berikut meskipun kondisi (5 < 0) false?",
                conceptGuide: "Blok do berjalan 1x sebelum mengecek 5 < 0.",
                code: `let x: number = 5;\ndo {\n  console.log("Jalan 1x");\n  x++;\n} while (x < 0);`,
                options: ["Jalan 1x", "Error", "undefined", "Tidak ada cetakan"],
                correctAnswer: "Jalan 1x",
                explanation: "Bener! Blok do berjalan 1 kali terlebih dahulu.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_3_cc",
                type: "code_challenge",
                prompt: "Buat do-while loop yang mencetak 'Do Once' minimal 1 kali dengan variabel x = 1!",
                conceptGuide: "Tulis `let x: number = 1; do { console.log(\"Do Once\"); x++; } while (x <= 0);`.",
                starterCode: `let x: number = 1;\ndo {\n  console.log("Do Once");\n  x++;\n} while (x <= 0);\n`,
                expectedOutput: "Do Once",
                explanation: "Keren! Do-while loop minimal 1x berjalan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_4",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "For-Of Loop untuk Iterasi Array",
          description: "Sintaks modern paling bersih untuk menjelajahi elemen-elemen di dalam array.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "For-Of Loop",
              content: `\`\`\`typescript
const buah: string[] = ["Apel", "Jeruk"];
for (const item of buah) {
  console.log("Buah: " + item);
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_4_mc",
                type: "multiple_choice",
                prompt: "Jenis perulangan manakah yang dirancang khusus untuk mengiterasi nilai elemen array secara bersih?",
                conceptGuide: "for-of digunakan untuk mengambil langsung nilai (value) dari iterable/array.",
                options: ["for-of", "for-in", "while", "do-while"],
                correctAnswer: 0,
                explanation: "Tepat! `for-of` mengambil nilai elemen dari array.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari perulangan for-of array angka [10, 20] berikut?",
                conceptGuide: "Mencetak elemen 10 kemudian elemen 20.",
                code: `const nums: number[] = [10, 20];\nfor (const n of nums) {\n  console.log(n);\n}`,
                options: ["10\\n20", "10 20", "Error", "undefined"],
                correctAnswer: "10\n20",
                explanation: "Bener! Mengiterasi 10 lalu 20 ke konsol.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_4_cc",
                type: "code_challenge",
                prompt: "Gunakan for-of untuk mengiterasi array ['TS', 'JS'] dan mencetak masing-masing nilainya!",
                conceptGuide: "Tulis `const list: string[] = [\"TS\", \"JS\"]; for (const item of list) { console.log(item); }`.",
                starterCode: `const list: string[] = ["TS", "JS"];\nfor (const item of list) {\n  console.log(item);\n}\n`,
                expectedOutput: "TS\nJS",
                explanation: "Mantap! For-of loop array berjalan dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_5",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "For-In Loop untuk Iterasi Key Objek",
          description: "Menjelajahi kunci (keys/properti) dari sebuah objek JavaScript.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "For-In Loop",
              content: `\`\`\`typescript
const user = { nama: "Kadez", umur: 25 };
for (const key in user) {
  console.log(key);
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_5_mc",
                type: "multiple_choice",
                prompt: "Apakah perbedaan utama antara for-of dan for-in?",
                conceptGuide: "for-of mengiterasi NILAI, sedangkan for-in mengiterasi KUNCI (key/index).",
                options: [
                  "for-of mengiterasi nilai (values), for-in mengiterasi kunci (keys)",
                  "for-of khusus angka, for-in khusus string",
                  "for-of lebih lambat dari for-in",
                  "for-in hanya untuk perulangan while",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `for-of` untuk values, sedangkan `for-in` untuk keys.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan kunci objek { a: 1 } menggunakan for-in?",
                conceptGuide: "Key dari objek adalah 'a'.",
                code: `const obj = { a: 1 };\nfor (const k in obj) {\n  console.log(k);\n}`,
                options: ["a", "1", "Error", "undefined"],
                correctAnswer: "a",
                explanation: "Bener! For-in mencetak nama properti 'a'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_5_cc",
                type: "code_challenge",
                prompt: "Gunakan for-in untuk mencetak nama kunci dari objek { kota: 'Bandung' }!",
                conceptGuide: "Tulis `const obj = { kota: \"Bandung\" }; for (const key in obj) { console.log(key); }`.",
                starterCode: `const obj = { kota: "Bandung" };\nfor (const key in obj) {\n  console.log(key);\n}\n`,
                expectedOutput: "kota",
                explanation: "Sip! For-in loop mengiterasi kunci objek secara tepat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_6",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "Penggunaan Break & Continue",
          description: "Menghentikan perulangan (break) atau melompati putaran saat ini (continue).",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Break vs Continue",
              content: `- **break**: Menghentikan perulangan secara total dan keluar dari loop.
- **continue**: Melompati sisa kode di putaran saat ini dan langsung lanjut ke putaran berikutnya.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_6_mc",
                type: "multiple_choice",
                prompt: "Kata kunci manakah yang melompati putaran saat ini dan langsung melanjutkan ke iterasi berikutnya?",
                conceptGuide: "continue melompati sisa baris pada putaran tersebut.",
                options: ["continue", "break", "return", "exit"],
                correctAnswer: 0,
                explanation: "Tepat! `continue` melompati iterasi saat ini.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan perulangan jika i == 2 memanggil break?",
                conceptGuide: "Loop terhenti saat i == 2.",
                code: `for (let i = 1; i <= 3; i++) {\n  if (i === 2) break;\n  console.log(i);\n}`,
                options: ["1", "1\\n2", "1\\n2\\n3", "Error"],
                correctAnswer: "1",
                explanation: "Bener! Loop langsung terhenti saat i === 2.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_6_cc",
                type: "code_challenge",
                prompt: "Jalankan perulangan for i=1..3. Jika i === 2 gunakan continue, sehingga hanya 1 dan 3 yang dicetak!",
                conceptGuide: "Tulis `for (let i=1; i<=3; i++) { if (i === 2) continue; console.log(i); }`.",
                starterCode: `for (let i = 1; i <= 3; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}\n`,
                expectedOutput: "1\n3",
                explanation: "Super! Break dan continue berjalan dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l4_7",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Perulangan",
          title: "Nested Loops (Perulangan Bersarang)",
          description: "Menjalankan perulangan di dalam perulangan untuk memproses matriks atau data berdimensi.",
          icon: "refresh-cw",
          xp: 40,
          prerequisites: ["ts_l4_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Nested Loops",
              content: `Perulangan bersarang adalah perulangan di dalam perulangan lain.

\`\`\`typescript
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(\`\${i}-\${j}\`);
  }
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_7_tf",
                type: "true_false",
                prompt: "Apakah perulangan bagian dalam (inner loop) akan diselesaikan sepenuhnya pada setiap 1 putaran perulangan luar (outer loop)?",
                conceptGuide: "Inner loop berputar penuh di setiap 1 kali putaran outer loop.",
                statement: "Inner loop diselesaikan penuh di setiap putaran outer loop.",
                correctAnswer: true,
                explanation: "Tepat sekali! Inner loop selesai diputar sebelum outer loop lanjut.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_7_po",
                type: "predict_output",
                prompt: "Berapakah total cetakan yang dihasilkan dari outer loop 2x dan inner loop 2x?",
                conceptGuide: "2 x 2 = 4 total cetakan.",
                code: `let count = 0;\nfor (let i=0; i<2; i++) {\n  for (let j=0; j<2; j++) {\n    count++;\n  }\n}\nconsole.log(count);`,
                options: ["4", "2", "8", "Error"],
                correctAnswer: "4",
                explanation: "Bener! 2 putaran x 2 putaran = 4 kali cetakan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_4_7_cc",
                type: "code_challenge",
                prompt: "Buat nested loop i=1..1 dan j=1..2 untuk mencetak '1-1' dan '1-2'!",
                conceptGuide: "Tulis `for (let i=1; i<=1; i++) { for (let j=1; j<=2; j++) { console.log(\`\${i}-\${j}\`); } }`.",
                starterCode: `for (let i = 1; i <= 1; i++) {\n  for (let j = 1; j <= 2; j++) {\n    console.log(\`\${i}-\${j}\`);\n  }\n}\n`,
                expectedOutput: "1-1\n1-2",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 7 Lesson pada Section 04 Perulangan!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_5",
      title: "05 Fungsi (8 Lesson)",
      description: "Deklarasi, Arrow Functions, Default Param, Rest/Optional, Return Types, Scope, Closure, dan Pure Functions.",
      lessons: [
        {
          id: "ts_l5_1",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Deklarasi Fungsi & Return Types",
          description: "Mendefinisikan fungsi bertipe data parameter dan nilai kembalian eksplisit.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l4_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Function Signatures",
              content: `\`\`\`typescript
function hitungTotal(harga: number, jumlah: number): number {
  return harga * jumlah;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_1_mc",
                type: "multiple_choice",
                prompt: "Di manakah posisi penulisan tipe data return value pada deklarasi fungsi TypeScript?",
                conceptGuide: "Return type ditulis setelah tanda kurung parameter `): ReturnType`.",
                options: [
                  "Setelah tanda kurung parameter (): number",
                  "Sebelum kata kunci function",
                  "Di dalam tanda kurung parameter",
                  "Di akhir baris return",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Return type ditulis setelah tanda kurung parameter.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari pemanggilan fungsi tambah(10, 20)?",
                conceptGuide: "10 + 20 = 30.",
                code: `function tambah(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(tambah(10, 20));`,
                options: ["30", "1020", "Error", "undefined"],
                correctAnswer: "30",
                explanation: "Bener! 10 + 20 = 30.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_1_cc",
                type: "code_challenge",
                prompt: "Buat fungsi kali(a: number, b: number): number yang mengembalikan perkalian a * b dan cetak kali(5, 5)!",
                conceptGuide: "Tulis `function kali(a: number, b: number): number { return a * b; } console.log(kali(5, 5));`.",
                starterCode: `function kali(a: number, b: number): number {\n  return a * b;\n}\nconsole.log(kali(5, 5));\n`,
                expectedOutput: "25",
                explanation: "Sip! Deklarasi fungsi bertipe berhasil dijalankan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_2",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Arrow Function Expression",
          description: "Penulisan fungsi ekspresi modern yang ringkas menggunakan tanda panah (=>).",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Arrow Function",
              content: `\`\`\`typescript
const kuadrat = (x: number): number => x * x;
console.log(kuadrat(4)); // 16
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_2_tf",
                type: "true_false",
                prompt: "Apakah arrow function yang terdiri dari satu baris ekspresi dapat mengembalikan nilai secara implisit tanpa kata kunci return?",
                conceptGuide: "Arrow function 1 baris mengembalikan nilai secara implisit.",
                statement: "Arrow function 1 baris dapat return nilai secara implisit.",
                correctAnswer: true,
                explanation: "Mantap! `(x) => x * x` mengembalikan nilai secara implisit.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari arrow function sapa berikut?",
                conceptGuide: "Arrow function mengembalikan string salam.",
                code: `const sapa = (n: string): string => "Halo " + n;\nconsole.log(sapa("Kadez"));`,
                options: ["Halo Kadez", "Halo ", "Error", "undefined"],
                correctAnswer: "Halo Kadez",
                explanation: "Bener! 'Halo ' + 'Kadez' = 'Halo Kadez'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_2_cc",
                type: "code_challenge",
                prompt: "Buat arrow function kurangi = (a: number, b: number): number => a - b dan cetak kurangi(20, 5)!",
                conceptGuide: "Tulis `const kurangi = (a: number, b: number): number => a - b; console.log(kurangi(20, 5));`.",
                starterCode: `const kurangi = (a: number, b: number): number => a - b;\nconsole.log(kurangi(20, 5));\n`,
                expectedOutput: "15",
                explanation: "Keren! Arrow function expression bekerja dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_3",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Default Parameters dalam Fungsi",
          description: "Memberikan nilai awal bawaan pada parameter jika argumen tidak diberikan.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Default Parameters",
              content: `\`\`\`typescript
function sapaPengguna(nama: string = "Tamu"): string {
  return "Selamat Datang, " + nama;
}
console.log(sapaPengguna()); // Selamat Datang, Tamu
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_3_mc",
                type: "multiple_choice",
                prompt: "Nilai apakah yang digunakan oleh fungsi jika argumen untuk parameter berkategori default tidak diisi saat pemanggilan?",
                conceptGuide: "Fungsi menggunakan nilai default parameter.",
                options: ["Nilai default bawaan yang didefinisikan", "undefined", "null", "Error"],
                correctAnswer: 0,
                explanation: "Tepat! Nilai default bawaan digunakan jika argumen diabaikan.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari hitungDiskon(100) jika diskon default 10?",
                conceptGuide: "100 - 10 = 90.",
                code: `function hitungDiskon(h: number, d: number = 10): number {\n  return h - d;\n}\nconsole.log(hitungDiskon(100));`,
                options: ["90", "100", "Error", "undefined"],
                correctAnswer: "90",
                explanation: "Bener! 100 - 10 = 90.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_3_cc",
                type: "code_challenge",
                prompt: "Buat fungsi salam(nama: string = 'User'): string yang mengembalikan 'Halo ' + nama. Cetak salam() tanpa argumen!",
                conceptGuide: "Tulis `function salam(nama: string = \"User\"): string { return \"Halo \" + nama; } console.log(salam());`.",
                starterCode: `function salam(nama: string = "User"): string {\n  return "Halo " + nama;\n}\nconsole.log(salam());\n`,
                expectedOutput: "Halo User",
                explanation: "Super! Default parameter berjalan dengan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_4",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Optional Parameters (?) & Rest Parameters (...)",
          description: "Parameter opsional yang boleh tidak diisi (?) dan pengumpulan banyak argumen (...args).",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Optional & Rest Parameters",
              content: `- **Optional Parameter (\`?\`)**: Parameter yang tidak wajib diisi (\`pesan?: string\`).
- **Rest Parameter (\`...args\`)**: Mengumpulkan banyak argumen menjadi satu array bertipe (\`...angka: number[]\`).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_4_mc",
                type: "multiple_choice",
                prompt: "Simbol apakah yang digunakan untuk menandai parameter opsional pada fungsi TypeScript?",
                conceptGuide: "Parameter opsional menggunakan tanda tanya (?).",
                options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda bintang (*)", "Tanda titiktiga (...)"],
                correctAnswer: 0,
                explanation: "Tepat! Tanda tanya (?) menandakan parameter opsional.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari fungsi rest parameter sumAll(1, 2, 3) yang mengembalikan jumlah elemen?",
                conceptGuide: "Rest parameter menerima array [1, 2, 3] yang panjangnya 3.",
                code: `function sumAll(...nums: number[]): number {\n  return nums.length;\n}\nconsole.log(sumAll(1, 2, 3));`,
                options: ["3", "6", "123", "Error"],
                correctAnswer: "3",
                explanation: "Bener! Rest parameter menerima 3 argumen.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_4_cc",
                type: "code_challenge",
                prompt: "Buat fungsi infoUser(nama: string, umur?: number): string. Jika umur ada cetak 'Kadez - 25', jika tidak cetak nama saja!",
                conceptGuide: "Tulis `function infoUser(nama: string, umur?: number): string { return umur ? nama + \" - \" + umur : nama; } console.log(infoUser(\"Kadez\", 25));`.",
                starterCode: `function infoUser(nama: string, umur?: number): string {\n  return umur ? nama + " - " + umur : nama;\n}\nconsole.log(infoUser("Kadez", 25));\n`,
                expectedOutput: "Kadez - 25",
                explanation: "Sip! Optional parameter berhasil diproses.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_5",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Function Scope & Lexical Scope",
          description: "Memahami jangkauan aksesibilitas variabel lokal vs global.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Function & Lexical Scope",
              content: `- **Global Scope**: Variabel dideklarasikan di luar fungsi dan bisa diakses di mana saja.
- **Local Scope**: Variabel dideklarasikan di dalam fungsi dan HANYA bisa diakses di dalam fungsi tersebut.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_5_tf",
                type: "true_false",
                prompt: "Apakah variabel lokal yang dideklarasikan di dalam sebuah fungsi dapat diakses secara bebas dari luar fungsi tersebut?",
                conceptGuide: "Variabel lokal terisolasi di dalam scope fungsi.",
                statement: "Variabel lokal fungsi bisa diakses dari luar fungsi.",
                correctAnswer: false,
                explanation: "Tepat! Variabel lokal terisolasi di dalam scope fungsinya sendiri.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari variabel global appName di dalam fungsi?",
                conceptGuide: "Fungsi dapat membaca variabel global di outer scope.",
                code: `const appName: string = "CodeQuest";\nfunction test(): void {\n  console.log(appName);\n}\ntest();`,
                options: ["CodeQuest", "undefined", "Error", "null"],
                correctAnswer: "CodeQuest",
                explanation: "Bener! Lexical scope memungkinkan fungsi mengakses variabel outer scope.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_5_cc",
                type: "code_challenge",
                prompt: "Buat variabel global prefix = 'ID:' dan fungsi getID(no: number) yang mencetak prefix + no!",
                conceptGuide: "Tulis `const prefix: string = \"ID:\"; function getID(no: number): void { console.log(prefix + no); } getID(101);`.",
                starterCode: `const prefix: string = "ID:";\nfunction getID(no: number): void {\n  console.log(prefix + no);\n}\ngetID(101);\n`,
                expectedOutput: "ID:101",
                explanation: "Mantap! Function scope & lexical scope dipahami dengan baik.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_6",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Closure Konsep & Implementasi",
          description: "Fungsi yang mengingat dan mempertahankan variabel dari outer scope tempatnya dibuat.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Closure di TypeScript",
              content: `**Closure** adalah fungsi yang dapat mengingat variabel di sekelilingnya (outer lexical environment) meskipun outer function-nya telah selesai dieksekusi.

\`\`\`typescript
function buatCounter() {
  let count: number = 0;
  return function() {
    count++;
    return count;
  };
}
const hitung = buatCounter();
console.log(hitung()); // 1
console.log(hitung()); // 2
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_6_mc",
                type: "multiple_choice",
                prompt: "Apakah definisi paling tepat dari konsep Closure dalam pemrograman TypeScript?",
                conceptGuide: "Closure menyimpan referensi ke outer scope.",
                options: [
                  "Fungsi yang mengingat variabel dari outer scope tempat ia diciptakan",
                  "Fungsi yang tidak memiliki return value",
                  "Perulangan di dalam fungsi",
                  "Fungsi yang hanya bisa dipanggil satu kali",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Closure mengingat state variabel dari outer scope.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_6_po",
                type: "predict_output",
                prompt: "Apakah hasil panggilan kedua dari fungsi closure penambah berikut?",
                conceptGuide: "State count dipertahankan dari 0 -> 1 -> 2.",
                code: `function buatCounter() {\n  let c = 0;\n  return () => { c++; return c; };\n}\nconst counter = buatCounter();\ncounter();\nconsole.log(counter());`,
                options: ["2", "1", "0", "Error"],
                correctAnswer: "2",
                explanation: "Bener! Panggilan pertama mengembalikan 1, panggilan kedua 2.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_6_cc",
                type: "code_challenge",
                prompt: "Buat closure penambah nilai yang menambah +10 setiap dipanggil!",
                conceptGuide: "Tulis `function buatTambah() { let val = 0; return () => { val += 10; return val; }; } const add = buatTambah(); add(); console.log(add());`.",
                starterCode: `function buatTambah() {\n  let val = 0;\n  return () => {\n    val += 10;\n    return val;\n  };\n}\nconst add = buatTambah();\nadd();\nconsole.log(add());\n`,
                expectedOutput: "20",
                explanation: "Super! Closure berhasil mempertahankan nilai state internal.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_7",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Pure Functions vs Side Effects",
          description: "Menulis fungsi murni (pure) tanpa efek samping untuk kemudahan testing dan pemeliharaan.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pure Functions",
              content: `**Pure Function** memiliki 2 syarat utama:
1. Memberikan hasil return yang SAMA jika diberi input argumen yang sama.
2. TIDAK menghasilkan efek samping (**Side Effects**) seperti mengubah variabel global atau bermutasi data di luar fungsi.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_7_tf",
                type: "true_false",
                prompt: "Apakah fungsi yang mengubah variabel global di luar dirinya dikategori sebagai Pure Function?",
                conceptGuide: "Mengubah variabel luar dinamakan side effect.",
                statement: "Fungsi yang mengubah variabel luar adalah Pure Function.",
                correctAnswer: false,
                explanation: "Tepat! Mengubah variabel luar adalah Side Effect, sehingga bukan Pure Function.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari pure function kuadrat(3)?",
                conceptGuide: "3 * 3 = 9.",
                code: `const kuadrat = (n: number): number => n * n;\nconsole.log(kuadrat(3));`,
                options: ["9", "6", "3", "Error"],
                correctAnswer: "9",
                explanation: "Bener! 3 * 3 = 9.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_7_cc",
                type: "code_challenge",
                prompt: "Buat pure function murni tambahTiga(x: number): number => x + 3 dan cetak tambahTiga(7)!",
                conceptGuide: "Tulis `const tambahTiga = (x: number): number => x + 3; console.log(tambahTiga(7));`.",
                starterCode: `const tambahTiga = (x: number): number => x + 3;\nconsole.log(tambahTiga(7));\n`,
                expectedOutput: "10",
                explanation: "Keren! Pure function tanpa side effect berhasil dipraktikkan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l5_8",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 Fungsi",
          title: "Higher-Order Functions",
          description: "Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi baru.",
          icon: "code",
          xp: 40,
          prerequisites: ["ts_l5_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Higher-Order Functions (HOF)",
              content: `**Higher-Order Function** adalah fungsi yang dapat:
- Menerima fungsi lain sebagai parameter (Callback).
- Atau mengembalikan fungsi baru.

Contoh:
\`\`\`typescript
function eksekusi(fn: (x: number) => number, val: number): number {
  return fn(val);
}
console.log(eksekusi((n) => n * 2, 5)); // 10
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_8_mc",
                type: "multiple_choice",
                prompt: "Apakah syarat sebuah fungsi disebut sebagai Higher-Order Function?",
                conceptGuide: "HOF menerima callback atau mengembalikan fungsi.",
                options: [
                  "Menerima fungsi lain sebagai parameter atau mengembalikan fungsi",
                  "Memiliki lebih dari 10 parameter",
                  "Menggunakan perulangan for di dalamnya",
                  "Hanya mengembalikan nilai boolean",
                ],
                correctAnswer: 0,
                explanation: "Tepat! HOF mengoperasikan fungsi lain sebagai data.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_8_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari HOF eksekusi((n) => n + 5, 10)?",
                conceptGuide: "10 + 5 = 15.",
                code: `function eksekusi(fn: (x: number) => number, val: number): number {\n  return fn(val);\n}\nconsole.log(eksekusi((n) => n + 5, 10));`,
                options: ["15", "10", "5", "Error"],
                correctAnswer: "15",
                explanation: "Bener! Callback menambah 10 + 5 = 15.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_5_8_cc",
                type: "code_challenge",
                prompt: "Buat HOF jalankan(fn: (a: number) => number, val: number): number yang mengembalikan fn(val). Panggil jalankan((x) => x * 3, 4)!",
                conceptGuide: "Tulis `function jalankan(fn: (a: number) => number, val: number): number { return fn(val); } console.log(jalankan((x) => x * 3, 4));`.",
                starterCode: `function jalankan(fn: (a: number) => number, val: number): number {\n  return fn(val);\n}\nconsole.log(jalankan((x) => x * 3, 4));\n`,
                expectedOutput: "12",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 8 Lesson di Section 05 Fungsi!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_6",
      title: "06 Array & Koleksi (7 Lesson)",
      description: "Array dasar, Mutasi vs Immutability, Map/Filter/Reduce, Search methods, Spread operator, Destructuring, dan Tuple.",
      lessons: [
        {
          id: "ts_l6_1",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Array Dasar & Akses Index",
          description: "Mendefinisikan array bertipe dan mengakses elemen menggunakan indeks berbasis 0.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l5_8"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Array di TypeScript",
              content: `Array bertipe menyimpan deretan data bertipe sama. Indeks pertama dimulai dari angka 0.

\`\`\`typescript
const buahs: string[] = ["Apel", "Jeruk"];
console.log(buahs[0]); // Apel
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_1_mc",
                type: "multiple_choice",
                prompt: "Berapakah indeks elemen pertama di dalam sebuah array JavaScript/TypeScript?",
                conceptGuide: "Indeks array selalu dimulai dari 0 (zero-indexed).",
                options: ["0", "1", "-1", "null"],
                correctAnswer: 0,
                explanation: "Tepat! Indeks elemen pertama adalah 0.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari elemen angka[1] untuk array [10, 20, 30]?",
                conceptGuide: "Indeks 0 = 10, Indeks 1 = 20.",
                code: `const angka: number[] = [10, 20, 30];\nconsole.log(angka[1]);`,
                options: ["20", "10", "30", "Error"],
                correctAnswer: "20",
                explanation: "Bener! angka[1] merujuk ke elemen kedua yaitu 20.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_1_cc",
                type: "code_challenge",
                prompt: "Buat array nama: string[] = ['Budi', 'Siti'] dan cetak elemen pertama nama[0]!",
                conceptGuide: "Tulis `const nama: string[] = [\"Budi\", \"Siti\"]; console.log(nama[0]);`.",
                starterCode: `const nama: string[] = ["Budi", "Siti"];\nconsole.log(nama[0]);\n`,
                expectedOutput: "Budi",
                explanation: "Sip! Pengaksesan indeks array berjalan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_2",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Array Mutation vs Immutability",
          description: "Membedakan metode mutasi langsung (push/pop) dengan metode aman immutability.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Mutation vs Immutability",
              content: `- **Mutating Methods**: Mengubah array asli secara langsung (\`push()\`, \`pop()\`, \`shift()\`).
- **Immutable Methods**: Menghasilkan array baru tanpa mengubah array asli (\`slice()\`, \`concat()\`, \`map()\`).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_2_tf",
                type: "true_false",
                prompt: "Apakah method push() menambahkan elemen ke akhir array dan mengubah array aslinya secara langsung (mutation)?",
                conceptGuide: "push() menambah elemen dan memutasi array asli.",
                statement: "push() memutasi array asli secara langsung.",
                correctAnswer: true,
                explanation: "Mantap! `push()` memutasi array asal.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_2_po",
                type: "predict_output",
                prompt: "Apakah panjang array list setelah dipanggil list.push(3)?",
                conceptGuide: "Array awal 2 item + 1 = 3 item.",
                code: `const list: number[] = [1, 2];\nlist.push(3);\nconsole.log(list.length);`,
                options: ["3", "2", "1", "Error"],
                correctAnswer: "3",
                explanation: "Bener! Panjang array menjadi 3.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_2_cc",
                type: "code_challenge",
                prompt: "Buat array list = [1], tambah 2 dengan push(2), lalu cetak list.length!",
                conceptGuide: "Tulis `const list: number[] = [1]; list.push(2); console.log(list.length);`.",
                starterCode: `const list: number[] = [1];\nlist.push(2);\nconsole.log(list.length);\n`,
                expectedOutput: "2",
                explanation: "Keren! Metode mutasi array berhasil dijalankan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_3",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Functional Array Methods (Map, Filter, Reduce)",
          description: "Transformasi dan penyaringan data array menggunakan metode fungsi murni.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Map, Filter, & Reduce",
              content: `- **\`map()\`**: Mengubah setiap elemen array menjadi bentuk baru.
- **\`filter()\`**: Menyaring elemen yang memenuhi kondisi boolean.
- **\`reduce()\`**: Mengagregasi seluruh elemen array menjadi 1 nilai akhir.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_3_mc",
                type: "multiple_choice",
                prompt: "Method array manakah yang digunakan untuk menyaring elemen berdasarkan kondisi boolean tertentu?",
                conceptGuide: "filter() mengembalikan array baru berisi elemen yang memenuhi syarat.",
                options: ["filter()", "map()", "reduce()", "forEach()"],
                correctAnswer: 0,
                explanation: "Tepat! `filter()` digunakan untuk menyaring data.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan hasil nums.map(x => x * 2) untuk array [1, 2]?",
                conceptGuide: "1*2=2, 2*2=4 -> panjang 2.",
                code: `const nums: number[] = [1, 2];\nconst ganda = nums.map(x => x * 2);\nconsole.log(ganda.length);`,
                options: ["2", "4", "1", "Error"],
                correctAnswer: "2",
                explanation: "Bener! Panjang array ganda tetap 2 elemen.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_3_cc",
                type: "code_challenge",
                prompt: "Filter array [10, 25, 30] untuk mencari angka > 20 dan cetak panjang array filternya!",
                conceptGuide: "Tulis `const list: number[] = [10, 25, 30]; const hasil = list.filter(x => x > 20); console.log(hasil.length);`.",
                starterCode: `const list: number[] = [10, 25, 30];\nconst hasil = list.filter(x => x > 20);\nconsole.log(hasil.length);\n`,
                expectedOutput: "2",
                explanation: "Super! Functional array filter bekerja dengan presisi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_4",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Array Search Methods (some, every, find)",
          description: "Mengecek keberadaan elemen atau mencari data tunggal di dalam array.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pencarian Array",
              content: `- **\`find()\`**: Mengembalikan elemen PERTAMA yang cocok.
- **\`some()\`**: True jika minimal SALAH SATU elemen memenuhi syarat.
- **\`every()\`**: True jika SELURUH elemen memenuhi syarat.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_4_mc",
                type: "multiple_choice",
                prompt: "Method apakah yang mengembalikan elemen tunggal pertama yang memenuhi kriteria pencarian?",
                conceptGuide: "find() menemukan elemen pertama yang bernilai true.",
                options: ["find()", "some()", "every()", "filter()"],
                correctAnswer: 0,
                explanation: "Tepat! `find()` mengembalikan elemen pertama yang cocok.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_4_po",
                type: "predict_output",
                prompt: "Apakah hasil cetakan dari nums.some(x => x > 5) untuk array [1, 10]?",
                conceptGuide: "10 > 5 bernilai true sehingga some() mengembalikan true.",
                code: `const nums: number[] = [1, 10];\nconsole.log(nums.some(x => x > 5));`,
                options: ["true", "false", "Error", "undefined"],
                correctAnswer: "true",
                explanation: "Bener! Karena 10 > 5, some() mengembalikan true.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_4_cc",
                type: "code_challenge",
                prompt: "Gunakan find() pada array [5, 12, 8] untuk mencari angka > 10 dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const nums: number[] = [5, 12, 8]; const target = nums.find(x => x > 10); console.log(target);`.",
                starterCode: `const nums: number[] = [5, 12, 8];\nconst target = nums.find(x => x > 10);\nconsole.log(target);\n`,
                expectedOutput: "12",
                explanation: "Keren! Method pencarian array find() bekerja dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_5",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Array Spread Operator (...)",
          description: "Menggabungkan dan menduplikat array secara imutabel dengan titik tiga (...).",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Spread Operator (...)",
              content: `Spread operator (\`...\`) mengekspansi elemen array ke array baru.

\`\`\`typescript
const a: number[] = [1, 2];
const b: number[] = [...a, 3, 4];
console.log(b); // [1, 2, 3, 4]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_5_tf",
                type: "true_false",
                prompt: "Apakah spread operator (...) memungkinkan kita menggabungkan dua array tanpa mengubah array aslinya?",
                conceptGuide: "Spread operator membuat copy/gabungan array baru secara imutabel.",
                statement: "Spread operator menggabungkan array tanpa memutasi array asli.",
                correctAnswer: true,
                explanation: "Mantap! Spread operator bersifat imutabel.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_5_po",
                type: "predict_output",
                prompt: "Apakah panjang array gabungan [...arr1, ...arr2] jika arr1 isi 2 item dan arr2 isi 2 item?",
                conceptGuide: "2 + 2 = 4.",
                code: `const a = [1, 2]; const b = [3, 4];\nconst c = [...a, ...b];\nconsole.log(c.length);`,
                options: ["4", "2", "8", "Error"],
                correctAnswer: "4",
                explanation: "Bener! Panjang gabungan array adalah 4.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_5_cc",
                type: "code_challenge",
                prompt: "Gabungkan array a = [1] dan b = [2] pakai spread operator [...a, ...b] dan cetak panjang array gabungannya!",
                conceptGuide: "Tulis `const a = [1]; const b = [2]; const c = [...a, ...b]; console.log(c.length);`.",
                starterCode: `const a = [1];\nconst b = [2];\nconst c = [...a, ...b];\nconsole.log(c.length);\n`,
                expectedOutput: "2",
                explanation: "Sip! Spread operator array berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_6",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Array Destructuring",
          description: "Membongkar elemen array secara langsung ke dalam variabel terpisah.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Array Destructuring",
              content: `\`\`\`typescript
const koordinat: number[] = [10, 20];
const [x, y] = koordinat;
console.log(x); // 10
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_6_mc",
                type: "multiple_choice",
                prompt: "Kurung apakah yang digunakan untuk membongkar elemen variabel pada Array Destructuring?",
                conceptGuide: "Array destructuring memakai kurung siku [a, b].",
                options: ["Kurung Siku ([])", "Kurung Kurawal ({})", "Kurung Biasa (())", "Tanda Kutip"],
                correctAnswer: 0,
                explanation: "Tepat! Array destructuring memakai kurung siku `[a, b]`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan variabel pertama a dari destructuring [a, b] = ['X', 'Y']?",
                conceptGuide: "a mengekstrak elemen pertama 'X'.",
                code: `const [a, b] = ["X", "Y"];\nconsole.log(a);`,
                options: ["X", "Y", "Error", "undefined"],
                correctAnswer: "X",
                explanation: "Bener! a mendapat nilai 'X'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_6_cc",
                type: "code_challenge",
                prompt: "Bongkar array ['Kadez', 25] ke variabel [nama, umur] lalu cetak nama!",
                conceptGuide: "Tulis `const [nama, umur] = [\"Kadez\", 25]; console.log(nama);`.",
                starterCode: `const [nama, umur] = ["Kadez", 25];\nconsole.log(nama);\n`,
                expectedOutput: "Kadez",
                explanation: "Hebat! Array destructuring berjalan dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l6_7",
          language: "typescript",
          sectionId: "ts_sec_6",
          sectionTitle: "06 Array & Koleksi",
          title: "Tuple Types (Fixed Length & Order)",
          description: "Array spesial dengan jumlah dan urutan tipe data yang sudah pasti.",
          icon: "box",
          xp: 40,
          prerequisites: ["ts_l6_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tuple Types",
              content: `Tuple mengunci urutan dan tipe data tiap elemen:
\`\`\`typescript
const pasangan: [string, number] = ["Kunci", 100];
console.log(pasangan[0]); // Kunci
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_7_tf",
                type: "true_false",
                prompt: "Apakah Tuple mengunci urutan dan jenis tipe data elemen sesuai definisi posisinya?",
                conceptGuide: "Tuple mengunci panjang dan urutan tipe data.",
                statement: "Tuple mengunci urutan dan tipe data elemen.",
                correctAnswer: true,
                explanation: "Tepat! Tuple mengunci urutan tipe data.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan elemen kedua (angka) dari tuple [string, number] berikut?",
                conceptGuide: "Elemen indeks 1 adalah 200.",
                code: `const t: [string, number] = ["Data", 200];\nconsole.log(t[1]);`,
                options: ["200", "Data", "Error", "undefined"],
                correctAnswer: "200",
                explanation: "Bener! t[1] merujuk ke angka 200.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_6_7_cc",
                type: "code_challenge",
                prompt: "Buat tuple data: [string, boolean] = ['Online', true] dan cetak elemen pertama data[0]!",
                conceptGuide: "Tulis `const data: [string, boolean] = [\"Online\", true]; console.log(data[0]);`.",
                starterCode: `const data: [string, boolean] = ["Online", true];\nconsole.log(data[0]);\n`,
                expectedOutput: "Online",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 7 Lesson di Section 06 Array & Koleksi!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_7",
      title: "07 Objek & Interface (8 Lesson)",
      description: "Object Literals, Interface, Type Alias, Union, Intersection, Literal Types, Type Narrowing, dan Index Signature.",
      lessons: [
        {
          id: "ts_l7_1",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Object Literals & Inline Type Annotation",
          description: "Mendefinisikan struktur properti objek langsung secara inline.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l6_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Inline Object Types",
              content: `\`\`\`typescript
const user: { id: number; nama: string } = {
  id: 1,
  nama: "Kadez"
};
console.log(user.nama);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_1_mc",
                type: "multiple_choice",
                prompt: "Simbol apakah yang memisahkan antara properti di dalam definisi tipe objek?",
                conceptGuide: "Properti objek dipisahkan oleh tanda titik koma (;) atau koma (,).",
                options: ["Titik koma (;) atau Koma (,)", "Titik dua (:)", "Tanda hubung (-)", "Garis miring (/)"],
                correctAnswer: 0,
                explanation: "Tepat! Properti dipisahkan dengan `;` atau `,`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan properti nama dari objek berikut?",
                conceptGuide: "user.nama bernilai 'Siti'.",
                code: `const u: { nama: string } = { nama: "Siti" };\nconsole.log(u.nama);`,
                options: ["Siti", "nama", "Error", "undefined"],
                correctAnswer: "Siti",
                explanation: "Bener! u.nama mengembalikan string 'Siti'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_1_cc",
                type: "code_challenge",
                prompt: "Buat objek barang: { nama: string; harga: number } = { nama: 'Buku', harga: 5000 } lalu cetak barang.nama!",
                conceptGuide: "Tulis `const barang: { nama: string; harga: number } = { nama: \"Buku\", harga: 5000 }; console.log(barang.nama);`.",
                starterCode: `const barang: { nama: string; harga: number } = {\n  nama: "Buku",\n  harga: 5000\n};\nconsole.log(barang.nama);\n`,
                expectedOutput: "Buku",
                explanation: "Sip! Inline object type annotation berjalan dengan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_2",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Interface Objek (Required & Optional ?)",
          description: "Membangun cetak biru struktur objek yang dapat digunakan berulang kali.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Interface Objek",
              content: `\`\`\`typescript
interface UserProfile {
  id: number;
  nama: string;
  email?: string; // Properti opsional
}
const p: UserProfile = { id: 1, nama: "Budi" };
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_2_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk membuat cetak biru antarmuka struktur objek?",
                conceptGuide: "Kata kunci interface digunakan untuk objek cetak biru.",
                options: ["interface", "class", "type", "struct"],
                correctAnswer: 0,
                explanation: "Tepat! Kata kunci `interface` mendefinisikan antarmuka objek.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan properti id dari objek bertipe interface berikut?",
                conceptGuide: "item.id bernilai 101.",
                code: `interface Item { id: number; }\nconst item: Item = { id: 101 };\nconsole.log(item.id);`,
                options: ["101", "id", "Error", "undefined"],
                correctAnswer: "101",
                explanation: "Bener! item.id mengembalikan angka 101.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_2_cc",
                type: "code_challenge",
                prompt: "Buat interface Produk { nama: string; harga: number; }. Buat const p: Produk = { nama: 'Laptop', harga: 1500 }; cetak p.nama!",
                conceptGuide: "Tulis `interface Produk { nama: string; harga: number; } const p: Produk = { nama: \"Laptop\", harga: 1500 }; console.log(p.nama);`.",
                starterCode: `interface Produk {\n  nama: string;\n  harga: number;\n}\nconst p: Produk = { nama: "Laptop", harga: 1500 };\nconsole.log(p.nama);\n`,
                expectedOutput: "Laptop",
                explanation: "Super! Interface objek berhasil dikonfigurasi dan dipanggil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_3",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Type Alias (type) vs Interface",
          description: "Membandingkan type alias dengan interface dan kapan waktu tepat memakainya.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Type Alias vs Interface",
              content: `- **\`interface\`**: Fokus pada struktur OBJEK & pendukung pewarisan (\`extends\`).
- **\`type\`**: Fleksibel untuk Objek, Primitif, Union, dan Tuple (\`type ID = string | number\`).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_3_mc",
                type: "multiple_choice",
                prompt: "Fitur manakah yang HANYA bisa dilakukan oleh Type Alias (type) dan TIDAK bisa oleh Interface?",
                conceptGuide: "Type alias bisa membuat alias untuk tipe data primitif dan Union langsung.",
                options: [
                  "Membuat alias tipe data primitif atau Union langsung (type ID = string | number)",
                  "Mendefinisikan properti objek",
                  "Digunakan pada variabel",
                  "Diekspor dari modul",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `type` bisa langsung meng-alias primitif & Union.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari variabel bertipe Type Alias berikut?",
                conceptGuide: "Tipe ID adalah string.",
                code: `type ID = string;\nconst myId: ID = "USER-01";\nconsole.log(myId);`,
                options: ["USER-01", "ID", "Error", "undefined"],
                correctAnswer: "USER-01",
                explanation: "Bener! myId bernilai string 'USER-01'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_3_cc",
                type: "code_challenge",
                prompt: "Buat type Status = string. Buat const s: Status = 'Sukses' dan cetak nilainya!",
                conceptGuide: "Tulis `type Status = string; const s: Status = \"Sukses\"; console.log(s);`.",
                starterCode: `type Status = string;\nconst s: Status = "Sukses";\nconsole.log(s);\n`,
                expectedOutput: "Sukses",
                explanation: "Keren! Type Alias berhasil didefinisikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_4",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Union Types (|)",
          description: "Memungkinkan variabel memiliki salah satu dari beberapa kemungkinan tipe data.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Union Types (|)",
              content: `Union types dikombinasikan dengan pipa (\`|\`):
\`\`\`typescript
let id: string | number;
id = "ABC"; // Valid
id = 123;   // Valid
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_4_mc",
                type: "multiple_choice",
                prompt: "Karakter apakah yang digunakan untuk menghubungkan beberapa tipe data pada Union Types?",
                conceptGuide: "Union types menggunakan simbol pipa (|).",
                options: ["Pipa (|)", "Ampersand (&)", "Titik dua (:)", "Koma (,)"],
                correctAnswer: 0,
                explanation: "Tepat! Simbol pipa `|` digunakan untuk Union Types.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan variabel bertipe Union (string | number) diisi angka 50?",
                conceptGuide: "Angka 50 dicetak.",
                code: `let val: string | number = 50;\nconsole.log(val);`,
                options: ["50", "string", "number", "Error"],
                correctAnswer: "50",
                explanation: "Bener! Nilai 50 valid di dalam Union type.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_4_cc",
                type: "code_challenge",
                prompt: "Buat variabel respon: string | boolean = 'OK' lalu cetak nilainya ke konsol!",
                conceptGuide: "Tulis `const respon: string | boolean = \"OK\"; console.log(respon);`.",
                starterCode: `const respon: string | boolean = "OK";\nconsole.log(respon);\n`,
                expectedOutput: "OK",
                explanation: "Sip! Union types berhasil memfasilitasi multitipe.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_5",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Intersection Types (&)",
          description: "Menggabungkan seluruh properti dari beberapa tipe data menjadi satu tipe baru.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Intersection Types (&)",
              content: `Intersection types menggabungkan properti menggunakan ampersand (\`&\`):
\`\`\`typescript
type Nama = { nama: string };
type Umur = { umur: number };
type Person = Nama & Umur;
const p: Person = { nama: "Kadez", umur: 25 };
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_5_tf",
                type: "true_false",
                prompt: "Apakah Intersection Types (&) mewajibkan objek memiliki SELURUH properti dari tipe-tipe yang digabungkan?",
                conceptGuide: "Intersection mewajibkan penggabungan seluruh properti.",
                statement: "Intersection mewajibkan seluruh properti dari tipe yang digabungkan.",
                correctAnswer: true,
                explanation: "Mantap! Intersection menggabungkan syarat properti secara total.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan properti nama dari objek hasil gabungan Intersection berikut?",
                conceptGuide: "obj.nama bernilai 'Budi'.",
                code: `type A = { nama: string };\ntype B = { id: number };\nconst obj: A & B = { nama: "Budi", id: 1 };\nconsole.log(obj.nama);`,
                options: ["Budi", "1", "Error", "undefined"],
                correctAnswer: "Budi",
                explanation: "Bener! Properti nama terdefinisi dari tipe A.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_5_cc",
                type: "code_challenge",
                prompt: "Buat type A = { x: number } & { y: number }. Buat const p: A = { x: 5, y: 10 }; cetak p.x + p.y!",
                conceptGuide: "Tulis `type A = { x: number } & { y: number }; const p: A = { x: 5, y: 10 }; console.log(p.x + p.y);`.",
                starterCode: `type A = { x: number } & { y: number };\nconst p: A = { x: 5, y: 10 };\nconsole.log(p.x + p.y);\n`,
                expectedOutput: "15",
                explanation: "Super! Intersection Types (&) berhasil menggabungkan struktur tipe.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_6",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Literal Types & Const Assertions",
          description: "Membatasi nilai variabel hanya ke nilai teks/angka spesifik yang diizinkan.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Literal Types",
              content: `\`\`\`typescript
type Direction = "UTARA" | "SELATAN";
const arah: Direction = "UTARA"; // Hanya bisa diisi "UTARA" atau "SELATAN"
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_6_mc",
                type: "multiple_choice",
                prompt: "Manakah contoh penulisan Literal Type yang membatasi nilai string ke nilai spesifik?",
                conceptGuide: "Literal type menentukan nilai spesifik bertipe string/number.",
                options: ['type Mode = "DARK" | "LIGHT";', "type Mode = string;", "type Mode = any;", "type Mode = object;"],
                correctAnswer: 0,
                explanation: "Tepat! `type Mode = \"DARK\" | \"LIGHT\"` adalah Literal Type.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari variabel bertipe Literal berikut?",
                conceptGuide: "Nilai literal adalah 'DARK'.",
                code: `type Theme = "DARK" | "LIGHT";\nconst t: Theme = "DARK";\nconsole.log(t);`,
                options: ["DARK", "LIGHT", "Error", "undefined"],
                correctAnswer: "DARK",
                explanation: "Bener! t bernilai literal 'DARK'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_6_cc",
                type: "code_challenge",
                prompt: "Buat type Role = 'ADMIN' | 'USER'. Buat const r: Role = 'ADMIN' dan cetak nilainya ke konsol!",
                conceptGuide: "Tulis `type Role = \"ADMIN\" | \"USER\"; const r: Role = \"ADMIN\"; console.log(r);`.",
                starterCode: `type Role = "ADMIN" | "USER";\nconst r: Role = "ADMIN";\nconsole.log(r);\n`,
                expectedOutput: "ADMIN",
                explanation: "Keren! Literal types berhasil membatasi opsi nilai.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_7",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Type Narrowing (typeof, in, instanceof)",
          description: "Menyempitkan tipe data Union yang lebih luas menjadi tipe spesifik saat runtime.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Type Narrowing",
              content: `\`\`\`typescript
function proses(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_7_mc",
                type: "multiple_choice",
                prompt: "Operator operator apakah yang paling umum digunakan untuk menyempitkan tipe primitif pada Type Narrowing?",
                conceptGuide: "typeof memeriksa tipe data primitif saat runtime.",
                options: ["typeof", "instanceof", "in", "as"],
                correctAnswer: 0,
                explanation: "Tepat! `typeof` memeriksa tipe data primitif saat runtime.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan jika fungsi dipanggil dengan string 'tes'?",
                conceptGuide: "typeof 'tes' === 'string' -> 'Teks'.",
                code: `function cek(x: string | number) {\n  if (typeof x === "string") console.log("Teks");\n  else console.log("Angka");\n}\ncek("tes");`,
                options: ["Teks", "Angka", "Error", "undefined"],
                correctAnswer: "Teks",
                explanation: "Bener! Pengecekan typeof 'tes' bernilai string.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_7_cc",
                type: "code_challenge",
                prompt: "Buat fungsi printLen(val: string | number). Jika string cetak val.length, jika number cetak val!",
                conceptGuide: "Tulis `function printLen(val: string | number) { if (typeof val === \"string\") { console.log(val.length); } else { console.log(val); } } printLen(\"Halo\");`.",
                starterCode: `function printLen(val: string | number) {\n  if (typeof val === "string") {\n    console.log(val.length);\n  } else {\n    console.log(val);\n  }\n}\nprintLen("Halo");\n`,
                expectedOutput: "4",
                explanation: "Sip! Type narrowing dengan typeof berjalan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l7_8",
          language: "typescript",
          sectionId: "ts_sec_7",
          sectionTitle: "07 Objek & Interface",
          title: "Index Signatures ([key: string]: T)",
          description: "Mendefinisikan tipe untuk objek dengan nama properti yang fleksibel dan tidak terbatas.",
          icon: "building",
          xp: 40,
          prerequisites: ["ts_l7_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Index Signatures",
              content: `\`\`\`typescript
interface KamusGaji {
  [nama: string]: number;
}
const gaji: KamusGaji = {
  Budi: 5000,
  Siti: 7000
};
console.log(gaji.Budi);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_8_mc",
                type: "multiple_choice",
                prompt: "Sintaks manakah yang benar untuk mendefinisikan Index Signature dengan nama kunci string dan nilai number?",
                conceptGuide: "Index Signature menggunakan sintaks `[key: string]: number`.",
                options: ["[key: string]: number;", "key: string = number;", "interface key(string): number", "map<string, number>"],
                correctAnswer: 0,
                explanation: "Tepat! `[key: string]: number;` adalah sintaks Index Signature.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_8_po",
                type: "predict_output",
                prompt: "Apakah cetakan nilai gaji['Budi'] dari objek berikut?",
                conceptGuide: "gaji['Budi'] bernilai 5000.",
                code: `interface Gaji { [k: string]: number; }\nconst g: Gaji = { Budi: 5000 };\nconsole.log(g.Budi);`,
                options: ["5000", "Budi", "Error", "undefined"],
                correctAnswer: "5000",
                explanation: "Bener! g.Budi mengembalikan 5000.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_7_8_cc",
                type: "code_challenge",
                prompt: "Buat interface SkorMap { [nama: string]: number }. Buat const s: SkorMap = { Kadez: 100 }; cetak s.Kadez!",
                conceptGuide: "Tulis `interface SkorMap { [nama: string]: number; } const s: SkorMap = { Kadez: 100 }; console.log(s.Kadez);`.",
                starterCode: `interface SkorMap {\n  [nama: string]: number;\n}\nconst s: SkorMap = { Kadez: 100 };\nconsole.log(s.Kadez);\n`,
                expectedOutput: "100",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 8 Lesson pada Section 07 Objek & Interface!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_8",
      title: "08 Generics & Async (8 Lesson)",
      description: "Generic Functions, Interfaces, Constraints, Keyof/Typeof, Promises, Async/Await, dan Utility Types.",
      lessons: [
        {
          id: "ts_l8_1",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Generic Functions (<T>)",
          description: "Membuat fungsi fleksibel reusable yang bisa menerima berbagai tipe data secara aman.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l7_8"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Generic Functions",
              content: `\`\`\`typescript
function identitas<T>(arg: T): T {
  return arg;
}
console.log(identitas<string>("Halo")); // Halo
console.log(identitas<number>(100));     // 100
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_1_mc",
                type: "multiple_choice",
                prompt: "Huruf apakah yang paling umum digunakan sebagai konvensi standar penulisan type parameter pada Generics?",
                conceptGuide: "Konvensi standar type parameter menggunakan huruf kapital T (Type).",
                options: ["T", "G", "X", "V"],
                correctAnswer: 0,
                explanation: "Tepat! Huruf T adalah singkatan dari Type.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari identitas<string>('TypeScript')?",
                conceptGuide: "Fungsi mengembalikan argumen string yang diberikan.",
                code: `function identitas<T>(arg: T): T { return arg; }\nconsole.log(identitas<string>("TypeScript"));`,
                options: ["TypeScript", "string", "T", "Error"],
                correctAnswer: "TypeScript",
                explanation: "Bener! Mengembalikan string 'TypeScript'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_1_cc",
                type: "code_challenge",
                prompt: "Buat fungsi generic bungkus<T>(val: T) { return { data: val }; }. Cetak bungkus('Data OK').data!",
                conceptGuide: "Tulis `function bungkus<T>(val: T) { return { data: val }; } console.log(bungkus(\"Data OK\").data);`.",
                starterCode: `function bungkus<T>(val: T) {\n  return { data: val };\n}\nconsole.log(bungkus("Data OK").data);\n`,
                expectedOutput: "Data OK",
                explanation: "Sip! Generic function berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_2",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Generic Interfaces & Type Aliases",
          description: "Membangun interface dan type alias yang menerima parameter generik.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Generic Interfaces",
              content: `\`\`\`typescript
interface ResponAPI<T> {
  status: number;
  data: T;
}
const res: ResponAPI<string> = { status: 200, data: "Berhasil" };
console.log(res.data);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_2_tf",
                type: "true_false",
                prompt: "Apakah Generic Interface memungkinkan kita menentukan tipe data properti secara dinamis saat objek dibuat?",
                conceptGuide: "Generic interface fleksibel menerima tipe T yang ditentukan saat instansiasi.",
                statement: "Generic Interface menerima tipe data dinamis saat objek dibuat.",
                correctAnswer: true,
                explanation: "Mantap! Tipe data properti ditentukan secara dinamis.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan res.data dari interface ResponAPI<number> bernilai 100?",
                conceptGuide: "res.data adalah number 100.",
                code: `interface Respon<T> { data: T; }\nconst r: Respon<number> = { data: 100 };\nconsole.log(r.data);`,
                options: ["100", "data", "Error", "undefined"],
                correctAnswer: "100",
                explanation: "Bener! r.data mengembalikan angka 100.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_2_cc",
                type: "code_challenge",
                prompt: "Buat interface Box<T> { isi: T }. Buat const b: Box<string> = { isi: 'Hadiah' }; cetak b.isi!",
                conceptGuide: "Tulis `interface Box<T> { isi: T; } const b: Box<string> = { isi: \"Hadiah\" }; console.log(b.isi);`.",
                starterCode: `interface Box<T> {\n  isi: T;\n}\nconst b: Box<string> = { isi: "Hadiah" };\nconsole.log(b.isi);\n`,
                expectedOutput: "Hadiah",
                explanation: "Super! Generic Interface berhasil dikonfigurasi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_3",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Generic Constraints (<T extends object>)",
          description: "Membatasi cakupan tipe yang dapat diterima oleh parameter generik.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Generic Constraints",
              content: `\`\`\`typescript
function cetakPanjang<T extends { length: number }>(arg: T): number {
  return arg.length;
}
console.log(cetakPanjang("Teks")); // 4
console.log(cetakPanjang([1, 2])); // 2
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_3_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk menerapkan batasan (constraint) pada tipe generik?",
                conceptGuide: "Kata kunci extends membatasi tipe generik.",
                options: ["extends", "implements", "instanceof", "typeof"],
                correctAnswer: 0,
                explanation: "Tepat! `extends` membatasi cakupan tipe generik.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari cetakPanjang('Halo') yang membaca properti .length?",
                conceptGuide: "'Halo' memiliki panjang 4 karakter.",
                code: `function getLen<T extends { length: number }>(x: T): number { return x.length; }\nconsole.log(getLen("Halo"));`,
                options: ["4", "5", "Error", "undefined"],
                correctAnswer: "4",
                explanation: "Bener! Panjang karakter 'Halo' adalah 4.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_3_cc",
                type: "code_challenge",
                prompt: "Buat fungsi generic getNama<T extends { nama: string }>(obj: T): string { return obj.nama; }. Cetak getNama({ nama: 'Kadez' })!",
                conceptGuide: "Tulis `function getNama<T extends { nama: string }>(obj: T): string { return obj.nama; } console.log(getNama({ nama: \"Kadez\" }));`.",
                starterCode: `function getNama<T extends { nama: string }>(obj: T): string {\n  return obj.nama;\n}\nconsole.log(getNama({ nama: "Kadez" }));\n`,
                expectedOutput: "Kadez",
                explanation: "Keren! Generic Constraints (<T extends object>) bekerja dengan presisi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_4",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Keyof & Typeof Operators",
          description: "Mengambil tipe kunci properti objek (keyof) dan mengekstrak tipe dari nilai variabel (typeof).",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Keyof & Typeof",
              content: `- **\`keyof\`**: Mengambil Union dari seluruh nama properti suatu objek.
- **\`typeof\`**: Mengambil definisi tipe dari sebuah nilai/variabel JavaScript yang ada.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_4_mc",
                type: "multiple_choice",
                prompt: "Operator manakah yang menghasilkan Union type dari seluruh kunci properti di dalam interface?",
                conceptGuide: "keyof menghasilkan union tipe kunci properti objek.",
                options: ["keyof", "typeof", "in", "as"],
                correctAnswer: 0,
                explanation: "Tepat! `keyof` menghasilkan union dari nama properti.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_4_po",
                type: "predict_output",
                prompt: "Apakah tipe dari typeof variabel pesan = 'Halo'?",
                conceptGuide: "typeof 'Halo' mengambil tipe string.",
                code: `const pesan = "Halo";\ntype TipePesan = typeof pesan;\nconst p: TipePesan = "Dunia";\nconsole.log(p);`,
                options: ["Dunia", "Halo", "string", "Error"],
                correctAnswer: "Dunia",
                explanation: "Bener! p bernilai string 'Dunia'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_4_cc",
                type: "code_challenge",
                prompt: "Buat const user = { id: 1, nama: 'Kadez' }. Buat type UserType = typeof user. Buat const u: UserType = { id: 2, nama: 'Budi' }; cetak u.nama!",
                conceptGuide: "Tulis `const user = { id: 1, nama: \"Kadez\" }; type UserType = typeof user; const u: UserType = { id: 2, nama: \"Budi\" }; console.log(u.nama);`.",
                starterCode: `const user = { id: 1, nama: "Kadez" };\ntype UserType = typeof user;\nconst u: UserType = { id: 2, nama: "Budi" };\nconsole.log(u.nama);\n`,
                expectedOutput: "Budi",
                explanation: "Sip! Operator keyof & typeof dipahami dengan baik.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_5",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Utility Types: Partial<T> & Required<T>",
          description: "Mengubah seluruh properti tipe menjadi opsional (Partial) atau wajib (Required).",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Partial & Required Utility Types",
              content: `- **\`Partial<T>\`**: Mengubah SELURUH properti di tipe \`T\` menjadi **opsional** (\`?\`).
- **\`Required<T>\`**: Mengubah SELURUH properti di tipe \`T\` menjadi **wajib**.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_5_mc",
                type: "multiple_choice",
                prompt: "Utility type manakah yang mengubah seluruh properti sebuah interface menjadi opsional (?)?",
                conceptGuide: "Partial<T> membuat semua properti opsional.",
                options: ["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T>"],
                correctAnswer: 0,
                explanation: "Tepat! `Partial<T>` membuat semua properti opsional.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan properti nama dari Partial<User> berikut?",
                conceptGuide: "u.nama bernilai 'Siti'.",
                code: `interface User { id: number; nama: string; }\nconst u: Partial<User> = { nama: "Siti" };\nconsole.log(u.nama);`,
                options: ["Siti", "undefined", "Error", "null"],
                correctAnswer: "Siti",
                explanation: "Bener! u.nama bernilai 'Siti' tanpa mewajibkan id.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_5_cc",
                type: "code_challenge",
                prompt: "Buat interface Config { host: string; port: number; }. Buat const c: Partial<Config> = { host: 'localhost' }; cetak c.host!",
                conceptGuide: "Tulis `interface Config { host: string; port: number; } const c: Partial<Config> = { host: \"localhost\" }; console.log(c.host);`.",
                starterCode: `interface Config {\n  host: string;\n  port: number;\n}\nconst c: Partial<Config> = { host: "localhost" };\nconsole.log(c.host);\n`,
                expectedOutput: "localhost",
                explanation: "Super! Utility types Partial<T> & Required<T> bekerja dengan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_6",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Utility Types: Pick<T, K> & Omit<T, K>",
          description: "Memilih properti spesifik (Pick) atau membuang properti spesifik (Omit) dari tipe asal.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pick & Omit Utility Types",
              content: `- **\`Pick<T, K>\`**: Memilih HANYA properti kunci \`K\` dari tipe \`T\`.
- **\`Omit<T, K>\`**: Mengambil tipe \`T\` LALU MEMBUANG properti kunci \`K\`.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_6_mc",
                type: "multiple_choice",
                prompt: "Utility type manakah yang digunakan untuk MEMBUANG properti tertentu dari sebuah interface?",
                conceptGuide: "Omit<T, K> membuang properti K dari tipe T.",
                options: ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Record<K, T>"],
                correctAnswer: 0,
                explanation: "Tepat! `Omit<T, K>` membuang properti tertentu dari interface.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_6_po",
                type: "predict_output",
                prompt: "Apakah cetakan properti nama dari Pick<User, 'nama'>?",
                conceptGuide: "u.nama bernilai 'Kadez'.",
                code: `interface User { id: number; nama: string; email: string; }\ntype UserNama = Pick<User, "nama">;\nconst u: UserNama = { nama: "Kadez" };\nconsole.log(u.nama);`,
                options: ["Kadez", "undefined", "Error", "null"],
                correctAnswer: "Kadez",
                explanation: "Bener! u.nama bernilai 'Kadez'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_6_cc",
                type: "code_challenge",
                prompt: "Buat interface User { id: number; pass: string; nama: string; }. Buat type UserPublic = Omit<User, 'pass'>. Buat u: UserPublic = { id: 1, nama: 'Budi' }; cetak u.nama!",
                conceptGuide: "Tulis `interface User { id: number; pass: string; nama: string; } type UserPublic = Omit<User, \"pass\">; const u: UserPublic = { id: 1, nama: \"Budi\" }; console.log(u.nama);`.",
                starterCode: `interface User {\n  id: number;\n  pass: string;\n  nama: string;\n}\ntype UserPublic = Omit<User, "pass">;\nconst u: UserPublic = { id: 1, nama: "Budi" };\nconsole.log(u.nama);\n`,
                expectedOutput: "Budi",
                explanation: "Hebat! Utility types Pick<T, K> & Omit<T, K> berjalan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_7",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Utility Types: Record<K, T> & Readonly<T>",
          description: "Membangun peta tipe objek berstruktur (Record) dan mengunci properti imutabel (Readonly).",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Record & Readonly Utility Types",
              content: `- **\`Record<K, T>\`**: Membuat tipe objek dengan pasangan Kunci \`K\` dan Nilai \`T\`.
- **\`Readonly<T>\`**: Mengunci SELURUH properti objek agar tidak bisa diubah nilainya (immutable).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_7_tf",
                type: "true_false",
                prompt: "Apakah Readonly<T> mencegah pembaruan/mutasi nilai properti pada objek setelah dibuat?",
                conceptGuide: "Readonly mengunci semua properti agar tidak bisa diubah.",
                statement: "Readonly<T> mengunci properti objek dari mutasi.",
                correctAnswer: true,
                explanation: "Tepat! `Readonly<T>` mengunci objek secara imutabel.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan skor.Budi dari Record<string, number> berikut?",
                conceptGuide: "skor.Budi bernilai 90.",
                code: `const skor: Record<string, number> = { Budi: 90 };\nconsole.log(skor.Budi);`,
                options: ["90", "Budi", "Error", "undefined"],
                correctAnswer: "90",
                explanation: "Bener! skor.Budi mengembalikan 90.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_7_cc",
                type: "code_challenge",
                prompt: "Buat const roles: Record<string, string> = { admin: 'Super' }; cetak roles.admin!",
                conceptGuide: "Tulis `const roles: Record<string, string> = { admin: \"Super\" }; console.log(roles.admin);`.",
                starterCode: `const roles: Record<string, string> = { admin: "Super" };\nconsole.log(roles.admin);\n`,
                expectedOutput: "Super",
                explanation: "Sip! Record<K, T> & Readonly<T> dipahami dengan baik.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l8_8",
          language: "typescript",
          sectionId: "ts_sec_8",
          sectionTitle: "08 Generics & Async",
          title: "Promises & Async / Await Bertipe",
          description: "Pengolahan kode asynchronous asynchronous bertipe data ketat menggunakan Promise<T>.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l8_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Async / Await Bertipe",
              content: `\`\`\`typescript
async function fetchUser(): Promise<string> {
  return "User Data";
}
fetchUser().then(res => console.log(res));
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_8_mc",
                type: "multiple_choice",
                prompt: "Tipe return apakah yang wajib digunakan untuk fungsi yang dideklarasikan dengan kata kunci async?",
                conceptGuide: "Fungsi async selalu mengembalikan Promise<T>.",
                options: ["Promise<T>", "void", "any", "never"],
                correctAnswer: 0,
                explanation: "Tepat! Fungsi `async` selalu mengembalikan `Promise<T>`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_8_po",
                type: "predict_output",
                prompt: "Apakah cetakan hasil pemanggilan fungsi async getStatus()?",
                conceptGuide: "Promise teresolusi mengembalikan string 'Aktif'.",
                code: `async function getStatus(): Promise<string> { return "Aktif"; }\ngetStatus().then(res => console.log(res));`,
                options: ["Aktif", "Promise", "Error", "undefined"],
                correctAnswer: "Aktif",
                explanation: "Bener! .then(res => console.log(res)) mencetak 'Aktif'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_8_8_cc",
                type: "code_challenge",
                prompt: "Buat async function getData(): Promise<number> { return 200; } panggil getData().then(val => console.log(val))!",
                conceptGuide: "Tulis `async function getData(): Promise<number> { return 200; } getData().then(val => console.log(val));`.",
                starterCode: `async function getData(): Promise<number> {\n  return 200;\n}\ngetData().then(val => console.log(val));\n`,
                expectedOutput: "200",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan seluruh 8 Lesson pada Section 08 Generics & Async!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_9",
      title: "09 Arsitektur & Master (6 Lesson)",
      description: "ES Modules, Code Organization, Error Handling, Mini-Project Todo App CLI, Mini-Project REST API Parser, dan Final Assessment.",
      lessons: [
        {
          id: "ts_l9_1",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "ES Modules: Import & Export",
          description: "Mengatur modularitas kode menggunakan sintaks export dan import.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["ts_l8_8"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "ES Modules",
              content: `Modularitas memecah kode menjadi file-file terpisah:

\`\`\`typescript
// math.ts
export const tambah = (a: number, b: number): number => a + b;

// main.ts
import { tambah } from "./math";
console.log(tambah(5, 5));
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_1_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk membagikan fungsi atau interface dari sebuah file modul TypeScript?",
                conceptGuide: "export membagikan simbol ke file modul lain.",
                options: ["export", "import", "public", "share"],
                correctAnswer: 0,
                explanation: "Tepat! Kata kunci `export` membagikan simbol dari modul.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari ekspor variabel APP_NAME = 'CodeQuest'?",
                conceptGuide: "Variabel modul diekspor dan dicetak.",
                code: `export const APP_NAME: string = "CodeQuest";\nconsole.log(APP_NAME);`,
                options: ["CodeQuest", "export", "Error", "undefined"],
                correctAnswer: "CodeQuest",
                explanation: "Bener! APP_NAME bernilai 'CodeQuest'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_1_cc",
                type: "code_challenge",
                prompt: "Buat export const VERSION: string = '1.0.0' dan cetak VERSION ke konsol!",
                conceptGuide: "Tulis `export const VERSION: string = \"1.0.0\"; console.log(VERSION);`.",
                starterCode: `export const VERSION: string = "1.0.0";\nconsole.log(VERSION);\n`,
                expectedOutput: "1.0.0",
                explanation: "Sip! Sintaks ES Modules import & export berjalan lancar.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l9_2",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "Code Organization & DRY Principle",
          description: "Prinsip Don't Repeat Yourself (DRY) untuk penulisan arsitektur bersih.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["ts_l9_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Prinsip DRY (Don't Repeat Yourself)",
              content: `Prinsip **DRY** menyarankan agar setiap pengetahuan/logika dalam sistem harus memiliki representasi tunggal yang tidak berulang-ulang di berbagai tempat.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_2_tf",
                type: "true_false",
                prompt: "Apakah prinsip DRY bertujuan untuk menghindari duplikasi logika koding di dalam proyek?",
                conceptGuide: "DRY = Don't Repeat Yourself.",
                statement: "DRY bertujuan menghindari duplikasi logika kode.",
                correctAnswer: true,
                explanation: "Mantap! DRY mencegah duplikasi logika.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari helper pembantu formatHarga(5000)?",
                conceptGuide: "Fungsi helper memformat 'Rp 5000'.",
                code: `const formatHarga = (h: number): string => "Rp " + h;\nconsole.log(formatHarga(5000));`,
                options: ["Rp 5000", "5000", "Error", "undefined"],
                correctAnswer: "Rp 5000",
                explanation: "Bener! Helper formatHarga mengembalikan 'Rp 5000'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi helper reusable formatUser(n: string): string => 'User: ' + n dan cetak formatUser('Kadez')!",
                conceptGuide: "Tulis `const formatUser = (n: string): string => \"User: \" + n; console.log(formatUser(\"Kadez\"));`.",
                starterCode: `const formatUser = (n: string): string => "User: " + n;\nconsole.log(formatUser("Kadez"));\n`,
                expectedOutput: "User: Kadez",
                explanation: "Super! Prinsip DRY & organisasi kode berjalan dengan rapi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l9_3",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "Advanced Error Handling (Try / Catch / Finally)",
          description: "Menangani exception runtime secara aman menggunakan blok try/catch/finally.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["ts_l9_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Try / Catch / Finally",
              content: `\`\`\`typescript
try {
  throw new Error("Gagal Akses");
} catch (err: any) {
  console.log("Tangkap: " + err.message);
} finally {
  console.log("Selesai");
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_3_mc",
                type: "multiple_choice",
                prompt: "Blok manakah di dalam try/catch/finally yang DIJAMIN selalu dieksekusi baik terjadi error maupun tidak?",
                conceptGuide: "Blok finally selalu dijalankan di akhir.",
                options: ["finally", "catch", "try", "throw"],
                correctAnswer: 0,
                explanation: "Tepat! Blok `finally` selalu dieksekusi di akhir.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari penanganan error catch berikut?",
                conceptGuide: "Error ditangkap oleh catch.",
                code: `try {\n  throw new Error("Eror Data");\n} catch (e: any) {\n  console.log(e.message);\n}`,
                options: ["Eror Data", "Error", "undefined", "null"],
                correctAnswer: "Eror Data",
                explanation: "Bener! Catch mencetak pesan error 'Eror Data'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_3_cc",
                type: "code_challenge",
                prompt: "Gunakan try/catch untuk menangkap throw new Error('Eror Master') dan cetak err.message ke konsol!",
                conceptGuide: "Tulis `try { throw new Error(\"Eror Master\"); } catch (err: any) { console.log(err.message); }`.",
                starterCode: `try {\n  throw new Error("Eror Master");\n} catch (err: any) {\n  console.log(err.message);\n}\n`,
                expectedOutput: "Eror Master",
                explanation: "Keren! Advanced error handling berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l9_4",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "Mini-Project 1: Todo App CLI Data Engine",
          description: "Membangun mesin manajemen data Todo bertipe statis dengan fitur Tambah & Filter.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["ts_l9_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Mini-Project Todo Engine",
              content: `Mari kita buat Todo Engine bertipe statis yang mengelola daftar tugas (TodoItem).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_4_cc",
                type: "code_challenge",
                prompt: "Tuliskan Todo Engine yang menambahkan item baru dan mencetak total jumlah todo!",
                conceptGuide: "Buat interface `Todo { id: number; judul: string; }` lalu tambahkan item baru dan cetak `todos.length`.",
                starterCode: `interface Todo {\n  id: number;\n  judul: string;\n}\nconst todos: Todo[] = [{ id: 1, judul: "Belajar TS" }];\ntodos.push({ id: 2, judul: "Bikin Projek" });\nconsole.log(todos.length);\n`,
                expectedOutput: "2",
                explanation: "Luar biasa! Mini-Project Todo App CLI Data Engine selesai!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "ts_l9_5",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "Mini-Project 2: REST API Data Parser Engine",
          description: "Membangun mesin parser data JSON API bertipe statis berkecepatan tinggi.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["ts_l9_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Mini-Project REST API Parser",
              content: `Membangun parser data transaksi bertipe statis yang menyaring data transaksi 'LUNAS'.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_5_cc",
                type: "code_challenge",
                prompt: "Lengkapi parser filter transaksi LUNAS dan cetak jumlah data LUNAS!",
                conceptGuide: "Gunakan `.filter(t => t.status === \"LUNAS\")`.",
                starterCode: `interface Transaksi {\n  id: number;\n  status: string;\n}\nconst data: Transaksi[] = [\n  { id: 1, status: "LUNAS" },\n  { id: 2, status: "PENDING" },\n  { id: 3, status: "LUNAS" }\n];\nconst lunas = data.filter(t => t.status === "LUNAS");\nconsole.log(lunas.length);\n`,
                expectedOutput: "2",
                explanation: "Hebat! Mini-Project REST API Data Parser Engine berhasil diselesaikan!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "ts_l9_6",
          language: "typescript",
          sectionId: "ts_sec_9",
          sectionTitle: "09 Arsitektur & Master",
          title: "Final Assessment & Fullstack Master Challenge",
          description: "Ujian akhir penutupan kurikulum TypeScript 65 Lesson.",
          icon: "trophy",
          xp: 100,
          prerequisites: ["ts_l9_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Final Master Challenge",
              content: `Selamat! Kamu telah berada di ujung puncak Kurikulum TypeScript 65 Lesson!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9_6_cc",
                type: "code_challenge",
                prompt: "LEVEL MASTER AKHIR: Tuliskan fungsi masterCheck() yang mengembalikan string 'MASTER TYPESCRIPT KADEZ' dan cetak ke konsol!",
                conceptGuide: "Tulis `function masterCheck(): string { return \"MASTER TYPESCRIPT KADEZ\"; } console.log(masterCheck());`.",
                starterCode: `function masterCheck(): string {\n  return "MASTER TYPESCRIPT KADEZ";\n}\nconsole.log(masterCheck());\n`,
                expectedOutput: "MASTER TYPESCRIPT KADEZ",
                explanation: "SELAMAT! KAMU RESMI MENJADI MASTER TYPESCRIPT LULUSAN CODEQUEST 65 LESSON!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
