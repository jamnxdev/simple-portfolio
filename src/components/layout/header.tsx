"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { NAV_ITEMS } from "@/config/site";
import { ThemeToggleButton, useThemeToggle } from "../ui/skiper26";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const { setIsDark, isDark, toggleTheme } = useThemeToggle({
    start: "top-down",
    variant: "rectangle",
  });

  return (
    <header className="fixed block h-12 top-0 z-10 left-1/2 -translate-x-1/2 max-w-3xl backdrop bg-background/50 backdrop-blur-sm w-full">
      <nav className="flex items-center justify-between h-full mx-2 md:mx-auto px-2 border-x-2 border-b-2 border-dashed">
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
            onClick={() => {
              toggleTheme();
              setIsDark(!isDark);
            }}
            className="cursor-pointer shadow-none"
            variant={"outline"}
          >
            {isDark ? (
              <SunIcon weight="duotone" />
            ) : (
              <MoonIcon weight="duotone" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
