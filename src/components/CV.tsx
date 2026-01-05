import { FileText, Eye } from "lucide-react";
import { motion } from "framer-motion";

export const CV = () => {
  // Replace this with your actual CV file path
  const cvFilePath = "/cv/Fabian_Prosper_CV.pdf";

  const handlePreview = () => {
    // Open PDF in a new tab for preview only (no download)
    window.open(cvFilePath, "_blank");
  };

  return (
    <section id="cv" className="py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-200/30 rounded-full filter blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200/30 rounded-full filter blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <h2 className="text-4xl font-bold text-center gradient-text flex items-center justify-center gap-3">
              <FileText className="w-9 h-9" />
              <span>My Resume</span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect p-10 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="w-12 h-12 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fabian Prosper - Fullstack Developer
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Preview my complete resume to learn more about my experience,
                skills, and achievements in fullstack development, mobile
                applications, and graphic design.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <motion.button
                onClick={handlePreview}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full glass-effect hover-lift shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                <span>Preview CV</span>
              </motion.button>
            </div>

            <motion.div
              className="mt-8 text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p>PDF Format • Last Updated: January 2026</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
