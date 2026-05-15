import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="content-width pb-20">
      <SectionHeading title="Technical Proficiency" id="skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
                {group.label}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <div
                  key={skill}
                  className="group relative px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[13px] text-gray-700 font-medium hover:border-blue-400 hover:text-blue-600 transition-all cursor-default shadow-sm hover:shadow-blue-500/5"
                >
                  {skill}
                  {/* Subtle dot accent */}
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}