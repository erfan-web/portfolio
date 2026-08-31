import {
  FaCode,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaProjectDiagram,
  FaTelegram,
  FaUser,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {
  SiBootstrap,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navItems = [
  { id: 1, name: "تماس", link: "#contact", icon: FaEnvelope, alt: "contact" },
  {
    id: 2,
    name: "پروژه ها",
    link: "#projects",
    icon: FaProjectDiagram,
    alt: "projects",
  },
  { id: 3, name: "مهارت ها", link: "#skills", icon: FaCode, alt: "skills" },
  { id: 4, name: "درباره من", link: "#about", icon: FaUser, alt: "about" },
  { id: 5, name: "خانه", link: "#hero", icon: FaHome, alt: "hero" },
];

export const socialIcons = [
  {
    icon: FaInstagram,
    alt: "Instagram",
    href: "https://www.instagram.com/erfanahmadi.dev",
    color: `hover:text-pink-500 hover:border-pink-500/40`,
  },
  {
    icon: FaLinkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/erfan-dev",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: "Github",
    href: "https://github.com/erfan-web",
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: "Telegram",
    href: "https://t.me/erfanahmadyii",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
];

export const skills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Redux", icon: SiRedux },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Figma", icon: SiFigma },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "CSS", icon: IoLogoCss3 },
  { name: "HTML", icon: IoLogoHtml5 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "MongoDB", icon: SiMongodb },
];

import project1 from "./assets/images/projects/project-1.png";
import project2 from "./assets/images/projects/project-2.webp";
import project3 from "./assets/images/projects/project-3.webp";
export const projects = [
  {
    id: 1,
    title: "فروشگاه آنلاین Rabbit",
    description:
      "فروشگاه آنلاین لباس با پنل مدیریت، پنل کاربری، فیلتر محصولات، جست وجو، احراز هویت و اتصال به درگاه پرداخت زیبال. بخش هایی مثل routing، سرچ بار، پرداخت و ذخیره سازی توکن با تصمیم های شخصی بازطراحی و پیاده سازی شده اند.",
    image: project1,
    tags: ["React", "TypeScript", "Redux", "Tailwind", "Node.js", "MongoDB"],
    repositoryLinks: [
      {
        label: "فرانت اند",
        href: "https://github.com/erfan-web/rabbit-frontend-ecommerce",
      },
      {
        label: "بک اند",
        href: "https://github.com/erfan-web/rabbit-backend-ecommerce",
      },
    ],
    demoUrl: "https://rabbit-frontend-ecommerce.vercel.app",
  },
  {
    id: 2,
    title: "ساختمان یار کرج",
    description:
      "MVP یک وب اپ سبک برای مدیریت ساختمان های ۱۰ تا ۵۰ واحدی در کرج؛ با تمرکز روی شفافیت شارژ، ثبت و پیگیری تعمیرات، اطلاع رسانی و تجربه ساده برای مدیر ساختمان و ساکنین. برای این پروژه علاوه بر پیاده سازی، مستندات UX و فرضیه های محصول هم آماده شده است.",
    image: project2,
    tags: ["React", "TypeScript", "Bootstrap", "UX/UI", "MVP"],
    repositoryLinks: [
      {
        label: "ریپازیتوری",
        href: "https://github.com/erfan-web/sakhtemanyar",
      },
    ],
    demoUrl: "https://sakhtemanyar.vercel.app",
  },
  {
    id: 3,
    title: "پورتفولیوی شخصی",
    description:
      "وب سایت شخصی برای معرفی مسیر کاری، مهارت ها، پروژه ها و راه های ارتباطی؛ طراحی شده با نگاه دقیق به UI/UX، دارک مود، ساختار RTL و پیاده سازی تمیز از روی Figma.",
    image: project3,
    tags: ["Vite", "React", "Tailwind", "Figma", "RTL"],
    repositoryLinks: [
      {
        label: "ریپازیتوری",
        href: "https://github.com/erfan-web/portfolio",
      },
    ],
    demoUrl: "#hero",
  },
];

export const socialsFooter = [
  {
    icon: FaLinkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/erfan-dev",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: "Github",
    href: "https://github.com/erfan-web",
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: "Telegram",
    href: "https://t.me/erfanahmadyii",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
];
