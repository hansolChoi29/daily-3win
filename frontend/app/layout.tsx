import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily 3Win",
  description:
    "Daily 3Win is a platform for daily challenges to improve your skills and win rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
