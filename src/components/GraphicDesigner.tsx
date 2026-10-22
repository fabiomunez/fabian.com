import {
  ArrowUpRight,
  ImageIcon,
  LayersIcon,
  PaletteIcon,
  PenToolIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const PALETTE = [
  { name: "Violet Nebula", hex: "#7C3AED", rgb: "124 · 58 · 237" },
  { name: "Cyan Pulse", hex: "#0891B2", rgb: "8 · 145 · 178" },
  { name: "Fuchsia Signal", hex: "#C026D3", rgb: "192 · 38 · 211" },
  { name: "Emerald Field", hex: "#059669", rgb: "5 · 150 · 105" },
  { name: "Amber Solar", hex: "#D97706", rgb: "217 · 119 · 6" },
];

const DISCIPLINES = [
  {
    icon: <PaletteIcon className="h-5 w-5" />,
    title: "Brand Identity",
    text: "Logos, color palettes and brand guidelines that give a business one recognisable face everywhere it appears.",
  },
  {
    icon: <LayersIcon className="h-5 w-5" />,
    title: "UI/UX Design",
    text: "Interfaces designed before they're built — intuitive, visually sharp, and honest about how people actually behave.",
  },
  {
    icon: <PenToolIcon className="h-5 w-5" />,
    title: "Print Design",
    text: "Business cards, brochures and marketing collateral that survive the journey from screen to paper.",
  },
  {
    icon: <ImageIcon className="h-5 w-5" />,
    title: "Digital Illustration",
    text: "Custom illustrations and graphics for campaigns and platforms — artwork that can't be stock-photographed.",
  },
];

const TOOLS = ["Photoshop", "Illustrator", "Figma", "Canva"];

export const GraphicDesigner = () => {
  const [active, setActive] = useState(0);
  const swatch = PALETTE[active];

  return (
    <section id="graphic" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_12%_20%,rgba(236,72,153,0.08),transparent),radial-gradient(ellipse_45%_35%_at_92%_85%,rgba(124,58,237,0.09),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-pink-600">
            {"// Canvas_07 — Visual_Studio"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Where code
            <span className="text-outline block bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text">
              learns to dream
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Before I was shipping systems, I was moving pixels. That design
            eye never left — it&apos;s why my interfaces don&apos;t just work,
            they get remembered. Try the canvas:
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Interactive canvas */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
            className="relative lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 -rotate-1 rounded-[1.7rem] border border-dashed border-pink-200"
            />
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_30px_60px_-20px_rgba(190,24,93,0.22)]">
              {/* Canvas toolbar */}
              <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50/80 px-5 py-3.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="mx-auto rounded-full border border-gray-200 bg-white px-4 py-1 font-mono text-[11px] text-gray-500">
                  canvas — brand_in_motion.psd
                </span>
                <PaletteIcon className="h-4 w-4 text-pink-400" aria-hidden="true" />
              </div>

              {/* Artboard */}
              <div className="relative h-[340px] overflow-hidden sm:h-[380px]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={swatch.hex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 78% 22%, ${swatch.hex}55, transparent 55%), radial-gradient(circle at 18% 88%, ${swatch.hex}40, transparent 50%), linear-gradient(140deg, #ffffff 30%, ${swatch.hex}14)`,
                    }}
                  />
                </AnimatePresence>

                <div aria-hidden="true" className="absolute inset-0">
                  <span
                    className="absolute -right-8 -top-10 h-52 w-52 rounded-full opacity-25 transition-colors duration-300"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span
                    className="absolute bottom-14 right-24 h-20 w-20 rounded-2xl opacity-30 transition-colors duration-300"
                    style={{ backgroundColor: swatch.hex, transform: "rotate(18deg)" }}
                  />
                  <span className="absolute inset-x-0 top-1/2 h-px bg-gray-900/5" />
                  <span className="absolute inset-y-0 left-1/3 w-px bg-gray-900/5" />
                </div>

                <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">
                      Artboard · 001
                      <span className="mt-1 block text-gray-400">1920 × 1080</span>
                    </p>
                    <p
                      className="font-display text-7xl font-bold leading-none transition-colors duration-300 sm:text-8xl"
                      style={{ color: swatch.hex }}
                      aria-hidden="true"
                    >
                      Aa
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-4xl">
                      Brand
                      <span className="block">in motion</span>
                    </p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500">
                      {swatch.name} · {swatch.hex} · RGB {swatch.rgb}
                    </p>
                  </div>
                </div>
              </div>

              {/* Swatch picker */}
              <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 px-6 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                  Palette —
                </span>
                {PALETTE.map((color, i) => (
                  <motion.button
                    key={color.hex}
                    type="button"
                    onClick={() => setActive(i)}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.15, ease: EASE_OUT }}
                    aria-label={`Apply ${color.name} palette`}
                    aria-pressed={i === active}
                    title={`${color.name} ${color.hex}`}
                    className={`h-9 w-9 rounded-full transition-shadow duration-200 ${
                      i === active
                        ? "ring-2 ring-gray-900 ring-offset-2 ring-offset-white"
                        : "ring-1 ring-black/10 hover:ring-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
                <span className="ml-auto hidden font-mono text-[11px] text-gray-500 sm:block" aria-live="polite">
                  {swatch.name}
                </span>
              </div>
            </div>

            <span className="absolute -left-2 top-20 hidden -rotate-6 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-left-4">
              pick a colour ↑
            </span>
          </motion.div>

          {/* Disciplines */}
          <div className="lg:col-span-5">
            {DISCIPLINES.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.07)}
                className="group flex gap-4 border-b border-gray-200 py-6 first:pt-0 last:border-b-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-pink-50 text-pink-600 transition-colors duration-200 group-hover:border-pink-200 group-hover:bg-pink-100">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}

            <motion.div {...fadeUp(0.15)} className="mt-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-gray-400">
                Weapons of choice
              </p>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-pink-200 bg-pink-50/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-pink-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-pink-700 transition-colors hover:text-fuchsia-600"
              >
                Discuss your design project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
