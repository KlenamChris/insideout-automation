import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Insideout Automation - Smart Living & 3D Virtual Tours in Ghana",
    template:
      "%s | Insideout Automation - Smart Living & 3D Virtual Tours in Ghana",
  },
  description:
    "Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.",
  keywords: [
    "Smart Home Ghana",
    "3D Virtual Tours Accra",
    "Home Automation",
    "Surge Protection",
    "Property Tech",
  ],
  authors: [{ name: "Insideout Automation" }],
  creator: "Insideout Automation",
  publisher: "Insideout Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insdieoutautomation.com/",
    siteName: "Insideout Automation",
    title: "Insideout Automation - Smart Living & 3D Virtual Tours in Ghana",
    description:
      "Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Insideout Automation - Smart Living & Property Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insideout Automation | Smart Living & 3D Virtual Tours in Ghana",
    description:
      "Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.",
    images: ["/hero.png"],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
