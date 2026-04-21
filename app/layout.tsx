import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { AccountProvider } from "@/components/AccountProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PointsProvider } from "@/components/PointsProvider";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "AI & Coding Academy",
  description: "Hands-on training website for AI and software development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <AccountProvider>
          <PointsProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </PointsProvider>
        </AccountProvider>
      </body>
    </html>
  );
}
