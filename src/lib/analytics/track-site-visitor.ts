import { unstable_noStore as noStore } from "next/cache"
import { headers } from "next/headers"

import { getVisitorId, isBotOrPrefetch } from "@/lib/analytics/identity"
import { isRateLimited } from "@/lib/analytics/rate-limit"
import { redis } from "@/lib/analytics/redis"

const SITE_COUNTER_KEY = "count:site:unique_visitors"
const PAGEVIEW_PREFIX = "count:pageview"

function getPathname(requestHeaders: Headers): string {
  const invokePath = requestHeaders.get("x-invoke-path")
  if (invokePath) return invokePath

  const nextUrl = requestHeaders.get("x-next-url") || requestHeaders.get("next-url")
  if (nextUrl) {
    try {
      return new URL(nextUrl, "http://localhost").pathname
    } catch {
      return nextUrl
    }
  }

  const referer = requestHeaders.get("referer")
  if (referer) {
    try {
      return new URL(referer).pathname
    } catch {
      // ignore
    }
  }

  return "/"
}

export async function trackSiteVisitorAndGetCount(): Promise<number> {
  noStore()

  const requestHeaders = await headers()

  if (!isBotOrPrefetch(requestHeaders)) {
    const visitorId = getVisitorId(requestHeaders)

    const limited = await isRateLimited(visitorId)

    if (!limited) {
      const seenKey = `seen:site:${visitorId}`
      const pathname = getPathname(requestHeaders)
      const pageviewKey = `${PAGEVIEW_PREFIX}:${pathname}`

      const pipeline = redis.pipeline()
      pipeline.set(seenKey, "1", { nx: true })
      pipeline.incr(pageviewKey)

      const results = await pipeline.exec()
      const setResult = results[0] as string | null

      if (setResult === "OK") {
        await redis.incr(SITE_COUNTER_KEY)
      }
    } else {
      console.warn(`Rate limit exceeded for visitor ${visitorId}. Skipping analytics.`)
    }
  }

  const count = await redis.get<number>(SITE_COUNTER_KEY)
  return typeof count === "number" ? count : 0
}
