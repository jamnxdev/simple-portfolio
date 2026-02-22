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

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const parser = new Parser()
    const feed = await parser.parseURL(MEDIUM_RSS_URL)

    return (
      feed.items?.map((item) => ({
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        contentSnippet: item.contentSnippet ?? "",
        categories: item.categories as string[] | undefined,
      })) ?? []
    )
  } catch {
    return []
  }
}
