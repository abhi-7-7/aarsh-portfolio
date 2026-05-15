import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group border border-gray-300 rounded-lg p-5 sm:p-6 hover:border-gray-400 hover:bg-gray-50 transition-all">
      <div className="mb-4">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full aspect-[16/9] object-cover rounded-lg border border-gray-200"
            loading="lazy"
          />
        ) : (
          <div
            aria-hidden="true"
            className="w-full aspect-[16/9] rounded-lg border border-gray-200 bg-white/70"
          />
        )}
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors min-w-0 break-words">
          {project.title}
        </h3>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>

      {/* Key metrics */}
      {project.metrics?.length ? (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {metric}
            </span>
          ))}
        </div>
      ) : null}

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-md font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center flex-wrap gap-3 sm:gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            aria-label={`${project.title} case study on GitHub`}
          >
            View case study ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            aria-label={`${project.title} live app`}
          >
            Live app ↗
          </a>
        )}
      </div>
    </article>
  );
}
