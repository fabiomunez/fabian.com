import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import fabioHero from "../assets/fabio-hero.webp";

const ROLES = [
  "Fullstack Developer",
  "React & Next.js Builder",
  "Laravel & Go API Engineer",
  "Flutter App Creator",
];

const MARQUEE = [
  "React",
  "Next.js",
  "Laravel",
  "Go",
  "Python",
  "Flutter",
  "TypeScript",
  "Tailwind CSS",
];

const SOCIALS = [
  { icon: <GithubIcon size={19} />, href: "https://github.com/fabiomunez", label: "GitHub" },
  {
    icon: <LinkedinIcon size={19} />,
    href: "https://www.linkedin.com/in/fabio-munez-272902353/",
    label: "LinkedIn",
  },
  { icon: <MailIcon size={19} />, href: "mailto:fabiomunez5@gmail.com", label: "Email" },
];

const STATS = [
  { value: "5+", label: "Years experience" },
  { value: "50+", label: "Projects shipped" },
  { value: "15+", label: "Technologies" },
];

/* Stack chips orbiting the portal — position + accent + float delay */
const ORBIT_CHIPS = [
  { label: "React", className: "top-[3%] -left-2 sm:-left-7", dot: "bg-cyan-500", delay: "0s" },
  { label: "Next.js", className: "top-[3%] -right-2 sm:-right-7", dot: "bg-gray-900", delay: "0.6s" },
  { label: "Laravel", className: "top-[30%] -right-3 sm:-right-12", dot: "bg-rose-500", delay: "1.2s" },
  { label: "Go", className: "bottom-[26%] -right-2 sm:-right-8", dot: "bg-sky-500", delay: "1.8s" },
  { label: "Flutter", className: "bottom-[3%] -right-1 sm:-right-5", dot: "bg-blue-500", delay: "0.9s" },
  { label: "Python", className: "bottom-[26%] -left-3 sm:-left-12", dot: "bg-amber-500", delay: "1.5s" },
  { label: "TypeScript", className: "top-[30%] -left-2 sm:-left-10", dot: "bg-violet-500", delay: "0.3s" },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT, delay },
});

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white text-gray-900"
    >
      {/* Lightweight static backdrop — gradients only, no blur filters / starfield */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_30%,rgba(139,92,246,0.16),transparent),radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(34,211,238,0.13),transparent),linear-gradient(180deg,#ffffff_0%,#f5f3ff_58%,#ffffff_100%)]"
      />
      <div aria-hidden="true" className="hero-floor pointer-events-none absolute inset-x-0 bottom-0 h-[30%]" />

      <div className="container relative z-10 mx-auto grid flex-1 items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-6 lg:pt-24">
        {/* Left — type */}
        <div className="lg:col-span-7">
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white/80 py-1.5 pl-2 pr-4 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-600 shadow-sm"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Online
            </span>
            Portal_01 — Open for work
          </motion.div>

          <h1 className="font-display font-bold uppercase leading-[0.88] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-[clamp(3.4rem,11vw,7.5rem)] text-gray-900"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.08 }}
              >
                Fabian
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-[clamp(3.4rem,11vw,7.5rem)]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.2 }}
              >
                Prosper
              </motion.span>
            </span>
          </h1>

          <motion.div
            {...fadeUp(0.38)}
            className="mt-5 flex h-9 items-center gap-3 font-mono text-base text-gray-600 sm:text-lg"
          >
            <span className="text-indigo-600">&gt;_</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text font-medium text-transparent"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="hero-caret h-5 w-[2px] bg-indigo-500" />
          </motion.div>

          <motion.p {...fadeUp(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            I engineer immersive digital experiences from Dar es Salaam — web,
            mobile and backend systems where clean architecture meets
            interfaces that feel alive.
          </motion.p>

          <motion.div {...fadeUp(0.62)} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#works"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16, ease: EASE_OUT }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 transition-shadow duration-200 hover:shadow-violet-500/40"
            >
              Enter my work
              <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </motion.a>
            <motion.a
              href="/cv/Fabian_Prosper_CV.pdf"
              download
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16, ease: EASE_OUT }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-gray-700 transition-colors duration-200 hover:border-indigo-400 hover:text-indigo-700"
            >
              <Download size={16} />
              Download CV
            </motion.a>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors duration-200 hover:border-violet-300 hover:text-violet-700"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            {...fadeUp(0.78)}
            className="mt-12 flex max-w-lg divide-x divide-gray-200 border-y border-gray-200 py-5"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col px-4 first:pl-0">
                <dt className="order-2 mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — portal portrait (CSS-only rings, no mouse tracking) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md"
        >
          <p className="absolute -top-9 left-0 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            Sys.Online <span className="text-indigo-600">// 6.79°S 39.20°E</span>
          </p>

          {/* Rings */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="hero-spin-slow absolute -inset-5 rounded-full border border-dashed border-indigo-300/60 sm:-inset-8" />
            <div className="hero-spin-rev absolute -inset-1 rounded-full border border-violet-300/50 sm:-inset-2" />
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span className="absolute bottom-[12%] right-[4%] h-1.5 w-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
          </div>

          {/* Portrait arch */}
          <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-[999px] border-4 border-white shadow-[0_25px_60px_-15px_rgba(109,40,217,0.35)] ring-1 ring-indigo-100">
            <img
              src={fabioHero}
              alt="Portrait of Fabian Prosper"
              width={880}
              height={1172}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-transparent to-fuchsia-500/10" />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/85 py-2 pl-4 pr-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-700 backdrop-blur-sm">
              <span>Portal_01</span>
              <span className="inline-flex items-center gap-1 normal-case tracking-normal">
                <MapPin size={11} className="text-indigo-600" /> Dar es Salaam, TZ
              </span>
            </div>
          </div>

          {/* HUD corners */}
          <div aria-hidden="true" className="pointer-events-none absolute -inset-3">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-indigo-400/80" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-indigo-400/80" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-fuchsia-400/80" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-fuchsia-400/80" />
          </div>

          {/* Orbit chips */}
          {ORBIT_CHIPS.map((chip) => (
            <span key={chip.label} className={`absolute z-10 ${chip.className}`}>
              <span
                className="hero-float inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-xs font-medium text-gray-700 shadow-md"
                style={{ animationDelay: chip.delay }}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${chip.dot}`} />
                {chip.label}
              </span>
            </span>
          ))}

          <a
            href="#about"
            className="group absolute -bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-white py-2 pl-4 pr-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-600 shadow-lg transition-colors hover:text-indigo-700"
          >
            Who am I
            <span className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 p-1.5 text-white transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight size={13} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Skills marquee — CSS transform only */}
      <div className="relative z-10 border-t border-gray-100 bg-white/70 py-4">
        <div className="hero-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= MARQUEE.length}
              className="flex items-center gap-8 font-display text-sm font-medium uppercase tracking-[0.3em] text-gray-400"
            >
              {item}
              <span className="text-fuchsia-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
