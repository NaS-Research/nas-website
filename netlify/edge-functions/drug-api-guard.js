// Platform-enforced rate limiting, shared across instances (not an in-memory counter).
export default async function guard(request, context) {
  if (!["GET", "HEAD"].includes(request.method)) {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD", "Cache-Control": "no-store" } });
  }
  if (new URL(request.url).search.length > 512) return new Response(null, { status: 414 });
  return context.next();
}
export const config = {
  path: "/api/drugs/*",
  rateLimit: { windowLimit: 60, windowSize: 60, aggregateBy: ["ip", "domain"], action: "rate_limit" },
};
