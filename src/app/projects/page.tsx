import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Status, StatusIndicator } from "@/components/ui/status-indicator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PROJECTS } from "@/config/content/projects";
import { CursorClickIcon, CursorIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="p-2 flex flex-col gap-2 items-center">
      <div className="grid sm:grid-cols-2 gap-2">
        {PROJECTS.map((item, i) => {
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
                          className={"rounded"}
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
    </div>
  );
}
