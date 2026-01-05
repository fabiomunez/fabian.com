// Backend component
import {
  ServerIcon,
  DatabaseIcon,
  ShieldIcon,
  GitBranchIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export const Backend = () => {
  // Recent backend projects
  const recentProjects = [
    {
      title: "Content Management System",
      description:
        "A custom CMS with role-based access control, content versioning, and API integrations for a media company.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Inventory Management API",
      description:
        "A scalable backend system for real-time inventory tracking with webhook notifications and reporting features.",
      technologies: ["Laravel", "MySQL", "Redis", "Docker"],
    },
  ];

  const backendSkills = [
    {
      title: "API Development",
      description:
        "Building robust and scalable RESTful and GraphQL APIs to power web and mobile applications.",
      icon: <ServerIcon className="w-6 h-6" />,
    },
    {
      title: "Database Management",
      description:
        "Working with SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB, and Firebase.",
      icon: <DatabaseIcon className="w-6 h-6" />,
    },
    {
      title: "Security Implementation",
      description:
        "Implementing authentication, authorization, and data protection measures to secure applications.",
      icon: <ShieldIcon className="w-6 h-6" />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "Setting up CI/CD pipelines, containerization with Docker, and cloud deployment on AWS, Azure, and GCP.",
      icon: <GitBranchIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="backend" className="py-12 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-xl"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-xl"
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
              <ServerIcon className="w-9 h-9" />
              <span>Backend Development</span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {backendSkills.map((skill, index) => (
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
                  className="p-3 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 text-green-600"
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
            Recent Backend Projects
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
                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:border-green-400 transition-colors duration-300"
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
            Developing powerful, secure, and scalable server-side applications
            and APIs that form the foundation of modern web and mobile
            applications.
          </p>

          <motion.a
            href="#works"
            className="inline-block px-10 py-4 rounded-full cyber-button hover-lift perspective-button shadow-xl font-semibold"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View Backend Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
