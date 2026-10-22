import { ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const POSTS = [
  {
    title: "Building Scalable Laravel Applications",
    excerpt:
      "Best practices for building scalable, maintainable Laravel applications — service layers, queues, Redis cache tags and architecture that survives growth.",
    category: "Backend",
    glyph: "{ }",
    date: "2025-02-15",
    readTime: "8 min read",
    slug: "building-scalable-laravel-applications",
    art: "from-emerald-500 via-teal-500 to-cyan-600",
    featured: true,
  },
  {
    title: "React Performance Optimization Tips",
    excerpt:
      "Advanced techniques to optimise React applications — profiling, memoisation, code-splitting and shipping less JavaScript to real users.",
    category: "Frontend",
    glyph: "</>",
    date: "2025-02-10",
    readTime: "6 min read",
    slug: "react-performance-optimization",
    art: "from-cyan-500 via-indigo-500 to-violet-600",
    featured: false,
  },
  {
    title: "Flutter State Management Guide",
    excerpt:
      "A comprehensive guide to state management in Flutter — Provider, Riverpod, BLoC and GetX compared, with the trade-offs nobody puts in the docs.",
    category: "Mobile",
    glyph: "( )",
    date: "2025-02-05",
    readTime: "10 min read",
    slug: "flutter-state-management-guide",
    art: "from-violet-500 via-fuchsia-500 to-pink-600",
    featured: false,
  },
];

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const Blog = () => {
  return (
    <section id="blog" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_88%_12%,rgba(99,102,241,0.09),transparent),radial-gradient(ellipse_45%_35%_at_8%_92%,rgba(34,211,238,0.08),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-14 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
            {"// Journal_10 — Field_Notes"}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Notes from
            <span className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
              inside the build
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Things I learned shipping real systems, written down so the next
            developer — often future me — doesn&apos;t have to learn them twice.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              {...fadeUp(i * 0.08)}
              className={post.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-[0_24px_45px_-18px_rgba(79,70,229,0.30)]"
              >
                {/* CSS cover */}
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${post.art}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:34px_34px]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 -top-10 h-32 w-32 rounded-full border border-dashed border-white/40"
                  />
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl font-bold tracking-tight text-white/90 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-105"
                  >
                    {post.glyph}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                    {post.category}
                  </span>
                  <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">
                    Log_{String(i + 1).padStart(3, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-indigo-500" />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-indigo-500" />
                      {post.readTime}
                    </span>
                  </p>
                  <h3 className="mt-3 flex items-start justify-between gap-2 font-display text-xl font-semibold leading-snug text-gray-900">
                    {post.title}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 transition-all duration-200 group-hover:rotate-45 group-hover:text-indigo-600" />
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-gray-600">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-t border-gray-100 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-700">
                    Read article
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-gray-400"
        >
          {"// End_of_log — 03 entries · More field notes in the lab"}
        </motion.p>
      </div>
    </section>
  );
};
