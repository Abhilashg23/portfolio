"use client";
import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "@/constants";
import Link from "next/link";

export const MoreSections = () => {
  return (
    <>
      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="flex flex-col items-center justify-center py-20 px-6 md:px-20 w-full overflow-hidden">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 text-center">
          Achievements &amp; Activities
        </h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#7042f88b] rounded-xl p-6 bg-[rgba(3,0,20,0.5)] backdrop-blur-sm flex flex-col gap-3"
            >
              <div className="Welcome-box py-[4px] px-[10px] border border-[#7042f88b] opacity-[0.9] w-fit">
                <span className="Welcome-text text-[11px]">{ach.badge}</span>
              </div>
              <h3 className="text-white font-semibold text-base leading-tight">{ach.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="flex flex-col items-center justify-center py-20 px-6 md:px-20 w-full overflow-hidden">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 text-center">
          Certifications &amp; Badges
        </h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#7042f88b] rounded-xl p-6 bg-[rgba(3,0,20,0.5)] backdrop-blur-sm flex flex-col gap-3"
            >
              <h3 className="text-white font-semibold text-base leading-snug">{cert.title}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm font-medium">
                {cert.issuer}
              </p>
              <p className="text-gray-500 text-xs font-mono">{cert.period}</p>
              {cert.link !== "#" ? (
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener"
                  className="text-cyan-400 hover:text-purple-400 text-sm underline underline-offset-2 transition w-fit mt-auto"
                >
                  View Certificate →
                </Link>
              ) : (
                <span className="text-gray-600 text-sm mt-auto">Certificate Available</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="flex flex-col items-center justify-center py-20 px-6 md:px-20 w-full overflow-hidden">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 text-center">
          Academic Background
        </h1>
        <div className="w-full max-w-3xl flex flex-col gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-[#7042f88b] rounded-xl p-6 bg-[rgba(3,0,20,0.5)] backdrop-blur-sm flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                {edu.specialization && (
                  <p className="text-purple-400 text-sm font-medium">Specialization: {edu.specialization}</p>
                )}
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-gray-500 text-xs font-mono">{edu.period}</span>
                <span className="text-cyan-400 text-sm font-semibold font-mono">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="flex flex-col items-center justify-center py-20 px-6 md:px-20 w-full overflow-hidden">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 text-center">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-center max-w-xl mb-12 text-lg">
          I&apos;m actively looking for Cloud &amp; Cybersecurity roles. Whether you want to discuss an opportunity,
          a project, or just say hi — my inbox is always open!
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center">
          <Link
            href="mailto:abhilashg9113@gmail.com"
            className="flex items-center gap-3 px-8 py-4 border border-[#7042f88b] rounded-xl bg-[rgba(3,0,20,0.5)] text-gray-200 hover:border-purple-500 hover:text-white transition"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400 text-sm">abhilashg9113@gmail.com</p>
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhilashg23/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 px-8 py-4 border border-[#7042f88b] rounded-xl bg-[rgba(3,0,20,0.5)] text-gray-200 hover:border-blue-500 hover:text-white transition"
          >
            <span className="text-2xl">💼</span>
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-gray-400 text-sm">abhilashg23</p>
            </div>
          </Link>
          <Link
            href="https://github.com/Abhilashg23"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 px-8 py-4 border border-[#7042f88b] rounded-xl bg-[rgba(3,0,20,0.5)] text-gray-200 hover:border-gray-400 hover:text-white transition"
          >
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-gray-400 text-sm">Abhilashg23</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};
