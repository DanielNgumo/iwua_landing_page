export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1a2e1a", color: "rgba(255,255,255,0.7)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M7 1C4 1 1 4 1 7s2 5 5 5 6-2.5 6-5.5C12 3.5 10 1 7 1z" fill="white" opacity="0.9"/>
                  <path d="M7 4C5.5 4 4 5.5 4 7s1 2.5 3 3" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Iwua</span>
            </div>
            <p style={{ fontFamily: "var(--font-family)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "34ch" }}>
              Kenya's premier agritech marketplace — connecting Murang'a's finest farmers directly to buyers nationwide. No middlemen. Just fresh produce and fair prices.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#86efac" }} />
              <span style={{ fontFamily: "var(--font-family)", fontSize: "0.8rem", color: "#86efac", fontWeight: 500 }}>Live on the Play Store</span>
            </div>
          </div>

          {/* Platform links */}
          <div className="flex flex-col gap-3">
            <h4 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.875rem", color: "white" }}>Platform</h4>
            {["How It Works", "For Farmers", "For Buyers", "Quality Assurance", "M-Pesa Payments"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "var(--font-family)", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-3">
            <h4 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.875rem", color: "white" }}>Company</h4>
            {["About Us", "Murang'a Partnership", "Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "var(--font-family)", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p style={{ fontFamily: "var(--font-family)", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © {currentYear} Iwua Technologies Ltd. All rights reserved. Built for Murang'a County, serving Kenya.
          </p>
          <div className="flex items-center gap-4">
            {["React 18", "Tailwind CSS v4", "M-Pesa API", "Android"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded"
                style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", fontWeight: 500, color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
