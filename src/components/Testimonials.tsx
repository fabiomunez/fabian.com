import { ArrowUpRight, BadgeCheck, Quote } from "lucide-react";
import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const REFEREES = [
  {
    initials: "JK",
    name: "Mr. Japhet Kaijage",
    role: "ICT Department",
    org: "Arusha Technical College",
    relation: "Academic & professional referee",
    art: "from-indigo-500 to-violet-500",
  },
  {
    initials: "RM",
    name: "Mr. Rajabu Moshi",
    role: "Backend Developer",
    org: "Engineering peer",
    relation: "Technical collaborator & referee",
    art: "from-cyan-500 to-indigo-500",
  },
  {
    initials: "AM",
    name: "Dr. Adam Mtaho",
    role: "Head of ICT",
    org: "Arusha Technical College",
    relation: "Department head & referee",
    art: "from-fuchsia-500 to-pink-500",
  },
];

const PRINCIPLES = [
  { label: "On time", text: "Deadlines treated as architecture, not decoration." },
  { label: "In the open", text: "Progress you can see — demos, updates, no disappearing acts." },
  { label: "Built to last", text: "Documented, maintainable systems your next developer will thank you for." },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_10%,rgba(99,102,241,0.08),transparent),radial-gradient(ellipse_45%_35%_at_90%_90%,rgba(217,70,239,0.07),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-14 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
            {"// Signals_09 — Incoming_Transmissions"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Real people,
            <span className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
              on the record
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            No stock-photo strangers saying scripted things here. These are
            the actual referees from my CV — people who have supervised,
            reviewed and shipped work with me.
          </p>
        </motion.div>

        {/* Referee dossiers */}
        <div className="grid gap-6 md:grid-cols-3">
          {REFEREES.map((ref, i) => (
            <motion.article
              key={ref.name}
              {...fadeUp(i * 0.08)}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-[0_24px_45px_-18px_rgba(79,70,229,0.28)]"
            >
              <Quote
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-20 w-20 rotate-12 text-indigo-50 transition-colors duration-200 group-hover:text-indigo-100"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-lg font-bold text-white shadow-md ${ref.art}`}
                  >
                    {ref.initials}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gray-400">
                    Referee_0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-gray-900">{ref.name}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-700">
                  {ref.role} · {ref.org}
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">{ref.relation}</p>
                <p className="mt-6 flex items-center gap-1.5 border-t border-gray-100 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Reference available on request
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Working principles */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-100 sm:grid-cols-3"
        >
          {PRINCIPLES.map((item, i) => (
            <div key={item.label} className="bg-white/90 px-6 py-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-600">
                Signal_0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-gray-900">{item.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.p {...fadeUp(0.15)} className="mt-10 flex flex-wrap items-center gap-3 text-gray-600">
          <span className="text-lg">Want to hear it from them directly?</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-indigo-700 transition-colors hover:text-fuchsia-600"
          >
            Ask for a reference
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
          </a>
        </motion.p>
      </div>
    </section>
  );
};
