/**
 * Skill Sync Mock Data
 * Realistic JSON data for Students, Industry Partners, and Faculty.
 */

export const ROLES_DATA = {
  student: {
    id: 'student',
    title: 'Student',
    tagline: 'Supercharge your degree with in-demand industry skills',
    description: 'Bridge curriculum gaps, follow interactive node roadmaps, get matched to high-growth jobs, and showcase your live portfolio.',
    badge: 'Fast-Track Career',
    icon: 'GraduationCap',
    color: '#FF6B00',
    stats: '12,400+ Students Active'
  },
  industry: {
    id: 'industry',
    title: 'Industry',
    tagline: 'Hire pre-vetted, roadmap-ready engineering talent',
    description: 'Browse verified student portfolios, publish high-priority job/internship openings, and sponsor specialized industry courses.',
    badge: 'Direct Talent Pipeline',
    icon: 'Building2',
    color: '#FF8A00',
    stats: '450+ Companies Hiring'
  },
  faculty: {
    id: 'faculty',
    title: 'Faculty',
    tagline: 'Upskill with modern FDPs & invite industry mentors',
    description: 'Access Faculty Development Programs, organize guest lectures with industry experts, and host collaborative academic symposiums.',
    badge: 'Academic Excellence',
    icon: 'BookOpenCheck',
    color: '#FFA000',
    stats: '850+ Faculty Mentors'
  }
};

export const QUESTIONNAIRE_DATA = {
  student: [
    {
      id: 'degree',
      question: 'What degree or program are you currently pursuing?',
      subtitle: 'We will compare your college curriculum against current industry benchmarks.',
      type: 'single',
      options: [
        { label: 'B.Tech / B.E. in Computer Science / IT', value: 'cs_it', icon: 'Code', tag: 'Most Popular' },
        { label: 'B.Tech in AI & Data Science / ML', value: 'ai_ds', icon: 'Cpu', tag: 'High Demand' },
        { label: 'B.Tech in Electronics & Communication', value: 'ece', icon: 'Zap', tag: 'Hardware + Tech' },
        { label: 'B.Tech in Mechanical / Robotics', value: 'mech', icon: 'Cog', tag: 'EV & Automation' },
        { label: 'BCA / MCA / B.Sc Computer Science', value: 'bca_mca', icon: 'Terminal', tag: 'Software' },
        { label: 'BBA / MBA / Tech Management', value: 'mgmt', icon: 'Briefcase', tag: 'Product & Ops' }
      ]
    },
    {
      id: 'year',
      question: 'Which academic year are you currently in?',
      subtitle: 'Helps customize your roadmap timeline and internship eligibility.',
      type: 'single',
      options: [
        { label: '1st Year — Building Fundamentals', value: '1st_year' },
        { label: '2nd Year — Exploring Core Fields', value: '2nd_year' },
        { label: '3rd Year — Seeking Internships & Projects', value: '3rd_year' },
        { label: '4th Year / Recent Graduate — Ready for Placements', value: '4th_year' }
      ]
    },
    {
      id: 'targetRole',
      question: 'What is your primary career aspiration?',
      subtitle: 'Pick the domain you want your roadmap tailored towards.',
      type: 'single',
      options: [
        { label: 'Full Stack Web & Cloud Architect', value: 'fullstack', icon: 'Layers' },
        { label: 'AI Engineer & LLM Specialist', value: 'ai_ml', icon: 'Bot' },
        { label: 'DevOps, SRE & Cloud Infrastructure', value: 'devops', icon: 'Cloud' },
        { label: 'Data Analyst & BI Engineer', value: 'data_bi', icon: 'BarChart3' },
        { label: 'Cybersecurity & Application Security', value: 'security', icon: 'ShieldCheck' }
      ]
    },
    {
      id: 'currentSkillLevel',
      question: 'How comfortable are you with practical programming?',
      subtitle: 'Zero shame here! We personalize the starting milestone accordingly.',
      type: 'single',
      options: [
        { label: 'Beginner (Know basic syntax like loops, if/else)', value: 'beginner' },
        { label: 'Intermediate (Built 1-2 small projects or mini-apps)', value: 'intermediate' },
        { label: 'Advanced (Shipped full-stack apps or worked with APIs & Git)', value: 'advanced' }
      ]
    }
  ],
  faculty: [
    {
      id: 'department',
      question: 'Which department or school do you represent?',
      subtitle: 'Customizes relevant FDPs, research conferences, and guest speakers.',
      type: 'single',
      options: [
        { label: 'Computer Science & Engineering', value: 'cse' },
        { label: 'Electronics & Communication', value: 'ece' },
        { label: 'Data Science & Artificial Intelligence', value: 'ds_ai' },
        { label: 'Mechanical & Automation Engineering', value: 'mech' },
        { label: 'Management & Technology Studies', value: 'mgmt' }
      ]
    },
    {
      id: 'focusArea',
      question: 'What is your main collaborative goal this semester?',
      subtitle: 'We will match you with industry leaders and FDP opportunities.',
      type: 'single',
      options: [
        { label: 'Organize Industry Guest Lectures & Workshops', value: 'guest_lecture' },
        { label: 'Upskill Faculty via Hands-on FDPs (AI, Cloud, Microservices)', value: 'fdp_upskill' },
        { label: 'Joint Industry-Academic Research & Patents', value: 'research_collab' },
        { label: 'Curriculum Revamp to match 2026 Industry Needs', value: 'curriculum_sync' }
      ]
    }
  ],
  industry: [
    {
      id: 'companyType',
      question: 'What type of organization do you represent?',
      subtitle: 'Tailors your talent search, job board, and course sponsorship tools.',
      type: 'single',
      options: [
        { label: 'Fast-Growing Tech Startup / Scaleup', value: 'startup' },
        { label: 'Mid-sized IT Product / SaaS Company', value: 'saas' },
        { label: 'Enterprise / MNC / Global Tech Hub', value: 'enterprise' },
        { label: 'Staffing & Talent Incubation Agency', value: 'agency' }
      ]
    },
    {
      id: 'primaryNeed',
      question: 'What is your primary focus on Skill Sync?',
      subtitle: 'You can access all tools anytime from your dashboard.',
      type: 'single',
      options: [
        { label: 'Hire Verified Entry-Level & Intern Talent', value: 'hire' },
        { label: 'Sponsor Hackathons & Industry Course Tracks', value: 'sponsor' },
        { label: 'Deliver Guest Masterclasses & Mentorship', value: 'mentor' }
      ]
    }
  ]
};

