import ProjectCard from "@/components/app/project-card";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-surface-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
            Portofolio
          </p>
          <h2
            id="projects-heading"
            className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
          >
            Proyek
          </h2>
          <TypingAnimation
            className="mt-5 text-body-lg text-body leading-7"
            typeSpeed={16}
            loop={false}
            as="p"
          >
            Proyek yang saya kerjakan untuk belajar membangun aplikasi web
            secara nyata, baik dari tugas sekolah maupun pengalaman magang.
          </TypingAnimation>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-aos-delay={i * 250}
              data-aos="fade-up"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
