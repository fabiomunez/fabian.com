// Mobile Development component
import {
  SmartphoneIcon,
  AppWindowIcon,
  ZapIcon,
  LayersIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export const Mobile = () => {
  const mobileSkills = [
    {
      title: "Flutter Development",
      description:
        "Building beautiful cross-platform mobile applications with Flutter and Dart for iOS and Android.",
      icon: <SmartphoneIcon className="w-6 h-6" />,
    },
    {
      title: "Native App Integration",
      description:
        "Integrating device features like camera, GPS, biometrics, and push notifications for enhanced functionality.",
      icon: <AppWindowIcon className="w-6 h-6" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Ensuring smooth animations, fast load times, and efficient resource usage for optimal mobile experience.",
      icon: <ZapIcon className="w-6 h-6" />,
    },
    {
      title: "Offline Capabilities",
      description:
        "Implementing data persistence and synchronization strategies for apps that work with or without internet.",
      icon: <LayersIcon className="w-6 h-6" />,
    },
  ];

  // Recent mobile projects
  const recentProjects = [
    {
      title: "Health Tracker App",
      description:
        "A Flutter-based fitness and health tracking application with real-time data synchronization and personalized insights.",
      technologies: ["Flutter", "Dart", "Firebase", "Health APIs"],
    },
    {
      title: "E-commerce Mobile App",
      description:
        "A feature-rich shopping application with integrated payment gateways, product scanning, and AR product preview.",
      technologies: ["Flutter", "RESTful APIs", "Stripe", "AR Kit"],
    },
  ];

  return (
    <section id="mobile" className="py-12 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-xl"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-xl"
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
              <SmartphoneIcon className="w-9 h-9" />
              <span>Mobile Development</span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mobileSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="p-8 rounded-xl glass-effect hover-lift perspective-card shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Projects Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Recent Mobile Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="p-8 rounded-xl glass-effect hover-lift perspective-card shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Creating intuitive and high-performance mobile applications that
            provide exceptional user experiences across iOS and Android
            platforms.
          </p>

          <motion.a
            href="#works"
            className="inline-block px-10 py-4 rounded-full cyber-button hover-lift perspective-button shadow-xl font-semibold"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View Mobile Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
