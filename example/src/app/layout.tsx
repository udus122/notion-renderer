import type { Metadata } from "next";
import "@udus/notion-renderer/styles/globals.css";
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
      <body className="notion-root notion-dark">{children}</body>
    </html>
  );
}
