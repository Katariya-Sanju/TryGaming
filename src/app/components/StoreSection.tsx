import { useState } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Star, Zap } from "lucide-react";

const skins = [
  {
    id: "inferno",
    name: "Inferno Series",
    weapon: "Vandal",
    price: "1,775",
    rarity: "Premium",
    rarityColor: "#FF6B00",
    collection: "Inferno Collection",
    glowColor: "rgba(255,107,0,0.55)",
    owned: false,
    featured: true,
    img: "https://images.unsplash.com/photo-1610165539750-051008c3e799?w=700&h=340&fit=crop&auto=format",
    imgAlt: "Assault rifle – Vandal skin",
  },
  {
    id: "phantom_edge",
    name: "Phantom Edge",
    weapon: "Phantom",
    price: "1,775",
    rarity: "Premium",
    rarityColor: "#8B5CF6",
    collection: "Spectre Collection",
    glowColor: "rgba(139,92,246,0.5)",
    owned: false,
    featured: false,
    img: "https://images.unsplash.com/photo-1602901248767-2ba389c86d0d?w=600&h=300&fit=crop&auto=format",
    imgAlt: "Black assault rifle – Phantom skin",
  },
  {
    id: "frost_blade",
    name: "Frost Protocol",
    weapon: "Operator",
    price: "2,175",
    rarity: "Exclusive",
    rarityColor: "#06B6D4",
    collection: "Cryo Collection",
    glowColor: "rgba(6,182,212,0.5)",
    owned: false,
    featured: false,
    img: "https://images.unsplash.com/photo-1713643560082-1d0a7ccc41de?w=600&h=300&fit=crop&auto=format",
    imgAlt: "Sniper rifle on dark background – Operator skin",
  },
  {
    id: "gold_rush",
    name: "Sovereign Gold",
    weapon: "Classic",
    price: "875",
    rarity: "Deluxe",
    rarityColor: "#F59E0B",
    collection: "Sovereign Collection",
    glowColor: "rgba(245,158,11,0.5)",
    owned: true,
    featured: false,
    img: "https://images.unsplash.com/photo-1619760563055-2699bea3755d?w=600&h=300&fit=crop&auto=format",
    imgAlt: "Black semi-automatic pistol – Classic skin",
  },
  {
    id: "matrix",
    name: "Matrix Protocol",
    weapon: "Marshal",
    price: "1,275",
    rarity: "Select",
    rarityColor: "#10B981",
    collection: "Cyber Collection",
    glowColor: "rgba(16,185,129,0.5)",
    owned: false,
    featured: false,
    img: "https://images.unsplash.com/photo-1669489890724-2088c1162f5e?w=600&h=300&fit=crop&auto=format",
    imgAlt: "Black and silver rifle – Marshal skin",
  },
  {
    id: "chrome_series",
    name: "Chrome Reaper",
    weapon: "Sheriff",
    price: "1,275",
    rarity: "Select",
    rarityColor: "#FF6B00",
    collection: "Chrome Collection",
    glowColor: "rgba(255,107,0,0.45)",
    owned: false,
    featured: false,
    img: "https://images.unsplash.com/photo-1647794213322-1edfca317193?w=600&h=300&fit=crop&auto=format",
    imgAlt: "Close-up of a handgun – Sheriff skin",
  },
];

