'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Farmers", href: "#for-farmers" },
    { label: "For Buyers", href: "#for-buyers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C4 1 1 4 1 7s2 5 5 5 6-2.5 6-5.5C12 3.5 10 1 7 1z" fill="white" opacity="0.9"/>
              <path d="M7 4C5.5 4 4 5.5 4 7s1 2.5 3 3" stroke="white" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "var(--primary)", letterSpacing: "-0.01em" }}>
            Iwua
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontFamily: "var(--font-family)", fontWeight: 500, fontSize: "0.9rem", color: "var(--muted-foreground)" }}
              className="hover:text-foreground transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.875rem", backgroundColor: "var(--accent)", color: "var(--accent-foreground)", borderRadius: "var(--radius)" }}
            className="px-5 py-2.5 transition-opacity duration-150 hover:opacity-90"
          >
            Download App
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "var(--foreground)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "var(--font-family)", fontWeight: 500, color: "var(--foreground)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.875rem", backgroundColor: "var(--accent)", color: "var(--accent-foreground)", borderRadius: "var(--radius)", textAlign: "center" }}
            className="py-3"
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
}
