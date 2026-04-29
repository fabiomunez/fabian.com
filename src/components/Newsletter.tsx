import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      // TODO: Integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 cyber-grid" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6 shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Mail size={28} />
          </motion.div>

          <h2 className="text-3xl font-bold gradient-text mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest articles, tutorials, and insights on web development. 
            No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover-lift shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-600 font-medium"
              >
                ✓ Thanks for subscribing! Check your email for confirmation.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-600 font-medium"
              >
                ✗ Something went wrong. Please try again.
              </motion.p>
            )}
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Join 500+ developers getting weekly updates
          </p>
        </motion.div>
      </div>
    </section>
  );
};
