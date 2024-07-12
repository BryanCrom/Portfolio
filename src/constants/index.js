import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  nodejs,
  git,
  paknsave,
  threejs,
  java,
  sql,
  python,
  linux,
  cplusplus,
  csharp,
  rstudio,
  tictactoe,
  snakegame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software engineering Major",
    icon: web,
  },
  {
    title: "Computer Science Minor",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Amateur Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Rstudio",
    icon: rstudio,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Grocery Assistant",
    company_name: "PAK'nSAVE",
    icon: paknsave,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2023",
    points: [
      "Responsible for ensuring stock was in the right place and in the right condition for sale.",
      "Daily coordination with a team of people.",
      "Solving customer inquiries.",
      "Strong self-management skills when the team is spread thin on busy days such as Christmas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tic Tac Toe",
    description:
      "Java based Tic Tac Toe project with a Java GUI that can restart the game once the previous one has ended. Built with IntelliJ and with OOP principles.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java GUI",
        color: "green-text-gradient",
      },
      {
        name: "IntelliJ",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/BryanCrom/TicTacToe",
  },
  {
    name: "Snake Game",
    description:
      "Java project of an abstract version of the snake game i made for my data structures course so it displays use of data structures and Java GUI. Made in NetBeans",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java GUI",
        color: "green-text-gradient",
      },
      {
        name: "NetBeans",
        color: "pink-text-gradient",
      },
    ],
    image: snakegame,
    source_code_link: "https://github.com/BryanCrom/Snake_Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
