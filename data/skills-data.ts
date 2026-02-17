import {
  html, css, javascript, typescript, react, nextjs, tailwindcss,
  nodejs, express, springboot, postgresql, mysql, firebase, supabase,
  java, cplusplus, git, vercel, gitIcon, materialUI, redux,
} from "../src/assets/img/skills/index"

export const SKILLS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5",        img: html },
      { name: "CSS3",         img: css },
      { name: "JavaScript",   img: javascript },
      { name: "TypeScript",   img: typescript },
      { name: "React.js",     img: react },
      { name: "Next.js",      img: nextjs },
      { name: "Tailwind CSS", img: tailwindcss },
      { name: "Material-UI",  img: materialUI },
      { name: "Redux",        img: redux },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", img: javascript },
      { name: "C++",        img: cplusplus },
      { name: "Java",       img: java },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", img: postgresql },
      { name: "MySQL",      img: mysql },
      { name: "Firebase",   img: firebase },
      { name: "Supabase",   img: supabase },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js",      img: nodejs },
      { name: "Express.js",   img: express },
      { name: "Spring Boot",  img: springboot },
    ],
  },
  {
    title: "Hosting Platforms",
    skills: [
      { name: "Vercel",       img: vercel },
      { name: "GitHub Pages", img: git },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", img: gitIcon },
    ],
  },
]
