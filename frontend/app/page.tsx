import { textVariants } from "../lib/typography";

// 로그인/ 비로그인 버튼
export default function Home() {
  return (
    <section className="text-white font-sans grid grid-rows-[20px_1fr_20px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col  row-start-2 items-center sm:items-start ">
        <div className="flex flex-col gap-4">
          <a href="/guest">게스트</a>
          <a href="/auth/signin">로그인</a>
        </div>
      </main>
    </section>
  );
}
