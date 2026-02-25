import { GithubLogoIcon, LinkSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import type { Project } from "@/config/content/projects"

import { Avatar, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { HeroVideoDialog } from "../ui/hero-video-dialog"
import { Status, StatusIndicator } from "../ui/status-indicator"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function ProjectCard({ project }: { project: Project }) {
  const status =
    project.status.charAt(0).toUpperCase() + project.status.slice(1)
  return (
    <Card className="relative! mx-auto w-full gap-2 border border-dashed p-2 ring-0">
      <HeroVideoDialog
        className="ring-offset aspect-video rounded p-0.25 ring-2 ring-border"
        animationStyle="from-center"
        videoSrc={project.videoSRC}
        thumbnailSrc={project.imgSRC}
        thumbnailAlt="Hero Video"
      />
      {/* <div className="absolute inset-0 z-30 aspect-video" /> */}
      <CardHeader className="p-0">
        <CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="ring-offset h-6 w-6 rounded p-0.25 ring-2 ring-border after:border-none">
                <AvatarImage
                  className={"rounded"}
                  src={`${project.liveURL}/favicon.ico`}
                />
              </Avatar>
              {project.title}
              <div>
                {(project.liveURL || project.backupLiveURL) && (
                  <Link
                    href={project.liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"ghost"}>
                      <LinkSimpleIcon weight="duotone" className="size-5" />
                    </Button>
                  </Link>
                )}
                {project.githubURL && (
                  <Link
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"ghost"}>
                      <GithubLogoIcon weight="duotone" className="size-5" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <Tooltip>
              <TooltipTrigger className={"cursor-pointer"}>
                <Status status={project.status} className="rounded">
                  <StatusIndicator />
                </Status>
              </TooltipTrigger>
              <TooltipContent>{status}</TooltipContent>
            </Tooltip>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p>{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.toolsNTech &&
            project.toolsNTech.length > 0 &&
            project.toolsNTech.map((tech, idx) => (
              <Badge key={idx} variant={"secondary"}>
                {tech}
              </Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
