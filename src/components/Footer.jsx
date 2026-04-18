export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-dim)",
        padding: "48px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row — details grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
            paddingBottom: "40px",
            borderBottom: "1px solid var(--border-dim)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
              SS<span style={{ color: "var(--teal)" }}>.</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(226,232,240,0.4)", lineHeight: 1.6, maxWidth: "200px" }}>
              Data Scientist & GenAI Engineer based in Mumbai, India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "14px" }}>
              Navigate
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  style={{ fontSize: "14px", color: "rgba(226,232,240,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "var(--teal)"}
                  onMouseLeave={(e) => e.target.style.color = "rgba(226,232,240,0.5)"}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "14px" }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "sharmeen132911@gmail.com", href: "mailto:sharmeen132911@gmail.com" },
                { label: "linkedin.com/in/sharmeen13", href: "https://www.linkedin.com/in/sharmeen13" },
                { label: "+91 98200 47086", href: "tel:+919820047086" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "13.5px", color: "rgba(226,232,240,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "var(--teal)"}
                  onMouseLeave={(e) => e.target.style.color = "rgba(226,232,240,0.5)"}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* At a glance */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "14px" }}>
              At a Glance
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                ["Location", "Mumbai, India"],
                ["Languages", "English, Hindi, Urdu"],
                ["Available", "Open to opportunities"],
              ].map(([key, val]) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13px" }}>
                  <span style={{ color: "rgba(226,232,240,0.35)" }}>{key}</span>
                  <span style={{ color: "rgba(226,232,240,0.65)", textAlign: "right" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontSize: "13px", color: "rgba(226,232,240,0.3)" }}>
            © {year} Sharmeen Shaikh. All rights reserved.
          </div>
          <div style={{ fontSize: "13px", color: "rgba(226,232,240,0.3)" }}>
            Mumbai, India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}