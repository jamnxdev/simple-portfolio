import Link from "next/link"

import { SOCIALS } from "@/config/content/socials"

import { Button } from "../ui/button"

export default function SocialSections() {
  return (
    <div className="social-links grid w-full grid-cols-2 gap-2 border-b-2 border-dashed p-2 *:*:w-full *:*:rounded-none *:*:border *:*:border-dashed md:grid-cols-4">
      {SOCIALS.map((item, i) => {
        const Icon = item.icon
        const hoverFill =
          "hoverColor" in item && typeof item.hoverColor === "string"
            ? item.hoverColor
            : "#78716c"
        return (
          <Link
            target="_blank"
            href={item.url}
            key={i}
            className="group"
            style={{ ["--icon-hover-fill"]: hoverFill } as React.CSSProperties}
          >
            <Button variant={"outline"}>
              <Icon
                weight="duotone"
                className="size-5! transition-all duration-200 group-hover:scale-112 group-hover:rotate-15"
              />
              {item.title}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
