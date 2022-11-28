import type { MarkdownInstance } from "astro";

import type { FrontMatter } from "./types/front-matter";
import { ProjectCard } from "./project-card";

type IProjectsProps = {
  projectsList: MarkdownInstance<FrontMatter>[];
};

const ProjectsGallery = (props: IProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.projectsList.map((elt) => (
      <ProjectCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { ProjectsGallery };
