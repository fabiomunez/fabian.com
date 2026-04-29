import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Laravel Applications",
      excerpt: "Learn best practices for building scalable and maintainable Laravel applications with proper architecture and design patterns.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      category: "Backend",
      date: "2025-02-15",
      readTime: "8 min read",
      slug: "building-scalable-laravel-applications"
    },
    {
      title: "React Performance Optimization Tips",
      excerpt: "Discover advanced techniques to optimize your React applications for better performance and user experience.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
      category: "Frontend",
      date: "2025-02-10",
      readTime: "6 min read",
      slug: "react-performance-optimization"
    },
    {
      title: "Flutter State Management Guide",
      excerpt: "A comprehensive guide to state management in Flutter applications using Provider, Riverpod, and BLoC patterns.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      category: "Mobile",
      date: "2025-02-05",
      readTime: "10 min read",
      slug: "flutter-state-management-guide"
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
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-60 h-60 bg-indigo-200/20 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-200/20 rounded-full filter blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-bold gradient-text">
                Latest Articles
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development
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
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-lift perspective-card shadow-lg group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-block px-8 py-3 rounded-full cyber-button hover-lift shadow-lg"
          >
            <span className="flex items-center gap-2 font-semibold">
              View All Articles
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
