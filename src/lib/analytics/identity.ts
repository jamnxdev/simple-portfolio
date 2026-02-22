import { createHash } from "node:crypto";

const visitorHashSalt = process.env.VISITOR_HASH_SALT;

if (!visitorHashSalt) {
  throw new Error("Missing VISITOR_HASH_SALT environment variable.");
}

function hashValue(value: string): string {
  return createHash("sha256")
    .update(`${visitorHashSalt}|${value}`)
    .digest("hex");
}

function getClientIp(requestHeaders: Headers): string {
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) {
      return firstIp;
    }
  }

  const realIp = requestHeaders.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  const cloudflareIp = requestHeaders.get("cf-connecting-ip")?.trim();
  if (cloudflareIp) {
    return cloudflareIp;
  }

  return "unknown";
}

export function getVisitorId(requestHeaders: Headers): string {
  const clientIp = getClientIp(requestHeaders);
  const ipHash = hashValue(clientIp);
  return `visitor:${ipHash}`;
}

export function isBotOrPrefetch(requestHeaders: Headers): boolean {
  const userAgent = requestHeaders.get("user-agent")?.toLowerCase() ?? "";
  if (userAgent.includes("bot") || userAgent.includes("crawler") || userAgent.includes("spider")) {
    return true;
  }

  const purpose = requestHeaders.get("purpose")?.toLowerCase();
  if (purpose === "prefetch") {
    return true;
  }

  return requestHeaders.has("next-router-prefetch");
}
