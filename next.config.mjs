/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/Fahud" : "",
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
