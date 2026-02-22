import { unstable_noStore as noStore } from "next/cache";
import { headers } from "next/headers";

import { getVisitorId, isBotOrPrefetch } from "@/lib/analytics/identity";
import { redis } from "@/lib/analytics/redis";

const SITE_COUNTER_KEY = "count:site:unique_visitors";

export async function trackSiteVisitorAndGetCount(): Promise<number> {
  noStore();

  const requestHeaders = await headers();

  if (!isBotOrPrefetch(requestHeaders)) {
    const visitorId = getVisitorId(requestHeaders);
    const seenKey = `seen:site:${visitorId}`;

    const setResult = await redis.set(seenKey, "1", { nx: true });
    if (setResult === "OK") {
      await redis.incr(SITE_COUNTER_KEY);
    }
  }

  const count = await redis.get<number>(SITE_COUNTER_KEY);
  return typeof count === "number" ? count : 0;
}
