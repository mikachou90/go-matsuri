/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/go-matsuri",
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
