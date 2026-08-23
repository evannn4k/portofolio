import {
  Atom,
  CodeXml,
  Component,
  Database,
  FileCode2,
  GitBranch,
  Server,
  SquareCode,
  Wind,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";

const SKILL_ICONS = {
  react: Atom,
  tailwindcss: Wind,
  shadcnui: Component,
  php: FileCode2,
  laravel: Server,
  mysql: Database,
  git: GitBranch,
  vscode: SquareCode,
};

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="currentColor"
      aria-hidden="true"
      className="[&_path]:fill-current"
      {...props}
    />
  );
}

function SkillIcon({ icon }) {
  if (icon === "github") {
    return <GithubIcon className="size-5" />;
  }

  const Icon = SKILL_ICONS[icon] ?? CodeXml;
  return <Icon aria-hidden="true" className="size-5" />;
}

function SkillItem({ skill }) {
  return (
    <li className="group/item flex items-center gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition duration-200 group-hover/item:bg-primary-soft group-hover/item:text-primary motion-safe:group-hover/item:scale-110">
        <SkillIcon icon={skill.icon} />
      </span>
      <span className="text-body-sm font-medium text-card-foreground transition-colors duration-200 group-hover/item:text-primary">
        {skill.name}
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
            Keahlian
          </p>
          <h2
            id="skills-heading"
            className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
          >
            Teknologi yang saya gunakan
          </h2>
          <p className="mt-5 text-body-lg text-body">
            Dikelompokkan berdasarkan perannya dalam membangun sebuah aplikasi
            web.
          </p>
        </div>

        <ul
          aria-label="Kategori keahlian"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16"
        >
          {skillGroups.map((group) => (
            <li key={group.title}>
              <Card className="h-full gap-0 rounded-3xl py-6 shadow-none ring-border transition duration-200 [--card-spacing:--spacing(6)] hover:ring-primary/40 motion-safe:hover:-translate-y-1">
                <CardContent>
                  <h3 className="text-title-md text-card-foreground">
                    {group.title}
                  </h3>
                  <ul
                    aria-label={`Teknologi ${group.title}`}
                    className="mt-6 space-y-4"
                  >
                    {group.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
