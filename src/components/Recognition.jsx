import { useFadeUp } from "../hooks/useFadeUp";

export default function Recognition() {
  const ref = useFadeUp();

  return (
    <section
      id="recognition"
      style={{
        padding: "100px 24px",
        background: "var(--navy-2)",
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div ref={ref} className="fade-up" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-tag">Recognition</div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#fff",
            marginBottom: "56px",
          }}
        >
          Highlights &amp; Achievements
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Best Paper Award */}
          <div
            className="card-hover"
            style={{
              gridColumn: "span 1",
              padding: "36px 32px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(5,13,26,0) 100%)",
              border: "1px solid rgba(251,191,36,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                fontSize: "90px",
                opacity: 0.06,
                pointerEvents: "none",
              }}
            >
              🏆
            </div>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>🏆</div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fbbf24",
                marginBottom: "10px",
              }}
            >
              Best Paper Award
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              ICEDT 2025
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(226,232,240,0.55)", lineHeight: 1.65, margin: 0 }}>
              International Conference on Emerging Digital Technologies. Recognized for exceptional 
              research in Generative AI with measurable real-world impact.
            </p>
          </div>

          {/* Hackathon win */}
          <div
            className="card-hover"
            style={{
              padding: "36px 32px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(0,229,200,0.08) 0%, rgba(5,13,26,0) 100%)",
              border: "1px solid rgba(0,229,200,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                fontSize: "90px",
                opacity: 0.06,
                pointerEvents: "none",
              }}
            >
              🤖
            </div>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>🤖</div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "10px",
              }}
            >
              Hackathon Participant → Production
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Agentic AI Hackathon @ Capgemini
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(226,232,240,0.55)", lineHeight: 1.65, margin: 0 }}>
              Participated in the internal Agentic AI hackathon and was tasked with leading the 
              full-scale production implementation — now live in life sciences &amp; automotive verticals.
            </p>
          </div>

          {/* 1st Rank */}
          <div
            className="card-hover"
            style={{
              padding: "36px 32px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(5,13,26,0) 100%)",
              border: "1px solid rgba(167,139,250,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                fontSize: "90px",
                opacity: 0.06,
                pointerEvents: "none",
              }}
            >
              🥇
            </div>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>🥇</div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a78bfa",
                marginBottom: "10px",
              }}
            >
              University 1st Rank
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              B.Sc. IT — S. M. Shetty College
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(226,232,240,0.55)", lineHeight: 1.65, margin: 0 }}>
              Graduated with 9.35/10 CGPA and ranked 1st in the entire Information Technology 
              batch across the graduating year at the university.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            marginTop: "48px",
            padding: "32px",
            borderRadius: "14px",
            border: "1px solid var(--border-dim)",
            background: "var(--card-bg)",
            backdropFilter: "blur(8px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          {[
            // { num: "22", label: "Years Old" },
            { num: "3", label: "Industry Roles" },
            { num: "6+", label: "AI Systems Built" },
            { num: "2", label: "Awards Won" },
            { num: "3.82", label: "M.Sc. CGPA" },
            { num: "9.35", label: "B.Sc. CGPA" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "var(--teal)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: "12.5px", color: "rgba(226,232,240,0.45)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
