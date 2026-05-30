import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap } from "lucide-react";

const navItems = ["Home", "Agents", "Esports", "Store", "News"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isMobile = windowWidth < 900;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(11,11,11,0.96)" : "rgba(11,11,11,0.5)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,107,0,0.22)"
          : "1px solid rgba(255,255,255,0.04)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #FF6B00, #FF8C42)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 18px rgba(255,107,0,0.55)",
              flexShrink: 0,
            }}
          >
            <Zap size={16} color="#fff" fill="#fff" />
          </div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.45rem",
              letterSpacing: "0.1em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            NEXUS<span style={{ color: "#FF6B00" }}>FPS</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <NavItem
                key={item}
                label={item}
                active={activeItem === item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
          >
            <button
              style={{
                padding: "8px 18px",
                background: "transparent",
                border: "1px solid rgba(255,107,0,0.35)",
                borderRadius: 3,
                color: "#FF8C42",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "rgba(255,107,0,0.1)";
                el.style.borderColor = "#FF6B00";
                el.style.boxShadow = "0 0 12px rgba(255,107,0,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(255,107,0,0.35)";
                el.style.boxShadow = "none";
              }}
            >
              Log In
            </button>
            <button
              style={{
                padding: "8px 20px",
                background: "linear-gradient(135deg, #FF6B00, #FF8C42)",
                border: "none",
                borderRadius: 3,
                color: "#fff",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 0 18px rgba(255,107,0,0.4)",
                transition: "all 0.2s ease",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow = "0 0 28px rgba(255,107,0,0.7)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow = "0 0 18px rgba(255,107,0,0.4)";
                el.style.transform = "translateY(0)";
              }}
            >
              Play Free
            </button>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 4,
              color: "#fff",
              cursor: "pointer",
              padding: "6px 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              background: "rgba(10,10,10,0.98)",
              borderTop: "1px solid rgba(255,107,0,0.18)",
            }}
          >
            <div style={{ padding: "1rem 2rem 1.5rem", display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveItem(item);
                    setMobileOpen(false);
                  }}
                  style={{
                    background: activeItem === item ? "rgba(255,107,0,0.08)" : "transparent",
                    border: "none",
                    borderLeft: activeItem === item ? "2px solid #FF6B00" : "2px solid transparent",
                    color: activeItem === item ? "#FF6B00" : "rgba(255,255,255,0.65)",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "11px 14px",
                    borderRadius: "0 4px 4px 0",
                    transition: "all 0.15s",
                    lineHeight: 1,
                  }}
                >
                  {item}
                </button>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: "0.75rem" }}>
                <button
                  style={{
                    flex: 1,
                    padding: "11px",
                    background: "transparent",
                    border: "1px solid rgba(255,107,0,0.35)",
                    borderRadius: 3,
                    color: "#FF8C42",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  Log In
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: "11px",
                    background: "linear-gradient(135deg, #FF6B00, #FF8C42)",
                    border: "none",
                    borderRadius: 3,
                    color: "#fff",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: "0 0 16px rgba(255,107,0,0.4)",
                    lineHeight: 1,
                  }}
                >
                  Play Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "8px 16px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: active ? "#FF6B00" : hovered ? "#fff" : "rgba(255,255,255,0.55)",
        transition: "color 0.18s ease",
        lineHeight: 1,
      }}
    >
      {label}
      {/* Active underline */}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: active ? "55%" : hovered ? "40%" : "0%",
          height: 2,
          background: active
            ? "#FF6B00"
            : "rgba(255,255,255,0.3)",
          borderRadius: 2,
          boxShadow: active ? "0 0 8px #FF6B00" : "none",
          transition: "width 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
          display: "block",
        }}
      />
    </button>
  );
}
