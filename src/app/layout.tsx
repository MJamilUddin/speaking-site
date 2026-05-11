import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jamtech.dev";

export const metadata: Metadata = {
  title: {
    default: "JamTech — Build. Advise. Teach.",
    template: "%s | JamTech",
  },
  description:
    "Technology consulting, AI advisory, and career education — built on real industry experience. JamTech helps startups and businesses design, build, and launch high-impact software.",
  keywords: [
    "tech consultancy",
    "software development",
    "AI strategy",
    "AI advisory",
    "tech workshops",
    "development consultancy",
    "startup engineering",
    "career workshops",
    "software engineering",
    "full stack developer",
  ],
  authors: [{ name: "Jamil Uddin" }],
  creator: "Jamil Uddin",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "JamTech",
    title: "JamTech — Build. Advise. Teach.",
    description:
      "Technology consulting, AI advisory, and career education — built on real industry experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JamTech — Build. Advise. Teach.",
    description:
      "Technology consulting, AI advisory, and career education — built on real industry experience.",
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
  icons: {
    icon: [
      {
        url: "/Jamtech%20logos/JamTech%20Logo%20small.png",
        type: "image/png",
      },
    ],
    apple: "/Jamtech%20logos/JamTech%20Logo%20small.png",
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
