"use client";
import React from "react";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "hr-trends-2026",
    category: "Trends",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    author: "Audia HR Editorial",
    title: "5 HR Trends Reshaping the Workplace in 2026",
    desc: "From AI-augmented hiring to four-day workweeks, here's what leaders need to watch this year.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "The workplace is evolving at a pace that challenges even the most seasoned HR professionals. In 2026, five key forces are redefining how companies attract, retain, and develop their people.",
      },
      {
        type: "heading",
        text: "1. AI-Augmented Hiring",
      },
      {
        type: "paragraph",
        text: "Artificial intelligence is no longer a novelty in talent acquisition — it's the standard. Platforms now screen thousands of applications in minutes, surface passive candidates, and even predict cultural fit through natural language processing. But the HR leaders pulling ahead are those using AI as a co-pilot, not a replacement: letting algorithms handle the volume while humans own the judgment calls that matter.",
      },
      {
        type: "heading",
        text: "2. The Four-Day Workweek Crosses the Mainstream",
      },
      {
        type: "paragraph",
        text: "After years of pilots and controversy, the four-day workweek has moved from experiment to expectation in several industries. Companies that have made the switch report sustained productivity gains, significantly lower attrition, and a measurable boost in employer brand. The question is no longer whether it works — but whether your organization is structured to try it.",
      },
      {
        type: "heading",
        text: "3. Skills-First Talent Architecture",
      },
      {
        type: "paragraph",
        text: "Degree requirements are quietly disappearing from job descriptions at Fortune 500 companies, replaced by validated skills frameworks. This shift opens the talent pool dramatically and creates internal mobility paths that didn't exist before. HR teams are investing in skills taxonomies, assessments, and internal marketplaces to match people to work dynamically.",
      },
      {
        type: "heading",
        text: "4. Mental Health as Infrastructure",
      },
      {
        type: "paragraph",
        text: "Employee wellbeing has graduated from a perk to a business continuity issue. Leading organizations are embedding mental health support into the employee experience — not just offering an EAP hotline but building manager capability, reducing workload pressure points, and measuring psychological safety as a core team metric.",
      },
      {
        type: "heading",
        text: "5. Workforce Planning Meets Real-Time Data",
      },
      {
        type: "paragraph",
        text: "Annual headcount planning cycles are giving way to dynamic workforce models fed by real-time signals: attrition rates, skills gaps, business velocity. HR teams that can model scenarios and advise the business in weeks — not quarters — are earning a strategic seat at the table that their peers are still waiting for.",
      },
      {
        type: "callout",
        text: "The common thread across all five trends? HR's role is shifting from process owner to strategic advisor. The teams that invest in data, tools, and manager capability today will be the ones who shape their organizations tomorrow.",
      },
    ],
  },
  {
    slug: "continuous-feedback",
    category: "Leadership",
    date: "Apr 14, 2026",
    readTime: "5 min read",
    author: "Audia HR Editorial",
    title: "Building a Culture of Continuous Feedback",
    desc: "Annual reviews are dead. Here's how the best teams are replacing them with rituals that work.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Performance reviews that happen once a year are too infrequent to be useful and too high-stakes to be honest. The organizations outperforming their peers on engagement and retention have replaced them with something better: a continuous feedback culture built on small, regular habits.",
      },
      {
        type: "heading",
        text: "Why Annual Reviews Fail",
      },
      {
        type: "paragraph",
        text: "The recency bias problem alone makes annual reviews unreliable — managers and employees remember the last 90 days, not the whole year. Compound that with the anxiety of a high-stakes conversation, and you get ratings inflation, vague feedback, and zero development value. The data is damning: most employees leave annual reviews feeling less motivated than when they walked in.",
      },
      {
        type: "heading",
        text: "The Rituals That Replace Them",
      },
      {
        type: "paragraph",
        text: "The best teams we've studied run a simple cadence: weekly check-ins (15 minutes, focused on blockers and one win), monthly one-on-ones (30 minutes, focused on growth and priorities), and quarterly conversations (60 minutes, focused on trajectory and development). The annual review, when it exists at all, becomes a summary — not a revelation.",
      },
      {
        type: "heading",
        text: "Training Managers to Give Feedback",
      },
      {
        type: "paragraph",
        text: "The biggest lever isn't the system — it's manager capability. Most managers were never taught how to give feedback that lands well. Investing in a simple framework (specific, behavioral, forward-focused) and practicing it in manager cohorts produces more behavior change than any performance management software.",
      },
      {
        type: "callout",
        text: "The goal isn't more feedback. It's better conversations, more often. Start with the manager-employee relationship and the system will follow.",
      },
    ],
  },
  {
    slug: "employee-wellbeing-roi",
    category: "Productivity",
    date: "Mar 30, 2026",
    readTime: "7 min read",
    author: "Audia HR Editorial",
    title: "The Hidden ROI of Employee Wellbeing",
    desc: "Why investing in mental health is the highest-leverage move on your org chart.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "HR leaders have long argued for wellbeing investment on moral grounds. What's changed in the last three years is the financial case — and it's now overwhelming.",
      },
      {
        type: "heading",
        text: "The Cost of Ignoring It",
      },
      {
        type: "paragraph",
        text: "Presenteeism — showing up while mentally checked out — costs organizations roughly twice what absenteeism does, and it's nearly invisible in most HR dashboards. Add burnout-driven attrition and you're looking at a hidden tax that compounds year over year. The question is no longer whether wellbeing programs are worth it, but how to build ones that actually move the numbers.",
      },
      {
        type: "heading",
        text: "What Actually Works",
      },
      {
        type: "paragraph",
        text: "The research is now clear: EAP utilization alone doesn't shift outcomes. What does? Manager training in psychological safety, workload norms that protect recovery time, and leadership that models vulnerability. The organizations seeing real results are treating mental health as a team sport, not an individual responsibility.",
      },
      {
        type: "callout",
        text: "For every dollar invested in evidence-based wellbeing programs, the average return is four dollars in reduced absenteeism, lower attrition, and productivity gains. The ROI is there — if you build it right.",
      },
    ],
  },
  {
    slug: "remote-work-laws",
    category: "Compliance",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    author: "Audia HR Editorial",
    title: "Navigating Multi-State Remote Work Laws",
    desc: "A practical guide for HR teams managing distributed talent across jurisdictions.",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "When your team is distributed across states — or countries — the compliance surface area grows fast. Tax nexus, wage and hour laws, leave requirements, non-compete enforceability: each state has its own rules, and they change constantly.",
      },
      {
        type: "heading",
        text: "The Tax Nexus Problem",
      },
      {
        type: "paragraph",
        text: "Hiring someone in a new state can create corporate tax nexus — meaning your company may owe taxes in that state. Many HR teams discover this only after the fact. A simple rule of thumb: loop in finance and legal before offering a role to a candidate in a state where you have no existing presence.",
      },
      {
        type: "heading",
        text: "Wage and Hour Landmines",
      },
      {
        type: "paragraph",
        text: "Overtime thresholds, meal break requirements, and salary minimum thresholds vary dramatically by state. California, New York, and Colorado are the most frequently cited risk areas — but Illinois, New Jersey, and Washington have also tightened their requirements in recent cycles. If your HR systems don't flag state-specific requirements at the time of hire, they should.",
      },
      {
        type: "callout",
        text: "The safest posture: build a multi-state compliance review into every new hire workflow. A 20-minute checklist at offer stage beats a six-figure wage claim 18 months later.",
      },
    ],
  },
  {
    slug: "skills-not-pedigree",
    category: "Recruitment",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    author: "Audia HR Editorial",
    title: "How to Hire for Skills, Not Pedigree",
    desc: "Structured interviews and skills tests outperform gut-feel every time. Here's the playbook.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Degree requirements were always a proxy for something else — discipline, communication, problem-solving. The problem is they're a noisy proxy, and they exclude millions of capable people. Skills-based hiring cuts through the noise.",
      },
      {
        type: "heading",
        text: "Structured Interviews First",
      },
      {
        type: "paragraph",
        text: "The single highest-impact change any hiring team can make is shifting from unstructured to structured interviews. Same questions for every candidate, scored against a rubric, calibrated with the hiring team before interviews start. The research consensus is unambiguous: structured interviews predict job performance far better than unstructured ones, and they dramatically reduce bias.",
      },
      {
        type: "heading",
        text: "Skills Assessments That Work",
      },
      {
        type: "paragraph",
        text: "Work samples — give the candidate a real problem to solve — are the gold standard. They're more predictive than personality tests, more fair than GPA filters, and they give candidates a realistic preview of the job. Keep them short (under 90 minutes), compensate candidates for their time, and score them blind where possible.",
      },
      {
        type: "callout",
        text: "The best hiring teams treat their interview process the same way they treat their product: test it, measure it, iterate. Conversion rates and quality-of-hire data tell you where the process is leaking.",
      },
    ],
  },
  {
    slug: "manager-to-multiplier",
    category: "Leadership",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    author: "Audia HR Editorial",
    title: "From Manager to Multiplier: A Coaching Framework",
    desc: "Six habits that turn good managers into the kind of leaders people stay for.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "People don't leave companies — they leave managers. It's the most cited finding in employee experience research, and it still surprises leaders who think culture is set at the top. It isn't. It's set at the manager layer.",
      },
      {
        type: "heading",
        text: "The Six Habits",
      },
      {
        type: "paragraph",
        text: "Multiplier managers share six habits: they ask before they tell; they give credit publicly and feedback privately; they remove blockers before they set goals; they know what energizes each person on their team; they make growth part of every one-on-one; and they protect their team's focus as fiercely as they protect their own.",
      },
      {
        type: "heading",
        text: "Building the Habit Stack",
      },
      {
        type: "paragraph",
        text: "The mistake most manager development programs make is trying to change everything at once. The frameworks that stick identify one or two behaviors to change per quarter, build in peer accountability, and measure outcomes in team-level engagement data. Slow and specific beats fast and broad.",
      },
      {
        type: "callout",
        text: "The ROI of one great manager isn't linear — it compounds. A multiplier manager develops other managers, builds psychological safety that lifts team performance, and becomes a reason people join and stay.",
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Trends: "#e0f2fe",
  Leadership: "#f0fdf4",
  Productivity: "#fef9c3",
  Compliance: "#fff1f2",
  Recruitment: "#faf5ff",
};

