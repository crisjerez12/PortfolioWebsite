import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ariser Portfolio Page",
  description: "A portfolio page made with NextJS, Shadcn-UI and Framer Motion",
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
