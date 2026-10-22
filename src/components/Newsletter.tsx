import { ArrowRight, CheckCircle2, Mail, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const PERKS = [
  { title: "Field notes, monthly", text: "One email with what I actually learned building that month." },
  { title: "Code, not fluff", text: "Real breakdowns from Laravel, React, Go and Flutter projects." },
  { title: "No spam. Ever.", text: "No list-selling, no daily blasts. Unsubscribe by just… not replying." },
];

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No newsletter provider is connected yet — this opens the visitor's
    // mail app with a pre-filled subscription request that really arrives.
    // Swap for Mailchimp/ConvertKit/EmailJS here when you create a list.
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Hi Fabian,\n\nPlease subscribe ${email} to your monthly field notes.\n\nThanks!`
    );
    window.location.href = `mailto:fabiomunez5@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-[2rem] border border-indigo-100 shadow-[0_30px_60px_-25px_rgba(79,70,229,0.35)]"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_80%_at_85%_20%,rgba(217,70,239,0.16),transparent),radial-gradient(ellipse_50%_70%_at_10%_90%,rgba(34,211,238,0.14),transparent),linear-gradient(135deg,#eef2ff_0%,#ffffff_55%,#fdf4ff_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(99,102,241,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.07)_1px,transparent_1px)] [background-size:44px_44px]"
          />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:gap-8 lg:p-14">
            {/* Pitch */}
            <div className="lg:col-span-7">
              <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
                <Radio className="h-4 w-4" />
                {"Broadcast_11 — Join_The_Frequency"}
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl">
                Stay on
                <span className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
                  the frequency
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                A monthly transmission for developers building real things —
                what shipped, what broke, and what I&apos;d do differently.
              </p>

              <ul className="mt-9 space-y-5">
                {PERKS.map((perk, i) => (
                  <motion.li
                    key={perk.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.15 + i * 0.08 }}
                    className="flex gap-3.5"
                  >
                    <span className="font-display text-sm font-bold text-fuchsia-600">
                      /0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-gray-900">{perk.title}</h3>
                      <p className="mt-0.5 text-gray-600">{perk.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Signup */}
            <div className="flex items-center lg:col-span-5">
              <div className="w-full rounded-3xl border border-white/70 bg-white/80 p-7 shadow-xl backdrop-blur-sm sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
                  <Mail className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-gray-900">
                  Tune in
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  Drop your email and your mail app will open with a
                  subscription request — hit send and you&apos;re on the list.
                </p>

                <form onSubmit={handleSubmit} className="mt-6">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.16, ease: EASE_OUT }}
                    className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 transition-shadow duration-200 hover:shadow-violet-500/40"
                  >
                    Subscribe
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                </form>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                    role="status"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    Your mail app should open — just hit send and you&apos;re subscribed.
                  </motion.p>
                )}

                <p className="mt-5 border-t border-gray-100 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                  One email a month · No spam · Straight from Dar es Salaam
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
