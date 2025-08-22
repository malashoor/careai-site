// Prevent date drift between server and client
process.env.TZ = 'UTC';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable image optimization for static export compatibility
    unoptimized: true,
    // Let Next serve modern formats automatically
    formats: ['image/avif', 'image/webp'],
    // Optional: add your domain(s) here if you load remote images later
    // remotePatterns: [],
  },
  // Exclude Flutter directory from build to prevent env var conflicts
  // Removed invalid experimental option for Next.js 14.2.31
  
  // Only enable static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
  }),
};

export default nextConfig;
