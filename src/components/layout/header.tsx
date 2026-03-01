"use client"

import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import Link from "next/link"

import { NAV_ITEMS } from "@/config/site"

import { Button } from "../ui/button"
import { useThemeToggle } from "../ui/skiper26"

export default function Header() {
  const { isDark, toggleTheme } = useThemeToggle({
    start: "top-down",
    variant: "rectangle",
  })

  return (
    <header className="backdrop sticky top-0 z-10 h-12 w-full max-w-3xl bg-background md:mx-auto">
      <nav className="mx-2 flex h-full items-center justify-between border-x-2 border-b-2 border-dashed px-2 md:mx-auto">
        <div>
          <Link href={"/"}>/home</Link>
        </div>
        <div className="flex gap-2">
          {NAV_ITEMS.map((item, key) => (
            <Link href={item.href} key={key}>
              <Button variant={"link"} className={"px-0 text-base"}>
                {item.title}
              </Button>
            </Link>
          ))}
          <Button
            type="button"
            onClick={toggleTheme}
            className="group cursor-pointer"
            variant={"ghost"}
          >
            {isDark ? (
              <SunIcon
                weight="duotone"
                className="duration-300 group-hover:rotate-45 group-hover:transition-all"
              />
            ) : (
              <MoonIcon
                weight="duotone"
                className="duration-250 group-hover:rotate-15 group-hover:transition-all"
              />
            )}
          </Button>
        </div>
      </nav>
    </header>
  )
}
