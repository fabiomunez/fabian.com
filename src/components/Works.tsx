import { Sparkles, ExternalLink, Code, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Zaqtu Safaris Website",
      description:
        "A modern tourism website for Zaqtu Safaris showcasing travel packages, destinations, and booking functionality. Features responsive design, interactive galleries, and integrated booking system.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000",
      technologies: ["WordPress", "CSS", "JavaScript"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        performance: "90+ Lighthouse Score",
        impact: "Enhanced user engagement"
      },
      featured: true,
    },
    {
      title: "POS Platform",
      description:
        "A comprehensive point of sale system with inventory management, sales tracking, and reporting features. Handles real-time transactions, multi-user access, and detailed analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Laravel", "JavaScript", "MySQL"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        users: "50+ businesses",
        transactions: "Real-time processing"
      },
      featured: true,
    },
    {
      title: "Driving Management System",
      description:
        "A platform for driving schools to manage students, instructors, schedules, and track progress. Includes automated scheduling, progress tracking, and certification management.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        efficiency: "40% time saved",
        automation: "Automated scheduling"
      },
      featured: false,
    },
    {
      title: "Shortcourse Management System",
      description:
        "A comprehensive platform for managing short courses, enrollments, instructors, and certifications. Features online registration, payment integration, and certificate generation.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        enrollments: "500+ students",
        automation: "Automated certificates"
      },
      featured: false,
    },
    {
      title: "Grocery Delivery App",
      description:
        "A mobile application for ordering groceries with real-time tracking and secure payment processing. Cross-platform solution with intuitive UI and seamless checkout experience.",
      image:
        "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Flutter", "Dart", "Laravel API"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        platform: "iOS & Android",
        features: "Real-time tracking"
      },
      featured: true,
    },
    {
      title: "Attendance, Application Tracking & Timetable System",
      description:
        "An integrated platform for tracking attendance, monitoring applications, and managing timetables for educational institutions. Multi-platform solution with mobile and web access.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Laravel", "React", "Flutter", "MySQL"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        institutions: "Multiple schools",
        platforms: "Web + Mobile"
      },
      featured: false,
    },
    {
      title: "Budget Management App",
      description:
        "A comprehensive personal finance application with Google authentication for tracking expenses, managing budgets, and generating financial reports with data visualization and insights.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Flutter", "Dart", "Firebase", "Google Auth"],
      liveLink: null,
      githubLink: null,
      caseStudyLink: null,
      metrics: {
        security: "Google OAuth",
        features: "Data visualization"
      },
      featured: true,
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="works" className="py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-cyan-500/10 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/10 rounded-full filter blur-[80px]" />

      {/* Digital circuit lines */}
      <div className="absolute left-0 top-[25%] w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute left-0 bottom-[25%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-center cyber-gradient-text flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span>Recent Works</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden hover-lift relative group perspective-card ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated border with neon effect */}
              <div className="absolute inset-0 neon-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-2 py-1 bg-cyan-500/90 text-xs font-bold rounded-md text-white">
                  FEATURED
                </div>
              )}

              {/* Card content with glass effect */}
              <div className="glass-effect-dark rounded-xl overflow-hidden relative z-10 h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                  />

                  {/* Overlay gradient with cyber pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80">
                    <div className="absolute inset-0 cyber-grid opacity-30"></div>
                  </div>

                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-cyan-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {/* <a
                        href={project.link}
                        className="p-3 bg-black/50 rounded-full hover:bg-cyan-600/80 transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a> */}
                      {/* <a
                        href="#"
                        className="p-3 bg-black/50 rounded-full hover:bg-cyan-600/80 transition-colors duration-300"
                      >
                        <Eye size={20} className="text-white" />
                      </a> */}
                      {/* <a
                        href="#"
                        className="p-3 bg-black/50 rounded-full hover:bg-cyan-600/80 transition-colors duration-300"
                      >
                        <Code size={20} className="text-white" />
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-black/30 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="mb-4 grid grid-cols-2 gap-2">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="bg-black/20 rounded-lg p-2 border border-cyan-500/20">
                          <p className="text-xs text-gray-400 capitalize">{key}</p>
                          <p className="text-sm font-semibold text-cyan-300">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {(project.liveLink || project.githubLink || project.caseStudyLink) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-colors duration-300"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 text-gray-300 rounded-lg text-sm font-medium hover:bg-black/50 transition-colors duration-300"
                        >
                          <Code size={14} />
                          GitHub
                        </a>
                      )}
                      {project.caseStudyLink && (
                        <a
                          href={project.caseStudyLink}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300"
                        >
                          <Eye size={14} />
                          Case Study
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full cyber-button hover-lift"
          >
            <span className="flex items-center gap-2">
              Let's Work Together
              <ExternalLink size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
