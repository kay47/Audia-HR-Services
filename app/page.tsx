import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, BookOpen, DollarSign, Briefcase, Crown, Handshake, BarChart3 } from "lucide-react";

const services = [
  { icon: Users, title: "Talent Management & Workforce Solutions", desc: "Acquire, develop, and retain the right talent at every level." },
  { icon: BookOpen, title: "Learning, Leadership & Capability", desc: "Future-ready leaders and high-performing teams." },
  { icon: TrendingUp, title: "Organizational Effectiveness", desc: "Performance systems that drive accountability." },
  { icon: DollarSign, title: "Compensation & Rewards", desc: "Equitable, competitive total rewards strategies." },
  { icon: Briefcase, title: "HR Outsourcing & Operations", desc: "Managed HR services with operational excellence." },
  { icon: Shield, title: "Employee Relations & Compliance", desc: "Protect your people and your business." },
  { icon: Crown, title: "Executive Advisory", desc: "Trusted human capital counsel for the C-suite." },
  { icon: Handshake, title: "Business Partnering", desc: "Embedded HRBPs translating strategy to outcomes." },
  { icon: BarChart3, title: "Strategy Development & Execution", desc: "From vision to measurable people outcomes." },
];

const testimonials = [
  { quote: "AUDIA transformed our hiring pipeline in 90 days. Quality, speed, and zero drama.", name: "Maria Chen", role: "CFO, Lumio" },
  { quote: "Compliance used to keep me up at night. Now I sleep, and they handle it.", name: "David Okafor", role: "COO, Stratus" },
  { quote: "Their team feels like an extension of ours. Genuinely partner-grade work.", name: "Priya Shah", role: "CEO, Verde" },
];

const logos = ["ACME.", "Northwave.", "Lumio.", "Stratus.", "Verde.", "Helix."];

export default function HomePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, #0d2a4a 50%, #0a3d35 100%)", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,196,160,0.1)", border: "1px solid rgba(0,196,160,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 28 }}>
              <CheckCircle size={13} color="var(--teal)" />
              <span style={{ fontSize: 12, color: "var(--teal)", fontWeight: 600 }}>Trusted by 500+ growing companies</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Empowering<br />People.<br />
              <span style={{ color: "var(--teal)" }}>Driving Business<br />Success.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
              From talent and leadership to strategy and compliance — AUDIA HR Services is your end-to-end people partner, built for modern teams.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/services" className="btn-teal" style={{ fontSize: 14 }}>Explore Services <ArrowRight size={15} /></Link>
              <Link href="/contact" style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "10px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>Get Started</Link>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["No long-term contracts", "Dedicated HR partner", "30-day onboarding"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle size={14} color="var(--teal)" />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 16, height: 340, overflow: "hidden", position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                alt="Diverse professional team collaborating in a modern office"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: -20, right: 20, background: "#fff", borderRadius: 12, padding: "12px 20px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
              <Star size={18} fill="var(--teal)" color="var(--teal)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)" }}>4.9 / 5 client rating</div>
                <div style={{ fontSize: 11, color: "var(--gray-text)" }}>Based on 370+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--gray-text)", textTransform: "uppercase", marginBottom: 28 }}>Trusted by leading teams worldwide</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {logos.map((logo, i) => (
              <span key={logo} style={{ fontSize: 18, fontWeight: i === 3 ? 800 : 500, color: i === 3 ? "var(--dark-text)" : "var(--gray-text)", letterSpacing: "-0.5px" }}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">What We Do</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "var(--navy)", marginBottom: 12 }}>Complete HR solutions for every stage</h2>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem" }}>Modular services that scale with your team — pick what you need, leave the rest.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box"><Icon size={20} /></div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "var(--navy)" }}>{title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
                <Link href="/services" style={{ color: "var(--teal)", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>Learn more <ArrowRight size={13} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">Testimonials</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "var(--navy)" }}>Leaders trust AUDIA to scale their teams</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="card">
                <div style={{ fontSize: 28, color: "var(--teal)", marginBottom: 16, fontFamily: "Georgia, serif" }}>&ldquo;&rdquo;</div>
                <p style={{ color: "var(--mid-text)", fontSize: 15, lineHeight: 1.65, marginBottom: 24 }}>&ldquo;{quote}&rdquo;</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--navy)" }}>{name}</div>
                  <div style={{ fontSize: 12, color: "var(--gray-text)", marginTop: 2 }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg, var(--navy) 0%, #0a3d35 100%)", borderRadius: 20, padding: "60px 48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Ready to build a stronger workforce?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32, fontSize: "1rem" }}>Talk to an HR specialist. Get a tailored plan in under 30 minutes.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-teal" style={{ fontSize: 14 }}>Book Consultation <ArrowRight size={15} /></Link>
            <Link href="/services" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", borderRadius: 8, padding: "10px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
