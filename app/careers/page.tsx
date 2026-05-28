"use client";
import { useState } from "react";
import { MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  { id: 1, title: "Senior HR Consultant", dept: "Consulting", location: "New York, NY", type: "Full-time", badge: "Full-time" },
  { id: 2, title: "Talent Acquisition Lead", dept: "Recruitment", location: "Remote, US", type: "Full-time", badge: "Full-time" },
  { id: 3, title: "Payroll Specialist", dept: "Operations", location: "London, UK", type: "Full-time", badge: "Full-time" },
  { id: 4, title: "L&D Program Manager", dept: "Training", location: "Singapore", type: "Full-time", badge: "Full-time" },
  { id: 5, title: "Compliance Analyst", dept: "Compliance", location: "Remote, EU", type: "Contract", badge: "Contract" },
];

export default function CareersPage() {
  const [selected, setSelected] = useState(jobs[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-tag">Careers</span>
          <h1>Build your career at AUDIA</h1>
          <p>Join a team that&apos;s redefining how modern businesses think about people.</p>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}>
          {/* Job list */}
          <div>
            <h2 style={{ fontWeight: 700, fontSize: 20, color: "var(--navy)", marginBottom: 20 }}>Open positions</h2>
            {jobs.map(job => (
              <div key={job.id} onClick={() => { setSelected(job); setSubmitted(false); }}
                style={{ padding: "18px 20px", marginBottom: 10, borderRadius: 10, border: `1.5px solid ${selected.id === job.id ? "var(--teal)" : "var(--border)"}`, background: selected.id === job.id ? "var(--teal-light)" : "#fff", cursor: "pointer", transition: "all 0.15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)", marginBottom: 4 }}>{job.title}</div>
                    <div style={{ fontSize: 12, color: "var(--teal)", fontWeight: 600, marginBottom: 8 }}>{job.dept}</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--gray-text)" }}><MapPin size={11} /> {job.location}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--gray-text)" }}><Briefcase size={11} /> {job.dept}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--gray-text)" }}><Clock size={11} /> {job.type}</span>
                    </div>
                  </div>
                  <span style={{ background: job.type === "Contract" ? "#fef3c7" : "var(--teal-light)", color: job.type === "Contract" ? "#92400e" : "var(--teal-dark)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>{job.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Apply form */}
          <div className="card" style={{ position: "sticky", top: 84 }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Application sent!</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 14 }}>We&apos;ll be in touch within 3–5 business days.</p>
                <button onClick={() => setSubmitted(false)} className="btn-teal" style={{ marginTop: 20 }}>Apply to another role</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: "var(--navy)" }}>Apply now</h3>
                <p style={{ color: "var(--gray-text)", fontSize: 13, marginBottom: 20 }}>Applying for: <strong>{selected.title}</strong></p>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Full name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Email</label>
                  <input type="email" placeholder="you@company.com" />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: 6 }}>Why you?</label>
                  <textarea rows={4} placeholder="Tell us why you'd be a great fit..." style={{ resize: "vertical" }} />
                </div>
                <button className="btn-teal" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSubmitted(true)}>Submit application</button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
