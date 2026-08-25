export const projects = [
  {
    title: "Internship Management",
    description:
      "Aplikasi manajemen magang berbasis web untuk menyederhanakan pelaporan kegiatan, pendataan peserta, dan pemantauan evaluasi secara terstruktur.",
    image: null,
    technologies: ["React", "Shadcn/ui", "Laravel", "MySQL", "Inertia.js"],
    github: "https://github.com/evannn4k/InternshipManagement",
    demo: null,
  },
  {
    title: "My Money",
    description:
      "Project Website Personal Finance Manager yang dibuat untuk membantu pengguna mengelola keuangan pribadi mereka .",
    image: null,
    technologies: ["React", "Shadcn/ui", "Laravel", "MySQL", "RestFul API"],
    github: "https://github.com/evannn4k/MyMoney",
    demo: null,
  },
  {
    title: "Top-up Game",
    description:
      "[Tugas akhir Kelas Industri tingkat Middle, Website Top Up Game dengan sistem pembayaran otomatis menggunakan Payment Gateway (Flip Test Mode).",
    image: null,
    technologies: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL"],
    github: "https://github.com/evannn4k/LastProjectMiddle",
    demo: null,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/images/logo/react.jpg" },
      { name: "Tailwind CSS", icon: "/images/logo/tailwind.jpg" },
      { name: "Shadcn/ui", icon: "/images/logo/shadcn.jpg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: "/images/logo/php.jpg" },
      { name: "Laravel", icon: "/images/logo/laravel.jpg" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: "/images/logo/mysql.jpg" },
      { name: "MariaDB", icon: "/images/logo/mariadb.jpg" },
      { name: "Git", icon: "/images/logo/git.jpg" },
      { name: "GitHub", icon: "/images/logo/github.jpg" },
    ],
  },
];

export const experience = {
  company: "[Nama Perusahaan / Organisasi Magang]",
  role: "[Posisi Anda, misalnya: Web Developer Intern]",
  period: "[Bulan Tahun] – Sekarang",
  responsibilities: [
    "[Deskripsikan tanggung jawab atau tugas utama yang Anda kerjakan selama magang]",
    "[Tambahkan kontribusi konkret, misalnya fitur atau halaman yang Anda bangun bersama tim]",
    "[Tambahkan aktivitas rutin jika relevan, misalnya rapat, review kode, atau testing]",
  ],
  technologies: ["Laravel", "React", "MySQL", "Git"],
  learnings: [
    "[Hal baru yang Anda pelajari dari magang ini, misalnya alur kerja proyek nyata]",
    "[Skill non-teknis yang berkembang, misalnya komunikasi dan kolaborasi tim]",
  ],
};

export const education = {
  school: "SMK Muhammadiyah 1 Weleri",
  major: "Pengembangan Perangkat Lunak dan Gim (PPLG)",
  period: "2024 – Sekarang",
};

export const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#education", label: "Pendidikan" },
  { href: "#contact", label: "Kontak" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/evannn4k" },
  { label: "LinkedIn", href: null },
  { label: "Email", href: "mailto:mevansusanto@gmail.com" },
];
