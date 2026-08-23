import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Pengalaman
            </p>
            <h2
              id="experience-heading"
              className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
            >
              Belajar langsung dari dunia kerja.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-title-lg text-foreground">
                {experience.company}
              </h3>
              <p className="font-mono text-caption text-muted-foreground">
                {experience.period}
              </p>
            </div>
            <p className="mt-1 text-title-sm text-muted-foreground">
              {experience.role}
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <h4 className="text-title-sm text-foreground">Tanggung jawab</h4>
              <ul className="mt-4 space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-body-md text-body"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h4 className="text-title-sm text-foreground">Teknologi</h4>
              <ul
                aria-label="Teknologi yang digunakan selama magang"
                className="mt-4 flex flex-wrap gap-2"
              >
                {experience.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary" className="h-6 px-3 text-caption">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h4 className="text-title-sm text-foreground">
                Yang saya pelajari
              </h4>
              <ul className="mt-4 space-y-3">
                {experience.learnings.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-body-md text-body"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
