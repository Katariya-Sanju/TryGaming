import { useState } from "react";
import { motion } from "motion/react";
import { Target, Users, Trophy, Globe, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <Target size={28} />,
    title: "Tactical Gameplay",
    desc: "Precision-based gunplay with zero randomness. Every shot counts. Master recoil, movement, and economy.",
    stat: "128-tick",
    statLabel: "Server Rate",
    color: "#FF6B00",
    accent: "rgba(255,107,0,0.12)",
  },
  {
    icon: <Users size={28} />,
    title: "Unique Agents",
    desc: "Choose from 22 distinct agents with signature abilities. Build synergy, counter strategies, and dominate.",
    stat: "22",
    statLabel: "Agents",
    color: "#FF8C42",
    accent: "rgba(255,140,66,0.12)",
  },
  {
    icon: <Trophy size={28} />,
    title: "Competitive Ranked",
    desc: "Eight tiers from Iron to Radiant. MMR-driven matchmaking ensures fair, intense competition every match.",
    stat: "8",
    statLabel: "Rank Tiers",
    color: "#FF6B00",
    accent: "rgba(255,107,0,0.12)",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Esports",
    desc: "From regional circuits to the Champions Tour. Your path to professional play starts here.",
    stat: "$2.4M",
    statLabel: "Prize Pool",
    color: "#FF8C42",
    accent: "rgba(255,140,66,0.12)",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Skins Marketplace",
    desc: "Premium weapon collections reimagined. Each skin a handcrafted work of art with unique VFX and animations.",
    stat: "200+",
    statLabel: "Weapon Skins",
    color: "#FF6B00",
    accent: "rgba(255,107,0,0.12)",
  },
];

function FeatureCard({ feat, index }: { feat: typeof features[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "rgba(26,26,26,0.95)" : "rgba(20,20,20,0.8)",
        backdropFilter: "blur(20px)",
        border: hovered ? `1px solid rgba(255,107,0,0.5)` : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 8,
        padding: "2rem 1.75rem",
        cursor: "default",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-8px) scale(1.01)" : "none",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,107,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`
          : "0 8px 30px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Top-left corner accent */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderTop: `2px solid ${hovered ? feat.color : "rgba(255,107,0,0.3)"}`,
        borderLeft: `2px solid ${hovered ? feat.color : "rgba(255,107,0,0.3)"}`,
        borderTopLeftRadius: 8,
        transition: "all 0.35s ease",
      }} />
      {/* Bottom-right corner accent */}
      <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 40,
        height: 40,
        borderBottom: `2px solid ${hovered ? feat.color : "rgba(255,107,0,0.3)"}`,
        borderRight: `2px solid ${hovered ? feat.color : "rgba(255,107,0,0.3)"}`,
        borderBottomRightRadius: 8,
        transition: "all 0.35s ease",
      }} />

      {/* Background glow on hover */}
      {hovered && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 30% 0%, ${feat.accent} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Icon */}
      <div style={{
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? `rgba(255,107,0,0.15)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(255,107,0,0.5)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 6,
        color: hovered ? feat.color : "rgba(255,255,255,0.5)",
        marginBottom: "1.25rem",
        transition: "all 0.35s ease",
        boxShadow: hovered ? `0 0 20px rgba(255,107,0,0.25)` : "none",
      }}>
        {feat.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 800,
        fontSize: "1.35rem",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
        marginBottom: "0.6rem",
        transition: "color 0.2s",
      }}>
        {feat.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 300,
        fontSize: "0.88rem",
        lineHeight: 1.65,
        color: "rgba(255,255,255,0.45)",
        marginBottom: "1.5rem",
      }}>
        {feat.desc}
      </p>

      {/* Stat */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "1.6rem",
          color: feat.color,
          letterSpacing: "-0.02em",
          textShadow: hovered ? `0 0 20px ${feat.color}` : "none",
          transition: "text-shadow 0.3s",
        }}>
          {feat.stat}
        </span>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
        }}>
          {feat.statLabel}
        </span>
      </div>

      {/* Index number watermark */}
      <div style={{
        position: "absolute",
        bottom: "1.2rem",
        right: "1.5rem",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: "3.5rem",
        color: "rgba(255,255,255,0.03)",
        lineHeight: 1,
        userSelect: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section style={{ background: "#0B0B0B", padding: "7rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,0,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,107,0,0.3), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <div style={{ width: 32, height: 2, background: "#FF6B00", boxShadow: "0 0 8px #FF6B00" }} />
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", color: "#FF8C42", textTransform: "uppercase" }}>
              Core Systems
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "#fff",
            lineHeight: 1.05,
          }}>
            BUILT FOR THOSE WHO<br />
            <span style={{ color: "#FF6B00" }}>DEMAND EXCELLENCE</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}>
          {features.map((feat, i) => (
            <FeatureCard key={feat.title} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
