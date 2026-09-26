export const profile = {
  name: "Ankit Yadav",
  role: "AI & Backend Engineer",
  location: "Mumbai, India",
  email: "ankityadav1asia@gmail.com",
  github: "https://github.com/ankityadav1asia",
  linkedin: "https://www.linkedin.com/in/ankityadav11/",
}

export const socials = [
  { name: "GitHub", handle: "@ankityadav1asia", url: "https://github.com/ankityadav1asia" },
  { name: "LinkedIn", handle: "Ankit Yadav", url: "https://www.linkedin.com/in/ankityadav11/" },
  { name: "X (Twitter)", handle: "@ankiteatt", url: "https://x.com/ankiteatt" },
  { name: "WhatsApp", handle: "+91 9096887892", url: "https://wa.me/919096887892" },
]

export const corpus = {
  name: "Corpus",
  tagline: "Team RAG workspaces: answers from your own documents, with citations.",
  summary:
    "Corpus collects files, scanned PDFs, recordings, web pages, YouTube videos and connected apps into notebooks. Ask in plain language and every answer comes only from those sources, with numbered citations that open the exact passage. A studio turns the same sources into reports, mind maps, audio overviews and images, and teams share it all with Admin, Editor and Viewer roles.",
  liveUrl: "https://corpusragagent.vercel.app",
  githubUrl: "https://github.com/ankityadav1asia/Corpus",
  docsUrl: "https://github.com/ankityadav1asia/Corpus/blob/main/docs/ARCHITECTURE.md",
  stats: [
    { value: "349", label: "tests on real Postgres + pgvector (PGlite)" },
    { value: "75", label: "typed API routes, zod-validated" },
    { value: "39k", label: "lines of strict TypeScript" },
    { value: "16", label: "languages for audio overviews" },
  ],
  pipeline: [
    { step: "Plan", detail: "Multi-query rewrites, a step-back question and HyDE" },
    { step: "Retrieve", detail: "pgvector cosine + Postgres full-text search" },
    { step: "Fuse", detail: "Reciprocal Rank Fusion across every query" },
    { step: "Re-rank", detail: "LLM listwise grading or Cohere Rerank" },
    {
      step: "Guard",
      detail: "Weak context never reaches the model",
      output: "Insufficient context in knowledge base.",
    },
    { step: "Answer", detail: "Streamed NDJSON with [n] citations" },
    { step: "Judge", detail: "Faithfulness, relevance and precision, scored async" },
  ],
  highlights: [
    {
      title: "Any source",
      body: "PDFs, scans read with Tesseract OCR, images via vision models, timestamped audio and video transcripts, web pages and YouTube. Google Drive, Notion, GitHub and website crawls stay in sync on a schedule.",
    },
    {
      title: "Studio",
      body: "Executive reports and comparison tables, interactive mind maps, two-host audio overviews in 16 languages including Hindi and Hinglish, and images grounded in your sources.",
    },
    {
      title: "Built for teams",
      body: "Personal and team workspaces, Admin / Editor / Viewer roles with per-notebook overrides, an audit log, read-only share links, and Slack and Microsoft Teams bots.",
    },
    {
      title: "Secure by default",
      body: "Revocable server-side sessions, per-request nonce CSP, AES-256-GCM encrypted credentials with key rotation, SSRF-safe fetching, signed webhooks and workspace-scoped SQL.",
    },
    {
      title: "Jobs that finish",
      body: "A Postgres job queue using FOR UPDATE SKIP LOCKED, retries with backoff, and idempotent, resumable work that fits inside Vercel's function limits.",
    },
    {
      title: "Model-agnostic",
      body: "Gemini by default, or Gemma, Ollama, vLLM, LM Studio and Groq per capability. Each passage stores its embedding model, so a workspace can be re-embedded after switching.",
    },
  ],
  gallery: [
    { src: "/corpus/mind-map.webp", w: 1200, h: 817, caption: "Mind maps across sources; click a topic to trace it" },
    { src: "/corpus/report.webp", w: 1200, h: 917, caption: "Reports with summaries, tables and citations" },
    { src: "/corpus/quality.webp", w: 1200, h: 833, caption: "Answer quality scored by an LLM judge" },
    { src: "/corpus/sources.webp", w: 1200, h: 750, caption: "Sources indexed in the background, resumable" },
  ],
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "pgvector",
    "Neon",
    "Gemini",
    "Ollama / vLLM",
    "Tesseract.js",
    "Zod",
    "Tailwind CSS",
    "Vercel",
    "GitHub Actions",
  ],
}

export const projects = [
  {
    title: "CogniCart",
    subtitle: "AI e-commerce analytics platform",
    points: [
      "Full-stack analytics dashboard on indexed relational queries and optimised CRUD APIs for real-time insight.",
      "Semantic search with vector embeddings and RAG-based natural-language querying, cutting time to insight by 60%.",
      "Services containerised with Docker Compose for reproducible environments and 75% faster deploys.",
    ],
    tech: ["FastAPI", "Next.js", "SQLAlchemy", "Docker", "RAG", "Embeddings"],
    githubUrl: "https://github.com/ankityadav1asia/cognicart",
  },
  {
    title: "CryptexAI",
    subtitle: "Cryptocurrency forecasting platform",
    points: [
      "LSTM, GRU and Transformer forecasters reaching 92% directional accuracy on 5+ years of market data.",
      "Real-time price charts streamed over WebSockets with low-latency, bidirectional updates.",
      "Backtesting and evaluation framework: 35% better trade precision, 40% faster convergence tuned with Optuna.",
    ],
    tech: ["TensorFlow", "FastAPI", "React", "WebSockets", "Docker", "Optuna"],
    githubUrl: "https://github.com/ankityadav1asia/cryptexai",
  },
]

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  {
    group: "AI & ML",
    items: ["RAG", "LLM evaluation", "Embeddings", "pgvector", "Gemini", "Ollama", "LangChain", "TensorFlow", "scikit-learn", "spaCy"],
  },
  {
    group: "Backend & Data",
    items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "Redis", "MongoDB", "SQLAlchemy", "Celery", "Zod"],
  },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "DevOps & Cloud", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Linux", "Nginx"] },
]

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Mumbai",
    period: "2025 — 2027",
    note: "In progress",
    coursework: "Advanced Database Systems, AI & Robotics, Machine Learning",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Mumbai",
    period: "2022 — 2025",
    note: "CGPA 8.41 / 10",
    coursework:
      "Data Structures & Algorithms, Artificial Intelligence, Operating Systems, Computer Networks, Database Systems, Software Engineering, Cloud Computing, Data Science",
  },
]
