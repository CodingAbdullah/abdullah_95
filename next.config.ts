import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
