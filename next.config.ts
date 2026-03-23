import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "genericbucket95.s3.us-east-2.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "credly.com"
      }
    ]
  },
  reactStrictMode: true
};

export default nextConfig;