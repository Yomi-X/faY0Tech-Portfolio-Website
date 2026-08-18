import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "faY0Tech | Portfolio",
  description: "A modern portfolio for faY0Tech, showcasing technical services and selected work.",
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
