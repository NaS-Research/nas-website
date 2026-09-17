import { validateDrugRequest } from "@/lib/drugRequest.mjs";
import { NextResponse } from "next/server";

export async function GET(request) {
  const parsed = validateDrugRequest(request, "q", 80);
  if (parsed.error) return NextResponse.json({ error: parsed.error }, { status: parsed.status, headers: { "Cache-Control": "no-store" } });
  const query = parsed.value;
  if (!query || query.length < 2) return NextResponse.json({ results: [] });

  const endpoint = new URL("https://rxnav.nlm.nih.gov/REST/approximateTerm.json");
  endpoint.searchParams.set("term", query);
  endpoint.searchParams.set("maxEntries", "16");
  endpoint.searchParams.set("option", "1");

  try {
    const response = await fetch(endpoint, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(6500) });
    if (!response.ok) throw new Error("RxNorm request failed");
    const payload = await response.json();
    const candidates = payload.approximateGroup?.candidate || [];
    const seen = new Set();
    const results = candidates
      .filter((item) => item.source === "RXNORM" && item.name && !seen.has(item.rxcui) && seen.add(item.rxcui))
      .slice(0, 12)
      .map((item) => ({ rxcui: item.rxcui, name: item.name, score: Number(item.score) }));

    return NextResponse.json({ results });
  } catch {
    console.warn("drug_search_upstream_unavailable");
    return NextResponse.json({ results: [], unavailable: true }, { status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "30" } });
  }
}
