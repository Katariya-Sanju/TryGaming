import { motion } from "motion/react";
import { Zap, Twitter, Youtube, Twitch, Instagram, ChevronRight } from "lucide-react";

const footerLinks = {
  Game: ["Download", "System Req", "Patch Notes", "Status"],
  Compete: ["Ranked Mode", "Tournaments", "Leaderboards", "Champions Tour"],
  Community: ["Forums", "Discord", "Fan Art", "Creator Program"],
  Support: ["Help Center", "Contact Us", "Bug Reports", "Esports Rules"],
};

export function Footer() {
  return (
    <footer style={{ background: "#090909", borderTop: "1px solid rgba(255,107,0,0.12)", position: "relative", overflow: "hidden" }}>
      {/* CTA Banner */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, rgba(255,107,0,0.12) 0%, rgba(255,140,66,0.06) 50%, rgba(255,107,0,0.04) 100%)",
        borderBottom: "1px solid rgba(255,107,0,0.12)",
        padding: "4rem 2rem",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap", position: "relative" }}>
          <div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>
              READY TO PROVE<br />
              <span style={{ color: "#FF6B00" }}>YOUR WORTH?</span>
            </h3>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", maxWidth: 380 }}>
              Join 24 million players competing for glory. Free to play. Forever competitive.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <motion.button
              whileHover={{ y: -3, scale: 1.04, boxShadow: "0 0 50px rgba(255,107,0,0.85), 0 8px 28px rgba(255,107,0,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 32px",
                background: "linear-gradient(135deg, #FF6B00, #FF8C42)",
                border: "none", borderRadius: 4, color: "#fff",
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
                boxShadow: "0 0 30px rgba(255,107,0,0.5)",
              }}
            >
              PLAY FREE NOW
              <ChevronRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ y: -3, scale: 1.03, borderColor: "rgba(255,107,0,0.45)", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{
                padding: "14px 28px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4, color: "rgba(255,255,255,0.7)",
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.95rem",
                letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
              }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: "3rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #FF6B00, #FF8C42)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(255,107,0,0.5)" }}>
                <Zap size={15} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.12em", color: "#fff", textTransform: "uppercase" }}>
                NEXUS<span style={{ color: "#FF6B00" }}>FPS</span>
              </span>
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, maxWidth: 240, marginBottom: "1.5rem" }}>
              The most competitive tactical FPS. Built for champions. Free for everyone.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Twitter, Youtube, Twitch, Instagram].map((Icon, i) => (
                <button key={i} style={{
                  width: 36, height: 36,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 6, color: "rgba(255,255,255,0.4)", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.color = "#FF6B00"; el.style.borderColor = "rgba(255,107,0,0.4)"; el.style.background = "rgba(255,107,0,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.color = "rgba(255,255,255,0.4)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em", color: "#FF8C42", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                {category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {links.map((link) => (
                  <a key={link} href="#" style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}>
            © 2026 NEXUSFPS. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FF8C42"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
