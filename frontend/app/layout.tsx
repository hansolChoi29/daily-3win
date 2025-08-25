import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

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
      <body className="min-h-dvh bg-brand-main ">
        <Header />

        <main className="mx-auto max-w-[1440px] px-4 py-6  bg-brand-main">
          {children}
        </main>

        <footer className="border-t bg-white/90">
          <div className="mx-auto max-w-[1440px] px-4 h-12 flex items-center text-xs text-gray-500">
            © {new Date().getFullYear()} Flaticon © {new Date().getFullYear()}{" "}
            Freepik ©Kakao ©Google @Daily3Win.com
            <a href="https://github.com/hansolChoi29/daily-3win">
              {" "}
              ©HansolChoiGitHut
            </a>
          </div>
        </footer>

        {/* 전역 토스트/모달 포털 자리 */}
        <div id="portal-root" />
      </body>
    </html>
  );
}
