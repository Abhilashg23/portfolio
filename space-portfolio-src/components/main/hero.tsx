import { HeroContent } from "@/components/sub/hero-content";
import { BASE_PATH } from "@/constants";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-[calc(100vh-65px)] w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src={`${BASE_PATH}/videos/blackhole.webm`} type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
