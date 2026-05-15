import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function MiniProjectCard({ project }: Props) {
  return (
    <article className="group h-full border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-gray-50 transition-all">
      <div className="mb-3">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full aspect-[16/9] object-cover rounded-md border border-gray-200"
            loading="lazy"
          />
        ) : (
          <div
            aria-hidden="true"
            className="w-full aspect-[16/9] rounded-md border border-gray-200 bg-white/70"
          />
        )}
      </div>

      <div className="mb-2.5">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
          {project.title}
        </h3>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed mb-3">{project.description}</p>

      {project.metrics?.length ? (
        <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">
          {project.metrics.slice(0, 3).join(" • ")}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors font-medium"
            aria-label={`${project.title} GitHub`}
          >
            GitHub repo ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:text-blue-700 transition-colors font-medium"
            aria-label={`${project.title} live app`}
          >
            Live app ↗
          </a>
        )}
      </div>
    </article>
  );
}