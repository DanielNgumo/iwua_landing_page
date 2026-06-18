import { Smartphone, CheckCircle, ShoppingCart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    actor: "Farmer",
    title: "List Your Produce",
    description:
      "The farmer logs into their personal Android dashboard, enters product details — type, quantity, price, harvest date — and submits the listing in seconds.",
    tag: "Farmer Dashboard",
    tagBg: "#e8f5ec",
    tagColor: "#1e5c2e",
    accentBg: "#1e5c2e",
  },
  {
    number: "02",
    icon: CheckCircle,
    actor: "Superadmin",
    title: "Quality Approval",
    description:
      "Iwua's superadmin reviews each submission for accuracy and quality standards. Only verified, authentic listings go live on the marketplace — protecting every buyer.",
    tag: "Quality Gate",
    tagBg: "#fef3eb",
    tagColor: "#c95e2a",
    accentBg: "#c95e2a",
  },
  {
    number: "03",
    icon: ShoppingCart,
    actor: "Buyer",
    title: "Browse & Checkout",
    description:
      "Nationwide buyers browse the live catalog, choose their produce, and complete a secure checkout via M-Pesa Paybill or cash — from anywhere in Kenya.",
    tag: "Secure Checkout",
    tagBg: "#e8f5ec",
    tagColor: "#1e5c2e",
    accentBg: "#1e5c2e",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: "#fafaf8" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className="inline-block px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#fef3eb", fontFamily: "var(--font-family)", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            How It Works
          </span>
          <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--foreground)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>
            Three Steps from Farm to Doorstep
          </h2>
          <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.7, marginTop: "0.75rem" }}>
            Iwua's streamlined pipeline removes friction at every stage of the agricultural supply chain.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, var(--primary), var(--accent), var(--primary), transparent)", opacity: 0.25 }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center gap-5">
                  {/* Step circle */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: "white", border: `2px solid ${step.accentBg}22` }}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: step.tagBg }}
                      >
                        <Icon size={28} style={{ color: step.accentBg }} strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: step.accentBg }}
                    >
                      <span style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", fontWeight: 800, color: "white" }}>
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-family)", fontSize: "0.7rem", fontWeight: 700, color: step.tagColor, backgroundColor: step.tagBg, letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    {step.tag}
                  </span>

                  {/* Title */}
                  <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.25rem", color: "var(--foreground)", lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "30ch" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
