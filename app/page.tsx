import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import SkillWithIcon from "../components/SkillWithIcon";
import ExperienceCard from "../components/ExperienceCard";
import { FiMail, FiPhone, FiFileText } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "AWS (S3, Lambda, CloudWatch)",
  "Git",
  "GitHub",
  "GitLab",
  "Redux",
  "React Testing Library",
  "Jest",
  "Material UI",
  "Tailwind CSS",
  "Sass",
  "Webpack",
  "Jira",
  "Chrome DevTools",
  "Visual Studio Code",
  "GitHub Actions",
];

const aiTools = ["ChatGPT", "GitHub Copilot", "Perplexity", "Claude", "Gemini"];

const projects = [
  {
    title: "Frontend Mini Challenges",
    description:
      "Open-source challenge collection for interview prep and practical learning.",
    tech: ["JavaScript", "React", "Vue.js", "GitHub"],
    highlights: [
      "Built interactive UI challenges in vanilla JS, React, and Vue.",
      "Focused on clean UI, reusable components, and in-browser demos.",
    ],
    href: "https://github.com/vihangkale",
  },
  {
    title: "YouTube Mini Media Player",
    description:
      "Chrome extension that enhances YouTube with compact playback controls.",
    tech: ["JavaScript", "Chrome API", "UX"],
    highlights: [
      "Play/pause, seek, volume, speed, and quality controls.",
      "Iterative UI improvements with AI-assisted development.",
    ],
    href: "https://github.com/vihangkale",
  },
];

export default function Home() {
  const experiences = [
    {
      role: "Senior Associate Consultant",
      company: "Infosys",
      duration: "Aug 2024 – present",
      location: "Pune",
      bullets: [
        "Developed and enhanced frontend and backend modules for enterprise platforms in the automotive, insurance, and banking domains, improving workflow efficiency, data visibility, and overall user experience.",
        "Built advanced filtering, data automation, and user-friendly UI components to streamline operational workflows and deliver accurate business insights.",
        "Integrated REST APIs and collaborated with backend teams to ensure reliable data flow and a consistent user experience across modules.",
        "Improved application performance, resolved critical bugs, and contributed to system stability and operational efficiency.",
        "Used an AI-assisted development workflow with GitHub Copilot, ChatGPT, and Gemini to accelerate implementation, troubleshoot issues, refine UI/UX, and improve feature delivery quality.",
        "Developed and maintained test suites using Jest and React Testing Library, and supported CI/CD workflows to improve code quality across environments.",
        "Collaborated with cross-functional teams in Agile sprints, contributing to feature development, code reviews, and sprint planning.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "BrewApps",
      duration: "Jun 2022 – Jul 2024",
      location: "Pune",
      bullets: [
        "Built a dynamic test platform enabling recruiters to generate role-based assessments with AI-assisted automation.",
        "Developed real-time test interfaces with audio transcription and AI-based scoring.",
        "Automated result generation and reporting, reducing manual effort.",
        "Improved page load performance by ~15% through code splitting and optimization.",
        "Mentored junior developers and enforced best practices for scalable frontend architecture.",
      ],
      links: [
        { label: "TestDojo app", href: "https://app.testdojo.com/" },
        { label: "TestDojo site", href: "https://www.testdojo.com/" },
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "TechNative Consultancy Services Pvt Ltd",
      duration: "Jun 2021 – Jun 2022",
      location: "Pune",
      bullets: [
        "Developed responsive UI components for a Dealership Management System.",
        "Integrated APIs and collaborated with backend teams to implement core business features.",
        "Resolved bugs and enhanced system stability.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Code Gurukul Tech Pvt Ltd",
      duration: "Dec 2020 – Jun 2021",
      location: "Pune",
      bullets: [
        "Built an interactive educational game using Google Blockly to teach programming concepts to children.",
        "Designed a user-friendly UI to improve engagement and learning.",
      ],
    },
  ];

  return (
    <main className="min-h-screen pb-28">
      <div className="mx-auto flex max-w-6xl gap-10 px-6 py-14">
        <aside className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Navigate
            </p>
            <nav className="mt-4 space-y-3 text-sm">
              <a
                href="#summary"
                className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                Summary
              </a>
              <a
                href="#skills"
                className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                Selected projects
              </a>
            </nav>
          </div>
        </aside>

        <div className="flex-1">
          <header className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-24">
              <Image
                src="/profile_photo.jpg"
                width={160}
                height={160}
                alt="Vihang Kale"
                className="rounded-xl object-contain"
                priority
              />
            </div>

            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-900">
                    Vihang Kale
                  </h1>
                  <p className="mt-1 text-sm text-slate-700">
                    Full-Stack Developer (React · Node.js · TypeScript)
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    S.B Road, Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <a
                  href="mailto:vihangkale@zohomail.in"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <FiMail /> Email
                </a>
                <a
                  href="https://linkedin.com/in/vihangkale"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/vihangkale"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="/Vihang_Kale_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-300"
                >
                  <FiFileText /> Resume
                </a>
              </div>
            </div>
          </header>

          <div className="xl:hidden fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 text-sm">
              <a
                href="#summary"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-slate-700 transition hover:bg-slate-100"
              >
                Summary
              </a>
              <a
                href="#skills"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-slate-700 transition hover:bg-slate-100"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-slate-700 transition hover:bg-slate-100"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-slate-700 transition hover:bg-slate-100"
              >
                Projects
              </a>
            </div>
          </div>

          <section id="summary" className="mb-10">
            <h2 className="text-lg font-medium text-slate-900">Summary</h2>
            <p className="mt-3 text-slate-700 leading-7">
              Senior full-stack developer with ~4.8 years of experience
              delivering React and Next.js applications together with backend
              modules for enterprise platforms. I bring strong frontend polish
              plus API integration, automation, and performance improvements,
              with AI-assisted development workflows that sharpen delivery and
              quality.
            </p>
          </section>

          <section id="skills" className="mb-10">
            <h2 className="text-lg font-medium text-slate-900">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((s) => (
                <SkillWithIcon key={s} skill={s} />
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-600">AI & tools</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {aiTools.map((t) => (
                  <SkillWithIcon key={t} skill={t} />
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="mb-10">
            <h2 className="text-lg font-medium text-slate-900">Experience</h2>
            <div className="mt-6 grid gap-4">
              {experiences.map((e) => (
                <ExperienceCard key={`${e.company}-${e.role}`} {...e} />
              ))}
            </div>
          </section>

          <section id="projects" className="mb-10">
            <h2 className="text-lg font-medium text-slate-900">
              Selected projects
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
