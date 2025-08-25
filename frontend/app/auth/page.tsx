"use client";
import Link from "next/link";
export default function Auth() {
  return (
    <section
      className="font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20
   "
    >
      <div className=" mx-auto w-full max-w-md rounded-2xl border text-white p-6">
        <div className="grid gap-3">
          {/* 기존회원 로그인 */}
          <Link
            href="/auth/signin"
            className="rounded-lg px-4 py-3 border text-center hover:bg-brand-bg hover:text-brand-main"
          >
            기존회원 로그인
          </Link>

          {/* 소셜 로그인 */}
          <Link
            href="/auth/social"
            className="rounded-lg px-4 py-3 border text-center hover:bg-brand-bg hover:text-brand-main"
          >
            소셜 로그인
          </Link>

          {/* 회원가입 */}
          <Link
            href="/auth/signup"
            className="rounded-lg px-4 py-3 border text-center hover:bg-brand-bg hover:text-brand-main"
          >
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}
