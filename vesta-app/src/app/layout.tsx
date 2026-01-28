import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  metadataBase: new URL('https://vestaverandaliving.store'),
  alternates: {
    canonical: './',
  },
  title: "Vesta Veranda Living | Curated Outdoor Living Essentials",
  description: "Discover handpicked fire pits, outdoor furniture, and ambient lighting to transform your patio into a sanctuary. Curated reviews and honest recommendations.",
  keywords: ["outdoor living", "fire pits", "patio furniture", "outdoor lighting", "backyard design", "Solo Stove", "Breeo"],
  authors: [{ name: "Vesta Veranda Living" }],
  openGraph: {
    title: "Vesta Veranda Living | Curated Outdoor Living Essentials",
    description: "Discover handpicked fire pits, outdoor furniture, and ambient lighting to transform your patio into a sanctuary.",
    url: "https://vestaverandaliving.store",
    siteName: "Vesta Veranda Living",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vesta Veranda Living',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesta Veranda Living",
    description: "Curated outdoor living essentials for your patio sanctuary.",
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      "p:domain_verify": "b87bdc534efdd2acee550f7a8b2e0d91",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Vesta Veranda Living',
                  url: 'https://vestaverandaliving.store',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://vestaverandaliving.store/search?q={search_term_string}'
                    },
                    'query-input': 'required name=search_term_string'
                  }
                },
                {
                  '@type': 'Organization',
                  name: 'Vesta Veranda Living',
                  url: 'https://vestaverandaliving.store',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://vestaverandaliving.store/logo.jpg',
                    width: 512,
                    height: 512
                  },
                  sameAs: [
                    'https://facebook.com/vestaveranda',
                    'https://instagram.com/vestaveranda',
                    'https://pinterest.com/vestaveranda'
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
