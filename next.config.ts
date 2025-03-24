import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Prevent Vercel build failure on lint errors
    ignoreDuringBuilds: true,
  },
  // You can add more config options here
};

export default nextConfig;
