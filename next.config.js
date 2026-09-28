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
      { source: "/research/papers/nas-bbb-prediction-audit-v1.pdf", destination: "/research/papers/nas-bbb-prediction-audit-v1.1.pdf", permanent: true },
      { source: "/research/papers/nas-brca-002-pam50-repeatability.pdf", destination: "/research/papers/nas-brca-002-pam50-repeatability-v1.0.1.pdf", permanent: true },
      { source: "/research/papers/alphagenome-atlas-rnu4-2.pdf", destination: "/research/papers/alphagenome-atlas-rnu4-2-v1.3.pdf", permanent: true },
      { source: "/research/bbb-audit/research-package-v1.zip", destination: "/research/bbb-audit/research-package-v1.1.zip", permanent: true },
      { source: "/research/nas-brca-002/reproducibility.zip", destination: "/research/nas-brca-002/reproducibility-v1.0.1.zip", permanent: true },
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
