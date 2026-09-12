import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palomaabdurramani.com"),
  title: "Paloma Abdurramani — Data Engineer & Backend Developer",
  description:
    "Data engineer and backend developer building reliable pipelines, APIs, and AWS-backed systems.",
  openGraph: {
    title: "Paloma Abdurramani — Data Engineer & Backend Developer",
    description:
      "Data engineer and backend developer building reliable pipelines, APIs, and AWS-backed systems.",
    type: "website",
    locale: "en_US",
    siteName: "Paloma Abdurramani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paloma Abdurramani — Data Engineer & Backend Developer",
    description:
      "Data engineer and backend developer building reliable pipelines, APIs, and AWS-backed systems.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
