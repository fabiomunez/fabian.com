import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const FACTS = [
  { label: "Response time", value: "< 24 hrs" },
  { label: "Experience", value: "5+ years" },
  { label: "Projects shipped", value: "50+" },
  { label: "Based in", value: "Dar es Salaam" },
];

export const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-[2rem] bg-[#150b33] px-6 py-16 text-center text-white shadow-[0_35px_70px_-25px_rgba(76,29,149,0.55)] sm:px-12 sm:py-20"
        >
          {/* Portal backdrop — static gradients + CSS rings, no blur filters */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_0%,rgba(139,92,246,0.45),transparent),radial-gradient(ellipse_45%_55%_at_85%_100%,rgba(217,70,239,0.28),transparent),radial-gradient(ellipse_40%_50%_at_10%_90%,rgba(34,211,238,0.18),transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]"
          />
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="hero-spin-slow h-[430px] w-[430px] rounded-full border border-dashed border-white/15" />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          />

          <div className="relative mx-auto max-w-3xl">
            <motion.p
              {...fadeUp()}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-200"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              Open a portal — booking new projects
            </motion.p>

            <motion.h2
              {...fadeUp(0.08)}
              className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl"
            >
              Have a world
              <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                in mind?
              </span>
            </motion.h2>

            <motion.p {...fadeUp(0.16)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              A school platform, a shop that never sleeps, an app your users
              can&apos;t put down — if you can describe it, I can architect
              and build it. Currently at Steptech, and taking on selected
              freelance projects.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16, ease: EASE_OUT }}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-indigo-700 shadow-xl transition-colors duration-200 hover:bg-cyan-50"
              >
                Start a project
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="/cv/Fabian_Prosper_CV.pdf"
                download
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16, ease: EASE_OUT }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.06] px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:border-cyan-300/60 hover:text-cyan-200"
              >
                <Download size={17} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.dl
              {...fadeUp(0.32)}
              className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-9 md:grid-cols-4"
            >
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <dt className="order-2 mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="order-1 font-display text-2xl font-bold">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
