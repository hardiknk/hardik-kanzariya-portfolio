import type { TNavLink, TService, TExperience, TProject, TSkillGroup } from '../types';

import { mobile, backend, creator, web } from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Laravel Applications',
    icon: web,
  },
  {
    title: 'REST & Real-time APIs',
    icon: mobile,
  },
  {
    title: 'Backend Optimization',
    icon: backend,
  },
  {
    title: 'Cloud & Integrations',
    icon: creator,
  },
];

const skillGroups: TSkillGroup[] = [
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'REST APIs', 'Real-time chat', 'Security'],
  },
  {
    title: 'Data & payments',
    skills: ['MySQL', 'SQL Server', 'Stripe', 'Third-party APIs'],
  },
  {
    title: 'Cloud & delivery',
    skills: ['AWS S3', 'AWS EC2', 'Route 53', 'AWS RDS', 'GitHub', 'GitLab'],
  },
  {
    title: 'Workflow',
    skills: ['Postman', 'MySQL Workbench', 'VS Code', 'Basecamp', 'Trello', 'Slack'],
  },
  {
    title: 'AI-assisted development',
    skills: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    title: 'Environments',
    skills: ['macOS', 'Ubuntu', 'Windows'],
  },
];

const experiences: TExperience[] = [
  {
    title: 'Senior Web Developer',
    companyName: 'Yudiz Solutions — Ahmedabad',
    marker: 'YS',
    date: 'Feb 2022 - May 2026',
    points: [
      'Developed and maintained scalable web applications with Laravel.',
      'Built RESTful APIs for mobile app teams and implemented real-time chat using sockets.',
      'Supported team delivery through task assignment, junior-developer mentoring, pull-request reviews, and cross-functional collaboration.',
      'Migrated 12 applications to Laravel, improving maintainability and performance.',
    ],
  },
  {
    title: 'Junior Laravel Developer',
    companyName: 'Alakmalak Technologies',
    marker: 'AT',
    date: '2021',
    points: [
      'Worked on administration panels and core PHP applications.',
      'Built practical foundations in Laravel application development and backend workflows.',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'AI-Assisted Collaborative Writing Platform',
    category: 'AI-assisted collaborative writing platform',
    description:
      'A mobile-first platform where users create digital books and write them collaboratively through controlled, turn-based contributions.',
    responsibilities: [
      'Developed the Laravel administration panel and REST APIs consumed by the mobile application; the mobile client was handled by a separate frontend team.',
      'Implemented book settings for contributor count, writing duration, contribution limits, and writing rounds.',
      'Built the turn-based contribution workflow and book-owner editing controls.',
      'Integrated the OpenAI API to generate story content from a book title and contributor descriptions.',
    ],
    challenge:
      'Keeping every contributor in the correct writing sequence while enforcing time, round, and content limits across a shared book.',
    outcome:
      'Delivered a structured collaborative-writing workflow with owner moderation and AI-assisted story generation.',
    tags: [
      { name: 'Laravel' },
      { name: 'REST APIs' },
      { name: 'Mobile APIs' },
      { name: 'OpenAI API' },
    ],
  },
  {
    name: 'Subscription Learning & Video Platform',
    category: 'Subscription-based learning platform',
    description:
      'A mobile learning platform offering multiple subscription-based courses with video lectures, progress tracking, referrals, and direct communication with administrators.',
    responsibilities: [
      'Developed the Laravel admin panel and REST APIs consumed by the mobile application; the mobile client was handled by a separate frontend team.',
      'Implemented course, lecture, subscription, progress, and referral-reporting workflows.',
      'Built real-time socket communication between users and administrators.',
      'Created a custom roles and permissions implementation without relying on a third-party package.',
      'Implemented chunked video uploads to Amazon S3 and supported deployment on AWS.',
    ],
    challenge:
      'Large lecture videos exceeded standard PHP request and upload limits, making single-request uploads unreliable.',
    outcome:
      'Enabled reliable large-video delivery by uploading files in smaller chunks while preserving subscription-based course access.',
    tags: [
      { name: 'Laravel' },
      { name: 'Mobile APIs' },
      { name: 'WebSockets' },
      { name: 'AWS S3' },
      { name: 'Chunked uploads' },
    ],
  },
  {
    name: 'Location-Based Sports Coaching Platform',
    category: 'Location-based, multi-portal sports coaching platform',
    description:
      'A platform connecting students with nearby sports coaching centres through separate student, coaching-centre, staff, and super-admin applications.',
    responsibilities: [
      'Developed the shared Laravel backend and REST APIs consumed by the mobile application, along with the Blade-based administration portals.',
      'Converted static HTML and CSS designs into dynamic Laravel Blade interfaces.',
      'Implemented centre registration and approval, sport and distance filtering, enrolment, attendance, activities, and video workflows.',
      'Built Razorpay fee collection, booking-based and standard commission calculations, and centre settlement workflows.',
      'Integrated Amazon S3 for videos and Firebase Cloud Messaging for push notifications.',
      'Mentored a junior developer through task assignment, service-pattern guidance, reusable helpers, debugging, and GitHub pull-request reviews.',
    ],
    challenge:
      'Maintaining consistent data and business workflows across independently accessed portals with separate URLs, dashboards, and authentication systems.',
    outcome:
      'Delivered one connected platform for discovery, approval, payments, commissions, attendance, media, staff operations, and student progress.',
    tags: [
      { name: 'Laravel' },
      { name: 'Blade' },
      { name: 'Mobile APIs' },
      { name: 'Razorpay' },
      { name: 'AWS S3' },
      { name: 'Firebase' },
      { name: 'Haversine' },
    ],
  },
];

export { services, skillGroups, experiences, projects };
