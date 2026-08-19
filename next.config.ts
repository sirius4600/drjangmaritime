import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages (@cloudflare/next-on-pages) does not support the
  // built-in Next.js image optimization API (it requires a Node.js
  // server). Our images are already pre-sized for the web, so serve
  // them as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
