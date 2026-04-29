import { motion } from "framer-motion";
import { Code, Users, Award, Coffee, Briefcase, Star } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "50+",
      label: "Projects Completed",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "30+",
      label: "Happy Clients",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "5+",
      label: "Years Experience",
      color: "from-pink-500 to-indigo-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: "15+",
      label: "Technologies",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "100%",
      label: "Client Satisfaction",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      value: "1000+",
      label: "Cups of Coffee",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 cyber-grid" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-2">
            By The Numbers
          </h2>
          <p className="text-gray-600">
            Delivering excellence through measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect rounded-xl p-6 hover-lift perspective-card"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
