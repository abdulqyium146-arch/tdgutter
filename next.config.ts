import type { NextConfig } from 'next';

const securityHeaders = [
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Prevent MIME sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Control referrer info sent with requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Enable DNS prefetching for performance (also helps crawlers)
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Lock down unnecessary browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Force HTTPS for 2 years (only add once actually on HTTPS)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
  // Don't advertise the tech stack to crawlers/scanners
  poweredByHeader: false,

  // Gzip/Brotli compression
  compress: true,

  // Security headers on every response
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Redirect www → non-www for canonical consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tdgutterandwindows.com' }],
        destination: 'https://tdgutterandwindows.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
