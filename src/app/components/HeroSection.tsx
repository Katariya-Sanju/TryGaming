import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Play, ChevronRight, Shield, Target, Crosshair } from "lucide-react";
import { HeroCharacter } from "./HeroCharacter";

/* ── Smooth mouse tracking ── */
function useParallaxMouse() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  const handleMove = useCallback((e: MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    rawX.set(nx);
    rawY.set(ny);
  }, [rawX, rawY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return { x, y };
}

/* ── Interactive particle canvas ── */
function ParticleCanvas({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mxRef = useRef(0);
  const myRef = useRef(0);

  useEffect(() => {
    const unsub1 = mouseX.on("change", (v: number) => { mxRef.current = v; });
    const unsub2 = mouseY.on("change", (v: number) => { myRef.current = v; });
    return () => { unsub1(); unsub2(); };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const colors = ["#FF6B00", "#FF8C42", "#FFB380", "#ffffff"];
    const particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      ox: 0, oy: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.08,
      size: Math.random() * 2.4 + 0.4,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      parallaxFactor: Math.random() * 0.012 + 0.002,
    }));

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mxRef.current;
      const my = myRef.current;

      for (const p of particles) {
        p.ox = mx * p.parallaxFactor * canvas.width * 0.5;
        p.oy = my * p.parallaxFactor * canvas.height * 0.5;
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        const rx = p.x + p.ox;
        const ry = p.y + p.oy;
        ctx.beginPath();
        ctx.arc(rx, ry, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
    />
  );
}

/* ── Cursor-following radial glow ── */
function CursorGlow({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const left = useTransform(mouseX, [-1, 1], ["30%", "70%"]);
  const top = useTransform(mouseY, [-1, 1], ["25%", "75%"]);
  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        top,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,107,0,0.11) 0%, transparent 65%)",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(2px)",
      }}
    />
  );
}

const statsData = [
  { label: "Active Players", value: "24.7M", icon: <Target size={16} /> },
  { label: "Daily Matches", value: "1.2M+", icon: <Crosshair size={16} /> },
  { label: "Ranked Teams", value: "88K", icon: <Shield size={16} /> },
];

