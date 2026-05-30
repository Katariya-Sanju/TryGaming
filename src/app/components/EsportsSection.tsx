import { useState } from "react";
import { motion } from "motion/react";
import { Radio, Calendar, ChevronRight, Award, Users } from "lucide-react";

const liveMatches = [
  {
    id: 1,
    team1: { name: "VOID", tag: "VD", score: 11, color: "#FF6B00" },
    team2: { name: "APEX", tag: "APX", score: 9, color: "#8B5CF6" },
    map: "Ascent",
    round: "Round 17/25",
    live: true,
    viewers: "142K",
  },
  {
    id: 2,
    team1: { name: "STORM", tag: "STM", score: 13, color: "#06B6D4" },
    team2: { name: "NEXUS", tag: "NXS", score: 13, color: "#FF6B00" },
    map: "Haven",
    round: "OT Round 1/5",
    live: true,
    viewers: "98K",
  },
  {
    id: 3,
    team1: { name: "DELTA", tag: "DLT", score: 7, color: "#10B981" },
    team2: { name: "CIPHER", tag: "CPH", score: 5, color: "#F59E0B" },
    map: "Bind",
    round: "Round 13/25",
    live: false,
    viewers: "61K",
  },
];

const rankings = [
  { rank: 1, team: "VOID ESPORTS", region: "EMEA", points: 2840, change: "+12", color: "#FF6B00" },
  { rank: 2, team: "STORM GAMING", region: "NA", points: 2715, change: "+5", color: "#06B6D4" },
  { rank: 3, team: "APEX UNITED", region: "EMEA", points: 2690, change: "-2", color: "#8B5CF6" },
  { rank: 4, team: "CIPHER CORP", region: "APAC", points: 2580, change: "+8", color: "#F59E0B" },
  { rank: 5, team: "NEXUS PRO", region: "LATAM", points: 2440, change: "+3", color: "#10B981" },
];

const bracketTeams = [
  { name: "VOID", opponent: "CIPHER", score: "2-0", winner: true },
  { name: "STORM", opponent: "DELTA", score: "2-1", winner: true },
  { name: "APEX", opponent: "NEXUS", score: "TBD", winner: false },
];

