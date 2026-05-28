"use client";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  { slug: "hr-trends-2026", category: "Trends", date: "Apr 28, 2026", title: "5 HR Trends Reshaping the Workplace in 2026", desc: "From AI-augmented hiring to four-day workweeks, here's what leaders need to watch this year.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop" },
  { slug: "continuous-feedback", category: "Leadership", date: "Apr 14, 2026", title: "Building a Culture of Continuous Feedback", desc: "Annual reviews are dead. Here's how the best teams are replacing them with rituals that work.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop" },
  { slug: "employee-wellbeing-roi", category: "Productivity", date: "Mar 30, 2026", title: "The Hidden ROI of Employee Wellbeing", desc: "Why investing in mental health is the highest-leverage move on your org chart.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" },
  { slug: "remote-work-laws", category: "Compliance", date: "Mar 18, 2026", title: "Navigating Multi-State Remote Work Laws", desc: "A practical guide for HR teams managing distributed talent across jurisdictions.", img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&auto=format&fit=crop" },
  { slug: "skills-not-pedigree", category: "Recruitment", date: "Mar 5, 2026", title: "How to Hire for Skills, Not Pedigree", desc: "Structured interviews and skills tests outperform gut-feel every time. Here's the playbook.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop" },
  { slug: "manager-to-multiplier", category: "Leadership", date: "Feb 22, 2026", title: "From Manager to Multiplier: A Coaching Framework", desc: "Six habits that turn good managers into the kind of leaders people stay for.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop" },
];

const categoryColors: Record<string, string> = {
  Trends: "#e0f2fe", Leadership: "#f0fdf4", Productivity: "#fef9c3",
  Compliance: "#fff1f2", Recruitment: "#faf5ff",
};

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-tag">Insights</span>
          <h1>Ideas, research & playbooks for modern people leaders</h1>
          <p>Practical articles on HR trends, leadership, and the future of work.</p>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
          {articles.map(({ slug, category, date, title, desc, img }) => (
            <article key={slug} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                <img
                  src={img}
                  alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <span style={{ position: "absolute", top: 16, left: 16, background: categoryColors[category] || "#f3f4f6", color: "#374151", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                  {category}
                </span>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gray-text)", fontSize: 12, marginBottom: 10 }}>
                  <Calendar size={12} /> {date}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy)", marginBottom: 8, lineHeight: 1.4 }}>{title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
                <Link href={`/insights/${slug}`} style={{ color: "var(--teal)", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Read article <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
