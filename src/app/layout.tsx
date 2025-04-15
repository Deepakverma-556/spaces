import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOps",
  description: "Create a devOps spaces",
  openGraph: {
    title: "DevOps",
    description: "Create a devOps spaces",
    images: [
      {
        url: "./meta.png",
        height: 600,
        width: 800,
        alt: "meta",
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
      <body className="bg-offWhite">{children}</body>
    </html>
  );
}
