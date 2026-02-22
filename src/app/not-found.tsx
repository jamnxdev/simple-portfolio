"use client"

import { ArrowLeftIcon, SmileyXEyesIcon } from "@phosphor-icons/react/dist/ssr"
import { motion } from "motion/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

// const gradientConfig = {
//   width: 1280,
//   height: 720,
//   colors: [
//     "#c6750c",
//     "#beae60",
//     "#d7cbc6",
//     "#2b00ff",
//     "#1a0000",
//     "#3399cc",
//     "#3333cc",
//   ],
//   colorBack: "#04041b",
//   softness: 0.25,
//   intensity: 0.25,
//   noise: 0.25,
//   shape: "checks" as const,
//   speed: 0.75,
//   rotation: 45,
//   offsetX: -0.15,
//   fit: "contain" as const,
// }

export default function NotFound() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden border-b-2 border-dashed">
      {/* <div className="absolute inset-0 -z-10">
        <GodRays
          {...gradientConfig}
          className="h-full w-full object-cover opacity-60 dark:opacity-80"
        />
      </div> */}

      <div className="relative flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="flex items-center font-mono text-8xl font-bold tracking-tighter drop-shadow-lg sm:text-9xl">
            4
            <SmileyXEyesIcon weight="duotone" className="text-7xl" />4
          </span>
          <span className="font-mono text-sm tracking-[0.3em] uppercase">
            Not found
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-sm text-sm"
        >
          The page you&apos;re looking for doesn&apos;t exist or has wandered
          off into the void.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="group gap-2 border-dashed backdrop-blur-sm"
            >
              <ArrowLeftIcon
                weight="duotone"
                className="size-4 transition-transform group-hover:-translate-x-0.5"
              />
              Back to home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
