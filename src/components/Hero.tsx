import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Code2Icon,
  SparklesIcon,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Fullstack Developer";
  const [typingComplete, setTypingComplete] = useState(false);

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="flex overflow-hidden relative justify-center items-center min-h-screen"
    >
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-indigo-300/40 holographic"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-purple-300/40 holographic"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border-2 border-pink-300/40 holographic"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated nodes */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-3 h-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[60%] left-[15%] w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-3 h-3 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-[70%] right-[25%] w-3 h-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Code-like elements with enhanced styling */}
        <motion.div
          className="absolute top-1/4 right-1/3 p-4 font-mono text-xs rounded-xl glass-effect-dark shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-indigo-600">&lt;div</span>{" "}
          <span className="text-purple-600">className</span>=
          <span className="text-pink-600">"developer"</span>
          <span className="text-indigo-600">&gt;</span>
          <br />
          &nbsp;&nbsp;
          <span className="text-purple-700">fullstack_expertise</span> ={" "}
          <span className="text-indigo-700">true</span>;<br />
          <span className="text-indigo-600">&lt;/div&gt;</span>
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 p-4 font-mono text-xs rounded-xl glass-effect-dark shadow-xl"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="text-purple-600">const</span>{" "}
          <span className="text-indigo-600">passion</span> ={" "}
          <span className="text-pink-600">()</span>{" "}
          <span className="text-purple-600">=&gt;</span>{" "}
          <span className="text-indigo-700">createAmazingExperiences</span>
          <span className="text-pink-600">();</span>
        </motion.div>
      </div>

      <div className="container relative z-10 px-6 py-20 mx-auto text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          >
            <span className="px-6 py-2 text-sm font-semibold rounded-full glass-effect-dark neon-border shadow-lg">
              <SparklesIcon className="inline-block mr-2 w-5 h-5 text-indigo-600 animate-pulse" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio 2025
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-6xl font-bold text-gray-900 md:text-7xl hover:cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.02 }}
          >
            Fabian Prosper
          </motion.h1>

          <motion.div
            className="inline-block relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <h2 className="relative z-10 mb-2 text-2xl font-semibold md:text-3xl hover:cursor-pointer">
              <span className="relative">
                <span className="text-transparent">{fullText}</span>
                <span className="absolute top-0 left-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {typedText}
                </span>
                {typingComplete}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 0.8 }}
                ></motion.span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 hover:cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            Passionate about creating seamless web experiences with expertise in
            both frontend and backend development.
          </motion.p>

          <motion.div
            className="flex flex-col items-center mt-8 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
          >
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: <GithubIcon size={24} className="text-gray-700" />,
                  href: "https://github.com/fabiomunez",
                  color: "from-indigo-500 to-purple-600",
                },
                {
                  icon: <LinkedinIcon size={24} className="text-gray-700" />,
                  href: "https://www.linkedin.com/in/fabio-munez-272902353/",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  icon: <MailIcon size={24} className="text-gray-700" />,
                  href: "mailto:fabiomunez5@gmail.com",
                  color: "from-pink-500 to-indigo-600",
                },
                {
                  icon: <Code2Icon size={24} className="text-gray-700" />,
                  href: "#",
                  color: "from-indigo-500 to-blue-600",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="p-4 rounded-xl transition-all duration-300 hover-lift glass-effect-dark perspective-card neon-border shadow-lg group"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  <div
                    className={`group-hover:bg-gradient-to-br group-hover:${item.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}
                  >
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#works"
              className="px-10 py-4 rounded-full cyber-button hover-lift perspective-button shadow-xl"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
            >
              <span className="flex gap-2 items-center font-semibold">
                <Terminal size={18} />
                View My Work
              </span>
            </motion.a>
          </motion.div>

          {/* Tech icons */}
          <motion.div
            className="flex gap-8 justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cpu size={28} className="text-indigo-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Layers size={28} className="text-purple-500" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2Icon size={28} className="text-pink-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
