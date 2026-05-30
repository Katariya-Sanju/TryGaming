import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Shield, Eye, Wind, Flame } from "lucide-react";

const agents = [
  {
    id: "phantom",
    name: "PHANTOM",
    role: "Duelist",
    color: "#FF6B00",
    bgAccent: "rgba(255,107,0,0.15)",
    stats: { attack: 95, defense: 60, utility: 75, mobility: 80 },
    abilities: ["Blaze", "Curveball", "Hot Hands", "Run It Back"],
    desc: "A fiery duelist who fights through flames. Master area denial and aggressive plays.",
    icon: <Flame size={22} />,
    kills: "24.7",
    winRate: "58%",
  },
  {
    id: "spectre",
    name: "SPECTRE",
    role: "Sentinel",
    color: "#8B5CF6",
    bgAccent: "rgba(139,92,246,0.15)",
    stats: { attack: 60, defense: 95, utility: 88, mobility: 55 },
    abilities: ["Trapwire", "Cyber Cage", "Spycam", "Neural Theft"],
    desc: "The ultimate sentinel. Lock down sites, gather information, deny movement.",
    icon: <Eye size={22} />,
    kills: "16.2",
    winRate: "62%",
  },
  {
    id: "vortex",
    name: "VORTEX",
    role: "Controller",
    color: "#06B6D4",
    bgAccent: "rgba(6,182,212,0.15)",
    stats: { attack: 65, defense: 70, utility: 98, mobility: 65 },
    abilities: ["Smoke Screen", "Tailwind", "Updraft", "Blade Storm"],
    desc: "Command the battlefield with smokes, flashes, and unmatched map control.",
    icon: <Wind size={22} />,
    kills: "18.9",
    winRate: "55%",
  },
  {
    id: "aegis",
    name: "AEGIS",
    role: "Initiator",
    color: "#10B981",
    bgAccent: "rgba(16,185,129,0.15)",
    stats: { attack: 75, defense: 80, utility: 90, mobility: 70 },
    abilities: ["Seize", "Prowler", "Fault Line", "Annihilation"],
    desc: "Break through defenses, gather intel, and set up devastating team pushes.",
    icon: <Shield size={22} />,
    kills: "20.1",
    winRate: "60%",
  },
  {
    id: "nova",
    name: "NOVA",
    role: "Duelist",
    color: "#FF6B00",
    bgAccent: "rgba(255,107,0,0.15)",
    stats: { attack: 98, defense: 50, utility: 70, mobility: 92 },
    abilities: ["Afterburn", "Blaze Trail", "Surge", "Nexus Strike"],
    desc: "Blinding speed and electric firepower. Pure aggression, zero retreat.",
    icon: <Zap size={22} />,
    kills: "28.3",
    winRate: "53%",
  },
];

function StatBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden", flex: 1 }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          height: "100%",
          background: `linear-gradient(to right, ${color}, ${color}99)`,
          borderRadius: 2,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />
    </div>
  );
}

