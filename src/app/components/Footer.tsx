'use client';

import { Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "0742580239";
  const phoneHref = "tel:+254742580239";

  return (
    <footer
      data-aos="fade-up"
      data-aos-delay="600"
      style={{ backgroundColor: "#1a2e1a", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Top section — centered, stacked */}
        <div className="flex flex-col items-center text-center gap-5 py-16 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          

          <p style={{ fontFamily: "var(--font-family)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "1200px", width: "100%" }}>
            Kenya's premier agritech marketplace — connecting Murang'a's finest farmers directly to buyers nationwide. No middlemen. Just fresh produce and fair prices.
          </p>

       
          {/* Contact */}
          <a
            href={phoneHref}
            className="flex items-center gap-2 mt-2 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <Phone size={14} style={{ color: "#86efac" }} />
            <span style={{ fontFamily: "var(--font-family)", fontSize: "0.875rem", color: "white", fontWeight: 500 }}>
              {phoneNumber}
            </span>
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 py-6 text-center">
          <p style={{ fontFamily: "var(--font-family)", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © {currentYear} Farm Fresh Technologies Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-family)", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
            Built for Murang'a County, serving Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}