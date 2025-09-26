/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export mode: builds a fully static site (no server runtime)
  output: "export",

  // Trailing slash for static hosts compatibility
  trailingSlash: true,

  // Disable server-side features for static export
  images: {
    // Disable Next.js image optimization for static export
    unoptimized: true,
    // Remove domains for static export
    formats: ["image/webp", "image/avif"],
  },

  eslint: {
    // Allow builds to succeed despite lint errors (optional)
    ignoreDuringBuilds: true,
  },

  // Disable experimental features that might cause issues with static export
  experimental: {
    // Disable typed routes for static export
    typedRoutes: false,
  },

  // Ensure all pages are statically generated
  generateStaticParams: true,

  // Optional: Add custom webpack config for static assets
  webpack: (config, { isServer }) => {
    // Handle static assets properly in static export
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },

  // Optional: Custom headers for static export (if using a static host that supports them)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
