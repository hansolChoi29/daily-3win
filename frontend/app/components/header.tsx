"use client";
import { usePathname } from "next/navigation";
import { Jost } from "next/font/google";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });
export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div>
      {/* 공통 헤더 */}
      <header className="border-b backdrop-blur bg-brand-main ">
        <div className="mx-auto max-w-[1440px] px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className={`${jost.className} text-brand-point hover:text-amber-100 font-bold text-2xl`}
          >
            Daily3Win
          </Link>
          <nav className="hidden xl:flex gap-4 text-sm">
            <Link href="/home">홈</Link>
            <Link href="/guest/schedule">게스트</Link>
            <Link href="/auth">로그인</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
