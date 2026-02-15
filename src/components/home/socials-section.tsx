import Link from "next/link";
import { Button } from "../ui/button";
import { SOCIALS } from "@/config/content/socials";

export default function SocialSections() {
  return (
    <div className="social-links w-full border-b-2 border-dashed gap-2 p-2  grid grid-cols-2 md:grid-cols-4 *:*:rounded-none *:*:border-dashed *:*:border *:*:shadow-none *:*:w-full">
      {SOCIALS.map((item, i) => {
        const Icon = item.icon;
        const hoverFill =
          "hoverColor" in item && typeof item.hoverColor === "string"
            ? item.hoverColor
            : "#78716c";
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
                className="size-5! duration-200 transition-all group-hover:scale-112 group-hover:rotate-15"
              />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
