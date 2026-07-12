import { useFadeUp } from "../hooks/useFadeUp";

const EXPERIENCES = [
  {
    role: "Senior Analyst",
    company: "Capgemini",
    location: "Mumbai",
    period: "Aug 2025 — Present",
    current: true,
    color: "var(--teal)",
    bullets: [
      "Developing a GenAI-powered chatbot on SAP BTP to automate GxP-compliant CSV documentation, generating regulation-aligned validation based on change requests (greenfield/brownfield/upgrade) with audit trail compliance through intermediate approval workflows.",
      "Led full-scale Agentic AI implementation from hackathon participation — autonomously recommends inter-warehouse transfers or vendor sourcing based on stock availability, auto-generates STO/PO documents, integrates real-time SAP S/4HANA data for life sciences industries.",
    ],
    stack: ["SAP BTP", "SAP AI Core", "S/4HANA APIs", "Python", "LangGraph", "Azure OpenAI", "ABAP Cloud", "SAP GenAI Hub"],
  },
  {
    role: "Data Science Intern",
    company: "ACG World",
    location: "Mumbai",
    period: "Jan 2025 — Jul 2025",
    current: false,
    color: "#6ee7f7",
    bullets: [
      "Developed ML models for capsule print parameter prediction and deployed RAG pipelines using LLMs to automate content retrieval and summarization from internal knowledge bases.",
      "Advanced the HR chatbot with Azure OpenAI, integrated agentic workflows and Pinecone vector DB for contextual memory, significantly improving accuracy, interactivity, and scalability.",
      "Built computer vision solutions to detect safety wearable compliance using real-time image analysis, supporting AI-driven safety monitoring for plant operations.",
    ],
    stack: ["Azure OpenAI", "Pinecone", "LangChain", "OpenCV", "Python", "FastAPI"],
  },
  {
    role: "Data Science Intern",
    company: "Saint-Gobain",
    location: "Mumbai",
    period: "May 2024 — Jul 2024",
    current: false,
    color: "#a78bfa",
    bullets: [
      "Automated SOP generation using Llama 3-8B and prompt engineering to streamline compliance processes, reducing manual effort and standardizing documentation workflows.",
      "Developed a Supply Chain Prediction System using XGBoost and time-series models, deployed via Streamlit with statistical analysis and feature engineering for enhanced forecasting accuracy.",
    ],
    stack: ["Llama 3-8B", "XGBoost", "Streamlit", "Python", "Pandas"],
  },
];

export default function Experience() {
  const ref = useFadeUp();

  return (
    <section id="experience" style={{ padding: "100px 24px" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="section-tag">Work History</div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#fff",
            marginBottom: "64px",
          }}
        >
          Experience
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "12px",
              bottom: "12px",
              width: "1px",
              background: "linear-gradient(to bottom, var(--teal), rgba(0,229,200,0.1))",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", paddingLeft: "52px" }}>
            {EXPERIENCES.map(({ role, company, location, period, current, color, bullets, stack }) => (
              <div
                key={`${role}-${company}`}
                className="card-hover"
                style={{
                  position: "relative",
                  padding: "28px 28px 24px",
                  borderRadius: "14px",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-dim)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-43px",
                    top: "28px",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 12px ${color}88`,
                    border: "2px solid var(--navy-2)",
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Syne', sans-serif",
                        marginBottom: "4px",
                      }}
                    >
                      {role}
                    </h3>
                    <div style={{ fontSize: "14px", color, fontWeight: 500 }}>
                      {company} · {location}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                    {current && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          background: "rgba(0,229,200,0.1)",
                          border: "1px solid rgba(0,229,200,0.25)",
                          fontSize: "11px",
                          color: "var(--teal)",
                          fontWeight: 600,
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "var(--teal)",
                            animation: "pulse 2s ease-in-out infinite",
                          }}
                        />
                        Current
                      </span>
                    )}
                    <span style={{ fontSize: "13px", color: "rgba(226,232,240,0.4)" }}>{period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "14.5px",
                        color: "rgba(226,232,240,0.65)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color, flexShrink: 0, marginTop: "6px", fontSize: "8px" }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {stack.map((s) => (
                    <span key={s} className="tech-badge" style={{ fontSize: "11px" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
