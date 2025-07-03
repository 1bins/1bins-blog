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
    description: "GSAP를 이용한 패럴랙스 홈페이지 퍼블리싱",
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
    description: "SVG를 사용하여 동적 모션 퍼블리싱",
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
    description: "웹 접근성과 공공기관 표준을 준수하여 홈페이지 퍼블리싱",
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
    description: "CJ 데이비드토이 크레욜라 고도몰 기반 쇼핑몰 홈페이지 퍼블리싱",
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
    ...projects.find(p => p.id === "s1")!,
    date: "2024.10 ~ 2025.01",
    homepage: "https://spoond.co.kr/",
    tasks: [
      "Vue transition을 활용하여 패럴랙스 애니메이션 구현, 사용자 경험 강화",
      "웹 접근성을 고려하여 사이트 전반적인 접근성 향상 작업",
      "페이지별 SEO 최적화 기능 구현, 메타 태그, Open Graph 태그, 이미지 최적화 등 SEO 관련 기능 적용",
    ],
    results: [
      "검색 엔진 노출 향상 및 접근성 등급 개선",
      "사용자 이탈률 감소 및 페이지 체류 시간 증가",
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "s2")!,
    date: "2024.06 ~ 2024.07",
    tasks: [
      "터치 이벤트와 GSAP 라이브러리를 결합하여 부드러운 모션의 게임 인터랙션 구현",
      "HTTP 메소드 기반 API 통신",
      "이벤트 참여자 정보 저장 및 즉석 당첨 결과 제공",
      "트래픽 집중 시간대 서버 성능 저하에 대비하여 로딩 화면을 도입",
      "유튜브 시청과 연계하여 이벤트 응모권 제공 → 자연스러운 반복 참여 유도",
    ],
    results: [
      "대한민국 디지털 광고대상 마케팅/캠페인-프로모션 부문 은상 수상",
      "이벤트 집중 시간대 이탈률 감소 및 유저 재방문율 상승",
      "유튜브 시청과 이벤트 응모 연동으로 유저 참여도 및 이벤트 효과 증대",
    ],
    data: "spoond"

},
  {
    ...projects.find(p => p.id === "s3")!,
    date: "2024.04 ~ 2024.05",
    tasks: [
      "MBTI 형식의 음료 궁합 테스트 기능 구현",
      "Redux기반 스토어 디자인",
      "HTTP 메소드 기반 API 통신",
      "SNS 공유 기능 구현하여 사용자들이 이벤트페이지를 SNS에 손쉽게 공유할 수 있도록 지원",
      "CSS Module을 도입하여 컴포넌트 단위의 스타일링으로 유지보수성과 협업 효율성 향상",
      "전체 페이지의 HTML 마크업 및 SCSS 기반 스타일링 구현",
    ],
    results: [
      "유저 참여자 간 소셜 확산 및 공유 활성화",
      "직관적인 인터랙션과 자연스러운 흐름 구성으로 클라이언트로부터 긍정적인 피드백 수령",
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "t1")!,
    date: "2024.06",
    homepage: "https://1bins-blog.vercel.app/blog",
    tasks: [
      "Supabase 인증 기능을 활용한 로그인 및 사용자 세션 관리 구현",
      "Zustand를 도입하여 게시글 목록, 즐겨찾기 상태 등의 전역 상태 관리 구조 설계",
      "반응형 UI 및 사용자 경험을 고려하여 Skeleton 커스텀 컴포넌트 직접 제작",
      "TypeScript 기반으로 프로젝트 전체 타입 설계"
    ],
    results: [
      "프론트엔드 전반의 흐름(라우팅, 상태 관리, API 통신, 컴포넌트 설계)을 스스로 구현하며 실전 감각 향상",
      "Zustand와 Supabase를 통해 상태/데이터 흐름에 대한 명확한 이해 및 처리 경험 확보",
      "직접 제작한 UI 컴포넌트를 통해 사용자 경험과 인터페이스 품질 향상"
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "t2")!,
    date: "2024.05",
    homepage: "https://toy-travel-w6r4.vercel.app/",
    tasks: [
      "Tour API를 활용한 여행지 즐겨찾기 기능 제작",
      "Toast 컴포넌트를 직접 제작하여 사용자 행동에 대한 피드백 제공",
      "Skeleton 컴포넌트를 직접 제작하여 사용자 편의성 제공",
      "TypeScript를 도입하여 전반적인 프로젝트 개발 및 타입 안정성 확보",
    ],
    results: [
      "컴포넌트 단위의 기능 구현과 API 연동 경험을 통해 TypeScript의 실무 활용 역량 향상",
      "직접 제작한 UI 컴포넌트를 통해 사용자 경험 개선 및 상태 전달 명확화",
    ],
    data: "spoond"
  },
  // 컨설트인사이드
  {
    ...projects.find(p => p.id === "c1")!,
    date: "2023.06 ~ 2023.09",
    homepage: "https://huepark.co.kr/admin/",
    tasks: [
      "봉안당 예약 시스템 관련 웹페이지 퍼블리싱",
      "GSAP 라이브러리를 이용한 패럴랙스 스크롤 애니메이션 구현",
      "SweetAlert 라이브러리를 활용하여 클라이언트 UI 개선, 사용자에게 알림 및 피드백 제공",
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "c2")!,
    date: "2022.10 ~ 2023.01",
    homepage: "https://hwahonghospital.com/",
    tasks: [
      "404 페이지: SVG를 사용하여 동적 모션 구현, 사용자 친화적이고 재미있는 오류 페이지 제공",
      "웹 접근성 기준을 준수하여 장애를 가진 사용자도 편리하게 이용할 수 있도록 설계",
      "병원 특성에 맞춰 의료 정보 제공과 병원 서비스 소개 페이지를 직관적으로 구성",
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "c3")!,
    date: "2021.09 ~ 2021.10",
    tasks: [
      "용인시 온라인 일자리박람회 홈페이지 퍼블리싱 담당",
      "웹 접근성 준수: WCAG(Web Content Accessibility Guidelines) 기준에 맞춘 웹 접근성 확보",
      "공공기관 표준 준수: 공공기관에서 요구하는 웹 표준과 보안 기준을 준수하여 안정적인 웹사이트 제공",
    ],
    data: "spoond"
  },
  {
    ...projects.find(p => p.id === "c4")!,
    date: "2020.06 ~ 2020.09",
    tasks: [
      "고도몰 쇼핑몰 서비스 기반으로 크레욜라 쇼핑몰 홈페이지 구축",
      "고도몰 제공 소스를 활용하여 다양한 레이아웃 구현 (팝업, 이벤트상품)",
      "이벤트 페이지 및 상품 페이지의 기능을 최적화하여 원활한 사용자 경험 제공",
    ],
    data: "spoond"
  },
]