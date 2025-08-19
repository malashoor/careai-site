// Prevent date drift between server and client
process.env.TZ = 'UTC';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
export default nextConfig;
