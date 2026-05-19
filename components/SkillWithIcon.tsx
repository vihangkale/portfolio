import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGitlab,
  SiWebpack,
  SiJest,
  SiRedux,
  SiSass,
  SiGithubactions,
  SiHtml5,
  SiCss,
  SiMaterialdesign,
  SiGooglechrome,
  SiOpenai,
  SiGoogle,
  SiJira,
  SiTestinglibrary,
  SiVscodium,
  SiGithubcopilot,
} from "react-icons/si";
import { FaAws, FaCode, FaBrain, FaRobot } from "react-icons/fa";

type SkillWithIconProps = {
  skill: string;
};

const skillIconMap: Record<string, React.ReactNode> = {
  "React.js": <SiReact className="text-blue-500" size={18} />,
  "Next.js": (
    <SiNextdotjs className="text-slate-900 dark:text-white" size={18} />
  ),
  TypeScript: <SiTypescript className="text-blue-600" size={18} />,
  JavaScript: <SiJavascript className="text-yellow-500" size={18} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" size={18} />,
  "Node.js": <SiNodedotjs className="text-green-600" size={18} />,
  "AWS (S3, Lambda, CloudWatch)": (
    <FaAws className="text-orange-500" size={18} />
  ),
  Git: <SiGit className="text-red-600" size={18} />,
  GitHub: <SiGithub className="text-slate-700 dark:text-slate-300" size={18} />,
  GitLab: <SiGitlab className="text-orange-500" size={18} />,
  Webpack: (
    <SiWebpack className="text-slate-700 dark:text-slate-300" size={18} />
  ),
  Jest: <SiJest className="text-red-600" size={18} />,
  "React Testing Library": (
    <SiTestinglibrary className="text-teal-600" size={18} />
  ),
  "VS Code": <SiVscodium className="text-slate-900" size={18} />,
  "Chrome DevTools": <SiGooglechrome className="text-amber-500" size={18} />,
  Redux: <SiRedux className="text-purple-600" size={18} />,
  "Material UI": <SiMaterialdesign className="text-sky-600" size={18} />,
  Sass: <SiSass className="text-pink-500" size={18} />,
  "GitHub Actions": (
    <SiGithubactions className="text-slate-700 dark:text-slate-300" size={18} />
  ),
  Jira: <SiJira className="text-blue-600" size={18} />,
  HTML: <SiHtml5 className="text-orange-500" size={18} />,
  CSS: <SiCss className="text-sky-500" size={18} />,
  ChatGPT: <SiOpenai className="text-sky-600" size={18} />,
  "GitHub Copilot": <SiGithubcopilot className="text-green-600" size={18} />,
  Perplexity: <FaRobot className="text-emerald-600" size={18} />,
  Claude: <FaBrain className="text-amber-600" size={18} />,
  Gemini: <SiGoogle className="text-rose-600" size={18} />,
};

export default function SkillWithIcon({ skill }: SkillWithIconProps) {
  const icon = skillIconMap[skill];

  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900">
      {icon ? (
        <>
          {icon}
          <span>{skill}</span>
        </>
      ) : (
        <span>{skill}</span>
      )}
    </div>
  );
}
