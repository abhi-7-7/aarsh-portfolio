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
  resumeSizeLabel: undefined as string | undefined,
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
      "AI-powered mock interview platform with resume analysis, voice-to-text interview flow, AI answer scoring, and Razorpay payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "OpenRouter AI", "Web Speech API"],
    github: "https://github.com/abhi-7-7/Interview_AI",
    live: "https://interview-ai-tawny.vercel.app/",
    metrics: [
      "9 Production deployments",
      "PDF Resume Parsing",
      "Voice-to-text AI Flow",
      "Razorpay Payment Integration",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "SmartFlow",
    description:
      "Intelligent Task Management system demonstrating production-grade design patterns (Strategy, Observer, Builder, Interceptor) with a layered architecture.",
    tech: ["TypeScript", "React 19", "Node.js", "Prisma", "PostgreSQL (Neon)", "Zod", "JWT"],
    github: "https://github.com/abhi-7-7/System_Design_Capstone",
    live: "https://system-design-capstone.vercel.app/",
    metrics: [
      "23 Vercel deployments",
      "4 Design Patterns",
      "JWT + Google OAuth 2.0",
      "31 commits",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "TelecomIQ",
    description:
      "End-to-end ML + Agentic AI pipeline for telecom churn prediction using XGBoost, a multi-node LangGraph agent, and FAISS-based RAG.",
    tech: ["Python", "XGBoost", "LangGraph", "LangChain", "FAISS", "Groq LLM", "Streamlit"],
    github: "https://github.com/abhi-7-7/GenAi",
    live: "https://genai2401010007.streamlit.app/",
    metrics: [
      "XGBoost Prediction Model",
      "LangGraph Agent Workflow",
      "FAISS RAG Retrieval",
      "⭐ 1 Star / 🍴 1 Fork",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "Codebase RAG Assistant",
    description:
      "Production-ready RAG app that allows chatting with any GitHub repository using MiniLM embeddings, LLaMA 3, and conversation memory.",
    tech: ["Python", "LangChain", "FAISS", "LLaMA 3 (Groq)", "Streamlit", "HuggingFace"],
    github: "https://github.com/abhi-7-7/COdebase_rag_Assistant",
    live: "https://codaxxistant.streamlit.app/",
    metrics: [
      "Source File Citations",
      "MMR Retrieval Diversity",
      "6-turn Conversation Memory",
      "Smart MD5 Caching",
      "2025 · 2nd year",
    ],
    featured: true,
  },
  {
    title: "Credex AI Spend Audit",
    description:
      "Next.js SaaS tool for startups to audit and optimize AI tool spending across various providers with Supabase data persistence.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Groq API", "Tailwind CSS", "GitHub Actions"],
    github: "https://github.com/abhi-7-7/Credex",
    live: "https://credex-sooty.vercel.app/",
    metrics: [
      "Multi-tool Audit Engine",
      "Supabase Integration",
      "GitHub Actions CI/CD",
      "Next.js 14 App Router",
    ],
    featured: true,
  },
  {
    title: "LSTM Stock Predictor",
    description:
      "Deep learning time-series forecasting model using a 3-layer stacked LSTM to predict stock prices with high accuracy (R² = 0.9412).",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "yfinance", "Streamlit"],
    github: "https://github.com/abhi-7-7/Stock_PRedictor",
    live: "https://stocxpred.streamlit.app/",
    metrics: [
      "R² Score: 0.9412",
      "MAPE: 2.91%",
      "3-layer Stacked LSTM",
      "Yahoo Finance Integration",
    ],
    featured: false,
  },
  {
    title: "Binance Trading Bot",
    description:
      "Modular Python bot for executing MARKET and LIMIT orders on Binance Futures Testnet with clean logging and error handling.",
    tech: ["Python", "Binance API", "REST API", "Streamlit", "Logging"],
    github: "https://github.com/abhi-7-7/Python_binance",
    live: "https://binancepython.streamlit.app/",
    metrics: [
      "Futures Testnet Support",
      "MARKET & LIMIT Orders",
      "Modular Architecture",
    ],
    featured: false,
  },
  {
    title: "Brazil Traffic EDA",
    description:
      "Exploratory data analysis of 16+ years of Brazilian Federal Police traffic incidents with data cleaning and Tableau visualization.",
    tech: ["Python", "pandas", "Jupyter Notebook", "Tableau", "Data Analysis"],
    github: "https://github.com/abhi-7-7/Brazil_traffic",
    metrics: [
      "16+ years of incidents",
      "Multi-year CSV merging",
      "Interactive Tableau Dashboard",
    ],
    featured: false,
  },
  {
    title: "Audio Emotion Classifier",
    description:
      "Modular signal processing pipeline and ML model for classifying human emotions from audio speech patterns using MFCC features.",
    tech: ["Python", "scikit-learn", "Signal Processing", "MFCC"],
    github: "https://github.com/abhi-7-7/AI-Project",
    metrics: [
      "2-stage Preprocessing",
      "Feature Extraction Pipeline",
      "ML-based Inference",
    ],
    featured: false,
  },
  {
    title: "Exam Notes Generator",
    description:
      "Full-stack AI application for generating structured revision notes from study content using OpenAI API and JWT authentication.",
    tech: ["React", "JavaScript", "Node.js", "Express", "OpenAI API", "JWT"],
    github: "https://github.com/abhi-7-7/Exam_Notes_Generator",
    metrics: [
      "AI Note Generation",
      "JWT Authentication",
      "Full-stack Architecture",
    ],
    featured: false,
  },
  {
    title: "Fluid UI",
    description:
      "Experimental UI framework focused on fluid transitions and agent-driven layout control for reactive web applications.",
    tech: ["TypeScript", "React", "CSS", "Design Systems"],
    github: "https://github.com/abhi-7-7/Fluid_UI",
    metrics: [
      "96.1% TypeScript",
      "Component-driven design",
      "Reactive Framework",
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