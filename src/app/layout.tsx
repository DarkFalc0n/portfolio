import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
