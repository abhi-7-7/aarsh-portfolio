import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function MiniProjectCard({ project }: Props) {
  return (
    <article className="group relative h-full border border-gray-200 rounded-xl p-4 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 bg-white">
      {/* Decorative SVG Corners */}
      <svg className="absolute -top-[1px] -left-[1px] w-6 h-6 text-gray-200 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 24V1H24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
      <svg className="absolute -bottom-[1px] -right-[1px] w-6 h-6 text-gray-200 group-hover:text-blue-400 transition-colors duration-300 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 24V1H24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>

      <div className="mb-3 relative overflow-hidden rounded-md">
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
                className="w-full aspect-[16/9] object-cover rounded-md border border-gray-100 group-hover/img:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
               <div className="absolute inset-0 bg-blue-600/0 group-hover/img:bg-blue-600/5 transition-colors duration-300 rounded-md" />
            </a>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full aspect-[16/9] object-cover rounded-md border border-gray-100"
              loading="lazy"
            />
          )
        ) : (
          <div
            aria-hidden="true"
            className="w-full aspect-[16/9] rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center"
          >
             <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
          </div>
        )}
      </div>

      <div className="mb-2.5">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
          {project.title}
        </h3>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-3 border-t border-gray-50">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-gray-500 hover:text-gray-900 transition-colors font-semibold"
            aria-label={`${project.title} GitHub`}
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-blue-600 hover:text-blue-800 transition-colors font-bold"
            aria-label={`${project.title} live app`}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}