import { motion } from "framer-motion";
import { galleryCategories } from "../../../data/galleryData";

// ── Palette ───────────────────────────────────────────────────────────────────
const MAROON = "#7B1E3A";
const GOLD   = "#D4A017";

interface Props {
  activeCategoryId?: string;
  onSelect: (id: string) => void;
}

export default function GalleryNav({ activeCategoryId, onSelect }: Props) {
  return (
    <div
      className="sticky top-0 z-40"
      style={{
        background: "rgba(250,249,246,0.97)",
        borderBottom: `2px solid ${MAROON}`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Gold top stripe */}
      <div className="h-0.5 w-full" style={{ background: GOLD }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-1 overflow-x-auto py-2 hide-scrollbar">
          {galleryCategories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className="relative shrink-0 text-xs font-semibold tracking-wide px-4 py-2 transition-colors duration-200"
                style={{
                  color: isActive ? "#FAF9F6" : MAROON,
                  background: isActive ? MAROON : "transparent",
                  borderRadius: "3px",
                  border: isActive ? "none" : "1px solid transparent",
                }}
                whileHover={
                  !isActive
                    ? { background: `${MAROON}10`, borderColor: `${MAROON}40` }
                    : {}
                }
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-[3px]"
                    layoutId="inst-nav-pill"
                    style={{ background: MAROON }}
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                  />
                )}
                {cat.title}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
