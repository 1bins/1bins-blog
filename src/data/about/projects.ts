import {Skill} from "@/data/about/skills";

export interface Project {
  id: string;
  company: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ProjectDetail extends Project {
  date: string;
  homepage?: string;
  tasks?: string[];
  results?: string[];
  data: string;
}

export const projects: Project[] = [
  // 스푼
  {
    id: "s0",
    company: "스푼(주)",
    title: "퍼포먼스 마케터 대시보드 구축",
    description: "Next.js 기반 대시보드 구축",
    skills: [
      { name: "Next.js", img: "next.png" },
      { name: "TypeScript", img: "typescript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  {
    id: "s1",
    company: "스푼(주)",
    title: "자사 홈페이지 리뉴얼",
    description: "Nuxt 기반 스푼 홈페이지 리뉴얼 및 유지보수 업무",
    skills: [
      { name: "Nuxt", img: "nuxt.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  {
    id: "s2",
    company: "스푼(주)",
    title: "롯데음료 칠성사이다 더위원해",
    description: "유저들이 터치게임을 통해 이벤트에 참여하는 마이크로 사이트 제작",
    skills: [
      { name: "Laravel", img: "laravel.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  {
    id: "s3",
    company: "스푼(주)",
    title: "롯데음료 밀키스 친밀리미터",
    description: "밀키스 성향 테스트와 친구와 궁합매칭, 즉석복권 기능이 담긴 마이크로 사이트 제작",
    skills: [
      { name: "React", img: "react.png" },
      { name: "Redux", img: "redux.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  {
    id: "s4",
    company: "스푼(주)",
    title: "추가 참여 프로젝트들",
    description: "스푼(주)에서 프론트엔드 개발자로써 참여했던 프로젝트 리스트",
    skills: [
      { name: "React", img: "react.png" },
      { name: "Nuxt", img: "nuxt.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  // 토이프로젝트
  {
    id: "t1",
    company: "토이프로젝트",
    title: "[토이프로젝트] 개인 블로그 제작",
    description: "Next.js와 TypeScript, supabase, zustand를 활용하여 개인 블로그 제작하기",
    skills: [
      { name: "Next.js", img: "next.png" },
      { name: "Zustand", img: "zustand.png" },
      { name: "TypeScript", img: "typescript.png" },
      { name: "supabase", img: "supabase.png" },
      { name: "SCSS", img: "scss.png" },
      { name: "Vercel", img: "vercel.png" },
    ]
  },
  {
    id: "t2",
    company: "토이프로젝트",
    title: "[토이프로젝트] 여행어때",
    description: "React, TypeScript를 기반으로 제작한 토이 프로젝트",
    skills: [
      { name: "React", img: "react.png" },
      { name: "Redux", img: "redux.png" },
      { name: "TypeScript", img: "typescript.png" },
      { name: "Vite", img: "vite.png" },
      { name: "SCSS", img: "scss.png" },
      { name: "Vercel", img: "vercel.png" },
    ]
  },
  // 컨설트인사이드
  {
    id: "c1",
    company: "컨설트인사이드",
    title: "분당추모공원휴 봉안당 관리 시스템",
    description: "GSAP를 이용한 패럴랙스 홈페이지 디자인 및 퍼블리싱",
    skills: [
      { name: "html", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
      { name: "GSAP", img: "gsap.png" },
    ]
  },
  {
    id: "c2",
    company: "컨설트인사이드",
    title: "화홍병원 홈페이지",
    description: "SVG를 사용하여 동적 모션 디자인 및 퍼블리싱",
    skills: [
      { name: "html", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "SCSS", img: "scss.png" },
    ]
  },
  {
    id: "c3",
    company: "컨설트인사이드",
    title: "용인시 온라인 일자리박람회 홈페이지",
    description: "웹 접근성과 공공기관 표준을 준수하여 홈페이지 디자인 및 퍼블리싱",
    skills: [
      { name: "html", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "css", img: "css.png" },
    ]
  },
  {
    id: "c4",
    company: "컨설트인사이드",
    title: "크레욜라 쇼핑몰 홈페이지",
    description: "CJ 데이비드토이 크레욜라 고도몰 기반 쇼핑몰 홈페이지 디자인 및 퍼블리싱",
    skills: [
      { name: "html", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "css", img: "css.png" },
    ]
  },
  {
    id: "c5",
    company: "컨설트인사이드",
    title: "추가 참여 프로젝트들",
    description: "컨설트인사이드에서 웹 퍼블리셔로써 참여했던 프로젝트 리스트",
    skills: [
      { name: "html", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "css", img: "css.png" },
    ]
  },
];

export const projectDetails: ProjectDetail[] = [
  // 스푼
  {
    ...projects.find(p => p.id === "s0")!,
    date: "2025.07 ~ 진행중",
    data: "spoon_dashboard"
  },
  {
    ...projects.find(p => p.id === "s1")!,
    date: "2024.10 ~ 2025.01",
    homepage: "https://spoond.co.kr/",
    data: "spoon_homepage"
  },
  {
    ...projects.find(p => p.id === "s2")!,
    date: "2024.06 ~ 2024.07",
    data: "spoon_chilsung"

  },
  {
    ...projects.find(p => p.id === "s3")!,
    date: "2024.04 ~ 2024.05",
    data: "spoon_milkis"
  },
  {
    ...projects.find(p => p.id === "s4")!,
    date: "2024.04 ~ 현재",
    data: "spoon_projects"
  },
  {
    ...projects.find(p => p.id === "t1")!,
    date: "2024.06",
    homepage: "https://1bins-blog.vercel.app/blog",
    data: "toy_blog"
  },
  {
    ...projects.find(p => p.id === "t2")!,
    date: "2024.05",
    homepage: "https://toy-travel-w6r4.vercel.app/",
    data: "toy_travel"
  },
  // 컨설트인사이드
  {
    ...projects.find(p => p.id === "c1")!,
    date: "2023.06 ~ 2023.09",
    homepage: "https://huepark.co.kr",
    data: "coin_huepark"
  },
  {
    ...projects.find(p => p.id === "c2")!,
    date: "2022.10 ~ 2023.01",
    homepage: "https://hwahonghospital.com/",
    data: "coin_hwahong"
  },
  {
    ...projects.find(p => p.id === "c3")!,
    date: "2021.09 ~ 2021.10",
    data: "coin_yongin"
  },
  {
    ...projects.find(p => p.id === "c4")!,
    date: "2020.06 ~ 2020.09",
    data: "coin_crayola"
  },
  {
    ...projects.find(p => p.id === "c5")!,
    date: "2019.09 ~ 2023.10",
    data: "coin_projects"
  },
]