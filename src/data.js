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
} from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
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
} from 'react-icons/si';

export const navItems = [
  { id: 1, name: 'تماس', link: '#contact', icon: FaEnvelope, alt: 'contact' },
  {
    id: 2,
    name: 'پروژه ها',
    link: '#projects',
    icon: FaProjectDiagram,
    alt: 'projects',
  },
  { id: 3, name: 'مهارت ها', link: '#skills', icon: FaCode, alt: 'skills' },
  { id: 4, name: 'درباره من', link: '#about', icon: FaUser, alt: 'about' },
  { id: 5, name: 'خانه', link: '#hero', icon: FaHome, alt: 'hero' },
];

export const socialIcons = [
  {
    icon: FaInstagram,
    alt: 'Instagram',
    href: 'https://www.instagram.com/erfanahmadi.dev',
    color: `hover:text-pink-500 hover:border-pink-500/40`,
  },
  {
    icon: FaLinkedin,
    alt: 'Linkedin',
    href: 'https://www.linkedin.com/in/erfanahmadyi',
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: 'Github',
    href: 'https://github.com/erfan-web',
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: 'Telegram',
    href: 'https://t.me/erfanahmadyii',
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
];

export const skills = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Redux', icon: SiRedux },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Figma', icon: SiFigma },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'CSS', icon: IoLogoCss3 },
  { name: 'HTML', icon: IoLogoHtml5 },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'MongoDB', icon: SiMongodb },
];

import project2 from './assets/images/projects/madrese UIX.webp';
import project1 from './assets/images/projects/portfolio-cover.webp';
export const projects = [
  {
    id: 1,
    title: 'پورتفولیوی شخصی',
    description:
      'وب سایت شخصی برای معرفی مسیر کاری، مهارت ها، پروژه ها و راه های ارتباطی؛ طراحی شده با نگاه دقیق به UI/UX، دارک مود، ساختار RTL و پیاده سازی تمیز از روی Figma.',
    image: project1,
    tags: ['Vite', 'React', 'Tailwind', 'Figma', 'RTL'],
    repositoryLinks: [
      {
        label: 'ریپازیتوری',
        href: 'https://github.com/erfan-web/portfolio',
      },
    ],
    demoUrl: '#hero',
    desginLinks:
      'https://www.figma.com/design/GD4O9bnzEdTagnUgMEf0Ol/portfolio?node-id=0-1&t=HW2tI14StMTD4TT9-1',
  },
  {
    id: 2,
    title: 'مدرسه UIX',
    description:
      'پیاده‌سازی رابط کاربری وب‌سایت مدرسه UIX بر اساس طرح Figma، تمرکز اصلی من در این پروژه روی توسعه و استایل‌دهی UI بود. همچنین در طول پروژه، با کار عملی و مطالعه مستمر، با ساختار و مفاهیم Angular آشنا شدم و تجربه کار با این فریم‌ورک را به دست آوردم.',
    image: project2,
    tags: ['Angular', 'TypeScript', 'Bootstrap Grid', 'UX/UI', 'SCSS'],
    demoUrl: 'https://madrese-uix.com',
  },
];

export const socialsFooter = [
  {
    icon: FaLinkedin,
    alt: 'Linkedin',
    href: 'https://www.linkedin.com/in/erfanahmadyi',
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
  {
    icon: FaGithub,
    alt: 'Github',
    href: 'https://github.com/erfan-web',
    color: `hover:text-purple-500 hover:border-purple-500/40`,
  },
  {
    icon: FaTelegram,
    alt: 'Telegram',
    href: 'https://t.me/erfanahmadyii',
    color: `hover:text-blue-500 hover:border-blue-500/40`,
  },
];
