'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImpactSection() {
  const [slide, setSlide] = useState(0);
  const totalSlides = 2;

  const goTo = (index: number) => setSlide((index + totalSlides) % totalSlides);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#f0ede8" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          {/* Left: Typographic statement */}
          <div className="flex flex-col justify-center px-8 lg:px-14 py-20 relative">
            {/* Decorative large number */}
            <div
              className="absolute top-8 left-8 select-none pointer-events-none"
              style={{ fontFamily: "var(--font-family)", fontWeight: 900, fontSize: "10rem", color: "var(--primary)", opacity: 0.05, lineHeight: 1, letterSpacing: "-0.05em" }}
              aria-hidden
            >
              KE
            </div>

            <div className="relative z-10">
              <span
                className="inline-block px-3 py-1 rounded-full mb-6"
                style={{ backgroundColor: "rgba(30,92,46,0.12)", fontFamily: "var(--font-family)", fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                Our Mission
              </span>

              <blockquote
                style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--foreground)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Rooted in{" "}
                <span style={{ color: "var(--primary)" }}>Murang'a,</span>
                <br />
                Serving the{" "}
                <span style={{ color: "var(--accent)" }}>Nation.</span>
              </blockquote>

              <p
                style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "1.05rem", color: "var(--muted-foreground)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "44ch" }}
              >
                Murang'a County produces some of Kenya's finest fruits, vegetables, and grains. Farm Fresh digitizes this abundance — giving every smallholder farmer a direct channel to the national market, and every buyer access to verified-fresh, competitively priced produce.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { label: "Murang'a Sub-Counties", value: "10" },
                  { label: "Avg. Farmer Revenue Increase", value: "+34%" },
                  { label: "Days to First Sale", value: "< 3" },
                ].map((stat, idx) => (
                  <div
                    key={stat.label}
                    data-aos="zoom-in-up"
                    data-aos-delay={idx * 100}
                    className="flex flex-col gap-0.5"
                  >
                    <span style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "1.75rem", color: "var(--primary)", letterSpacing: "-0.02em" }}>
                      {stat.value}
                    </span>
                    <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Manual carousel — Slide 0: real product photo, Slide 1: digital-future placeholder */}
          <div className="relative overflow-hidden min-h-[380px] lg:min-h-auto" style={{ backgroundColor: "#1e5c2e" }}>
            {/* Slide track */}
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ width: "200%", transform: `translateX(-${slide * 50}%)` }}
            >
              {/* Slide 0: Real photo */}
              <div className="relative w-1/2 h-full min-h-[380px] lg:min-h-full">
                <img
                  src="/images/farmer-tablet.png"
                  alt="A farmer in Murang'a reviewing orders on the Farm Fresh dashboard via tablet"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(8,16,10,0.75) 0%, rgba(8,16,10,0.05) 45%, rgba(8,16,10,0.15) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-10 py-8 text-center">
                  <p style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.1rem", color: "white", lineHeight: 1.3 }}>
                    Real Farmers,<br />
                    <span style={{ color: "#86efac" }}>Real Dashboards</span>
                  </p>
                  <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: "0.5rem", maxWidth: "30ch", marginLeft: "auto", marginRight: "auto" }}>
                    Managing orders from the farm, in real time.
                  </p>
                </div>
              </div>

              {/* Slide 1: Original placeholder */}
              <div className="relative w-1/2 h-full min-h-[380px] lg:min-h-full">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(201,94,42,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 40%)" }} />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
                />

                <div className="relative z-10 flex flex-col justify-center items-center h-full px-10 py-16 text-center">
                  <div className="mb-8 relative">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-xl" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                      <span style={{ fontSize: "4rem" }}>🌾</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "var(--accent)" }}>
                      <span style={{ fontSize: "1.25rem" }}>📱</span>
                    </div>
                    <div className="absolute -bottom-3 -left-5 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
                      <span style={{ fontSize: "1.25rem" }}>🛒</span>
                    </div>
                  </div>

                  <p style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "white", lineHeight: 1.3 }}>
                    Traditional Farming,<br />
                    <span style={{ color: "#86efac" }}>Digital Future</span>
                  </p>

                  <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginTop: "0.75rem", maxWidth: "28ch" }}>
                    From highland soil to nationwide checkout — all in one platform.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-[240px]">
                    {Array.from({ length: 47 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full transition-all"
                        style={{
                          backgroundColor: i < 10 ? "#86efac" : i < 25 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)",
                          transform: i === 3 ? "scale(1.6)" : "scale(1)",
                        }}
                        title={i === 3 ? "Murang'a" : `County ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
                    All 47 counties · Bright = active Farm Fresh zones
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel controls — manual only, no autoplay */}
            <button
              onClick={() => goTo(slide - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <ChevronLeft size={18} color="white" />
            </button>
            <button
              onClick={() => goTo(slide + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <ChevronRight size={18} color="white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: slide === i ? "20px" : "7px",
                    height: "7px",
                    backgroundColor: slide === i ? "#86efac" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}