import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="content-width pb-20">
      <SectionHeading title="Full-Stack & Applied AI Skills" id="skills" />

      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:gap-10 gap-1.5">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider sm:w-28 shrink-0">
              {group.label}
            </span>
            <p className="text-sm text-gray-800 leading-relaxed">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}