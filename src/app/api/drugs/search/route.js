import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("q")?.trim().slice(0, 80);
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
    return NextResponse.json({ results: [], unavailable: true }, { status: 200 });
  }
}
