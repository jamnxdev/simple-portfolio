import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { USER } from "@/config/content/user"

import { Button } from "../ui/button"

export default function CallSection() {
  return (
    <div className="flex w-full justify-center border-y-2 border-dashed p-4">
      <div className="flex w-full max-w-4xl flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted-foreground">
          Want to talk through an idea or project?
        </p>
        <Link href={USER.callLink} target="_blank" rel="noreferrer">
          <Button
            className="rounded-none border border-dashed"
            variant="outline"
          >
            <CalendarDotsIcon weight="duotone" className="size-5!" />
            Let&apos;s hope on a quick Call
          </Button>
        </Link>
      </div>
    </div>
  )
}
