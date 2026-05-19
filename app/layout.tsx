import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vihang Kale | Frontend Developer | React, Next.js, Node.js",
  description:
    "Vihang Kale - Senior Associate Consultant at Infosys, Pune-based frontend and full-stack developer with 5+ years of experience in React, Next.js, TypeScript, Node.js, AWS, and modern web development. Portfolio featuring projects, skills, and professional experience.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Vihang Kale | Frontend Developer",
    description:
      "Senior Associate Consultant with 5+ years building scalable web applications using React, Next.js, Node.js, and AWS.",
    siteName: "Vihang Kale Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vihang Kale | Frontend Developer",
    description:
      "Experienced frontend engineer specializing in React, Next.js, and performance optimization.",
  },
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
