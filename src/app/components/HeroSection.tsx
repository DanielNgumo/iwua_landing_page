import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ backgroundColor: "#fafaf8" }}>
      {/* Subtle background geometry */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 right-0 w-[55%] h-full opacity-30"
          style={{ background: "linear-gradient(135deg, #e8f5ec 0%, #f5f0ea 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "var(--primary)", filter: "blur(80px)", transform: "translate(-30%, 30%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Left: Copy */}
        <div className="flex flex-col gap-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
            style={{ backgroundColor: "#e8f5ec", border: "1px solid rgba(30,92,46,0.2)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
            <span style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.75rem", color: "var(--primary)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Murang'a to the Nation
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: "var(--foreground)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            Bridging the Gap Between{" "}
            <span style={{ color: "var(--primary)" }}>Murang'a Farmers</span>{" "}
            and Nationwide Buyers.
          </h1>

          <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "1.125rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "48ch" }}>
            Iwua is Kenya's first direct agritech marketplace — no middlemen, no markup. Farmers list, superadmin verifies, buyers purchase with M-Pesa or cash. Fresh produce, fair prices, everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#download"
              className="flex items-center justify-center gap-2.5 px-7 py-4 transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", borderRadius: "var(--radius)", fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.9375rem" }}
            >
              {/* Google Play icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.1 2.1 0 0 1-1.18-1.9V2.14a2.1 2.1 0 0 1 1.18-1.9L13.5 12 3.18 23.76zm16.6-9.24-2.7-1.56L14.4 12l2.68-2.96 2.7-1.56A1.85 1.85 0 0 1 21.6 9a1.85 1.85 0 0 1 0 1.52 1.85 1.85 0 0 1-1.82 4zM4.5 22.2l8.34-9.2-2.18-2.4L4.5 22.2zm0-20.4 6.16 11.6-2.18 2.4L4.5 1.8z"/>
              </svg>
              Download the App
            </a>

            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 px-7 py-4 transition-all duration-200 hover:bg-primary hover:text-white group"
              style={{ backgroundColor: "transparent", color: "var(--primary)", border: "1.5px solid var(--primary)", borderRadius: "var(--radius)", fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "0.9375rem" }}
            >
              Learn How It Works
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.5rem", color: "var(--primary)" }}>2,400+</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Farmers Listed</span>
            </div>
            <div className="w-px h-10" style={{ backgroundColor: "var(--border)" }} />
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.5rem", color: "var(--primary)" }}>47</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Counties Reached</span>
            </div>
            <div className="w-px h-10" style={{ backgroundColor: "var(--border)" }} />
            <div className="flex flex-col">
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "1.5rem", color: "var(--accent)" }}>KES 12M+</span>
              <span style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Transactions</span>
            </div>
          </div>
        </div>

        {/* Right: App Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone outer shell */}
            <div
              className="relative w-[280px] h-[580px] rounded-[2.5rem] p-[2px] shadow-2xl"
              style={{ background: "linear-gradient(145deg, #2d7a42 0%, #1e5c2e 100%)" }}
            >
              {/* Phone inner */}
              <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-white relative">
                {/* Status bar */}
                <div className="h-10 flex items-center justify-between px-5 pt-2" style={{ backgroundColor: "#1e5c2e" }}>
                  <span style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "white", fontWeight: 600 }}>9:41</span>
                  <div className="w-20 h-4 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.3)" }} />
                  <div className="flex gap-1">
                    <div className="w-3 h-2 rounded-sm" style={{ backgroundColor: "white", opacity: 0.8 }} />
                    <div className="w-1.5 h-2 rounded-sm" style={{ backgroundColor: "white", opacity: 0.6 }} />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 pt-3 pb-2" style={{ backgroundColor: "#1e5c2e" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>Good morning</p>
                      <p style={{ fontFamily: "var(--font-family)", fontSize: "0.875rem", color: "white", fontWeight: 700 }}>John Mwangi 👋</p>
                    </div>
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <span style={{ fontSize: "0.75rem" }}>🌿</span>
                      </div>
                    </div>
                  </div>

                  {/* Balance card */}
                  <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>This Month's Revenue</p>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "1.1rem", color: "white", fontWeight: 700 }}>KES 48,250</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span style={{ fontSize: "0.55rem", color: "#86efac" }}>▲ 12.4%</span>
                      <span style={{ fontFamily: "var(--font-family)", fontSize: "0.55rem", color: "rgba(255,255,255,0.6)" }}>vs last month</span>
                    </div>
                  </div>
                </div>

                {/* App body */}
                <div className="px-4 py-3" style={{ backgroundColor: "#f8f9f8" }}>
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[{ label: "Listed", val: "12", icon: "📦" }, { label: "Sold", val: "8", icon: "✅" }, { label: "Pending", val: "3", icon: "⏳" }].map((s) => (
                      <div key={s.label} className="rounded-xl p-2 text-center" style={{ backgroundColor: "white", border: "1px solid rgba(30,92,46,0.08)" }}>
                        <span style={{ fontSize: "0.9rem" }}>{s.icon}</span>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: "0.8rem", color: "#1e5c2e", fontWeight: 700 }}>{s.val}</p>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: "0.5rem", color: "#6b7c6b" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* My Listings header */}
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontFamily: "var(--font-family)", fontSize: "0.7rem", color: "#1a2e1a", fontWeight: 700 }}>My Listings</span>
                    <span style={{ fontFamily: "var(--font-family)", fontSize: "0.6rem", color: "#c95e2a", fontWeight: 600 }}>+ Add New</span>
                  </div>

                  {/* Listing items */}
                  {[
                    { name: "Organic Potatoes", qty: "200 kg", price: "KES 45/kg", status: "Approved", emoji: "🥔" },
                    { name: "French Beans", qty: "50 kg", price: "KES 90/kg", status: "Pending", emoji: "🫘" },
                    { name: "Passion Fruits", qty: "80 kg", price: "KES 120/kg", status: "Approved", emoji: "🍈" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2.5 p-2 rounded-xl mb-1.5" style={{ backgroundColor: "white", border: "1px solid rgba(30,92,46,0.07)" }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: "#e8f5ec" }}>
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "#1a2e1a", fontWeight: 600 }}>{item.name}</p>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: "0.55rem", color: "#6b7c6b" }}>{item.qty} · {item.price}</p>
                      </div>
                      <span
                        className="px-1.5 py-0.5 rounded-full"
                        style={{
                          fontFamily: "var(--font-family)",
                          fontSize: "0.48rem",
                          fontWeight: 600,
                          backgroundColor: item.status === "Approved" ? "#e8f5ec" : "#fef3eb",
                          color: item.status === "Approved" ? "#1e5c2e" : "#c95e2a",
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            <div
              className="absolute -left-10 top-24 rounded-xl px-3 py-2.5 shadow-lg"
              style={{ backgroundColor: "white", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: "#e8f5ec" }}>✅</div>
                <div>
                  <p style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "var(--primary)", fontWeight: 700 }}>Listing Approved!</p>
                  <p style={{ fontFamily: "var(--font-family)", fontSize: "0.55rem", color: "var(--muted-foreground)" }}>Organic Potatoes · Just now</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-12 bottom-32 rounded-xl px-3 py-2.5 shadow-lg"
              style={{ backgroundColor: "white", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: "#fef3eb" }}>💳</div>
                <div>
                  <p style={{ fontFamily: "var(--font-family)", fontSize: "0.65rem", color: "var(--accent)", fontWeight: 700 }}>Payment Received</p>
                  <p style={{ fontFamily: "var(--font-family)", fontSize: "0.55rem", color: "var(--muted-foreground)" }}>KES 9,000 via M-Pesa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
