import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
            Pendidikan
          </p>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h2
              id="education-heading"
              className="text-title-lg text-foreground"
            >
              {education.school}
            </h2>
            <p className="font-mono text-caption text-muted-foreground">
              {education.period}
            </p>
          </div>
          <p className="mt-1 text-body-md text-body">{education.major}</p>
        </div>
    </section>
  );
}
