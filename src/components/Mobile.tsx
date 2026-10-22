import {
  AppWindowIcon,
  ArrowRight,
  ArrowUpRight,
  Bell,
  LayersIcon,
  MapPin,
  ScanLine,
  SmartphoneIcon,
  ZapIcon,
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
    icon: <SmartphoneIcon className="h-5 w-5" />,
    title: "Flutter, Cross-Platform",
    text: "One Dart codebase, two stores — beautiful Android & iOS apps with GetX state management and native feel.",
  },
  {
    icon: <AppWindowIcon className="h-5 w-5" />,
    title: "Device Superpowers",
    text: "Camera, GPS, on-device plate recognition and push/SMS notifications — the hardware works for the product.",
  },
  {
    icon: <LayersIcon className="h-5 w-5" />,
    title: "Offline-First Sync",
    text: "Apps that keep working in a basement car park with no signal, then sync cleanly when the network returns.",
  },
  {
    icon: <ZapIcon className="h-5 w-5" />,
    title: "60fps or Nothing",
    text: "Smooth animations, fast cold starts and efficient resource use — performance is a feature users can feel.",
  },
];

const SLOTS = [
  { id: "A1", taken: true },
  { id: "A2", taken: false },
  { id: "A3", taken: true },
  { id: "A4", taken: false },
  { id: "B1", taken: false },
  { id: "B2", taken: true },
  { id: "B3", taken: false },
  { id: "B4", taken: true },
];

const PROJECTS = [
  {
    title: "EcoPark AI — Smart Parking & Car Wash",
    description:
      "Smart parking platform with on-device number-plate recognition, offline-first sync, and SMS/push notifications for drivers and attendants.",
    technologies: ["Flutter", "GetX", "Laravel API", "Redis"],
  },
  {
    title: "E-Commerce Mobile Application",
    description:
      "Cross-platform shopping app with delivery tracking, multiple payment options, secure ordering APIs and real-time updates.",
    technologies: ["Flutter", "Dart", "Laravel", "REST API"],
  },
  {
    title: "Grocery Delivery App",
    description:
      "Grocery ordering with real-time delivery tracking and secure checkout — an intuitive, cross-platform shopping experience.",
    technologies: ["Flutter", "Dart", "Laravel API", "MySQL"],
  },
];

export const Mobile = () => {
  return (
    <section id="mobile" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(217,70,239,0.08),transparent),radial-gradient(ellipse_45%_35%_at_8%_90%,rgba(56,189,248,0.09),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-violet-600">
            {"// Universe_06 — Mobile_Layer"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            A universe in
            <span className="text-outline block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text">
              every pocket
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Phones are where Tanzania lives online. I build Flutter apps that
            load fast, work offline and feel like they were always part of
            the device.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Capabilities */}
          <div className="lg:col-span-6">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...fadeUp(i * 0.07)}
                className="group flex gap-4 border-b border-gray-200 py-6 first:pt-0 last:border-b-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600 transition-colors duration-200 group-hover:border-violet-200 group-hover:bg-violet-100">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">{cap.title}</h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{cap.text}</p>
                </div>
              </motion.div>
            ))}

            <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-wrap gap-2">
              {["Android", "iOS", "One codebase", "GetX", "Offline-first"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-violet-200 bg-violet-50/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-violet-700"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Phone lab — EcoPark AI, CSS-only */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[320px] lg:col-span-6"
          >
            <div
              aria-hidden="true"
              className="hero-spin-slow absolute -inset-8 rounded-full border border-dashed border-violet-200"
            />
            {/* Ghost phone behind */}
            <div
              aria-hidden="true"
              className="absolute -right-10 top-10 hidden h-[480px] w-[230px] rotate-6 rounded-[2.4rem] border border-fuchsia-200 bg-gradient-to-b from-fuchsia-50 to-violet-100/60 sm:block lg:-right-16"
            />

            {/* Main phone */}
            <div className="relative mx-auto w-[290px] rounded-[2.6rem] border border-gray-300 bg-gray-900 p-[10px] shadow-[0_35px_60px_-20px_rgba(124,58,237,0.40)]">
              <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-2 z-10 h-[22px] w-[96px] -translate-x-1/2 rounded-full bg-gray-900"
                />
                {/* App header */}
                <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 px-5 pb-5 pt-12 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
                    EcoPark AI · Live
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-tight">
                    Find your spot
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-white/80">
                    <MapPin className="h-3 w-3" /> Dar es Salaam · Parking Zone A
                  </p>
                </div>

                <div className="space-y-4 p-5">
                  {/* Plate recognition card */}
                  <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                    <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-500">
                      <ScanLine className="h-3.5 w-3.5" /> Plate recognised
                    </p>
                    <div className="relative mt-2.5 overflow-hidden rounded-lg border-2 border-gray-800 bg-white py-2 text-center">
                      <p className="font-display text-xl font-bold tracking-[0.2em] text-gray-900">
                        T 482 DKM
                      </p>
                      <motion.span
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.5 }}
                        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-gray-500">
                      Entry granted · Session started 09:41
                    </p>
                  </div>

                  {/* Slots */}
                  <div>
                    <p className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400">
                      <span>Available slots</span>
                      <span className="text-emerald-600">4 free</span>
                    </p>
                    <div className="grid grid-cols-4 gap-2" aria-hidden="true">
                      {SLOTS.map((slot) => (
                        <span
                          key={slot.id}
                          className={`rounded-lg py-2 text-center font-mono text-[10px] font-semibold ${
                            slot.taken
                              ? "bg-gray-100 text-gray-300"
                              : "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                          }`}
                        >
                          {slot.id}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="flex items-center gap-2 rounded-xl bg-gray-50 px-3.5 py-2.5 text-[11px] text-gray-600">
                    <Bell className="h-3.5 w-3.5 shrink-0 text-fuchsia-500" />
                    SMS sent — “Karibu! Slot A2 is reserved for you.”
                  </p>
                </div>

                {/* Bottom nav */}
                <div
                  aria-hidden="true"
                  className="flex items-center justify-around border-t border-gray-100 px-6 py-3.5"
                >
                  <span className="h-1.5 w-6 rounded-full bg-violet-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>

            <span className="absolute -left-4 top-24 hidden -rotate-6 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-left-12">
              offline-first
            </span>
            <span className="absolute -right-3 bottom-28 hidden rotate-3 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-mono text-[11px] text-gray-600 shadow-md sm:block lg:-right-8">
              plate AI · on-device
            </span>
          </motion.div>
        </div>

        {/* Recent transmissions */}
        <div className="mt-24">
          <motion.div {...fadeUp()} className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Recent{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                transmissions
              </span>
            </h3>
            <a
              href="#works"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-700 transition-colors hover:text-fuchsia-600"
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
                className="group grid gap-3 border-t border-gray-200 py-7 transition-colors duration-200 last:border-b hover:bg-violet-50/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
              >
                <span className="font-display text-sm font-bold text-violet-600 sm:col-span-1">
                  /M{String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-6">
                  <h4 className="flex items-center gap-2 font-display text-xl font-semibold text-gray-900">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all duration-200 group-hover:rotate-45 group-hover:text-violet-600" />
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-gray-600">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:col-span-5 sm:justify-end">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 font-mono text-[11px] text-gray-600 transition-colors duration-200 group-hover:border-violet-200 group-hover:text-violet-700"
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
