const production = process.env.NODE_ENV === "production";
// Inline scripts support static Next.js hydration and the atlas import map.
// This baseline restricts destinations; nonce-based script enforcement remains separate work.
const csp = [
  "default-src 'self'", "base-uri 'self'", "object-src 'none'",
  "frame-ancestors 'self'", "form-action 'self'",
  `script-src 'self' 'unsafe-inline' ${production ? "'wasm-unsafe-eval'" : "'unsafe-eval'"} https://static.sketchfab.com`,
  "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:",
  "font-src 'self' data:", "media-src 'self' blob:",
  `connect-src 'self' blob:${production ? "" : " ws: wss:"}`,
  "frame-src 'self' https://sketchfab.com", "worker-src 'self' blob:",
  ...(production ? ["upgrade-insecure-requests"] : []),
].join("; ");
module.exports = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/research/programs", destination: "/products", permanent: true },
      { source: "/contact", destination: "/support", permanent: true },
      { source: "/nicole", destination: "/research", permanent: false },
    ];
  },
  images: { remotePatterns: [] },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
      ...(production ? [{ key: "Strict-Transport-Security", value: "max-age=31536000" }] : []),
    ] }];
  },
};
