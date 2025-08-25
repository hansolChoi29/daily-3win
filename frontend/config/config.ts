import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 구조 쓰는 경우 대비
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"], // 기본 폰트 교체
        jost: ["var(--font-jost)", "sans-serif"], // 별칭으로도 사용
      },
      screens: {
        xs: "375px",
        x12: "1440px",
      },
      maxWidth: {
        "screen-sm": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
//브랜드 컬러 및 보조 컬러 등등
