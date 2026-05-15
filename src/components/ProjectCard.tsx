import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group relative h-full border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 bg-white">
      {/* Decorative SVG Corners */}
      <svg className="absolute -top-[1px] -left-[1px] w-8 h-8 text-gray-200 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 32V1H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
      <svg className="absolute -bottom-[1px] -right-[1px] w-8 h-8 text-gray-200 group-hover:text-blue-400 transition-colors duration-300 rotate-180" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 32V1H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>

      <div className="mb-4 relative overflow-hidden rounded-lg">
        {project.image ? (
          project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer group/img"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full aspect-[16/9] object-cover rounded-lg border border-gray-100 group-hover/img:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover/img:bg-blue-600/5 transition-colors duration-300 rounded-lg" />
            </a>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full aspect-[16/9] object-cover rounded-lg border border-gray-100"
              loading="lazy"
            />
          )
        ) : (
          <div
            aria-hidden="true"
            className="w-full aspect-[16/9] rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center"
          >
             <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors min-w-0 break-words">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>

        {project.metrics?.length ? (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-auto border-t border-gray-100 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
            >
              Code
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
            >
              Live Demo
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
