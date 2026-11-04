import {publicSearchIndex} from "@/lib/site-search/catalog.mjs";
import {MAX_QUERY_LENGTH, searchPublicIndex} from "@/lib/site-search/engine.mjs";
export function GET(request) {
  const query = new URL(request.url).searchParams.get("q") || "";
  if (query.length > MAX_QUERY_LENGTH) return Response.json({error:"Please use a shorter search."},{status:400});
  return Response.json({results:searchPublicIndex(publicSearchIndex,query)},{
    headers:{"Cache-Control":"no-store","X-Robots-Tag":"noindex, nofollow"},
  });
}
