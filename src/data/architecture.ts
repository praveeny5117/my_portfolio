export interface ArchitectureStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  corePrinciples: string[];
  toolsUsed: string[];
}

export const architectureSteps: ArchitectureStep[] = [
  {
    step: "Phase 01",
    number: "01",
    title: "Understand & Dissect",
    tagline: "Product vision, data models, and non-functional requirements.",
    description: "Before writing any code, I deeply interrogate the business domain, throughput requirements, tenant boundaries, and access rules. Defining contracts upfront prevents costly architectural pivots.",
    corePrinciples: [
      "Domain modeling & entity relationship mapping",
      "SLA, throughput, and concurrent user benchmarks",
      "Security & compliance requirements (RBAC, PII)",
      "Edge case identification & failure scenario analysis"
    ],
    toolsUsed: ["Architecture Whiteboarding", "Domain Modeling", "REST OpenAPI Specs"]
  },
  {
    step: "Phase 02",
    number: "02",
    title: "Architect & Design",
    tagline: "API-first contracts, database schemas, and state topology.",
    description: "Designing the system boundaries. I craft strict TypeScript interfaces, normalized/embedded MongoDB schemas, idempotent REST contracts, and component hierarchies for predictable state flow.",
    corePrinciples: [
      "API-first contract definition (request/response schemas)",
      "MongoDB compound indexing strategy upfront",
      "Clean separation of concern: controller, service, data tier",
      "Component hierarchy & state management architecture"
    ],
    toolsUsed: ["TypeScript Interfaces", "Mongoose Schemas", "Figma Design System"]
  },
  {
    step: "Phase 03",
    number: "03",
    title: "Build & Integrate",
    tagline: "Modular implementation with strong typing and reusable code.",
    description: "Writing maintainable, expressive code. Building robust Angular or React component trees, Express.js middleware stacks, JWT verification gates, and transactional third-party gateway integrations.",
    corePrinciples: [
      "Reusable, single-responsibility UI components",
      "Defensive backend controllers with strict validation",
      "Stateless JWT authentication and secure session cookies",
      "Atomic database mutations preventing race conditions"
    ],
    toolsUsed: ["Angular / React", "Node.js / Express", "MongoDB", "Tailwind CSS"]
  },
  {
    step: "Phase 04",
    number: "04",
    title: "Validate & Test",
    tagline: "Automated regression prevention and vulnerability hardening.",
    description: "Verifying reliability at every level. Testing endpoint contracts, edge case payloads, boundary validation, and role-based permission checks before anything reaches staging.",
    corePrinciples: [
      "Integration tests for critical API workflows",
      "Sanitizing user inputs against injection & XSS",
      "Stress testing rate limiters and auth token refresh",
      "Cross-browser and mobile viewport verification"
    ],
    toolsUsed: ["Postman Collections", "Jest / Vitest", "OWASP Security Checks"]
  },
  {
    step: "Phase 05",
    number: "05",
    title: "Deploy & Supervise",
    tagline: "Resilient cloud infrastructure with zero-downtime hot reloads.",
    description: "Deploying to production on hardened AWS EC2 instances. Configuring Nginx reverse proxy with SSL, PM2 cluster mode to utilize all CPU cores, and AWS S3 for secure asset streaming.",
    corePrinciples: [
      "Zero-downtime rolling deploys with PM2 cluster mode",
      "Nginx reverse proxy with TLS 1.3 & Gzip/Brotli",
      "Automated SSL renewal via Let's Encrypt Certbot",
      "Environment isolation (.env) and secret protection"
    ],
    toolsUsed: ["AWS EC2", "AWS S3", "PM2 Supervisor", "Nginx", "Git / GitHub Actions"]
  },
  {
    step: "Phase 06",
    number: "06",
    title: "Monitor & Optimize",
    tagline: "Data-driven performance tuning and proactive observation.",
    description: "Production is just the beginning. I monitor server metrics, diagnose query executionStats in MongoDB Compass, eliminate UI reflows, and optimize caching to maintain sub-second responsiveness.",
    corePrinciples: [
      "MongoDB query executionStats (COLLSCAN elimination)",
      "PM2 memory watchdog and automated crash restarts",
      "Frontend bundle analysis and asset preloading",
      "Lighthouse 90+ Core Web Vitals maintenance"
    ],
    toolsUsed: ["MongoDB Compass Profiler", "Chrome DevTools", "PM2 Monit", "Lighthouse"]
  }
];
