import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
      <div className="absolute inset-0 opacity-20 cyber-grid" />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full filter blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles size={20} />
            <span className="font-medium">Let's Build Something Amazing</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Ready to Start Your Next Project?
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I'm available for freelance projects and full-time opportunities. 
            Let's discuss how I can help bring your ideas to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover-lift shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="/Fabian Curriculumn Vitae.pdf"
              download
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover-lift shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: "Response Time", value: "< 24hrs" },
              { label: "Projects", value: "50+" },
              { label: "Satisfaction", value: "100%" },
              { label: "Experience", value: "5+ Years" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