export function HeroSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { x: mx, y: my } = useParallaxMouse();

  /* Parallax transforms at varying depths */
  const bgX = useTransform(mx, [-1, 1], ["-2.5%", "2.5%"]);
  const bgY = useTransform(my, [-1, 1], ["-2.5%", "2.5%"]);

  const gridX = useTransform(mx, [-1, 1], ["-8px", "8px"]);
  const gridY = useTransform(my, [-1, 1], ["-8px", "8px"]);

  const streakX = useTransform(mx, [-1, 1], ["-14px", "14px"]);
  const streakY = useTransform(my, [-1, 1], ["-10px", "10px"]);

  /* Copy panel — very subtle tilt */
  const copyRotateX = useTransform(my, [-1, 1], ["2deg", "-2deg"]);
  const copyRotateY = useTransform(mx, [-1, 1], ["-2deg", "2deg"]);
  const copyX = useTransform(mx, [-1, 1], ["-6px", "6px"]);
  const copyY = useTransform(my, [-1, 1], ["-4px", "4px"]);

  /* Character panel — deeper tilt */
  const charRotateX = useTransform(my, [-1, 1], ["5deg", "-5deg"]);
  const charRotateY = useTransform(mx, [-1, 1], ["-6deg", "6deg"]);
  const charX = useTransform(mx, [-1, 1], ["-18px", "18px"]);
  const charY = useTransform(my, [-1, 1], ["-12px", "12px"]);

  /* HUD widgets parallax at medium depth */
  const hudX = useTransform(mx, [-1, 1], ["-10px", "10px"]);
  const hudY = useTransform(my, [-1, 1], ["-8px", "8px"]);

  /* Ambient glow intensity */
  const glowOpacity = useTransform(mx, [-1, 1], [0.06, 0.18]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0B0B0B",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* BG cityscape — deepest parallax layer */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-5%",
          backgroundImage: `url(https://images.unsplash.com/photo-1597006372162-848bbbe84b99?w=1920&h=1080&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          x: bgX,
          y: bgY,
        }}
      />

      {/* Gradient overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,11,11,0.98) 30%, rgba(11,11,11,0.55) 65%, rgba(11,11,11,0.82) 100%)", zIndex: 0 }} />

      {/* Cursor-tracking ambient glow */}
      <CursorGlow mouseX={mx} mouseY={my} />

      {/* Dynamic orange rim glow */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 68% 50%, rgba(255,107,0,0.11) 0%, transparent 55%)",
          opacity: glowOpacity,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #0B0B0B, transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* Grid — mid parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,107,0,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
          x: gridX,
          y: gridY,
        }}
      />

      {/* Particles */}
      <ParticleCanvas mouseX={mx} mouseY={my} />

      {/* Diagonal streaks — near parallax */}
      <motion.svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          x: streakX,
          y: streakY,
        }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="38%" x2="42%" y2="52%" stroke="rgba(255,107,0,0.14)" strokeWidth="1" />
        <line x1="0" y1="62%" x2="38%" y2="50%" stroke="rgba(255,107,0,0.09)" strokeWidth="1" />
        <line x1="100%" y1="22%" x2="56%" y2="46%" stroke="rgba(255,107,0,0.11)" strokeWidth="1" />
        <polyline points="0,0 64,0 64,3" stroke="#FF6B00" strokeWidth="1.5" fill="none" opacity="0.55" />
        <polyline points="0,0 0,44 3,44" stroke="#FF6B00" strokeWidth="1.5" fill="none" opacity="0.55" />
      </motion.svg>

      {/* Floating decorative corner gems */}
      <motion.div
        style={{
          position: "absolute",
          top: "12%",
          right: "8%",
          width: 6,
          height: 6,
          background: "#FF6B00",
          borderRadius: 1,
          boxShadow: "0 0 18px 4px rgba(255,107,0,0.5)",
          zIndex: 1,
          x: useTransform(mx, [-1, 1], ["-20px", "20px"]),
          y: useTransform(my, [-1, 1], ["-15px", "15px"]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "35%",
          right: "22%",
          width: 4,
          height: 4,
          background: "#FF8C42",
          borderRadius: "50%",
          boxShadow: "0 0 12px 3px rgba(255,140,66,0.45)",
          zIndex: 1,
          x: useTransform(mx, [-1, 1], ["-30px", "30px"]),
          y: useTransform(my, [-1, 1], ["-20px", "20px"]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "30%",
          right: "14%",
          width: 3,
          height: 3,
          background: "#FFB380",
          borderRadius: "50%",
          boxShadow: "0 0 10px 2px rgba(255,179,128,0.4)",
          zIndex: 1,
          x: useTransform(mx, [-1, 1], ["15px", "-15px"]),
          y: useTransform(my, [-1, 1], ["-25px", "25px"]),
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          paddingTop: 68,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
          minHeight: "100vh",
        }}
        className="hero-layout"
      >
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            paddingBottom: "4rem",
            paddingTop: "2rem",
            x: copyX,
            y: copyY,
            rotateX: copyRotateX,
            rotateY: copyRotateY,
            transformStyle: "preserve-3d",
            perspective: 800,
          }}
        >
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#FF6B00",
                boxShadow: "0 0 12px #FF6B00",
                display: "inline-block",
                animation: "heroPulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                color: "#FF8C42",
                textTransform: "uppercase",
              }}
            >
              Season 12 — Now Live
            </span>
            <span style={{ width: 36, height: 1, background: "linear-gradient(to right, #FF6B00, transparent)", display: "inline-block" }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 5.2vw, 5rem)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#fff",
              marginBottom: "0.45em",
            }}
          >
            ENTER THE NEXT
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.22)",
                display: "block",
              }}
            >
              GENERATION
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FF8C42 50%, #FFB380 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              OF TACTICAL FPS
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "0.98rem",
              lineHeight: 1.72,
              color: "rgba(255,255,255,0.48)",
              maxWidth: 420,
              marginBottom: "2.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Dominate the battlefield with precision gunplay, tactical abilities,
            and relentless competitive action. 5v5. Zero compromises.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: 12, marginBottom: "3.5rem", flexWrap: "wrap" }}
          >
            <motion.button
              onMouseEnter={() => setHovered("play")}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 30px",
                background: "linear-gradient(135deg, #FF6B00, #FF8C42)",
                border: "none",
                borderRadius: 3,
                color: "#fff",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow:
                  hovered === "play"
                    ? "0 0 50px rgba(255,107,0,0.85), 0 8px 32px rgba(255,107,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)"
                    : "0 0 24px rgba(255,107,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                transition: "box-shadow 0.25s ease",
                lineHeight: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {hovered === "play" && (
                <motion.div
                  initial={{ x: "-100%", opacity: 0.4 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    pointerEvents: "none",
                  }}
                />
              )}
              PLAY NOW <ChevronRight size={17} />
            </motion.button>

            <motion.button
              onMouseEnter={() => setHovered("trailer")}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 26px",
                background: hovered === "trailer" ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered === "trailer" ? "rgba(255,107,0,0.5)" : "rgba(255,255,255,0.18)"}`,
                borderRadius: 3,
                color: "#fff",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                transition: "background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                boxShadow: hovered === "trailer" ? "0 0 22px rgba(255,107,0,0.2), inset 0 1px 0 rgba(255,107,0,0.1)" : "none",
                lineHeight: 1,
              }}
            >
              <motion.span
                animate={hovered === "trailer" ? { boxShadow: "0 0 18px rgba(255,107,0,0.7)" } : { boxShadow: "0 0 10px rgba(255,107,0,0.4)" }}
                transition={{ duration: 0.22 }}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  border: "1.5px solid #FF6B00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Play size={9} fill="#FF6B00" color="#FF6B00" style={{ marginLeft: 1 }} />
              </motion.span>
              WATCH TRAILER
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, opacity: 1 }}
                style={{ display: "flex", flexDirection: "column", gap: 4, opacity: 0.9 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7, color: "#FF8C42" }}>
                  {stat.icon}
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.65rem",
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          style={{
            position: "relative",
            height: "calc(100vh - 68px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            x: charX,
            y: charY,
            rotateX: charRotateX,
            rotateY: charRotateY,
            transformStyle: "preserve-3d",
            perspective: 900,
          }}
          className="hero-char"
        >
          {/* Ground contact glow */}
          <div
            style={{
              position: "absolute",
              bottom: "3%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "65%",
              height: 70,
              background: "radial-gradient(ellipse, rgba(255,107,0,0.32) 0%, transparent 70%)",
              filter: "blur(18px)",
              zIndex: 1,
            }}
          />

          {/* Character */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "100%",
              height: "92%",
              zIndex: 2,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div style={{
              position: "absolute",
              inset: "10% 5% 0",
              background: "radial-gradient(ellipse at 45% 55%, rgba(255,107,0,0.15) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,107,0,0.015) 3px, rgba(255,107,0,0.015) 4px)",
              pointerEvents: "none",
              zIndex: 3,
            }} />
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "18%",
              background: "linear-gradient(to top, #0B0B0B 30%, transparent)",
              zIndex: 4,
              pointerEvents: "none",
            }} />
            <div style={{ width: "min(440px, 100%)", height: "100%", position: "relative", zIndex: 2 }}>
              <HeroCharacter />
            </div>
          </motion.div>

          {/* HUD widgets — parallax at medium depth */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "14%",
              right: "-4%",
              x: hudX,
              y: hudY,
              zIndex: 5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(255,107,0,0.22)" }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              style={{
                background: "rgba(14,14,14,0.9)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,107,0,0.28)",
                borderRadius: 5,
                padding: "11px 14px",
                minWidth: 138,
                boxShadow: "0 0 24px rgba(255,107,0,0.12)",
              }}
            >
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "#FF8C42", letterSpacing: "0.15em", marginBottom: 7 }}>COMBAT STATS</div>
              {[["K/D RATIO", "3.24"], ["ACCURACY", "67.2%"], ["WINS", "1,847"]].map(([k, v]) => (
                <div key={k as string} style={{ display: "flex", justifyContent: "space-between", gap: 18, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.56rem", color: "rgba(255,255,255,0.35)" }}>{k}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.56rem", color: "#fff" }}>{v}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Agent class HUD */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute",
              bottom: "28%",
              left: "-2%",
              x: useTransform(mx, [-1, 1], ["8px", "-8px"]),
              y: useTransform(my, [-1, 1], ["-6px", "6px"]),
              zIndex: 5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,107,0,0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              style={{
                background: "rgba(14,14,14,0.9)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,107,0,0.22)",
                borderRadius: 5,
                padding: "9px 13px",
                boxShadow: "0 0 18px rgba(255,107,0,0.1)",
              }}
            >
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.56rem", color: "#FF8C42", letterSpacing: "0.1em", marginBottom: 5 }}>AGENT CLASS</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>PHANTOM</div>
              <div style={{ display: "flex", gap: 3, marginTop: 5 }}>
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    style={{
                      width: 18,
                      height: 4,
                      borderRadius: 2,
                      background: s <= 3 ? "#FF6B00" : "rgba(255,255,255,0.12)",
                      boxShadow: s <= 3 ? "0 0 6px rgba(255,107,0,0.55)" : "none",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Rank badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              position: "absolute",
              top: "28%",
              left: "2%",
              x: useTransform(mx, [-1, 1], ["6px", "-6px"]),
              y: useTransform(my, [-1, 1], ["-4px", "4px"]),
              zIndex: 5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.12, boxShadow: "0 0 36px rgba(255,107,0,0.5)" }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              style={{
                background: "linear-gradient(135deg, rgba(255,107,0,0.18), rgba(18,18,18,0.92))",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,107,0,0.38)",
                borderRadius: "50%",
                width: 58,
                height: 58,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 22px rgba(255,107,0,0.28)",
              }}
            >
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.58rem", color: "#FF6B00", letterSpacing: "0.05em" }}>RANK</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", color: "#fff", lineHeight: 1 }}>IMM</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.38,
        }}
      >
        <div style={{ width: 1, height: 38, background: "linear-gradient(to bottom, transparent, #FF6B00)" }} />
        <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.22em", color: "#FF8C42", textTransform: "uppercase" }}>SCROLL</span>
      </motion.div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.5); }
        }
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr !important; }
          .hero-char { display: none !important; }
        }
      `}</style>
    </section>
  );
}
