import { personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const linkedinDisplay = personal.linkedin
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <section className="content-width pb-16 sm:pb-20">
      <SectionHeading title="Internship Contact" id="contact" />

      <p className="text-sm text-gray-700 mb-8 leading-relaxed max-w-lg">
        Open to full-stack and applied AI internship opportunities. If you&apos;re hiring or building
        something worth contributing to, reach out. Best for internship roles in full-stack,
        applied AI, or product engineering.
      </p>

      <ul className="flex flex-col gap-5">
        {personal.email && (
          <li className="text-sm text-gray-800 leading-relaxed">
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            <a
              href={`mailto:${personal.email}`}
              className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              {personal.email}
            </a>
          </li>
        )}
        <li className="text-sm text-gray-800 leading-relaxed break-all">
          <span className="font-semibold text-gray-600">LinkedIn:</span>{" "}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            {linkedinDisplay}
          </a>
        </li>
        <li className="text-sm text-gray-800 leading-relaxed break-all">
          <span className="font-semibold text-gray-600">GitHub:</span>{" "}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            github.com/abhi-7-7
          </a>
        </li>
      </ul>
    </section>
  );
}