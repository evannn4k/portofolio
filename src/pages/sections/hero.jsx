import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";

const LEARNING_STACK = ["React", "Tailwind CSS", "Laravel", "MySQL"];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <HexagonPattern
        hexagons={[
          [1, 1],
          [4, 4],
          [2, 2],
          [3, 4],
          [5, 4],
          [8, 2],
          [6, 3],
          [8, 5],
          [10, 10],
        ]}
        className={cn(
          "mask-[radial-gradient(420px_circle_at_25%,white,transparent)]",
          "inset-0 skew-y-6",
          "opacity-70",
        )}
      />
      <div className="z-10mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Siswa SMK PPLG · Sedang Magang
            </p>
            <h1
              data-aos="fade-right"
              className="mt-6 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
            >
              Hai, saya Muhammad Evan Evan Susanto
            </h1>
            <p className="mt-5 text-title-md text-foreground">
              Siswa PPLG &amp; Web Developer
            </p>
            <TypingAnimation
              typeSpeed={16}
              loop={false}
              as="p"
              className="mt-6 max-w-lg text-xl text-body leading-6"
            >
              Saya membangun aplikasi web sambil mempelajari teknologi modern
              dan mengumpulkan pengalaman nyata melalui magang.
            </TypingAnimation>
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
          <div className="flex justify-center lg:justify-end">
            <CometCard>
              <img
                src="/images/pp.jpg"
                alt="Photo"
                className="object-cover rounded-xl w-78"
              />
            </CometCard>
          </div>
        </div>
      </div>
    </section>
  );
}
