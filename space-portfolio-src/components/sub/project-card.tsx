import Link from "next/link";

type ProjectCardProps = {
  src?: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#7042f88b] hover:-translate-y-1 hover:border-purple-500 hover:shadow-purple-500/10 transition-all duration-300 group block h-full bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="text-cyan-400 group-hover:text-purple-400 text-sm font-medium transition mt-6">
        GitHub Link →
      </div>
    </Link>
  );
};
