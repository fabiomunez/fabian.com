import {
  ArrowRight,
  ArrowUpRight,
  Code2Icon,
  LayoutIcon,
  MousePointer2,
  PaintbrushIcon,
  SmartphoneIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const CAPABILITIES = [
  {
    icon: <Code2Icon className="h-5 w-5" />,
    title: "Modern Frameworks",
    text: "Interactive interfaces in React, Next.js, Angular and Vue.js — component-driven and typed end to end.",
  },
  {
    icon: <LayoutIcon className="h-5 w-5" />,
    title: "Responsive Systems",
    text: "Fluid layouts and flexible grids that hold together from a budget phone to a 4K monitor.",
  },
  {
    icon: <PaintbrushIcon className="h-5 w-5" />,
    title: "Design Engineering",
    text: "Tailwind CSS design systems with consistent tokens — styling that scales with the product, not against it.",
  },
  {
    icon: <SmartphoneIcon className="h-5 w-5" />,
    title: "Mobile-First, Always",
    text: "Built for thumbs and slow networks first, then enhanced — never the other way around.",
  },
];

const PROJECTS = [
  {
    title: "SstepApp School Connect",
    description:
      "All-in-one school platform connecting administrators, teachers, parents and students — attendance, fees, exams and notifications in one interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Fahamu POS — Point of Sale",
    description:
      "Retail point-of-sale interface covering sales, register sessions, cash reconciliation and business reporting in real time.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Zaqtu Safaris Website",
    description:
      "Tourism website showcasing travel packages and destinations, with responsive galleries and an integrated booking flow.",
    technologies: ["Next.js", "WordPress", "JavaScript", "CSS"],
  },
];

const CHART = [38, 62, 45, 78, 56, 90, 68, 100];

export const Frontend = () => {
  return (
    <section id="frontend" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_20%,rgba(34,211,238,0.09),transparent),radial-gradient(ellipse_45%_35%_at_5%_95%,rgba(139,92,246,0.09),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
            {"// Dimension_04 — Interface_Layer"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Interfaces from
            <span className="text-outline block bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 bg-clip-text">
              another dimension
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            The frontend is where your users live. I build that world to be
            fast, responsive and quietly delightful — on every screen they
            own.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Capabilities */}
          <div className="lg:col-span-5">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...fadeUp(i * 0.07)}
                className="group flex gap-4 border-b border-gray-200 py-6 first:pt-0 last:border-b-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:border-indigo-200 group-hover:bg-indigo-100">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">
                    {cap.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{cap.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interface lab — CSS-only browser mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="relative lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 -rotate-1 rounded-[1.7rem] border border-dashed border-indigo-200"
            />
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_30px_60px_-20px_rgba(79,70,229,0.25)]">
              {/* Chrome bar */}
              <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50/80 px-5 py-3.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="mx-auto flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 font-mono text-[11px] text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  portal://fabian.interface
                </span>
                <MousePointer2 className="h-4 w-4 text-indigo-400" aria-hidden="true" />
              </div>

              {/* Mini dashboard */}
              <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[180px_1fr]">
                <aside className="space-y-3 border-r border-gray-100 bg-indigo-50/40 p-4" aria-hidden="true">
                  <div className="mb-5 h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 sm:w-full" />
                  {[80, 60, 70, 50].map((w, i) => (
                    <div
                      key={i}
                      style={{ width: `${w}%` }}
                      className={`hidden h-2.5 rounded-full sm:block ${i === 0 ? "bg-indigo-300" : "bg-gray-200"}`}
                    />
                  ))}
                  <div className="space-y-2 pt-2 sm:hidden">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={`h-6 w-full rounded-md ${i === 0 ? "bg-indigo-200" : "bg-gray-100"}`} />
                    ))}
                  </div>
                </aside>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                        Dashboard · Live
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold leading-tight text-gray-900">
                        Good morning, Fabian
                      </p>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-violet-500/25">
                      Deploy
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3" aria-hidden="true">
                    {[
                      { v: "98", l: "Performance" },
                      { v: "60fps", l: "Motion" },
                      { v: "100", l: "A11y score" },
                    ].map((tile) => (
                      <div key={tile.l} className="rounded-xl border border-gray-100 bg-gray-50/70 px-3 py-3">
                        <p className="font-display text-base font-bold text-gray-900 sm:text-xl">{tile.v}</p>
                        <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-[0.16em] text-gray-400">
                          {tile.l}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-6 rounded-xl border border-gray-100 p-4" aria-hidden="true">
                    <div className="mb-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-gray-400">
                      <span>Engagement</span>
                      <span className="text-emerald-600">▲ 24%</span>
                    </div>
                    <div className="flex h-24 items-end gap-2 sm:h-28">
                      {CHART.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 + i * 0.06 }}
                          style={{ height: `${h}%` }}
                          className={`flex-1 origin-bottom rounded-t-md ${
                            i === CHART.length - 1
                              ? "bg-gradient-to-t from-fuchsia-500 to-violet-500"
                              : "bg-gradient-to-t from-indigo-400/70 to-cyan-400/70"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="absolute -left-2 top-16 hidden -rotate-6 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-left-5">
              responsive grid
            </span>
            <span className="absolute -right-2 bottom-14 hidden rotate-3 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-right-4">
              typed components
            </span>
          </motion.div>
        </div>

        {/* Recent transmissions */}
        <div className="mt-24">
          <motion.div {...fadeUp()} className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Recent{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                transmissions
              </span>
            </h3>
            <a
              href="#works"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-indigo-700 transition-colors hover:text-fuchsia-600"
            >
              All projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div>
            {PROJECTS.map((project, i) => (
              <motion.article
                key={project.title}
                {...fadeUp(i * 0.06)}
                className="group grid gap-3 border-t border-gray-200 py-7 transition-colors duration-200 last:border-b hover:bg-cyan-50/50 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
              >
                <span className="font-display text-sm font-bold text-cyan-600 sm:col-span-1">
                  /F{String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-6">
                  <h4 className="flex items-center gap-2 font-display text-xl font-semibold text-gray-900">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all duration-200 group-hover:rotate-45 group-hover:text-indigo-600" />
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-gray-600">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:col-span-5 sm:justify-end">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 font-mono text-[11px] text-gray-600 transition-colors duration-200 group-hover:border-cyan-200 group-hover:text-cyan-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
