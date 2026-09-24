export interface GitHubRepo {
  name: string;
  suite: string;
  category: string;
  isPrivate: boolean;
  description: string;
  language: string;
  languageColor: string;
  updatedAt: string;
  architectureTags: string[];
  metrics: string;
  sparkline: number[];
  url: string;
}

export interface GitHubStats {
  name: string;
  username: string;
  profileUrl: string;
  avatarUrl: string;
  headline: string;
  location: string;
  totalRepos: number;
  contributionsCount: string;
  stackHighlights: string[];
}

export const githubProfileData: GitHubStats = {
  name: "Praveen",
  username: "praveeny5117",
  profileUrl: "https://github.com/praveeny5117",
  avatarUrl: "https://github.com/praveeny5117.png",
  headline: "Lead Full Stack Engineer • Scaling Angular 18+, Node.js 22+ & MongoDB",
  location: "Kallakurichi, Tamil Nadu, India",
  totalRepos: 18,
  contributionsCount: "1,420+",
  stackHighlights: ["Angular 18+", "Node.js 22+", "MongoDB 50% Speedup", "AWS EC2/S3", "WebSockets"]
};

export const userRepositories: GitHubRepo[] = [
  {
    name: "smartschool_backend",
    suite: "Smart School ERP",
    category: "Multi-Tenant Core Backend",
    isPrivate: true,
    description: "Enterprise multi-tenant school ERP backend service engineered with Node.js and MongoDB. Powers isolated tenant contexts, complex fee aggregation pipelines, automated Razorpay webhooks, and AWS S3 encrypted student vaults.",
    language: "JavaScript",
    languageColor: "#F1E05A",
    updatedAt: "Updated on Aug 16",
    architectureTags: ["Node.js 22+", "MongoDB Aggregations", "JWT RBAC", "Razorpay Webhooks", "AWS S3"],
    metrics: "40K+ Student Records Managed",
    sparkline: [4, 6, 5, 8, 7, 14, 11, 28, 16, 18, 26, 19],
    url: "https://github.com/praveeny5117"
  },
  {
    name: "smartschool_frontend",
    suite: "Smart School ERP",
    category: "Enterprise Angular SPA",
    isPrivate: true,
    description: "Angular enterprise SPA providing data-dense operational portals for Super Admins, School Principals, Teachers, and Guardians. Features virtual-scrolled PrimeNG data grids, dynamic fee receipts, and real-time attendance boards.",
    language: "HTML",
    languageColor: "#E34C26",
    updatedAt: "Updated on Aug 16",
    architectureTags: ["Angular 18+", "PrimeNG Grid", "RxJS Streams", "Tailwind CSS", "Role Views"],
    metrics: "Sub-Second Table Filtering",
    sparkline: [3, 4, 3, 6, 8, 12, 10, 24, 15, 19, 22, 16],
    url: "https://github.com/praveeny5117"
  },
  {
    name: "smartschool_website",
    suite: "Smart School ERP",
    category: "Public Admissions & Portal",
    isPrivate: true,
    description: "High-performance institutional admissions portal and student onboarding platform. Implements end-to-end TypeScript type boundaries, automated registration forms, and SEO-optimized responsive layouts.",
    language: "TypeScript",
    languageColor: "#3178C6",
    updatedAt: "Updated on Aug 16",
    architectureTags: ["TypeScript", "Responsive UI", "Form Validation", "SEO Meta", "WCAG 2.1"],
    metrics: "100% Core Web Vitals",
    sparkline: [2, 3, 4, 3, 5, 7, 6, 9, 8, 14, 9, 7],
    url: "https://github.com/praveeny5117"
  },
  {
    name: "order_me_backend",
    suite: "OrderMe Hospitality",
    category: "Live Operations & KDS Backend",
    isPrivate: true,
    description: "Real-time hotel & restaurant operations backend built with Node.js and WebSockets. Dispatches guest orders to Kitchen Display Systems (KDS) with live timers, coordinates housekeeping tasks, and logs immutable SHA-256 audit trails.",
    language: "JavaScript",
    languageColor: "#F1E05A",
    updatedAt: "Updated on Mar 29",
    architectureTags: ["Node.js", "WebSockets", "KDS Dispatcher", "Immutable Audit Logs", "PM2 Cluster"],
    metrics: "<42ms Event Latency",
    sparkline: [3, 5, 4, 7, 8, 7, 11, 9, 16, 12, 10, 8],
    url: "https://github.com/praveeny5117"
  },
  {
    name: "order_me_frontend",
    suite: "OrderMe Hospitality",
    category: "Guest Ordering & Staff App",
    isPrivate: true,
    description: "Real-time guest in-room dining interface and service staff handheld floor app. Provides live room order progress tracking (Placed ⟶ Prep ⟶ En Route ⟶ Delivered), amenity requests, and digital room key delivery confirmation.",
    language: "HTML",
    languageColor: "#E34C26",
    updatedAt: "Updated on Mar 29",
    architectureTags: ["Angular", "Live Socket Tracking", "KDS Tablet UI", "Service Dispatch", "NFC Verification"],
    metrics: "Zero Lost Service Tickets",
    sparkline: [2, 3, 4, 4, 6, 5, 8, 7, 13, 9, 7, 6],
    url: "https://github.com/praveeny5117"
  }
];

// Generate 52 weeks of contribution heatmap activity
export interface HeatmapDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function generateHeatmapData(): HeatmapDay[] {
  const days: HeatmapDay[] = [];
  const today = new Date();
  
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const baseChance = isWeekend ? 0.35 : 0.85;
    const rand = Math.random();
    
    let count = 0;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    
    if (rand < baseChance) {
      const commits = Math.floor(Math.random() * (isWeekend ? 4 : 9)) + 1;
      count = commits;
      if (commits >= 7) level = 4;
      else if (commits >= 5) level = 3;
      else if (commits >= 3) level = 2;
      else level = 1;
    }
    
    days.push({
      date: d.toISOString().split('T')[0],
      count,
      level
    });
  }
  
  return days;
}
