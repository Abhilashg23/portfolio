"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_PATH } from "@/constants";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const greeting = "Hi, I'm ";
  const name = "Abhilash G";
  const fullText = `${greeting}${name}`;
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timeout = window.setTimeout(() => {
        setTypedIndex((current) => current + 1);
      }, 80);

      return () => window.clearTimeout(timeout);
    }

    const resetTimeout = window.setTimeout(() => {
      setTypedIndex(0);
    }, 2200);

    return () => window.clearTimeout(resetTimeout);
  }, [typedIndex, fullText.length]);

  const typedGreeting = fullText.slice(0, Math.min(typedIndex, greeting.length));
  const typedName = typedIndex > greeting.length ? fullText.slice(greeting.length, typedIndex) : "";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-between px-6 md:px-20 mt-32 md:mt-40 w-full max-w-screen-xl mx-auto z-[20] gap-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Left: Text */}
        <div className="flex-1 min-w-0 md:w-[52%] flex flex-col gap-5 justify-center items-center md:items-start text-center md:text-start w-full max-w-[600px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Cloud &amp; Cybersecurity Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="inline-flex items-center gap-1">
            <span>{typedGreeting}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {typedName}
            </span>
            <span className="typing-cursor">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          MCA (Cybersecurity) graduate with production experience in AWS cloud
          infrastructure, backend development, and system security. Building
          secure, scalable architectures with Python, Flask, and Docker.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 flex-wrap justify-center md:justify-start"
        >
          <Link
            href="#about-me"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Explore My Work
          </Link>
          <Link
            href={`${BASE_PATH}/resume/ABHILASH_G_Resume_V7.pdf`}
            target="_blank"
            rel="noopener"
            className="py-2 px-6 border border-[#7042f88b] text-center text-gray-300 cursor-pointer rounded-lg hover:border-purple-500 transition"
          >
            View Resume
          </Link>
        </motion.div>
      </div>

        {/* Right: Profile Photo */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex-1 min-w-0 md:w-[44%] w-full h-full flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-30 animate-pulse" />
            <Image
              src={`${BASE_PATH}/profile.jpg`}
              alt="Abhilash G — Cloud & Cybersecurity Engineer"
              width={400}
              height={400}
              draggable={false}
              priority
              className="select-none rounded-full object-cover border-4 border-[#7042f88b] relative z-10 w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromTop}
        className="mt-10 flex flex-col items-center justify-center gap-2"
      >
        <a href="#about-me" className="scroll-down-arrow" aria-label="Scroll down">
          <span className="sr-only">Scroll down</span>
        </a>
        <span className="scroll-down-label">Scroll</span>
      </motion.div>
    </motion.div>
  );
};
