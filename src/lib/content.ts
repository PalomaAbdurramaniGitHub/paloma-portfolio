export const site = {
  name: "Paloma Abdurramani",
  role: "Data Engineer & Backend Developer",
  location: "Tirane, Albania",
  email: "palomaabdurramani@gmail.com",
  phone: "+355 69 755 9854",
  github: "https://github.com/PalomaAbdurramaniGitHub",
  linkedin: "https://www.linkedin.com/in/palomaabdurramani-040046234",
  resume: "/Paloma-Abdurramani-CV.pdf",
  tagline:
    "Reliable data systems and backend services — built for production.",
  summary:
    "I work at the intersection of data engineering and backend development: shaping how information is collected, transformed, stored, and served. Day to day that means Python and SQL pipelines, API and service design on Node.js, and AWS-backed infrastructure for auth, events, storage, and analytics. Much of my production work sits under client confidentiality — so this site focuses on the tools I build with and the practices I follow.",
};

export const focusAreas = [
  {
    index: "01",
    title: "Data engineering",
    description:
      "End-to-end data flows — collection, cleaning, transformation, and structured delivery for analytics and downstream products, including reports built on top of that data.",
  },
  {
    index: "02",
    title: "Backend systems",
    description:
      "APIs and services with clear contracts, solid data access layers, and production-minded reliability.",
  },
  {
    index: "03",
    title: "Cloud & analytics",
    description:
      "AWS architecture for storage, identity, event-driven workflows, and reporting surfaces wired into real products.",
  },
];

export const experience = [
  {
    role: "Data Engineer & Backend Developer",
    company: "Tegeria",
    period: "Feb 2025 — Present",
    featured: true,
    points: [
      "Own data processing and pipeline work across Python, SQL, and DynamoDB — from raw inputs to analytics-ready outputs used in recurring business reports.",
      "Design and maintain backend services and APIs alongside the data layer, reducing handoffs between ingestion, storage, and product-facing endpoints.",
      "Ship AWS workflows with Cognito, EventBridge, and QuickSight for identity, event-driven automation, and reporting dashboards stakeholders actually use.",
    ],
  },
  {
    role: "Software Engineer Intern — Taleas Program",
    company: "Tegeria",
    period: "Aug 2024 — Nov 2024",
    featured: true,
    points: [
      "Contributed across the MERN stack — backend services, API integration, and frontend delivery on production applications.",
      "Applied AWS while helping ship Interio, a live platform connecting users with furniture providers.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "iTEAM",
    period: "Dec 2022 — Feb 2023",
    featured: false,
    points: [
      "Built and customized WordPress sites with responsive HTML, CSS, and JavaScript.",
    ],
  },
  {
    role: "Data Entry Specialist — ERP",
    company: "OZZO Albania",
    period: "Jul 2022 — Oct 2022",
    featured: false,
    points: [
      "Maintained ERP data quality and supported reporting processes.",
    ],
  },
];

export const education = [
  {
    title: "BSc in Computer Science",
    place: "University of Tirana, Faculty of Natural Sciences",
    period: "Oct 2021 — Jul 2024",
    detail:
      "A Computer Science curriculum covering software engineering, algorithms and data structures, database systems, operating systems, computer networks, and system architecture. Additional focused coursework in object-oriented programming (classes, encapsulation, inheritance, polymorphism).",
  },
];

export const stack = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  backendData: [
    "Python",
    "Java",
    "Node.js",
    "SQL",
    "Pandas",
    "NumPy",
    "DynamoDB",
    "MongoDB",
    "PostgreSQL",
    "DAX",
    "ETL pipelines",
    "API design",
    "Data modeling",
  ],
  cloud: [
    "AWS Amplify",
    "S3",
    "Cognito",
    "EventBridge",
    "QuickSight",
    "Lambda",
    "API Gateway",
    "Lightsail",
    "Step Functions",
    "EC2",
  ],
  ai: ["Cursor", "GitHub Copilot", "ChatGPT", "Claude", "Prompt engineering"],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
