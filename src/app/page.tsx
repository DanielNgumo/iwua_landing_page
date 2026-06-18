import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ValuePropositions } from "./components/ValuePropositions";
import { HowItWorks } from "./components/HowItWorks";
import { ImpactSection } from "./components/ImpactSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "var(--font-family)", backgroundColor: "var(--background)" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositions />
        <HowItWorks />
        <ImpactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}