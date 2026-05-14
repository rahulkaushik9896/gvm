import { motion } from "framer-motion";
import { galleryCategories } from "../../../data/galleryData";
import heroBg from "../../../assets/images/1.webp";

// ── Palette ───────────────────────────────────────────────────────────────────
const GOLD = "#D4A017";

// ── Marquee ticker of category names ─────────────────────────────────────────
function CategoryTicker() {
  const items = [...galleryCategories, ...galleryCategories];
  return (
    <div
      className="overflow-hidden w-full py-3"
      style={{
        background: "rgba(0,0,0,0.35)",
        borderTop: "1px solid rgba(212,160,23,0.3)",
      }}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((cat, i) => (
          <span
            key={`${cat.id}-${i}`}
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: `${GOLD}cc` }}
          >
            ◈&nbsp;&nbsp;{cat.title}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function GalleryHero() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "95vh" }}>
      {/* ── Full-bleed background image ── */}
      <img
        src={heroBg}
        alt="School campus"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* ── Dark gradient overlay (matches career/home style) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,35,0.55) 0%, rgba(14,27,46,0.70) 100%)",
        }}
      />

      {/* ── Maroon-tinted vignette at bottom for ticker readability ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Centered hero content ── */}
      <div
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-center px-6 w-full max-w-3xl"
      >
        {/* Gold eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="h-px w-10" style={{ background: GOLD }} />
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: GOLD }}
          >
            Geeta Vidya Mandir Public School
          </span>
          <span className="h-px w-10" style={{ background: GOLD }} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-white font-extrabold leading-tight m-0"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontFamily: "'Montserrat', sans-serif",
            textShadow: "0 2px 24px rgba(0,0,0,0.4)",
          }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          School Gallery
        </motion.h1>

        {/* Gold ornamental rule */}
        <motion.div
          className="flex items-center justify-center gap-3 my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="h-px w-14" style={{ background: `${GOLD}80` }} />
          <span style={{ color: GOLD, fontSize: "16px" }}>✦</span>
          <span className="h-px w-14" style={{ background: `${GOLD}80` }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="m-0 text-base md:text-lg"
          style={{
            color: "rgba(224,232,240,0.78)",
            lineHeight: 1.7,
            textShadow: "0 1px 10px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          A curated window into campus life — events, achievements, learning,
          and every moment that makes our school extraordinary.
        </motion.p>

        {/* Scroll cue arrow */}
        <motion.a
          href="#annual-events"
          className="inline-flex items-center justify-center mt-8 w-11 h-11 rounded-full
                     text-white no-underline"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ background: "rgba(255,255,255,0.25)" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("annual-events")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ animation: "updown-arrow 3s ease-in-out infinite" }}
          >
            <path
              fillRule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fillRule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </motion.a>
      </div>

      {/* ── Category ticker — pinned to bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CategoryTicker />
      </div>
    </div>
  );
}
