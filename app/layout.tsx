import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potion",
  description:
    "The connected workspace where deeper, faster, and better work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/code-copy-active.svg",
        href: "/code-copy-active.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/code-copy.svg",
        href: "/code-copy.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
