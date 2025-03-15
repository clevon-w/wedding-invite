import type { Metadata } from "next";
import { jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Our wedding invitation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
