import { FlipSentences } from "@/components/flip-sentences";
import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "@/components/gh-contribution-graph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EXPERIENCE } from "@/config/content/experience";
import { SOCIALS } from "@/config/content/socials";
import { USER } from "@/config/content/user";
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
      {/* ABOUT ME */}
      <div className="w-full border-y-2 border-dashed p-2">
        <div className="flex flex-col *:flex *:items-start *:gap-2">
          {USER.aboutMe.map((item, i) => (
            <p key={i}>
              <span>
                <DotIcon weight="duotone" size={20} />
              </span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
      {/* SOCIALS */}
      <div className="social-links w-full border-b-2 border-dashed gap-2 p-2  grid grid-cols-2 md:grid-cols-4 *:*:rounded-none *:*:border-dashed *:*:border *:*:shadow-none *:*:w-full">
        {SOCIALS.map((item, i) => {
          const Icon = item.icon;
          const hoverFill =
            "hoverColor" in item && typeof item.hoverColor === "string"
              ? item.hoverColor
              : "#78716c";
          return (
            <Link
              target="_blank"
              href={item.url}
              key={i}
              className="group"
              style={
                { ["--icon-hover-fill"]: hoverFill } as React.CSSProperties
              }
            >
              <Button variant={"outline"}>
                <Icon weight="duotone" className="size-5!" />
                {item.title}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* EXPERIENCE */}
      <div className="w-full border-b-2 border-dashed p-2">
        {EXPERIENCE.map((item, i) => {
          return (
            <Accordion
              multiple
              key={i}
              defaultValue={[0, 1]}
              className={"border border-dashed"}
            >
              <AccordionItem value={i}>
                <AccordionTrigger className={"py-0 border-b"}>
                  <div className="flex flex-col m-2">
                    <p>{item.companyName}</p>
                    <p className="text-xs">
                      {item.role} ({item.position})
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col p-2">
                    <p className="text-muted-foreground">{item.description}</p>
                    <p>{item.toolsNTech.flat().join(", ")}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
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
