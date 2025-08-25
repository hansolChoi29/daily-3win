"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white font-sans grid grid-rows-[20px_1fr_20px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col  row-start-2 items-center sm:items-start ">
        <div className="flex flex-col gap-4 items-center">
          <Link
            href="/auth"
            className="px-8  text-white p-2 rounded-4xl  border border-[#FEFCE8] bg-white/20 hover:bg-white/10"
          >
            login
          </Link>
          <Link href="/guest">게스트</Link>
        </div>
      </main>
    </section>
  );
}
//기본뼈대 생성 완료하여 dev 브랜치 생성
