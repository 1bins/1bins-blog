export interface Skill {
  type?: string;
  name: string;
  img: string;
}

export const skills: Skill[] = [
  {
    type: "lang",
    name: "HTML",
    img: "html.png",
  },
  {
    type: "lang",
    name: "CSS",
    img: "css.png",
  },
  {
    type: "lang",
    name: "JavaScript",
    img: "javascript.png",
  },
  {
    type: "lang",
    name: "TypeScript",
    img: "typescript.png",
  },
  {
    type: "lang",
    name: "SCSS",
    img: "scss.png",
  },
  {
    type: "framework",
    name: "React",
    img: "react.png",
  },
  {
    type: "framework",
    name: "Vue",
    img: "vue.png",
  },
  {
    type: "framework",
    name: "Next",
    img: "next.png",
  },
  {
    type: "framework",
    name: "Nuxt",
    img: "nuxt.png",
  },
  {
    type: "state",
    name: "Redux",
    img: "redux.png",
  },
  {
    type: "state",
    name: "Zustand",
    img: "zustand.png",
  },
  {
    type: "style",
    name: "Tailwind CSS",
    img: "tailwind.png",
  },
  {
    type: "style",
    name: "GSAP",
    img: "gsap.png",
  },
  {
    type: "env",
    name: "Vite",
    img: "vite.png",
  },
  {
    type: "env",
    name: "Vercel",
    img: "vercel.png",
  },
  {
    type: "env",
    name: "Github",
    img: "github.png",
  },
  {
    type: "env",
    name: "supabase",
    img: "supabase.png",
  },
];