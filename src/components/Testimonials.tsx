import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO, Company Name",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Fabian delivered exceptional work on our project. His attention to detail and technical expertise exceeded our expectations. The solution was delivered on time and within budget.",
      project: "POS Platform"
    },
    {
      name: "Business Owner",
      role: "Founder, Tech Startup",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Working with Fabian was a pleasure. He understood our requirements perfectly and delivered a robust solution that has significantly improved our operations.",
      project: "Management System"
    },
    {
      name: "Project Manager",
      role: "Director, Education Institute",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Fabian's fullstack expertise was evident throughout the project. He delivered a comprehensive solution that handles our complex requirements with ease.",
      project: "Attendance System"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
      <div className="absolute top-20 left-10 w-60 h-60 bg-indigo-200/20 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-200/20 rounded-full filter blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative text-center">
            <h2 className="text-4xl font-bold gradient-text mb-2">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 hover-lift perspective-card shadow-lg relative"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute top-6 right-6 text-indigo-200">
                <Quote size={48} className="opacity-30" />
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-indigo-600 font-medium">
                  Project: {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Want to work together on your next project?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full cyber-button hover-lift shadow-lg"
          >
            <span className="flex items-center gap-2 font-semibold">
              Get Started
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
