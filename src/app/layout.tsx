import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Jam Tech — Tech Career Workshops & Speaking",
    template: "%s | Jam Tech",
  },
  description:
    "Practical workshops that give students, graduates, and career switchers the clarity, skills, and real-world insight they need to break into the tech industry with confidence.",
  keywords: [
    "tech career workshops",
    "breaking into tech",
    "career switcher",
    "tech speaking",
    "workshop facilitator",
    "AI tools workshop",
    "frontend",
    "backend",
    "software engineering",
    "career guidance",
  ],
  authors: [{ name: "Jamil Uddin" }],
  creator: "Jamil Uddin",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Jam Tech",
    title: "Jam Tech — Tech Career Workshops & Speaking",
    description:
      "Practical workshops that give students, graduates, and career switchers the clarity, skills, and real-world insight they need to break into the tech industry with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jam Tech — Tech Career Workshops & Speaking",
    description:
      "Practical workshops that give students, graduates, and career switchers the clarity, skills, and real-world insight they need to break into the tech industry with confidence.",
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
        {children}
      </body>
    </html>
  );
}
