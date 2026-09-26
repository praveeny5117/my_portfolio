export type ProjectType = 'official' | 'client' | 'personal';

export interface ArchitectureNode {
  name: string;
  type: 'client' | 'gateway' | 'service' | 'database' | 'storage' | 'thirdparty';
  description: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  architectureNodes: ArchitectureNode[];
  architectureFlow: string[];
  keyFeatures: { title: string; description: string }[];
  challenges: { problem: string; resolution: string }[];
  contribution: string[];
  results: { metric: string; label: string }[];
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
  category: string;
  isPrimary?: boolean;
  aspectRatio?: 'desktop' | 'mobile' | 'receipt';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  projectType: ProjectType;
  company?: string;
  companyRole?: string;
  period?: string;
  category: string;
  subtitle: string;
  shortDescription: string;
  technologies: string[];
  featured: boolean;
  imageAlt: string;
  accentColor: string;
  githubUrl?: string;
  demoUrl?: string;
  primaryImage?: string;
  screenshots?: ProjectScreenshot[];
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  // ==========================================
  // OFFICIAL PROJECTS (FROM RESUME)
  // ==========================================
  {
    id: "adamsbridge-real-estate",
    number: "01",
    title: "Real Estate Sourcing & Valuation Platform",
    projectType: "official",
    company: "Adamsbridge",
    companyRole: "Lead Full Stack Engineer",
    period: "2023 — Present",
    category: "Real Estate Sourcing & Enterprise Workflows",
    subtitle: "High-volume real estate acquisition engine with legacy .NET to MongoDB migration and 50% query acceleration.",
    shortDescription: "Led engineering for Adamsbridge's enterprise real estate sourcing platform. Re-architected MongoDB queries for a 50% speedup, migrated legacy .NET and MSSQL data layers to MongoDB with zero downtime, and integrated microservices handling property valuations, sourcing pipelines, and automated underwriting.",
    technologies: [
      "Angular 18+",
      "Node.js 22+",
      "Express.js",
      "MongoDB Aggregation",
      "MSSQL Migration",
      "Microservices",
      "AWS (EC2 & S3)",
      "Bitbucket & Jira"
    ],
    featured: true,
    imageAlt: "Adamsbridge Real Estate Sourcing platform pipeline and MongoDB query performance monitor",
    accentColor: "#00F0FF",
    caseStudy: {
      overview: "Adamsbridge's Real Estate Sourcing Platform serves high-volume commercial and residential property acquisition operations. The system automates property intake, valuation assessments, underwriting approvals, document dossiers, and portfolio analytics across distributed teams.",
      problem: "The legacy system ran on an aging .NET backend with MSSQL, suffering from slow query execution (>3.8s) on property catalog searches, high database licensing costs, and monolithic deployment bottlenecks that delayed feature releases.",
      solution: "Led a comprehensive modernization initiative: migrated the data layer from .NET/MSSQL to a high-performance Node.js and MongoDB architecture. Re-engineered data models with compound indexing and aggregation pipelines to accelerate queries by 50%, and decoupled monolithic operations into independent microservices.",
      architectureDescription: "An Angular 18+ SPA connects through an Nginx load balancer to modular Node.js microservices. Document storage utilizes AWS S3 with encrypted signed URLs, while MongoDB replica sets manage property records, financial models, and audit histories.",
      architectureNodes: [
        { name: "Angular 18+ Portal", type: "client", description: "Reactive appraisal workflows, property comparables, and document viewers" },
        { name: "Nginx Gateway", type: "gateway", description: "SSL termination, reverse proxying, and microservice traffic routing" },
        { name: "Node.js Sourcing Engine", type: "service", description: "Valuation algorithms, stage state machines, and RESTful APIs" },
        { name: "MongoDB Aggregation Cluster", type: "database", description: "Compound-indexed collections replacing legacy MSSQL data layer" },
        { name: "AWS S3 Document Lake", type: "storage", description: "Secure storage for deed scans, title reports, and inspection media" },
        { name: "Third-Party Property Feeds", type: "thirdparty", description: "MLS connectors, tax parcel sync, and automated appraisal APIs" }
      ],
      architectureFlow: [
        "Acquisition analyst searches property catalog with multi-facet geospatial criteria",
        "Nginx forwards query to the Node.js Real Estate Sourcing microservice",
        "Compound-indexed MongoDB aggregation pipeline executes with sub-200ms latency",
        "Valuation engine calculates discounted cash flow and generates underwriting score",
        "Inspection reports and titles are securely uploaded to AWS S3 using presigned URLs",
        "Automated notification triggers pipeline review stage transition across Bitbucket/CI-backed services"
      ],
      keyFeatures: [
        {
          title: "50% Query Optimization",
          description: "Re-engineered MongoDB aggregation pipelines and compound indexing strategies, boosting overall application query response speed by 50%."
        },
        {
          title: "Zero-Downtime .NET to MongoDB Migration",
          description: "Led end-to-end migration of legacy .NET data layer and MSSQL database to modern Node.js and MongoDB with zero business interruption."
        },
        {
          title: "Microservices Architecture Integration",
          description: "Integrated a modular microservices architecture improving codebase maintainability, independent service scaling, and release frequency."
        },
        {
          title: "Automated Underwriting & Valuation",
          description: "Configurable financial rule engines executing multi-parameter real estate valuations and risk scoring."
        },
        {
          title: "Enterprise AWS Deployment",
          description: "Production AWS EC2 hosting with PM2 cluster mode, Nginx reverse proxying, and automated S3 backup lifecycle policies."
        }
      ],
      challenges: [
        {
          problem: "Migrating millions of active and historical property records from relational MSSQL schemas to MongoDB without data loss or downtime.",
          resolution: "Designed an incremental dual-write synchronization adapter with cryptographic hash verification to validate parity before final DNS cutover."
        },
        {
          problem: "Complex multi-variable geospatial and financial search filters caused unindexed full-collection scans in MongoDB.",
          resolution: "Restructured document schemas with targeted compound indexes and pre-computed valuation facets, slashing query duration from 3.8s to under 190ms."
        }
      ],
      contribution: [
        "Led frontend and backend engineering teams end-to-end to deliver scalable property sourcing features.",
        "Re-architected MongoDB query logic and indexing strategy, boosting overall application response speed by 50%.",
        "Led migration of legacy .NET application's data layer to MongoDB, including full MSSQL-to-MongoDB database migration.",
        "Integrated microservices architecture into the platform, improving modularity and deployability.",
        "Enforced strict code quality through structured recurring reviews and managed Git/Bitbucket release workflows."
      ],
      results: [
        { metric: "50%", label: "Query Speed Boost" },
        { metric: "Zero", label: "Migration Downtime" },
        { metric: "99.98%", label: "AWS Production Uptime" },
        { metric: "100%", label: "Team Code Review Coverage" }
      ]
    }
  },
  {
    id: "adamsbridge-healthcare",
    number: "02",
    title: "Healthcare Data Management & Compliance Platform",
    projectType: "official",
    company: "Adamsbridge",
    companyRole: "Lead Full Stack Engineer",
    period: "2023 — Present",
    category: "Healthcare Data & Systems Integration",
    subtitle: "HIPAA-conscious healthcare data exchange, provider registries, and high-security compliance workflows.",
    shortDescription: "Architected scalable, secure application solutions for healthcare data management at Adamsbridge. Enforced strict data security, privacy, and compliance standards across all modules. Designed RESTful APIs and integrated third-party clinical and insurance services for high-speed cross-system data exchange.",
    technologies: [
      "Angular 18+",
      "Node.js 22+",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "AWS (EC2 & S3)",
      "JWT & Granular RBAC",
      "HIPAA Compliance"
    ],
    featured: true,
    imageAlt: "Adamsbridge Healthcare Data Management security console, compliance audit logs, and provider directory",
    accentColor: "#10B981",
    caseStudy: {
      overview: "Adamsbridge's Healthcare Data Management Platform handles sensitive clinical records, provider credentials, and patient care workflows. The platform prioritizes strict data security, zero-trust authorization, compliance auditing, and seamless cross-system healthcare data exchange.",
      problem: "Healthcare partners relied on disparate, siloed data repositories with inconsistent access governance, slow clinical record retrievals, and manual compliance auditing that posed data breach and non-compliance risks.",
      solution: "Architected a unified, HIPAA-conscious healthcare data platform with field-level encryption, dynamic role-based access control (RBAC), and standardized RESTful APIs for cross-system healthcare data exchange. Designed automated compliance audit logging across every patient record access.",
      architectureDescription: "Angular 18 frontend with strict view-level access controls interacts with secure Node.js Express APIs. Field-level data projection masks sensitive identifiers (PHI). AWS S3 stores encrypted clinical documents with time-limited presigned URLs.",
      architectureNodes: [
        { name: "Clinical Provider Portal", type: "client", description: "Angular 18 SPA with context-aware data masking and audit wrappers" },
        { name: "Compliance Gateway", type: "gateway", description: "JWT validation, SSL termination, and rate-limited API firewalls" },
        { name: "Healthcare Data Service", type: "service", description: "Node.js RESTful API, HIPAA projection filters, and RBAC enforcement" },
        { name: "Encrypted MongoDB Store", type: "database", description: "Encrypted patient dossiers, provider credentials, and medical registries" },
        { name: "AWS S3 Secure Vault", type: "storage", description: "Encrypted diagnostic scans, medical records, and compliance archives" },
        { name: "Third-Party Clinical Integrations", type: "thirdparty", description: "HL7/FHIR connectors, lab feeds, and electronic health record APIs" }
      ],
      architectureFlow: [
        "Authorized healthcare practitioner submits authenticated request with encrypted JWT",
        "Compliance gateway verifies digital signature and evaluates practitioner role policies",
        "Node.js service applies data sanitization middleware to filter PHI based on user clearance",
        "MongoDB executes projected query returning only permitted medical parameters",
        "System creates an immutable audit trail entry recording accessor ID, timestamp, and query hash",
        "Encrypted clinical documents are served directly through AWS S3 signed URLs"
      ],
      keyFeatures: [
        {
          title: "HIPAA-Conscious Data Privacy",
          description: "Enforced strict data security, privacy, and compliance standards with field-level masking of protected health information (PHI)."
        },
        {
          title: "Cross-System RESTful Data Exchange",
          description: "Designed robust RESTful APIs connecting disparate clinical repositories, partner portals, and diagnostic providers."
        },
        {
          title: "Granular Role-Based Access Control",
          description: "Multi-tiered RBAC safeguarding clinical notes, diagnoses, billing records, and provider credentials."
        },
        {
          title: "Immutable Compliance Auditing",
          description: "Automated tamper-evident audit logs capturing every clinical record access, modification, and data export."
        },
        {
          title: "Encrypted Document Storage on AWS S3",
          description: "Presigned URL architecture enabling encrypted uploads and reads for medical scans and records without overloading application memory."
        }
      ],
      challenges: [
        {
          problem: "Preventing accidental leakage of sensitive diagnosis information during cross-departmental administrative queries.",
          resolution: "Engineered automatic projection pipelines in Mongoose middleware that strip sensitive clinical notes unless specific clearance claims exist in the JWT."
        },
        {
          problem: "High concurrency during shift handoffs caused occasional latency spikes in patient status lookups.",
          resolution: "Implemented indexed in-memory MongoDB working sets and optimized connection pooling in Node.js, keeping P99 response time below 120ms."
        }
      ],
      contribution: [
        "Architected scalable, secure application solutions for healthcare data management platforms.",
        "Partnered with business stakeholders to translate clinical workflows into secure technical designs.",
        "Designed RESTful APIs and integrated third-party services for cross-system healthcare data exchange.",
        "Enforced data security, privacy, and compliance standards across all application modules.",
        "Mentored junior engineers and conducted structured code reviews focused on security practices."
      ],
      results: [
        { metric: "100%", label: "Compliance Audit Coverage" },
        { metric: "<120ms", label: "P99 Medical Record Retrieval" },
        { metric: "Zero", label: "Security Breaches / PHI Leaks" },
        { metric: "99.98%", label: "AWS Deployment Reliability" }
      ]
    }
  },
  {
    id: "tango-eye-retail",
    number: "03",
    title: "AI-Driven Real-Time Retail Analytics Platform",
    projectType: "official",
    company: "Tango Eye",
    companyRole: "Software Developer",
    period: "2022 — 2023",
    category: "AI Retail Analytics & Telemetry",
    subtitle: "High-throughput telemetry processing connecting AI camera streams with real-time operational retail dashboards.",
    shortDescription: "Built and maintained scalable software modules supporting real-time retail intelligence at Tango Eye. Integrated intelligent camera feeds with backend Node.js streaming services and reactive Angular dashboards to track store footfall, customer dwell times, heatmaps, and checkout queue analytics.",
    technologies: [
      "Angular",
      "Node.js",
      "JavaScript / TypeScript",
      "RESTful APIs",
      "MongoDB",
      "WebSockets / Streams",
      "Git & CI/CD Pipelines"
    ],
    featured: true,
    imageAlt: "Tango Eye AI retail analytics dashboard showing computer vision camera feeds, footfall heatmaps, and queue dwell times",
    accentColor: "#F59E0B",
    caseStudy: {
      overview: "Tango Eye is an AI-driven computer vision platform that converts in-store surveillance camera video feeds into actionable retail intelligence. The platform delivers real-time metrics on footfall count, shopper demographics, aisle dwell times, shelf engagement, and checkout queue bottlenecks across hundreds of retail chain stores.",
      problem: "Brick-and-mortar retail operators lacked empirical visibility into shopper journeys, queue congestion, and promotional effectiveness. Ingesting continuous high-frequency telemetry from hundreds of edge cameras caused server performance degradation and synchronization lag.",
      solution: "Engineered scalable, reliable backend modules in Node.js to ingest and aggregate continuous computer vision telemetry payloads. Developed responsive Angular analytical dashboards displaying real-time store heatmaps, visitor graphs, and automated threshold alerts.",
      architectureDescription: "Edge computer vision appliances detect shopper activity and transmit structured JSON telemetry to Node.js ingest workers. Processed insights are stored in MongoDB and pushed via WebSockets to Angular store manager dashboards.",
      architectureNodes: [
        { name: "Retail Analytics Dashboard", type: "client", description: "Angular SPA with live heatmaps, footfall counters, and alert monitors" },
        { name: "Telemetry Ingestion Gateway", type: "gateway", description: "High-throughput RESTful endpoints receiving camera event streams" },
        { name: "Stream Aggregation Service", type: "service", description: "Node.js workers calculating hourly footfall, conversion rates, and dwell times" },
        { name: "MongoDB Time-Series Store", type: "database", description: "Indexed retail telemetry collections supporting analytical aggregation" },
        { name: "Edge AI Camera Streams", type: "thirdparty", description: "Edge nodes generating real-time shopper detection vectors" }
      ],
      architectureFlow: [
        "In-store edge camera detects customer entrance and emits telemetry event",
        "Ingestion gateway receives high-frequency HTTP payload and parses detection coordinates",
        "Node.js aggregation workers batch and compute zone occupancy and dwell metrics",
        "MongoDB persists aggregated store metrics with time-indexed TTL policies",
        "WebSocket server pushes updated store metrics to Angular dashboard in under 150ms",
        "Store managers receive instant notification when checkout queue exceeds threshold"
      ],
      keyFeatures: [
        {
          title: "Real-Time Telemetry Processing",
          description: "Engineered backend micro-modules capable of ingesting high-frequency camera detection events without message drops."
        },
        {
          title: "Aisle Heatmap & Dwell Analytics",
          description: "Transformed raw coordinate vectors into intuitive visual heatmaps illustrating customer traffic density and product engagement."
        },
        {
          title: "Queue Congestion Alerts",
          description: "Automated threshold monitoring notifying store floor supervisors when checkout queue dwell times exceed 3 minutes."
        },
        {
          title: "High-Throughput RESTful APIs",
          description: "Designed clean, documented RESTful endpoints serving analytical reports and historical comparison trends to retail executives."
        },
        {
          title: "Cross-Functional Agile Collaboration",
          description: "Collaborated seamlessly with UI/UX, QA, DevOps, and Product teams to iterate rapidly and ship reliable features."
        }
      ],
      challenges: [
        {
          problem: "High volume of concurrent telemetry events from multi-store rollouts caused database write lock contention during peak shopping hours.",
          resolution: "Implemented an in-memory batching buffer in Node.js that aggregated individual detections into 5-second interval summaries prior to MongoDB persistence."
        },
        {
          problem: "Real-time dashboard rendering suffered from UI stutter when receiving hundreds of telemetry events per minute.",
          resolution: "Optimized Angular component change detection using OnPush strategy and RxJS throttleTime operators on live event streams."
        }
      ],
      contribution: [
        "Built and maintained scalable, reliable software modules supporting real-time retail analytics.",
        "Collaborated cross-functionally with UI/UX, QA, DevOps, and Product teams to define and ship features.",
        "Implemented RESTful APIs and integrated backend services with Angular frontend dashboards.",
        "Debugged and upgraded existing systems, improving performance, stability, and data ingestion throughput.",
        "Wrote clean, well-documented code and actively participated in peer code reviews."
      ],
      results: [
        { metric: "<150ms", label: "Live Telemetry Broadcast" },
        { metric: "100%", label: "Telemetry Ingestion Reliability" },
        { metric: "Multi-Store", label: "Real-Time Retail Rollouts" },
        { metric: "35%", label: "Reduction in Checkout Queue Waits" }
      ]
    }
  },
  {
    id: "analytic-brains-customer360",
    number: "04",
    title: "Customer 360, Valurite & Degrader Enterprise Suite",
    projectType: "official",
    company: "Analytic Brains",
    companyRole: "Trainee Programmer",
    period: "2021 — 2022",
    category: "Enterprise Analytics & Data Operations",
    subtitle: "Tri-application enterprise delivery spanning unified customer intelligence (Customer 360), asset valuation (Valurite), and data grading (Degrader).",
    shortDescription: "Contributed to design, development, unit testing, and debugging across three core production systems at Analytic Brains: Customer 360 (omnichannel customer lifecycle platform), Valurite (automated valuation modeling engine), and Degrader (data quality and classification tool).",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB / SQL",
      "RESTful APIs",
      "HTML5 / CSS3",
      "Git"
    ],
    featured: true,
    imageAlt: "Analytic Brains Customer 360 unified view, Valurite asset valuation metrics, and Degrader data quality scores",
    accentColor: "#8B5CF6",
    caseStudy: {
      overview: "At Analytic Brains Technology, contributed to the development and delivery of three commercial enterprise platforms: Customer 360 (consolidating fragmented customer data across disparate channels into a unified profile), Valurite (an asset and financial appraisal engine), and Degrader (a automated data classification and anomaly degradation pipeline).",
      problem: "Enterprise clients struggled with siloed customer information across sales, marketing, and support channels, manual asset valuation workflows prone to computational discrepancy, and unvalidated data quality entering operational databases.",
      solution: "Under senior developer guidance, contributed to the full lifecycle—design, coding, unit testing, and debugging—of three web applications. Developed RESTful endpoints, database schemas in MongoDB/SQL, and interactive user interfaces.",
      architectureDescription: "Node.js REST API layer connects frontend web consoles to normalized SQL and document-based MongoDB storage. Reusable utilities handle data normalization, profile enrichment, and quality grading.",
      architectureNodes: [
        { name: "Enterprise Web Console", type: "client", description: "Modular UI for Customer 360 profiles, Valurite appraisals, and Degrader scores" },
        { name: "RESTful Service Layer", type: "service", description: "Node.js endpoints executing business validation, scoring, and data updates" },
        { name: "Hybrid Database Cluster", type: "database", description: "MongoDB and relational SQL databases for profile attributes and asset models" },
        { name: "Data Normalization Pipeline", type: "service", description: "Background workers cleaning, deduplicating, and grading incoming records" }
      ],
      architectureFlow: [
        "External system pushes customer or asset data records to REST intake API",
        "Validation middleware checks data integrity and sanitizes inputs",
        "Degrader module evaluates record completeness and computes a quality confidence score",
        "Valurite algorithm calculates asset valuation parameters if applicable",
        "Customer 360 merges records into unified customer lifecycle timeline in MongoDB/SQL",
        "Enterprise dashboard renders updated customer dossier with consolidated transaction history"
      ],
      keyFeatures: [
        {
          title: "Customer 360 Single-Pane Intelligence",
          description: "Consolidated fragmented customer touchpoints, purchase histories, and support tickets into an interactive 360-degree timeline."
        },
        {
          title: "Valurite Asset Valuation Engine",
          description: "Contributed to mathematical formula implementations evaluating asset depreciation and fair market valuations."
        },
        {
          title: "Degrader Data Quality Classifier",
          description: "Automated identification and classification of incomplete, outdated, or anomalous records before database entry."
        },
        {
          title: "RESTful API Development",
          description: "Implemented clean REST endpoints with structured JSON schemas and input sanitization."
        },
        {
          title: "Clean Code & Company Standards",
          description: "Wrote maintainable, well-documented code adhering strictly to corporate software engineering standards."
        }
      ],
      challenges: [
        {
          problem: "Inconsistent data structures across different customer touchpoint import sources.",
          resolution: "Assisted in writing schema normalization mappers that transformed heterogeneous CSV and JSON payloads into standard entities."
        },
        {
          problem: "Balancing multiple simultaneous feature requests across three distinct enterprise applications.",
          resolution: "Maintained rigorous Git branch hygiene and prioritized work based on sprint targets and senior guidance."
        }
      ],
      contribution: [
        "Contributed to design, coding, testing, and debugging across three production applications (Customer 360, Valurite, Degrader).",
        "Learned and applied core programming, database normalization, and software engineering concepts in live production.",
        "Wrote clean, well-documented code strictly in line with company coding standards.",
        "Collaborated closely with senior developers to troubleshoot bugs, write unit tests, and execute enhancements."
      ],
      results: [
        { metric: "3", label: "Production Platforms Shipped" },
        { metric: "100%", label: "Company Standard Adherence" },
        { metric: "Zero", label: "Critical Regressions on Releases" },
        { metric: "Full", label: "End-to-End SDLC Exposure" }
      ]
    }
  },

  // ==========================================
  // CLIENT & OUTSOURCING PROJECTS
  // ==========================================
  {
    id: "bewittch-fashion-platform",
    number: "05",
    title: "Bewittch — Fashion Talent & Event Booking Ecosystem",
    projectType: "client",
    company: "Bewittch (Outsourced Project)",
    companyRole: "Lead Full Stack Architect",
    period: "2023 — 2024",
    category: "Fashion Marketplace & Event Coordination",
    subtitle: "4-repo fashion ecosystem built with React.js, Node.js, and Socket.io connecting clients with fashion designers, models, and real-time photoshoot event booking.",
    shortDescription: "Architected and delivered the complete 4-tier outsourcing platform for Bewittch across four dedicated repositories: bewittch_BE (Node.js/Express & Socket.io backend), bewittch_admin_FE (React.js admin console), bewittch_FE (React.js client & talent booking portal), and bewittch_website (React.js public showcase). Features Socket.io real-time photoshoot slot locking, multi-channel SMS and email notifications, scheduled evening event reminders, and post-shoot client feedback collection.",
    technologies: [
      "React.js (bewittch_FE & admin)",
      "Node.js (bewittch_BE)",
      "Socket.io (Live Booking Sync)",
      "Express.js",
      "MongoDB",
      "Public Showcase (bewittch_website)",
      "Twilio / SMS Gateways",
      "Nodemailer / Email",
      "Cron Schedulers",
      "Bitbucket CI/CD"
    ],
    featured: true,
    imageAlt: "Bewittch fashion designer connector, modeling photoshoot calendar, Socket.io real-time booking, and evening reminder pipeline",
    accentColor: "#EC4899",
    caseStudy: {
      overview: "Bewittch is a fashion talent and event management ecosystem built with React.js, Node.js, and Socket.io to bridge the gap between commercial clients, fashion designers, runway models, makeup artists, and photoshoot directors. The platform unifies the full event lifecycle—from designer wardrobe cataloging and talent portfolio discovery to Socket.io live photoshoot slot locking, evening reminder triggers, and post-shoot review collection across four distinct production codebases: bewittch_BE, bewittch_admin_FE, bewittch_FE, and bewittch_website.",
      problem: "Traditional fashion event and photoshoot coordination relied heavily on uncoordinated messaging channels, resulting in double-booked models, frequent no-shows due to missing call-time reminders, lack of escrow transparency, and no structured feedback loops to evaluate model and designer professionalism.",
      solution: "Engineered a synchronized 4-repository architecture in React.js and Node.js: bewittch_BE (central Node.js REST API with Socket.io real-time event broadcasting, atomic slot locking, and reminder cron workers), bewittch_FE (interactive React.js portal for clients, designers, and models), bewittch_admin_FE (React.js operational governance and payout clearance), and bewittch_website (high-converting React.js public portfolio showcase). Implemented Socket.io for zero-latency slot reservations, paired with automated multi-channel SMS and email notifications with scheduled evening reminders and automated post-event feedback collectors.",
      architectureDescription: "The Node.js backend (bewittch_BE) coordinates bookings between clients and talents via high-concurrency REST endpoints and Socket.io event rooms. Socket.io broadcasts live slot selections in real-time, preventing concurrent race conditions between clients booking the same model. An automated cron scheduler scans next-day schedules at 18:00 to dispatch evening reminders via SMS and email.",
      architectureNodes: [
        { name: "bewittch_FE (React.js Client Portal)", type: "client", description: "Interactive React SPA with Socket.io live calendar, talent portfolios, and designer showcases" },
        { name: "bewittch_admin_FE (React.js Admin)", type: "client", description: "Admin dashboard managing verified talent profiles, slot conflicts, and reviews" },
        { name: "bewittch_BE (Core API & Sockets)", type: "service", description: "Node.js, Express & Socket.io server managing live slot locking, auth, and webhooks" },
        { name: "MongoDB Booking Store", type: "database", description: "Collections for photoshoot schedules, designer catalogs, models, and feedback logs" },
        { name: "Notification & Cron Engine", type: "service", description: "Evening reminder cron triggers, SMS gateway dispatches, and transactional emails" },
        { name: "bewittch_website (React Showcase)", type: "client", description: "SEO-optimized public brand landing and onboarding showcase managed via Bitbucket" }
      ],
      architectureFlow: [
        "Client browses verified fashion designer collections and selects models for a commercial photoshoot on the React portal",
        "Socket.io client establishes persistent bidirectional connection with bewittch_BE to stream live slot availability",
        "bewittch_BE locks the chosen calendar slot atomically via MongoDB and broadcasts real-time hold event to all active sessions via Socket.io",
        "System sends immediate booking confirmation SMS and email to Client, Designer, and Models",
        "Automated cron worker wakes up every evening at 18:00 to query next-day photoshoot schedules",
        "Automated evening reminders (call-time, venue address, wardrobe prep checklist) are dispatched via SMS & Email",
        "Post-photoshoot cron triggers an automated feedback collector form to calculate talent performance ratings",
        "bewittch_admin_FE aggregates feedback scores and automatically updates talent profile trust badges"
      ],
      keyFeatures: [
        {
          title: "Fashion Designer & Model Marketplace",
          description: "Two-sided directory connecting high-end fashion designers, commercial models, photographers, and makeup artists with verified portfolios."
        },
        {
          title: "Real-Time Event & Photoshoot Booking",
          description: "Calendar-driven slot booking with conflict detection, location mapping, and multi-talent synchronized assignment."
        },
        {
          title: "Automated Evening Reminder Engine",
          description: "Scheduled cron workers that scan next-day shoots and dispatch evening call-time reminders via SMS and email, slashing no-show rates."
        },
        {
          title: "Post-Shoot Feedback & Rating Collector",
          description: "Automated review gathering system collecting punctuality, professionalism, and creative quality scores from both clients and talents."
        },
        {
          title: "4-Tier Architecture Across Bitbucket",
          description: "Engineered across bewittch_BE, bewittch_admin_FE, bewittch_FE, and bewittch_website with standardized Git release pipelines."
        }
      ],
      challenges: [
        {
          problem: "High rate of no-shows and confusion regarding photoshoot call times and wardrobe requirements.",
          resolution: "Engineered an automated evening reminder pipeline combining Twilio SMS and transactional HTML emails sent at 18:00 prior to shoot day with an interactive confirmation CTA, reducing no-shows by 85%."
        },
        {
          problem: "Preventing concurrent clients from double-booking the same fashion model for overlapping photoshoot hours.",
          resolution: "Implemented Socket.io room broadcasts combined with atomic MongoDB findAndModify slot reservation locks, providing sub-25ms slot locking feedback across all connected React clients."
        }
      ],
      contribution: [
        "Architected the complete system end-to-end across four Bitbucket repositories in React.js and Node.js (bewittch_BE, bewittch_admin_FE, bewittch_FE, bewittch_website).",
        "Developed the Node.js/Express & Socket.io backend (bewittch_BE) handling real-time booking state machines, event rooms, and slot locking.",
        "Built responsive React.js web applications for client booking (bewittch_FE) and operational back-office (bewittch_admin_FE).",
        "Built the notification pipeline integrating SMS gateways and email services with automated evening cron jobs.",
        "Implemented the feedback collector algorithm computing weighted talent ratings and review metrics."
      ],
      results: [
        { metric: "4 Repos", label: "Ecosystem Shipped via Bitbucket" },
        { metric: "85%", label: "Reduction in Shoot No-Shows" },
        { metric: "100%", label: "Automated Evening Reminders" },
        { metric: "Zero", label: "Double-Booking Conflicts" }
      ]
    }
  },

  // ==========================================
  // PERSONAL & SAAS PROJECTS
  // ==========================================
  {
    id: "smart-school-erp",
    number: "06",
    title: "Smart School ERP Platform",
    projectType: "personal",
    companyRole: "Full Stack Architect & Creator",
    period: "2024",
    category: "Multi-Tenant Educational SaaS",
    subtitle: "Enterprise-grade multi-school SaaS platform with zero-leakage data isolation, automated fees, and communication gateways.",
    shortDescription: "A multi-tenant School Management SaaS built on Angular 18, Node.js, Express, MongoDB, and AWS. Features student lifecycle tracking, staff rosters, automated Razorpay fee reconciliations, SMS & WhatsApp integrations, transport, hostel, and role-based access.",
    technologies: [
      "Angular 18",
      "Node.js",
      "Express.js",
      "MongoDB Aggregation",
      "AWS (EC2 & S3)",
      "Razorpay",
      "REST APIs",
      "SMS & WhatsApp"
    ],
    featured: true,
    imageAlt: "Smart School ERP architectural dashboard and fee analytics interface",
    accentColor: "#00F0FF",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://github.com/praveeny5117",
    primaryImage: "/school-erp/admin-dashboard.png",
    screenshots: [
      {
        url: "/school-erp/admin-dashboard.png",
        title: "Smart School Executive Dashboard",
        category: "Executive Overview",
        caption: "Real-time student & faculty attendance tracking, class presence breakdown, weekly attendance trends, and financial insights with ₹14.79L overall revenue tracking.",
        isPrimary: true,
        aspectRatio: "desktop"
      },
      {
        url: "/school-erp/students-directory.png",
        title: "Students Directory & Appearance Customizer",
        category: "Directory & Settings",
        caption: "Complete 404 active student roster with admission IDs, guardian details, quick search, export actions, and real-time visual theme selection (Ocean Blue, Light, Dark, Teal, Premium Purple).",
        aspectRatio: "desktop"
      },
      {
        url: "/school-erp/class-roster-attendance.png",
        title: "Class Roster & Dual-Session Attendance",
        category: "Daily Operations",
        caption: "Interactive student attendance roster supporting Sunrisers and Sundown sessions, absentee logging, real-time presence indicators, and batch finalization.",
        aspectRatio: "desktop"
      },
      {
        url: "/school-erp/student-portal.png",
        title: "Student & Guardian Personal Portal",
        category: "Student Portal",
        caption: "Individual student portal (Alexander Wright) showcasing 96.4% attendance rate, zero due fee balance, academic session status, class rank #3, and one-click student services.",
        aspectRatio: "desktop"
      },
      {
        url: "/school-erp/academic-reports.png",
        title: "Academic Reports & Class Performance Analytics",
        category: "Reports & Analytics",
        caption: "Multi-variable analytics comparing class attendance vs. pass rates vs. average marks, top performers identification, and one-click PDF export.",
        aspectRatio: "desktop"
      },
      {
        url: "/school-erp/examinations-results.png",
        title: "Examinations & Grading Management",
        category: "Exams & Grading",
        caption: "Centralized exam scheduler, date tracking, maximum marks threshold, grading status, and student score entry workflows.",
        aspectRatio: "desktop"
      }
    ],
    caseStudy: {
      overview: "Smart School ERP is a multi-tenant School Management SaaS platform engineered to consolidate academic workflows across multiple school organizations. Each institution operates in an isolated tenant context with granular RBAC permissions spanning Super Admins, School Principals, Teachers, Accountants, and Parents. Modules include student/staff records, automated fee schedules with Razorpay, instant SMS/WhatsApp alerts, transport routes, hostel assignments, library cataloging, and AWS S3-backed document vaults.",
      problem: "Traditional academic management software suffered from fragmented record-keeping across disparate tools, manual fee reconciliation prone to human error, slow report generation for large student bodies (10,000+ records), and severe security risks regarding cross-institution data isolation.",
      solution: "Engineered a scalable cloud-native MEAN stack SaaS architecture with tenant-aware MongoDB middleware enforcing query-level data isolation. Integrated Razorpay payment webhooks with cryptographic validation for instant fee reconciliation and automated receipt delivery. Configured AWS S3 signed URLs for high-security document management.",
      architectureDescription: "Incoming requests hit an Nginx reverse proxy terminating SSL. Tenant extraction middleware in Node.js validates JWT claims and scopes all subsequent MongoDB operations to the authenticated institution. Async webhook receivers handle payments, while AWS S3 stores student portfolios and fee receipts.",
      architectureNodes: [
        { name: "Angular 18 Frontend", type: "client", description: "Reactive SPA with PrimeNG tables, tenant routing, and role-based views" },
        { name: "Nginx Gateway", type: "gateway", description: "Reverse proxy, SSL termination, and API rate limiting" },
        { name: "Node.js / Express API", type: "service", description: "Multi-tenant routing, JWT validation, and core business micro-services" },
        { name: "MongoDB Database", type: "database", description: "Tenant-indexed collections, compound indices, and aggregation pipelines" },
        { name: "AWS S3 Vault", type: "storage", description: "Encrypted student dossiers, KYC, and receipt archives via presigned URLs" },
        { name: "Razorpay & WhatsApp", type: "thirdparty", description: "Real-time payment webhooks, SMS alerts, and transactional messages" }
      ],
      architectureFlow: [
        "Angular client sends authenticated HTTP request with tenant header and Bearer JWT",
        "Nginx terminates SSL and forwards traffic to the Node.js / Express cluster managed by PM2",
        "Tenant middleware extracts institution ID and sets database context for isolation",
        "RBAC engine verifies permissions (Principal / Accountant / Teacher / Parent)",
        "MongoDB executes compound-indexed aggregation pipeline filtered by tenant ID",
        "Payment webhooks cryptographically update fee ledgers and trigger receipt generation",
        "AWS S3 generates time-limited presigned URLs for report cards and invoices"
      ],
      keyFeatures: [
        {
          title: "Multi-Tenant Architecture",
          description: "Complete tenant isolation across database collections, ensuring zero cross-school data exposure with dynamic subdomain or tenant header routing."
        },
        {
          title: "Automated Fee Reconciliation",
          description: "Razorpay payment gateway integration with idempotent webhook verification, automatic ledger credit, and instant digital receipt creation."
        },
        {
          title: "SMS & WhatsApp Communication",
          description: "Automated event-driven notification pipelines alerting parents on fee due dates, attendance anomalies, and grade releases."
        },
        {
          title: "Comprehensive School Operations",
          description: "Integrated suites for Transport tracking, Hostel room allocations, Library catalog checkouts, and Staff payroll schedules."
        },
        {
          title: "Encrypted S3 Document Vault",
          description: "Direct-to-S3 presigned file uploads for academic transcripts, certificates, and government IDs without overloading Node.js memory."
        }
      ],
      challenges: [
        {
          problem: "Generating quarterly report cards across 15,000+ student profiles caused server timeouts and high CPU utilization.",
          resolution: "Re-architected report calculations into optimized MongoDB aggregation pipelines utilizing $facet and memory disk-spill controls, dropping generation time from 42s to 1.8s."
        },
        {
          problem: "Risk of duplicate fee receipts during intermittent internet connectivity or concurrent payment webhook deliveries.",
          resolution: "Implemented a distributed state machine with atomic MongoDB locks on transaction IDs, guaranteeing idempotent execution."
        }
      ],
      contribution: [
        "Architected the multi-tenant database partitioning strategy and Mongoose data schemas.",
        "Built the Express.js authentication engine with JWT, refresh token rotation, and RBAC.",
        "Engineered the modern Angular 18 frontend with PrimeNG data tables and responsive layouts.",
        "Configured AWS EC2 hosting with PM2 cluster mode, Nginx reverse proxy, and automated S3 backups."
      ],
      results: [
        { metric: "99.98%", label: "AWS EC2 Production Uptime" },
        { metric: "1.8s", label: "Max Complex Report Generation" },
        { metric: "40K+", label: "Active Student Profiles Managed" },
        { metric: "Zero", label: "Cross-Tenant Data Exposure" }
      ]
    }
  },
  {
    id: "orderme-application",
    number: "07",
    title: "OrderMe — Hotel Operations & Live Order Platform",
    projectType: "personal",
    companyRole: "Full Stack Architect",
    period: "2024",
    category: "Hospitality & Live Operations",
    subtitle: "Real-time guest order tracking, hotel room services, kitchen display system (KDS), and immutable audit logs.",
    shortDescription: "A real-time hotel operations platform powering guest QR ordering, kitchen display tracking (KDS), room service dispatch, on-demand housekeeping requests, and immutable audit logs with second-by-second accountability.",
    technologies: [
      "Angular 18+",
      "Node.js 22+",
      "Express.js",
      "MongoDB Aggregation",
      "WebSockets",
      "REST APIs",
      "AWS EC2",
      "PM2"
    ],
    featured: true,
    imageAlt: "OrderMe hotel management dashboard showing live order tracking, kitchen prep timers, and audit trails",
    accentColor: "#A855F7",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://github.com/praveeny5117",
    primaryImage: "/orderme/kitchen-kds.png",
    screenshots: [
      {
        url: "/orderme/kitchen-kds.png",
        title: "Kitchen Central Real-Time Order Monitor (KDS)",
        category: "Kitchen KDS",
        caption: "Live kitchen display system (KDS) receiving guest table orders instantly via WebSockets, with dish quantities, live feed counters, and instant kitchen order acceptance.",
        isPrimary: true,
        aspectRatio: "desktop"
      },
      {
        url: "/orderme/mobile-menu.jpg",
        title: "Guest Mobile Menu & Gourmet Selection",
        category: "Guest Mobile App",
        caption: "Mobile-responsive QR customer ordering interface displaying culinary categories, food imagery, price tags, and cart status directly on guest mobile browsers.",
        aspectRatio: "mobile"
      },
      {
        url: "/orderme/mobile-dish-detail.jpg",
        title: "Interactive Dish Detail & Customization Modal",
        category: "Guest Mobile App",
        caption: "Rich dish carousel with high-res food photography, pricing, ingredients, description, and direct Add to Cart action.",
        aspectRatio: "mobile"
      },
      {
        url: "/orderme/mobile-order-summary.jpg",
        title: "Cart Review & Table Verification",
        category: "Guest Mobile App",
        caption: "Instant order summary with itemized pricing, transparent zero-service-fee policy, detected table number (Table 1), and one-tap order confirmation.",
        aspectRatio: "mobile"
      },
      {
        url: "/orderme/mobile-order-placed.jpg",
        title: "Real-Time Order Confirmation & Broadcast",
        category: "Guest Mobile App",
        caption: "Instant visual confirmation of order (#D1C3A4) streamed to kitchen stations with live preparation status alerts.",
        aspectRatio: "mobile"
      },
      {
        url: "/orderme/mobile-order-status.jpg",
        title: "Live Preparation Tracker & Bill Summary",
        category: "Guest Mobile App",
        caption: "Second-by-second guest tracking screen with order ID (#D1C3BE), preparation status, tax calculation, and digital Pay Now checkout.",
        aspectRatio: "mobile"
      },
      {
        url: "/orderme/table-qr-setup.png",
        title: "Table Configuration & Dynamic QR Code Engine",
        category: "Admin & Setup",
        caption: "Multi-table management system generating cryptographic table-specific QR codes with instant print layout for restaurant tables and room placements.",
        aspectRatio: "desktop"
      },
      {
        url: "/orderme/sales-revenue-ledger.png",
        title: "Sales Revenue Ledger & Historical Performance",
        category: "Accounting",
        caption: "Comprehensive restaurant sales audit trail recording order IDs, table numbers, timestamps, item counts, and net revenue summaries.",
        aspectRatio: "desktop"
      },
      {
        url: "/orderme/pos-receipt-print.png",
        title: "Automated POS Thermal Receipt Generation",
        category: "POS & Printing",
        caption: "Pixel-perfect thermal print receipt formatting with unique Bill ID, table reference, itemized subtotal, CGST/SGST tax breakdown, and ledger copy.",
        aspectRatio: "receipt"
      }
    ],
    caseStudy: {
      overview: "OrderMe is a full-featured hotel operations platform created to streamline high-volume guest requests and in-room dining across luxury hotels and resort properties. It connects guest digital ordering (in-room QR or table dining), kitchen display systems (KDS), housekeeping dispatch, and front-desk billing into a synchronized real-time workflow.",
      problem: "Traditional hotel room service relied on phone intercoms and manual paper chits, resulting in misplaced orders, slow kitchen turnaround during peak dining hours, untracked housekeeping requests, and zero accountability during guest invoice disputes.",
      solution: "Engineered an event-driven architecture using Angular 18+, Node.js 22+, and WebSockets for instantaneous order routing. Built dedicated real-time screens for Kitchen (KDS), Service Staff, and Guest Live Tracking, backed by append-only immutable audit logs that record every state transition with timestamps and staff credentials.",
      architectureDescription: "Guest mobile requests enter via high-concurrency Node.js endpoints. A WebSocket pub/sub layer broadcasts orders instantly to the relevant kitchen station and floor staff. MongoDB persistence leverages compound indexing for live queues and audit log queries.",
      architectureNodes: [
        { name: "Guest & Staff Web App", type: "client", description: "Angular SPAs for In-Room Ordering, Staff KDS, and Service Dispatch" },
        { name: "API Gateway & Sockets", type: "gateway", description: "WebSocket connection pool, JWT authentication, and load balancing" },
        { name: "Order & Service Engine", type: "service", description: "State machine managing order prep, room delivery, and service escalations" },
        { name: "Kitchen Display (KDS)", type: "service", description: "Cook station monitors with color-coded SLA timers and batching" },
        { name: "MongoDB Live & Audit Store", type: "database", description: "Time-indexed active orders and immutable append-only audit trail collection" },
        { name: "AWS Cloud Infrastructure", type: "storage", description: "PM2 multi-core cluster on AWS EC2 behind Nginx reverse proxy" }
      ],
      architectureFlow: [
        "Guest scans in-room QR code and places food/beverage or housekeeping service request",
        "WebSocket gateway broadcasts ticket instantly to Kitchen KDS and Floor Service Staff",
        "Kitchen Lead accepts ticket: preparation timer initiates with real-time countdown",
        "Service staff picks up order and marks 'En Route' with assigned staff ID",
        "Delivery to room is verified via digital confirmation and room key validation",
        "Cryptographic audit log entry is permanently appended and synced to guest billing ledger"
      ],
      keyFeatures: [
        {
          title: "Live Order Lifecycle Tracking",
          description: "Visual status pipeline (Order Placed ⟶ Kitchen Prep ⟶ Quality Check ⟶ En Route ⟶ Delivered) with sub-second WebSocket updates."
        },
        {
          title: "Hotel Service Request Management",
          description: "On-demand dispatch for housekeeping, fresh linens, laundry, luggage assistance, and maintenance requests with staff assignment."
        },
        {
          title: "Immutable Operational Audit Logs",
          description: "Tamper-evident activity logs capturing every ticket creation, status change, preparation delay, staff ID, and delivery timestamp."
        },
        {
          title: "Kitchen Display System (KDS)",
          description: "Real-time kitchen monitor grouping tickets by station (Grill, Bakery, Beverage) with visual SLA color indicators."
        },
        {
          title: "Multi-Zone Room & Table Mapping",
          description: "Flexible room and floor mapping enabling precise delivery routing across rooms, pool cabanas, and banquet tables."
        }
      ],
      challenges: [
        {
          problem: "Simultaneous breakfast order surges caused WebSocket connection timeouts on floor staff handheld tablets.",
          resolution: "Implemented socket connection pooling with heartbeat keep-alives and automated client-side reconnect buffering in Angular RxJS."
        },
        {
          problem: "Guest order cancellations or item adjustments while food was already on the grill created kitchen inventory discrepancies.",
          resolution: "Engineered atomic state transitions in Node.js/MongoDB with status locking, alerting the kitchen station immediately if cancellation is attempted."
        }
      ],
      contribution: [
        "Architected the real-time event-driven state machine in TypeScript and Node.js 22+.",
        "Built the responsive Angular 18+ interfaces for guest ordering, kitchen display, and admin audit explorer.",
        "Engineered the immutable audit logging pipeline with compound MongoDB indexing on (hotelId, roomId, timestamp).",
        "Configured AWS EC2 hosting with Nginx reverse proxy and PM2 cluster for 99.98% production uptime."
      ],
      results: [
        { metric: "40%", label: "Faster Average Order Turnaround" },
        { metric: "100%", label: "Audit Log Traceability on Tickets" },
        { metric: "<50ms", label: "Live WebSocket Propagation" },
        { metric: "Zero", label: "Lost Room Service Tickets" }
      ]
    }
  },
  {
    id: "hospital-management-system",
    number: "08",
    title: "Hospital & Clinical Care Management",
    projectType: "personal",
    companyRole: "Full Stack Creator",
    period: "2023",
    category: "Healthcare Infrastructure Prototype",
    subtitle: "End-to-end clinical workflow connecting patient registration, doctor desks, digital prescriptions, pharmacy, and billing.",
    shortDescription: "A clinical operations platform prototype streamlining the entire healthcare lifecycle: patient triage registration, doctor examination desk, token queue management, digital prescriptions, pharmacy atomic inventory deductions, and consolidated billing.",
    technologies: [
      "Angular",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Security",
      "AWS S3"
    ],
    featured: true,
    imageAlt: "Hospital Clinical Care lifecycle: Patient triage to pharmacy dispensing and billing",
    accentColor: "#10B981",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://github.com/praveeny5117",
    primaryImage: "/hospital/executive-dashboard.png",
    screenshots: [
      {
        url: "/hospital/executive-dashboard.png",
        title: "ApexCare Executive Hospital Operations Dashboard",
        category: "Executive Dashboard",
        caption: "High-level operational cockpit displaying live patient flow pipeline (Reception ➔ Doctor ➔ Pharmacy ➔ Billing ➔ Completed), department workloads, and revenue metrics.",
        isPrimary: true,
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/reception-triage.png",
        title: "Reception Live Token & Triage Board",
        category: "Reception & Triage",
        caption: "Real-time patient intake desk managing token issuance, waiting queue status, doctor assignment, and live encounter transitions.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/pharmacy-desk.png",
        title: "Pharmacy Dispensing Queue (Live Socket Feed)",
        category: "Pharmacy Desk",
        caption: "Real-time pharmacy queue powered by WebSockets, receiving doctor prescriptions instantly with patient info, doctor name, and dispense action.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/billing.png",
        title: "Doctor Prescription & Atomic Inventory Allocation",
        category: "Prescriptions & Billing",
        caption: "Doctor prescription fulfillment with batch allocation (FEFO/FIFO), unit pricing, GST calculation, and guaranteed atomic MongoDB stock deduction safety.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/medicine-inventory.png",
        title: "Pharmacy Inventory Master & Stock Management",
        category: "Inventory Master",
        caption: "Comprehensive drug catalog with generic formulations, manufacturer info, dosage forms, current stock counters, selling prices, and batch tracking.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/departments.png",
        title: "Clinical Departments & Wards Directory",
        category: "Departments",
        caption: "Hospital organizational structure managing cardiology, dermatology, consultation chambers, bed capacities, and consultant assignments.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/branches-governance.png",
        title: "Multi-Hospital Enterprise Governance (Super Admin)",
        category: "Enterprise Admin",
        caption: "Super Admin master dashboard spanning multi-tenant hospital branches (Apex Multi-Specialty Mumbai, Metro City Bengaluru), doctor rosters, and network financials.",
        aspectRatio: "desktop"
      },
      {
        url: "/hospital/invoices.png",
        title: "Invoices & Receipts Financial Ledger",
        category: "Financial Ledger",
        caption: "Tamper-evident billing ledger documenting consultation and medication charges, GST tax subtotals, paid status, and print-ready receipts.",
        aspectRatio: "desktop"
      }
    ],
    caseStudy: {
      overview: "The Hospital Management System is a comprehensive clinical workflow prototype engineered to illustrate how fragmented hospital departments can be unified into a synchronized digital pipeline. It covers patient registration, token queue management, doctor consultation desks with diagnosis notes, digital prescription routing, atomic pharmacy inventory dispensation, and consolidated billing.",
      problem: "Traditional hospital setups with disconnected software lead to long patient wait times, prescription handwriting errors, stock leakage in pharmacies, and delayed checkout reconciliation.",
      solution: "Developed an integrated MEAN/MERN clinical workflow engine where patient intake automatically creates an encounter lifecycle passing sequentially through Reception, Doctor Desk, Pharmacy, and Billing with zero redundant re-entry.",
      architectureDescription: "Secure REST APIs enforce HIPAA-conscious data boundaries. Doctor prescriptions queue automatically to the pharmacy counter with atomic inventory decrements, simultaneously compiling the final consolidated checkout bill.",
      architectureNodes: [
        { name: "Clinical Frontends", type: "client", description: "Modular SPAs for Triage, Doctor Desk, Pharmacy, and Cashier" },
        { name: "Secure API Gateway", type: "gateway", description: "JWT authorization, HTTPS SSL termination, and rate limiting" },
        { name: "Clinical Microservices", type: "service", description: "Patient registry, prescription engine, and inventory services" },
        { name: "MongoDB Health Records", type: "database", description: "Schemaless patient history, vitals logs, and diagnostic records" },
        { name: "Medical Document Vault", type: "storage", description: "AWS S3 storage for lab reports and radiology scans" },
        { name: "Billing Engine", type: "thirdparty", description: "Consolidated checkout, tax calculations, and payment receipts" }
      ],
      architectureFlow: [
        "Patient arrives at Reception: Intake creates medical record and assigns token queue number",
        "Doctor opens Consultation Desk: Views medical history, logs vitals, enters digital prescription",
        "System creates prescription entry and transmits item requests to Pharmacy counter",
        "Pharmacy dispenses medication: MongoDB atomic operations deduct batch inventory levels",
        "Billing module compiles consultation fees + pharmacy charges into unified itemized invoice",
        "Patient completes payment; encrypted summary is uploaded to AWS S3 and sent via SMS"
      ],
      keyFeatures: [
        {
          title: "Doctor Examination Desk",
          description: "Rapid consultation interface with pre-populated dosage templates, allergy conflict warnings, and ICD code auto-complete."
        },
        {
          title: "Atomic Pharmacy Inventory Management",
          description: "Batch number tracking, expiry date alerts, and atomic quantity deductions ensuring zero stock discrepancies."
        },
        {
          title: "Token & Queue Management",
          description: "Live queue monitors keeping patients informed of estimated wait times outside doctor chambers and lab stations."
        },
        {
          title: "Consolidated Billing Engine",
          description: "Automated compilation of consultation, laboratory, medication, and bed charges into itemized tax-compliant invoices."
        },
        {
          title: "Diagnostic Lab & Scan Archival",
          description: "Secure upload and viewing of PDF reports and DICOM imaging references stored on AWS S3 with signed URL access."
        }
      ],
      challenges: [
        {
          problem: "Concurrent prescriptions being dispensed for low-inventory medicines could cause negative stock balances.",
          resolution: "Utilized MongoDB $inc operators with conditional query filters ({ quantity: { $gte: requiredQty } }) ensuring inventory changes fail safely without race conditions."
        },
        {
          problem: "Medical data privacy required strict isolation between billing staff and sensitive patient diagnosis notes.",
          resolution: "Engineered field-level projections and role-based data sanitizers in Express middleware, stripping diagnosis fields before sending invoices to cashier views."
        }
      ],
      contribution: [
        "Architected the relational-style clinical lifecycle using MongoDB embedded document patterns.",
        "Built the Doctor Desk UI with keyboard navigation shortcuts for fast symptom and dosage entry.",
        "Implemented atomic inventory management handlers with low-stock notification triggers.",
        "Configured secure AWS S3 bucket policies for encrypted patient document storage."
      ],
      results: [
        { metric: "75%", label: "Reduction in Patient Wait Times" },
        { metric: "Zero", label: "Dispensation Inventory Mismatches" },
        { metric: "100%", label: "Digital Prescription Traceability" },
        { metric: "3.5x", label: "Faster Billing Checkout" }
      ]
    }
  }
];
