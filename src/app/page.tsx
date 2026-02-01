import { FlipSentences } from "@/components/flip-sentences";
import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "@/components/gh-contribution-graph";
import { Button } from "@/components/ui/button";
import { getGitHubContributions } from "@/lib/github-contribution";
import { GrainGradient } from "@paper-design/shaders-react";
import {
  DotIcon,
  GearIcon,
  MinusIcon,
  PlusIcon,
  SquareIcon,
  SquareLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Suspense } from "react";

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
  const contributions = getGitHubContributions();
  return (
    <>
      {/* HERO */}
      <div className="relative w-full aspect-2/1 sm:aspect-3/1 p-2 border-t-2 border-dashed">
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
      {/* SOCIALS */}
      <div className="w-full border-b-2 border-dashed gap-2 p-2  grid grid-cols-2 md:grid-cols-4 *:*:rounded-none *:*:border-dashed *:*:border-1 *:*:shadow-none *:*:w-full">
        <Link target="_blank" href={"https://github.com/jamnxdev"}>
          <Button variant={"outline"}>Github</Button>
        </Link>
        <Link target="_blank" href={"https://x.com/jamnxdev"}>
          <Button variant={"outline"}>X</Button>
        </Link>
        <Link target="_blank" href={"https://linkedin.com/jamnxdev"}>
          <Button variant={"outline"}>LinkedIn</Button>
        </Link>

        <Link target="_blank" href={"https://youtube.com/@jamnxdev"}>
          <Button variant={"outline"}>YouTube</Button>
        </Link>
        <Link target="_blank" href={"https://medium.com/jamnxdev"}>
          <Button variant={"outline"}>Medium</Button>
        </Link>
        <Link target="_blank" href={"https://discord.com/invite/YY9TTn7x"}>
          <Button variant={"outline"}>Discord</Button>
        </Link>
        <Link target="_blank" href={"https://instagram.com/jamnxdev"}>
          <Button variant={"outline"}>Instagram</Button>
        </Link>
        <Link target="_blank" href={"https://peerlist.io/jamnxdev"}>
          <Button variant={"outline"}>Peerlist</Button>
        </Link>
      </div>

      {/* GITHUB CONTRIBUTION */}
      <div className="w-full border-dashed p-1">
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph contributions={contributions} />
        </Suspense>
      </div>
    </>
  );
}
