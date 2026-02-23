import { ArrowRightIcon, ArticleIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { getMediumPosts } from "@/lib/medium"

import BlogListItem from "../shared/blog-list-item"
import { Button } from "../ui/button"

export default async function BlogsSection() {
  const posts = await getMediumPosts()
  const recentPosts = posts.slice(0, 4)

  if (posts.length === 0) return null

  return (
    <div className="flex flex-col items-center gap-2 border-y-2 border-dashed p-2">
      <div className="flex w-full max-w-4xl flex-col gap-2">
        {recentPosts.map((post) => (
          <BlogListItem post={post} key={post.link} />
        ))}
      </div>
      <Link href="/blogs">
        <Button className="group border border-dashed" variant="outline">
          <span className="relative inline-flex size-5">
            <ArticleIcon
              weight="duotone"
              className="absolute inset-0 size-5 scale-100 opacity-100 transition-all duration-200 group-hover:scale-75 group-hover:opacity-0"
            />
            <ArrowRightIcon
              weight="duotone"
              className="absolute inset-0 size-5 scale-75 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
          More Blogs
        </Button>
      </Link>
    </div>
  )
}
