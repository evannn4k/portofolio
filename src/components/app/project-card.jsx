import { ExternalLinkIcon, ImagePlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 19 19" fill="currentColor" aria-hidden="true" {...props}>
      <use href="/icons.svg#github-icon" />
    </svg>
  );
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Tangkapan layar proyek ${project.title}`}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-surface-soft text-muted-foreground">
      <ImagePlusIcon aria-hidden="true" />
      <span className="text-caption">Screenshot belum tersedia</span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <Card className="h-full gap-0 rounded-3xl py-0 [--card-spacing:--spacing(6)]">
      <ProjectPreview project={project} />
      <CardContent className="flex flex-1 flex-col gap-4 px-6 py-6">
        <h3 className="text-title-md font-semibold text-card-foreground">
          {project.title}
        </h3>
        <p className="text-body-sm text-body">{project.description}</p>
        <ul
          aria-label="Teknologi yang digunakan"
          className="mt-auto flex flex-wrap gap-2 pt-2"
        >
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="h-6 px-3 text-caption">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="gap-3">
        <Button
          render={<a href={project.github} />}
          variant="outline"
          className="h-9 rounded-full px-4 text-nav-link"
        >
          <GithubIcon />
          GitHub
        </Button>
        {project.demo && (
          <Button
            render={<a href={project.demo} />}
            variant="outline"
            className="h-9 rounded-full px-4 text-nav-link"
          >
            <ExternalLinkIcon />
            Demo Live
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
