export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nasresearch.bio/sitemap.xml",
    host: "https://nasresearch.bio",
  };
}
