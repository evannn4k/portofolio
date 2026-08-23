import { Button } from "@/components/ui/button";

const LEARNING_STACK = ["React", "Tailwind CSS", "Laravel", "MySQL"];

function CodeMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-card justify-self-center lg:justify-self-end">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <p className="font-mono text-caption text-muted-foreground">
          tentang-saya.jsx
        </p>
      </div>

      <div
        aria-hidden="true"
        className="space-y-1.5 overflow-x-auto px-6 py-6 font-mono text-caption sm:px-8 sm:text-body-sm"
      >
        <p>
          <span className="text-primary">const</span> profil = {"{"}
        </p>
        <p className="pl-4">
          sekolah: <span className="text-success">"SMK PPLG"</span>,
        </p>
        <p className="pl-4">
          status: <span className="text-success">"sedang magang"</span>,
        </p>
        <p className="pl-4">fokus: "web development",</p>
        <p>{"};"}</p>
        <p className="pt-3">
          <span className="text-primary">function</span>{" "}
          <span className="text-foreground">terusBertumbuh</span>() {"{"}
        </p>
        <p className="pl-4 text-muted-foreground">
          return ngoding(setiapHari);
        </p>
        <p>{"}"}</p>
      </div>

      <div className="border-t border-border px-6 py-5 sm:px-8">
        <p className="text-caption text-muted-foreground">Sedang dipelajari</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {LEARNING_STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary px-3 py-1.5 text-caption text-secondary-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Siswa SMK PPLG · Sedang Magang
            </p>
            <h1 className="mt-6 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl">
              Hai, saya [Nama Anda]
            </h1>
            <p className="mt-5 text-title-md text-foreground">
              Siswa PPLG &amp; Web Developer
            </p>
            <p className="mt-6 max-w-lg text-body-lg text-body">
              Saya membangun aplikasi web sambil mempelajari teknologi modern
              dan mengumpulkan pengalaman nyata melalui magang.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                render={<a href="#projects" />}
                className="h-14 rounded-full px-8 text-button text-white"
              >
                Lihat Proyek
              </Button>
              <Button
                render={<a href="#contact" />}
                variant="secondary"
                className="h-14 rounded-full px-8 text-button"
              >
                Hubungi Saya
              </Button>
            </div>
          </div>

          <CodeMockup />
        </div>
      </div>
    </section>
  );
}
