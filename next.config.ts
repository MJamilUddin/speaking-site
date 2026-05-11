import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "iconape.com" },
      { protocol: "https", hostname: "www.sourceid.tech" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "fetherlabs.com" },
      { protocol: "https", hostname: "muslimtechfest.com" },
      { protocol: "https", hostname: "www.youngwestminster.com" },
    ],
  },
};

export default nextConfig;