const categoryTextColors: Record<string, string> = {
  Trends: "#0369a1",
  Leadership: "#15803d",
  Productivity: "#a16207",
  Compliance: "#be123c",
  Recruitment: "#7e22ce",
};

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "56px 0 0", color: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
          <Link
            href="/insights"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--teal)",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: 28,
            }}
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span
              style={{
                background: categoryColors[article.category] || "#f3f4f6",
                color: categoryTextColors[article.category] || "#374151",
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 12px",
                borderRadius: 20,
              }}
            >
              {article.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: 20,
              color: "#fff",
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              color: "rgba(255,255,255,0.55)",
              fontSize: 13,
              paddingBottom: 32,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <User size={13} /> {article.author}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Calendar size={13} /> {article.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Clock size={13} /> {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <img
            src={article.img}
            alt={article.title}
            style={{
              width: "100%",
              height: 360,
              objectFit: "cover",
              borderRadius: "12px 12px 0 0",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "56px 0 80px", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
          {article.content.map((block, i) => {
            if (block.type === "intro") {
              return (
                <p
                  key={i}
                  style={{
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: "var(--mid-text)",
                    fontWeight: 500,
                    marginBottom: 32,
                    borderLeft: "3px solid var(--teal)",
                    paddingLeft: 20,
                  }}
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginTop: 40,
                    marginBottom: 14,
                  }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p
                  key={i}
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--mid-text)",
                    marginBottom: 20,
                  }}
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "callout") {
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--teal-light)",
                    border: "1px solid rgba(0,196,160,0.25)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    marginTop: 36,
                    marginBottom: 12,
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#065f46",
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              );
            }
            return null;
          })}

          {/* CTA */}
          <div
            style={{
              marginTop: 56,
              background: "var(--navy)",
              borderRadius: 16,
              padding: "36px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
                Want to put these ideas into practice?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>
                Talk to an Audia HR specialist — free 30-minute consultation.
              </p>
            </div>
            <Link href="/contact" className="btn-teal" style={{ whiteSpace: "nowrap" }}>
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section style={{ background: "var(--bg-light)", padding: "60px 0 80px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, color: "var(--navy)", marginBottom: 32 }}>More from Insights</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {others.map(({ slug, category, date, title, desc, img }) => (
              <article key={slug} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ height: 160, overflow: "hidden" }}>
                  <img
                    src={img}
                    alt={title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "18px 22px 22px" }}>
                  <span
                    style={{
                      background: categoryColors[category] || "#f3f4f6",
                      color: categoryTextColors[category] || "#374151",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {category}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--gray-text)", fontSize: 11, margin: "10px 0 8px" }}>
                    <Calendar size={11} /> {date}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--navy)", marginBottom: 6, lineHeight: 1.4 }}>{title}</h3>
                  <p style={{ color: "var(--gray-text)", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
                  <Link
                    href={`/insights/${slug}`}
                    style={{ color: "var(--teal)", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                  >
                    Read article <ArrowLeft size={11} style={{ transform: "rotate(180deg)" }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