function AgentCard({ agent, isActive, onClick }: { agent: typeof agents[0]; isActive: boolean; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      style={{
        position: "relative",
        background: isActive ? "rgba(26,26,26,0.95)" : "rgba(18,18,18,0.7)",
        backdropFilter: "blur(16px)",
        border: isActive ? `1px solid ${agent.color}60` : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 8,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border 0.3s ease, background 0.3s ease",
        boxShadow: isActive ? `0 0 40px ${agent.color}20` : "none",
      }}
    >
      {/* Top colored band */}
      <div style={{ height: 3, background: `linear-gradient(to right, ${agent.color}, transparent)` }} />

      {/* Glow on active */}
      {isActive && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% -10%, ${agent.bgAccent} 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Agent silhouette area */}
      <div style={{
        height: 180,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to bottom, ${agent.bgAccent}, transparent)`,
        overflow: "hidden",
      }}>
        {/* Abstract tactical figure */}
        <svg viewBox="0 0 120 160" width="90" height="130" style={{ opacity: isActive ? 1 : 0.6, transition: "opacity 0.3s" }}>
          <defs>
            <linearGradient id={`agGrad-${agent.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={agent.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={agent.color} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Body */}
          <ellipse cx="60" cy="85" rx="22" ry="30" fill={`url(#agGrad-${agent.id})`} />
          {/* Head */}
          <circle cx="60" cy="40" r="18" fill={`url(#agGrad-${agent.id})`} />
          {/* Visor line */}
          <path d="M44 40 Q60 37 76 40" stroke={agent.color} strokeWidth="2" fill="none" opacity="0.9" />
          {/* Arms */}
          <path d="M38 70 L20 95 L28 100 L40 85Z" fill={agent.color} opacity="0.6" />
          <path d="M82 70 L100 95 L92 100 L80 85Z" fill={agent.color} opacity="0.6" />
          {/* Legs */}
          <rect x="46" y="112" width="12" height="42" rx="4" fill={agent.color} opacity="0.5" />
          <rect x="62" y="112" width="12" height="42" rx="4" fill={agent.color} opacity="0.5" />
          {/* Glow center */}
          <circle cx="60" cy="75" r="6" fill={agent.color} opacity="0.9" filter="url(#glow-agent)" />
          <filter id="glow-agent">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </svg>

        {/* Role badge */}
        <div style={{
          position: "absolute",
          top: 12,
          right: 12,
          padding: "3px 8px",
          background: `${agent.color}22`,
          border: `1px solid ${agent.color}44`,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          gap: 5,
          color: agent.color,
        }}>
          {agent.icon}
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}>{agent.role}</span>
        </div>

        {/* Number watermark */}
        <div style={{
          position: "absolute",
          bottom: 8,
          left: 14,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "4rem",
          color: `${agent.color}15`,
          lineHeight: 1,
          userSelect: "none",
        }}>
          {String(agents.findIndex(a => a.id === agent.id) + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "1.25rem 1.25rem 1.4rem" }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "1.5rem",
          letterSpacing: "0.05em",
          color: "#fff",
          marginBottom: "0.25rem",
        }}>
          {agent.name}
        </h3>
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.55,
          marginBottom: "1.1rem",
        }}>
          {agent.desc}
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
          {[
            ["ATK", agent.stats.attack],
            ["DEF", agent.stats.defense],
            ["UTIL", agent.stats.utility],
            ["MOB", agent.stats.mobility],
          ].map(([label, value]) => (
            <div key={label as string} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", width: 28 }}>{label}</span>
              <StatBar value={value as number} color={agent.color} />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", width: 22, textAlign: "right" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "0.9rem" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: agent.color }}>{agent.kills}</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>AVG KILLS</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff" }}>{agent.winRate}</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>WIN RATE</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AgentsSection() {
  const [activeAgent, setActiveAgent] = useState(agents[0].id);
  const active = agents.find(a => a.id === activeAgent)!;

  return (
    <section style={{
      background: "#0E0E0E",
      padding: "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background accents */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: `radial-gradient(ellipse at 100% 50%, rgba(255,107,0,0.04) 0%, transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(255,107,0,0.2), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.75rem" }}>
              <div style={{ width: 32, height: 2, background: "#FF6B00", boxShadow: "0 0 8px #FF6B00" }} />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", color: "#FF8C42", textTransform: "uppercase" }}>
                Agent Roster
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}>
              CHOOSE YOUR<br />
              <span style={{ color: "#FF6B00" }}>WEAPON OF WAR</span>
            </h2>
          </div>
          <div style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.35)",
            maxWidth: 300,
            lineHeight: 1.6,
          }}>
            Each agent brings a unique set of abilities to the battlefield. Master them all or dominate with one.
          </div>
        </motion.div>

        {/* Agents grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.1rem",
        }}>
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              isActive={activeAgent === agent.id}
              onClick={() => setActiveAgent(agent.id)}
            />
          ))}
        </div>

        {/* Active agent detail strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: "2rem",
              background: "rgba(18,18,18,0.8)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${active.color}30`,
              borderRadius: 8,
              padding: "1.75rem 2rem",
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ color: active.color, background: `${active.color}18`, padding: 10, borderRadius: 6, border: `1px solid ${active.color}40` }}>
                {active.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.4rem", color: "#fff" }}>{active.name}</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem", color: active.color, letterSpacing: "0.12em" }}>{active.role.toUpperCase()}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {active.abilities.map((ab) => (
                <div key={ab} style={{
                  padding: "5px 14px",
                  background: `${active.color}10`,
                  border: `1px solid ${active.color}35`,
                  borderRadius: 3,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.7)",
                }}>
                  {ab}
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ y: -3, scale: 1.05, boxShadow: `0 0 40px ${active.color}90, 0 8px 24px ${active.color}50` }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{
                marginLeft: "auto",
                padding: "11px 24px",
                background: `linear-gradient(135deg, ${active.color}, ${active.color}bb)`,
                border: "none",
                borderRadius: 4,
                color: "#fff",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: `0 0 20px ${active.color}40`,
                whiteSpace: "nowrap",
              }}
            >
              Play as {active.name}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
