import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LETTERS = "Fabian".split("");
const TAGLINE = "Fullstack Developer";
const GRID_COLS = 12;
const GRID_ROWS = 8;

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"intro" | "name" | "tag" | "exit">("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("name"), 400);
    const t2 = setTimeout(() => setPhase("tag"), 1200);
    const t3 = setTimeout(() => setPhase("exit"), 2200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(progressInterval); return 100; }
        return Math.min(prev + Math.random() * 12 + 3, 100);
      });
    }, 80);

    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearInterval(progressInterval); clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#050510" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid tile background */}
          <div
            className="absolute inset-0 grid opacity-10"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
            }}
          >
            {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-indigo-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Horizontal scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner brackets */}
          {[
            { top: "10%", left: "8%", rotate: "0deg" },
            { top: "10%", right: "8%", rotate: "90deg" },
            { bottom: "10%", left: "8%", rotate: "-90deg" },
            { bottom: "10%", right: "8%", rotate: "180deg" },
          ].map((style, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 border-t-2 border-l-2 border-cyan-400/70"
              style={{ ...style } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6 select-none">

            {/* Staggered name letters */}
            <div className="flex items-end gap-1 overflow-hidden">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-6xl md:text-8xl font-black tracking-tight"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px",
                    WebkitTextStrokeColor:
                      i < 2 ? "#818cf8" : i < 4 ? "#a78bfa" : "#f472b6",
                    fontFamily: "Inter, sans-serif",
                  }}
                  initial={{ y: 80, opacity: 0, skewY: 10 }}
                  animate={
                    phase !== "intro"
                      ? { y: 0, opacity: 1, skewY: 0 }
                      : { y: 80, opacity: 0, skewY: 10 }
                  }
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Glowing filled name behind — layered depth */}
            <div className="absolute flex items-end gap-1 blur-2xl opacity-20 pointer-events-none">
              {LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="text-6xl md:text-8xl font-black"
                  style={{
                    color: i < 3 ? "#818cf8" : "#f472b6",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Tagline character reveal */}
            <motion.div
              className="flex gap-0 font-mono text-sm md:text-base tracking-[0.25em] text-cyan-300/80 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "tag" || phase === "exit" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {TAGLINE.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={
                    phase === "tag" || phase === "exit"
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  transition={{ delay: i * 0.04, duration: 0.1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {/* Blinking cursor */}
              <motion.span
                className="ml-1 text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>

            {/* Progress track */}
            <motion.div
              className="w-64 md:w-80 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between mb-2 font-mono text-xs text-white/30">
                <span>LOADING</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #818cf8, #a78bfa, #f472b6)",
                    boxShadow: "0 0 10px #a78bfa",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Ambient blobs */}
          {[
            { x: "15%", y: "20%", color: "#4f46e5" },
            { x: "75%", y: "70%", color: "#9333ea" },
            { x: "60%", y: "15%", color: "#ec4899" },
          ].map((blob, i) => (
            <motion.div
              key={i}
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{
                left: blob.x,
                top: blob.y,
                background: blob.color,
                filter: "blur(100px)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
