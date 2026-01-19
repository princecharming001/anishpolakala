import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes from URLs
  trailingSlash: true,
};

export default nextConfig;
