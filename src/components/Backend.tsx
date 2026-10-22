import {
  ArrowRight,
  ArrowUpRight,
  DatabaseIcon,
  GitBranchIcon,
  ServerIcon,
  ShieldIcon,
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
    icon: <ServerIcon className="h-5 w-5" />,
    title: "API Development",
    text: "Robust RESTful APIs in Laravel, Go (Chi), Node.js and Django — designed to be consumed, documented and trusted.",
  },
  {
    icon: <DatabaseIcon className="h-5 w-5" />,
    title: "Database Engineering",
    text: "MySQL and PostgreSQL tuned for real load — indexing, query optimisation, backup and recovery that holds up.",
  },
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Security & Access",
    text: "Authentication, role-based access control and application security baked in from the first migration, not bolted on.",
  },
  {
    icon: <GitBranchIcon className="h-5 w-5" />,
    title: "Cloud & Delivery",
    text: "AWS deployment, Git/GitHub and CI/CD pipelines, with network monitoring (PRTG/SNMP) keeping watch in production.",
  },
];

const TERMINAL_LINES = [
  { prompt: true, text: "fabian@engine:~$ deploy --production", color: "text-slate-100" },
  { prompt: false, text: "✓ 48 API endpoints registered · Laravel + Go (Chi)", color: "text-emerald-300" },
  { prompt: false, text: "✓ PostgreSQL tuned — slow queries eliminated", color: "text-emerald-300" },
  { prompt: false, text: "✓ RBAC policies enforced · JWT sessions secured", color: "text-emerald-300" },
  { prompt: false, text: "✓ GePG payment gateway connected", color: "text-emerald-300" },
  { prompt: false, text: "→ listening on :8080 — all systems nominal", color: "text-cyan-300" },
];

const PIPELINE = ["Request", "REST API", "Auth · RBAC", "Database", "Response"];

const PROJECTS = [
  {
    title: "Fantasy NBC Premier League",
    description:
      "Go-first fantasy football platform for Tanzania's NBC Premier League — REST API, scoring engine, ingest worker, authentication and SQL migrations.",
    technologies: ["Go (Chi)", "PostgreSQL", "REST API", "SQL"],
  },
  {
    title: "Driving Course Management System",
    description:
      "Student progress tracking with automated grading, GePG payment processing, certificate generation and a secure admin dashboard.",
    technologies: ["Laravel", "MySQL", "GePG", "REST API"],
  },
  {
    title: "EcoPark AI — Parking Platform API",
    description:
      "Smart parking backend powering on-device plate recognition, offline-first sync and SMS/push notifications for a Flutter app.",
    technologies: ["Laravel", "MySQL", "Redis", "Flutter API"],
  },
];

export const Backend = () => {
  return (
    <section id="backend" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_15%,rgba(16,185,129,0.08),transparent),radial-gradient(ellipse_45%_35%_at_95%_90%,rgba(99,102,241,0.09),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-600">
            {"// Engine_05 — Backend_Core"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Power beneath
            <span className="text-outline block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
              the surface
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Users never see the backend. They feel it — in every fast load,
            every secure login, every payment that just works.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Terminal — the engine room window */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
            className="relative order-2 lg:order-1 lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-1 rounded-[1.7rem] border border-dashed border-emerald-200"
            />
            <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] shadow-[0_30px_60px_-20px_rgba(6,78,59,0.45)] ring-1 ring-emerald-900/40">
              <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="mx-auto rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 font-mono text-[11px] text-slate-400">
                  engine — fabian@production
                </span>
                <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="space-y-3.5 p-6 font-mono text-[13px] leading-relaxed sm:p-7 sm:text-sm">
                {TERMINAL_LINES.map((line, i) => (
                  <motion.p
                    key={line.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.35 + i * 0.22 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.p>
                ))}
                <p className="flex items-center gap-2 text-slate-100">
                  <span>fabian@engine:~$</span>
                  <span className="hero-caret h-4 w-[7px] bg-emerald-300" aria-hidden="true" />
                </p>
              </div>

              {/* Request pipeline */}
              <div className="border-t border-white/10 bg-white/[0.03] px-6 py-4 sm:px-7">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  Anatomy of a request
                </p>
                <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[11px] text-slate-300">
                  {PIPELINE.map((step, i) => (
                    <li key={step} className="flex items-center">
                      <span
                        className={`rounded-full border px-3 py-1.5 ${
                          i === PIPELINE.length - 1
                            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/[0.04]"
                        }`}
                      >
                        {step}
                      </span>
                      {i < PIPELINE.length - 1 && (
                        <ArrowRight className="mx-1.5 h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                  <li className="ml-2 hidden text-emerald-300 sm:block">⚡ 42ms</li>
                </ol>
              </div>
            </div>

            <span className="absolute -left-2 top-14 hidden -rotate-6 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-left-4">
              99.9% uptime
            </span>
            <span className="absolute -right-2 bottom-24 hidden rotate-3 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-right-3">
              secure by default
            </span>
          </motion.div>

          {/* Capabilities */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...fadeUp(i * 0.07)}
                className="group flex gap-4 border-b border-gray-200 py-6 first:pt-0 last:border-b-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 transition-colors duration-200 group-hover:border-emerald-200 group-hover:bg-emerald-100">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">{cap.title}</h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{cap.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent transmissions */}
        <div className="mt-24">
          <motion.div {...fadeUp()} className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Recent{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                transmissions
              </span>
            </h3>
            <a
              href="#works"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-700 transition-colors hover:text-cyan-700"
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
                className="group grid gap-3 border-t border-gray-200 py-7 transition-colors duration-200 last:border-b hover:bg-emerald-50/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
              >
                <span className="font-display text-sm font-bold text-emerald-600 sm:col-span-1">
                  /B{String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-6">
                  <h4 className="flex items-center gap-2 font-display text-xl font-semibold text-gray-900">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all duration-200 group-hover:rotate-45 group-hover:text-emerald-600" />
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-gray-600">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:col-span-5 sm:justify-end">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 font-mono text-[11px] text-gray-600 transition-colors duration-200 group-hover:border-emerald-200 group-hover:text-emerald-700"
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
