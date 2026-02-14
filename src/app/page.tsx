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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/ui/status-indicator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EXPERIENCE } from "@/config/content/experience";
import { PROJECTS } from "@/config/content/projects";
import { SOCIALS } from "@/config/content/socials";
import { USER } from "@/config/content/user";
import { getGitHubContributions } from "@/lib/github-contribution";
import { GrainGradient } from "@paper-design/shaders-react";
import {
  CursorClickIcon,
  CursorIcon,
  DotIcon,
  EyeIcon,
  FolderIcon,
  FolderOpenIcon,
  GearIcon,
  MinusIcon,
  PlusIcon,
  SquareIcon,
  SquareLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
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
                <Icon
                  weight="duotone"
                  className="size-5! duration-200 transition-all group-hover:scale-112 group-hover:rotate-15"
                />
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
                  <div className="flex m-2 gap-2">
                    <Image
                      height={48}
                      width={48}
                      alt={item.logo}
                      src={"/logo/" + item.logo}
                      className="ring-offset rounded ring-2 p-0.25 ring-border shadow"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg blur-sm">{item.companyName}</p>
                      <p className="text-xs">
                        {item.role} ({item.position})
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col p-2">
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.toolsNTech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant={"secondary"}
                          className="rounded"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>

      {/* PROJECTS */}
      <div className="border-b-2 border-dashed p-2 flex flex-col gap-2 items-center">
        <div className="grid sm:grid-cols-2 gap-2">
          {PROJECTS.slice(0, 2).map((item, i) => {
            const status =
              item.status.charAt(0).toUpperCase() + item.status.slice(1);
            return (
              <Card
                key={i}
                className="relative! mx-auto w-full pt-0 rounded p-2 gap-2 ring-0 shadow-none border-dashed border"
              >
                <HeroVideoDialog
                  className="block dark:hidden ring-offset rounded ring-2 p-0.25 ring-border aspect-video"
                  animationStyle="from-center"
                  videoSrc={item.videoSRC}
                  thumbnailSrc={item.imgSRC}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block ring-offset rounded ring-2 p-0.25 ring-border aspect-video"
                  animationStyle="from-center"
                  videoSrc={item.videoSRC}
                  thumbnailSrc={item.imgSRC}
                  thumbnailAlt="Hero Video"
                />

                {/* <div className="absolute inset-0 z-30 aspect-video" /> */}
                <CardHeader className="p-0">
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 ring-2 ring-offset rounded p-0.25 ring-border after:border-none">
                          <AvatarImage
                            className={"rounded "}
                            src={`${item.liveURL}/favicon.ico`}
                          />
                        </Avatar>
                        {item.title}
                      </div>

                      <Tooltip>
                        <TooltipTrigger className={"cursor-pointer"}>
                          <Status status={item.status}>
                            <StatusIndicator />
                          </Status>
                        </TooltipTrigger>
                        <TooltipContent>{status}</TooltipContent>
                      </Tooltip>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p>{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.toolsNTech &&
                      item.toolsNTech.length > 0 &&
                      item.toolsNTech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant={"secondary"}
                          className="rounded"
                        >
                          {tech}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Link href={"/projects"}>
          <Button
            className="outline-dashed outline-1 border-0 rounded group"
            variant={"outline"}
          >
            <span className="relative inline-flex size-5">
              <CursorIcon
                weight="duotone"
                className="absolute inset-0 size-5 opacity-100 scale-100 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75"
              />
              <CursorClickIcon
                weight="duotone"
                className="absolute inset-0 size-5 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
              />
            </span>
            More Projects
          </Button>
        </Link>
      </div>

      {/* GITHUB CONTRIBUTION */}
      <div className="border-dashed m-2 border">
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph contributions={contributions} />
        </Suspense>
      </div>
    </>
  );
}
