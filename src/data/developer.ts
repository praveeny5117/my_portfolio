export interface DeveloperProfile {
  name: string;
  tagline: string;
  role: string;
  headline: string;
  subheadline: string;
  location: string;
  phone: string;
  email: string;
  status: string;
  experienceYears: string;
  experienceCount: number;
  completedProjects: string;
  coreTechCount: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  heroTags: string[];
  resumeUrl: string;
  education: {
    degree: string;
    institution: string;
    score: string;
    period: string;
  }[];
  terminalCommands: {
    command: string;
    output: string | string[];
    highlight?: boolean;
  }[];
}

export const developerData: DeveloperProfile = {
  name: "Praveen Y",
  role: "Lead Full Stack Engineer",
  tagline: "BUILDING DIGITAL SYSTEMS THAT SCALE.",
  headline: "50% application response speed improvement through MongoDB query optimization and indexing redesign.",
  subheadline: "5.5+ years designing, building, and leading delivery of scalable web applications across Real Estate Sourcing, Retail Analytics, and Healthcare Data Management.",
  location: "Kallakurichi, Tamil Nadu, India",
  phone: "+91 96268 30829",
  email: "yonaspraveen@gmail.com",
  status: "Available for Lead & Senior Engineering Roles",
  experienceYears: "5.5+",
  experienceCount: 5.5,
  completedProjects: "24+",
  coreTechCount: "12+",
  heroTags: [
    "5.5+ Years Experience",
    "Lead Full Stack Engineer",
    "Angular 18+ & Node.js 22+",
    "MongoDB Query Optimization"
  ],
  resumeUrl: "/Praveen.pdf",
  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "IGNOU",
      score: "71%",
      period: "2021 – 2023"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Thiruvalluvar University",
      score: "65%",
      period: "2017 – 2020"
    }
  ],
  stats: [
    {
      value: "50%",
      label: "Speed Improvement",
      subtext: "Achieved via MongoDB query logic & indexing redesign"
    },
    {
      value: "5.5+",
      label: "Years Experience",
      subtext: "Delivering real estate, retail analytics & healthcare platforms"
    },
    {
      value: "100%",
      label: "MSSQL to Mongo Migration",
      subtext: "Successfully led legacy data layer modernization with minimal downtime"
    },
    {
      value: "18+ / 22+",
      label: "Angular & Node Versions",
      subtext: "Modern standalone architecture & high-throughput REST APIs"
    }
  ],
  terminalCommands: [
    { command: "whoami", output: "Praveen Y — Lead Full Stack Engineer (5.5+ YOE) | Kallakurichi, Tamil Nadu, India" },
    { command: "stack --core", output: [
      "● Frontend: Angular 18+, TypeScript, PrimeNG, Tailwind CSS, HTML5/CSS3",
      "● Backend:  Node.js 22+, Express.js, RESTful API Design, Microservices",
      "● Database: MongoDB (Aggregation & Indexing), MSSQL, PostgreSQL, Data Migration",
      "● Cloud:    AWS (EC2, S3, Amplify), Nginx, PM2, CI/CD Automated Pipelines"
    ] },
    { command: "impact --stats", output: [
      "⚡ 50% application response time reduction via MongoDB query redesign",
      "⚡ Full legacy .NET data layer & MSSQL-to-MongoDB migration delivered with minimal downtime",
      "⚡ Microservices architecture integration for independent deployability",
      "⚡ Mentored teams, enforced structured code reviews, and delivered production systems"
    ] },
    { command: "status", output: "● Available for technical leadership and senior engineering engagements", highlight: true },
    { command: "contact", output: "Email: yonaspraveen@gmail.com | Phone: +91 96268 30829 | LinkedIn: linkedin.com/in/praveen-y" }
  ]
};
