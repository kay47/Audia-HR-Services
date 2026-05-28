import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Empower organizations to unlock the full potential of their people." },
  { icon: Eye, title: "Vision", desc: "A future of work where every employee thrives and every business scales with confidence." },
  { icon: Heart, title: "Values", desc: "Integrity, partnership, transparency, and relentless focus on outcomes." },
  { icon: Award, title: "Excellence", desc: "Award-winning HR practitioners certified across 30+ jurisdictions." },
];

const team = [
  { name: "Sarah Mitchell", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
  { name: "James Carter", role: "Head of Recruitment", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
  { name: "Amara Okeke", role: "Director, Compliance", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&q=80&auto=format&fit=crop" },
  { name: "Kenji Tanaka", role: "Head of L&D", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-tag">About AUDIA</span>
          <h1>People-first HR. Built for modern business.</h1>
          <p>Founded in 2014, we&apos;ve grown from a boutique consultancy into a trusted HR partner for hundreds of teams across three continents.</p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div style={{ borderRadius: 16, height: 360, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format&fit=crop"
              alt="HR partnership handshake"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "var(--navy)", marginBottom: 20 }}>Our story</h2>
            <p style={{ color: "var(--mid-text)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
              What started as a small advisory team in 2014 has grown into a full-service HR partner serving startups, scale-ups, and global enterprises. We&apos;ve helped over 500 organizations hire smarter, stay compliant, and build cultures their people are proud of.
            </p>
            <p style={{ color: "var(--mid-text)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              We believe HR should be a strategic engine — not a back-office function. Every engagement is led by a senior practitioner, supported by modern tools, and measured by the outcomes that matter to you.
            </p>
          </div>
        </div>
      </section>

      {/* What guides us */}
      <section style={{ padding: "80px 0", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "var(--navy)", marginBottom: 40, textAlign: "center" }}>What guides us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box"><Icon size={20} /></div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "var(--navy)" }}>{title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-tag">Leadership</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "var(--navy)" }}>Meet the team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {team.map(({ name, role, img }) => (
              <div key={name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img
                    src={img}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)" }}>{name}</div>
                  <div style={{ fontSize: 13, color: "var(--gray-text)", marginTop: 4 }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg, var(--navy) 0%, #0a3d35 100%)", borderRadius: 20, padding: "60px 48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Ready to build a stronger workforce?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>Talk to an HR specialist. Get a tailored plan in under 30 minutes.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-teal">Book Consultation <ArrowRight size={15} /></Link>
            <Link href="/services" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", borderRadius: 8, padding: "10px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
