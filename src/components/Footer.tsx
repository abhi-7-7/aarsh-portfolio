import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100">
      <div className="content-width py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-gray-500 font-medium">
          © {year} {personal.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-7">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors font-medium"
          >
            LinkedIn
          </a>
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors font-medium"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
