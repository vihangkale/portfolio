type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  highlights,
  href,
}: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6">{description}</p>
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium transition text-violet-600 hover:underline"
          >
            View
          </a>
        ) : null}
      </div>

      <div className="mt-5 space-y-3 text-sm">
        {highlights.map((item) => (
          <p key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-600 " />
            {item}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
