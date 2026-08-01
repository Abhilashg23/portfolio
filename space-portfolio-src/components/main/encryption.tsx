"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { BASE_PATH } from "@/constants";


export const Encryption = () => {
  return (
    <div
      id="about-me"
      className="flex flex-col relative items-center justify-center py-16 md:py-20 w-full h-full z-10 px-6 md:px-20"
    >
      <div className="w-full z-[5] mb-4">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          className="text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Secure &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Scalable
          </span>{" "}
          Systems.
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center z-[20] mt-4 space-y-8"
      >
        <p className="text-gray-400 text-lg leading-relaxed">
          I&apos;m <span className="text-white font-semibold">Abhilash G</span>, a Cloud &amp; Cybersecurity Engineer
          with production experience deploying scalable applications on{" "}
          <span className="text-purple-400">AWS</span> — from EC2 &amp; S3 to RDS &amp; Route 53.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Skilled in{" "}
          <span className="text-cyan-400">Python, Flask, Django</span>, and REST APIs, I build
          backend systems with a security-first mindset — implementing IAM roles,
          firewall configurations, and network security from day one.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { value: "8.06", label: "MCA CGPA" },
            { value: "10+", label: "Projects" },
            { value: "6", label: "Certifications" },
            { value: "AIR 1353", label: "Coding Contest" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 border border-[#7042f88b] rounded-xl bg-[rgba(3,0,20,0.5)] backdrop-blur-sm"
            >
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="w-full flex items-start justify-center absolute -z-10 pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-30 pointer-events-none"
        >
          <source src={`${BASE_PATH}/videos/encryption-bg.webm`} type="video/webm" />
        </video>
      </div>
    </div>
  );
};
