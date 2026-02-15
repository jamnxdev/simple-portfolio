import { GrainGradient } from "@paper-design/shaders-react";
import { FlipSentences } from "../shared/flip-sentences";
import { USER } from "@/config/content/user";

const gradientConfig = {
  width: 1280,
  height: 720,
  colors: [
    "#c6750c",
    "#beae60",
    "#d7cbc6",
    "#2b00ff",
    "#1a0000",
    "#3399cc",
    "#3333cc",
  ],
  colorBack: "#04041b",
  softness: 0.25,
  intensity: 0.25,
  noise: 0.25,
  shape: "wave" as const,
  speed: 0.75,
  rotation: 45,
  offsetX: -0.15,
  fit: "contain" as const,
};

export default function HeroSection() {
  return (
    <div className="relative w-full aspect-2/1 sm:aspect-3/1 p-2">
      <div className="absolute inset-0 h-full p-2">
        <GrainGradient
          {...gradientConfig}
          className="h-full! w-full! mx-auto object-cover"
        />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">{USER.name}</h1>
        <FlipSentences
          className="font-mono text-sm font-bold text-white text-balance"
          variants={{
            initial: { y: -10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 10, opacity: 0 },
          }}
          interval={2.25}
        >
          {USER.flipSentences}
        </FlipSentences>
      </div>
    </div>
  );
}
