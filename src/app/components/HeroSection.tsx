'use client';

import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/images/farmer.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "75% 30%" }}
        />
        {/* Gradient overlay: concentrated tightly on the left where the card sits, photo left clear from ~40% onward */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,16,10,0.82) 0%, rgba(8,16,10,0.6) 22%, rgba(8,16,10,0.15) 40%, rgba(8,16,10,0) 55%)",
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background: "linear-gradient(0deg, rgba(8,16,10,0.7) 0%, rgba(8,16,10,0) 40%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20 lg:py-28">
        {/* Glass card holding the copy — narrower, pinned to the left, nudged further left to clear the photo */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="max-w-md rounded-3xl p-7 lg:p-8"
          style={{
            transform: "translateX(-30px)",
            backgroundColor: "rgba(10,20,12,0.35)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#86efac" }} />
            <span style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.7rem", color: "#e8f5ec", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Murang'a to the Nation
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(0,0,0,0.35)",
            }}
          >
            Fresh from <span style={{ color: "#9be8ad" }}>Murang'a</span>, sold nationwide.
          </h1>

          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.65,
              maxWidth: "38ch",
            }}
          >
            Kenya's first direct agritech marketplace. No middlemen, fair prices, verified listings.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a
              href="#download"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", borderRadius: "var(--radius)", fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.9rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.1 2.1 0 0 1-1.18-1.9V2.14a2.1 2.1 0 0 1 1.18-1.9L13.5 12 3.18 23.76zm16.6-9.24-2.7-1.56L14.4 12l2.68-2.96 2.7-1.56A1.85 1.85 0 0 1 21.6 9a1.85 1.85 0 0 1 0 1.52 1.85 1.85 0 0 1-1.82 4zM4.5 22.2l8.34-9.2-2.18-2.4L4.5 22.2zm0-20.4 6.16 11.6-2.18 2.4L4.5 1.8z"/>
              </svg>
              Download the App
            </a>

            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 px-6 py-3.5 transition-all duration-200 hover:bg-white hover:text-[#1e5c2e] group"
              style={{ backgroundColor: "transparent", color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.6)", borderRadius: "var(--radius)", fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.9rem" }}
            >
              How It Works
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-5 pt-6 mt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "#ffffff" }}>2,400+</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>Farmers</span>
            </div>
            <div className="w-px h-9" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "#ffffff" }}>47</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>Counties</span>
            </div>
            <div className="w-px h-9" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "#f4a261" }}>12M+</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>KES Traded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}