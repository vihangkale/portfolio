import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/30 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#"
          className="text-lg font-semibold text-white transition hover:text-violet-400"
        >
          Vihang Kale
        </Link>
        <div className="hidden flex-wrap items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <details className="group">
            <summary className="cursor-pointer text-sm text-slate-300 hover:text-violet-400">
              Menu
            </summary>
            <div className="absolute right-6 top-14 flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-violet-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
