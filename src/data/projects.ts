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

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  shortDescription: string;
  technologies: string[];
  featured: boolean;
  imageAlt: string;
  accentColor: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "smart-school-erp",
    number: "01",
    title: "Smart School ERP Platform",
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
    id: "enterprise-workflow-platform",
    number: "02",
    title: "Enterprise Workflow & Automation Platform",
    category: "Workflow Systems & API Architecture",
    subtitle: "Decoupled enterprise workflow automation, high-throughput microservices, and database query optimization.",
    shortDescription: "An enterprise workflow automation platform streamlining cross-departmental operations, API integrations, and reporting pipelines. Re-architected MongoDB queries for a 50% response speed boost, modernized frontend UI components, and maintained AWS cloud infrastructure.",
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB Aggregation",
      "AWS (EC2 & S3)",
      "REST APIs",
      "PM2",
      "Nginx",
      "Microservices"
    ],
    featured: true,
    imageAlt: "Enterprise workflow automation platform dashboard and query performance analytics",
    accentColor: "#3B82F6",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://github.com/praveeny5117",
    caseStudy: {
      overview: "An enterprise workflow platform designed to automate high-stakes corporate operations, asset management, and cross-departmental reviews. The platform connects distributed business logic, third-party partner integrations, and asynchronous data reporting pipelines under rigorous security and audit compliance standards.",
      problem: "Legacy backend services and unoptimized database queries led to response latency exceeding 3.5 seconds on critical data exports. Fragmented frontend interfaces created operational friction, and manual review bottlenecks delayed high-value business approvals.",
      solution: "Modernized the platform by decoupling core domains into Node.js / Express microservices and redesigning MongoDB aggregation pipelines and compound indexing. Built reusable, responsive Angular frontend components and migrated legacy data layers with minimal business disruption.",
      architectureDescription: "Microservices communicate via structured REST APIs behind an Nginx reverse proxy. AWS EC2 instances running PM2 process clusters ensure zero-downtime deployments, while automated pipelines handle heavy analytical workloads.",
      architectureNodes: [
        { name: "Angular Modern SPA", type: "client", description: "Modular UI architecture with reusable components and reactive state" },
        { name: "Nginx Load Balancer", type: "gateway", description: "Reverse proxy, SSL termination, and rate-limiting gateway" },
        { name: "Node.js Microservices", type: "service", description: "Decoupled business logic, workflow state machines, and REST APIs" },
        { name: "MongoDB Optimized Cluster", type: "database", description: "Compound-indexed collections with aggregation pipelines" },
        { name: "AWS Cloud Infrastructure", type: "storage", description: "EC2 computing, S3 secure data lakes, and PM2 process monitoring" },
        { name: "Enterprise Integrations", type: "thirdparty", description: "External REST connectors, ERP sync webhooks, and audit logging" }
      ],
      architectureFlow: [
        "Business operator initiates multi-stage workflow approval on Angular console",
        "Nginx routes payload to specific microservice instance via least-connection balancing",
        "JWT and RBAC middleware validate corporate access boundaries and audit context",
        "Optimized MongoDB aggregation query executes against compound-indexed collections",
        "Workflow engine transitions stage atomically and emits notifications to stakeholders",
        "AWS S3 archives immutable audit snapshot and generates report export URL"
      ],
      keyFeatures: [
        {
          title: "Workflow Automation Engine",
          description: "Configurable multi-stage approval pipelines with automated stage transitions, escalation triggers, and audit logging."
        },
        {
          title: "50% Query Optimization",
          description: "Redesigned data access layer using compound indexes and pipeline aggregations, cutting large export response times in half."
        },
        {
          title: "Reusable Enterprise UI System",
          description: "Modernized frontend architecture with standardized UI components, reducing design debt and speeding up feature shipping."
        },
        {
          title: "Decoupled Microservice Architecture",
          description: "Independent service deployability ensuring high resilience and zero cascading failures across business modules."
        },
        {
          title: "Production AWS & PM2 Orchestration",
          description: "Resilient cloud infrastructure with PM2 process clusters, health checks, and automated log rotations."
        }
      ],
      challenges: [
        {
          problem: "Complex multi-table queries caused latency spikes and high memory overhead during month-end reporting periods.",
          resolution: "Replaced unindexed join operations with pre-aggregated MongoDB views and targeted compound indices, reducing query latency by 50%."
        },
        {
          problem: "Migrating legacy data layers without disrupting ongoing enterprise business operations.",
          resolution: "Implemented a phased migration with dual-write verification scripts, achieving zero-downtime cutover."
        }
      ],
      contribution: [
        "Designed and developed enterprise workflow applications using Angular, Node.js, and MongoDB.",
        "Optimized backend APIs and MongoDB queries to significantly reduce response times for large data exports.",
        "Implemented reusable frontend components and modernized legacy UI components.",
        "Managed production deployments, AWS infrastructure (EC2, S3), and PM2/Nginx configurations."
      ],
      results: [
        { metric: "50%", label: "API Query Latency Reduction" },
        { metric: "99.98%", label: "AWS Production Uptime" },
        { metric: "Zero", label: "Downtime During Data Layer Modernization" },
        { metric: "100%", label: "Automated Workflow Auditability" }
      ]
    }
  },
  {
    id: "hospital-management-system",
    number: "03",
    title: "Hospital & Clinical Care Management",
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
  },
  {
    id: "orderme-application",
    number: "04",
    title: "OrderMe — Hotel Operations & Live Order Platform",
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
    accentColor: "#8B5CF6",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://github.com/praveeny5117",
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
  }
];
