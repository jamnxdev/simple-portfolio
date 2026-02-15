import type { Project } from "@/config/content/projects";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HeroVideoDialog } from "../ui/hero-video-dialog";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Status, StatusIndicator } from "../ui/status-indicator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { CursorClickIcon, CursorIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProjectCard({ project }: { project: Project }) {
  const status =
    project.status.charAt(0).toUpperCase() + project.status.slice(1);
  return (
    <Card className="relative! mx-auto w-full pt-0 rounded p-2 gap-2 ring-0 shadow-none border-dashed border">
      <HeroVideoDialog
        className="ring-offset rounded ring-2 p-0.25 ring-border aspect-video"
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
              <Avatar className="h-6 w-6 ring-2 ring-offset rounded p-0.25 ring-border after:border-none">
                <AvatarImage
                  className={"rounded "}
                  src={`${project.liveURL}/favicon.ico`}
                />
              </Avatar>
              {project.title}
            </div>

            <Tooltip>
              <TooltipTrigger className={"cursor-pointer"}>
                <Status status={project.status}>
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
        <div className="flex flex-wrap gap-2 mt-2">
          {project.toolsNTech &&
            project.toolsNTech.length > 0 &&
            project.toolsNTech.map((tech, idx) => (
              <Badge key={idx} variant={"secondary"} className="rounded">
                {tech}
              </Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
