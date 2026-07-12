import { useState, useEffect } from "react";

const ROLES = [
  "GenAI Engineer",
  "Data Scientist",
  "Agentic AI Builder",
  "ML Engineer",
  "SAP BTP Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="dot-grid noise"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        paddingTop: "68px",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,200,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,181,160,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 40px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(0,229,200,0.25)",
            background: "rgba(0,229,200,0.06)",
            marginBottom: "32px",
            fontSize: "13px",
            color: "var(--teal)",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--teal)",
              boxShadow: "0 0 8px var(--teal)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Senior Analyst- Data Scientist @ Capgemini
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-2px",
            color: "#fff",
            marginBottom: "16px",
          }}
        >
          Sharmeen
          <br />
          <span className="gradient-text teal-glow">Shaikh</span>
        </h1>

        {/* Typing role */}
        <div
          style={{
            fontSize: "clamp(20px, 3.5vw, 32px)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            color: "rgba(226,232,240,0.6)",
            marginBottom: "28px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--teal)",
              marginLeft: "2px",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(226,232,240,0.55)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          M.Sc. Data Science · Building production-ready GenAI, agentic AI &amp; ML
          solutions on SAP BTP &amp; Azure. Life sciences · Manufacturing · Enterprise
          automation.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "64px" }}>
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:sharmeen132911@gmail.com"
            className="btn-secondary"
          >
            Get In Touch
          </a>
        </div>
      </div>


      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
