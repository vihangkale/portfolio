type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-slate-800 bg-slate-950/90 px-4 py-2 text-sm text-slate-200 shadow-sm">
      {label}
    </span>
  );
}
