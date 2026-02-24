import { Ratelimit } from "@upstash/ratelimit"

import { redis } from "@/lib/analytics/redis"

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "60 s"),
  prefix: "ratelimit:analytics",
})

const denyCache = new Map<string, number>()
const DENY_TTL_MS = 60_000 // 60 seconds — matches the rate limit window

export async function isRateLimited(visitorId: string): Promise<boolean> {
  const cachedUntil = denyCache.get(visitorId)
  if (cachedUntil !== undefined) {
    if (Date.now() < cachedUntil) {
      return true
    }
    denyCache.delete(visitorId)
  }

  const result = await ratelimit.limit(visitorId)

  if (!result.success) {
    denyCache.set(visitorId, Date.now() + DENY_TTL_MS)
    return true
  }

  return false
}
