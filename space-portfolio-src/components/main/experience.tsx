"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center py-20 px-6 md:px-20 w-full overflow-hidden">
      <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 pt-10 text-center">
        Work Experience
      </h1>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative border border-[#7042f88b] rounded-xl p-8 bg-[rgba(3,0,20,0.5)] backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-lg">
                  {exp.company}
                </p>
              </div>
              <span className="text-gray-400 text-sm font-mono border border-[#7042f88b] px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, bi) => (
                <li key={bi} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
