import { personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="content-width pb-20">
      <SectionHeading title="About the Developer" id="about" />
      <p className="text-sm text-gray-800 leading-relaxed max-w-lg">
        {personal.about}
      </p>
    </section>
  );
}