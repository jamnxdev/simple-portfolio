import ProjectCard from "@/components/shared/project-card"
import { PROJECTS } from "@/config/content/projects"

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 border-b-2 border-dashed p-2">
      <div className="grid gap-2 sm:grid-cols-2">
        {PROJECTS.map((item, i) => {
          return <ProjectCard project={item} key={i} />
        })}
      </div>
    </div>
  )
}
