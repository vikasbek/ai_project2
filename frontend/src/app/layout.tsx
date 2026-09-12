import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Project 2",
  description: "Next.js frontend for the AI Project 2 microservices platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
