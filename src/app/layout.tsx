import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import AppWrapper from "./components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define your website's base URL for absolute paths
const BASE_URL = new URL("https://www.codeclimbngrow.com"); // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: BASE_URL,
  title: {
    default: "CodeClimbNGrow Solutions",
    template: "%s | CodeClimbNGrow",
  },
  description:
    "Transform your career with CodeClimbNGrow Solutions. Master full-stack development, secure guaranteed internships, and land your dream job in 90 days. Learn React, Next.js, Node.js, FastAPI, MongoDB, and more.",

  applicationName: "CodeClimbNGrow Solutions",
  authors: [{ name: "CodeClimbNGrow Team", url: BASE_URL.href }],
  keywords: [
    "full-stack development",
    "web development course",
    "react training",
    "node.js bootcamp",
    "fastapi course",
    "mongodb training",
    "guaranteed internship",
    "job placement",
    "coding institute Hyderabad",
    "learn to code",
  ],
  creator: "CodeClimbNGrow Team",
  publisher: "CodeClimbNGrow Solutions",

  // Robots Meta Tag for Search Engine Crawling
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1, // Allows full video preview
      "max-image-preview": "large", // Allows large image preview
      "max-snippet": -1, // Allows full snippet
    },
  },

  // Favicons and Apple Touch Icons
  icons: {
    icon: "/logo-bg-remove.png", // Standard favicon
    shortcut: "/logo-bg-remove.png", // Shortcut icon for older browsers
    apple: "/logo-bg-remove.png", // Apple touch icon for iOS devices
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo-bg-remove.png",
    },
  },
  manifest: "/site.webmanifest", // Web App Manifest for PWA features

  // Open Graph (for social media sharing like Facebook, LinkedIn)
  openGraph: {
    title: "Master Full Stack Development | CodeClimbNGrow Solutions",
    description:
      "Transform your career with CodeClimbNGrow Solutions. Master full-stack development, secure guaranteed internships, and land your dream job in 90 days.",
    url: BASE_URL.href,
    siteName: "CodeClimbNGrow Solutions",
    images: [
      {
        url: `${BASE_URL.href}/og-image.jpg`, // Absolute URL to your Open Graph image
        width: 1200,
        height: 630,
        alt: "CodeClimbNGrow Full Stack Development Course",
      },
      {
        url: `${BASE_URL.href}/og-image-alt.jpg`, // Alternative image
        width: 800,
        height: 600,
        alt: "CodeClimbNGrow Learning Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: "summary_large_image", // Use large image card for better visibility
    title: "Master Full Stack Development | CodeClimbNGrow Solutions",
    description:
      "Transform your career with CodeClimbNGrow Solutions. Master full-stack development, secure guaranteed internships, and land your dream job in 90 days.",
    creator: "@CodeClimbNGrow", // Replace with your Twitter handle
    site: "@CodeClimbNGrow", // Replace with your Twitter handle
    images: [`${BASE_URL.href}/twitter-image.jpg`], // Absolute URL to your Twitter card image
  },

  // Viewport and Theme Colors for better mobile experience and PWA
  viewport: "width=device-width, initial-scale=1", // Ensures responsive behavior
  colorScheme: "dark light", // Suggests preferred color schemes to the browser
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" }, // Dark theme color
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Light theme color
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
