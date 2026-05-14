import { motion } from "framer-motion";
import type { GalleryCard as GalleryCardType } from "../../../data/galleryData";
import { ImageIcon } from "lucide-react";

// ── Palette ───────────────────────────────────────────────────────────────────
const MAROON = "#7B1E3A";
const GOLD   = "#D4A017";

interface Props {
  card: GalleryCardType;
  index: number;
}

export default function GalleryCard({ card, index }: Props) {
  return (
    <motion.div
      className="group relative w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* ── Card shell ────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden transition-all duration-300"
        style={{
          borderRadius: "6px",
          border: `1px solid #E5E7EB`,
          background: "#FFFFFF",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 8px 28px rgba(123,30,58,0.14)`;
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLDivElement).style.borderColor = `${MAROON}40`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 1px 6px rgba(0,0,0,0.07)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
        }}
      >
        {/* ── Gold top accent bar ────────────────────────────────────────── */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${MAROON}, ${GOLD})` }}
        />

        {/* ── Fixed-height image area ────────────────────────────────────── */}
        {/* Height is intentionally fixed — any uploaded image will be       */}
        {/* cropped elegantly via object-cover regardless of its dimensions. */}
        <div className="relative w-full overflow-hidden" style={{ height: "210px" }}>
          {card.imageSrc ? (
            <img
              src={card.imageSrc}
              alt={card.caption ?? "Gallery image"}
              className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-500 ease-out
                         group-hover:scale-[1.06]"
              style={{ objectPosition: card.objectPosition ?? "center" }}
              draggable={false}
            />
          ) : (
            /* ── Placeholder ── */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3
                         transition-colors duration-300"
              style={{ background: "#F8F5F0" }}
            >
              {/* Diagonal-stripe texture */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #E5DDD4 0px, #E5DDD4 1px,
                    transparent 1px, transparent 10px
                  )`,
                }}
                aria-hidden="true"
              />

              {/* Icon box */}
              <div
                className="relative z-10 w-12 h-12 flex items-center justify-center"
                style={{
                  border: `1.5px dashed ${MAROON}50`,
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.7)",
                }}
              >
                <ImageIcon size={20} style={{ color: `${MAROON}80` }} />
              </div>

              <p
                className="relative z-10 text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: `${MAROON}60` }}
              >
                Image Coming Soon
              </p>
            </div>
          )}

          {/* ── Overlay on hover (only when image is present) ── */}
          {card.imageSrc && (
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${MAROON}90 0%, transparent 55%)`,
              }}
            />
          )}
        </div>

        {/* ── Caption bar ─────────────────────────────────────────────────── */}
        {card.caption && (
          <div
            className="px-4 py-3"
            style={{ borderTop: "1px solid #F0EDE8" }}
          >
            <p className="text-sm truncate font-medium" style={{ color: "#374151" }}>
              {card.caption}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
