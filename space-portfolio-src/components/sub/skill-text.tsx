"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        whileInView="visible"
        className="text-[18px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Building secure systems across{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Cloud, DevOps, Backend, and Cybersecurity
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        className="text-[30px] font-medium text-white text-center"
      >
        Tech Stack &amp; Skills
      </motion.div>
    </div>
  );
};
