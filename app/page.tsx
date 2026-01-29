import { FlipSentences } from "@/components/flip-sentences";
import { GrainGradient } from "@paper-design/shaders-react";

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
  speed: 0.25,
  rotation: 30,
  offsetX: -0.38,
  fit: "cover" as const,
};

export default function Page() {
  return (
    <main className="flex h-full flex-col items-center border-2 border-dashed max-w-4xl mx-auto">
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
    </main>
  );
}
