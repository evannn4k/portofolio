import { Badge } from "@/components/ui/badge";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";

const LEARNING_STACK = ["React", "Inertia.js", "Laravel", "MySQL"];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-surface-soft py-24 lg:py-32"
    >
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_25%,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Tentang Saya
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
              data-aos="fade-right"
            >
              Di balik kode, ada yang terus belajar.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <TypingAnimation
              className="mt-5 text-body-md text-body leading-7 whitespace-pre-line"
              typeSpeed={6}
              loop={false}
              as="p"
              children={`Saya Muhammad Evan Susanto, siswa SMK Muhammadiyah 1 Weleri jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).

              Saat ini saya sedang menjalani magang di Crocodic Academy, belajar bekerja pada proyek web yang nyata dari cara mendiskusikan ide, menulis kode, sampai menyelesaikan masalah yang muncul di lapangan.

              Minat utama saya ada pada web development: menyusun antarmuka yang rapi sambil memahami bagaimana sebuah aplikasi bekerja sebagai satu kesatuan.`}
            />
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
                    <Badge
                      variant="secondary"
                      className="h-6 px-3 text-caption"
                    >
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
              <TypingAnimation
                className="mt-8 text-body-md text-body leading-7"
                typeSpeed={12}
                loop={false}
                as="p"
              >
                Berfokus pada pengembangan web modern dengan merancang backend
                REST API di Laravel, membangun UI dinamis via React + Vite,
                serta sering eksplor pendekatan monolith pakai Inertia.js yang
                membuat alur development jadi jauh lebih cepat dan rapi.
              </TypingAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
