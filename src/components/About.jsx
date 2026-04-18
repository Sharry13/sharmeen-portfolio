import { useFadeUp } from "../hooks/useFadeUp";

export default function About() {
  const ref = useFadeUp();

  return (
    <section id="about" style={{ padding: "60px 24px" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-tag">About Me</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left — text */}
          <div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1px",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Building AI that
              <br />
              <span style={{ color: "var(--teal)" }}>solves real things</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "rgba(226,232,240,0.65)", fontSize: "16px", lineHeight: 1.75 }}>
              <p>
                I'm a <strong style={{ color: "#e2e8f0", fontWeight: 500 }}>M.Sc. Data Science</strong> graduate from NMIMS Mumbai, 
                currently a Senior Analyst at Capgemini — building GenAI and agentic AI systems that actually 
                ship into production, not just notebooks.
              </p>
              <p>
                My work spans GxP-compliant automation for life sciences, intelligent inventory agents for 
                automotive, RAG pipelines, computer vision, and supply chain forecasting. I care deeply about 
                bridging the gap between cutting-edge AI research and enterprise-grade deployment.
              </p>
              <p>
                Outside of code, I'm energized by hackathons, research papers, and conversations at the 
                intersection of AI ethics and business impact.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "36px", flexWrap: "wrap" }}>
              <a
                href="https://www.linkedin.com/in/sharmeen13"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "14px", padding: "9px 20px" }}
              >
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 2.5h9v9M11.5 2.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="mailto:sharmeen132911@gmail.com"
                className="btn-secondary"
                style={{ fontSize: "14px", padding: "9px 20px" }}
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                icon: "🧠",
                title: "GenAI & Agentic AI",
                desc: "LangChain, LangGraph, Azure OpenAI, SAP AI Core — end-to-end pipelines from prototype to production.",
              },
              {
                icon: "🔬",
                title: "Life Sciences & Manufacturing",
                desc: "GxP/CSV compliance, GAMP 5, real-time SAP S/4HANA integrations for regulated industries.",
              },
              {
                icon: "📊",
                title: "Full-Stack Data Science",
                desc: "From EDA and feature engineering to ML model deployment via FastAPI, Streamlit, and Gradio.",
              },
              {
                icon: "🏆",
                title: "Award-Winning Research",
                desc: "Best Paper Award at ICEDT 2025. 1st rank in B.Sc. IT batch with 9.35 CGPA.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  padding: "20px 22px",
                  borderRadius: "12px",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-dim)",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#e2e8f0",
                      marginBottom: "6px",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: "14px", color: "rgba(226,232,240,0.55)", lineHeight: 1.6 }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
