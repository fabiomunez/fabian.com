import {
  ArrowUpRight,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import fabioHero from "../assets/fabio-hero.webp";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const JOURNEY = [
  {
    icon: <Briefcase className="h-4 w-4" />,
    period: "2025 — Now",
    title: "Software Developer · Steptech Company Ltd",
    text: "Building production web & mobile apps with Laravel, Go, React/Next.js and Flutter — secure APIs, RBAC, payment integrations and CI/CD delivery.",
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    period: "2022 — 2025",
    title: "BSc Computer Science · Arusha Technical College",
    text: "Bachelor's degree qualified July 2025, after a Diploma in Computer Science (2019 — 2022) at the same college.",
  },
  {
    icon: <Award className="h-4 w-4" />,
    period: "Certified",
    title: "AWS Cloud Practitioner · Amazon Web Services",
    text: "Plus a professional contribution to the DACUM workshop — revising the Computer Science curriculum for NTA Levels 4–6.",
  },
];

const MODULES = [
  {
    id: "01",
    title: "Interface Dimension",
    text: "Responsive, living interfaces that translate complex systems into experiences people actually enjoy using.",
    stack: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "Backend Engine",
    text: "Secure RESTful APIs and modular backends — authentication, role-based access, payments and third-party integrations.",
    stack: ["Laravel", "Go (Chi)", "Node.js", "Django", "Firebase"],
  },
  {
    id: "03",
    title: "Mobile Universe",
    text: "Cross-platform Android & iOS apps with offline-first sync, real-time updates and native-feel performance.",
    stack: ["Flutter", "Dart", "GetX", "Android", "iOS"],
  },
  {
    id: "04",
    title: "Data & Cloud Core",
    text: "Databases tuned for speed and reliability, cloud deployment, and pipelines that ship without drama.",
    stack: ["MySQL", "PostgreSQL", "Redis", "AWS", "CI/CD"],
  },
];

const SPEC = [
  { label: "Base", value: "Dar es Salaam, Tanzania" },
  { label: "Currently", value: "Software Developer — Steptech" },
  { label: "Focus", value: "Web · Mobile · APIs · Cloud" },
  { label: "Languages", value: "English · Swahili · French · Spanish" },
  { label: "Certification", value: "AWS Cloud Practitioner" },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      {/* Static light backdrop — matching the hero, no blur filters */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_10%,rgba(139,92,246,0.10),transparent),radial-gradient(ellipse_45%_35%_at_10%_90%,rgba(34,211,238,0.08),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
            {"// Transmission_02 — Identity_File"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            The human
            <span className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
              behind the portal
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Narrative + journey */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.05)} className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                I&apos;m{" "}
                <strong className="font-semibold text-gray-900">Fabian Prosper Haule</strong>{" "}
                — a full-stack software developer and mobile &amp; web engineer
                based in Dar es Salaam. By day I build production systems at{" "}
                <strong className="font-semibold text-gray-900">Steptech Company Ltd</strong>;
                by instinct, I open portals between hard problems and the
                people who need them solved.
              </p>
              <p>
                My work lives where systems meet humans: a school platform
                connecting administrators, teachers, parents and students; a
                fantasy league for Tanzania&apos;s NBC Premier League; POS
                systems that reconcile every shilling. Different worlds — same
                obsession with clean architecture, secure APIs and interfaces
                that feel alive.
              </p>
            </motion.div>

            <motion.blockquote
              {...fadeUp(0.1)}
              className="mt-8 border-l-2 border-indigo-500 bg-indigo-50/60 py-4 pl-6 pr-4 font-display text-xl font-medium leading-snug text-gray-900 sm:text-2xl"
            >
              “Clean architecture. Living interfaces. Systems that survive
              real users.”
            </motion.blockquote>

            {/* Journey timeline */}
            <div className="mt-12">
              <motion.h3
                {...fadeUp()}
                className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500"
              >
                Journey_Log
              </motion.h3>
              <ol className="relative space-y-10 border-l border-gray-200 pl-8">
                {JOURNEY.map((item, i) => (
                  <motion.li key={item.title} {...fadeUp(i * 0.08)} className="relative">
                    <span className="absolute -left-[43px] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 shadow-sm">
                      {item.icon}
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-600">
                      {item.period}
                    </p>
                    <h4 className="mt-1.5 font-display text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 max-w-xl leading-relaxed text-gray-600">{item.text}</p>
                  </motion.li>
                ))}
              </ol>
            </div>

            <motion.a
              {...fadeUp(0.1)}
              href="#contact"
              className="group mt-12 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-indigo-700 transition-colors hover:text-fuchsia-600"
            >
              <Sparkles className="h-4 w-4" />
              Let&apos;s build your world
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            </motion.a>
          </div>

          {/* Dossier portrait + spec sheet */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden="true"
                className="hero-spin-slow absolute -inset-4 rounded-full border border-dashed border-indigo-200"
              />
              <div className="relative rotate-2 overflow-hidden rounded-b-[1.5rem] rounded-t-[999px] border-4 border-white shadow-[0_25px_50px_-15px_rgba(109,40,217,0.30)] ring-1 ring-indigo-100 transition-transform duration-300 ease-out hover:rotate-0">
                <img
                  src={fabioHero}
                  alt="Portrait of Fabian Prosper Haule"
                  width={880}
                  height={1172}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/85 py-2 pl-4 pr-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-700 backdrop-blur-sm">
                  <span>Subject_01</span>
                  <span className="text-indigo-600">Status: Building</span>
                </div>
              </div>
              <span className="absolute -right-2 top-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white shadow-lg sm:-right-5">
                AWS Certified
              </span>
              <span className="absolute -left-2 bottom-24 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-700 shadow-md sm:-left-5">
                BSc CS · 2025
              </span>
            </div>

            {/* Spec sheet */}
            <dl className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
              {SPEC.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-gray-100 px-5 py-3.5 last:border-b-0"
                >
                  <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-gray-800">{row.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Capability modules — numbered rows, not generic cards */}
        <div className="mt-24">
          <motion.div {...fadeUp()} className="mb-4 flex items-end justify-between gap-6">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Operating <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">System</span>
            </h3>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-gray-400 sm:block">
              Four modules · One developer
            </p>
          </motion.div>

          <div>
            {MODULES.map((mod, i) => (
              <motion.article
                key={mod.id}
                {...fadeUp(i * 0.06)}
                className="group grid gap-3 border-t border-gray-200 py-7 transition-colors duration-200 last:border-b hover:bg-indigo-50/50 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
              >
                <span className="font-display text-sm font-bold text-fuchsia-500 sm:col-span-1">
                  /{mod.id}
                </span>
                <h4 className="font-display text-xl font-semibold text-gray-900 transition-transform duration-200 ease-out group-hover:translate-x-1.5 sm:col-span-3">
                  {mod.title}
                </h4>
                <p className="leading-relaxed text-gray-600 sm:col-span-4">{mod.text}</p>
                <ul className="flex flex-wrap gap-1.5 sm:col-span-4 sm:justify-end">
                  {mod.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 font-mono text-[11px] text-gray-600 transition-colors duration-200 group-hover:border-indigo-200 group-hover:text-indigo-700"
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
