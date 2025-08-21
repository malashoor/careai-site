// Prevent date drift between server and client
process.env.TZ = 'UTC';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Let Next serve modern formats automatically
    formats: ['image/avif', 'image/webp'],
    // Optional: add your domain(s) here if you load remote images later
    // remotePatterns: [],
  },
  // Exclude Flutter directory from build to prevent env var conflicts
  // Removed invalid experimental option for Next.js 14.2.31
  // Static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
