"use client";
export default function Signup() {
  return (
    <section className="text-white font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <article>
        <div className="flex flex-col ">
          <p className="text-2xl">회원가입</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              placeholder="아이디"
              className="p-2 rounded-md  border border-[#FEFCE8]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              className="p-2 rounded-md  border border-[#FEFCE8]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              className="p-2 rounded-md  border border-[#FEFCE8]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              className="p-2 rounded-md  border border-[#FEFCE8]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              className="p-2 rounded-md  border border-[#FEFCE8]"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
