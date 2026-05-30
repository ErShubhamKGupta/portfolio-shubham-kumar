import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Kumar — .NET & Azure Backend Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience building scalable enterprise applications, APIs, and microservices for modern businesses.",
  keywords: [".NET", "Azure", "Backend Engineer", "Microservices", "C#", "ASP.NET Core"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
