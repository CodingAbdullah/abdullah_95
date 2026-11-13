import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Umami's script is loaded from, and reports to, the host in UMAMI_URL (read at build time)
const umamiOrigin = (() => {
  try {
    return process.env.UMAMI_URL ? new URL(process.env.UMAMI_URL).origin : "";
  } catch {
    return "";
  }
})();

// Next.js injects inline scripts into prerendered pages, so script-src needs 'unsafe-inline'
// (nonces would force every page to render dynamically). Dev mode also needs eval and websockets for HMR.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${umamiOrigin}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://genericbucket95.s3.us-east-2.amazonaws.com",
  "font-src 'self'",
  `connect-src 'self' ${umamiOrigin}${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
]
  .map((directive) => directive.replace(/\s+/g, " ").trim())
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "genericbucket95.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  // Old multi-page routes now point at sections of the single page
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/portfolio", destination: "/#projects", permanent: true },
      { source: "/leisure", destination: "/", permanent: true },
      { source: "/lichess", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
