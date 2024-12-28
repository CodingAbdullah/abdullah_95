import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["genericbucket95.s3.us-east-2.amazonaws.com", "credly.com"]
  },
  reactStrictMode: true
};

export default nextConfig;