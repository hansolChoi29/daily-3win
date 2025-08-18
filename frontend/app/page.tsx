import { textVariants } from "../lib/typography";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] bg-brand-main items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col  row-start-2 items-center sm:items-start ">
        <div className={textVariants({ type: "title", size: "xl" })}>test</div>{" "}
        {/* <Button>기본 버튼</Button>
        <Button variant="outline" size="sm">
          아웃라인
        </Button>
        <Button variant="danger" size="lg" className="w-full">
          위험
        </Button> */}
        <div className="text-brand-point">test</div>
        <div className="text-brand-accent">test</div>
        <div className="text-brand-bg">test</div>
        <div className="rainbow-border">
          <div className="inner bg-brand-bg">🏆 1위 최붱붱한솔냥냥</div>
        </div>
        <div className="rainbow-border">
          <div className="inner">🏆 1위 최붱붱한솔냥냥</div>
        </div>
        <div className="rainbow-border">
          <div className="inner">🏆 1위 최붱붱한솔냥냥</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
