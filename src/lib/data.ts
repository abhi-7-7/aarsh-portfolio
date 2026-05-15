// ─── Personal Info ───────────────────────────────────────────────────────────
export const personal = {
  name: "Aarsh Bhatnagar",
  role: "Full-Stack Engineer · Applied AI",
  subtagline: "CS & AI student at Rishihood University (Newton School of Technology)",
  tagline: "I build and ship AI-powered products — from inference pipelines to production UIs.",
  about: `CS & AI student graduating in 2028. I focus on shipping real products rather than demos — full-stack systems with auth, databases, and deployed endpoints that people can actually use. My work sits at the intersection of applied AI and product engineering: building LangGraph workflows, wiring up RAG pipelines, and designing the UIs around them. I have shipped 7+ production projects on Vercel and Streamlit, ranging from AI mock interview platforms with voice APIs to deep learning time-series predictors.`,
  email: "aarsh4344@gmail.com",
  linkedin: "https://linkedin.com/in/aarsh-abhi7/",
  github: "https://github.com/abhi-7-7",
  resume: "/Aarsh-Bhatnagar-Resume.pdf",
  resumeSizeLabel: "74 KB",
  profileImage: undefined as string | undefined,
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github?: string;
  live?: string;
  highlight?: string;
  metrics?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "InterviewIQ",
    description:
      "AI-powered mock interview platform featuring a server-side PDF parser with 3,000-character resume capping, OpenRouter LLM integration, and a custom Markdown-to-JSON wrapper for robust parsing.",
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "OpenRouter AI", "Web Speech API"],
    github: "https://github.com/abhi-7-7/Interview_AI",
    live: "https://interview-ai-tawny.vercel.app/",
    metrics: [
      "9 Production deployments",
      "50 Credits per interview flow",
      "Markdown JSON wrapper fix",
      "PDF.js Page-by-page extraction",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "SmartFlow",
    description:
      "Intelligent Task Management system demonstrating production-grade design patterns: Strategy (DeadlineBased), Observer (NotificationSubject), and Builder patterns with a class-based React 19 architecture.",
    tech: ["TypeScript", "React 19", "Node.js", "Prisma", "PostgreSQL (Neon)", "Zod", "JWT"],
    github: "https://github.com/abhi-7-7/System_Design_Capstone",
    live: "https://system-design-capstone.vercel.app/",
    metrics: [
      "23 Vercel deployments",
      "Strategy & Observer patterns",
      "JWT + Google OAuth 2.0",
      "Class-based React components",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "TelecomIQ",
    description:
      "Agentic AI pipeline for churn prediction using a 7,043-record IBM dataset, stratified 80/20 split, and an XGBoost model with scale_pos_weight=2.77 for class imbalance handling.",
    tech: ["Python", "XGBoost", "LangGraph", "LangChain", "FAISS", "Groq LLM", "Streamlit"],
    github: "https://github.com/abhi-7-7/GenAi",
    live: "https://genai2401010007.streamlit.app/",
    metrics: [
      "XGBoost F1-focused model",
      "7,043 IBM dataset records",
      "Stratified 80/20 train split",
      "scale_pos_weight=2.77",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "Codebase RAG Assistant",
    description:
      "Production-ready RAG application utilizing MiniLM embeddings and LLaMA 3 via Groq, featuring a custom MD5-based session caching trick and MMR top-5 retrieval diversity.",
    tech: ["Python", "LangChain", "FAISS", "LLaMA 3 (Groq)", "Streamlit", "HuggingFace"],
    github: "https://github.com/abhi-7-7/COdebase_rag_Assistant",
    live: "https://codaxxistant.streamlit.app/",
    metrics: [
      "MMR Top-5 Retrieval",
      "MD5 Repository Caching",
      "LangChain 0.3 Compatibility",
      "Local FAISS Vector Store",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "Credex AI Spend Audit",
    description:
      "Next.js 14 SaaS tool for startups to audit and optimize AI spend, featuring a multi-tool audit engine and GitHub Actions CI for production-grade reliability.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Groq API", "Tailwind CSS", "GitHub Actions"],
    github: "https://github.com/abhi-7-7/Credex",
    live: "https://credex-sooty.vercel.app/",
    metrics: [
      "Multi-tool Audit Engine",
      "GitHub Actions CI/CD",
      "Supabase DB Persistence",
      "Next.js 14 App Router",
    ],
    featured: true,
  },
  {
    title: "LSTM Stock Predictor",
    description:
      "Deep learning time-series model using a 3-layer stacked LSTM with a 60-day lookback window, achieving an R² of 0.9412 on daily Yahoo Finance OHLCV data.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "yfinance", "Streamlit"],
    github: "https://github.com/abhi-7-7/Stock_PRedictor",
    live: "https://stocxpred.streamlit.app/",
    metrics: [
      "R² Score: 0.9412",
      "MAE: 4.8201 / RMSE: 6.1043",
      "60-day Lookback window",
      "3-layer Stacked LSTM",
    ],
    featured: false,
  },
  {
    title: "Binance Trading Bot",
    description:
      "Modular Python trading bot for executing MARKET and LIMIT orders on Binance Futures Testnet, featuring robust error handling and REST API integration.",
    tech: ["Python", "Binance API", "REST API", "Streamlit", "Logging"],
    github: "https://github.com/abhi-7-7/Python_binance",
    live: "https://binancepython.streamlit.app/",
    metrics: [
      "Futures Testnet Support",
      "MARKET & LIMIT Orders",
      "REST API integration",
    ],
    featured: false,
  },
  {
    title: "Brazil Traffic EDA",
    description:
      "Exploratory analysis of 16+ years of federal traffic incident data, featuring multi-year CSV merging, pandas-based validation, and Tableau visualization.",
    tech: ["Python", "pandas", "Jupyter Notebook", "Tableau", "Data Analysis"],
    github: "https://github.com/abhi-7-7/Brazil_traffic",
    metrics: [
      "16+ Years Data Merge",
      "Pandas-based validation",
      "Interactive Tableau Dash",
    ],
    featured: false,
  },
  {
    title: "Audio Emotion Classifier",
    description:
      "Modular signal processing pipeline and ML model utilizing MFCC feature extraction for 2-stage audio emotion classification.",
    tech: ["Python", "scikit-learn", "Signal Processing", "MFCC"],
    github: "https://github.com/abhi-7-7/AI-Project",
    metrics: [
      "MFCC Feature Extraction",
      "2-stage Signal Preprocessing",
      "ML-based Inference",
    ],
    featured: false,
  },
  {
    title: "Exam Notes Generator",
    description:
      "Full-stack AI app utilizing OpenAI API to generate structured revision notes, featuring a JWT-secured backend and React-based study dashboard.",
    tech: ["React", "JavaScript", "Node.js", "Express", "OpenAI API", "JWT"],
    github: "https://github.com/abhi-7-7/Exam_Notes_Generator",
    metrics: [
      "OpenAI API Integration",
      "JWT-secured Backend",
      "React Study Dashboard",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    label: "Frontend",
    items: ["React 19", "Next.js 14", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Streamlit"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "Supabase", "JWT"],
  },
  {
    label: "AI / ML / GenAI",
    items: ["LangGraph", "LangChain", "RAG", "FAISS", "Groq", "XGBoost", "TensorFlow", "scikit-learn"],
  },
  {
    label: "DevOps / Tools",
    items: ["Git", "Vercel", "GitHub Actions", "Vitest", "Zod", "REST APIs"],
  },
  {
    label: "Target Roles",
    items: ["Full-Stack Software Engineer Intern", "Applied AI / AI Systems Intern", "ML Engineer Intern"],
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];