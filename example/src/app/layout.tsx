import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Renderer Example",
  description: "Example app by @udus/notion-renderer and create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
