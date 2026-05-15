import { featuredProjects, secondaryProjects, personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import MiniProjectCard from "./MiniProjectCard";

export default function Projects() {
  const supportingProjects = secondaryProjects;

  return (
    <section className="content-width pb-16 sm:pb-20">
      <SectionHeading title="Portfolio Projects" id="projects" />

      <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-7 sm:mb-8">
        Portfolio projects across full-stack engineering and applied AI, highlighted with measurable
        outcomes, production deployments, and implementation depth.
      </p>

      {/* Featured projects */}
      <div className="flex flex-col gap-5 sm:gap-6 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Secondary projects */}
      <div className="mb-10 sm:mb-12">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 sm:mb-5">
          Supporting Utilities & Experiments
        </p>
        <p className="text-xs text-gray-500 mb-4 sm:mb-5 max-w-xl">
          Smaller scoped builds focused on targeted implementation practice and quick validation of
          product ideas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          {supportingProjects.map((project) => (
            <MiniProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
      >
        See everything on GitHub
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}