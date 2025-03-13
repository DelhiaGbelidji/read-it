/** @type {import('next').NextConfig} */

// Security headers configuration
const isDev = process.env.NODE_ENV === 'development';

// Define security headers based on our requirements
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' ${isDev ? 'http://localhost:* ws://localhost:*' : 'https://api.your-domain.com'};
      media-src 'self';
      frame-src 'self';
    `
      .replace(/\s+/g, ' ')
      .trim(),
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
      {
        protocol: 'http',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/api/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/webpack-hmr',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' ws: http://localhost:* ws://localhost:*; font-src 'self' https://fonts.gstatic.com"
              : securityHeaders.find(h => h.key === 'Content-Security-Policy')
                  ?.value || '',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
