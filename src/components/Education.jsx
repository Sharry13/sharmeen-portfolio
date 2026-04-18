import { useFadeUp } from "../hooks/useFadeUp";

const EDUCATION = [
  {
    degree: "M.Sc. in Data Science",
    institution: "NMIMS University",
    location: "Mumbai",
    year: "2025",
    grade: "3.82 / 4.0 CGPA",
    color: "var(--teal)",
    icon: "🎓",
    note: "Specialized in AI, GenAI, and enterprise ML systems.",
  },
  {
    degree: "B.Sc. in Information Technology",
    institution: "S. M. Shetty College",
    location: "Mumbai",
    year: "2023",
    grade: "9.35 / 10 CGPA",
    color: "#6ee7f7",
    icon: "🏫",
    note: "1st Rank in graduating batch across the university.",
  },
];

const CERTS = [
  {
    title: "Best Paper Award — ICEDT 2025",
    issuer: "International Conference on Emerging Digital Technologies",
    year: "2025",
    type: "Award",
    color: "#fbbf24",
    icon: "🏆",
    link: "https://drive.google.com/file/d/14JBOlxkG0fMSotBIgA2f_FlOe68IBJvi/view?usp=sharing",
    paper: "https://drive.google.com/file/d/1BwbQxgMfF-asL1qf8pDz9Q5k_mDEfSDc/view?usp=sharing"
  },
  {
    title: "SAP Certified Associate",
    issuer: "Backend Developer – ABAP Cloud",
    year: "2024",
    type: "Certification",
    color: "var(--teal)",
    icon: "🔖",
    link: "https://drive.google.com/file/d/1kNn5xjHjODC1lpSPHFkE_chUT7YstjZg/view?usp=sharing",
  },
  {
    title: "Data Analytics & Visualization",
    issuer: "Accenture Virtual Experience — Forage",
    year: "2023",
    type: "Certification",
    color: "#a78bfa",
    icon: "📊",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_QivH6thTwA2TdRT7i_1704101752414_completion_certificate.pdf",
  },
];

export default function Education() {
  const ref = useFadeUp();

  return (
    <section id="education" style={{ padding: "100px 24px" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-tag">Academic Background</div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#fff",
            marginBottom: "56px",
          }}
        >
          Education &amp; Certifications
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Education cards */}
          <div>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.4)",
                marginBottom: "20px",
              }}
            >
              Degrees
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {EDUCATION.map(({ degree, institution, location, year, grade, color, icon, note }) => (
                <div
                  key={degree}
                  className="card-hover"
                  style={{
                    padding: "24px",
                    borderRadius: "14px",
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-dim)",
                    backdropFilter: "blur(8px)",
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#fff",
                          marginBottom: "4px",
                        }}
                      >
                        {degree}
                      </div>
                      <div style={{ fontSize: "14px", color, fontWeight: 500, marginBottom: "8px" }}>
                        {institution} · {location}
                      </div>
                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "10px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            padding: "3px 10px",
                            borderRadius: "999px",
                            background: `${color}15`,
                            color,
                            fontWeight: 600,
                          }}
                        >
                          {grade}
                        </span>
                        <span style={{ fontSize: "12px", color: "rgba(226,232,240,0.4)" }}>{year}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "rgba(226,232,240,0.5)", lineHeight: 1.5, margin: 0 }}>
                        {note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.4)",
                marginBottom: "20px",
              }}
            >
              Awards &amp; Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {CERTS.map(({ title, issuer, year, type, color, icon, link, paper }) => {
                const card = (
                  <div
                    className="card-hover"
                    style={{
                      padding: "20px 22px",
                      borderRadius: "14px",
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-dim)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      gap: "14px",
                      alignItems: "center",
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
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#e2e8f0",
                          marginBottom: "4px",
                        }}
                      >
                        {title}
                      </div>
                      <div style={{ fontSize: "13px", color: "rgba(226,232,240,0.5)" }}>
                        {issuer}
                        {paper && (
                          <a
                            href={paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              marginLeft: "8px",
                              fontSize: "12px",
                              color: "var(--teal)",
                              textDecoration: "none",
                              fontWeight: 500,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            View Paper ↗
                          </a>
                        )}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: "11px",
                          padding: "3px 9px",
                          borderRadius: "999px",
                          background: `${color}15`,
                          color,
                          fontWeight: 600,
                          marginBottom: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {type}
                      </div>
                      <div style={{ fontSize: "12px", color: "rgba(226,232,240,0.35)" }}>{year}</div>
                    </div>
                  </div>
                );

                return link ? (
                  <a
                    key={title}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {card}
                  </a>
                ) : (
                  <div key={title}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}