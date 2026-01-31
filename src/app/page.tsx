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
  fit: "cover" as const,
};

export default function Page() {
  return (
    <main className="flex h-full flex-col gap-4 items-center border-dashed max-w-4xl mx-auto">
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="absolute inset-0 h-64">
          <GrainGradient
            {...gradientConfig}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex h-64 flex-col items-center justify-center text-white">
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

      <div className="w-full">
        <p className="text-lg font-bold">About Me</p>
        <div className="flex flex-col">
          <p className="flex items-start gap-2">
            <span className="pt-0.5">
              <DotIcon weight="duotone" size={16} />
            </span>
            <span>
              Software engineer with a product oriented mindset who knows how to
              ship fast.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="pt-0.5">
              <DotIcon weight="duotone" size={16} />
            </span>
            <span>
              I mostly use Typescript, React, Next.js, Bun and PostgreSQL to
              build full stack web apps, but my skills are not limited to just
              these technologies. I also have experience with other technologies
              too.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="pt-0.5">
              <DotIcon weight="duotone" size={16} />
            </span>
            <span>
              I'm not a designer, but I have a keen eye to make things that look
              visually appealing.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
