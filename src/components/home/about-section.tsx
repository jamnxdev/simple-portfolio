import { DotIcon } from "@phosphor-icons/react/dist/ssr"

import { USER } from "@/config/content/user"

export default function AboutSection() {
  return (
    <div className="w-full border-y-2 border-dashed p-2">
      <div className="flex flex-col *:flex *:items-start *:gap-2">
        {USER.aboutMe.map((item, i) => (
          <p key={i}>
            <span>
              <DotIcon weight="duotone" size={20} />
            </span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
