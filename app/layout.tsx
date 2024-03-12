import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="potion-theme"
          >
            <Toaster position="bottom-center" />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

// ADD THIS DARK MODE TO PORTFOLIO, PERFECT!
