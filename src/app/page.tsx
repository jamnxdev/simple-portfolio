import { FlipSentences } from "@/components/flip-sentences";
import { GrainGradient } from "@paper-design/shaders-react";
import {
  DotIcon,
  GearIcon,
  MinusIcon,
  PlusIcon,
  SquareIcon,
  SquareLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

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

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="relative w-full max-w-4xl aspect-2/1 sm:aspect-3/1 p-2 border-t-2 border-dashed">
        <div className="absolute inset-0 h-full p-2">
          <GrainGradient
            {...gradientConfig}
            className="h-full! w-full! mx-auto object-cover"
          />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Jaimin</h1>
          <FlipSentences
            className="font-mono text-sm font-bold text-white text-balance"
            variants={{
              initial: { y: -10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 },
            }}
            interval={2.25}
          >
            {["Software Engineer", "Freelancer", "Builder"]}
          </FlipSentences>
        </div>
      </div>
      {/* ABOUT ME */}
      <div className="w-full border-y-2 border-dashed p-2">
        <p className="text-lg font-bold">About Me</p>
        <div className="flex flex-col *:flex *:items-start *:gap-2">
          <p>
            <span>
              <DotIcon weight="duotone" size={22} />
            </span>
            <span>
              Software engineer with a product oriented mindset who knows how to
              ship fast.
            </span>
          </p>
          <p>
            <span>
              <DotIcon weight="duotone" size={22} />
            </span>
            <span>
              I mostly use Typescript, React, Next.js, Bun and PostgreSQL to
              build full stack web apps, but my skills are not limited to just
              these technologies. I also have experience with other technologies
              too.
            </span>
          </p>
          <p>
            <span>
              <DotIcon weight="duotone" size={22} />
            </span>
            <span>
              I'm not a designer, but I have a keen eye to make things that look
              visually appealing.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
