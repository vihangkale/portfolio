import type { ReactNode } from "react";

type ExperienceLink = {
  label: string;
  href: string;
};

type ExperienceCardProps = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  bullets: React.ReactNode[];
  links?: ExperienceLink[];
};

export default function ExperienceCard({
  role,
  company,
  duration,
  location,
  bullets,
  links,
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            {role}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {company}
          </h3>
          {location ? (
            <p className="mt-1 text-sm text-slate-700">
              {duration} · {location}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-700">{duration}</p>
          )}
        </div>
        {links ? (
          <div className="flex flex-wrap items-center justify-start gap-2 text-xs text-slate-500 sm:justify-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 transition hover:border-slate-300 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
        {bullets.map((b, index) => (
          <li key={index} className="text-sm leading-6">
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
