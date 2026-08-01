import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  DEVOPS_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
  BASE_PATH,
} from "@/constants";

// Icons available in /public/skills/ — both .png and .svg
const ICON_FILES = new Set([
  // Original PNGs from template
  "html.png", "css.png", "js.png", "tailwind.png", "react.png",
  "redux.png", "reactquery.png", "ts.png", "next.png", "framer.png",
  "node.png", "mongodb.png", "express.png", "firebase.png",
  "postgresql.png", "mysql.png", "prisma.png", "graphql.png",
  "reactnative.png", "tauri.png", "docker.png", "figma.png", "go.png",
  "stripe.png", "mui.png",
  // Downloaded SVGs — core
  "python.svg", "flask.svg", "django.svg", "linux.svg", "git.svg",
  "bash.svg", "nginx.svg", "aws.svg", "tensorflow.svg",
  "vscode.svg", "sklearn.svg", "kubernetes.svg", "ci-cd.svg", "iac.svg",
  // Downloaded SVGs — tools
  "wireshark.svg", "kali.svg", "colab.svg", "netsec.svg",
  "parrot.svg", "burp.svg", "firewall.svg",
  // Downloaded SVGs — AWS
  "ec2.svg", "s3.svg", "rds.svg", "route53.svg", "iam.svg", "vpc.svg", "cloudfront.svg"
]);

type SkillItem = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

// Renders either a skill icon (png or svg) or a styled text badge
function SkillBadge({ skill }: { skill: SkillItem }) {
  // Check for the exact filename, or try .svg variant if .png not found
  const pngName  = skill.image;
  const svgName  = skill.image.replace(/\.png$/, ".svg");

  const usedFile = ICON_FILES.has(pngName)
    ? pngName
    : ICON_FILES.has(svgName)
    ? svgName
    : null;

  if (usedFile) {
    return (
      <div className="flex flex-col items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/skills/${usedFile}`}
          alt={skill.skill_name}
          width={skill.width}
          height={skill.height}
          className="object-contain"
          style={{ filter: usedFile.endsWith(".svg") && (skill.image.includes("flask") || skill.image.includes("django") || skill.image.includes("bash")) ? "invert(1)" : undefined }}
        />
        <span className="text-xs text-gray-400 text-center max-w-[80px] leading-tight">{skill.skill_name}</span>
      </div>
    );
  }

  // Fallback: styled text pill
  return (
    <div className="px-4 py-2 border border-[#7042f88b] rounded-full text-gray-200 text-sm font-medium bg-[rgba(3,0,20,0.5)] backdrop-blur-sm whitespace-nowrap hover:border-purple-400 transition-colors">
      {skill.skill_name}
    </div>
  );
}

const SectionLabel = ({ label }: { label: string }) => (
  <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 mt-6">{label}</p>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-16 md:py-20 px-6"
    >
      <SkillText />

      <SectionLabel label="Core Tech Stack" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {SKILL_DATA.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      <SectionLabel label="DevOps & Infrastructure" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {DEVOPS_SKILL.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      <SectionLabel label="Cloud — AWS" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {FRONTEND_SKILL.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      <SectionLabel label="Backend & Databases" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {BACKEND_SKILL.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      <SectionLabel label="Cybersecurity Tools" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {FULLSTACK_SKILL.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      <SectionLabel label="Machine Learning & Tools" />
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
        {OTHER_SKILL.map((skill) => (
          <SkillBadge key={skill.skill_name} skill={skill} />
        ))}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay>
            <source src={`${BASE_PATH}/videos/skills-bg.webm`} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
