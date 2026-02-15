import ProjectCard from "@/components/shared/project-card";
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
          return <ProjectCard project={item} key={i} />;
        })}
      </div>
    </div>
  );
}
