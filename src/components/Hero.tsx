import { GithubIcon, LinkedinIcon, MailIcon, Code2Icon, SparklesIcon, Terminal, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Developer';
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
    <section id="home" className="flex overflow-hidden relative justify-center items-center min-h-screen">
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0">
        {/* Futuristic circuit elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border-2 border-cyan-500/30 float holographic" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-blue-500/30 float-delay-1 holographic" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full border-2 border-cyan-500/30 float-delay-2 holographic" />
        
        {/* Digital nodes */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-cyan-500 rounded-full pulse-effect" />
        <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-blue-500 rounded-full pulse-effect" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-cyan-500 rounded-full pulse-effect" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[70%] right-[25%] w-2 h-2 bg-blue-500 rounded-full pulse-effect" style={{ animationDelay: '0.5s' }} />
        
        {/* Code-like elements with enhanced styling */}
        <div className="absolute top-1/4 right-1/3 p-3 font-mono text-xs rounded-md float glass-effect-dark">
          <span className="text-cyan-400">&lt;div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"developer"</span><span className="text-cyan-400">&gt;</span><br />
          &nbsp;&nbsp;<span className="text-purple-300">fullstack_expertise</span> = <span className="text-yellow-300">true</span>;<br />
          <span className="text-cyan-400">&lt;/div&gt;</span>
        </div>
        <div className="absolute bottom-1/3 left-1/4 p-3 font-mono text-xs rounded-md float-delay-1 glass-effect-dark">
          <span className="text-blue-300">const</span> <span className="text-green-300">passion</span> = <span className="text-yellow-300">()</span> <span className="text-blue-300">=&gt;</span> <span className="text-purple-300">createAmazingExperiences</span><span className="text-yellow-300">();</span>
        </div>
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
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <span className="px-4 py-1 text-xs font-medium rounded-full glass-effect-dark neon-border">
              <SparklesIcon className="inline-block mr-1 w-4 h-4 text-cyan-400" /> 
              <span className="text-cyan-400">Portfolio 2025</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 text-6xl font-bold text-white md:text-7xl hover:cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Fabian Prosper
          </motion.h1>
          
          <motion.div 
            className="inline-block relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          >
            <h2 className="relative z-10 mb-2 text-2xl font-semibold md:text-3xl hover:cursor-pointer">
              <span className="relative">
                <span className="text-transparent">{fullText}</span>
                <span className="absolute top-0 left-0 text-cyan-400">{typedText}</span>
                {typingComplete}
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-cyan-500/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 hover:cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          >
            Passionate about creating seamless web experiences with expertise in
            both frontend and backend development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col items-center mt-8 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
          >
            <div className="flex justify-center space-x-4">
              {[
                { icon: <GithubIcon size={24} className="text-cyan-400" />, href: "#" },
                { icon: <LinkedinIcon size={24} className="text-cyan-400" />, href: "#" },
                { icon: <MailIcon size={24} className="text-cyan-400" />, href: "#" },
                { icon: <Code2Icon size={24} className="text-cyan-400" />, href: "#" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href} 
                  className="p-3 rounded-xl transition-all duration-300 hover-lift glass-effect-dark perspective-card neon-border"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.a 
              href="#works" 
              className="px-8 py-3 rounded-full cyber-button hover-lift perspective-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
            >
              <span className="flex gap-2 items-center">
                <Terminal size={16} />
                View My Work
              </span>
            </motion.a>
          </motion.div>
          
          {/* Tech icons */}
          <motion.div 
            className="flex gap-8 justify-center mt-16 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.6 }}
          >
            <Cpu size={24} className="text-cyan-400" />
            <Layers size={24} className="text-cyan-400" />
            <Code2Icon size={24} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};