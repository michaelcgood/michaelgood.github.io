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
  title: "Michael C. Good | Down Special Labs | Hard Reset",
  description: "The digital codex of Michael C. Good. Founder of Down Special Labs, architect of the Hard Reset live MMO, and Senior Enterprise Cyber Security Engineer.",
  keywords: [
    "Michael Good",
    "Michael C. Good",
    "Down Special Labs",
    "Hard Reset",
    "Rage Box",
    "Cyber Security",
    "Identity Access Management",
    "Music Production",
    "AOW Solutions",
    "Live MMO",
    "Next.js Architect"
  ],
  authors: [{ name: "Michael C. Good" }],
  creator: "Michael C. Good",
  openGraph: {
    title: "Michael C. Good | Down Special Labs",
    description: "The digital codex of Michael C. Good. Architect of the Hard Reset live MMO.",
    url: "https://michaelcgood.com",
    siteName: "Michael C. Good Codex",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
