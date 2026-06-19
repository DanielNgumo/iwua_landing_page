'use client';

import { TrendingUp, Leaf, Shield } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    tag: "For Farmers",
    title: "Direct Market Access",
    description:
      "Skip the brokers. List your produce directly on Iwua's marketplace and connect with buyers from Nairobi, Mombasa, and across all 47 counties — at fair prices you set.",
    highlight: "Zero middleman fees",
    highlightColor: "#e8f5ec",
    highlightText: "#1e5c2e",
    iconBg: "#e8f5ec",
    iconColor: "#1e5c2e",
    accent: "#1e5c2e",
  },
  {
    icon: Leaf,
    tag: "For Buyers",
    title: "Guaranteed Freshness",
    description:
      "Source directly from Murang'a's fertile highlands. Every listing passes our superadmin quality gate — so what you order is exactly what arrives, fresh from the farm.",
    highlight: "Quality-verified produce",
    highlightColor: "#fef3eb",
    highlightText: "#c95e2a",
    iconBg: "#fef3eb",
    iconColor: "#c95e2a",
    accent: "#c95e2a",
  },
  {
    icon: Shield,
    tag: "For Everyone",
    title: "Secure Payments",
    description:
      "Pay confidently with M-Pesa Paybill integration or choose cash on delivery. Every transaction is logged, verified, and protected end-to-end inside the Iwua platform.",
    highlight: "M-Pesa & Cash supported",
    highlightColor: "#e8f5ec",
    highlightText: "#1e5c2e",
    iconBg: "#e8f5ec",
    iconColor: "#1e5c2e",
    accent: "#1e5c2e",
  },
];

export function ValuePropositions() {
  return (
    <section id="for-farmers" className="py-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span
            className="inline-block px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#e8f5ec", fontFamily: "var(--font-family)", fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Why Iwua
          </span>
          <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--foreground)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>
            Built for Every Stakeholder in Kenya's Agricultural Chain
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative flex flex-col gap-5 p-7 rounded-2xl transition-shadow duration-200 hover:shadow-md"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-7 right-7 h-0.5 rounded-full" style={{ backgroundColor: card.accent, opacity: 0.5 }} />

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon size={20} style={{ color: card.iconColor }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span
                      className="inline-block mb-1"
                      style={{ fontFamily: "var(--font-family)", fontSize: "0.7rem", fontWeight: 600, color: card.iconColor, letterSpacing: "0.04em", textTransform: "uppercase" }}
                    >
                      {card.tag}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.125rem", color: "var(--foreground)", lineHeight: 1.3 }}>
                      {card.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.925rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                  {card.description}
                </p>

                <div
                  className="mt-auto flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ backgroundColor: card.highlightColor }}
                >
                  <span style={{ fontSize: "0.75rem" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-family)", fontSize: "0.8rem", fontWeight: 600, color: card.highlightText }}>
                    {card.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
