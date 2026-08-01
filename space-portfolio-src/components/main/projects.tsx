"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, ALL_PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20 w-full overflow-hidden">
      <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 pt-10 text-center">
        Featured Projects
      </h1>

      {/* Top 3 Featured Cards (space template style) */}
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-16">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      {/* All Projects Grid */}
      <h2 className="text-[28px] font-semibold text-gray-300 mb-10 text-center px-6">
        All Projects
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10">
        {ALL_PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border border-[#7042f88b] rounded-xl p-6 bg-[rgba(3,0,20,0.5)] backdrop-blur-sm flex flex-col gap-4 hover:border-purple-500 transition-colors group"
          >
            <h3 className="text-white font-semibold text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-[rgba(112,66,248,0.1)] border border-[#7042f88b] rounded-full text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener"
              className="text-cyan-400 hover:text-purple-400 text-sm font-medium transition w-fit"
            >
              GitHub →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
