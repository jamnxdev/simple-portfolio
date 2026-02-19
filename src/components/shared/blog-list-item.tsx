import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import { format } from "date-fns"

import type { MediumPost } from "@/lib/medium"

import { Badge } from "../ui/badge"

export default function BlogListItem({ post }: { post: MediumPost }) {
  const excerpt =
    post.contentSnippet.length > 120
      ? `${post.contentSnippet.slice(0, 120).trim()}...`
      : post.contentSnippet

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1 rounded border border-dashed p-2 transition-colors hover:bg-muted/50 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-medium transition-colors group-hover:text-primary group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
          {excerpt}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <time
            dateTime={post.pubDate}
            className="text-xs text-muted-foreground"
          >
            {format(new Date(post.pubDate), "MMM d, yyyy")}
          </time>
          {post.categories && post.categories.length > 0 && (
            <>
              <span className="text-xs text-muted-foreground">·</span>
              <div className="flex flex-wrap gap-1">
                {post.categories.slice(0, 3).map((cat, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="rounded text-xs"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  )
}
