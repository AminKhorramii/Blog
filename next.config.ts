// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static exports to Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Support for MDX if needed
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
