import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme-provider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteChrome } from "@/components/layout/SiteChrome";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://howardgoh.vercel.app",
  ),
  title: `${profile.name} — Portfolio`,
  description: profile.positioning,
  authors: [{ name: profile.name }],
  keywords: [
    "Howard Frelindo Goh",
    "software engineer",
    "portfolio",
    "game",
    "desktop",
    "web",
    "mobile",
    "AI",
  ],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.positioning,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portfolio`,
    description: profile.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-bg text-text min-h-full">
        <ThemeProvider>
          <SmoothScroll />
          <CustomCursor />
          <ScrollProgress />
          <SiteChrome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
