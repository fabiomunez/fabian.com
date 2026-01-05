import { Code2Icon, ServerIcon, SmartphoneIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import fabio from "../assets/fabio.jpg";

export const About = () => {
  const strengths = [
    {
      icon: <Code2Icon className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Creating responsive and intuitive user interfaces using modern frameworks and best practices.",
    },
    {
      icon: <ServerIcon className="w-6 h-6" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs with secure and scalable architectures.",
    },
    {
      icon: <SmartphoneIcon className="w-6 h-6" />,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with Flutter and modern mobile technologies.",
    },
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full border-2 border-indigo-200/40 opacity-50"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 rounded-full border-2 border-purple-200/40 opacity-50"
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
            <h2 className="text-4xl font-bold text-center gradient-text">
              About Me
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm a passionate Fullstack Developer with extensive experience in
              both frontend and backend development. My journey in software
              development has equipped me with a comprehensive understanding of
              the entire development lifecycle.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              With expertise in multiple technologies and frameworks, I
              specialize in creating seamless, user-centric applications that
              deliver exceptional experiences. My approach combines technical
              excellence with creative problem-solving to build innovative
              solutions.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full glass-effect hover-lift shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                <span>Get in Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              {/* Image frame with animated border */}
              <div className="absolute inset-0 animated-border rounded-2xl"></div>

              {/* Inner frame with glass effect */}
              <motion.div
                className="absolute inset-[3px] rounded-2xl overflow-hidden glass-effect"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={fabio}
                  alt="Professional headshot"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-indigo-400/40 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-pink-400/40 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl glass-effect hover-lift perspective-card shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-4 text-indigo-600"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {strength.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
