"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 34, height: 34, background: "var(--navy)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="7" r="3.5" stroke="var(--teal)" strokeWidth="1.8"/>
              <path d="M2 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M14 9l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)", letterSpacing: "-0.3px" }}>AUDIA HR Services</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hide-mobile">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              color: pathname === link.href ? "var(--teal)" : "var(--mid-text)",
              transition: "color 0.15s"
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-teal hide-mobile" style={{ fontSize: 13, padding: "8px 18px" }}>
          Book Consultation
        </Link>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }} className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "16px 24px 20px" }} className="show-mobile">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "10px 0", fontSize: 15, fontWeight: 500,
              color: pathname === link.href ? "var(--teal)" : "var(--dark-text)", textDecoration: "none",
              borderBottom: "1px solid var(--border)"
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-teal" style={{ marginTop: 16, width: "100%", justifyContent: "center" }} onClick={() => setOpen(false)}>
            Book Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
