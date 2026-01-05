import "@/styles/globals.css";

import { type Metadata } from "next";
import { Figtree } from "next/font/google";

export const metadata: Metadata = {
  title: "PropertyShares AI - Real Estate Investing, Simplified",
  description: "Buy fractional shares of real properties from your phone. Start small, diversify across multiple homes, and track everything in one place.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "PropertyShares AI - The Future of Real Estate is Shared",
    description: "Buy fractional shares of real properties from your phone. Start small, diversify across multiple homes, and track everything in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PropertyShares AI - Real Estate Investing, Simplified",
    description: "Buy fractional shares of real properties from your phone. Start small, diversify across multiple homes.",
  },
};

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