export const SKILL_COMPARISON_DATA = {
  cs_it: {
    degreeName: 'B.Tech / B.E. in Computer Science',
    targetIndustry: 'Modern Full-Stack & Cloud Engineering',
    degreeMatchScore: 42,
    industryReadinessScore: 88,
    summary: 'Standard university syllabi cover foundational theory (C, DBMS SQL, OS concepts), but miss 58% of modern deployment, reactive architectures, TypeScript, CI/CD, and Cloud-native workflows required by 2026 tech employers.',
    coveredSkills: [
      { name: 'C / C++ Syntax & OOP Basics', level: 90, status: 'covered', note: 'Standard 1st/2nd year subject' },
      { name: 'Relational Database Concepts (SQL)', level: 75, status: 'covered', note: 'Basic ER diagrams & DDL/DML queries' },
      { name: 'Data Structures & Algorithms Theory', level: 85, status: 'covered', note: 'Arrays, Trees, Graphs theory' },
      { name: 'Operating Systems & Process Scheduling', level: 70, status: 'covered', note: 'Memory management & paging' },
      { name: 'Software Engineering (Waterfall Model)', level: 60, status: 'partial', note: 'Outdated methodologies taught' }
    ],
    missingSkills: [
      { name: 'Modern Full-Stack (React 19, TypeScript, Next.js)', level: 95, gap: 'High Gap', demand: '98% Tech Jobs' },
      { name: 'Cloud & Containerization (Docker, AWS ECS/Lambda)', level: 88, gap: 'High Gap', demand: '89% Tech Jobs' },
      { name: 'Production Backend (Node.js, PostgreSQL, Redis, Kafka)', level: 92, gap: 'High Gap', demand: '94% Tech Jobs' },
      { name: 'CI/CD Pipelines & Git Workflow (GitHub Actions)', level: 80, gap: 'Medium Gap', demand: '84% Tech Jobs' },
      { name: 'Applied AI & LLM Integrations (Vector DBs, LangChain)', level: 85, gap: 'Emerging', demand: '78% Tech Jobs' },
      { name: 'System Design & REST/GraphQL API Architecture', level: 78, gap: 'Critical', demand: '91% Tech Jobs' }
    ],
    actionPlan: [
      'Replace isolated theory with end-to-end production projects.',
      'Transition from plain C/C++ to TypeScript and modern JavaScript runtime.',
      'Deploy applications live on AWS/Vercel with automated test pipelines.'
    ]
  },
  ai_ds: {
    degreeName: 'B.Tech in AI & Data Science',
    targetIndustry: 'Production AI & LLMOps Engineering',
    degreeMatchScore: 48,
    industryReadinessScore: 92,
    summary: 'While universities teach statistical math and Scikit-Learn models on toy datasets (Iris/Titanic), industry requires LLM fine-tuning, RAG architectures, model quantization, and scalable real-time inference APIs.',
    coveredSkills: [
      { name: 'Probability, Linear Algebra & Statistics', level: 92, status: 'covered', note: 'Strong theoretical backbone' },
      { name: 'Python Basics & NumPy / Pandas', level: 85, status: 'covered', note: 'Basic data manipulation' },
      { name: 'Supervised ML Algorithms (Scikit-Learn)', level: 80, status: 'covered', note: 'Linear regression, Decision Trees' },
      { name: 'Basic Neural Networks (Keras/TensorFlow)', level: 65, status: 'partial', note: 'MNIST image classification' }
    ],
    missingSkills: [
      { name: 'Retrieval Augmented Generation (RAG) & Vector Stores', level: 94, gap: 'High Gap', demand: '96% AI Roles' },
      { name: 'Fine-tuning Open Source Models (Llama, Mistral, LoRA)', level: 88, gap: 'High Gap', demand: '88% AI Roles' },
      { name: 'FastAPI Microservices & Asynchronous Serving', level: 86, gap: 'Medium Gap', demand: '91% AI Roles' },
      { name: 'MLOps, Weights & Biases, Docker Containerization', level: 82, gap: 'Critical', demand: '85% AI Roles' }
    ],
    actionPlan: [
      'Build AI applications with live streaming API integrations.',
      'Learn vector search indexing with Pinecone/Qdrant and chunking strategies.',
      'Deploy containerized ML microservices on Kubernetes/AWS.'
    ]
  }
};

