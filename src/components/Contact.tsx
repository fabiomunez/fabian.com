import { MailIcon, PhoneIcon, MapPinIcon, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email send failed:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-200/30 rounded-full filter blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-purple-200/30 rounded-full filter blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <h2 className="text-4xl font-bold text-center gradient-text">
              Get In Touch
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="max-w-3xl mx-auto mb-16 glass-effect p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
              <p className="text-gray-600">I'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  ✗ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg cyber-button hover-lift shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center gap-2 font-semibold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-gray-200 hover:border-indigo-400 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MailIcon size={24} className="text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
                <a
                  href="mailto:fabiomunez5@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                >
                  fabiomunez5@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-gray-200 hover:border-purple-400 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <PhoneIcon size={24} className="text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
                <p className="text-gray-600 font-medium">+255 718 945 911</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-gray-200 hover:border-pink-400 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-indigo-100 border border-pink-200 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPinIcon size={24} className="text-pink-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Location
                </h3>
                <p className="text-gray-600 font-medium">
                  13 Fire, Dar es Salaam, Tanzania
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer copyright */}
          <motion.div
            className="mt-20 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-medium">
              © {new Date().getFullYear()} Fabian Prosper. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
