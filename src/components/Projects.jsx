import { useFadeUp } from "../hooks/useFadeUp";

const PROJECTS = [
  {
    title: "GxP-Compliant CSV Documentation Bot",
    category: "GenAI · SAP BTP · Life Sciences",
    color: "#fbbf24",
    description:
      "Production GenAI chatbot at Capgemini on SAP BTP automating GxP-compliant CSV documentation. Generates regulation-aligned validation plans based on change request type with full audit trail compliance through approval workflows.",
    highlights: [
      "Greenfield / brownfield / upgrade change request handling",
      "Intermediate approval workflow with audit trail",
      "Deployed on SAP BTP with SAP AI Core integration",
    ],
    stack: ["SAP BTP", "SAP AI Core", "SAP GenAI Hub", "LangGraph", "ABAP Cloud", "Python"],
    icon: "🏥",
    live: true,
  },
  {
    title: "Agentic Inventory Management System",
    category: "Agentic AI · S/4HANA",
    color: "#f472b6",
    description:
      "Hackathon's agentic AI system leading to full-scale implementation. Autonomously recommends inter-warehouse transfers or vendor sourcing based on real-time stock availability, auto-generates STO/PO documents, integrates live SAP S/4HANA data.",
    highlights: [
      "Agentic AI Hackathon winner — now in production",
      "Auto-generates STO/PO documents autonomously",
      "Real-time SAP S/4HANA integration for life sciences",
    ],
    stack: ["LangGraph", "Azure OpenAI", "S/4HANA APIs", "Python", "SAP BTP", "SAP GenAI Hub"],
    icon: "🤖",
    live: true,
  },
  {
    title: "Supply Chain Prediction System",
    category: "ML · Forecasting · Saint-Gobain",
    color: "#34d399",
    description:
      "Supply chain demand prediction system using XGBoost and time-series models deployed via Streamlit. Applied statistical analysis and feature engineering for enhanced forecasting accuracy, plus automated SOP generation with Llama 3-8B.",
    highlights: [
      "XGBoost + time-series hybrid forecasting model",
      "Automated SOP generation with Llama 3-8B & prompt engineering",
      "Interactive Streamlit deployment for supply chain teams",
    ],
    stack: ["Llama 3-8B", "XGBoost", "Streamlit", "Python", "Pandas", "Scikit-learn"],
    icon: "🏭",
  },

    {
    title: "RAG-Powered Medical Q&A — Cancer Wellness",
    category: "NLP · Healthcare AI",
    color: "var(--teal)",
    description:
      "A question-answering chatbot using Meta-LLaMA and ChromaDB, trained on a curated cancer encyclopedia knowledge base. Includes a personalized wellness plan generator offering diet, exercise, and stress management recommendations for cancer patients.",
    highlights: [
      "Cancer encyclopedia knowledge base with ChromaDB vector store",
      "Personalized wellness plan generator via advanced prompt engineering",
      "Deployed on Gradio for intuitive, accessible user interaction",
    ],
    stack: ["NumPy", "Pandas", "PyTorch", "Transformers", "LangChain", "HuggingFace", "Gradio", "ChromaDB"],
    link: "https://drive.google.com/file/d/1uPd40P4zM8ejV1UaLXDIgKK49u_8q76p/view?usp=sharing",
    icon: "🧬",
  },
  {
    title: "Anomaly Detection in Telemedicine Services",
    category: "Unsupervised ML · ELK Stack",
    color: "#6ee7f7",
    description:
      "Anomaly detection on telemedicine beneficiary data using unsupervised models. Achieved the highest silhouette score of 0.58 with One-Class SVM. Integrated real-time anomaly detection with the ELK Stack and visualized insights in Kibana for continuous monitoring.",
    highlights: [
      "Isolation Forest, LOF, One-Class SVM, Autoencoder comparison",
      "Best silhouette score: 0.58 (One-Class SVM)",
      "Real-time Kibana dashboards via ELK Stack integration",
    ],
    stack: ["NumPy", "Pandas", "Scikit-learn", "Flask", "ELK Stack", "Kibana"],
    link: "https://canva.link/6ln8l74i2q8dwiw",
    icon: "📡",
  },
  {
    title: "Loan Default Prediction",
    category: "Supervised ML · Power BI",
    color: "#a78bfa",
    description:
      "Comprehensive EDA on loan datasets to identify trends impacting defaults and credit risk. Developed Random Forest and Logistic Regression models achieving 85.21% accuracy, paired with an interactive Power BI dashboard for stakeholder engagement.",
    highlights: [
      "EDA-driven feature engineering and risk profiling",
      "85.21% accuracy with Random Forest + Logistic Regression",
      "Interactive Power BI dashboard for decision-making",
    ],
    stack: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI"],
    link: "https://canva.link/anwrbcqmjaeofd1",
    icon: "💳",
  },
];

export default function Projects() {
  const ref = useFadeUp();

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "var(--navy-2)",
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div ref={ref} className="fade-up" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-tag">Portfolio</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#fff",
            }}
          >
            Projects
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(226,232,240,0.4)", maxWidth: "320px", textAlign: "right" }}>
            From hackathon prototypes to production deployments in regulated industries.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {PROJECTS.map(({ title, category, color, description, highlights, stack, icon, live,link }) => (
            <div
              key={title}
              className="card-hover"
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "var(--card-bg)",
                border: "1px solid var(--border-dim)",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {icon}
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  {live && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        background: "rgba(0,229,200,0.08)",
                        border: "1px solid rgba(0,229,200,0.2)",
                        fontSize: "10.5px",
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
                      Live
                    </span>
                  )}
                </div>
              </div>

              {/* Category */}
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color,
                  marginBottom: "8px",
                }}
              >
                {category}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "'Syne', sans-serif",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(226,232,240,0.55)",
                  lineHeight: 1.65,
                  marginBottom: "16px",
                  flexGrow: 1,
                }}
              >
                {description}
              </p>

              {/* Highlights */}
              <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "7px" }}>
                {highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "13px",
                      color: "rgba(226,232,240,0.6)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color, flexShrink: 0 }}>›</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", borderTop: "1px solid var(--border-dim)", paddingTop: "16px" }}>
                {stack.map((s) => (
                  <span key={s} className="tech-badge" style={{ fontSize: "10.5px" }}>{s}</span>
                ))}
              </div>
              {/* Project link */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: "12px", padding: "6px 14px", marginTop: "12px", display: "inline-flex" }}
                >
                  View Project ↗
                </a>
              )}
            </div>
            
          ))}
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
