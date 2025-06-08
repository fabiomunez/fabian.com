import { useState, useEffect, useMemo } from 'react'
import { Menu, X, Code, Home, Terminal, Monitor, Smartphone, Palette, Briefcase, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = () => {
  // Simple state hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  useEffect(() => {
    // Simple scroll handler
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    // Section detection
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'frontend', 'backend', 'mobile', 'graphic', 'works', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Set up event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    const sectionInterval = setInterval(updateActiveSection, 200)
    
    // Initial check
    handleScroll()
    updateActiveSection()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(sectionInterval)
    }
  }, [scrolled])

  // Navigation links
  const navLinks = useMemo(() => [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Monitor size={16} /> },
    { id: 'backend', label: 'Backend', icon: <Terminal size={16} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> },
    { id: 'graphic', label: 'Design', icon: <Palette size={16} /> },
    { id: 'works', label: 'Works', icon: <Briefcase size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
  ], [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'border-b backdrop-blur-md bg-black/70 border-white/10' : ''}`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="flex justify-center items-center w-8 h-8 bg-blue-600 rounded-md">
              <Code size={16} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-tight text-white">
                Fabian
              </h1>
              <span className="text-xs font-medium text-blue-300">
                Developer
              </span>
            </div>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors bg-blue-600/20 hover:bg-blue-600/30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === link.id ? 'text-white bg-blue-600/20' : 'text-gray-300 hover:text-white hover:bg-blue-600/10'}`}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="px-2 py-3 mt-4 rounded-lg border backdrop-blur-md bg-blue-900/20 border-blue-500/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`flex items-center px-3 py-2 rounded-md text-sm ${activeSection === link.id ? 'text-white bg-blue-600/30' : 'text-gray-300'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Simple decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/30"></div>
    </header>
  )
}
