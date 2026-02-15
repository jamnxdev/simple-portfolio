import { PROJECTS } from "@/config/content/projects";
import ProjectCard from "../shared/project-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { CursorClickIcon, CursorIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProjectSections() {
  return (
    <div className="border-b-2 border-dashed p-2 flex flex-col gap-2 items-center">
      <div className="grid sm:grid-cols-2 gap-2">
        {PROJECTS.slice(0, 2).map((item, i) => {
          return <ProjectCard project={item} key={i} />;
        })}
      </div>
      <Link href={"/projects"}>
        <Button
          className="outline-dashed outline-1 border-0 rounded group"
          variant={"outline"}
        >
          <span className="relative inline-flex size-5">
            <CursorIcon
              weight="duotone"
              className="absolute inset-0 size-5 opacity-100 scale-100 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75"
            />
            <CursorClickIcon
              weight="duotone"
              className="absolute inset-0 size-5 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
            />
          </span>
          More Projects
        </Button>
      </Link>
    </div>
  );
}
