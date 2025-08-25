"use client";

import Link from "next/link";

export default function Signin() {
  return (
    <div className="text-white font-sans   items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section className="flex flex-col items-center">
        <p className="text-2xl mt-20">로그인</p>
        <div className="flex flex-col  gap-2">
          <label className="text-[#FEFCE8]">email</label>
          <input
            type="text"
            placeholder="아이디"
            className="p-2 rounded-md  border border-[#FEFCE8]"
          />
          <label className="text-[#FEFCE8]">password</label>

          <input
            type="password"
            placeholder="비밀번호"
            className="p-2 rounded-md border border-[#FEFCE8]"
          />
        </div>

        <div className="text-xs mt-2">
          <Link href="/">아이디 찾기 | </Link>
          <a>비밀번호 재설정</a>
        </div>
        <div>
          <Link
            href="/auth/signup"
            className=" text-brand-point text-xs hover:text-[#b0b35c66]"
          >
            회원가입
          </Link>
        </div>
      </section>
    </div>
  );
}
