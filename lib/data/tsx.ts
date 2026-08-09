import { LearningPath } from "../types";

export const TSX_PATH: LearningPath = {
  language: "tsx",
  title: "Keahlian TSX / React (Kurikulum 65 Materi Utuh)",
  description: "Kurikulum super-lengkap dari dasar JSX, komponen, props, state, hooks, routing, animasi, hingga level Master CRUD kompleks & Auth Engine.",
  icon: "atom",
  sections: [
    {
      id: "tsx_sec_1",
      title: "01 Fondasi JSX & Komponen (7 Lesson)",
      description: "Sintaks JSX, komponen functional, Props Interface, Children, dan Fragment.",
      lessons: [
        {
          id: "tsx_l1_1",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Apa itu JSX & React?",
          description: "Mengenal sintaks JSX yang menggabungkan HTML dan TypeScript dalam satu file.",
          icon: "rocket",
          xp: 40,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "JSX: JavaScript XML",
              content: `JSX adalah ekstensi sintaks JavaScript yang memungkinkan kita menulis markup HTML langsung di dalam kode TypeScript/JavaScript.

React menggunakan JSX untuk mendeskripsikan tampilan UI:

\`\`\`tsx
function App() {
  return <h1>Halo Dunia</h1>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_1_mc",
                type: "multiple_choice",
                prompt: "Apakah kepanjangan dari JSX dalam ekosistem React?",
                conceptGuide: "JSX adalah singkatan dari gabungan kata JavaScript dan XML.",
                options: ["JavaScript XML", "JavaScript Extension", "Java Syntax X", "JSON Extension"],
                correctAnswer: 0,
                explanation: "Tepat! JSX adalah kepanjangan dari JavaScript XML.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_1_po",
                type: "predict_output",
                prompt: "Apakah yang dikembalikan oleh komponen Salam berikut?",
                conceptGuide: "Komponen functional mengembalikan elemen JSX.",
                code: `function Salam() {\n  return <p>Halo TSX!</p>;\n}\nconsole.log(typeof Salam);`,
                options: ["function", "object", "string", "undefined"],
                correctAnswer: "function",
                explanation: "Bener! Komponen React adalah sebuah fungsi.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_1_cc",
                type: "code_challenge",
                prompt: "Cetak pesan 'JSX React Siap!' ke konsol!",
                conceptGuide: "Gunakan `console.log(\"JSX React Siap!\");`.",
                starterCode: `console.log("JSX React Siap!");\n`,
                expectedOutput: "JSX React Siap!",
                explanation: "Luar biasa! Kamu memulai perjalanan TSX/React!",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_2",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Komponen Functional & Return JSX",
          description: "Membuat komponen functional TypeScript yang mengembalikan elemen JSX.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Membuat Komponen Functional",
              content: `Komponen functional di React adalah fungsi TypeScript biasa yang mengembalikan JSX:

\`\`\`tsx
function Tombol() {
  return <button>Klik Saya</button>;
}
export default Tombol;
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_2_mc",
                type: "multiple_choice",
                prompt: "Apakah yang WAJIB dikembalikan oleh sebuah komponen functional React?",
                conceptGuide: "Komponen React mengembalikan elemen JSX atau null.",
                options: ["Elemen JSX atau null", "String biasa", "Array angka", "Object kosong"],
                correctAnswer: 0,
                explanation: "Tepat! Komponen wajib mengembalikan JSX atau null.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_2_tf",
                type: "true_false",
                prompt: "Apakah komponen functional React dapat mengembalikan null jika tidak ada UI yang perlu dirender?",
                conceptGuide: "Mengembalikan null adalah cara valid untuk tidak merender apa pun.",
                statement: "Komponen React boleh mengembalikan null.",
                correctAnswer: true,
                explanation: "Tepat! Return null membuat komponen tidak merender apa pun.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi getNamaKomponen() yang mengembalikan string 'Button Component' dan cetak ke konsol!",
                conceptGuide: "Tulis `function getNamaKomponen() { return \"Button Component\"; } console.log(getNamaKomponen());`.",
                starterCode: `function getNamaKomponen() {\n  return "Button Component";\n}\nconsole.log(getNamaKomponen());\n`,
                expectedOutput: "Button Component",
                explanation: "Keren! Konsep komponen functional dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_3",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Props Interface & Typed Components",
          description: "Mendefinisikan kontrak Props dengan interface TypeScript untuk komponen yang aman.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Interface Props",
              content: `Props adalah data yang dikirim dari komponen induk ke komponen anak. Dengan TypeScript, kita mendefinisikan kontrak Props dengan interface:

\`\`\`tsx
interface TombolProps {
  label: string;
  warna?: string;
}

function Tombol({ label, warna = "biru" }: TombolProps) {
  return <button>{label}</button>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_3_mc",
                type: "multiple_choice",
                prompt: "Tipe data apakah yang paling tepat untuk properti Props 'judul' pada komponen kartu?",
                conceptGuide: "Teks judul disimpan sebagai data string.",
                options: ["string", "number", "boolean", "object"],
                correctAnswer: 0,
                explanation: "Tepat! Judul adalah teks, sehingga bertipe string.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari komponen yang menerima props nama dan mencetak namaProps?",
                conceptGuide: "Komponen mencetak nilai props yang diterima.",
                code: `interface Props { nama: string; }\nfunction Sapa({ nama }: Props) {\n  return nama;\n}\nconsole.log(Sapa({ nama: "Kadez" }));`,
                options: ["Kadez", "nama", "Props", "Error"],
                correctAnswer: "Kadez",
                explanation: "Bener! Props nama mengandung nilai 'Kadez'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_3_cc",
                type: "code_challenge",
                prompt: "Buat interface UserProps { nama: string }. Buat fungsi getLabel({ nama }: UserProps) yang mengembalikan 'User: ' + nama. Cetak getLabel({ nama: 'Budi' })!",
                conceptGuide: "Tulis `interface UserProps { nama: string; } function getLabel({ nama }: UserProps) { return \"User: \" + nama; } console.log(getLabel({ nama: \"Budi\" }));`.",
                starterCode: `interface UserProps {\n  nama: string;\n}\nfunction getLabel({ nama }: UserProps) {\n  return "User: " + nama;\n}\nconsole.log(getLabel({ nama: "Budi" }));\n`,
                expectedOutput: "User: Budi",
                explanation: "Super! Props Interface TypeScript berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_4",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Children Props & Komposisi Komponen",
          description: "Meneruskan konten anak menggunakan ReactNode sebagai children props.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Children Props",
              content: `Komponen dapat menerima konten anak (children) yang ditempatkan di antara tag pembuka dan penutupnya:

\`\`\`tsx
import { ReactNode } from "react";

interface KartuProps {
  children: ReactNode;
}

function Kartu({ children }: KartuProps) {
  return <div className="kartu">{children}</div>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_4_mc",
                type: "multiple_choice",
                prompt: "Tipe ReactNode dari library React digunakan untuk apa?",
                conceptGuide: "ReactNode merepresentasikan segala sesuatu yang bisa dirender React.",
                options: [
                  "Merepresentasikan konten children yang bisa dirender",
                  "Mengelola state komponen",
                  "Mendefinisikan method komponen",
                  "Mengatur routing halaman",
                ],
                correctAnswer: 0,
                explanation: "Tepat! ReactNode adalah tipe untuk children yang bisa dirender.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_4_tf",
                type: "true_false",
                prompt: "Apakah children props memungkinkan komponen menjadi kontainer yang fleksibel untuk menerima elemen UI dari luar?",
                conceptGuide: "Children menjadikan komponen seperti wadah yang fleksibel.",
                statement: "Children props membuat komponen menjadi kontainer UI yang fleksibel.",
                correctAnswer: true,
                explanation: "Mantap! Children props adalah dasar pola komposisi komponen React.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_4_cc",
                type: "code_challenge",
                prompt: "Buat fungsi wrapChildren(text: string): string yang mengembalikan '<div>' + text + '</div>' dan cetak wrapChildren('Halo')!",
                conceptGuide: "Tulis `function wrapChildren(text: string) { return \"<div>\" + text + \"</div>\"; } console.log(wrapChildren(\"Halo\"));`.",
                starterCode: `function wrapChildren(text: string): string {\n  return "<div>" + text + "</div>";\n}\nconsole.log(wrapChildren("Halo"));\n`,
                expectedOutput: "<div>Halo</div>",
                explanation: "Keren! Pola children props berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_5",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "JSX Expressions & Curly Braces {}",
          description: "Menyisipkan ekspresi JavaScript ke dalam template JSX menggunakan kurung kurawal.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Ekspresi di dalam JSX",
              content: `Di dalam JSX, gunakan kurung kurawal \`{}\` untuk menyisipkan ekspresi JavaScript apa pun:

\`\`\`tsx
const nama = "Kadez";
const elemen = <h1>Halo {nama}!</h1>;

// Bisa juga ekspresi:
const umur = 25;
const teks = <p>Umur: {umur * 2}</p>; // Hasilnya: 50
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_5_mc",
                type: "multiple_choice",
                prompt: "Simbol apakah yang digunakan untuk menyisipkan ekspresi JavaScript ke dalam JSX?",
                conceptGuide: "Ekspresi disisipkan ke JSX menggunakan kurung kurawal.",
                options: ["Kurung kurawal {}", "Kurung biasa ()", "Kurung siku []", "Tanda persen %%"],
                correctAnswer: 0,
                explanation: "Tepat! Kurung kurawal `{}` digunakan untuk ekspresi JSX.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_5_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari ekspresi template string JSX berikut?",
                conceptGuide: "Nilai variabel disisipkan ke template string.",
                code: `const produk = "Laptop";\nconst harga = 15000;\nconsole.log(\`Beli \${produk} seharga \${harga}\`);`,
                options: ["Beli Laptop seharga 15000", "Beli ${produk} seharga ${harga}", "Error", "undefined"],
                correctAnswer: "Beli Laptop seharga 15000",
                explanation: "Bener! Ekspresi variabel berhasil disisipkan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_5_cc",
                type: "code_challenge",
                prompt: "Buat variabel skor = 95. Cetak 'Nilai: 95' menggunakan template string!",
                conceptGuide: "Tulis `const skor = 95; console.log(\`Nilai: \${skor}\`);`.",
                starterCode: `const skor = 95;\nconsole.log(\`Nilai: \${skor}\`);\n`,
                expectedOutput: "Nilai: 95",
                explanation: "Sip! JSX Expressions dengan template string berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_6",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Fragment & Multiple Root Elements",
          description: "Mengelola banyak elemen JSX tanpa menambahkan DOM wrapper yang tidak perlu.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "React Fragment",
              content: `Komponen React hanya boleh mengembalikan SATU root element. Gunakan Fragment \`<></>\` atau \`<React.Fragment>\` untuk membungkus beberapa elemen tanpa menambahkan DOM node tambahan:

\`\`\`tsx
function Daftar() {
  return (
    <>
      <h1>Judul</h1>
      <p>Konten</p>
    </>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_6_mc",
                type: "multiple_choice",
                prompt: "Sintaks pendek Fragment React yang tidak menambahkan elemen DOM tambahan adalah?",
                conceptGuide: "Fragment menggunakan sintaks singkatan tag kosong.",
                options: ["<> </> (Tag Kosong)", "<Fragment> </Fragment>", "<div> </div>", "<React> </React>"],
                correctAnswer: 0,
                explanation: "Tepat! `<></>` adalah sintaks pendek React Fragment.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_6_tf",
                type: "true_false",
                prompt: "Apakah React Fragment `<></>` menambahkan elemen DOM nyata ke dalam halaman web?",
                conceptGuide: "Fragment tidak menghasilkan elemen DOM nyata.",
                statement: "React Fragment menambahkan elemen DOM ke halaman web.",
                correctAnswer: false,
                explanation: "Tepat! Fragment TIDAK menambahkan elemen DOM ke halaman.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_6_cc",
                type: "code_challenge",
                prompt: "Cetak 'Fragment: Tanpa Node Tambahan' ke konsol untuk mensimulasikan Fragment!",
                conceptGuide: "Tulis `console.log(\"Fragment: Tanpa Node Tambahan\");`.",
                starterCode: `console.log("Fragment: Tanpa Node Tambahan");\n`,
                expectedOutput: "Fragment: Tanpa Node Tambahan",
                explanation: "Sip! Konsep Fragment berhasil dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l1_7",
          language: "tsx",
          sectionId: "tsx_sec_1",
          sectionTitle: "01 Fondasi JSX & Komponen",
          title: "Conditional Rendering",
          description: "Menampilkan atau menyembunyikan elemen UI berdasarkan nilai state atau kondisi.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l1_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Conditional Rendering",
              content: `Tampilkan elemen berbeda berdasarkan kondisi menggunakan operator ternary atau short-circuit:

\`\`\`tsx
const isLogin = true;

function Header() {
  return (
    <header>
      {isLogin ? <p>Selamat Datang!</p> : <p>Silakan Login</p>}
    </header>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_7_mc",
                type: "multiple_choice",
                prompt: "Teknik apakah yang paling umum digunakan untuk conditional rendering di dalam JSX?",
                conceptGuide: "Ternary operator adalah teknik paling populer di dalam JSX.",
                options: [
                  "Operator ternary (? :)",
                  "Switch case",
                  "If statement multi-baris",
                  "For loop",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Operator ternary adalah yang paling umum di JSX.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari conditional rendering berikut jika isLogin = false?",
                conceptGuide: "isLogin false -> menampilkan teks 'Login Dulu'.",
                code: `const isLogin = false;\nconst teks = isLogin ? "Selamat Datang" : "Login Dulu";\nconsole.log(teks);`,
                options: ["Login Dulu", "Selamat Datang", "Error", "undefined"],
                correctAnswer: "Login Dulu",
                explanation: "Bener! isLogin false memilih opsi kedua ternary.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_1_7_cc",
                type: "code_challenge",
                prompt: "Buat variabel isAktif = true. Cetak 'Status: Aktif' jika true, 'Status: Nonaktif' jika false menggunakan ternary!",
                conceptGuide: "Tulis `const isAktif = true; console.log(\"Status: \" + (isAktif ? \"Aktif\" : \"Nonaktif\"));`.",
                starterCode: `const isAktif = true;\nconsole.log("Status: " + (isAktif ? "Aktif" : "Nonaktif"));\n`,
                expectedOutput: "Status: Aktif",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson di Section 01 Fondasi JSX!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_2",
      title: "02 State & Event Handling (7 Lesson)",
      description: "useState, Event Handlers, Form Input, Controlled Components, dan State Lifting.",
      lessons: [
        {
          id: "tsx_l2_1",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "useState Hook Dasar",
          description: "Mengelola data reaktif di dalam komponen menggunakan hook useState.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l1_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useState Hook",
              content: `Hook \`useState\` memungkinkan komponen menyimpan dan memperbarui data lokal:

\`\`\`tsx
import { useState } from "react";

function Penghitung() {
  const [angka, setAngka] = useState<number>(0);
  return (
    <button onClick={() => setAngka(angka + 1)}>
      Klik: {angka}
    </button>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_1_mc",
                type: "multiple_choice",
                prompt: "Apakah yang dikembalikan oleh pemanggilan useState() di React?",
                conceptGuide: "useState mengembalikan tuple berisi nilai state dan fungsi setter.",
                options: [
                  "Tuple [nilai state, fungsi setter]",
                  "Hanya nilai state",
                  "Hanya fungsi setter",
                  "Object berisi state",
                ],
                correctAnswer: 0,
                explanation: "Tepat! useState mengembalikan [state, setState].",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_1_po",
                type: "predict_output",
                prompt: "Apakah nilai awal state dari useState(0) di bawah?",
                conceptGuide: "Nilai argumen useState adalah nilai awal state.",
                code: `const [count, setCount] = [0, () => {}];\nconsole.log(count);`,
                options: ["0", "undefined", "null", "Error"],
                correctAnswer: "0",
                explanation: "Bener! Nilai awal state adalah 0.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan useState: buat let count = 0, tambah 1, lalu cetak nilai count ke konsol!",
                conceptGuide: "Tulis `let count = 0; count += 1; console.log(count);`.",
                starterCode: `let count = 0;\ncount += 1;\nconsole.log(count);\n`,
                expectedOutput: "1",
                explanation: "Sip! Konsep perbaruan state berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_2",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "Tipe State: String, Number, Boolean",
          description: "Mendefinisikan tipe data state secara eksplisit untuk string, number, dan boolean.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Typed useState",
              content: `Berikan tipe generik pada useState untuk keamanan tipe data:

\`\`\`tsx
const [nama, setNama] = useState<string>("");
const [skor, setSkor] = useState<number>(0);
const [isVisible, setVisible] = useState<boolean>(true);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_2_mc",
                type: "multiple_choice",
                prompt: "Bagaimana cara mendefinisikan tipe state string pada useState di TypeScript?",
                conceptGuide: "Tipe generik ditulis di dalam tanda kurung sudut <T>.",
                options: ["useState<string>(\"\")", "useState: string(\"\")", "useState[string](\"\")", "string.useState(\"\")"],
                correctAnswer: 0,
                explanation: "Tepat! Tipe generik `<string>` ditulis setelah useState.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_2_tf",
                type: "true_false",
                prompt: "Apakah TypeScript dapat menginferensi tipe useState secara otomatis dari nilai awal yang diberikan?",
                conceptGuide: "TypeScript menginferensi tipe dari nilai awal jika tidak diberikan secara eksplisit.",
                statement: "TypeScript bisa menginferensi tipe useState dari nilai awal.",
                correctAnswer: true,
                explanation: "Mantap! TypeScript menginferensi tipe dari nilai awal (misal: 0 -> number).",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan state boolean: buat let isOpen = false, ubah ke true, lalu cetak ke konsol!",
                conceptGuide: "Tulis `let isOpen = false; isOpen = true; console.log(isOpen);`.",
                starterCode: `let isOpen = false;\nisOpen = true;\nconsole.log(isOpen);\n`,
                expectedOutput: "true",
                explanation: "Keren! Tipe state boolean berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_3",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "Event Handlers & onClick",
          description: "Menangani interaksi pengguna menggunakan event handler bertipe di React.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Event Handlers di React",
              content: `Di React, event handler ditulis sebagai fungsi bertipe dan diikatkan ke elemen JSX:

\`\`\`tsx
function TombolKlik() {
  const handleClick = (): void => {
    console.log("Tombol diklik!");
  };
  return <button onClick={handleClick}>Klik Saya</button>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_3_mc",
                type: "multiple_choice",
                prompt: "Prop JSX apakah yang digunakan untuk menangani event klik pada elemen button?",
                conceptGuide: "Event klik menggunakan prop camelCase onClick.",
                options: ["onClick", "onCLick", "click", "handleClick"],
                correctAnswer: 0,
                explanation: "Tepat! Prop `onClick` (camelCase) untuk menangani klik.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan saat handler klik berikut dipanggil?",
                conceptGuide: "Handler mencetak pesan ke konsol.",
                code: `const handleClick = (): void => {\n  console.log("Diklik!");\n};\nhandleClick();`,
                options: ["Diklik!", "undefined", "void", "Error"],
                correctAnswer: "Diklik!",
                explanation: "Bener! Handler mencetak 'Diklik!' saat dipanggil.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_3_cc",
                type: "code_challenge",
                prompt: "Buat fungsi handleKlik(): void yang mencetak 'Event Klik Diproses!' dan panggil langsung!",
                conceptGuide: "Tulis `function handleKlik(): void { console.log(\"Event Klik Diproses!\"); } handleKlik();`.",
                starterCode: `function handleKlik(): void {\n  console.log("Event Klik Diproses!");\n}\nhandleKlik();\n`,
                expectedOutput: "Event Klik Diproses!",
                explanation: "Super! Event handler berhasil dibuat dan dipanggil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_4",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "onChange & Input Handling",
          description: "Menangani perubahan nilai input form menggunakan event onChange.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Input onChange Handler",
              content: `Untuk menangani perubahan nilai input, gunakan event \`onChange\`:

\`\`\`tsx
function FormInput() {
  const [nilai, setNilai] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNilai(e.target.value);
  };
  return <input type="text" value={nilai} onChange={handleChange} />;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_4_mc",
                type: "multiple_choice",
                prompt: "Properti apakah dari event ChangeEvent yang digunakan untuk mengambil nilai terbaru dari input?",
                conceptGuide: "Nilai input diakses dari e.target.value.",
                options: ["e.target.value", "e.value", "e.input.value", "e.data"],
                correctAnswer: 0,
                explanation: "Tepat! `e.target.value` mengambil nilai terbaru dari input.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_4_tf",
                type: "true_false",
                prompt: "Apakah komponen input yang menggunakan state sebagai sumber nilai tunggalnya disebut Controlled Component?",
                conceptGuide: "Controlled component mengontrol nilai input melalui state React.",
                statement: "Input yang nilainya dikontrol state disebut Controlled Component.",
                correctAnswer: true,
                explanation: "Tepat! Controlled component mengikuti nilai state secara eksklusif.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan onChange: buat let nilai = '', update ke 'Kadez', lalu cetak nilai ke konsol!",
                conceptGuide: "Tulis `let nilai = \"\"; nilai = \"Kadez\"; console.log(nilai);`.",
                starterCode: `let nilai = "";\nnilai = "Kadez";\nconsole.log(nilai);\n`,
                expectedOutput: "Kadez",
                explanation: "Mantap! Konsep controlled input berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_5",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "State dengan Array & Object",
          description: "Mengelola state yang lebih kompleks berupa array dan objek dengan pattern imutabel.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "State Array & Object",
              content: `Saat memperbarui state array atau object, JANGAN mutasi langsung, gunakan spread operator:

\`\`\`tsx
const [items, setItems] = useState<string[]>([]);

// Tambah item baru:
const tambah = (item: string) => {
  setItems([...items, item]);
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_5_mc",
                type: "multiple_choice",
                prompt: "Cara yang benar untuk menambahkan elemen baru ke state array di React adalah?",
                conceptGuide: "State array diperbarui secara imutabel menggunakan spread operator.",
                options: [
                  "setItems([...items, itemBaru])",
                  "items.push(itemBaru)",
                  "items[items.length] = itemBaru",
                  "setItems.push(itemBaru)",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Spread operator membuat array baru secara imutabel.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_5_po",
                type: "predict_output",
                prompt: "Apakah panjang array hasil spread berikut?",
                conceptGuide: "Array lama + 1 item baru = panjang baru.",
                code: `const items = ["A", "B"];\nconst baru = [...items, "C"];\nconsole.log(baru.length);`,
                options: ["3", "2", "1", "Error"],
                correctAnswer: "3",
                explanation: "Bener! Array baru panjangnya 3.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_5_cc",
                type: "code_challenge",
                prompt: "Buat array daftar = ['Apel']. Tambahkan 'Jeruk' secara imutabel dengan spread. Cetak panjang daftar baru!",
                conceptGuide: "Tulis `const daftar = [\"Apel\"]; const baru = [...daftar, \"Jeruk\"]; console.log(baru.length);`.",
                starterCode: `const daftar = ["Apel"];\nconst baru = [...daftar, "Jeruk"];\nconsole.log(baru.length);\n`,
                expectedOutput: "2",
                explanation: "Super! Pembaruan state array secara imutabel berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_6",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "State Lifting & Shared State",
          description: "Mengangkat state ke komponen induk agar bisa dibagikan ke beberapa komponen anak.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "State Lifting",
              content: `Ketika dua komponen perlu berbagi data yang sama, angkat (lift) state ke komponen induk terdekat mereka, lalu teruskan melalui props:

\`\`\`tsx
function Induk() {
  const [skor, setSkor] = useState<number>(0);
  return <Anak skor={skor} onTambah={() => setSkor(skor + 1)} />;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_6_mc",
                type: "multiple_choice",
                prompt: "Mengapa teknik State Lifting digunakan dalam React?",
                conceptGuide: "Lifting state memungkinkan berbagi state antar komponen sibling.",
                options: [
                  "Agar beberapa komponen sibling bisa berbagi state yang sama",
                  "Untuk membuat state berjalan lebih cepat",
                  "Untuk menghapus state dari komponen",
                  "Untuk mengubah tipe data state",
                ],
                correctAnswer: 0,
                explanation: "Tepat! State Lifting memungkinkan berbagi state antar sibling.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_6_tf",
                type: "true_false",
                prompt: "Apakah State Lifting mengharuskan state dipindahkan ke komponen induk paling dekat?",
                conceptGuide: "Angkat state ke Common Ancestor (induk terdekat).",
                statement: "State Lifting dipindahkan ke komponen induk terdekat yang dibutuhkan.",
                correctAnswer: true,
                explanation: "Mantap! Angkat state ke Common Ancestor terdekat.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan State Lifting: buat variabel skor = 0 di parent, teruskan ke anak sebagai param, cetak 'Skor Anak: 0'!",
                conceptGuide: "Tulis `const skor = 0; const skorAnak = (s: number) => 'Skor Anak: ' + s; console.log(skorAnak(skor));`.",
                starterCode: `const skor = 0;\nconst skorAnak = (s: number): string => "Skor Anak: " + s;\nconsole.log(skorAnak(skor));\n`,
                expectedOutput: "Skor Anak: 0",
                explanation: "Keren! Pola State Lifting disimulasikan dengan sempurna.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l2_7",
          language: "tsx",
          sectionId: "tsx_sec_2",
          sectionTitle: "02 State & Event Handling",
          title: "Form Submit & onSubmit Handler",
          description: "Menangani pengiriman form dengan preventDefault dan validasi sederhana.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l2_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Form onSubmit Handler",
              content: `Tangani pengiriman form dengan event \`onSubmit\` dan panggil \`e.preventDefault()\` untuk mencegah reload halaman:

\`\`\`tsx
function FormLogin() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Dikirim!");
  };
  return <form onSubmit={handleSubmit}></form>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_7_mc",
                type: "multiple_choice",
                prompt: "Mengapa kita memanggil e.preventDefault() di dalam handler onSubmit form?",
                conceptGuide: "preventDefault mencegah perilaku default browser untuk reload halaman.",
                options: [
                  "Mencegah browser me-reload halaman setelah submit",
                  "Untuk menghapus semua input form",
                  "Untuk memvalidasi input secara otomatis",
                  "Untuk mengirim data ke server",
                ],
                correctAnswer: 0,
                explanation: "Tepat! preventDefault mencegah reload halaman otomatis browser.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari handler submit berikut?",
                conceptGuide: "Handler dipanggil saat submit.",
                code: `const handleSubmit = () => {\n  console.log("Form Valid Dikirim!");\n};\nhandleSubmit();`,
                options: ["Form Valid Dikirim!", "submit", "Error", "undefined"],
                correctAnswer: "Form Valid Dikirim!",
                explanation: "Bener! Handler submit mencetak konfirmasi pengiriman.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_2_7_cc",
                type: "code_challenge",
                prompt: "Buat fungsi prosesForm() yang mencetak 'Data Terkirim!' dan panggil langsung!",
                conceptGuide: "Tulis `function prosesForm() { console.log(\"Data Terkirim!\"); } prosesForm();`.",
                starterCode: `function prosesForm() {\n  console.log("Data Terkirim!");\n}\nprosesForm();\n`,
                expectedOutput: "Data Terkirim!",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 02 State & Event Handling!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_3",
      title: "03 Hooks Esensial (7 Lesson)",
      description: "useEffect, useRef, useCallback, useMemo, Custom Hooks, dan Context API.",
      lessons: [
        {
          id: "tsx_l3_1",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "useEffect & Lifecycle Komponen",
          description: "Menjalankan efek samping seperti fetch data dan subscription menggunakan useEffect.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l2_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useEffect Hook",
              content: `Hook \`useEffect\` menjalankan kode efek samping setelah render komponen:

\`\`\`tsx
import { useEffect, useState } from "react";

function Komponen() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    console.log("Komponen dimount!");
    return () => console.log("Komponen di-unmount!");
  }, []); // Array kosong = jalankan hanya saat mount
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_1_mc",
                type: "multiple_choice",
                prompt: "Apakah yang dimaksud dengan dependency array [] (kosong) pada useEffect?",
                conceptGuide: "Array kosong berarti efek hanya berjalan sekali saat mount.",
                options: [
                  "Efek hanya berjalan sekali saat komponen pertama kali dimount",
                  "Efek berjalan setiap render",
                  "Efek tidak pernah berjalan",
                  "Efek berjalan 2 kali",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Array kosong [] berarti efek berjalan hanya saat mount.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_1_tf",
                type: "true_false",
                prompt: "Apakah fungsi yang dikembalikan di dalam useEffect berfungsi sebagai fungsi pembersihan (cleanup) saat komponen di-unmount?",
                conceptGuide: "Return function di useEffect adalah cleanup function.",
                statement: "Fungsi return di dalam useEffect adalah cleanup function saat unmount.",
                correctAnswer: true,
                explanation: "Mantap! Return function di useEffect adalah cleanup/teardown function.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan useEffect: cetak 'Komponen Dimount!' saat pertama kali dijalankan!",
                conceptGuide: "Tulis `console.log(\"Komponen Dimount!\");`.",
                starterCode: `console.log("Komponen Dimount!");\n`,
                expectedOutput: "Komponen Dimount!",
                explanation: "Sip! Konsep useEffect lifecycle dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_2",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "useEffect Dependencies & Data Fetching",
          description: "Menggunakan dependency array untuk mengontrol kapan efek dijalankan ulang.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useEffect dengan Dependencies",
              content: `useEffect berjalan ulang setiap kali nilai di dependency array berubah:

\`\`\`tsx
useEffect(() => {
  console.log("userId berubah: " + userId);
  // fetch data baru berdasarkan userId
}, [userId]); // Berjalan ulang setiap userId berubah
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_2_mc",
                type: "multiple_choice",
                prompt: "Kapan useEffect dengan dependency array [userId] akan berjalan ulang?",
                conceptGuide: "useEffect berjalan ulang setiap nilai dependency berubah.",
                options: [
                  "Setiap kali nilai userId berubah",
                  "Setiap render komponen",
                  "Hanya saat pertama mount",
                  "Tidak pernah berjalan ulang",
                ],
                correctAnswer: 0,
                explanation: "Tepat! useEffect berjalan ulang saat dependency berubah.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan saat userId berubah dari 1 ke 2?",
                conceptGuide: "Efek berjalan saat dependency userId berubah.",
                code: `const userId = 2;\nconsole.log("Fetch user: " + userId);`,
                options: ["Fetch user: 2", "Fetch user: 1", "Error", "undefined"],
                correctAnswer: "Fetch user: 2",
                explanation: "Bener! Efek berjalan dengan userId terbaru yaitu 2.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan data fetching: cetak 'Fetching data untuk ID: 5'!",
                conceptGuide: "Tulis `const id = 5; console.log(\"Fetching data untuk ID: \" + id);`.",
                starterCode: `const id = 5;\nconsole.log("Fetching data untuk ID: " + id);\n`,
                expectedOutput: "Fetching data untuk ID: 5",
                explanation: "Super! Dependencies useEffect berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_3",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "useRef & DOM Manipulation",
          description: "Mengakses elemen DOM secara langsung tanpa re-render menggunakan useRef.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useRef Hook",
              content: `\`useRef\` menyimpan referensi ke elemen DOM atau nilai yang persisten tanpa memicu re-render:

\`\`\`tsx
const inputRef = useRef<HTMLInputElement>(null);

const fokusInput = () => {
  inputRef.current?.focus(); // Fokus ke input tanpa re-render
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_3_mc",
                type: "multiple_choice",
                prompt: "Apa kegunaan utama useRef di React?",
                conceptGuide: "useRef menyimpan referensi ke DOM atau nilai persisten tanpa re-render.",
                options: [
                  "Menyimpan referensi DOM atau nilai persisten tanpa memicu re-render",
                  "Mengelola state global",
                  "Melakukan fetch data API",
                  "Mengatur routing halaman",
                ],
                correctAnswer: 0,
                explanation: "Tepat! useRef menyimpan referensi tanpa memicu re-render.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_3_tf",
                type: "true_false",
                prompt: "Apakah memperbarui nilai ref (ref.current = nilai) akan memicu komponen untuk merender ulang?",
                conceptGuide: "Perubahan nilai ref tidak memicu re-render.",
                statement: "Memperbarui ref.current memicu re-render komponen.",
                correctAnswer: false,
                explanation: "Tepat! Mengubah ref.current TIDAK memicu re-render.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan useRef: buat object ref = { current: 'input' } lalu cetak ref.current!",
                conceptGuide: "Tulis `const ref = { current: \"input\" }; console.log(ref.current);`.",
                starterCode: `const ref = { current: "input" };\nconsole.log(ref.current);\n`,
                expectedOutput: "input",
                explanation: "Keren! Konsep useRef berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_4",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "useMemo & useCallback Optimization",
          description: "Mengoptimalkan performa komponen dengan memoization kalkulasi dan fungsi.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useMemo & useCallback",
              content: `- **\`useMemo\`**: Menyimpan hasil kalkulasi mahal agar tidak dihitung ulang setiap render.
- **\`useCallback\`**: Menyimpan referensi fungsi agar tidak dibuat ulang setiap render.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_4_mc",
                type: "multiple_choice",
                prompt: "Apa perbedaan antara useMemo dan useCallback?",
                conceptGuide: "useMemo memoize nilai, useCallback memoize fungsi.",
                options: [
                  "useMemo memoize nilai hasil kalkulasi, useCallback memoize referensi fungsi",
                  "Keduanya sama persis",
                  "useMemo untuk async, useCallback untuk sync",
                  "useCallback lebih cepat dari useMemo",
                ],
                correctAnswer: 0,
                explanation: "Tepat! useMemo untuk nilai, useCallback untuk fungsi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_4_tf",
                type: "true_false",
                prompt: "Apakah useMemo berguna untuk menghindari kalkulasi berat yang berulang pada setiap render komponen?",
                conceptGuide: "useMemo memoize hasil kalkulasi untuk menghindari komputasi berulang.",
                statement: "useMemo berguna menghindari kalkulasi berat berulang pada setiap render.",
                correctAnswer: true,
                explanation: "Mantap! useMemo mengoptimalkan kalkulasi mahal dengan memoization.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan useMemo: simpan hasil kalkulasi 100 * 50 ke variabel memo dan cetak hasilnya!",
                conceptGuide: "Tulis `const memo = 100 * 50; console.log(memo);`.",
                starterCode: `const memo = 100 * 50;\nconsole.log(memo);\n`,
                expectedOutput: "5000",
                explanation: "Sip! Konsep memoization berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_5",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "Custom Hooks",
          description: "Membuat hook kustom untuk mengekstrak dan berbagi logika stateful yang dapat digunakan ulang.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Custom Hooks",
              content: `Custom Hooks adalah fungsi TypeScript biasa yang diawali \`use\` dan dapat memanggil hooks lainnya:

\`\`\`tsx
function useHitung(awal: number) {
  const [nilai, setNilai] = useState<number>(awal);
  const tambah = () => setNilai(v => v + 1);
  const kurangi = () => setNilai(v => v - 1);
  return { nilai, tambah, kurangi };
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_5_mc",
                type: "multiple_choice",
                prompt: "Konvensi penamaan apakah yang wajib diikuti oleh Custom Hook React?",
                conceptGuide: "Custom Hook harus diawali kata 'use' agar React mengenalinya.",
                options: [
                  "Diawali dengan kata 'use' (misal: useNama)",
                  "Diawali dengan kata 'hook'",
                  "Diawali dengan huruf kapital H",
                  "Bebas tidak ada konvensi",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Custom Hook wajib diawali kata `use`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_5_tf",
                type: "true_false",
                prompt: "Apakah Custom Hook dapat memanggil hooks React bawaan seperti useState dan useEffect di dalamnya?",
                conceptGuide: "Custom Hook bebas memanggil hooks React lainnya.",
                statement: "Custom Hook dapat memanggil useState dan useEffect.",
                correctAnswer: true,
                explanation: "Mantap! Custom Hook bebas menggunakan hooks lainnya.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan custom hook: buat function useNama() yang mengembalikan string 'Hook Custom' dan cetak hasil pemanggilannya!",
                conceptGuide: "Tulis `function useNama() { return \"Hook Custom\"; } console.log(useNama());`.",
                starterCode: `function useNama() {\n  return "Hook Custom";\n}\nconsole.log(useNama());\n`,
                expectedOutput: "Hook Custom",
                explanation: "Super! Custom Hook berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_6",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "useReducer untuk State Kompleks",
          description: "Mengelola state kompleks multi-aksi menggunakan pola reducer seperti Redux.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "useReducer Hook",
              content: `\`useReducer\` cocok untuk state yang memiliki logika transisi kompleks:

\`\`\`tsx
type Aksi = { type: "TAMBAH" } | { type: "KURANGI" };

function reducer(state: number, action: Aksi): number {
  switch (action.type) {
    case "TAMBAH": return state + 1;
    case "KURANGI": return state - 1;
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, 0);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_6_mc",
                type: "multiple_choice",
                prompt: "Kapan useReducer lebih disarankan digunakan daripada useState?",
                conceptGuide: "useReducer cocok untuk state dengan banyak jenis aksi atau logika transisi.",
                options: [
                  "Saat state memiliki banyak jenis aksi dan logika transisi kompleks",
                  "Saat state hanya berupa string sederhana",
                  "Saat menggunakan Context API saja",
                  "Saat state tidak pernah berubah",
                ],
                correctAnswer: 0,
                explanation: "Tepat! useReducer untuk logika state kompleks multi-aksi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_6_po",
                type: "predict_output",
                prompt: "Apakah hasil state setelah dispatch TAMBAH dengan nilai awal 10?",
                conceptGuide: "Aksi TAMBAH menambah 1 ke state awal 10.",
                code: `function reducer(state: number, action: string): number {\n  if (action === "TAMBAH") return state + 1;\n  return state;\n}\nconsole.log(reducer(10, "TAMBAH"));`,
                options: ["11", "10", "1", "Error"],
                correctAnswer: "11",
                explanation: "Bener! 10 + 1 = 11.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_6_cc",
                type: "code_challenge",
                prompt: "Buat fungsi reducer(state: number, aksi: string): number. Jika aksi 'RESET' return 0, else return state. Cetak reducer(50, 'RESET')!",
                conceptGuide: "Tulis `function reducer(state: number, aksi: string): number { if (aksi === \"RESET\") return 0; return state; } console.log(reducer(50, \"RESET\"));`.",
                starterCode: `function reducer(state: number, aksi: string): number {\n  if (aksi === "RESET") return 0;\n  return state;\n}\nconsole.log(reducer(50, "RESET"));\n`,
                expectedOutput: "0",
                explanation: "Mantap! useReducer pattern berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l3_7",
          language: "tsx",
          sectionId: "tsx_sec_3",
          sectionTitle: "03 Hooks Esensial",
          title: "Context API & useContext",
          description: "Berbagi state global ke seluruh pohon komponen tanpa prop drilling.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l3_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Context API",
              content: `Context API memungkinkan berbagi data global tanpa prop drilling:

\`\`\`tsx
const ThemeContext = createContext<string>("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <TombolTema />
    </ThemeContext.Provider>
  );
}
function TombolTema() {
  const tema = useContext(ThemeContext);
  return <p>Tema: {tema}</p>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_7_mc",
                type: "multiple_choice",
                prompt: "Masalah apakah yang diselesaikan oleh Context API di React?",
                conceptGuide: "Context menghilangkan kebutuhan meneruskan props melewati banyak level komponen.",
                options: [
                  "Prop Drilling (meneruskan props melewati banyak level yang tidak perlu)",
                  "State tidak tersinkronisasi",
                  "Komponen render terlalu cepat",
                  "Event tidak terdeteksi",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Context menyelesaikan masalah Prop Drilling.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari nilai context tema berikut?",
                conceptGuide: "Context value adalah 'dark'.",
                code: `const tema = "dark";\nconsole.log("Tema: " + tema);`,
                options: ["Tema: dark", "Tema: light", "Error", "undefined"],
                correctAnswer: "Tema: dark",
                explanation: "Bener! Nilai context adalah 'dark'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_3_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan Context: buat const userCtx = { role: 'ADMIN' } dan cetak userCtx.role ke konsol!",
                conceptGuide: "Tulis `const userCtx = { role: \"ADMIN\" }; console.log(userCtx.role);`.",
                starterCode: `const userCtx = { role: "ADMIN" };\nconsole.log(userCtx.role);\n`,
                expectedOutput: "ADMIN",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 03 Hooks Esensial!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_4",
      title: "04 Styling & Animasi (7 Lesson)",
      description: "CSS Modules, Inline Styles, className dinamis, Tailwind, Keyframe Animations, dan Scroll Animations.",
      lessons: [
        {
          id: "tsx_l4_1",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "Inline Styles & className di JSX",
          description: "Menerapkan gaya CSS langsung di JSX menggunakan prop style dan className.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l3_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Inline Styles di JSX",
              content: `Di JSX, inline style ditulis sebagai object TypeScript dengan properti camelCase:

\`\`\`tsx
const styleTombol: React.CSSProperties = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  padding: "12px 24px",
};

<button style={styleTombol}>Klik</button>
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_1_mc",
                type: "multiple_choice",
                prompt: "Bagaimana cara menulis properti CSS 'background-color' di dalam inline style object JSX?",
                conceptGuide: "Properti CSS dikebab-case dikonversi ke camelCase di JSX.",
                options: ["backgroundColor", "background-color", "BackgroundColor", "background_color"],
                correctAnswer: 0,
                explanation: "Tepat! CSS property ditulis camelCase di JSX object.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_1_tf",
                type: "true_false",
                prompt: "Apakah prop className di JSX berfungsi sama seperti atribut class di HTML biasa?",
                conceptGuide: "className di JSX setara dengan class di HTML.",
                statement: "className di JSX setara dengan atribut class di HTML.",
                correctAnswer: true,
                explanation: "Tepat! `className` adalah pengganti `class` di JSX.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan inline style: buat object style = { color: 'biru', padding: '10px' } dan cetak style.color!",
                conceptGuide: "Tulis `const style = { color: \"biru\", padding: \"10px\" }; console.log(style.color);`.",
                starterCode: `const style = { color: "biru", padding: "10px" };\nconsole.log(style.color);\n`,
                expectedOutput: "biru",
                explanation: "Sip! Inline style object berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_2",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "Dynamic className & Conditional Styling",
          description: "Menerapkan kelas CSS secara dinamis berdasarkan state dan props.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dynamic className",
              content: `Gabungkan className secara dinamis menggunakan template literal atau library clsx:

\`\`\`tsx
const isAktif = true;
const kelasBtn = \`btn \${isAktif ? "btn-aktif" : "btn-nonaktif"}\`;

// Dengan library clsx:
import clsx from "clsx";
const kelas = clsx("btn", { "btn-aktif": isAktif, "btn-lg": true });
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_2_mc",
                type: "multiple_choice",
                prompt: "Teknik apakah yang digunakan untuk menggabungkan className secara dinamis di JSX?",
                conceptGuide: "Template literal atau library clsx untuk className dinamis.",
                options: [
                  "Template literals atau library clsx",
                  "Operator + biasa saja",
                  "Array join()',",
                  "CSS variables",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Template literals atau clsx untuk className dinamis.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_2_po",
                type: "predict_output",
                prompt: "Apakah className yang dihasilkan jika isAktif = true?",
                conceptGuide: "Template literal menggabungkan class statis dan dinamis.",
                code: `const isAktif = true;\nconst kelas = \`btn \${isAktif ? "aktif" : "nonaktif"}\`;\nconsole.log(kelas);`,
                options: ["btn aktif", "btn nonaktif", "aktif", "Error"],
                correctAnswer: "btn aktif",
                explanation: "Bener! Menghasilkan string 'btn aktif'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_2_cc",
                type: "code_challenge",
                prompt: "Buat variabel isDark = true. Cetak className 'tema-dark' jika true, 'tema-light' jika false!",
                conceptGuide: "Tulis `const isDark = true; console.log(isDark ? \"tema-dark\" : \"tema-light\");`.",
                starterCode: `const isDark = true;\nconsole.log(isDark ? "tema-dark" : "tema-light");\n`,
                expectedOutput: "tema-dark",
                explanation: "Keren! Dynamic className berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_3",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "CSS Modules di Next.js",
          description: "Mengisolasi gaya CSS per komponen menggunakan CSS Modules agar tidak bocor ke global.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "CSS Modules",
              content: `CSS Modules mengisolasi gaya CSS hanya untuk komponen terkait:

\`\`\`tsx
// Kartu.module.css
// .kartu { background: white; border-radius: 8px; }

import styles from "./Kartu.module.css";

function Kartu() {
  return <div className={styles.kartu}>Konten</div>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_3_mc",
                type: "multiple_choice",
                prompt: "Apa keunggulan utama CSS Modules dibanding global CSS biasa?",
                conceptGuide: "CSS Modules mengisolasi kelas CSS agar tidak bocor ke komponen lain.",
                options: [
                  "Kelas CSS terisolasi per komponen, tidak bocor ke global",
                  "Lebih cepat dari CSS biasa",
                  "Tidak memerlukan file .css terpisah",
                  "Otomatis menambahkan vendor prefix",
                ],
                correctAnswer: 0,
                explanation: "Tepat! CSS Modules mengisolasi kelas per komponen.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_3_tf",
                type: "true_false",
                prompt: "Apakah nama kelas dari CSS Modules secara otomatis dibuat unik agar tidak tabrakan dengan kelas global?",
                conceptGuide: "CSS Modules secara otomatis menghasilkan nama kelas yang unik.",
                statement: "CSS Modules menghasilkan nama kelas unik secara otomatis.",
                correctAnswer: true,
                explanation: "Mantap! CSS Modules menghasilkan hash unik untuk nama kelas.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan CSS Modules: buat object styles = { kartu: 'kartu_abc123' } dan cetak styles.kartu!",
                conceptGuide: "Tulis `const styles = { kartu: \"kartu_abc123\" }; console.log(styles.kartu);`.",
                starterCode: `const styles = { kartu: "kartu_abc123" };\nconsole.log(styles.kartu);\n`,
                expectedOutput: "kartu_abc123",
                explanation: "Super! CSS Modules pattern berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_4",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "CSS Transitions & Hover Effects",
          description: "Menambahkan animasi transisi halus pada interaksi hover menggunakan CSS Transition.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "CSS Transitions",
              content: `Gunakan properti CSS \`transition\` untuk animasi perubahan nilai properti yang halus:

\`\`\`css
.tombol {
  background-color: #3b82f6;
  transition: all 0.3s ease-in-out;
}
.tombol:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_4_mc",
                type: "multiple_choice",
                prompt: "Properti CSS manakah yang digunakan untuk membuat animasi transisi perubahan nilai properti CSS secara halus?",
                conceptGuide: "Properti transition menganimasi perubahan nilai CSS.",
                options: ["transition", "animation", "transform", "keyframe"],
                correctAnswer: 0,
                explanation: "Tepat! Properti `transition` menganimasikan perubahan nilai CSS.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_4_tf",
                type: "true_false",
                prompt: "Apakah properti transform: scale(1.05) membuat elemen tampak sedikit lebih besar dari ukuran aslinya?",
                conceptGuide: "scale(1.05) memperbesar elemen sebesar 5% dari ukuran asli.",
                statement: "transform: scale(1.05) memperbesar elemen sebesar 5%.",
                correctAnswer: true,
                explanation: "Tepat! scale(1.05) membuat elemen 5% lebih besar.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan hover effect: buat object style awal dan hover, cetak 'Hover: scale(1.05)'!",
                conceptGuide: "Tulis `const hover = \"scale(1.05)\"; console.log(\"Hover: \" + hover);`.",
                starterCode: `const hover = "scale(1.05)";\nconsole.log("Hover: " + hover);\n`,
                expectedOutput: "Hover: scale(1.05)",
                explanation: "Keren! Konsep CSS Transition & Hover dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_5",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "CSS Keyframe Animations",
          description: "Membuat animasi kompleks multi-tahap menggunakan @keyframes dan animation.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "CSS Keyframe Animations",
              content: `Keyframe animations mendefinisikan animasi multi-tahap:

\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.kartu-masuk {
  animation: fadeIn 0.5s ease-out forwards;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_5_mc",
                type: "multiple_choice",
                prompt: "Kata kunci CSS apakah yang mendefinisikan titik awal animasi keyframe?",
                conceptGuide: "Kata kunci 'from' mendefinisikan keadaan awal animasi.",
                options: ["from", "start", "begin", "0%"],
                correctAnswer: 0,
                explanation: "Tepat! `from` mendefinisikan keadaan awal keyframe.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_5_tf",
                type: "true_false",
                prompt: "Apakah nilai animation-fill-mode: 'forwards' membuat elemen mempertahankan gaya akhir animasi setelah animasi selesai?",
                conceptGuide: "forwards mempertahankan state akhir animasi setelah selesai.",
                statement: "animation-fill-mode: forwards mempertahankan gaya akhir animasi.",
                correctAnswer: true,
                explanation: "Tepat! `forwards` membuat elemen mempertahankan state akhir animasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan animasi: cetak nama animasi 'fadeIn 0.5s ease-out forwards' ke konsol!",
                conceptGuide: "Tulis `console.log(\"fadeIn 0.5s ease-out forwards\");`.",
                starterCode: `console.log("fadeIn 0.5s ease-out forwards");\n`,
                expectedOutput: "fadeIn 0.5s ease-out forwards",
                explanation: "Super! CSS Keyframe Animation berhasil dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_6",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "Scroll Animations dengan IntersectionObserver",
          description: "Memicu animasi saat elemen memasuki viewport menggunakan IntersectionObserver API.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "IntersectionObserver API",
              content: `IntersectionObserver memicu callback saat elemen memasuki atau keluar viewport:

\`\`\`tsx
useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aktif");
    }
  }, { threshold: 0.1 });

  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_6_mc",
                type: "multiple_choice",
                prompt: "Properti apakah dari IntersectionObserver entry yang bernilai true saat elemen terlihat di viewport?",
                conceptGuide: "isIntersecting bernilai true saat elemen masuk viewport.",
                options: ["entry.isIntersecting", "entry.visible", "entry.inView", "entry.active"],
                correctAnswer: 0,
                explanation: "Tepat! `entry.isIntersecting` bernilai true saat elemen di viewport.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_6_tf",
                type: "true_false",
                prompt: "Apakah IntersectionObserver lebih hemat performa dibanding listener scroll manual?",
                conceptGuide: "IntersectionObserver lebih efisien dari scroll event listener manual.",
                statement: "IntersectionObserver lebih hemat performa dari scroll event manual.",
                correctAnswer: true,
                explanation: "Mantap! IntersectionObserver berjalan di thread terpisah.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan scroll animation: buat variabel isIntersecting = true. Cetak 'Animasi Aktif' jika true!",
                conceptGuide: "Tulis `const isIntersecting = true; console.log(isIntersecting ? \"Animasi Aktif\" : \"Tersembunyi\");`.",
                starterCode: `const isIntersecting = true;\nconsole.log(isIntersecting ? "Animasi Aktif" : "Tersembunyi");\n`,
                expectedOutput: "Animasi Aktif",
                explanation: "Keren! Scroll Animation dengan IntersectionObserver dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l4_7",
          language: "tsx",
          sectionId: "tsx_sec_4",
          sectionTitle: "04 Styling & Animasi",
          title: "Modal Dialog Component",
          description: "Membangun komponen modal dialog yang muncul dan menghilang dengan animasi.",
          icon: "zap",
          xp: 40,
          prerequisites: ["tsx_l4_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Modal Dialog Component",
              content: `Modal adalah dialog yang tampil di atas konten utama:

\`\`\`tsx
function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Judul Modal</h2>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_7_mc",
                type: "multiple_choice",
                prompt: "Mengapa kita memanggil e.stopPropagation() di dalam elemen modal dialog?",
                conceptGuide: "stopPropagation mencegah klik di modal meneruskan event ke overlay.",
                options: [
                  "Mencegah klik di dalam modal menutup modal (event bubble ke overlay)",
                  "Untuk membuat modal lebih cepat",
                  "Untuk menyimpan state modal",
                  "Untuk mengubah warna modal",
                ],
                correctAnswer: 0,
                explanation: "Tepat! stopPropagation mencegah event bubble ke overlay.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_7_po",
                type: "predict_output",
                prompt: "Apakah yang dikembalikan komponen Modal jika isOpen = false?",
                conceptGuide: "Modal mengembalikan null jika tidak terbuka.",
                code: `const isOpen = false;\nconst hasil = isOpen ? "Modal Tampil" : null;\nconsole.log(hasil);`,
                options: ["null", "Modal Tampil", "undefined", "Error"],
                correctAnswer: "null",
                explanation: "Bener! Modal tidak dirender jika isOpen false.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_4_7_cc",
                type: "code_challenge",
                prompt: "Buat variabel isOpen = true. Cetak 'Modal Ditampilkan' jika true, 'Modal Tersembunyi' jika false!",
                conceptGuide: "Tulis `const isOpen = true; console.log(isOpen ? \"Modal Ditampilkan\" : \"Modal Tersembunyi\");`.",
                starterCode: `const isOpen = true;\nconsole.log(isOpen ? "Modal Ditampilkan" : "Modal Tersembunyi");\n`,
                expectedOutput: "Modal Ditampilkan",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 04 Styling & Animasi!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_5",
      title: "05 Lists, Keys & Rendering (7 Lesson)",
      description: "Render daftar, keys unik, list operations, conditional list, dan render optimization.",
      lessons: [
        {
          id: "tsx_l5_1",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Rendering Daftar dengan .map()",
          description: "Mengubah array data menjadi daftar elemen JSX menggunakan metode map.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l4_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "List Rendering",
              content: `Gunakan \`.map()\` untuk mengubah array menjadi elemen JSX:

\`\`\`tsx
const kota: string[] = ["Jakarta", "Bandung", "Surabaya"];

function DaftarKota() {
  return (
    <ul>
      {kota.map(k => <li key={k}>{k}</li>)}
    </ul>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_1_mc",
                type: "multiple_choice",
                prompt: "Method array apakah yang paling umum digunakan untuk mengubah data menjadi elemen JSX di React?",
                conceptGuide: "Array.map() mengubah setiap elemen menjadi JSX element.",
                options: [".map()", ".forEach()", ".filter()", ".reduce()"],
                correctAnswer: 0,
                explanation: "Tepat! `.map()` mengubah data array menjadi elemen JSX.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_1_po",
                type: "predict_output",
                prompt: "Apakah cetakan jumlah elemen dari list rendering berikut?",
                conceptGuide: "Array buah terdiri dari 3 elemen.",
                code: `const buah = ["Apel", "Jeruk", "Mangga"];\nconst items = buah.map(b => "<li>" + b + "</li>");\nconsole.log(items.length);`,
                options: ["3", "1", "0", "Error"],
                correctAnswer: "3",
                explanation: "Bener! map() menghasilkan 3 elemen li.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_1_cc",
                type: "code_challenge",
                prompt: "Map array ['A', 'B', 'C'] menjadi array 'Item A', 'Item B', 'Item C' dan cetak elemen pertamanya!",
                conceptGuide: "Tulis `const arr = [\"A\", \"B\", \"C\"]; const hasil = arr.map(x => \"Item \" + x); console.log(hasil[0]);`.",
                starterCode: `const arr = ["A", "B", "C"];\nconst hasil = arr.map(x => "Item " + x);\nconsole.log(hasil[0]);\n`,
                expectedOutput: "Item A",
                explanation: "Sip! List rendering dengan .map() berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_2",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Prop Key yang Unik & Stabil",
          description: "Memahami peran prop key dalam membantu React mengidentifikasi perubahan daftar.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Prop Key di React",
              content: `React menggunakan \`key\` untuk mengidentifikasi elemen mana yang berubah, ditambahkan, atau dihapus secara efisien. Key harus unik di antara sibling:

\`\`\`tsx
const produk = [
  { id: 1, nama: "Laptop" },
  { id: 2, nama: "Mouse" },
];
produk.map(p => <li key={p.id}>{p.nama}</li>)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_2_mc",
                type: "multiple_choice",
                prompt: "Apakah nilai terbaik yang digunakan sebagai prop key dalam list rendering?",
                conceptGuide: "Gunakan ID unik dan stabil dari data, bukan indeks array.",
                options: [
                  "ID unik dari data (misal: item.id)",
                  "Indeks array (index)",
                  "Nama variabel komponen",
                  "Timestamp saat ini",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Gunakan ID unik dan stabil dari data.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_2_tf",
                type: "true_false",
                prompt: "Apakah menggunakan indeks array sebagai key di list yang item-nya dapat dihapus atau direorder adalah praktik yang baik?",
                conceptGuide: "Indeks sebagai key menyebabkan masalah saat item diubah urutannya.",
                statement: "Menggunakan indeks array sebagai key di list yang berubah-ubah adalah praktik baik.",
                correctAnswer: false,
                explanation: "Tepat! Indeks sebagai key berisiko saat item dihapus atau diurutkan ulang.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_2_cc",
                type: "code_challenge",
                prompt: "Map array [{ id: 1, n: 'A' }] dan cetak key id dari elemen pertama!",
                conceptGuide: "Tulis `const list = [{ id: 1, n: \"A\" }]; console.log(list[0].id);`.",
                starterCode: `const list = [{ id: 1, n: "A" }];\nconsole.log(list[0].id);\n`,
                expectedOutput: "1",
                explanation: "Keren! Penggunaan ID unik sebagai key dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_3",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Filtering & Sorting Data List",
          description: "Menerapkan filter dan pengurutan pada data sebelum dirender ke tampilan.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Filter & Sort Data",
              content: `\`\`\`tsx
const produk = [
  { id: 1, nama: "Laptop", harga: 15000 },
  { id: 2, nama: "Mouse", harga: 150 },
];

// Filter harga > 1000
const mahal = produk.filter(p => p.harga > 1000);

// Sort ascending
const terurut = [...produk].sort((a, b) => a.harga - b.harga);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_3_mc",
                type: "multiple_choice",
                prompt: "Mengapa kita menggunakan spread `[...arr]` sebelum memanggil .sort() pada state array?",
                conceptGuide: "sort() memutasi array asli, spread membuat salinan imutabel sebelum diurutkan.",
                options: [
                  "Karena sort() memutasi array asli, spread membuat salinan terlebih dahulu",
                  "Karena sort() tidak bekerja tanpa spread",
                  "Untuk mempercepat proses sorting",
                  "Karena spread menambahkan item baru",
                ],
                correctAnswer: 0,
                explanation: "Tepat! spread membuat salinan sebelum sort() memutasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_3_po",
                type: "predict_output",
                prompt: "Berapa panjang array setelah filter produk dengan harga > 1000?",
                conceptGuide: "Hanya Laptop (15000) yang lebih dari 1000.",
                code: `const p = [{ h: 15000 }, { h: 150 }];\nconst mahal = p.filter(x => x.h > 1000);\nconsole.log(mahal.length);`,
                options: ["1", "2", "0", "Error"],
                correctAnswer: "1",
                explanation: "Bener! Hanya 1 produk yang lebih dari 1000.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_3_cc",
                type: "code_challenge",
                prompt: "Filter array skor [90, 50, 70] untuk angka >= 70 dan cetak panjang array hasilnya!",
                conceptGuide: "Tulis `const skor = [90, 50, 70]; const lulus = skor.filter(s => s >= 70); console.log(lulus.length);`.",
                starterCode: `const skor = [90, 50, 70];\nconst lulus = skor.filter(s => s >= 70);\nconsole.log(lulus.length);\n`,
                expectedOutput: "2",
                explanation: "Super! Filtering data list berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_4",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Empty State & Loading State",
          description: "Menampilkan UI yang tepat saat data masih dimuat atau daftar kosong.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Empty & Loading States",
              content: `\`\`\`tsx
function DaftarProduk({ isLoading, data }: Props) {
  if (isLoading) return <p>Memuat data...</p>;
  if (data.length === 0) return <p>Tidak ada produk.</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.nama}</li>)}</ul>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_4_mc",
                type: "multiple_choice",
                prompt: "UI apakah yang sebaiknya ditampilkan saat data sedang diambil dari API?",
                conceptGuide: "Loading state memberikan feedback visual saat data belum tersedia.",
                options: [
                  "Loading state (spinner atau skeleton UI)",
                  "Data kosong langsung",
                  "Error message",
                  "Tidak perlu menampilkan apa-apa",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Tampilkan loading state saat data sedang diambil.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_4_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari logika empty state dengan data kosong berikut?",
                conceptGuide: "Data kosong -> tampilkan pesan empty state.",
                code: `const data: string[] = [];\nconst output = data.length === 0 ? "Tidak ada data." : "Ada data";\nconsole.log(output);`,
                options: ["Tidak ada data.", "Ada data", "Error", "undefined"],
                correctAnswer: "Tidak ada data.",
                explanation: "Bener! Data kosong menampilkan empty state.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan loading state: buat isLoading = true. Cetak 'Memuat...' jika true, 'Data Siap' jika false!",
                conceptGuide: "Tulis `const isLoading = true; console.log(isLoading ? \"Memuat...\" : \"Data Siap\");`.",
                starterCode: `const isLoading = true;\nconsole.log(isLoading ? "Memuat..." : "Data Siap");\n`,
                expectedOutput: "Memuat...",
                explanation: "Mantap! Loading state dipahami dan disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_5",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Search & Live Filter",
          description: "Membangun fitur pencarian real-time yang memfilter daftar saat pengguna mengetik.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Live Search Filter",
              content: `\`\`\`tsx
function SearchList() {
  const [query, setQuery] = useState<string>("");
  const data = ["React", "TypeScript", "Node", "Next.js"];
  const filtered = data.filter(d => 
    d.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{filtered.map(item => <li key={item}>{item}</li>)}</ul>
    </>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_5_mc",
                type: "multiple_choice",
                prompt: "Method string apakah yang digunakan untuk pencocokan pencarian case-insensitive?",
                conceptGuide: "toLowerCase().includes() memungkinkan pencocokan tanpa memperhatikan huruf besar-kecil.",
                options: [
                  ".toLowerCase().includes(query.toLowerCase())",
                  ".match(query)",
                  ".equals(query)",
                  ".search(query)",
                ],
                correctAnswer: 0,
                explanation: "Tepat! toLowerCase + includes untuk case-insensitive search.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_5_po",
                type: "predict_output",
                prompt: "Berapa panjang hasil filter kata 'rea' dari array ['React', 'Angular', 'Preact']?",
                conceptGuide: "React dan Preact mengandung 'rea' (case insensitive).",
                code: `const list = ["React", "Angular", "Preact"];\nconst hasil = list.filter(x => x.toLowerCase().includes("rea"));\nconsole.log(hasil.length);`,
                options: ["2", "1", "3", "Error"],
                correctAnswer: "2",
                explanation: "Bener! React dan Preact mengandung 'rea'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_5_cc",
                type: "code_challenge",
                prompt: "Filter array ['React', 'Vue', 'Angular', 'Svelte'] yang mengandung 'e' dan cetak panjangnya!",
                conceptGuide: "Tulis `const fw = [\"React\", \"Vue\", \"Angular\", \"Svelte\"]; const f = fw.filter(x => x.toLowerCase().includes(\"e\")); console.log(f.length);`.",
                starterCode: `const fw = ["React", "Vue", "Angular", "Svelte"];\nconst f = fw.filter(x => x.toLowerCase().includes("e"));\nconsole.log(f.length);\n`,
                expectedOutput: "3",
                explanation: "Super! Live search filter berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_6",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Pagination & Data Slicing",
          description: "Membagi data besar menjadi halaman-halaman kecil menggunakan slice dan state page.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pagination",
              content: `\`\`\`tsx
const PERHALAMAN = 5;
const [halaman, setHalaman] = useState<number>(1);

const dataHalaman = data.slice(
  (halaman - 1) * PERHALAMAN,
  halaman * PERHALAMAN
);
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_6_mc",
                type: "multiple_choice",
                prompt: "Method array apakah yang digunakan untuk mengambil slice data untuk halaman tertentu?",
                conceptGuide: "slice(start, end) mengambil subset array tanpa memutasi.",
                options: [".slice(start, end)", ".splice(start, end)", ".split(start, end)", ".chunk(start, end)"],
                correctAnswer: 0,
                explanation: "Tepat! `.slice(start, end)` mengambil subset tanpa mutasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_6_po",
                type: "predict_output",
                prompt: "Berapa panjang data halaman pertama jika data 10 item dengan 5 item per halaman?",
                conceptGuide: "slice(0, 5) mengambil 5 item pertama.",
                code: `const data = [1,2,3,4,5,6,7,8,9,10];\nconst hal1 = data.slice(0, 5);\nconsole.log(hal1.length);`,
                options: ["5", "10", "1", "Error"],
                correctAnswer: "5",
                explanation: "Bener! slice(0, 5) mengambil 5 item pertama.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_6_cc",
                type: "code_challenge",
                prompt: "Slice array [1..10] untuk halaman ke-2 dengan 3 item per halaman dan cetak panjangnya!",
                conceptGuide: "Tulis `const data = [1,2,3,4,5,6,7,8,9,10]; const hal2 = data.slice(3, 6); console.log(hal2.length);`.",
                starterCode: `const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst hal2 = data.slice(3, 6);\nconsole.log(hal2.length);\n`,
                expectedOutput: "3",
                explanation: "Mantap! Pagination dengan slice berhasil dieksekusi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l5_7",
          language: "tsx",
          sectionId: "tsx_sec_5",
          sectionTitle: "05 Lists, Keys & Rendering",
          title: "Drag & Drop Reordering List",
          description: "Mengimplementasikan fitur reorder daftar dengan drag and drop menggunakan HTML5 API.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Drag & Drop",
              content: `HTML5 Drag and Drop API memungkinkan pengguna menggeser item:

\`\`\`tsx
function DaftarDrag() {
  const [items, setItems] = useState<string[]>(["A", "B", "C"]);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const handleDrop = (targetIdx: number) => {
    if (dragIdx === null) return;
    const baru = [...items];
    const [dipindah] = baru.splice(dragIdx, 1);
    baru.splice(targetIdx, 0, dipindah);
    setItems(baru);
  };
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_7_mc",
                type: "multiple_choice",
                prompt: "Method array apakah yang digunakan untuk memindahkan elemen dari satu posisi ke posisi lain?",
                conceptGuide: "splice() menghapus dan menyisipkan elemen di posisi tertentu.",
                options: [".splice()", ".slice()", ".shift()", ".unshift()"],
                correctAnswer: 0,
                explanation: "Tepat! `.splice()` menghapus dan menyisipkan elemen di posisi tertentu.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_7_tf",
                type: "true_false",
                prompt: "Apakah operasi pemindahan item drag-drop harus dilakukan secara imutabel dengan membuat salinan array terlebih dahulu?",
                conceptGuide: "State React harus diperbarui secara imutabel.",
                statement: "Pemindahan drag-drop dilakukan secara imutabel dengan salinan array.",
                correctAnswer: true,
                explanation: "Tepat! State React harus diperbarui secara imutabel.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_5_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan reorder: pindahkan elemen indeks 0 ke indeks 2 dari array ['A','B','C'] dan cetak array baru!",
                conceptGuide: "Tulis `const arr = [\"A\",\"B\",\"C\"]; const baru = [...arr]; const [item] = baru.splice(0, 1); baru.splice(2, 0, item); console.log(baru.join(\",\"));`.",
                starterCode: `const arr = ["A", "B", "C"];\nconst baru = [...arr];\nconst [item] = baru.splice(0, 1);\nbaru.splice(2, 0, item);\nconsole.log(baru.join(","));\n`,
                expectedOutput: "B,C,A",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 05 Lists, Keys & Rendering!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_6",
      title: "06 Form & Validasi (7 Lesson)",
      description: "Controlled Forms, Multi-field, Validasi, Error Message, react-hook-form, dan Form Submission.",
      lessons: [
        {
          id: "tsx_l6_1",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Controlled Form Multi-Field",
          description: "Mengelola state form dengan banyak field menggunakan satu state object.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l5_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Multi-Field Form State",
              content: `Kelola form multi-field dengan satu state object:

\`\`\`tsx
interface FormData {
  nama: string;
  email: string;
}

const [form, setForm] = useState<FormData>({ nama: "", email: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_1_mc",
                type: "multiple_choice",
                prompt: "Teknik apakah yang digunakan untuk memperbarui satu field dari state object form tanpa menghapus field lainnya?",
                conceptGuide: "Spread operator menyalin semua field lama, lalu menimpa field yang berubah.",
                options: [
                  "Spread operator: { ...form, [field]: nilai }",
                  "Object.assign() langsung",
                  "form[field] = nilai",
                  "useState per field",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Spread operator mempertahankan field lainnya.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_1_po",
                type: "predict_output",
                prompt: "Apakah nilai form.email setelah update menggunakan spread berikut?",
                conceptGuide: "Spread mempertahankan nama, hanya update email.",
                code: `const form = { nama: "Budi", email: "" };\nconst baru = { ...form, email: "budi@mail.com" };\nconsole.log(baru.email);`,
                options: ["budi@mail.com", "", "Budi", "Error"],
                correctAnswer: "budi@mail.com",
                explanation: "Bener! baru.email bernilai 'budi@mail.com'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_1_cc",
                type: "code_challenge",
                prompt: "Buat form state { nama: '', kota: '' }. Update kota ke 'Bandung' dengan spread dan cetak form.kota!",
                conceptGuide: "Tulis `const form = { nama: \"\", kota: \"\" }; const baru = { ...form, kota: \"Bandung\" }; console.log(baru.kota);`.",
                starterCode: `const form = { nama: "", kota: "" };\nconst baru = { ...form, kota: "Bandung" };\nconsole.log(baru.kota);\n`,
                expectedOutput: "Bandung",
                explanation: "Sip! Multi-field form state berhasil dikelola.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_2",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Validasi Form Manual",
          description: "Mengimplementasikan validasi form secara manual tanpa library eksternal.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Form Validation",
              content: `\`\`\`tsx
interface FormErrors {
  nama?: string;
  email?: string;
}

const validasi = (form: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!form.nama) errors.nama = "Nama wajib diisi";
  if (!form.email.includes("@")) errors.email = "Email tidak valid";
  return errors;
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_2_mc",
                type: "multiple_choice",
                prompt: "Kapan sebaiknya validasi form dijalankan untuk pengalaman pengguna terbaik?",
                conceptGuide: "Validasi onSubmit (saat submit) dan/atau onBlur (saat field kehilangan fokus).",
                options: [
                  "Saat submit dan/atau saat field kehilangan fokus (onBlur)",
                  "Hanya saat halaman pertama dimuat",
                  "Hanya di server",
                  "Setiap 5 detik sekali",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Validasi onSubmit dan onBlur untuk UX terbaik.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_2_po",
                type: "predict_output",
                prompt: "Apakah cetakan validasi email yang tidak mengandung '@'?",
                conceptGuide: "Email tanpa @ dianggap tidak valid.",
                code: `const email = "budigmail.com";\nconst valid = email.includes("@") ? "Valid" : "Email tidak valid";\nconsole.log(valid);`,
                options: ["Email tidak valid", "Valid", "Error", "undefined"],
                correctAnswer: "Email tidak valid",
                explanation: "Bener! Email tanpa @ adalah email tidak valid.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi validNama(nama: string): string yang mengembalikan 'Error: Nama kosong' jika string kosong, atau 'OK' jika tidak kosong. Cetak validNama('')!",
                conceptGuide: "Tulis `function validNama(nama: string): string { return !nama ? \"Error: Nama kosong\" : \"OK\"; } console.log(validNama(\"\"));`.",
                starterCode: `function validNama(nama: string): string {\n  return !nama ? "Error: Nama kosong" : "OK";\n}\nconsole.log(validNama(""));\n`,
                expectedOutput: "Error: Nama kosong",
                explanation: "Super! Validasi form manual berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_3",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Error Messages & Feedback UI",
          description: "Menampilkan pesan error yang jelas dan informatif di bawah field yang bermasalah.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Error Message UI",
              content: `\`\`\`tsx
function FormInput({ label, error }: { label: string; error?: string }) {
  return (
    <div>
      <label>{label}</label>
      <input className={error ? "input-error" : ""} />
      {error && <span className="pesan-error">{error}</span>}
    </div>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_3_mc",
                type: "multiple_choice",
                prompt: "Teknik JSX apakah yang digunakan untuk menampilkan pesan error hanya ketika ada error?",
                conceptGuide: "Short-circuit &&: {error && <span>{error}</span>}.",
                options: [
                  "Short-circuit: {error && <span>{error}</span>}",
                  "Ternary: {error ? error : null}",
                  "if statement multi-baris",
                  "switch case",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Short-circuit `&&` untuk rendering kondisional.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_3_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari logika tampil pesan error berikut?",
                conceptGuide: "error truthy -> tampil pesan error.",
                code: `const error = "Email wajib diisi";\nconst tampil = error ? error : "Tidak ada error";\nconsole.log(tampil);`,
                options: ["Email wajib diisi", "Tidak ada error", "Error", "undefined"],
                correctAnswer: "Email wajib diisi",
                explanation: "Bener! error truthy menampilkan pesan error.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_3_cc",
                type: "code_challenge",
                prompt: "Buat const errMsg = 'Field kosong'. Cetak 'Error: Field kosong' jika ada pesan, 'Sukses' jika tidak ada!",
                conceptGuide: "Tulis `const errMsg = \"Field kosong\"; console.log(errMsg ? \"Error: \" + errMsg : \"Sukses\");`.",
                starterCode: `const errMsg = "Field kosong";\nconsole.log(errMsg ? "Error: " + errMsg : "Sukses");\n`,
                expectedOutput: "Error: Field kosong",
                explanation: "Mantap! Error message UI berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_4",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Select, Checkbox, & Radio Input",
          description: "Menangani berbagai jenis input form: dropdown, checkbox, dan radio button.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Input Types Beragam",
              content: `\`\`\`tsx
// Checkbox
const [setuju, setSetuju] = useState<boolean>(false);
<input type="checkbox" checked={setuju} onChange={e => setSetuju(e.target.checked)} />

// Select
const [bahasa, setBahasa] = useState<string>("ts");
<select value={bahasa} onChange={e => setBahasa(e.target.value)}>
  <option value="ts">TypeScript</option>
</select>
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_4_mc",
                type: "multiple_choice",
                prompt: "Properti event apakah yang digunakan untuk mengambil nilai checkbox (true/false) di onChange?",
                conceptGuide: "Nilai checkbox boolean diambil dari e.target.checked.",
                options: ["e.target.checked", "e.target.value", "e.target.selected", "e.checked"],
                correctAnswer: 0,
                explanation: "Tepat! `e.target.checked` untuk nilai boolean checkbox.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_4_tf",
                type: "true_false",
                prompt: "Apakah nilai dari elemen select HTML selalu diperoleh melalui e.target.value pada event onChange?",
                conceptGuide: "Select onChange juga menggunakan e.target.value.",
                statement: "Nilai elemen select diambil dari e.target.value pada onChange.",
                correctAnswer: true,
                explanation: "Tepat! Select onChange menggunakan e.target.value.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan checkbox: buat let isChecked = false, ubah ke true, lalu cetak 'Setuju: true'!",
                conceptGuide: "Tulis `let isChecked = false; isChecked = true; console.log(\"Setuju: \" + isChecked);`.",
                starterCode: `let isChecked = false;\nisChecked = true;\nconsole.log("Setuju: " + isChecked);\n`,
                expectedOutput: "Setuju: true",
                explanation: "Keren! Checkbox state berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_5",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Form Reset & Clear State",
          description: "Mereset form ke kondisi awal setelah submit sukses atau saat pengguna membatalkan.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Form Reset",
              content: `\`\`\`tsx
const FORM_AWAL: FormData = { nama: "", email: "" };
const [form, setForm] = useState<FormData>(FORM_AWAL);

const resetForm = () => {
  setForm(FORM_AWAL);
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_5_mc",
                type: "multiple_choice",
                prompt: "Cara terbaik untuk mereset form multi-field ke kondisi awal di React adalah?",
                conceptGuide: "Tetapkan kembali state ke nilai awal menggunakan setState.",
                options: [
                  "setForm(FORM_AWAL) dengan nilai initial state",
                  "form = {} langsung",
                  "delete form",
                  "form.reset()",
                ],
                correctAnswer: 0,
                explanation: "Tepat! setForm ke nilai initial adalah cara yang benar.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_5_po",
                type: "predict_output",
                prompt: "Apakah nilai form.nama setelah reset ke state awal?",
                conceptGuide: "Nilai awal nama adalah string kosong.",
                code: `const AWAL = { nama: "", email: "" };\nlet form = { nama: "Budi", email: "b@mail.com" };\nform = { ...AWAL };\nconsole.log(form.nama);`,
                options: ["", "Budi", "undefined", "Error"],
                correctAnswer: "",
                explanation: "Bener! Setelah reset, form.nama kembali ke string kosong.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan form reset: isi form dengan nilai, lalu reset ke { nama: '', kota: '' }. Cetak nama setelah reset!",
                conceptGuide: "Tulis `let form = { nama: \"Budi\", kota: \"BDG\" }; form = { nama: \"\", kota: \"\" }; console.log(form.nama);`.",
                starterCode: `let form = { nama: "Budi", kota: "BDG" };\nform = { nama: "", kota: "" };\nconsole.log(form.nama);\n`,
                expectedOutput: "",
                explanation: "Super! Form reset berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_6",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "Async Form Submission & Loading UI",
          description: "Mengelola status loading dan error saat form melakukan request API asynchronous.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Async Form Submission",
              content: `\`\`\`tsx
const [isLoading, setLoading] = useState<boolean>(false);
const [pesan, setPesan] = useState<string>("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    await kirimData(form);
    setPesan("Berhasil!");
  } catch {
    setPesan("Gagal kirim data.");
  } finally {
    setLoading(false);
  }
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_6_mc",
                type: "multiple_choice",
                prompt: "Di bagian mana dari try/catch/finally kita harus mengatur isLoading kembali ke false?",
                conceptGuide: "finally selalu berjalan baik sukses maupun error, cocok untuk cleanup.",
                options: [
                  "Di blok finally",
                  "Di blok try saja",
                  "Di blok catch saja",
                  "Tidak perlu diatur",
                ],
                correctAnswer: 0,
                explanation: "Tepat! finally selalu berjalan, tepat untuk setLoading(false).",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_6_po",
                type: "predict_output",
                prompt: "Apakah pesan yang ditampilkan setelah submit berhasil?",
                conceptGuide: "Submit sukses -> pesan 'Berhasil!'.",
                code: `let pesan = "";\nconst sukses = true;\nif (sukses) pesan = "Berhasil!";\nelse pesan = "Gagal.";\nconsole.log(pesan);`,
                options: ["Berhasil!", "Gagal.", "Error", "undefined"],
                correctAnswer: "Berhasil!",
                explanation: "Bener! Pesan sukses setelah submit berhasil.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan async submit: buat isLoading = true, set ke false setelah selesai. Cetak 'Loading: false'!",
                conceptGuide: "Tulis `let isLoading = true; isLoading = false; console.log(\"Loading: \" + isLoading);`.",
                starterCode: `let isLoading = true;\nisLoading = false;\nconsole.log("Loading: " + isLoading);\n`,
                expectedOutput: "Loading: false",
                explanation: "Mantap! Async form submission pattern dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l6_7",
          language: "tsx",
          sectionId: "tsx_sec_6",
          sectionTitle: "06 Form & Validasi",
          title: "File Upload & Preview",
          description: "Menangani upload file gambar dan menampilkan pratinjau sebelum dikirim.",
          icon: "box",
          xp: 40,
          prerequisites: ["tsx_l6_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "File Upload & Preview",
              content: `\`\`\`tsx
const [preview, setPreview] = useState<string>("");

const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setPreview(url);
  }
};

<input type="file" accept="image/*" onChange={handleFile} />
{preview && <img src={preview} alt="Preview" />}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_7_mc",
                type: "multiple_choice",
                prompt: "API browser apakah yang digunakan untuk membuat URL sementara dari file yang diupload untuk preview?",
                conceptGuide: "URL.createObjectURL() membuat URL blob sementara dari File object.",
                options: [
                  "URL.createObjectURL(file)",
                  "FileReader.readAsText(file)",
                  "fetch(file)",
                  "document.URL(file)",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `URL.createObjectURL()` membuat URL preview sementara.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_7_tf",
                type: "true_false",
                prompt: "Apakah kita harus memanggil URL.revokeObjectURL() untuk membersihkan URL blob setelah tidak digunakan agar tidak terjadi memory leak?",
                conceptGuide: "revokeObjectURL membersihkan URL blob dari memori.",
                statement: "URL.revokeObjectURL() harus dipanggil untuk mencegah memory leak.",
                correctAnswer: true,
                explanation: "Tepat! Selalu revoke URL blob setelah tidak digunakan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_6_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan file preview: buat const previewUrl = 'blob:image-123' dan cetak 'Preview: blob:image-123'!",
                conceptGuide: "Tulis `const previewUrl = \"blob:image-123\"; console.log(\"Preview: \" + previewUrl);`.",
                starterCode: `const previewUrl = "blob:image-123";\nconsole.log("Preview: " + previewUrl);\n`,
                expectedOutput: "Preview: blob:image-123",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 06 Form & Validasi!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_7",
      title: "07 Next.js Routing & Data Fetching (7 Lesson)",
      description: "App Router, Dynamic Routes, Server Components, Fetch API, Loading UI, Error Boundaries.",
      lessons: [
        {
          id: "tsx_l7_1",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "App Router & File-Based Routing",
          description: "Memahami konvensi routing Next.js berbasis sistem file di direktori app/.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l6_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Next.js App Router",
              content: `Di Next.js App Router, halaman dibuat dengan file \`page.tsx\` di dalam folder \`app/\`:

- \`app/page.tsx\` → Route \`/\`
- \`app/produk/page.tsx\` → Route \`/produk\`
- \`app/produk/[id]/page.tsx\` → Route \`/produk/:id\` (dinamis)`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_1_mc",
                type: "multiple_choice",
                prompt: "Di Next.js App Router, file apakah yang harus dibuat untuk mendefinisikan halaman pada sebuah route?",
                conceptGuide: "File page.tsx mendefinisikan halaman pada sebuah route.",
                options: ["page.tsx", "index.tsx", "route.tsx", "layout.tsx"],
                correctAnswer: 0,
                explanation: "Tepat! File `page.tsx` mendefinisikan halaman Next.js App Router.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_1_tf",
                type: "true_false",
                prompt: "Apakah folder bernama [id] di dalam direktori app Next.js mendefinisikan route dinamis?",
                conceptGuide: "Folder dengan tanda kurung siku [param] mendefinisikan segment dinamis.",
                statement: "Folder [id] di Next.js app/ mendefinisikan route dinamis.",
                correctAnswer: true,
                explanation: "Tepat! Folder `[id]` adalah dynamic route segment.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_1_cc",
                type: "code_challenge",
                prompt: "Buat fungsi getRoutePath(folder: string): string yang mengembalikan '/app/' + folder. Cetak getRoutePath('produk')!",
                conceptGuide: "Tulis `function getRoutePath(folder: string): string { return \"/app/\" + folder; } console.log(getRoutePath(\"produk\"));`.",
                starterCode: `function getRoutePath(folder: string): string {\n  return "/app/" + folder;\n}\nconsole.log(getRoutePath("produk"));\n`,
                expectedOutput: "/app/produk",
                explanation: "Sip! Konsep App Router file-based routing dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_2",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "Server Components vs Client Components",
          description: "Memahami perbedaan Server Component dan Client Component serta kapan menggunakannya.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Server vs Client Components",
              content: `- **Server Component** (default): Dirender di server, tidak bisa menggunakan hooks atau event handler.
- **Client Component**: Tambahkan \`"use client"\` di baris pertama. Bisa menggunakan hooks, state, dan event handler.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_2_mc",
                type: "multiple_choice",
                prompt: "Directive apakah yang harus ditambahkan di baris pertama file untuk menjadikan komponen sebagai Client Component?",
                conceptGuide: "\"use client\" directive menjadikan komponen sebagai Client Component.",
                options: ['"use client"', '"use server"', '"client only"', '"react client"'],
                correctAnswer: 0,
                explanation: "Tepat! `\"use client\"` mengaktifkan komponen sebagai Client Component.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_2_tf",
                type: "true_false",
                prompt: "Apakah Server Component dapat menggunakan useState atau useEffect secara langsung?",
                conceptGuide: "Server Component tidak memiliki akses ke hooks React.",
                statement: "Server Component dapat menggunakan useState secara langsung.",
                correctAnswer: false,
                explanation: "Tepat! Server Component TIDAK bisa menggunakan hooks React.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi getTipeKomponen(usesHook: boolean): string yang mengembalikan 'Client' jika true, 'Server' jika false. Cetak getTipeKomponen(true)!",
                conceptGuide: "Tulis `function getTipe(usesHook: boolean): string { return usesHook ? \"Client\" : \"Server\"; } console.log(getTipe(true));`.",
                starterCode: `function getTipeKomponen(usesHook: boolean): string {\n  return usesHook ? "Client" : "Server";\n}\nconsole.log(getTipeKomponen(true));\n`,
                expectedOutput: "Client",
                explanation: "Keren! Perbedaan Server & Client Component dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_3",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "Fetch Data di Server Component",
          description: "Mengambil data langsung dari database atau API di Server Component tanpa useEffect.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Server-Side Data Fetching",
              content: `Di Server Component, kita bisa fetch data langsung menggunakan async/await:

\`\`\`tsx
// app/produk/page.tsx (Server Component)
async function ProdukPage() {
  const res = await fetch("https://api.example.com/produk");
  const data = await res.json();
  return <ul>{data.map(p => <li key={p.id}>{p.nama}</li>)}</ul>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_3_mc",
                type: "multiple_choice",
                prompt: "Apa keunggulan fetch data di Server Component dibanding useEffect di Client Component?",
                conceptGuide: "Server Component fetch tidak memperbesar bundle JavaScript yang dikirim ke browser.",
                options: [
                  "Tidak menambah bundle JS di browser, lebih cepat initial load",
                  "Bisa menggunakan useState",
                  "Lebih mudah ditulis",
                  "Bisa menangani klik pengguna",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Server fetch tidak membebani bundle JS browser.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_3_tf",
                type: "true_false",
                prompt: "Apakah Next.js secara otomatis meng-cache hasil fetch di Server Component kecuali dinonaktifkan?",
                conceptGuide: "Next.js meng-cache fetch Server Component secara default.",
                statement: "Next.js otomatis meng-cache fetch di Server Component.",
                correctAnswer: true,
                explanation: "Tepat! Next.js meng-cache fetch Server Component secara default.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan Server Component fetch: buat async function getData() { return { nama: 'Server Data' }; }. Cetak (await getData()).nama!",
                conceptGuide: "Tulis `async function getData() { return { nama: \"Server Data\" }; } getData().then(d => console.log(d.nama));`.",
                starterCode: `async function getData() {\n  return { nama: "Server Data" };\n}\ngetData().then(d => console.log(d.nama));\n`,
                expectedOutput: "Server Data",
                explanation: "Super! Server-side data fetching dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_4",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "Dynamic Routes & Params",
          description: "Mengakses parameter route dinamis dari URL menggunakan params di Server Component.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dynamic Routes",
              content: `\`\`\`tsx
// app/produk/[id]/page.tsx
interface PageProps {
  params: { id: string };
}

async function ProdukDetail({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(\`/api/produk/\${id}\`);
  const produk = await res.json();
  return <h1>{produk.nama}</h1>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_4_mc",
                type: "multiple_choice",
                prompt: "Dari mana parameter dinamis seperti 'id' diakses di halaman Next.js App Router?",
                conceptGuide: "Parameter dinamis diterima melalui prop params dari Next.js.",
                options: [
                  "Dari prop params yang diteruskan Next.js",
                  "Dari useState hook",
                  "Dari localStorage",
                  "Dari env variable",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `params` diteruskan oleh Next.js sebagai props halaman.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_4_po",
                type: "predict_output",
                prompt: "Apakah nilai params.id jika URL yang diakses adalah /produk/42?",
                conceptGuide: "params.id mengambil segment dinamis dari URL.",
                code: `const params = { id: "42" };\nconsole.log("ID Produk: " + params.id);`,
                options: ["ID Produk: 42", "ID Produk: undefined", "Error", "42"],
                correctAnswer: "ID Produk: 42",
                explanation: "Bener! params.id bernilai '42' dari segment URL.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_4_cc",
                type: "code_challenge",
                prompt: "Buat fungsi getDetail(id: string): string yang mengembalikan 'Detail produk ID: ' + id. Cetak getDetail('99')!",
                conceptGuide: "Tulis `function getDetail(id: string): string { return \"Detail produk ID: \" + id; } console.log(getDetail(\"99\"));`.",
                starterCode: `function getDetail(id: string): string {\n  return "Detail produk ID: " + id;\n}\nconsole.log(getDetail("99"));\n`,
                expectedOutput: "Detail produk ID: 99",
                explanation: "Mantap! Dynamic route & params berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_5",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "Loading UI & Streaming",
          description: "Menampilkan skeleton loading menggunakan file loading.tsx di Next.js App Router.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Loading.tsx di Next.js",
              content: `Buat file \`loading.tsx\` di samping \`page.tsx\` untuk tampilan loading otomatis:

\`\`\`tsx
// app/produk/loading.tsx
export default function Loading() {
  return (
    <div className="skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-text" />
    </div>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_5_mc",
                type: "multiple_choice",
                prompt: "File apakah yang dibuat di Next.js App Router untuk menampilkan UI loading otomatis?",
                conceptGuide: "loading.tsx menampilkan UI loading saat halaman sedang dimuat.",
                options: ["loading.tsx", "skeleton.tsx", "spinner.tsx", "pending.tsx"],
                correctAnswer: 0,
                explanation: "Tepat! File `loading.tsx` menampilkan UI loading otomatis.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_5_tf",
                type: "true_false",
                prompt: "Apakah Next.js secara otomatis membungkus page.tsx dengan Suspense dan menampilkan loading.tsx selama fetch data berlangsung?",
                conceptGuide: "Next.js otomatis menggunakan loading.tsx sebagai Suspense fallback.",
                statement: "Next.js otomatis menggunakan loading.tsx sebagai Suspense fallback.",
                correctAnswer: true,
                explanation: "Tepat! Next.js otomatis mengintegrasikan loading.tsx dengan Suspense.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan loading: buat isLoading = true, cetak 'Memuat halaman...' jika loading, 'Halaman Siap' jika tidak!",
                conceptGuide: "Tulis `const isLoading = true; console.log(isLoading ? \"Memuat halaman...\" : \"Halaman Siap\");`.",
                starterCode: `const isLoading = true;\nconsole.log(isLoading ? "Memuat halaman..." : "Halaman Siap");\n`,
                expectedOutput: "Memuat halaman...",
                explanation: "Keren! Loading UI Next.js dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_6",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "Error Boundaries & error.tsx",
          description: "Menangani error rendering dengan file error.tsx untuk UX yang lebih baik.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Error Boundary di Next.js",
              content: `Buat file \`error.tsx\` untuk menangani error yang terjadi selama rendering:

\`\`\`tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Terjadi kesalahan!</h2>
      <button onClick={reset}>Coba Lagi</button>
    </div>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_6_mc",
                type: "multiple_choice",
                prompt: "Apakah directive yang wajib ada di file error.tsx Next.js App Router?",
                conceptGuide: "error.tsx adalah Client Component karena menggunakan interaksi reset.",
                options: ['"use client"', '"use server"', '"use error"', "Tidak ada"],
                correctAnswer: 0,
                explanation: "Tepat! `\"use client\"` wajib di error.tsx karena membutuhkan interaktivitas.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_6_tf",
                type: "true_false",
                prompt: "Apakah fungsi reset() di error.tsx digunakan untuk mencoba merender ulang halaman setelah error?",
                conceptGuide: "reset() memicu percobaan ulang render komponen yang error.",
                statement: "Fungsi reset() di error.tsx merender ulang halaman setelah error.",
                correctAnswer: true,
                explanation: "Tepat! reset() memicu percobaan render ulang.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan error boundary: buat const errorMsg = 'Gagal memuat'. Cetak 'Error: Gagal memuat'!",
                conceptGuide: "Tulis `const errorMsg = \"Gagal memuat\"; console.log(\"Error: \" + errorMsg);`.",
                starterCode: `const errorMsg = "Gagal memuat";\nconsole.log("Error: " + errorMsg);\n`,
                expectedOutput: "Error: Gagal memuat",
                explanation: "Super! Error Boundary Next.js dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l7_7",
          language: "tsx",
          sectionId: "tsx_sec_7",
          sectionTitle: "07 Next.js Routing & Data Fetching",
          title: "useRouter & Programmatic Navigation",
          description: "Navigasi antar halaman secara programatis menggunakan hook useRouter.",
          icon: "code",
          xp: 40,
          prerequisites: ["tsx_l7_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Programmatic Navigation",
              content: `\`\`\`tsx
"use client";
import { useRouter } from "next/navigation";

function TombolKembali() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/dashboard")}>Dashboard</button>
      <button onClick={() => router.back()}>Kembali</button>
      <button onClick={() => router.refresh()}>Refresh</button>
    </>
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_7_mc",
                type: "multiple_choice",
                prompt: "Method router apakah yang digunakan untuk navigasi ke halaman baru dan menambahkannya ke browser history?",
                conceptGuide: "router.push() navigasi ke halaman baru dan tambah ke history.",
                options: ["router.push('/halaman')", "router.go('/halaman')", "router.navigate('/halaman')", "router.redirect('/halaman')"],
                correctAnswer: 0,
                explanation: "Tepat! `router.push()` navigasi ke halaman baru.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_7_po",
                type: "predict_output",
                prompt: "Apakah cetakan dari simulasi navigasi ke '/dashboard' berikut?",
                conceptGuide: "Navigasi mensimulasikan route push.",
                code: `const navigasi = (route: string): string => "Navigasi ke: " + route;\nconsole.log(navigasi("/dashboard"));`,
                options: ["Navigasi ke: /dashboard", "/dashboard", "Error", "undefined"],
                correctAnswer: "Navigasi ke: /dashboard",
                explanation: "Bener! Simulasi navigasi ke /dashboard berhasil.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_7_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan useRouter.push: buat fungsi pindahHalaman(route: string) yang mencetak 'Pindah ke: ' + route dan panggil pindahHalaman('/profil')!",
                conceptGuide: "Tulis `function pindahHalaman(route: string) { console.log(\"Pindah ke: \" + route); } pindahHalaman(\"/profil\");`.",
                starterCode: `function pindahHalaman(route: string) {\n  console.log("Pindah ke: " + route);\n}\npindahHalaman("/profil");\n`,
                expectedOutput: "Pindah ke: /profil",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 07 Next.js Routing & Data Fetching!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_8",
      title: "08 API Routes & CRUD (8 Lesson)",
      description: "API Routes, REST CRUD, Server Actions, Drizzle ORM, Auth, dan Middleware.",
      lessons: [
        {
          id: "tsx_l8_1",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Next.js API Routes (route.ts)",
          description: "Membuat endpoint API RESTful langsung di dalam aplikasi Next.js.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l7_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "API Routes di Next.js",
              content: `Buat file \`route.ts\` di dalam folder \`app/api/\` untuk endpoint API:

\`\`\`ts
// app/api/produk/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const produk = [{ id: 1, nama: "Laptop" }];
  return NextResponse.json(produk);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ sukses: true, data: body });
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_1_mc",
                type: "multiple_choice",
                prompt: "File apakah yang harus dibuat untuk mendefinisikan endpoint API di Next.js App Router?",
                conceptGuide: "File route.ts mendefinisikan endpoint API di App Router.",
                options: ["route.ts", "api.ts", "endpoint.ts", "handler.ts"],
                correctAnswer: 0,
                explanation: "Tepat! File `route.ts` mendefinisikan API endpoint.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_1_tf",
                type: "true_false",
                prompt: "Apakah setiap method HTTP (GET, POST, PUT, DELETE) harus diekspor sebagai fungsi terpisah di route.ts?",
                conceptGuide: "Setiap method HTTP diekspor sebagai fungsi named export.",
                statement: "GET, POST, dll diekspor sebagai fungsi terpisah di route.ts.",
                correctAnswer: true,
                explanation: "Tepat! Setiap HTTP method adalah fungsi named export terpisah.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan API response: buat fungsi getResponse() yang mengembalikan JSON string '{ success: true }' dan cetak ke konsol!",
                conceptGuide: "Tulis `function getResponse() { return '{ success: true }'; } console.log(getResponse());`.",
                starterCode: `function getResponse() {\n  return '{ success: true }';\n}\nconsole.log(getResponse());\n`,
                expectedOutput: "{ success: true }",
                explanation: "Sip! Konsep API Routes Next.js dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_2",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "CRUD: Read & Create (GET & POST)",
          description: "Mengimplementasikan operasi Read dan Create pada API dengan metode GET dan POST.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "GET & POST CRUD",
              content: `\`\`\`ts
// GET: Ambil semua data
export async function GET() {
  const data = await db.select().from(produkTable);
  return NextResponse.json(data);
}

// POST: Buat data baru
export async function POST(req: Request) {
  const body = await req.json();
  await db.insert(produkTable).values(body);
  return NextResponse.json({ sukses: true }, { status: 201 });
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_2_mc",
                type: "multiple_choice",
                prompt: "HTTP status code apakah yang paling tepat dikembalikan setelah berhasil membuat data baru (POST)?",
                conceptGuide: "HTTP 201 Created digunakan untuk respons pembuatan data baru.",
                options: ["201 Created", "200 OK", "204 No Content", "400 Bad Request"],
                correctAnswer: 0,
                explanation: "Tepat! Status 201 Created untuk data yang berhasil dibuat.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_2_tf",
                type: "true_false",
                prompt: "Apakah method GET pada REST API harus mengembalikan data tanpa mengubah state server (bersifat idempotent)?",
                conceptGuide: "GET adalah read-only dan tidak boleh mengubah data di server.",
                statement: "Method GET pada REST API bersifat idempotent dan tidak mengubah data.",
                correctAnswer: true,
                explanation: "Tepat! GET hanya membaca data, tidak mengubah state server.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan POST response: buat object { id: 1, nama: 'Laptop', sukses: true } dan cetak sukses-nya!",
                conceptGuide: "Tulis `const resp = { id: 1, nama: \"Laptop\", sukses: true }; console.log(resp.sukses);`.",
                starterCode: `const resp = { id: 1, nama: "Laptop", sukses: true };\nconsole.log(resp.sukses);\n`,
                expectedOutput: "true",
                explanation: "Keren! GET & POST CRUD dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_3",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "CRUD: Update & Delete (PUT & DELETE)",
          description: "Mengimplementasikan operasi Update dan Delete pada API untuk data spesifik.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "PUT & DELETE CRUD",
              content: `\`\`\`ts
// app/api/produk/[id]/route.ts
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  await db.update(produkTable).set(body).where(eq(produkTable.id, Number(params.id)));
  return NextResponse.json({ sukses: true });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await db.delete(produkTable).where(eq(produkTable.id, Number(params.id)));
  return NextResponse.json({ sukses: true });
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_3_mc",
                type: "multiple_choice",
                prompt: "HTTP method apakah yang digunakan untuk mengganti SELURUH data resource dengan data baru?",
                conceptGuide: "PUT mengganti seluruh resource, PATCH hanya sebagian.",
                options: ["PUT", "PATCH", "POST", "GET"],
                correctAnswer: 0,
                explanation: "Tepat! PUT mengganti seluruh resource dengan data baru.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_3_tf",
                type: "true_false",
                prompt: "Apakah HTTP status 204 No Content adalah respons valid setelah operasi DELETE berhasil?",
                conceptGuide: "204 No Content menandakan sukses tanpa konten yang dikembalikan.",
                statement: "HTTP 204 No Content adalah respons valid untuk DELETE yang berhasil.",
                correctAnswer: true,
                explanation: "Tepat! 204 adalah respons standar untuk DELETE yang berhasil.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan DELETE: buat array produk, hapus item dengan id = 2, cetak panjang array setelah hapus!",
                conceptGuide: "Tulis `const produk = [{id:1},{id:2},{id:3}]; const setelah = produk.filter(p => p.id !== 2); console.log(setelah.length);`.",
                starterCode: `const produk = [{ id: 1 }, { id: 2 }, { id: 3 }];\nconst setelah = produk.filter(p => p.id !== 2);\nconsole.log(setelah.length);\n`,
                expectedOutput: "2",
                explanation: "Super! PUT & DELETE CRUD dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_4",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Server Actions & Form Mutation",
          description: "Mengirim data form langsung ke server tanpa membuat endpoint API terpisah.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Server Actions",
              content: `Server Actions adalah fungsi async yang berjalan di server dan bisa dipanggil dari Client Component:

\`\`\`tsx
"use server";

export async function simpanData(formData: FormData) {
  const nama = formData.get("nama") as string;
  await db.insert(tabel).values({ nama });
}

// Di Client Component:
<form action={simpanData}>
  <input name="nama" />
  <button type="submit">Simpan</button>
</form>
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_4_mc",
                type: "multiple_choice",
                prompt: "Directive apakah yang harus ditulis di bagian atas file untuk mendefinisikan Server Action?",
                conceptGuide: "\"use server\" directive menandai fungsi sebagai Server Action.",
                options: ['"use server"', '"use client"', '"server action"', '"async function"'],
                correctAnswer: 0,
                explanation: "Tepat! `\"use server\"` mendefinisikan Server Action.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_4_tf",
                type: "true_false",
                prompt: "Apakah Server Actions dapat langsung mengakses database tanpa perlu membuat endpoint API terpisah?",
                conceptGuide: "Server Actions berjalan di server dan bisa langsung akses DB.",
                statement: "Server Actions bisa langsung mengakses database tanpa endpoint API terpisah.",
                correctAnswer: true,
                explanation: "Tepat! Server Actions berjalan di server dengan akses penuh ke DB.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan Server Action: buat async function prosesData(nama: string) { return 'Disimpan: ' + nama; }. Cetak hasilnya!",
                conceptGuide: "Tulis `async function prosesData(nama: string) { return \"Disimpan: \" + nama; } prosesData(\"Kadez\").then(r => console.log(r));`.",
                starterCode: `async function prosesData(nama: string) {\n  return "Disimpan: " + nama;\n}\nprosesData("Kadez").then(r => console.log(r));\n`,
                expectedOutput: "Disimpan: Kadez",
                explanation: "Mantap! Server Actions dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_5",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Fetch di Client Component (SWR / TanStack)",
          description: "Mengambil dan mensinkronkan data di Client Component menggunakan pola SWR.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Client-Side Data Fetching",
              content: `\`\`\`tsx
"use client";
import { useState, useEffect } from "react";

function ProdukList() {
  const [data, setData] = useState<Produk[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/produk")
      .then(res => res.json())
      .then(d => { setData(d); setLoading(false); });
  }, []);

  if (isLoading) return <p>Memuat...</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.nama}</li>)}</ul>;
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_5_mc",
                type: "multiple_choice",
                prompt: "Di dalam useEffect untuk data fetching, dependency array manakah yang digunakan agar fetch hanya berjalan sekali saat mount?",
                conceptGuide: "Array kosong [] membuat useEffect hanya berjalan saat mount.",
                options: ["[] (array kosong)", "[data]", "[id, data]", "Tidak ada array"],
                correctAnswer: 0,
                explanation: "Tepat! Array kosong `[]` membuat useEffect hanya berjalan saat mount.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_5_tf",
                type: "true_false",
                prompt: "Apakah library SWR (Stale-While-Revalidate) secara otomatis meng-cache dan merevalidasi data di Client Component?",
                conceptGuide: "SWR meng-cache data dan merevalidasinya secara otomatis.",
                statement: "SWR otomatis meng-cache dan merevalidasi data di Client Component.",
                correctAnswer: true,
                explanation: "Tepat! SWR mengelola cache dan revalidasi secara otomatis.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan client fetch: buat async function ambilData() { return [{ id: 1, nama: 'Laptop' }]; }. Cetak length data!",
                conceptGuide: "Tulis `async function ambilData() { return [{ id: 1, nama: \"Laptop\" }]; } ambilData().then(d => console.log(d.length));`.",
                starterCode: `async function ambilData() {\n  return [{ id: 1, nama: "Laptop" }];\n}\nambilData().then(d => console.log(d.length));\n`,
                expectedOutput: "1",
                explanation: "Super! Client-side data fetching dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_6",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Authentication: Login & Session",
          description: "Mengimplementasikan autentikasi pengguna dengan cookie session di Next.js.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Auth dengan Session",
              content: `\`\`\`ts
// Login Route: Validasi kredensial & set cookie
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await cariUser(email);
  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Kredensial salah" }, { status: 401 });
  }
  const cookieStore = await cookies();
  cookieStore.set("session", user.id.toString());
  return NextResponse.json({ sukses: true });
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_6_mc",
                type: "multiple_choice",
                prompt: "HTTP status code apakah yang dikembalikan saat login gagal karena kredensial salah?",
                conceptGuide: "401 Unauthorized untuk kegagalan autentikasi.",
                options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Internal Server Error"],
                correctAnswer: 0,
                explanation: "Tepat! 401 Unauthorized untuk kegagalan autentikasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_6_tf",
                type: "true_false",
                prompt: "Apakah cookie HttpOnly tidak dapat diakses oleh JavaScript di sisi browser, sehingga lebih aman dari serangan XSS?",
                conceptGuide: "HttpOnly cookie tidak bisa diakses JavaScript browser.",
                statement: "Cookie HttpOnly tidak bisa diakses JavaScript browser, lebih aman dari XSS.",
                correctAnswer: true,
                explanation: "Tepat! HttpOnly cookie lebih aman dari serangan XSS.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan auth: buat fungsi cekLogin(email: string, pass: string): boolean yang true jika 'admin@ts.com' & '1234'. Cetak cekLogin('admin@ts.com', '1234')!",
                conceptGuide: "Tulis `function cekLogin(email: string, pass: string): boolean { return email === \"admin@ts.com\" && pass === \"1234\"; } console.log(cekLogin(\"admin@ts.com\", \"1234\"));`.",
                starterCode: `function cekLogin(email: string, pass: string): boolean {\n  return email === "admin@ts.com" && pass === "1234";\n}\nconsole.log(cekLogin("admin@ts.com", "1234"));\n`,
                expectedOutput: "true",
                explanation: "Mantap! Konsep autentikasi login dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_7",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Middleware & Route Protection",
          description: "Melindungi halaman privat menggunakan Next.js Middleware untuk pengecekan sesi.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Next.js Middleware",
              content: `\`\`\`ts
// middleware.ts (di root project)
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session");
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  return NextResponse.next();
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_7_mc",
                type: "multiple_choice",
                prompt: "Di mana file middleware.ts harus ditempatkan di proyek Next.js?",
                conceptGuide: "middleware.ts harus di root direktori proyek.",
                options: [
                  "Di root direktori proyek (sejajar dengan app/)",
                  "Di dalam folder app/",
                  "Di dalam folder api/",
                  "Di dalam folder components/",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `middleware.ts` ada di root, sejajar dengan folder `app/`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_7_tf",
                type: "true_false",
                prompt: "Apakah Next.js Middleware berjalan sebelum request mencapai halaman atau API route yang dituju?",
                conceptGuide: "Middleware berjalan di Edge sebelum request diproses.",
                statement: "Next.js Middleware berjalan sebelum request sampai ke halaman.",
                correctAnswer: true,
                explanation: "Tepat! Middleware berjalan di tahap paling awal request pipeline.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan middleware: cek apakah session ada. Cetak 'Akses Diizinkan' jika ada, 'Redirect ke /auth' jika tidak!",
                conceptGuide: "Tulis `const session = \"token123\"; console.log(session ? \"Akses Diizinkan\" : \"Redirect ke /auth\");`.",
                starterCode: `const session = "token123";\nconsole.log(session ? "Akses Diizinkan" : "Redirect ke /auth");\n`,
                expectedOutput: "Akses Diizinkan",
                explanation: "Keren! Middleware & route protection dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l8_8",
          language: "tsx",
          sectionId: "tsx_sec_8",
          sectionTitle: "08 API Routes & CRUD",
          title: "Real-time Update & Optimistic UI",
          description: "Memperbarui UI secara optimis sebelum konfirmasi server untuk UX yang lebih responsif.",
          icon: "building",
          xp: 40,
          prerequisites: ["tsx_l8_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Optimistic UI Updates",
              content: `Optimistic UI memperbarui tampilan SEGERA (sebelum server merespons) untuk UX yang lebih responsif, lalu rollback jika server error:

\`\`\`tsx
const hapusProduk = async (id: number) => {
  // Optimistic: hapus dari UI dulu
  setDaftar(prev => prev.filter(p => p.id !== id));
  try {
    await fetch(\`/api/produk/\${id}\`, { method: "DELETE" });
  } catch {
    // Rollback jika gagal
    setDaftar(daftarLama);
  }
};
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_8_mc",
                type: "multiple_choice",
                prompt: "Apa yang harus dilakukan saat operasi server gagal setelah melakukan Optimistic UI update?",
                conceptGuide: "Saat server gagal, rollback UI ke state sebelumnya.",
                options: [
                  "Rollback UI ke state sebelum optimistic update",
                  "Biarkan UI dalam kondisi optimistic",
                  "Refresh seluruh halaman",
                  "Hapus semua state",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Rollback UI ke state lama jika server gagal.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_8_tf",
                type: "true_false",
                prompt: "Apakah Optimistic UI meningkatkan pengalaman pengguna dengan membuat UI terasa lebih responsif meski koneksi lambat?",
                conceptGuide: "Optimistic UI meningkatkan perceived performance.",
                statement: "Optimistic UI membuat UI terasa lebih responsif dengan koneksi lambat.",
                correctAnswer: true,
                explanation: "Tepat! Optimistic UI meningkatkan perceived performance secara signifikan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_8_8_cc",
                type: "code_challenge",
                prompt: "Simulasikan Optimistic Delete: hapus id=2 dari array optimis dulu. Cetak panjang array setelah hapus!",
                conceptGuide: "Tulis `const data = [{id:1},{id:2},{id:3}]; const optimis = data.filter(d => d.id !== 2); console.log(optimis.length);`.",
                starterCode: `const data = [{ id: 1 }, { id: 2 }, { id: 3 }];\nconst optimis = data.filter(d => d.id !== 2);\nconsole.log(optimis.length);\n`,
                expectedOutput: "2",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 8 Lesson pada Section 08 API Routes & CRUD!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "tsx_sec_9",
      title: "09 Master TSX Projects (6 Lesson)",
      description: "Performance Optimization, Accessibility, Testing, dan Mini-Project Master.",
      lessons: [
        {
          id: "tsx_l9_1",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Performance: Code Splitting & Lazy Loading",
          description: "Memuat komponen secara dinamis untuk mempercepat initial page load.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["tsx_l8_8"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dynamic Import & Lazy Loading",
              content: `\`\`\`tsx
import dynamic from "next/dynamic";

// Komponen dimuat hanya saat dibutuhkan
const GrafikBerat = dynamic(() => import("./GrafikBerat"), {
  loading: () => <p>Memuat grafik...</p>,
  ssr: false, // Nonaktifkan SSR untuk library client-only
});
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_1_mc",
                type: "multiple_choice",
                prompt: "Apa tujuan utama dari Code Splitting dalam aplikasi React/Next.js?",
                conceptGuide: "Code splitting memecah bundle menjadi chunk kecil dimuat sesuai kebutuhan.",
                options: [
                  "Memecah bundle JS menjadi chunk kecil yang dimuat sesuai kebutuhan",
                  "Menggabungkan semua kode menjadi satu file",
                  "Mempercepat kompilasi TypeScript",
                  "Menghapus kode yang tidak digunakan",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Code splitting memuat hanya chunk yang dibutuhkan.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_1_tf",
                type: "true_false",
                prompt: "Apakah opsi ssr: false pada dynamic import Next.js menonaktifkan Server Side Rendering untuk komponen tersebut?",
                conceptGuide: "ssr: false membuat komponen hanya dirender di browser (client-only).",
                statement: "Opsi ssr: false membuat komponen hanya dirender di browser.",
                correctAnswer: true,
                explanation: "Tepat! `ssr: false` membuat komponen client-only.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan lazy loading: buat fungsi async loadKomponen() { return { default: 'GrafikBerat' }; }. Cetak nama default-nya!",
                conceptGuide: "Tulis `async function loadKomponen() { return { default: \"GrafikBerat\" }; } loadKomponen().then(m => console.log(m.default));`.",
                starterCode: `async function loadKomponen() {\n  return { default: "GrafikBerat" };\n}\nloadKomponen().then(m => console.log(m.default));\n`,
                expectedOutput: "GrafikBerat",
                explanation: "Sip! Code splitting & lazy loading dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l9_2",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Next/Image & Core Web Vitals",
          description: "Mengoptimalkan gambar untuk performa web menggunakan komponen Image Next.js.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["tsx_l9_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Next.js Image Optimization",
              content: `\`\`\`tsx
import Image from "next/image";

function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero Image"
      width={1200}
      height={600}
      priority // Preload untuk LCP
      placeholder="blur" // Blur saat memuat
    />
  );
}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_2_mc",
                type: "multiple_choice",
                prompt: "Prop apakah pada komponen Next/Image yang digunakan untuk memprioritaskan loading gambar hero (LCP)?",
                conceptGuide: "Prop priority mempreload gambar untuk mempercepat LCP.",
                options: ["priority", "preload", "important", "first"],
                correctAnswer: 0,
                explanation: "Tepat! Prop `priority` mempreload gambar untuk optimasi LCP.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_2_tf",
                type: "true_false",
                prompt: "Apakah Next.js Image secara otomatis mengkonversi gambar ke format WebP yang lebih kecil ukurannya?",
                conceptGuide: "Next.js Image otomatis mengoptimalkan ke WebP atau AVIF.",
                statement: "Next.js Image otomatis mengkonversi ke format WebP/AVIF.",
                correctAnswer: true,
                explanation: "Tepat! Next.js Image otomatis mengoptimalkan format gambar.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan image config: buat object imgConfig = { width: 1200, height: 600, format: 'webp' }. Cetak imgConfig.format!",
                conceptGuide: "Tulis `const imgConfig = { width: 1200, height: 600, format: \"webp\" }; console.log(imgConfig.format);`.",
                starterCode: `const imgConfig = { width: 1200, height: 600, format: "webp" };\nconsole.log(imgConfig.format);\n`,
                expectedOutput: "webp",
                explanation: "Keren! Next/Image optimization dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l9_3",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Accessibility (a11y) Best Practices",
          description: "Membangun antarmuka yang inklusif dan dapat diakses oleh semua pengguna.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["tsx_l9_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Aksesibilitas di React",
              content: `Praktik terbaik aksesibilitas di React:

1. Selalu sediakan atribut \`alt\` pada gambar.
2. Gunakan \`aria-label\` untuk elemen tanpa teks terlihat.
3. Pastikan navigasi keyboard berfungsi (\`tabIndex\`, \`onKeyDown\`).
4. Gunakan elemen HTML semantik (\`<button>\`, \`<nav>\`, \`<main>\`).`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_3_mc",
                type: "multiple_choice",
                prompt: "Atribut ARIA apakah yang digunakan untuk memberi label pada elemen UI yang tidak memiliki teks terlihat?",
                conceptGuide: "aria-label memberikan nama aksesibel untuk elemen tanpa teks tampak.",
                options: ["aria-label", "aria-text", "aria-name", "aria-title"],
                correctAnswer: 0,
                explanation: "Tepat! `aria-label` memberi label aksesibel untuk screen reader.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_3_tf",
                type: "true_false",
                prompt: "Apakah menggunakan elemen <div onClick={...}> sebagai tombol adalah praktik aksesibilitas yang baik?",
                conceptGuide: "div tidak dapat diakses keyboard secara native, gunakan <button>.",
                statement: "<div onClick={...}> adalah praktik aksesibilitas yang baik untuk tombol.",
                correctAnswer: false,
                explanation: "Tepat! Gunakan <button> asli yang mendukung keyboard secara native.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_3_cc",
                type: "code_challenge",
                prompt: "Buat object a11yConfig = { role: 'button', ariaLabel: 'Tombol Tutup' }. Cetak a11yConfig.ariaLabel!",
                conceptGuide: "Tulis `const a11yConfig = { role: \"button\", ariaLabel: \"Tombol Tutup\" }; console.log(a11yConfig.ariaLabel);`.",
                starterCode: `const a11yConfig = { role: "button", ariaLabel: "Tombol Tutup" };\nconsole.log(a11yConfig.ariaLabel);\n`,
                expectedOutput: "Tombol Tutup",
                explanation: "Super! Accessibility best practices dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "tsx_l9_4",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Mini-Project 1: Dashboard Todo App",
          description: "Membangun aplikasi Todo full-featured dengan CRUD, filter, dan animasi.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["tsx_l9_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dashboard Todo App",
              content: `Mini-project ini menggabungkan semua yang dipelajari: State management, CRUD operations, Filter, dan animasi.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_4_cc",
                type: "code_challenge",
                prompt: "Buat Todo engine: array todo dengan 2 item, filter yang sudah selesai (selesai: true), cetak jumlah todo selesai!",
                conceptGuide: "Tulis `const todos = [{id:1, selesai: true}, {id:2, selesai: false}]; const selesai = todos.filter(t => t.selesai); console.log(selesai.length);`.",
                starterCode: `const todos = [{ id: 1, selesai: true }, { id: 2, selesai: false }];\nconst selesai = todos.filter(t => t.selesai);\nconsole.log(selesai.length);\n`,
                expectedOutput: "1",
                explanation: "Hebat! Mini-Project Dashboard Todo App berhasil diselesaikan!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "tsx_l9_5",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Mini-Project 2: E-Commerce Product Listing",
          description: "Membangun halaman daftar produk dengan search, filter, sort, dan pagination.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["tsx_l9_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "E-Commerce Product Listing",
              content: `Mini-project membangun halaman listing produk lengkap dengan fitur: Search real-time, Filter kategori, Sort harga, dan Pagination.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_5_cc",
                type: "code_challenge",
                prompt: "Implementasikan search + sort: filter produk yang mengandung 'a' dan sort harga ascending. Cetak nama produk pertama!",
                conceptGuide: "Tulis `const p = [{n:'Laptop',h:15000},{n:'Mouse',h:150},{n:'Keyboard',h:500}]; const hasil = [...p].filter(x=>x.n.includes('a')).sort((a,b)=>a.h-b.h); console.log(hasil[0].n);`.",
                starterCode: `const p = [{ n: "Laptop", h: 15000 }, { n: "Mouse", h: 150 }, { n: "Keyboard", h: 500 }];\nconst hasil = [...p].filter(x => x.n.includes("a")).sort((a, b) => a.h - b.h);\nconsole.log(hasil[0].n);\n`,
                expectedOutput: "Keyboard",
                explanation: "Luar biasa! Mini-Project E-Commerce Product Listing berhasil diselesaikan!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "tsx_l9_6",
          language: "tsx",
          sectionId: "tsx_sec_9",
          sectionTitle: "09 Master TSX Projects",
          title: "Final Assessment: Full-Stack TSX Master",
          description: "Ujian akhir kelulusan kurikulum TSX/React 65 Lesson.",
          icon: "trophy",
          xp: 100,
          prerequisites: ["tsx_l9_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Final Master Challenge",
              content: `Selamat! Kamu telah menyelesaikan seluruh Kurikulum TSX/React 65 Lesson!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "tsx_ex_9_6_cc",
                type: "code_challenge",
                prompt: "LEVEL MASTER: Buat fungsi masterTSX() yang mengembalikan 'MASTER TSX KADEZ' dan cetak ke konsol!",
                conceptGuide: "Tulis `function masterTSX(): string { return \"MASTER TSX KADEZ\"; } console.log(masterTSX());`.",
                starterCode: `function masterTSX(): string {\n  return "MASTER TSX KADEZ";\n}\nconsole.log(masterTSX());\n`,
                expectedOutput: "MASTER TSX KADEZ",
                explanation: "SELAMAT! KAMU RESMI MENJADI MASTER TSX/REACT LULUSAN CODEQUEST 65 LESSON!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
