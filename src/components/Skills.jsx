import { useFadeUp } from "../hooks/useFadeUp";

const TECH_GROUPS = [
  {
    label: "GenAI & LLMs",
    icon: "🧠",
    items: ["Azure OpenAI", "SAP GenAI Hub", "SAP AI Core", "Prompt Engineering", "RAG Pipelines", "LangChain", "LangGraph", "HuggingFace", "Gradio"],
  },
  {
    label: "Agentic AI",
    icon: "🤖",
    items: ["Agentic AI Systems", "LangGraph", "Multi-Agent Workflows", "Tool Calling", "FastAPI", "Streamlit"],
  },
  {
    label: "Machine Learning",
    icon: "📈",
    items: ["Regression", "Classification", "Time Series Forecasting", "Unsupervised Learning", "Anomaly Detection", "XGBoost", "Random Forest", "Scikit-learn"],
  },
  {
    label: "Computer Vision & NLP",
    icon: "👁️",
    items: ["Computer Vision", "OpenCV", "NLP", "Text Classification", "Transformers", "Embeddings"],
  },
  {
    label: "Cloud & MLOps",
    icon: "☁️",
    items: ["SAP BTP", "Azure ML", "Azure Databricks", "Apache Spark", "ABAP Cloud", "S/4HANA APIs"],
  },
  {
    label: "Data & Vector Stores",
    icon: "🗄️",
    items: ["Pinecone", "ChromaDB", "Neo4j", "MongoDB", "MySQL", "NoSQL"],
  },
  {
    label: "Languages",
    icon: "💻",
    items: ["Python", "SQL", "NoSQL", "ABAP Cloud"],
  },
  {
    label: "Visualization & BI",
    icon: "📊",
    items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Kibana"],
  },
];

const CORE_COMPETENCIES = [
  { label: "GenAI & Agentic AI Systems", icon: "🧠" },
  { label: "LLMs, RAG & Prompt Engineering", icon: "💬" },
  { label: "SAP BTP", icon: "⚙️" },
  { label: "Machine Learning & Predictive Analytics", icon: "📈" },
  { label: "Supply Chain Optimization", icon: "🔗" },
  { label: "GxP / CSV Compliance (GAMP 5)", icon: "🔬" },
  { label: "Statistical Modeling", icon: "📐" },
  { label: "Data-Driven Decision Making", icon: "🎯" },
];

export default function Skills() {
  const ref = useFadeUp();

  return (
    <section
      id="skills"
      style={{
        padding: "110px 24px",
        background: "var(--navy-2)",
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div ref={ref} className="fade-up" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-tag">Technical Expertise</div>

        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            color: "#fff",
            marginBottom: "16px",
            lineHeight: 1.05,
          }}
        >
          Skills &amp; Stack
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(226,232,240,0.45)", marginBottom: "64px", maxWidth: "500px", lineHeight: 1.6 }}>
          From research to production — the full toolkit I work with daily.
        </p>

        {/* Core competencies strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "64px",
            padding: "28px 32px",
            borderRadius: "16px",
            background: "rgba(0,229,200,0.04)",
            border: "1px solid rgba(0,229,200,0.12)",
          }}
        >
          <div style={{ width: "100%", fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "16px" }}>
            Core Competencies
          </div>
          {CORE_COMPETENCIES.map(({ label, icon }) => (
            <div
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(0,229,200,0.07)",
                border: "1px solid rgba(0,229,200,0.18)",
                fontSize: "14px",
                color: "rgba(226,232,240,0.85)",
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: "15px" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* Tech stack grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {TECH_GROUPS.map(({ label, icon, items }) => (
            <div
              key={label}
              className="card-hover"
              style={{
                padding: "28px 26px",
                borderRadius: "14px",
                background: "var(--card-bg)",
                border: "1px solid var(--border-dim)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "9px",
                    background: "rgba(0,229,200,0.08)",
                    border: "1px solid rgba(0,229,200,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    margin: 0,
                    letterSpacing: "-0.2px",
                  }}
                >
                  {label}
                </h3>
              </div>

              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {items.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}