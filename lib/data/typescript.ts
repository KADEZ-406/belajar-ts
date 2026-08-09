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
  ],
};
