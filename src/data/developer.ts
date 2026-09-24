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
  name: "Praveen Yonas",
  role: "Full Stack Engineer / Senior Full Stack Developer",
  tagline: "DESIGN. BUILD. OPTIMIZE. DEPLOY.",
  headline: "Building Scalable Web Applications & Enterprise Platforms",
  subheadline: "Full Stack Engineer specializing in Angular, React, Node.js, MongoDB and AWS. I build production-ready applications, APIs and cloud solutions with a focus on performance, scalability and maintainability.",
  location: "Kallakurichi, Tamil Nadu, India",
  phone: "+91 96268 30829",
  email: "yonaspraveen@gmail.com",
  status: "Available for Senior Full Stack & Lead Engineering Roles",
  experienceYears: "5+ Years",
  experienceCount: 5,
  completedProjects: "20+",
  coreTechCount: "12+",
  heroTags: [
    "Angular",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS"
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
      value: "5+ Years",
      label: "Software Development Experience",
      subtext: "Delivering enterprise workflows, APIs, and cloud-native SaaS systems"
    },
    {
      value: "50%",
      label: "API Response Speed Boost",
      subtext: "Achieved via MongoDB aggregation redesign and compound indexing"
    },
    {
      value: "Multi-Tenant",
      label: "SaaS Product Architecture",
      subtext: "Building School ERP with strict tenant isolation, RBAC & payment automations"
    },
    {
      value: "99.98%",
      label: "Deployment Availability",
      subtext: "Production AWS EC2, S3, PM2 process management & Nginx reverse proxies"
    }
  ],
  terminalCommands: [
    { command: "whoami", output: "Praveen Yonas — Full Stack Engineer / Senior Full Stack Developer (5+ YOE) | Kallakurichi, TN, India" },
    { command: "stack --primary", output: [
      "● Frontend: Angular 18+, React.js, TypeScript, JavaScript, HTML5/CSS3, Tailwind CSS",
      "● Backend:  Node.js, Express.js, REST APIs, Microservices, JWT Auth, RBAC",
      "● Database: MongoDB (Aggregation Pipelines & Indexing), SQL, Data Modeling",
      "● Cloud:    AWS (EC2, S3, Amplify), PM2, Nginx, Git, CI/CD Automated Pipelines"
    ] },
    { command: "impact --summary", output: [
      "⚡ 50% application response speed improvement through MongoDB query optimization and indexing redesign",
      "⚡ Architected multi-tenant School ERP SaaS with zero-leakage data isolation and automated fee reconciliation",
      "⚡ Modernized enterprise workflow applications with reusable frontend components and microservice integrations",
      "⚡ Maintained 99.98% production uptime across AWS cloud deployments"
    ] },
    { command: "status", output: "● Available for Full-Time Senior / Lead Roles and Scalable Contract Engagements", highlight: true },
    { command: "contact", output: "Email: yonaspraveen@gmail.com | Phone: +91 96268 30829 | LinkedIn: linkedin.com/in/praveen-y-751125178" }
  ]
};
