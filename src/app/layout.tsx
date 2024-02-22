import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { MouseCursorProvider } from "../context/mouseCursorProvider";

const Nikea = localFont({
  src: "./fonts/NIKEA.otf",
  variable: "--font-NIKEA",
});

export const metadata: Metadata = {
  title: "Pratyay Roy",
  description: "Portfolio Website of Pratyay Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Nikea.variable}>
      <body>
        <MouseCursorProvider>
          {children}
        </MouseCursorProvider>
      </body>
    </html>
  );
}
