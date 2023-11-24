import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockify",
  description:
    "Blockify is a cutting-edge cryptocurrency management app designed for both beginners and seasoned investors. Seamlessly integrated with leading blockchain networks, Blockify provides a user-friendly interface for tracking, managing, and trading various cryptocurrencies. Stay ahead of the market with real-time price updates, in-depth charts, and personalized portfolios. Whether you're a casual investor or a crypto enthusiast, Blockify empowers you to navigate the exciting world of digital assets with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Nav />
          <main className="w-[90vw] sm:w-[85vw] 2xl:w-[60vw] mx-auto">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
