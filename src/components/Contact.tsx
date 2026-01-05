import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
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
