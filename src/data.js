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
    href: "#",
    color: `hover:text-pink-500 hover:border-pink-500/40`,
  },
  {
    icon: FaLinkedin,
    alt: "Linkedin",
    href: "#",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: "Github",
    href: "#",
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: "Telegram",
    href: "#",
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

import project1 from "./assets/images/projects/project-1.webp";
import project2 from "./assets/images/projects/project-2.webp";
import project3 from "./assets/images/projects/project-3.webp";
export const projects = [
  {
    id: 1,
    title: "داشبورد مدیریت",
    description:
      "یک رابط تمیز و واکنش گرا برای مدیریت داده ها و گزارش های روزانه.",
    image: project1,
    tags: ["React", "Tailwind"],
  },
  {
    id: 2,
    title: "وب سایت فروشگاهی",
    description: "طراحی صفحه محصول، سبد خرید و تجربه خرید ساده برای کاربران.",
    image: project2,
    tags: ["UI", "Frontend"],
  },
  {
    id: 3,
    title: "لندینگ شخصی",
    description: "صفحه معرفی حرفه ای با تمرکز روی سرعت، خوانایی و جزئیات بصری.",
    image: project3,
    tags: ["Vite", "Responsive"],
  },
];

export const socialsFooter = [
  {
    icon: FaLinkedin,
    alt: "Linkedin",
    href: "#",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: "Github",
    href: "#",
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: "Telegram",
    href: "#",
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
];