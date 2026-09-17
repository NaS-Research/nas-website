// Validate before contacting upstream services; never log search strings or IPs.
export function validateDrugRequest(request, key, maxLength) {
  const url = new URL(request.url);
  const values = url.searchParams.getAll(key);
  const value = (values[0] || "").trim();
  if (url.search.length > 512 || values.length > 1 || value.length > maxLength || /[\x00-\x1f\x7f]/.test(value)) {
    return { error: "Invalid search request", status: 400 };
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") return { error: "Cross-site requests are not supported", status: 403 };
  return { value };
}
