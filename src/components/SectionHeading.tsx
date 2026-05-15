type Props = {
  title: string;
  id?: string;
};

export default function SectionHeading({ title, id }: Props) {
  return (
    <div id={id} className="mb-10 scroll-mt-20">
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          {title}
        </h2>
        <div className="w-7 h-0.5 bg-blue-500 flex-shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}
