import {
  ArrowUpRight,
  CarFront,
  Compass,
  GithubIcon,
  GraduationCap,
  ReceiptText,
  Trophy,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type Category = "Web" | "Mobile" | "Backend";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  categories: Category[];
  sector: string;
  platform: string;
  icon: ReactNode;
  art: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "SstepApp School Connect",
    description:
      "All-in-one production platform connecting administrators, teachers, parents and students — attendance, academics, fee payments, exams and notifications in one secure system.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    categories: ["Web", "Backend"],
    sector: "Education",
    platform: "Web",
    icon: <GraduationCap className="h-10 w-10" />,
    art: "from-indigo-500 via-violet-500 to-fuchsia-500",
    accent: "text-indigo-600",
  },
  {
    title: "Fantasy NBC Premier League",
    description:
      "Go-first fantasy football platform for Tanzania's NBC Premier League — REST API, scoring and ingest worker, domain scoring engine, authentication and SQL migrations.",
    technologies: ["Go (Chi)", "PostgreSQL", "REST API"],
    categories: ["Backend", "Web"],
    sector: "Sport",
    platform: "Web · API",
    icon: <Trophy className="h-10 w-10" />,
    art: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "text-emerald-600",
  },
  {
    title: "Fahamu POS",
    description:
      "Retail point-of-sale system covering sales, register sessions, day-book and cash reconciliation, product import and business reporting.",
    technologies: ["Laravel", "React", "MySQL"],
    categories: ["Web", "Backend"],
    sector: "Retail",
    platform: "Web",
    icon: <ReceiptText className="h-10 w-10" />,
    art: "from-cyan-500 via-sky-500 to-indigo-500",
    accent: "text-cyan-600",
  },
  {
    title: "EcoPark AI",
    description:
      "Smart parking and car-wash platform with on-device number-plate recognition, offline-first sync, and SMS/push notifications.",
    technologies: ["Flutter", "GetX", "Laravel API", "Redis"],
    categories: ["Mobile", "Backend"],
    sector: "Transport",
    platform: "Android · iOS",
    icon: <CarFront className="h-10 w-10" />,
    art: "from-violet-500 via-purple-500 to-fuchsia-500",
    accent: "text-violet-600",
  },
  {
    title: "Driving Course Management",
    description:
      "Student progress tracking and automated grading, automated GePG payment processing, certificate generation and a secure admin dashboard.",
    technologies: ["Laravel", "MySQL", "GePG"],
    categories: ["Backend", "Web"],
    sector: "Education",
    platform: "Web",
    icon: <CarFront className="h-10 w-10" />,
    art: "from-amber-500 via-orange-500 to-rose-500",
    accent: "text-amber-600",
  },
  {
    title: "Zaqtu Safaris Website",
    description:
      "Tourism website showcasing travel packages, destinations and booking — responsive galleries and an integrated booking system for a Tanzanian safari brand.",
    technologies: ["WordPress", "Next.js", "JavaScript"],
    categories: ["Web"],
    sector: "Tourism",
    platform: "Web",
    icon: <Compass className="h-10 w-10" />,
    art: "from-teal-500 via-emerald-500 to-lime-500",
    accent: "text-teal-600",
  },
];

const ARCHIVE = [
  { title: "E-Commerce Mobile App", stack: "Flutter · Laravel" },
  { title: "Grocery Delivery App", stack: "Flutter · Laravel API" },
  { title: "PTMU — Tracking & Monitoring Unit", stack: "Laravel · MySQL" },
  { title: "Short Course Management System", stack: "Laravel · MySQL" },
  { title: "Attendance & Timetable System", stack: "Laravel · React · Flutter" },
  { title: "Goal Submission Platform", stack: "Laravel · React" },
  { title: "Betting Predictor", stack: "Laravel · React · PostgreSQL" },
  { title: "Budget Management App", stack: "Flutter · Firebase" },
  { title: "ClearFast Solutions · Vusha Logistics", stack: "WordPress · Next.js" },
];

const FILTERS: Array<"All" | Category> = ["All", "Web", "Mobile", "Backend"];

export const Works = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter(
    (p) => filter === "All" || p.categories.includes(filter)
  );

  return (
    <section id="works" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_10%,rgba(34,211,238,0.08),transparent),radial-gradient(ellipse_45%_35%_at_5%_95%,rgba(99,102,241,0.09),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-700">
            {"// Archive_08 — Selected_Works"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Worlds I&apos;ve
            <span className="text-outline block bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 bg-clip-text">
              already built
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Production systems running in the real world — schools, shops,
            stadiums and streets. Filter the archive by dimension:
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="mb-10 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15, ease: EASE_OUT }}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                filter === f
                  ? "bg-gray-900 text-white shadow-lg"
                  : "border border-gray-300 bg-white text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
              }`}
            >
              {f}
              <span className={filter === f ? "text-cyan-300" : "text-gray-400"}>
                {" "}
                · {f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(f)).length}
              </span>
            </motion.button>
          ))}
          <span className="ml-auto hidden font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400 sm:block" aria-live="polite">
            Showing {visible.length} / {PROJECTS.length} worlds
          </span>
        </motion.div>

        {/* Project grid — CSS art panels, no external images */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-[0_24px_45px_-18px_rgba(79,70,229,0.30)]"
              >
                {/* Art panel */}
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.art}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:34px_34px]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-dashed border-white/40"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full border border-white/25"
                  />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-[2px] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105">
                    {project.icon}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                    {project.sector}
                  </span>
                  <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">
                    {project.platform}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-start justify-between gap-2 font-display text-xl font-semibold leading-snug text-gray-900">
                    {project.title}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 transition-all duration-200 group-hover:rotate-45 group-hover:text-indigo-600" />
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-gray-600">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className={`rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-[11px] text-gray-600 ${project.accent}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    <span>{project.categories.join(" · ")}</span>
                    <span className={project.accent}>In production</span>
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Archive — everything else, one line each */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mt-20"
        >
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
            Deep_Archive — also shipped
          </h3>
          <ul className="overflow-hidden rounded-2xl border border-gray-200 bg-white/80">
            {ARCHIVE.map((item) => (
              <li
                key={item.title}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-100 px-5 py-3.5 transition-colors duration-200 last:border-b-0 hover:bg-indigo-50/60 sm:px-6"
              >
                <span className="font-display text-[15px] font-medium text-gray-800">{item.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
                  {item.stack}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg text-gray-600">
              Your world could be next in the archive.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/fabiomunez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-gray-700 transition-colors duration-200 hover:border-gray-900 hover:text-gray-900"
              >
                <GithubIcon className="h-4 w-4" />
                More on GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/25 transition-shadow duration-200 hover:shadow-indigo-500/40"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
