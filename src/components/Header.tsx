import { useState, useEffect, useMemo } from "react";
import {
  Menu,
  X,
  Code,
  Home,
  Terminal,
  Monitor,
  Smartphone,
  Palette,
  Briefcase,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  // Simple state hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Simple scroll handler
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Section detection
    const updateActiveSection = () => {
      const sections = [
        "home",
        "about",
        "frontend",
        "backend",
        "mobile",
        "graphic",
        "works",
        "cv",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set up event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    const sectionInterval = setInterval(updateActiveSection, 200);

    // Initial check
    handleScroll();
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(sectionInterval);
    };
  }, [scrolled]);

  // Navigation links
  const navLinks = useMemo(
    () => [
      { id: "home", label: "Home", icon: <Home size={16} /> },
      { id: "about", label: "About", icon: <Code size={16} /> },
      { id: "frontend", label: "Frontend", icon: <Monitor size={16} /> },
      { id: "backend", label: "Backend", icon: <Terminal size={16} /> },
      { id: "mobile", label: "Mobile", icon: <Smartphone size={16} /> },
      { id: "graphic", label: "Design", icon: <Palette size={16} /> },
      { id: "works", label: "Works", icon: <Briefcase size={16} /> },
      { id: "cv", label: "CV", icon: <Briefcase size={16} /> },
      { id: "contact", label: "Contact", icon: <Mail size={16} /> },
    ],
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ${
        scrolled
          ? "border-b backdrop-blur-xl bg-white/80 border-gray-200 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg hover-lift">
              <Code size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                Fabian
              </h1>
              <span className="text-xs font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
            </div>
          </motion.a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-gray-900 shadow-md"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="px-2 py-3 mt-4 rounded-xl border backdrop-blur-xl bg-white/90 border-gray-200 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
    </header>
  );
};
