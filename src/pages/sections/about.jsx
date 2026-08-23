import { Badge } from "@/components/ui/badge";

const LEARNING_STACK = ["React", "Tailwind CSS", "Laravel", "MySQL"];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Tentang Saya
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
            >
              Di balik kode, ada yang terus belajar.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-body-lg text-body">
              Saya [Nama Anda], siswa SMK [Nama Sekolah] jurusan Pengembangan
              Perangkat Lunak dan Gim (PPLG).
            </p>
            <p className="mt-5 text-body-md text-body">
              Saat ini saya sedang menjalani magang di [Nama Tempat Magang],
              belajar bekerja pada proyek web yang nyata &mdash; dari cara
              mendiskusikan ide, menulis kode, sampai menyelesaikan masalah
              yang muncul di lapangan.
            </p>
            <p className="mt-5 text-body-md text-body">
              Minat utama saya ada pada web development: menyusun antarmuka
              yang rapi sambil memahami bagaimana sebuah aplikasi bekerja
              sebagai satu kesatuan.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-title-sm text-foreground">
                Teknologi yang sedang dipelajari
              </h3>
              <ul
                aria-label="Teknologi yang sedang dipelajari"
                className="mt-4 flex flex-wrap gap-2"
              >
                {LEARNING_STACK.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary" className="h-6 px-3 text-caption">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-body-md text-body">
                [Tuliskan arah perkembangan skill Anda, misalnya: memperdalam
                frontend modern, memperkuat dasar-dasar backend, atau
                mengeksplorasi tools pengembangan lain.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
