import { EyeClosedIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { SOCIALS } from "@/config/content/socials"
import { trackSiteVisitorAndGetCount } from "@/lib/analytics/track-site-visitor"

import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default async function Footer() {
  const visitorCount = await trackSiteVisitorAndGetCount()

  return (
    <footer className="flex gap-2 p-2">
      <div>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant={"outline"}
                className={"group border border-dashed"}
              >
                <span className="relative inline-flex size-5">
                  <EyeClosedIcon
                    weight="duotone"
                    className="absolute inset-0 size-5 opacity-100 transition-all duration-200 group-hover:opacity-0"
                  />
                  <EyeIcon
                    weight="duotone"
                    className="absolute inset-0 size-5 opacity-0 transition-all duration-200 group-hover:opacity-100"
                  />
                </span>
                {visitorCount.toLocaleString()}
              </Button>
            }
          />
          <TooltipContent>Visitors</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex flex-1 items-center justify-center gap-1 border border-dashed p-1 text-muted-foreground">
        <p className="text-balance">
          Built by{" "}
          <Link
            className="text-foreground underline underline-offset-4"
            href={SOCIALS.find((i) => i.title.toLocaleLowerCase() === "x")!.url}
          >
            @jamnxdev
          </Link>
        </p>
      </div>
    </footer>
  )
}
