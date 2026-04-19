import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
        background: scrolled ? "rgba(5, 13, 26, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,229,200,0.1)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "20px",
          fontWeight: 800,
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "-0.5px",
          zIndex: 101,
        }}
      >
        SS<span style={{ color: "var(--teal)" }}>.</span>
      </a>

      {/* Desktop links */}
      {!isMobile && (
        <ul style={{ display: "flex", gap: "2px", listStyle: "none", margin: "0 auto", padding: 0 }}>
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "var(--teal)" : "rgba(226,232,240,0.7)",
                    background: isActive ? "rgba(0,229,200,0.08)" : "transparent",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = "rgba(226,232,240,0.7)"; }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      )}


      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            zIndex: 101,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: menuOpen && i === 1 ? "transparent" : "var(--teal)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(4px, -5px)"
                    : "none"
                  : "none",
              }}
            />
          ))}
        </button>
      )}

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(5,13,26,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            zIndex: 99,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                color: "rgba(226,232,240,0.85)",
                transition: "color 0.2s, background 0.2s",
              }}
            >
              {label}
            </a>
          ))}
 
        </div>
      )}
    </nav>
  );
}