import Image from "next/image"

import { USER } from "@/config/content/user"

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function ToolsTechSection() {
  return (
    <div className="w-full border-b-2 border-dashed p-2">
      <div className="flex flex-wrap gap-2">
        {USER.toolNTech.map((tech, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger>
              <div
                className="flex items-center gap-2 rounded border border-dashed bg-muted/50 px-2 py-1 transition-colors hover:bg-muted"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  unoptimized
                />
                <span className="text-sm">{tech.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>{tech.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
