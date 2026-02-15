import Image from "next/image";

import { EXPERIENCE } from "@/config/content/experience";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";

export default function ExperienceSection() {
  return (
    <div className="w-full border-b-2 border-dashed p-2">
      <Accordion
        multiple
        defaultValue={[0, 1]}
        className={"border border-dashed"}
      >
        {EXPERIENCE.map((item, i) => {
          return (
            <AccordionItem value={i} key={i}>
              <AccordionTrigger className={"py-0 border-b"}>
                <div className="flex m-2 gap-2">
                  <Image
                    height={48}
                    width={48}
                    alt={item.logo}
                    src={"/logo/" + item.logo}
                    className="ring-offset rounded ring-2 p-0.25 ring-border shadow"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg blur-sm">{item.companyName}</p>
                    <p className="text-xs">
                      {item.role} ({item.position})
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col p-2">
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.toolsNTech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant={"secondary"}
                        className="rounded"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
