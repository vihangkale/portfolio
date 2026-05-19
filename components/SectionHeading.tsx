type SectionHeadingProps = {
  title: string;
  description: string;
  id?: string;
};

export default function SectionHeading({
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          {title}
        </p>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
          {description}
        </p>
      </div>
      <div className="hidden h-px flex-1 bg-slate-800 sm:block" />
    </div>
  );
}
