import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tryhackme-badges.s3.amazonaws.com" },
      { protocol: "https", hostname: "www.hackthebox.eu" },
      { protocol: "https", hostname: "app.hackthebox.com" },
    ],
  },
};

export default nextConfig;
