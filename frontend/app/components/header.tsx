"use client";
import { usePathname } from "next/navigation";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div>
      {/* 공통 헤더 */}
      <header className="border-b backdrop-blur bg-brand-main ">
        <div className="mx-auto max-w-[1440px] px-4 h-14 flex items-center justify-between">
          <a
            href="/"
            className={`${jost.className} text-brand-point hover:text-amber-100 font-bold text-2xl`}
          >
            Daily3Win
          </a>
          <nav className="hidden xl:flex gap-4 text-sm">
            <a href="/home">홈</a>
            <a href="/guest/schedule">게스트</a>
            <a href="/auth/login">로그인</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
