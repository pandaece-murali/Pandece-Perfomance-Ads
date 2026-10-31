import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANDAeCe | Performance Marketing for Colleges, B-Schools & Universities",
  description:
    "Fill your seats, not just your CRM. High-intent Google & Meta Ads systems engineered around cost per qualified lead, cost per admission, and verified ROAS.",
  keywords: [
    "education performance marketing",
    "college admission marketing",
    "b-school lead generation",
    "higher education ads agency",
    "student acquisition roas",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101D35",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F8FF] text-[#17243A] selection:bg-[#2864F0] selection:text-white">
        {children}
      </body>
    </html>
  );
}