export function EsportsSection() {
  const [activeTab, setActiveTab] = useState<"matches" | "rankings" | "bracket">("matches");

  return (
    <section style={{
      background: "#0B0B0B",
      padding: "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?w=1920&h=900&fit=crop&auto=format)`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        opacity: 0.06,
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0B0B0B 0%, rgba(11,11,11,0.85) 50%, #0B0B0B 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(255,107,0,0.2), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.75rem" }}>
              <div style={{ width: 32, height: 2, background: "#FF6B00", boxShadow: "0 0 8px #FF6B00" }} />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", color: "#FF8C42", textTransform: "uppercase" }}>
                Esports Hub
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
            }}>
              CHAMPIONS TOUR<br />
              <span style={{ color: "#FF6B00" }}>2026 SEASON</span>
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={14} color="#FF8C42" />
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
              GRAND FINALS — JUN 14, 2026
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {(["matches", "rankings", "bracket"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 22px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #FF6B00" : "2px solid transparent",
                color: activeTab === tab ? "#FF6B00" : "rgba(255,255,255,0.4)",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                marginBottom: -1,
              }}
            >
              {tab === "matches" ? "Live Matches" : tab === "rankings" ? "Team Rankings" : "Bracket"}
            </button>
          ))}
        </div>

        {/* LIVE MATCHES */}
        {activeTab === "matches" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {liveMatches.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "rgba(18,18,18,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${match.live ? "#FF6B00" : "rgba(255,255,255,0.15)"}`,
                  borderRadius: "0 8px 8px 0",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(26,26,26,0.95)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(18,18,18,0.85)"; }}
              >
                {/* Live badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 80 }}>
                  {match.live ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 8px", background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.4)", borderRadius: 3 }}>
                      <Radio size={10} color="#FF6B00" />
                      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "#FF6B00", letterSpacing: "0.1em" }}>LIVE</span>
                    </div>
                  ) : (
                    <div style={{ padding: "3px 8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3 }}>
                      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>REPLAY</span>
                    </div>
                  )}
                </div>

                {/* Team 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 140 }}>
                  <div style={{
                    width: 36, height: 36,
                    background: `${match.team1.color}22`,
                    border: `1px solid ${match.team1.color}50`,
                    borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.75rem",
                    color: match.team1.color,
                    letterSpacing: "0.05em",
                  }}>
                    {match.team1.tag}
                  </div>
                  <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff", letterSpacing: "0.05em" }}>
                    {match.team1.name}
                  </span>
                </div>

                {/* Score */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff", minWidth: 32, textAlign: "right" }}>
                    {match.team1.score}
                  </span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.2)" }}>VS</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff", minWidth: 32 }}>
                    {match.team2.score}
                  </span>
                </div>

                {/* Team 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 140, justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff", letterSpacing: "0.05em" }}>
                    {match.team2.name}
                  </span>
                  <div style={{
                    width: 36, height: 36,
                    background: `${match.team2.color}22`,
                    border: `1px solid ${match.team2.color}50`,
                    borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.75rem",
                    color: match.team2.color,
                    letterSpacing: "0.05em",
                  }}>
                    {match.team2.tag}
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, minWidth: 120 }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.62rem", color: "#FF8C42", letterSpacing: "0.1em" }}>{match.map.toUpperCase()}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.3)" }}>{match.round}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Users size={10} color="rgba(255,255,255,0.3)" />
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)" }}>{match.viewers}</span>
                  </div>
                </div>

                <ChevronRight size={16} color="rgba(255,255,255,0.2)" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* RANKINGS */}
        {activeTab === "rankings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{
              background: "rgba(18,18,18,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              overflow: "hidden",
            }}>
              {/* Table header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px 100px 80px",
                padding: "12px 1.5rem",
                background: "rgba(255,107,0,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                {["RANK", "TEAM", "REGION", "POINTS", "+/-"].map((h) => (
                  <span key={h} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)" }}>{h}</span>
                ))}
              </div>
              {rankings.map((r, i) => (
                <motion.div
                  key={r.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr 80px 100px 80px",
                    padding: "14px 1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,107,0,0.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                >
                  <div style={{
                    width: 28, height: 28,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: r.rank <= 3 ? `${r.color}20` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${r.rank <= 3 ? r.color + "50" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 4,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    color: r.rank <= 3 ? r.color : "rgba(255,255,255,0.4)",
                  }}>
                    {r.rank === 1 && <Award size={12} />}
                    {r.rank > 1 && r.rank}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.color, boxShadow: `0 0 8px ${r.color}` }} />
                    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff", letterSpacing: "0.05em" }}>{r.team}</span>
                  </div>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>{r.region}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>{r.points.toLocaleString()}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", color: r.change.startsWith("+") ? "#10B981" : "#EF4444" }}>{r.change}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* BRACKET */}
        {activeTab === "bracket" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{
              background: "rgba(18,18,18,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "2rem",
            }}>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#FF8C42", marginBottom: "1.5rem" }}>
                SEMIFINAL STAGE — BEST OF 3
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {bracketTeams.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "1rem 1.25rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.25)", minWidth: 20 }}>G{i + 1}</span>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", color: b.winner ? "#fff" : "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{b.name}</span>
                      <div style={{
                        padding: "4px 16px",
                        background: b.score === "TBD" ? "rgba(255,255,255,0.04)" : b.winner ? "rgba(255,107,0,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${b.score === "TBD" ? "rgba(255,255,255,0.1)" : b.winner ? "rgba(255,107,0,0.4)" : "rgba(255,255,255,0.1)"}`,
                        borderRadius: 3,
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        color: b.score === "TBD" ? "rgba(255,255,255,0.25)" : b.winner ? "#FF6B00" : "rgba(255,255,255,0.5)",
                      }}>
                        {b.score}
                      </div>
                      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{b.opponent}</span>
                    </div>
                    {b.winner && <Award size={16} color="#FF6B00" />}
                  </motion.div>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: 6, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 10px #FF6B00", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem", color: "#FF8C42", letterSpacing: "0.1em" }}>GRAND FINAL — VOID vs STORM — JUN 14, 2026 — 18:00 CET</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <style>{`@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }`}</style>
    </section>
  );
}
