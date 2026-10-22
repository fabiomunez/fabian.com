import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type Stat = {
  target: number;
  suffix: string;
  label: string;
  caption: string;
};

const STATS: Stat[] = [
  { target: 5, suffix: "+", label: "Years Experience", caption: "From college labs to production systems" },
  { target: 50, suffix: "+", label: "Projects Completed", caption: "School platforms, POS, e-commerce & more" },
  { target: 30, suffix: "+", label: "Happy Clients", caption: "Clients and collaborators who came back" },
  { target: 15, suffix: "+", label: "Technologies", caption: "React to Go to Flutter — the full stack" },
  { target: 4, suffix: "", label: "Languages Spoken", caption: "English · Swahili · French · Spanish" },
];

/** Counts 0 → target once the band scrolls into view. Instant for reduced motion. */
const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(target);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {value}
      <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
        {suffix}
      </span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="relative overflow-hidden border-y border-indigo-100/80 bg-indigo-50/40 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_50%_0%,rgba(139,92,246,0.10),transparent)]"
      />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
              {"// Telemetry_03 — Live_Data"}
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-4xl">
              Proof,{" "}
              <span className="text-outline bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
                not promises
              </span>
            </h2>
          </div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Signal · Updated 2026
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 shadow-sm md:grid-cols-3 xl:grid-cols-5"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group border-indigo-100 px-6 py-8 transition-colors duration-200 hover:bg-indigo-50/70 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:nth-child(3n))]:border-r xl:[&:not(:last-child)]:border-r"
            >
              <p className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                <span>Metric_{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="flex items-end gap-[3px]">
                  {[6, 10, 14, 18].map((h, j) => (
                    <span
                      key={j}
                      style={{ height: h }}
                      className={`w-[3px] rounded-sm transition-colors duration-200 ${
                        j <= i % 4 ? "bg-indigo-400" : "bg-gray-200 group-hover:bg-violet-300"
                      }`}
                    />
                  ))}
                </span>
              </p>
              <dd className="font-display text-5xl font-bold tracking-tight text-gray-900">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2.5 font-display text-sm font-semibold uppercase tracking-wider text-gray-800">
                {stat.label}
              </dt>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{stat.caption}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
