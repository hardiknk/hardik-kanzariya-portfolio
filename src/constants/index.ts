import type {
  TNavLink,
  TService,
  TExperience,
  TProject,
  TSkillGroup,
} from "../types";

import { mobile, backend, creator, web } from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Laravel Applications",
    icon: web,
  },
  {
    title: "REST & Real-time APIs",
    icon: mobile,
  },
  {
    title: "Backend Optimization",
    icon: backend,
  },
  {
    title: "Cloud & Integrations",
    icon: creator,
  },
];

const skillGroups: TSkillGroup[] = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "Real-time chat", "Security"],
  },
  {
    title: "Data & payments",
    skills: ["MySQL", "SQL Server", "Stripe", "Third-party APIs"],
  },
  {
    title: "Cloud & delivery",
    skills: ["AWS S3", "AWS EC2", "Route 53", "AWS RDS", "GitHub", "GitLab"],
  },
  {
    title: "Workflow",
    skills: ["Postman", "MySQL Workbench", "VS Code", "Basecamp", "Trello", "Slack"],
  },
  {
    title: "AI-assisted development",
    skills: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    title: "Environments",
    skills: ["macOS", "Ubuntu", "Windows"],
  },
];

const experiences: TExperience[] = [
  {
    title: "Laravel Developer",
    companyName: "Yudiz Solutions — Ahmedabad",
    marker: "YS",
    date: "2022 - 2026",
    points: [
      "Developed and maintained scalable web applications with Laravel.",
      "Built RESTful APIs for mobile app teams and implemented real-time chat using sockets.",
      "Collaborated with cross-functional teams to deliver projects on schedule.",
      "Migrated 12 applications to Laravel, improving maintainability and performance.",
    ],
  },
  {
    title: "Laravel Developer",
    companyName: "Alakmalak Technologies",
    marker: "AT",
    date: "2021",
    points: [
      "Worked on administration panels and core PHP applications.",
      "Built practical foundations in Laravel application development and backend workflows.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Scalable Laravel Applications",
    description:
      "Maintainable web applications designed around clear domain logic, secure access, and reliable performance as products grow.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "security",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "APIs & Real-time Features",
    description:
      "REST endpoints, mobile-app data exchange, socket-based chat, and third-party integrations built for dependable communication.",
    tags: [
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
      {
        name: "sockets",
        color: "green-text-gradient",
      },
      {
        name: "integrations",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Payments, Data & Cloud",
    description:
      "Stripe payment workflows, relational databases, and AWS infrastructure spanning storage, compute, DNS, and managed databases.",
    tags: [
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, skillGroups, experiences, projects };
