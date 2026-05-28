import Link from "next/link";
import { ArrowRight, Users, BookOpen, TrendingUp, DollarSign, Briefcase, Shield, Crown, Handshake, BarChart3, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Management & Workforce Solutions",
    desc: "End-to-end talent strategies — from acquisition and onboarding to succession and workforce planning.",
    bullets: ["Talent acquisition", "Succession planning", "Workforce analytics"],
  },
  {
    icon: BookOpen,
    title: "Learning, Leadership & Capability Development",
    desc: "Build future-ready leaders and high-performing teams through tailored learning journeys.",
    bullets: ["Leadership academies", "Capability frameworks", "Coaching & mentoring"],
  },
  {
    icon: TrendingUp,
    title: "Organizational Effectiveness & Performance Advisory",
    desc: "Design organizations and performance systems that unlock productivity and accountability.",
    bullets: ["Org design", "Performance management", "Culture & engagement"],
  },
  {
    icon: DollarSign,
    title: "Compensation, Rewards & Workforce Strategy",
    desc: "Competitive, equitable rewards architectures aligned with business and people strategy.",
    bullets: ["Pay benchmarking", "Incentive design", "Total rewards strategy"],
  },
  {
    icon: Briefcase,
    title: "HR Outsourcing & Operational Excellence",
    desc: "Run HR as a managed service with streamlined operations, technology, and shared services.",
    bullets: ["HR shared services", "Process optimization", "HR technology enablement"],
  },
  {
    icon: Shield,
    title: "Employee Relations, Risk & Compliance",
    desc: "Protect your people and your business with proactive ER, risk, and compliance support.",
    bullets: ["Policy & governance", "Investigations", "Regulatory compliance"],
  },
  {
    icon: Crown,
    title: "Executive Advisory & Human Capital Strategy",
    desc: "Trusted counsel for boards and C-suites on the people side of strategy and transformation.",
    bullets: ["CHRO advisory", "Board engagement", "M&A people due diligence"],
  },
  {
    icon: Handshake,
    title: "Business Partnering",
    desc: "Embedded HR business partners who translate strategy into people outcomes.",
    bullets: ["Strategic HRBP support", "Stakeholder enablement", "Change partnering"],
  },
  {
    icon: BarChart3,
    title: "Strategy Development and Execution",
    desc: "From vision to delivery — co-create people strategies and operationalize them with rigor.",
    bullets: ["Strategy design", "Execution roadmaps", "OKRs & governance"],
  },
];

const faqs = [
  { q: "How quickly can we get started?", a: "Most engagements kick off within 2 weeks of signing. We have an onboarding sprint that gets you productive fast — typically 30 days to full operation." },
  { q: "Do you work with small businesses?", a: "Absolutely. We work with businesses of all sizes, from 10-person startups to 10,000-person global enterprises. Our modular model means you only pay for what you need." },
  { q: "Are your services contract-based?", a: "We offer both project-based and ongoing retainer engagements. No lock-in contracts — we earn your business each month." },
  { q: "Which countries do you cover?", a: "We operate across North America, Europe, Africa, and Asia-Pacific. Our practitioners are certified in 30+ jurisdictions, ensuring local compliance everywhere you operate." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-tag">Our Services</span>
          <h1>HR services that grow with your business</h1>
          <p>Modular, expert-led, and outcome-focused — choose the support that fits where you are today.</p>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="card">
              <div className="icon-box"><Icon size={20} /></div>
              <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: "var(--navy)" }}>{title}</h3>
              <p style={{ color: "var(--gray-text)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--mid-text)", marginBottom: 6 }}>
                    <span style={{ color: "var(--teal)", fontWeight: 700 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg, var(--navy) 0%, #0a3d35 100%)", borderRadius: 20, padding: "60px 48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Ready to build a stronger workforce?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>Talk to an HR specialist. Get a tailored plan in under 30 minutes.</p>
          <Link href="/contact" className="btn-teal">Book Consultation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  );
}

function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section style={{ padding: "80px 0", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-tag">FAQ</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "var(--navy)" }}>Frequently asked questions</h2>
        </div>
        {faqs.map(({ q, a }) => (
          <details key={q} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, color: "var(--navy)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none", userSelect: "none" }}>
              {q} <ChevronDown size={16} />
            </summary>
            <p style={{ marginTop: 12, color: "var(--gray-text)", fontSize: 14, lineHeight: 1.7 }}>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
