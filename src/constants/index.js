import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  placeholder_design,
} from "../assets";

export const navLinks = [
  {
    path: "/",
    title: "Start",
  },
  {
    path: "ueber",
    title: "Über",
  },
  {
    path: "posts",
    title: "Blog",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Lorem Ipsum Developer",
    company_name: "Lorem Company",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    ],
  },
  {
    title: "Lorem Ipsum Developer",
    company_name: "Lorem Company",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    ],
  },
  {
    title: "Lorem Ipsum Developer",
    company_name: "Lorem Company",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    ],
  },
  {
    title: "Lorem Ipsum Developer",
    company_name: "Lorem Company",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder_design,
    live_link: "https://tl-coaching.vercel.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem Epsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder_design,
    source_code_link: "https://github.com/",
  },
  {
    name: "Della Bepsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder_design,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
