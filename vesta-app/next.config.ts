import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },

          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },

          // Enforce HTTPS (only for production)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          // XSS protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },

          // Permissions policy - restrict dangerous features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },

          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              // Default: only same origin
              "default-src 'self'",

              // Scripts: allow self, inline (Next.js requires), eval (Next.js dev), and specific domains
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",

              // Styles: allow self and inline (required for styled-jsx and CSS-in-JS)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Images: allow self, data URIs, and external image sources
              "img-src 'self' data: https: http:",

              // Fonts: allow self and Google Fonts
              "font-src 'self' data: https://fonts.gstatic.com",

              // Frames: allow specific trusted domains (YouTube, etc.)
              "frame-src 'self' https://www.youtube.com",

              // Connect: API calls and analytics
              "connect-src 'self' https://www.google-analytics.com https://firebasestorage.googleapis.com https://firestore.googleapis.com",

              // Media: self and trusted CDNs
              "media-src 'self'",

              // Objects: block plugins like Flash
              "object-src 'none'",

              // Base URI: prevent base tag injection
              "base-uri 'self'",

              // Form actions: only same origin
              "form-action 'self'",

              // Frame ancestors: prevent embedding (redundant with X-Frame-Options but good defense in depth)
              "frame-ancestors 'none'",

              // Upgrade insecure requests in production
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
