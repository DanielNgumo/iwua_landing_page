export function CtaSection() {
  return (
    <section id="download" className="py-28 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ backgroundColor: "var(--primary)", filter: "blur(100px)" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <span
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: "#fef3eb", fontFamily: "var(--font-family)", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}
        >
          Get Started Today
        </span>

        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--foreground)", lineHeight: 1.1, letterSpacing: "-0.025em", maxWidth: "18ch" }}>
          Ready to Revolutionize Your Agriculture Business?
        </h2>

        <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "52ch" }}>
          Join over 2,400 Murang'a farmers and nationwide buyers already trading on Iwua. Download the app and start listing or buying in under 3 minutes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 transition-all duration-200 hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "var(--primary)", color: "white", borderRadius: "var(--radius)", fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "1rem" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3.18 23.76a2.1 2.1 0 0 1-1.18-1.9V2.14a2.1 2.1 0 0 1 1.18-1.9L13.5 12 3.18 23.76zm16.6-9.24-2.7-1.56L14.4 12l2.68-2.96 2.7-1.56A1.85 1.85 0 0 1 21.6 9a1.85 1.85 0 0 1 0 1.52 1.85 1.85 0 0 1-1.82 4zM4.5 22.2l8.34-9.2-2.18-2.4L4.5 22.2zm0-20.4 6.16 11.6-2.18 2.4L4.5 1.8z"/>
            </svg>
            <div className="text-left">
              <div style={{ fontSize: "0.65rem", opacity: 0.8 }}>Download on</div>
              <div>Google Play</div>
            </div>
          </a>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["Free to download", "M-Pesa integrated", "Quality verified", "No broker fees"].map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "#e8f5ec", fontFamily: "var(--font-family)", fontSize: "0.8rem", fontWeight: 500, color: "var(--primary)" }}
            >
              <span style={{ fontSize: "0.65rem" }}>✓</span>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
