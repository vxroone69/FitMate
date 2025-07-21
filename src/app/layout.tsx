// app/layout.tsx (or app/layout.jsx)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// REMOVED: import backgroundImage from "/blue-gradient.png"; // <-- This line is removed!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitMate AI - Get Jacked",
  description: "A modern fitness AI platform to get jacked for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />

          {/* SUBTLE IMAGE BACKGROUND */}
          {/* Direct reference to the image path from the public directory */}
          <div
            className="fixed inset-0 -z-10 bg-cover bg-center"
            // CHANGED: Direct use of the path string for backgroundImage
            style={{ backgroundImage: `url('/blue-gradient.png')` }}
          >
            {/* Optional: Add a subtle black overlay for better text contrast over the background image */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}