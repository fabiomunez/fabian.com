import {
  ArrowUpRight,
  CheckCircle2,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Send,
  TriangleAlert,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const CHANNELS = [
  {
    icon: <MailIcon className="h-5 w-5" />,
    label: "Email",
    value: "fabiomunez5@gmail.com",
    href: "mailto:fabiomunez5@gmail.com",
    note: "Fastest route — replies within 24 hrs",
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    label: "Phone / WhatsApp",
    value: "+255 718 945 911",
    href: "tel:+255718945911",
    note: "Call or message, EAT business hours",
  },
  {
    icon: <MapPinIcon className="h-5 w-5" />,
    label: "Location",
    value: "13 Fire, Dar es Salaam, Tanzania",
    href: undefined,
    note: "Working with clients everywhere, remotely",
  },
];

const SOCIALS = [
  { icon: <GithubIcon className="h-5 w-5" />, href: "https://github.com/fabiomunez", label: "GitHub" },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/fabio-munez-272902353/",
    label: "LinkedIn",
  },
];

type Status = "idle" | "sending" | "success" | "mailto" | "error";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Real delivery path: if EmailJS keys are provided via .env
    // (VITE_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY) the form
    // sends directly. Until then it opens the visitor's mail app with
    // the message pre-written — so no enquiry is ever silently lost.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (serviceId && templateId && publicKey) {
      setStatus("sending");
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("Email send failed:", error);
        setStatus("error");
      }
    } else {
      const subject = encodeURIComponent(formData.subject || "Project inquiry");
      const body = encodeURIComponent(
        `Hi Fabian,\n\n${formData.message}\n\n— ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:fabiomunez5@gmail.com?subject=${subject}&body=${body}`;
      setStatus("mailto");
    }
    setTimeout(() => setStatus("idle"), 7000);
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_8%,rgba(99,102,241,0.09),transparent),radial-gradient(ellipse_45%_35%_at_6%_95%,rgba(217,70,239,0.07),transparent)]"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left — heading + channels */}
          <div className="lg:col-span-5">
            <motion.div {...fadeUp()}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-600">
                {"// Final_Transmission_13 — Contact"}
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Let&apos;s open
                <span className="text-outline block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text">
                  your portal
                </span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
                Tell me about the world you want to build — a product, a
                platform, or just an idea that won&apos;t leave you alone.
                I&apos;ll reply within 24 hours.
              </p>
            </motion.div>

            <div className="mt-10">
              {CHANNELS.map((channel, i) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:border-indigo-200 group-hover:bg-indigo-100">
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                        {channel.label}
                        {channel.href && (
                          <ArrowUpRight className="h-3 w-3 text-gray-300 transition-transform duration-200 group-hover:rotate-45 group-hover:text-indigo-600" />
                        )}
                      </span>
                      <span className="mt-0.5 block truncate font-display text-base font-semibold text-gray-900">
                        {channel.value}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-500">{channel.note}</span>
                    </span>
                  </>
                );
                const cls =
                  "group flex gap-4 border-b border-gray-200 py-6 first:pt-0 last:border-b-0";
                return (
                  <motion.div key={channel.label} {...fadeUp(0.08 + i * 0.07)}>
                    {channel.href ? (
                      <a href={channel.href} className={cls}>
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div {...fadeUp(0.3)} className="mt-8 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors duration-200 hover:border-violet-300 hover:text-violet-700"
                >
                  {s.icon}
                </a>
              ))}
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Elsewhere on the internet
              </span>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.12 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_30px_60px_-25px_rgba(79,70,229,0.30)] sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 -rotate-1 rounded-[1.9rem] border border-dashed border-indigo-200"
              />
              <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                <span>Transmission form</span>
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Channel open
                </span>
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-gray-900">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Amina Juma"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
                      Your email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="amina@company.co.tz"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="School platform for 2,000 students"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project — the problem, the people it's for, and your timeline…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "success" && (
                  <p className="flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" role="status">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    Message sent — I&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "mailto" && (
                  <p className="flex items-start gap-2 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700" role="status">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    Your mail app should open with the message written — just hit send.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                    Sending failed — please email me directly at fabiomunez5@gmail.com.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileTap={isSending ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.16, ease: EASE_OUT }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 transition-[opacity,box-shadow] duration-200 hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Transmitting…" : "Send message"}
                  <Send size={16} />
                </motion.button>

                <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
                  No newsletters, no sharing — just a reply from me
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.footer
          {...fadeUp(0.1)}
          className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} Fabian Prosper Haule</p>
          <p>
            Dar es Salaam, TZ · <span className="text-indigo-500">End of transmission</span>
          </p>
        </motion.footer>
      </div>
    </section>
  );
};
