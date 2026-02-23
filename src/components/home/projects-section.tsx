import { CursorClickIcon, CursorIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { PROJECTS } from "@/config/content/projects"

import ProjectCard from "../shared/project-card"
import { Button } from "../ui/button"

export default function ProjectSections() {
  return (
    <div className="flex flex-col items-center gap-2 border-y-2 border-dashed p-2">
      <div className="grid gap-2 sm:grid-cols-2">
        {PROJECTS.slice(0, 2).map((item, i) => {
          return <ProjectCard project={item} key={i} />
        })}
      </div>
      <Link href={"/projects"}>
        <Button className="group border border-dashed" variant={"outline"}>
          <span className="relative inline-flex size-5">
            <CursorIcon
              weight="duotone"
              className="absolute inset-0 size-5 scale-100 opacity-100 transition-all duration-200 group-hover:scale-75 group-hover:opacity-0"
            />
            <CursorClickIcon
              weight="duotone"
              className="absolute inset-0 size-5 scale-75 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
          More Projects
        </Button>
      </Link>
    </div>
  )
}
