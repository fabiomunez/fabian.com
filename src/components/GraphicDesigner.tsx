import { PaletteIcon, ImageIcon, PenToolIcon, LayersIcon } from "lucide-react";
import { motion } from "framer-motion";

export const GraphicDesigner = () => {
  const designProjects = [
    {
      title: "Brand Identity Design",
      description:
        "Creating cohesive visual identities for businesses including logos, color palettes, and brand guidelines.",
      icon: <PaletteIcon className="w-6 h-6" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing user interfaces for web and mobile applications.",
      icon: <LayersIcon className="w-6 h-6" />,
    },
    {
      title: "Print Design",
      description:
        "Designing marketing materials, business cards, brochures, and other print collateral.",
      icon: <PenToolIcon className="w-6 h-6" />,
    },
    {
      title: "Digital Illustration",
      description:
        "Creating custom illustrations and graphics for various digital platforms and marketing campaigns.",
      icon: <ImageIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="graphic" className="overflow-hidden relative py-12">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-xl"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-20 bottom-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-xl"
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          className="flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <h2 className="flex gap-3 justify-center items-center text-4xl font-bold text-center gradient-text">
              <PaletteIcon className="w-9 h-9" />
              <span>Graphic Design</span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform -translate-x-1/2"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-8 rounded-xl glass-effect hover-lift perspective-card shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex gap-4 items-start">
                <motion.div
                  className="p-3 bg-gradient-to-br rounded-lg from-pink-100 to-purple-100 text-pink-600"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700">
            Combining artistic vision with technical skills to create visually
            stunning designs that communicate effectively and leave a lasting
            impression.
          </p>

          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full cyber-button hover-lift perspective-button shadow-xl font-semibold"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Design Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
