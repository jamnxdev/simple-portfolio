import Link from "next/link"

import BlogListItem from "@/components/shared/blog-list-item"
import { Button } from "@/components/ui/button"
import { USER } from "@/config/content/user"
import { getMediumPosts } from "@/lib/medium"

export default async function BlogsPage() {
  const posts = await getMediumPosts()

  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <div className="flex w-full max-w-4xl flex-col gap-2">
        {posts.map((post) => (
          <BlogListItem post={post} key={post.link} />
        ))}
      </div>
      {posts.length > 0 && (
        <Link
          href={`https://medium.com/@${USER.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="rounded border-dashed outline-1">
            View all on Medium
          </Button>
        </Link>
      )}
      {posts.length === 0 && (
        <p className="text-center text-muted-foreground">
          No blog posts found. Check back later!
        </p>
      )}
    </div>
  )
}
