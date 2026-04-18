import { useFadeUp } from "../hooks/useFadeUp";
import { useState } from "react";

export default function Contact() {
  const ref = useFadeUp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ─── EmailJS integration ───────────────────────────────────────────────
    // 1. Sign up free at https://www.emailjs.com
    // 2. Create a service (Gmail) → get SERVICE_ID
    // 3. Create a template → get TEMPLATE_ID
    // 4. Get your PUBLIC_KEY from Account → API Keys
    // 5. Replace the three strings below with your actual values
    //
    // import emailjs from 'emailjs-com';  ← add this at top of file
    //
    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     { from_name: form.name, reply_to: form.email, message: form.message },
    //     "YOUR_PUBLIC_KEY"
    //   );
    //   setStatus("sent");
    //   setForm({ name: "", email: "", message: "" });
    // } catch {
    //   setStatus("error");
    // }
    // ──────────────────────────────────────────────────────────────────────

    // Placeholder simulation (remove when EmailJS is set up):
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e2e8f0",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-tag">Get In Touch</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Let's build something
              <br />
              <span style={{ color: "var(--teal)" }}>remarkable</span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(226,232,240,0.55)", lineHeight: 1.75, marginBottom: "40px" }}>
              Whether you're looking for a GenAI engineer, a data scientist, or want to collaborate 
              on a research project — I'd love to hear from you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: "sharmeen132911@gmail.com",
                  href: "mailto:sharmeen132911@gmail.com",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "linkedin.com/in/sharmeen13",
                  href: "https://www.linkedin.com/in/sharmeen13",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Mumbai, India",
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
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
                  <div>
                    <div style={{ fontSize: "12px", color: "rgba(226,232,240,0.4)", marginBottom: "2px" }}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14.5px",
                          color: "var(--teal)",
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "14.5px", color: "rgba(226,232,240,0.75)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
