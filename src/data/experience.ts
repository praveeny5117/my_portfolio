export interface ExperienceItem {
  id: string;
  yearRange: string;
  startYear: string;
  endYear: string;
  role: string;
  company: string;
  companyLocation: string;
  type: string;
  summary: string;
  award?: string;
  technologies: string[];
  keyContributions: string[];
  metrics: { value: string; label: string }[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "lead-engineer-adamsbridge",
    yearRange: "2023 — Present",
    startYear: "2023",
    endYear: "Present",
    role: "Lead Engineer",
    company: "Adamsbridge",
    companyLocation: "Real Estate Sourcing & Healthcare Data Management",
    type: "Full-Time",
    award: "2x Spot Award Recipient — Honored twice for exceptional engineering leadership, delivering the zero-downtime .NET to MongoDB database migration, and driving a 50% application query speed boost.",
    summary: "Leading frontend and backend engineering teams end-to-end across high-scale Real Estate Sourcing and Healthcare Data Management platforms. Partnering with business stakeholders to translate requirements into secure, production-grade technical solutions.",
    technologies: [
      "Angular 18+",
      "Node.js 22+",
      "TypeScript",
      "MongoDB Aggregation",
      "MSSQL Migration",
      "Microservices",
      "AWS (EC2, S3, Amplify)",
      "Bitbucket & Jira"
    ],
    keyContributions: [
      "Honored with 2x Spot Awards for technical excellence, critical delivery, and driving core platform modernization.",
      "Designed and developed enterprise workflow applications using Angular, Node.js and MongoDB.",
      "Optimized backend APIs and MongoDB queries to significantly reduce response time for large data exports by 50%.",
      "Implemented reusable frontend components and modernized legacy UI components into standalone Angular architecture.",
      "Worked on production deployments, AWS infrastructure (EC2, S3, Amplify) and API integrations with PM2 and Nginx.",
      "Led migration of legacy .NET data layers to MongoDB, delivering a full MSSQL-to-MongoDB database migration with minimal downtime.",
      "Integrated microservices architecture into the platform, improving modularity, scalability, and independent deployability."
    ],
    metrics: [
      { value: "2x", label: "Spot Award Recipient" },
      { value: "50%", label: "Application Speed Boost" },
      { value: "0-Downtime", label: "MSSQL to MongoDB Migration" }
    ]
  },
  {
    id: "software-developer-tango-eye",
    yearRange: "2022 — 2023",
    startYear: "2022",
    endYear: "2023",
    role: "Software Developer",
    company: "Tango Eye",
    companyLocation: "AI-Driven Retail Analytics",
    type: "Full-Time",
    summary: "Engineered scalable, reliable software modules supporting real-time retail analytics platform. Implemented high-throughput RESTful APIs connecting intelligent camera streams with frontend analytical dashboards.",
    technologies: [
      "Angular",
      "Node.js",
      "JavaScript / TypeScript",
      "RESTful APIs",
      "MongoDB",
      "Git",
      "CI/CD Pipelines"
    ],
    keyContributions: [
      "Built and maintained scalable, reliable software modules supporting real-time analytics dashboards.",
      "Collaborated cross-functionally with UI/UX, QA, DevOps, and Product teams to define and ship features on schedule.",
      "Implemented RESTful APIs and seamlessly integrated backend microservices with frontend frameworks.",
      "Debugged and upgraded existing systems, resolving bottlenecks to improve performance and overall system stability.",
      "Participated in peer code reviews, contributing feedback that improved code quality and consistency."
    ],
    metrics: [
      { value: "Real-Time", label: "Analytics Pipeline" },
      { value: "Clean Code", label: "Structured Peer Reviews" },
      { value: "Cross-Func", label: "UI/UX & QA Collaboration" }
    ]
  },
  {
    id: "trainee-programmer-analytic-brains",
    yearRange: "2021 — 2022",
    startYear: "2021",
    endYear: "2022",
    role: "Trainee Programmer",
    company: "Analytic Brains Technology Pvt. Ltd.",
    companyLocation: "Chennai, India",
    type: "Full-Time",
    summary: "Contributed to design, coding, testing, and debugging across three core enterprise production applications (Customer 360, Valurite, and Degrader) under senior engineering guidance.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB / SQL",
      "HTML5 / CSS3",
      "Git"
    ],
    keyContributions: [
      "Contributed to design, coding, testing, and debugging across three production applications (Customer 360, Valurite, Degrader).",
      "Learned and applied core programming, database normalization, and software engineering concepts in a live production environment.",
      "Wrote clean, well-documented, maintainable code strictly in line with company coding standards.",
      "Collaborated with senior developers to troubleshoot issues and execute feature enhancements."
    ],
    metrics: [
      { value: "3", label: "Production Platforms Delivered" },
      { value: "100%", label: "Company Standard Adherence" },
      { value: "Foundation", label: "Full Stack Mastery" }
    ]
  }
];
