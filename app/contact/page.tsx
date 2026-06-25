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
                { Icon: MapPin, text: "Adjiringanor Estate-NTHC, Tema, Ghana" },
                { Icon: Phone, text: "+1 (555) 010-2030" },
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

            <div className="card" style={{ background: "var(--bg-light)", border: "1px solid var(--border)", padding: 0, overflow: "hidden" }}>
              <div style={{ padding: "16px 20px 12px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)", margin: 0 }}>Office location</h3>
                <p style={{ fontSize: 12, color: "var(--gray-text)", margin: "4px 0 0" }}>Adjiringanor Estate-NTHC, Tema</p>
              </div>
              <iframe
                title="Audia HR Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.494258!2d-0.0344!3d5.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdjiringanor+Estate+NTHC+Tema+Ghana!5e0!3m2!1sen!2sgh!4v1"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ padding: "10px 20px 14px" }}>
                <a
                  href="https://maps.google.com/?q=Adjiringanor+Estate+NTHC,+Tema,+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "var(--teal)", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                >
                  Open in Google Maps <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
