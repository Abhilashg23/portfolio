'use client';
import { useState } from "react";
import Link from "next/link";
import { SOCIALS } from "@/constants";

const NAV_LINKS = [
  { title: "About",          link: "#about-me" },
  { title: "Skills",         link: "#skills" },
  { title: "Projects",       link: "#projects" },
  { title: "Experience",     link: "#experience" },
  { title: "Achievements",   link: "#achievements" },
  { title: "Certifications", link: "#certifications" },
  { title: "Education",      link: "#education" },
  { title: "Contact",        link: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="#about-me" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
            AG
          </div>
          <div className="hidden lg:flex font-bold text-gray-200 text-lg">Abhilash G</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full">
          <div className="flex items-center gap-1 h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-4 py-2 rounded-full text-gray-200 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition px-2 py-1 whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/resume/ABHILASH_G_Resume_V7.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition px-2 py-1 border border-[rgba(112,66,248,0.5)] rounded-full ml-2"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex flex-row gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link href={link} target="_blank" rel="noreferrer noopener" key={name} title={name}>
              <Icon className="h-5 w-5 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014ee] backdrop-blur-md p-6 flex flex-col items-center text-gray-300 lg:hidden gap-4 border-t border-[#7042f88b] max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/resume/ABHILASH_G_Resume_V7.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 px-6 py-2 border border-[#7042f88b] rounded-full text-gray-200 hover:border-purple-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            View Resume
          </Link>
          <div className="flex justify-center gap-6 mt-2">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};