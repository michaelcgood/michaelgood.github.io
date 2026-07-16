import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Syncopate } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Down Special Labs | Hard Reset",
  description: "Executive Hacker portfolio and live localized MMO crowd experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable} ${syncopate.variable}`}>
      <body className="antialiased bg-cyber-black min-h-screen selection:bg-terminal-green selection:text-cyber-black">
        <div className="max-w-[1600px] mx-auto w-full border-x border-cyber-gray min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
