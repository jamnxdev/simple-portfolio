import "server-only"

import { unstable_cache } from "next/cache"
import Parser from "rss-parser"

import { USER } from "@/config/content/user"

export type MediumPost = {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
  categories?: string[]
}

const MEDIUM_RSS_URL = `https://medium.com/feed/@${USER.username}`
const MEDIUM_REVALIDATE_SECONDS = 60 * 30
const MEDIUM_REQUEST_TIMEOUT_MS = 10_000
let lastSuccessfulMediumPosts: MediumPost[] = []

const fetchMediumPosts = unstable_cache(
  async (): Promise<MediumPost[]> => {
    const parser = new Parser()
    const response = await fetch(MEDIUM_RSS_URL, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        "User-Agent": "jamn.dev/1.0 (+https://jamn.dev)",
      },
      next: { revalidate: MEDIUM_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(MEDIUM_REQUEST_TIMEOUT_MS),
    })

    if (!response.ok) {
      const retryAfter = response.headers.get("retry-after")
      const detail = retryAfter
        ? `${response.status} (retry-after: ${retryAfter})`
        : `${response.status}`

      throw new Error(`Medium RSS request failed with ${detail}`)
    }

    const xml = await response.text()
    const feed = await parser.parseString(xml)

    const posts =
      feed.items?.map((item) => ({
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        contentSnippet: item.contentSnippet ?? "",
        categories: item.categories as string[] | undefined,
      })) ?? []

    lastSuccessfulMediumPosts = posts

    return posts
  },
  ["medium-posts"],
  { revalidate: MEDIUM_REVALIDATE_SECONDS }
)

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    return await fetchMediumPosts()
  } catch (error) {
    console.error("Failed to fetch Medium posts", error)
    return lastSuccessfulMediumPosts
  }
}
