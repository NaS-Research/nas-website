const siteUrl = "https://nasresearch.bio";
const defaultImage = {
  url: `${siteUrl}/nas-logo-share-v1.png`,
  width: 1200,
  height: 630,
  alt: "NaS Research — gold NaS logo on black",
};

// Next.js replaces nested metadata objects instead of merging their fields.
// Keep each page's canonical URL and social preview complete at the same boundary.
export function completePageMetadata(metadata) {
  const { title, description, alternates, openGraph = {}, twitter = {} } = metadata;
  const url = new URL(alternates.canonical, siteUrl).href;
  const images = openGraph.images?.length ? openGraph.images : [{ ...defaultImage }];
  return {
    ...metadata,
    alternates: { ...alternates, canonical: url },
    openGraph: {
      title,
      description,
      siteName: "NaS Research",
      locale: "en_US",
      type: "website",
      ...openGraph,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraph.title || title,
      description: openGraph.description || description,
      ...twitter,
      images: twitter.images?.length
        ? twitter.images
        : images.map((image) => typeof image === "string" ? image : { url: image.url, alt: image.alt }),
    },
  };
}