export function StoreSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);

  const featured = skins.find((s) => s.featured)!;

  const toggleCart = (id: string) =>
    setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <section
      style={{
        background: "#0E0E0E",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,107,0,0.2), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,107,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.015) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginBottom: "3.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.75rem" }}>
              <div style={{ width: 32, height: 2, background: "#FF6B00", boxShadow: "0 0 8px #FF6B00" }} />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", color: "#FF8C42", textTransform: "uppercase" }}>
                Armory Store
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                textTransform: "uppercase",
                color: "#fff",
                lineHeight: 1.05,
              }}
            >
              PREMIUM WEAPON
              <br />
              <span style={{ color: "#FF6B00" }}>COLLECTIONS</span>
            </h2>
          </div>
          {cart.length > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(255,107,0,0.12)",
                border: "1px solid rgba(255,107,0,0.3)",
                borderRadius: 4,
              }}
            >
              <ShoppingCart size={14} color="#FF8C42" />
              <span
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#FF8C42",
                  letterSpacing: "0.08em",
                }}
              >
                {cart.length} item{cart.length > 1 ? "s" : ""}
              </span>
            </div>
          )}
        </motion.div>

        {/* ── Featured skin ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            background: "rgba(18,18,18,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,107,0,0.3)",
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="store-featured"
        >
          {/* Corner accents */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 70, height: 70, borderTop: "2px solid #FF6B00", borderLeft: "2px solid #FF6B00", borderTopLeftRadius: 12, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 70, height: 70, borderBottom: "2px solid #FF6B00", borderRight: "2px solid #FF6B00", borderBottomRightRadius: 12, pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(255,107,0,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />

          {/* Info */}
          <div style={{ padding: "2.5rem 0 2.5rem 2.5rem", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.9rem" }}>
              <Zap size={13} color="#FF6B00" />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#FF8C42", textTransform: "uppercase" }}>
                Featured Drop
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "2.4rem",
                color: "#fff",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              {featured.name}
            </h3>
            <div
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "1.4rem",
                letterSpacing: "0.06em",
              }}
            >
              {featured.weapon} · {featured.collection}
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: "1.4rem" }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={13} fill="#FF6B00" color="#FF6B00" />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#FF6B00",
                    lineHeight: 1,
                  }}
                >
                  {featured.price} VP
                </div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em" }}>VALORANT POINTS</div>
              </div>
              <motion.button
                onClick={() => toggleCart(featured.id)}
                whileHover={{ y: -3, scale: 1.05, boxShadow: cart.includes(featured.id) ? "0 0 18px rgba(255,107,0,0.3)" : "0 0 48px rgba(255,107,0,0.85), 0 8px 24px rgba(255,107,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: cart.includes(featured.id)
                    ? "rgba(255,107,0,0.18)"
                    : "linear-gradient(135deg, #FF6B00, #FF8C42)",
                  border: cart.includes(featured.id) ? "1px solid #FF6B00" : "none",
                  borderRadius: 4,
                  color: "#fff",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: cart.includes(featured.id) ? "none" : "0 0 22px rgba(255,107,0,0.48)",
                  transition: "background 0.2s, border 0.2s",
                  lineHeight: 1,
                }}
              >
                <ShoppingCart size={15} />
                {cart.includes(featured.id) ? "Added" : "Add to Cart"}
              </motion.button>
            </div>
          </div>

          {/* Gun photo */}
          <div
            style={{
              position: "relative",
              height: 280,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Colour tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(18,18,18,0.5) 0%, transparent 30%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at center, rgba(255,107,0,0.12) 0%, transparent 65%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <img
              src={featured.img}
              alt={featured.imgAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "contrast(1.1) saturate(0.65) brightness(0.75)",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* ── Skin grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.1rem",
          }}
        >
          {skins
            .filter((s) => !s.featured)
            .map((skin, i) => (
              <SkinCard
                key={skin.id}
                skin={skin}
                index={i}
                hovered={hoveredId === skin.id}
                inCart={cart.includes(skin.id)}
                onHover={setHoveredId}
                onCartToggle={toggleCart}
              />
            ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .store-featured { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkinCard({
  skin,
  index,
  hovered,
  inCart,
  onHover,
  onCartToggle,
}: {
  skin: (typeof skins)[0];
  index: number;
  hovered: boolean;
  inCart: boolean;
  onHover: (id: string | null) => void;
  onCartToggle: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => onHover(skin.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: "relative",
        background: hovered ? "rgba(24,24,24,0.96)" : "rgba(18,18,18,0.88)",
        backdropFilter: "blur(16px)",
        border: hovered
          ? `1px solid ${skin.rarityColor}55`
          : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 8,
        overflow: "hidden",
        transition: "all 0.28s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.55), 0 0 28px ${skin.glowColor}22`
          : "none",
        cursor: "default",
      }}
    >
      {/* Top rarity stripe */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(to right, ${skin.rarityColor}, transparent)`,
        }}
      />

      {/* Rarity badge */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          padding: "3px 10px",
          background: `${skin.rarityColor}18`,
          border: `1px solid ${skin.rarityColor}40`,
          borderRadius: 3,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "0.57rem",
          letterSpacing: "0.1em",
          color: skin.rarityColor,
          zIndex: 2,
        }}
      >
        {skin.rarity}
      </div>

      {/* Owned badge */}
      {skin.owned && (
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            padding: "3px 10px",
            background: "rgba(16,185,129,0.14)",
            border: "1px solid rgba(16,185,129,0.38)",
            borderRadius: 3,
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "0.57rem",
            letterSpacing: "0.1em",
            color: "#10B981",
            zIndex: 2,
          }}
        >
          OWNED
        </div>
      )}

      {/* Gun photo */}
      <div
        style={{
          position: "relative",
          height: 150,
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, ${skin.glowColor}18 0%, transparent 70%)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        )}
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            background: "linear-gradient(to top, rgba(18,18,18,0.95), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <img
          src={skin.img}
          alt={skin.imgAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            filter: `contrast(1.08) saturate(0.6) brightness(${hovered ? 0.85 : 0.7})`,
            transition: "filter 0.3s, transform 0.3s",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "1rem 1.2rem 1.3rem" }}>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.15rem",
            color: "#fff",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          {skin.name}
        </div>
        <div
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "0.76rem",
            color: "rgba(255,255,255,0.32)",
            marginBottom: "1rem",
          }}
        >
          {skin.weapon} · {skin.collection}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.25rem",
                color: skin.rarityColor,
              }}
            >
              {skin.price}
            </span>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                color: `${skin.rarityColor}90`,
                marginLeft: 5,
              }}
            >
              VP
            </span>
          </div>
          {!skin.owned ? (
            <motion.button
              onClick={() => onCartToggle(skin.id)}
              whileHover={{ y: -2, scale: 1.06, boxShadow: `0 0 22px ${skin.rarityColor}70` }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                background: inCart ? `${skin.rarityColor}20` : `${skin.rarityColor}14`,
                border: `1px solid ${skin.rarityColor}${inCart ? "80" : "38"}`,
                borderRadius: 4,
                color: skin.rarityColor,
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.76rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.18s, border-color 0.18s",
                lineHeight: 1,
              }}
            >
              <ShoppingCart size={12} />
              {inCart ? "Added" : "Buy"}
            </motion.button>
          ) : (
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.62rem",
                color: "#10B981",
                letterSpacing: "0.1em",
              }}
            >
              IN LOADOUT
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
