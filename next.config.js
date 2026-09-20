/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
    remotePatterns: [{ protocol: "https", hostname: "*.mzstatic.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
