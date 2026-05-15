import { personal } from "@/lib/data";

export default function Hero() {
  const resumeLabel = personal.resumeSizeLabel
    ? `Resume (PDF, ${personal.resumeSizeLabel})`
    : "Resume (PDF)";
  const hasProfileImage = Boolean(personal.profileImage);

  return (
    <section className="content-width pt-24 pb-16 sm:pb-20">
      <div
        className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_240px] gap-7 md:gap-10 items-start"
      >
        <div>
          {/* Status badge */}
          <div className="mb-8 sm:mb-9">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] sm:text-xs font-medium text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              Open to software engineering and applied AI internships
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
            {personal.name}
          </h1>

          {/* Role */}
          <p className="text-base sm:text-lg text-blue-600 mb-5 font-medium">{personal.role}</p>

          {/* Tagline */}
          <p className="text-base text-gray-700 leading-relaxed max-w-xl mb-3">
            {personal.tagline}
          </p>

          {/* Sub-tagline */}
          <p className="text-sm text-gray-500 mb-9 sm:mb-10">{personal.subtagline}</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View Projects
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              {resumeLabel}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full flex md:justify-end">
          <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-full p-1.5 bg-gradient-to-br from-blue-200 via-indigo-200 to-cyan-200 shadow-sm">
            {hasProfileImage ? (
              <img
                src={personal.profileImage}
                alt={`${personal.name} profile photo`}
                className="h-full w-full rounded-full border border-white/70 object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-full w-full rounded-full border border-white/70 bg-white/70"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}