export const ROADMAP_DATA = {
  title: 'Full-Stack Cloud & AI Application Engineer',
  estimatedWeeks: '16 Weeks',
  difficulty: 'Zero to Job-Ready',
  phases: [
    {
      id: 'part-1',
      phaseNumber: 'PART 1',
      title: 'Modern Web Foundations & TypeScript',
      duration: 'Weeks 1-4',
      badge: 'Foundation Milestone',
      status: 'completed',
      completionPercentage: 100,
      description: 'Master clean ES6+ JavaScript, modern TypeScript type systems, DOM reactive state, and atomic component architecture.',
      nodes: [
        { id: 'n1', label: 'Modern JS & ESNext Patterns', completed: true, hours: '12 hrs', keyConcept: 'Closures, Promises, Async/Await, Event Loop' },
        { id: 'n2', label: 'TypeScript Strict Types & Generics', completed: true, hours: '16 hrs', keyConcept: 'Interfaces, Union Types, Utility Types' },
        { id: 'n3', label: 'React 19 & Component Lifecycle', completed: true, hours: '20 hrs', keyConcept: 'Hooks, Custom Hooks, Performance Memo' },
        { id: 'n4', label: 'Tailwind / Vanilla CSS Design Systems', completed: true, hours: '10 hrs', keyConcept: 'Responsive Flex/Grid, Animation Tokens' }
      ],
      project: 'Shipped: Interactive Multi-Role SaaS Design System'
    },
    {
      id: 'part-2',
      phaseNumber: 'PART 2',
      title: 'Scalable Backend APIs & Relational Systems',
      duration: 'Weeks 5-8',
      badge: 'Core Engineering',
      status: 'in-progress',
      completionPercentage: 65,
      description: 'Design robust REST & GraphQL APIs, manage ACID transactions with PostgreSQL & Prisma, and implement JWT/OAuth2 session security.',
      nodes: [
        { id: 'n5', label: 'Node.js, Express & Fastify Servers', completed: true, hours: '18 hrs', keyConcept: 'Middlewares, Streams, Error Handlers' },
        { id: 'n6', label: 'PostgreSQL & Prisma ORM Modeling', completed: true, hours: '22 hrs', keyConcept: 'Schema Migrations, Indexing, Joins' },
        { id: 'n7', label: 'Redis Caching & Rate Limiting', completed: false, hours: '14 hrs', keyConcept: 'TTL, Pub/Sub, Token Bucket Throttling' },
        { id: 'n8', label: 'Auth & Role-Based Access Control (RBAC)', completed: false, hours: '12 hrs', keyConcept: 'JWT, Refresh Tokens, bcrypt, OAuth' }
      ],
      project: 'Active Project: High-Concurrency Booking & Payment Engine'
    },
    {
      id: 'part-3',
      phaseNumber: 'PART 3',
      title: 'Cloud Infrastructure, Docker & AI Pipelines',
      duration: 'Weeks 9-12',
      badge: 'Advanced Systems',
      status: 'locked',
      completionPercentage: 0,
      description: 'Containerize multi-service architectures with Docker, set up automated CI/CD on GitHub Actions, and integrate RAG vector search.',
      nodes: [
        { id: 'n9', label: 'Docker & Multi-Stage Builds', completed: false, hours: '16 hrs', keyConcept: 'Dockerfiles, Compose, Volume mounts' },
        { id: 'n10', label: 'AWS Deployment (ECS, S3, RDS)', completed: false, hours: '24 hrs', keyConcept: 'VPC, IAM Roles, CloudFront CDN' },
        { id: 'n11', label: 'GitHub Actions CI/CD Automation', completed: false, hours: '14 hrs', keyConcept: 'Linting, Unit Tests, Zero-Downtime Deploy' },
        { id: 'n12', label: 'LLM Integration & Vector Embeddings', completed: false, hours: '18 hrs', keyConcept: 'OpenAI API, LangChain, Pinecone Vector Index' }
      ],
      project: 'Upcoming: AI Document Copilot with Semantic Search'
    },
    {
      id: 'part-4',
      phaseNumber: 'PART 4',
      title: 'Production Capstone & Industry Placement',
      duration: 'Weeks 13-16',
      badge: 'Industry Ready',
      status: 'locked',
      completionPercentage: 0,
      description: 'Build a production-grade distributed application evaluated directly by verified hiring managers and industry partners.',
      nodes: [
        { id: 'n13', label: 'System Design & High Availability', completed: false, hours: '20 hrs', keyConcept: 'Load Balancers, Microservices, Sharding' },
        { id: 'n14', label: 'End-to-End Testing (Playwright & Vitest)', completed: false, hours: '12 hrs', keyConcept: 'Integration tests, Mocking APIs' },
        { id: 'n15', label: 'Live Industry Capstone Defense', completed: false, hours: '30 hrs', keyConcept: 'Code Review with Senior Tech Leads' },
        { id: 'n16', label: 'Verified Skill Portfolio & Direct Referral', completed: false, hours: '8 hrs', keyConcept: 'Direct Interview Invitations' }
      ],
      project: 'Final Capstone: Distributed Real-Time Collaboration Hub'
    }
  ]
};

