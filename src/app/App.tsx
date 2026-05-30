import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AgentsSection } from "./components/AgentsSection";
import { EsportsSection } from "./components/EsportsSection";
import { StoreSection } from "./components/StoreSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0B0B0B; overflow-x: hidden; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0B0B0B; }
        ::-webkit-scrollbar-thumb { background: rgba(255,107,0,0.35); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,107,0,0.6); }

        ::selection { background: rgba(255,107,0,0.35); color: #fff; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-char { display: none !important; }
        }
        @media (max-width: 640px) {
          section { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AgentsSection />
      <EsportsSection />
      <StoreSection />
      <Footer />
    </div>
  );
}
