export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'cloud' | 'devops';
  level: number; // 1-100
  experience: string;
  description: string;
  highlighted?: boolean;
  related?: string[];
  iconKey: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Core Languages",
    description: "Strong typing, asynchronous runtime mastery, and object-oriented architecture",
    skills: [
      {
        name: "TypeScript",
        category: "languages",
        level: 96,
        experience: "5.5+ yrs",
        description: "Strict end-to-end typing, generic interfaces, contract sharing across Angular and Node.js microservices, and AST design.",
        highlighted: true,
        related: ["Angular 18+", "Node.js 22+", "JavaScript"],
        iconKey: "Code2"
      },
      {
        name: "JavaScript (ES6+)",
        category: "languages",
        level: 98,
        experience: "5.5+ yrs",
        description: "Deep event loop comprehension, asynchronous I/O, Promises, Web Workers, and high-performance DOM manipulation.",
        highlighted: true,
        related: ["TypeScript", "Node.js 22+"],
        iconKey: "FileCode"
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Engineering",
    description: "Component-driven, reactive, data-dense enterprise user interfaces",
    skills: [
      {
        name: "Angular 18+",
        category: "frontend",
        level: 98,
        experience: "5.5+ yrs",
        description: "Core strength: Standalone components, Signals, RxJS reactive state streams, NgRx, lazy loaded routing, and enterprise architecture.",
        highlighted: true,
        related: ["TypeScript", "PrimeNG", "Tailwind CSS"],
        iconKey: "Layers"
      },
      {
        name: "PrimeNG",
        category: "frontend",
        level: 92,
        experience: "4+ yrs",
        description: "Data-dense enterprise tables, server-side pagination, complex filters, dynamic dialogs, and interactive dashboards.",
        related: ["Angular 18+"],
        iconKey: "LayoutGrid"
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        level: 94,
        experience: "4+ yrs",
        description: "Modern design tokens, responsive layouts, sleek dark modes, micro-interactions, and component modularity.",
        related: ["Angular 18+"],
        iconKey: "Sparkles"
      },
      {
        name: "HTML5 & CSS3",
        category: "frontend",
        level: 95,
        experience: "5.5+ yrs",
        description: "Semantic layouts, WCAG 2.1 AA accessibility, CSS Grid, Flexbox, responsive fluid viewports, and CSS custom properties.",
        related: ["Angular 18+"],
        iconKey: "Globe"
      }
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    description: "High-throughput RESTful services, microservices, and distributed logic",
    skills: [
      {
        name: "Node.js 22+",
        category: "backend",
        level: 96,
        experience: "5.5+ yrs",
        description: "Asynchronous event-driven runtimes, cluster orchestration, stream processing, worker threads, and memory tuning.",
        highlighted: true,
        related: ["RESTful API Design", "MongoDB", "Microservices"],
        iconKey: "Server"
      },
      {
        name: "RESTful API Design",
        category: "backend",
        level: 98,
        experience: "5.5+ yrs",
        description: "Idempotent resource endpoints, OpenAPI / Swagger specifications, JWT security, pagination, and high-concurrency controllers.",
        highlighted: true,
        related: ["Node.js 22+", "Express.js"],
        iconKey: "Network"
      },
      {
        name: "Microservices Architecture",
        category: "backend",
        level: 92,
        experience: "4+ yrs",
        description: "Decoupled domain services, independent deployability, inter-service API communications, and scalable business logic.",
        highlighted: true,
        related: ["Node.js 22+", "Docker", "AWS EC2"],
        iconKey: "Cpu"
      },
      {
        name: "Express.js",
        category: "backend",
        level: 95,
        experience: "5.5+ yrs",
        description: "Modular route controllers, error handling middleware, rate limiting, request validation, and CORS security.",
        related: ["Node.js 22+", "RESTful API Design"],
        iconKey: "Server"
      }
    ]
  },
  {
    id: "database",
    name: "Databases & Migrations",
    description: "Query tuning, 50% response speed optimization, and schema migrations",
    skills: [
      {
        name: "MongoDB",
        category: "database",
        level: 98,
        experience: "5.5+ yrs",
        description: "Core specialization: Re-architected query logic and indexing strategies yielding a 50% improvement in application response times.",
        highlighted: true,
        related: ["MongoDB Aggregation", "Indexing Strategy", "Node.js 22+"],
        iconKey: "Database"
      },
      {
        name: "MongoDB Aggregation & Indexing",
        category: "database",
        level: 96,
        experience: "5.5+ yrs",
        description: "Compound indexes, executionStats profiling, eliminating COLLSCAN, and complex multi-stage pipelines ($facet, $lookup, $unwind).",
        highlighted: true,
        related: ["MongoDB", "Query Optimization"],
        iconKey: "Zap"
      },
      {
        name: "MSSQL",
        category: "database",
        level: 88,
        experience: "3+ yrs",
        description: "Relational schema design, stored procedures, joins, transactions, and full-scale data extraction pipelines.",
        related: ["Database Migration", "PostgreSQL"],
        iconKey: "Database"
      },
      {
        name: "PostgreSQL",
        category: "database",
        level: 86,
        experience: "3+ yrs",
        description: "ACID transactions, relational constraints, JSONB queries, indexing, and connection pooling.",
        related: ["MSSQL", "MongoDB"],
        iconKey: "Database"
      },
      {
        name: "MSSQL to MongoDB Migration",
        category: "database",
        level: 94,
        experience: "Expert",
        description: "Led legacy .NET MSSQL-to-MongoDB database migrations, modernizing data layer architecture with minimal downtime.",
        highlighted: true,
        related: ["MongoDB", "MSSQL"],
        iconKey: "RefreshCw"
      }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    description: "AWS cloud environments, process supervision, and reverse proxies",
    skills: [
      {
        name: "AWS EC2",
        category: "cloud",
        level: 92,
        experience: "4+ yrs",
        description: "Linux server provisioning, security group policies, PM2 cluster hosting, and production environment hardening.",
        highlighted: true,
        related: ["AWS S3", "Nginx", "PM2"],
        iconKey: "Cloud"
      },
      {
        name: "AWS S3",
        category: "cloud",
        level: 92,
        experience: "4+ yrs",
        description: "Presigned URL generation for secure document streaming, access policies, CORS rules, and encrypted asset storage.",
        highlighted: true,
        related: ["AWS EC2", "AWS Amplify"],
        iconKey: "HardDrive"
      },
      {
        name: "AWS Amplify",
        category: "cloud",
        level: 90,
        experience: "3+ yrs",
        description: "Continuous automated deployment for modern frontend SPAs, preview branches, and SSL termination.",
        related: ["AWS S3", "CI/CD Pipelines"],
        iconKey: "CloudLightning"
      },
      {
        name: "Nginx & PM2",
        category: "cloud",
        level: 92,
        experience: "5+ yrs",
        description: "Reverse proxy routing, SSL Let's Encrypt certificates, Gzip/Brotli compression, and multi-core process clustering with zero downtime.",
        highlighted: true,
        related: ["AWS EC2", "Node.js 22+"],
        iconKey: "Shield"
      }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Collaboration",
    description: "Automated delivery pipelines, code reviews, and enterprise collaboration",
    skills: [
      {
        name: "CI/CD Pipelines",
        category: "devops",
        level: 92,
        experience: "4+ yrs",
        description: "Automated test suites, build pipelines, artifact creation, and automated production deployments.",
        highlighted: true,
        related: ["Git", "Bitbucket", "AWS Amplify"],
        iconKey: "RefreshCw"
      },
      {
        name: "Git & GitHub",
        category: "devops",
        level: 96,
        experience: "5.5+ yrs",
        description: "Branching strategies, interactive rebasing, pull request governance, semantic versioning, and GitHub Actions.",
        highlighted: true,
        related: ["Bitbucket", "CI/CD Pipelines"],
        iconKey: "GitBranch"
      },
      {
        name: "Bitbucket & Jira",
        category: "devops",
        level: 95,
        experience: "5+ yrs",
        description: "Enterprise source control workflows, Jira sprint planning, backlog grooming, and technical delivery tracking.",
        related: ["Git & GitHub"],
        iconKey: "Share2"
      }
    ]
  }
];

// Central ecosystem graph nodes for visual interaction
export interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  role: string;
  x: number;
  y: number;
  highlight?: boolean;
}

export interface EcosystemEdge {
  from: string;
  to: string;
  label?: string;
}

export const ecosystemNodes: EcosystemNode[] = [
  { id: "angular", label: "Angular 18+", category: "Frontend", role: "Standalone & Signals Architecture", x: 25, y: 22, highlight: true },
  { id: "typescript", label: "TypeScript", category: "Language", role: "End-to-End Type Safety", x: 50, y: 22, highlight: true },
  { id: "node", label: "Node.js 22+", category: "Backend", role: "High-Throughput Microservices", x: 75, y: 22, highlight: true },
  { id: "mongodb", label: "MongoDB", category: "Database", role: "50% Optimized Aggregations & Indexes", x: 50, y: 55, highlight: true },
  { id: "mssql", label: "MSSQL", category: "Database", role: "Migrated to MongoDB Architecture", x: 18, y: 55 },
  { id: "postgres", label: "PostgreSQL", category: "Database", role: "Relational Queries & ACID", x: 82, y: 55 },
  { id: "aws", label: "AWS Cloud", category: "Infrastructure", role: "EC2, S3, Amplify & Automated Deploys", x: 50, y: 85, highlight: true },
  { id: "cicd", label: "CI/CD Pipelines", category: "DevOps", role: "Automated Delivery & Git/Bitbucket", x: 80, y: 85 }
];

export const ecosystemEdges: EcosystemEdge[] = [
  { from: "angular", to: "typescript", label: "Angular Core" },
  { from: "typescript", to: "node", label: "Shared Contracts" },
  { from: "node", to: "mongodb", label: "50% Query Tuning" },
  { from: "mssql", to: "mongodb", label: "Legacy Data Migration" },
  { from: "node", to: "postgres", label: "Relational Stores" },
  { from: "mongodb", to: "aws", label: "Cloud Document Store" },
  { from: "node", to: "aws", label: "EC2 & PM2 Deployment" },
  { from: "aws", to: "cicd", label: "Automated Releases" }
];