export const INDUSTRY_MATCH_DATA = {
  summary: {
    matchedRolesCount: 14,
    topIndustry: 'Cloud SaaS & FinTech',
    averageStartingSalary: '₹14.5 LPA ($92k USD)',
    overallMatch: 91
  },
  roles: [
    {
      id: 'r1',
      title: 'Full Stack Cloud Engineer',
      matchScore: 94,
      demandLevel: 'Very High',
      salaryRange: '₹12 - ₹22 LPA',
      companiesHiring: ['Razorpay', 'CRED', 'Swiggy', 'Zomato', 'Atlassian'],
      keySkills: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      description: 'Build responsive web apps and resilient backend services that serve millions of daily active users.',
      openPositions: 142
    },
    {
      id: 'r2',
      title: 'AI Solutions & Full-Stack Developer',
      matchScore: 89,
      demandLevel: 'High',
      salaryRange: '₹14 - ₹26 LPA',
      companiesHiring: ['Postman', 'BrowserStack', 'Microsoft', 'Fractal AI'],
      keySkills: ['Python', 'FastAPI', 'LangChain', 'Next.js', 'Vector DBs'],
      description: 'Integrate generative AI intelligence into customer-facing products with real-time streaming interfaces.',
      openPositions: 88
    },
    {
      id: 'r3',
      title: 'Backend & Distributed Systems Engineer',
      matchScore: 84,
      demandLevel: 'High',
      salaryRange: '₹13 - ₹24 LPA',
      companiesHiring: ['PhonePe', 'Uber', 'Flipkart', 'Cisco'],
      keySkills: ['Go / Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'],
      description: 'Architect microservices, optimize database queries, and guarantee sub-50ms API response latencies.',
      openPositions: 96
    },
    {
      id: 'r4',
      title: 'DevOps & Cloud Infrastructure Engineer',
      matchScore: 78,
      demandLevel: 'Moderate',
      salaryRange: '₹11 - ₹20 LPA',
      companiesHiring: ['Infosys Topaz', 'Oracle Cloud', 'Persistent', 'Deloitte'],
      keySkills: ['Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'AWS'],
      description: 'Automate build pipelines, monitor service telemetry, and ensure high availability infrastructure.',
      openPositions: 64
    }
  ]
};

export const MOCK_STUDENTS = [
  {
    id: 's1',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    title: 'Full Stack & Cloud Developer',
    college: 'IIT Roorkee · Class of 2026',
    degree: 'B.Tech Computer Science',
    cgpa: '9.2 / 10',
    matchScore: 96,
    badge: 'Top 1% Coder',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    githubStats: { commits: '840+ this year', repos: 18, stars: 94 },
    topProject: {
      name: 'StreamPulse — Real-Time Video Streaming API',
      description: 'Built distributed video transcoding engine handling 10k concurrent WebRTC streams with Redis caching.',
      techStack: ['TypeScript', 'Node.js', 'FFmpeg', 'Docker', 'Postgres'],
      demoUrl: 'https://github.com/aarav-sharma/streampulse'
    },
    verifiedRoadmap: 'Completed Part 1 & Part 2',
    status: 'Actively Interviewing'
  },
  {
    id: 's2',
    name: 'Pooja Verma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    title: 'AI/ML & Full Stack Engineer',
    college: 'BITS Pilani · Class of 2026',
    degree: 'B.E. Computer Science & AI',
    cgpa: '9.4 / 10',
    matchScore: 94,
    badge: 'Hackathon Winner',
    skills: ['Python', 'FastAPI', 'Next.js', 'LangChain', 'Pinecone', 'PyTorch'],
    githubStats: { commits: '1,120+ this year', repos: 24, stars: 165 },
    topProject: {
      name: 'DocuMind — Enterprise RAG Assistant',
      description: 'Multi-tenant RAG chatbot with hybrid vector keyword search and OCR table extraction.',
      techStack: ['Python', 'FastAPI', 'Qdrant', 'React', 'Tailwind'],
      demoUrl: 'https://github.com/pooja-verma/documind'
    },
    verifiedRoadmap: 'Completed Part 1, 2 & 3',
    status: 'Open to Offers'
  },
  {
    id: 's3',
    name: 'Rohan Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    title: 'Backend & Cloud Systems Engineer',
    college: 'NIT Trichy · Class of 2025',
    degree: 'B.Tech Information Technology',
    cgpa: '8.8 / 10',
    matchScore: 90,
    badge: 'Roadmap Certified',
    skills: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes', 'Docker'],
    githubStats: { commits: '670+ this year', repos: 14, stars: 45 },
    topProject: {
      name: 'PayFlow — Distributed Ledger & Payment Gateway',
      description: 'Zero-loss double-entry accounting ledger with idempotent transaction processing.',
      techStack: ['Golang', 'PostgreSQL', 'Redis', 'Docker'],
      demoUrl: 'https://github.com/rohan-desh/payflow'
    },
    verifiedRoadmap: 'Completed Full Roadmap',
    status: 'Ready to Join'
  },
  {
    id: 's4',
    name: 'Ananya Iyer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    title: 'Frontend & UI Architecture Specialist',
    college: 'PES University · Class of 2026',
    degree: 'B.Tech Computer Science',
    cgpa: '9.0 / 10',
    matchScore: 89,
    badge: 'UI Champion',
    skills: ['React 19', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GraphQL'],
    githubStats: { commits: '950+ this year', repos: 21, stars: 210 },
    topProject: {
      name: 'DesignDeck — Component Analytics Tool',
      description: 'Real-time CSS AST analyzer that checks design token compliance in team repos.',
      techStack: ['TypeScript', 'Next.js', 'Wasm', 'Tailwind'],
      demoUrl: 'https://github.com/ananya-iyer/designdeck'
    },
    verifiedRoadmap: 'Completed Part 1 & Part 2',
    status: 'Open to Offers'
  }
];

export const MOCK_JOBS = [
  {
    id: 'j1',
    title: 'Full Stack Engineering Intern (6 Months PPO)',
    company: 'Razorpay Payments',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80',
    location: 'Bengaluru / Hybrid',
    type: 'Internship with PPO',
    stipend: '₹60,000 / month',
    ctc: '₹18 - ₹24 LPA on conversion',
    tags: ['React', 'TypeScript', 'Node.js', 'Postgres', 'Fast-Track PPO'],
    applicantsCount: 78,
    deadline: 'Closing in 4 days',
    urgent: true,
    description: 'Join our Core Merchant Experience squad. Build reliable dashboards, payment retry logic, and modern checkout widgets used by 10M+ users daily.',
    perks: ['MacBook Pro M3 provided', 'Flexible hours', 'Direct mentorship from Principal Engineers']
  },
  {
    id: 'j2',
    title: 'Associate AI Solutions Engineer',
    company: 'Postman',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80',
    location: 'Remote / India',
    type: 'Full-Time Fresher',
    stipend: '₹16 - ₹20 LPA CTC',
    ctc: '₹16 - ₹20 LPA',
    tags: ['Python', 'FastAPI', 'LangChain', 'APIs', 'Remote'],
    applicantsCount: 114,
    deadline: 'Closing in 7 days',
    urgent: false,
    description: 'Work on Postman AI Assistant and developer workflow automation. Help build generative API testing and automated documentation tools.',
    perks: ['100% Remote', 'Annual learning stipend ₹80k', 'Comprehensive Health Insurance']
  },
  {
    id: 'j3',
    title: 'Backend Systems Engineer (Golang / Node)',
    company: 'CRED Club',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80',
    location: 'Bengaluru (Onsite)',
    type: 'Full-Time',
    stipend: '₹22 - ₹28 LPA CTC',
    ctc: '₹22 - ₹28 LPA',
    tags: ['Golang', 'Kafka', 'Redis', 'Microservices', 'High Scale'],
    applicantsCount: 92,
    deadline: 'Closing in 2 days',
    urgent: true,
    description: 'High ownership engineering role handling millions of financial events per minute with sub-second execution guarantees.',
    perks: ['Top 1% Compensation', 'Gourmet meals & gym', 'Equity Stock Grants']
  },
  {
    id: 'j4',
    title: 'Cloud & DevOps Associate',
    company: 'Zomato Tech Hub',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80',
    location: 'Gurugram / Hybrid',
    type: 'Internship to Full-time',
    stipend: '₹45,000 / month',
    ctc: '₹14 - ₹18 LPA',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Grafana', 'CI/CD'],
    applicantsCount: 65,
    deadline: 'Closing in 9 days',
    urgent: false,
    description: 'Monitor high-traffic food ordering infrastructure, automate rollback systems, and optimize multi-region Kubernetes clusters.',
    perks: ['Zomato Gold Pro Perks', 'Hybrid work policy', 'Fast promotion track']
  }
];

export const MOCK_EVENTS = [
  {
    id: 'e1',
    title: 'Masterclass: Scaling Next.js 15 & Server Components to 10M Pageviews',
    category: 'Industry Workshop',
    provider: 'Vercel & Skill Sync',
    date: 'Saturday, Aug 30 · 4:00 PM IST',
    duration: '2.5 Hours',
    speaker: 'Siddharth Rao, Staff Architect @ Vercel',
    attendeesCount: 520,
    maxSeats: 800,
    price: 'Free for Roadmap Students',
    badge: 'Hands-on Coding',
    tags: ['Web Dev', 'Next.js', 'Performance', 'Live Coding'],
    description: 'Deep dive into React Server Components, Streaming SSR, caching strategies, and edge runtime optimizations with live repo teardown.',
    isRegistered: false
  },
  {
    id: 'e2',
    title: 'National 48-Hour GenAI Buildathon 2026',
    category: 'Hackathon',
    provider: 'OpenAI, AWS & Skill Sync',
    date: 'Sep 12-14, 2026',
    duration: '48 Hours',
    speaker: '12 Industry Judges & Mentors',
    attendeesCount: 1450,
    maxSeats: 2000,
    price: '₹5,00,000 Cash Pool + PPO Interviews',
    badge: 'Direct Hiring Perks',
    tags: ['Hackathon', 'LLMs', 'Prizes', 'Team Event'],
    description: 'Build real-world multi-agent systems and full-stack AI applications. Top 10 teams receive direct fast-track interview rounds with hiring partners.',
    isRegistered: true
  },
  {
    id: 'e3',
    title: 'National FDP: Modernizing CS Curriculum with Microservices & Cloud Native',
    category: 'Faculty FDP',
    provider: 'Skill Sync Academic Alliance & IEEE',
    date: 'Sep 5-7, 2026',
    duration: '3 Days Virtual FDP',
    speaker: 'Prof. Arvind Kumar (IIT-D) & Dr. Maya S (AWS)',
    attendeesCount: 230,
    maxSeats: 300,
    price: 'Sponsored / Free for Faculty',
    badge: 'IEEE Certified',
    tags: ['Faculty Only', 'Curriculum Design', 'Hands-on Labs', 'Certificate'],
    description: 'An intensive 3-day development program equipping university professors with hands-on labs on Docker, CI/CD, and industry evaluation rubrics.',
    isRegistered: false
  },
  {
    id: 'e4',
    title: 'Industry Guest Lecture: Demystifying FinTech Architecture & Security',
    category: 'Guest Lecture',
    provider: 'Razorpay Engineering',
    date: 'Friday, Sep 18 · 5:30 PM IST',
    duration: '90 Minutes',
    speaker: 'Vikram Menon, VP of Engineering @ Razorpay',
    attendeesCount: 380,
    maxSeats: 500,
    price: 'Open for Faculty & Students',
    badge: 'Live Q&A',
    tags: ['Guest Lecture', 'FinTech', 'Security', 'Architecture'],
    description: 'Understand PCI-DSS compliance, distributed database sharding, and high throughput payment switches powering India’s payment economy.',
    isRegistered: false
  }
];

export const MOCK_COURSES = [
  {
    id: 'c1',
    title: 'Production Full-Stack Cloud Engineering Bootcamp',
    provider: 'Skill Sync Industry Alliance',
    instructor: 'Lead Architects from Razorpay & Swiggy',
    enrolledCount: 3420,
    rating: 4.9,
    modulesCount: 24,
    totalHours: '48 hrs',
    progress: 75,
    status: 'In Progress',
    badge: 'Industry Verified',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80',
    tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'c2',
    title: 'Generative AI & LLMOps for Enterprise Applications',
    provider: 'Open Source AI Guild',
    instructor: 'AI Research Scientists',
    enrolledCount: 2180,
    rating: 4.8,
    modulesCount: 18,
    totalHours: '36 hrs',
    progress: 30,
    status: 'In Progress',
    badge: 'High Demand',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400&auto=format&fit=crop&q=80',
    tags: ['Python', 'LangChain', 'FastAPI', 'RAG', 'Vector DBs']
  },
  {
    id: 'c3',
    title: 'High-Concurrency System Design & Distributed Caching',
    provider: 'Tech Scaleup Academy',
    instructor: 'Ex-Google Staff SRE',
    enrolledCount: 1850,
    rating: 4.9,
    modulesCount: 16,
    totalHours: '32 hrs',
    progress: 0,
    status: 'Explore Now',
    badge: 'Advanced Level',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80',
    tags: ['Redis', 'Kafka', 'System Design', 'Microservices']
  }
];

export const MOCK_FACULTY_PROGRAMS = [
  {
    id: 'fdp-1',
    title: 'FDP: Applied Artificial Intelligence in Higher Education & Lab Automation',
    duration: '2 Weeks (Online + Hands-on)',
    accreditation: 'AICTE / IEEE Approved',
    enrolledFaculty: 340,
    rating: 4.9,
    description: 'Equip faculty with ready-to-use coding curricula, auto-grading Jupyter test suites, and project guidelines for student cohorts.',
    perks: ['Official Certificate of Completion', 'Ready-to-use Lab Repos', 'Student Rubric Guides']
  },
  {
    id: 'fdp-2',
    title: 'FDP: Cloud Architecture & DevOps Best Practices for CS/IT Departments',
    duration: '1 Week (Intensive)',
    accreditation: 'AWS Academy Certified',
    enrolledFaculty: 210,
    rating: 4.8,
    description: 'Learn modern Docker container workflows, CI/CD with GitHub Actions, and how to host university cloud labs on educational AWS credits.',
    perks: ['Free AWS Cloud Lab Credits ($500)', 'Teaching Slides & Syllabus Kit']
  }
];

export const MOCK_COLLAB_REQUESTS = [
  {
    id: 'collab-1',
    company: 'Razorpay Engineering',
    topic: 'Guest Lecture: Microservices & Event-Driven Architecture',
    speaker: 'Aman Deep (Principal Engineer)',
    format: 'Virtual / 90 Mins',
    datesAvailable: 'Sep 10, Sep 15, Sep 22',
    description: 'Available to speak to 3rd & 4th year CSE students about real-world payment event pipelines and Kafka queues.',
    status: 'Available to Invite'
  },
  {
    id: 'collab-2',
    company: 'Postman Education Alliance',
    topic: 'Hands-on Workshop: API Design First & Testing in Academia',
    speaker: 'Sneha Patel (DevRel Lead)',
    format: 'Interactive 3-Hour Workshop',
    datesAvailable: 'Sep 18, Sep 25',
    description: 'Conduct a certified workshop for students and faculty on REST API best practices and Postman workspace sharing.',
    status: 'Available to Invite'
  },
  {
    id: 'collab-3',
    company: 'CRED Club',
    topic: 'Industry Mentorship: Capstone Project Evaluation & Code Reviews',
    speaker: 'Panel of 4 Senior Tech Leads',
    format: 'Bi-Weekly Mentorship Sessions',
    datesAvailable: 'Throughout Fall 2026',
    description: 'Direct code review and architecture critique for final-year engineering student capstones.',
    status: 'Available to Invite'
  }
];
