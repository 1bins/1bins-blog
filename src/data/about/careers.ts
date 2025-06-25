import {Skill} from "@/data/about/skills";

export interface Career {
  timeline: string;
  company: string;
  description: string;
  skills: Skill[];
  list: string[];
}

export const careers: Career[] = [
  {
    timeline: "2024.04 - 현재",
    company: "스푼(주)",
    description: "Front-end Developer | 대홍기획 자회사 광고 대행사",
    skills: [
      {
        name: "React",
        img: "react.png"
      },
      {
        name: "JavaScript",
        img: "javascript.png"
      },
      {
        name: "TypeScript",
        img: "typescript.png",
      },
      {
        name: "Next",
        img: "next.png"
      },
      {
        name: "SCSS",
        img: "scss.png"
      },
      {
        name: "Nuxt",
        img: "nuxt.png"
      },
      {
        name: "Redux",
        img: "redux.png"
      },
      {
        name: "Zustand",
        img: "zustand.png"
      },
      {
        name: "Github",
        img: "github.png"
      }
    ],
    list: [
      "React 기반의 Micro Frontend Service 개발",
      "Nuxt 기반 홈페이지 유지보수 및 개선 작업",
      "REST API 연동 및 Redux, Zustand를 활용한 전역 상태 관리 구현"
    ]
  },
  {
    timeline: "2019.10 - 2023.11",
    company: "컨설트인사이드",
    description: "Web Publisher | 웹 에이전시",
    skills: [
      {
        name: "HTML",
        img: "html.png"
      },
      {
        name: "CSS",
        img: "css.png"
      },
      {
        name: "JavaScript",
        img: "javascript.png"
      },
      {
        name: "SCSS",
        img: "scss.png"
      },
      {
        name: "GSAP",
        img: "gsap.png"
      }
    ],
    list: [
      "기업 및 브랜드 홈페이지 신규 제작 및 유지보수",
      "관리자 페이지/대시보드 UI 설계 및 구현",
      "반응형 웹, 크로스브라우징, 웹 접근성 고려한 마크업",
      "고도몰, 카페24 기반의 쇼핑몰 제작 및 커스터마이징"
    ]
  },
]