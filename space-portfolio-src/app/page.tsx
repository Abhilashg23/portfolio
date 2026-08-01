import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { MoreSections } from "@/components/main/more-sections";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Encryption />
        <Skills />
        <Projects />
        <Experience />
        <MoreSections />
      </div>
    </main>
  );
}
