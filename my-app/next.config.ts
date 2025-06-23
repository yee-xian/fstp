/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Enable React Server Actions if needed
    typedRoutes: true    // Enable typed routing (Next.js 15+)
  },
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"], // Add your image domains here
  }
};

export default nextConfig;
