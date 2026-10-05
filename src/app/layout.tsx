import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flpc.ae"),
  title: {
    default: "FloridaPest - Professional Landscape and Pest Control Services",
    template: "%s | FloridaPest",
  },
  description:
    "Expert landscape and pest control solutions across the UAE. 20+ years of excellence with 2,600+ satisfied clients. Get your free inspection today.",
  keywords: ["manhole watcher"].join(", "),
  alternates: {
    canonical: "https://www.flpc.ae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FloridaPest - Professional Landscape and Pest Control Services",
    description:
      "Expert landscape and pest control solutions across the UAE. 20+ years of excellence with 2,600+ satisfied clients. Get your free inspection today.",
    url: "https://www.flpc.ae",
    siteName: "MAHA",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MAHA Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MAHA",
    creator: "@MAHA",
    title: "FloridaPest - Professional Landscape and Pest Control Services",
    description:
      "Expert landscape and pest control solutions across the UAE. 20+ years of excellence with 2,600+ satisfied clients. Get your free inspection today.",
    images: {
      url: "/twitter-image.png",
      alt: "MAHA Training",
    },
  },
  verification: {
    // google: "your-google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#004b23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

//  ./deploy-flpc.sh
