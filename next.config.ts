import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "//sitemap.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "//robots.txt",
        destination: "/robots.txt",
      },
    ];
  },
};

export default nextConfig;
