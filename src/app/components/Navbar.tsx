'use client';

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Farmers", href: "#for-farmers" },
    { label: "For Buyers", href: "#for-buyers" },
  ];

  // Text/icon colors flip depending on whether we're floating over the photo or on a solid white bar
  const textColor = scrolled ? "var(--muted-foreground)" : "rgba(255,255,255,0.9)";
  const textHoverColor = scrolled ? "var(--foreground)" : "#ffffff";
  const wordmarkColor = scrolled ? "var(--primary)" : "#ffffff";

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(10,20,12,0.15)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ border: scrolled ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.3)" }}
          >
            <img
              src="/logo.jpeg"
              alt="Farm Fresh logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="transition-colors duration-300"
            style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: wordmarkColor, letterSpacing: "-0.01em" }}
          >
            Farm Fresh
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontFamily: "var(--font-family)", fontWeight: 500, fontSize: "0.9rem", color: textColor }}
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = textHoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
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
          className="md:hidden p-2 rounded-lg transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: scrolled ? "var(--foreground)" : "#ffffff" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: scrolled ? "#ffffff" : "rgba(10,20,12,0.92)",
            borderTop: scrolled ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "var(--font-family)", fontWeight: 500, color: scrolled ? "var(--foreground)" : "#ffffff" }}
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