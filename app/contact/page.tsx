"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Link2, Rss, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-tag">Get in Touch</span>
          <h1>Let&apos;s talk about your people strategy</h1>
          <p>Send us a note or book a free 30-minute consultation with an HR specialist.</p>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>
          {/* Contact form */}
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontWeight: 700, color: "var(--navy)", fontSize: 20, marginBottom: 8 }}>Message sent!</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 15 }}>We&apos;ll get back to you within 1 business day.</p>
                <button className="btn-teal" style={{ marginTop: 24 }} onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <>
                <h2 style={{ fontWeight: 700, fontSize: 18, color: "var(--navy)", marginBottom: 24 }}>Send a message</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Email</label>
                    <input type="email" placeholder="you@company.com" />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Company</label>
                  <input type="text" placeholder="Your company name" />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>How can we help?</label>
                  <textarea rows={5} placeholder="Tell us about your HR needs..." style={{ resize: "vertical" }} />
                </div>
                <button className="btn-teal" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSubmitted(true)}>
                  Send message <ArrowRight size={15} />
                </button>
              </>
            )}
          </div>

          {/* Right sidebar */}
          <div>
            <div className="card" style={{ marginBottom: 20 }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy)", marginBottom: 20 }}>Reach us directly</h3>
              {[
                { Icon: MapPin, text: "Adjiringanor Estate-NTHC, Tema" },
                { Icon: Phone, text: "020 200 6600 / 020 774 6000" },
                { Icon: Mail, text: "hello@audiahr.com" },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 34, height: 34, background: "var(--teal-light)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={15} color="var(--teal)" />
                  </div>
                  <span style={{ fontSize: 14, color: "var(--mid-text)", lineHeight: 1.5, paddingTop: 7 }}>{text}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                {[Link2, Rss, Globe].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-text)", transition: "all 0.2s", textDecoration: "none" }}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: "var(--bg-light)", border: "1px solid var(--border)" }}>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)", marginBottom: 8 }}>Office location</h3>
              <div style={{ height: 180, background: "#d1dce5", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <MapPin size={28} color="var(--teal)" />
                  <p style={{ fontSize: 12, color: "var(--gray-text)", marginTop: 8 }}>200 Madison Ave, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
