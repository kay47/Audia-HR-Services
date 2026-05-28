"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Link2, Rss, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff", padding: "60px 0 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 34, height: 34, background: "var(--teal)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="8" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                <path d="M2 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M14 9l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15 }}>AUDIA HR Services</span>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 20 }}>
            Empowering people. Driving business success through expert HR solutions.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[Link2, Rss, Globe].map((Icon, i) => (
              <a key={i} href="#" style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--teal)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--teal)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Company</h4>
          {["About Us", "Services", "Careers", "Insights"].map(item => (
            <Link key={item} href={`/${item.toLowerCase().replace(" us","")}`} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--teal)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"}>
              {item}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Contact</h4>
          {[
            { Icon: MapPin, text: "Adjiringanor Estate-NTHC, Tema" },
            { Icon: Phone, text: "020 200 6600 / 020 774 6000" },
            { Icon: Mail, text: "hello@audiahr.com" },
          ].map(({ Icon, text }, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
              <Icon size={14} style={{ color: "var(--teal)", flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Newsletter</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>
            Monthly insights on HR trends and leadership.
          </p>
          <input type="email" placeholder="you@company.com" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, padding: "9px 12px", fontSize: 13, width: "100%", marginBottom: 8, outline: "none" }} />
          <button className="btn-teal" style={{ width: "100%", justifyContent: "center", fontSize: 13 }}>Subscribe</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "40px auto 0", padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2026 AUDIA HR Services. All rights reserved.</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Crafted with care for modern workplaces.</span>
      </div>
    </footer>
  );
}
