import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.positioning,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.positioning,
    type: "website",
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
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text min-h-full">{children}</body>
    </html>
  );
}
