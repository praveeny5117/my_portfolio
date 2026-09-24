export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  iconKey: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full Stack Web Applications",
    tagline: "End-to-end modern web architectures engineered for reliability.",
    description: "From component-driven reactive frontends in React or Angular to resilient Node.js backends. I construct complete, production-ready web platforms with clean boundaries, strong typing, and intuitive UX.",
    deliverables: [
      "Responsive, accessible SPAs (React / Angular)",
      "High-throughput RESTful Node.js services",
      "End-to-end TypeScript type contracts",
      "Enterprise component libraries (Tailwind, PrimeNG)"
    ],
    techStack: ["React.js", "Angular", "TypeScript", "Node.js", "Express.js"],
    iconKey: "Layers"
  },
  {
    id: "saas-architecture",
    number: "02",
    title: "Multi-Tenant SaaS Systems",
    tagline: "Scalable business platforms with strict data isolation.",
    description: "Architecting cloud-native SaaS platforms that scale gracefully across thousands of organizations. Enforcing database-level tenant isolation, subscription lifecycles, role permissions, and usage analytics.",
    deliverables: [
      "Multi-tenant database partitioning strategies",
      "Role-Based Access Control (RBAC) matrices",
      "Subscription billing & webhook reconciliations",
      "Configurable organization onboarding flows"
    ],
    techStack: ["MongoDB", "Node.js", "Express.js", "Razorpay / Stripe", "AWS"],
    iconKey: "Boxes"
  },
  {
    id: "api-development",
    number: "03",
    title: "High-Throughput API Engineering",
    tagline: "Idempotent, secure, and documented RESTful microservices.",
    description: "Designing RESTful APIs following strict HTTP specifications, idempotent principles, rate limiting, and comprehensive OpenAPI documentation. Seamlessly connecting internal systems and external partners.",
    deliverables: [
      "RESTful API design and versioning",
      "Stateless JWT auth & refresh token rotation",
      "Strict schema validation & error handling",
      "OpenAPI / Swagger interactive documentation"
    ],
    techStack: ["Node.js", "Express.js", "JWT", "REST APIs", "Postman"],
    iconKey: "Network"
  },
  {
    id: "database-engineering",
    number: "04",
    title: "MongoDB Database Engineering",
    tagline: "Schema modeling, aggregation analytics, and query tuning.",
    description: "Deep MongoDB optimization from schema modeling (embedded vs referenced) to sub-second aggregation pipelines ($facet, $lookup, $unwind). Identifying slow queries and building precise compound indexing.",
    deliverables: [
      "Scalable document schema design & migrations",
      "Complex aggregation pipeline analytics",
      "Compound, partial, and TTL index tuning",
      "ExecutionStats profiling & latency elimination"
    ],
    techStack: ["MongoDB", "Aggregation Pipelines", "Mongoose", "Index Tuning"],
    iconKey: "Database"
  },
  {
    id: "cloud-deployment",
    number: "05",
    title: "AWS Cloud & DevOps Deployment",
    tagline: "Hardened Linux environments with zero-downtime supervision.",
    description: "Provisioning resilient cloud environments on AWS EC2, configuring Nginx reverse proxies with SSL termination, PM2 cluster mode for zero-downtime hot reloads, and S3 secure presigned document storage.",
    deliverables: [
      "AWS EC2 instance provisioning & VPC security",
      "Nginx reverse proxy, gzip, and SSL Let's Encrypt",
      "PM2 multi-core cluster orchestration",
      "AWS S3 bucket security policies & presigned URLs"
    ],
    techStack: ["AWS EC2", "AWS S3", "Nginx", "PM2", "AWS Amplify", "Git"],
    iconKey: "Cloud"
  },
  {
    id: "performance-optimization",
    number: "06",
    title: "Performance & Systems Optimization",
    tagline: "Eliminating bottlenecks across network, CPU, and rendering.",
    description: "Systematic performance profiling to boost Lighthouse scores, reduce Node.js memory footprints, eliminate database full-collection scans, and shrink frontend bundle sizes for rapid global delivery.",
    deliverables: [
      "API response time reduction & caching strategies",
      "MongoDB execution plan diagnosis (IXSCAN vs COLLSCAN)",
      "Frontend bundle splitting & lazy loading",
      "Core Web Vitals & Lighthouse 90+ optimization"
    ],
    techStack: ["Chrome DevTools", "Node Profiling", "MongoDB Compass", "Vite"],
    iconKey: "Zap"
  }
];
