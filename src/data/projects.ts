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
    category: "Multi-Tenant Enterprise SaaS",
    subtitle: "High-scale educational management system serving multiple institutions with data isolation and real-time fee pipelines.",
    shortDescription: "A multi-tenant school operations platform managing student lifecycles, role-based staff operations, automated fee schedules via Razorpay, and direct AWS S3 document vaults.",
    technologies: [
      "Angular 17",
      "Node.js",
      "Express.js",
      "MongoDB Aggregation",
      "AWS S3",
      "AWS EC2",
      "Razorpay",
      "SendGrid / SMS"
    ],
    featured: true,
    imageAlt: "Smart School ERP architectural dashboard and fee analytics interface",
    accentColor: "#00F0FF",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://example.com/school-erp-demo",
    caseStudy: {
      overview: "Smart School ERP is an enterprise multi-tenant SaaS application created to consolidate fragmented academic administrations. Built to handle independent school branches within isolated tenant boundaries, the platform provides automated fee settlements, exam grading pipelines, parent communication bridges, and encrypted document archives.",
      problem: "Traditional academic management tools suffered from fragmented record-keeping, manual reconciliation of student fees, slow report generation for 10,000+ student bodies, and lack of reliable role-based security separating teachers, accountants, and parents.",
      solution: "Engineered a cloud-native MEAN stack architecture with tenant-aware MongoDB database queries, Razorpay webhook automations for instantaneous fee reconciliation, and AWS S3 signed URLs for secure transcript and report card storage.",
      architectureDescription: "Client requests enter through an Nginx reverse proxy terminating SSL. Node.js middleware extracts tenant identity, applying connection and collection-level isolation. Background queues trigger SMS/email notifications while S3 streams large student records.",
      architectureNodes: [
        { name: "Angular Web Client", type: "client", description: "Reactive SPAs with role-specific views and PrimeNG tables" },
        { name: "Nginx Gateway", type: "gateway", description: "Reverse proxy, rate limiter, and SSL terminator" },
        { name: "Node.js REST Services", type: "service", description: "Multi-tenant routing, JWT validation, and business logic" },
        { name: "MongoDB Cluster", type: "database", description: "Tenant-indexed collections and pipeline aggregations" },
        { name: "AWS S3 Storage", type: "storage", description: "Encrypted student portfolios, KYC, and report archives" },
        { name: "Razorpay & SMS", type: "thirdparty", description: "Real-time payment webhooks and OTP notifications" }
      ],
      architectureFlow: [
        "Angular Client sends authenticated HTTP request with Tenant Header",
        "Nginx forwards request to Node.js / Express cluster managed by PM2",
        "JWT and RBAC middleware verify permissions (Admin / Accountant / Parent)",
        "MongoDB executes compound-indexed aggregation pipelines with tenant ID filtering",
        "Razorpay webhooks confirm fee status and trigger automated receipt generation",
        "AWS S3 creates presigned download URLs for student documents and receipts"
      ],
      keyFeatures: [
        {
          title: "Multi-Tenant Data Partitioning",
          description: "Tenant identification middleware dynamically scopes every database query to ensure strict zero-leakage data isolation across schools."
        },
        {
          title: "Automated Fee Reconciliation",
          description: "Razorpay payment integration with automated cryptographic webhook verification, eliminating manual ledger updates and issuing instant receipts."
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Granular permissions for Super Admin, School Principal, Teachers, Accountants, and Guardians with custom dashboard views."
        },
        {
          title: "Real-time Notifications",
          description: "Transactional SMS and Email pipelines for fee reminders, attendance alerts, and exam report distribution."
        },
        {
          title: "Encrypted Document Vault",
          description: "AWS S3 direct presigned uploads for high-resolution document storage, minimizing backend server CPU and RAM overhead."
        }
      ],
      challenges: [
        {
          problem: "Generating complex quarterly grade cards across 15,000+ students led to slow response times and server memory spikes.",
          resolution: "Re-engineered grade calculations into optimized MongoDB aggregation pipelines utilizing $facet and memory limits, reducing generation time from 42s to 1.8s."
        },
        {
          problem: "Handling sporadic payment gateway timeouts caused duplicate fee receipt issuances.",
          resolution: "Implemented an idempotent transactional state machine in Node.js with distributed MongoDB optimistic locking on receipt numbers."
        }
      ],
      contribution: [
        "Designed the complete multi-tenant database indexing strategy and Mongoose schemas.",
        "Built the Express.js authentication layer with JWT, refresh tokens, and granular permission gates.",
        "Developed the responsive Angular frontend utilizing PrimeNG for high-density academic tables.",
        "Configured AWS EC2 hosting with Nginx reverse proxy, PM2 process supervision, and automated S3 backup jobs."
      ],
      results: [
        { metric: "99.98%", label: "Uptime on AWS EC2 & PM2" },
        { metric: "1.8s", label: "Max Report Generation Time" },
        { metric: "40K+", label: "Active Student Profiles Managed" },
        { metric: "0", label: "Cross-Tenant Data Leaks" }
      ]
    }
  },
  {
    id: "orderme-application",
    number: "02",
    title: "OrderMe — Hotel Management & Live Operations Platform",
    category: "Hospitality & Live Order Management",
    subtitle: "Real-time guest order tracking, hotel room services, kitchen display system (KDS), and immutable audit logs.",
    shortDescription: "A comprehensive hotel management platform powering real-time guest ordering, live kitchen display tracking (KDS), room service dispatch, on-demand housekeeping requests, and immutable audit logs with second-by-second accountability.",
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
    accentColor: "#3B82F6",
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
        { metric: "0", label: "Lost Room Service Tickets" }
      ]
    }
  },
  {
    id: "hospital-management-system",
    number: "03",
    title: "Clinical Care & Hospital Management",
    category: "Healthcare Infrastructure",
    subtitle: "End-to-end clinical workflow connecting patient registration, doctor desks, digital prescriptions, pharmacy, and billing.",
    shortDescription: "A clinical operations suite streamlining the entire inpatient/outpatient lifecycle: triage registration, doctor examination desk, digital Rx generation, pharmacy inventory deduction, and billing checkout.",
    technologies: [
      "React.js / Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Security",
      "REST APIs",
      "AWS S3",
      "Nginx"
    ],
    featured: true,
    imageAlt: "Hospital Clinical Care lifecycle: Patient triage to pharmacy dispensing and billing",
    accentColor: "#10B981",
    githubUrl: "https://github.com/praveeny5117",
    demoUrl: "https://example.com/hospital-demo",
    caseStudy: {
      overview: "The Hospital Management System is a clinical healthcare management platform built to unify disjointed hospital departments. It covers the full outpatient and inpatient lifecycle: rapid triage registration, doctor examination consoles with ICD-coded diagnostic notes, automated pharmacy dispensation, and consolidated billing.",
      problem: "Paper prescriptions and isolated billing software led to prolonged patient waiting times, transcription errors in pharmacy medication dispensing, inventory leakage, and delayed insurance claims.",
      solution: "Developed an integrated MEAN/MERN clinical workflow engine where patient intake automatically generates a lifecycle record passing sequentially from Reception to Doctor Desk, Pharmacy, and Billing without redundant re-entry.",
      architectureDescription: "A secure REST API architecture enforcing HIPAA-conscious access boundaries. Doctor prescriptions immediately queue into the Pharmacy dispenser module with atomic inventory decrements, simultaneously building the final checkout billing balance.",
      architectureNodes: [
        { name: "Clinical Frontends", type: "client", description: "Modular SPAs for Triage, Doctor Desk, Pharmacy, and Cashier" },
        { name: "Secure Gateway", type: "gateway", description: "JWT authorization, HTTPS SSL termination, and rate limiting" },
        { name: "Clinical Micro-Services", type: "service", description: "Patient registry, prescription engine, and inventory services" },
        { name: "MongoDB Health Records", type: "database", description: "Schemaless patient history, vitals logs, and diagnostic records" },
        { name: "Medical Document Vault", type: "storage", description: "AWS S3 storage for lab reports, radiology scans, and scans" },
        { name: "Payment & Insurance Gateway", type: "thirdparty", description: "POS transaction integration and claims reconciliation" }
      ],
      architectureFlow: [
        "Patient arrives at Reception: Intake creates medical record and assigns queue number",
        "Doctor opens Consultation Desk: Views medical history, logs vitals, enters digital Rx",
        "System creates prescription entry and transmits item requests to Pharmacy counter",
        "Pharmacy dispenses drugs: MongoDB atomic operations deduct batch inventory levels",
        "Billing module compiles consultation fees + pharmacy charges into unified invoice",
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
          title: "Consolidated Billing Engine",
          description: "Automated compilation of consultation, laboratory, medication, and bed charges into itemized GST/tax compliant invoices."
        },
        {
          title: "Diagnostic Lab & Scan Archival",
          description: "Secure upload and viewing of PDF reports and DICOM imaging references stored on AWS S3 with signed URL access."
        },
        {
          title: "Departmental Queue Management",
          description: "Live queue monitors keeping patients informed of estimated wait times outside doctor chambers and lab stations."
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
        { metric: "0", label: "Dispensation Inventory Mismatches" },
        { metric: "100%", label: "Digital Prescription Adoption" },
        { metric: "3.5x", label: "Faster Billing Checkout" }
      ]
    }
  }
];
