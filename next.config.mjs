/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "images.pexels.com"
    ]
  },
  experimental: {
    appDir: true
  }
};

export default nextConfig;



