import { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoverNav, setHoverNav] = useState(false)
  
  // For advanced scroll effects
  const { scrollY } = useScroll()
  const headerScale = useTransform(scrollY, [0, 300], [1, 0.97])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 5])
  
  // Spring physics for smoother animations
  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [2, -2]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-2, 2]), springConfig)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [scrolled, mouseX, mouseY])

  return (
    <motion.header 
      style={{ 
        scale: headerScale,
        rotateX: rotateX,
        rotateY: rotateY,
        filter: `blur(${headerBlur.get()}px)`,
        perspective: '1000px'
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      onHoverStart={() => setHoverNav(true)}
      onHoverEnd={() => setHoverNav(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}>
      <nav className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95, x: -5 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <motion.div 
              className="flex justify-center items-center w-10 h-10 bg-black rounded-lg animated-border"
              initial={{ borderRadius: '20%' }}
              animate={{ 
                borderRadius: ['20%', '30%', '20%', '30%', '20%'],
                boxShadow: [
                  '0 0 5px rgba(255, 255, 255, 0.2)',
                  '0 0 15px rgba(255, 255, 255, 0.4)',
                  '0 0 5px rgba(255, 255, 255, 0.2)'
                ]
              }}
              transition={{ 
                borderRadius: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, 10, -10, 0],
                transition: { rotate: { duration: 0.5, ease: 'easeInOut' } }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: [0.17, 0.67, 0.83, 0.67] // Bouncy easing
                }}
              >
                <Code size={20} className="text-white" />
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: scrolled ? 1 : 0.9,
                y: 0,
                textShadow: hoverNav ? '0 0 8px rgba(255, 255, 255, 0.5)' : '0 0 0px rgba(255, 255, 255, 0)'
              }}
              transition={{ duration: 0.5 }}
            >
              Fabian Prosper
            </motion.h1>
          </motion.a>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glass-effect"
              aria-label="Toggle menu"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              }}
              whileTap={{ 
                scale: 0.9, 
                boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)' 
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: isMenuOpen ? 90 : -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: isMenuOpen ? -90 : 90, scale: 0.5 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence>
            {(isMenuOpen || window.innerWidth >= 768) && (
              <motion.div 
                className={`${
                  isMenuOpen 
                    ? 'block absolute right-0 left-0 top-full px-6 py-4 mt-2 border-t glass-effect border-white/10' 
                    : 'hidden'
                  } md:block md:static md:bg-transparent md:p-0 md:border-0`}
                initial={{ opacity: 0, y: -20, clipPath: 'inset(0% 50% 50% 50% round 10px)' }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  clipPath: 'inset(0% 0% 0% 0% round 0px)' 
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20, 
                  clipPath: 'inset(0% 50% 50% 50% round 10px)' 
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 100, 
                  damping: 15, 
                  staggerChildren: 0.08,
                  delayChildren: 0.1 
                }}
              >
                <ul className="space-y-4 md:flex md:space-y-0 md:space-x-1">
                  {['Home', 'About', 'Frontend', 'Backend', 'Mobile', 'Works', 'Contact'].map((item, index) => (
                    <motion.li 
                      key={item}
                      custom={index}
                      initial={{ opacity: 0, x: -20, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        transition: { 
                          delay: index * 0.08,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20, 
                        transition: { 
                          duration: 0.2, 
                          delay: (5 - index) * 0.05 
                        } 
                      }}
                    >
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="block px-4 py-2 rounded-lg hover:glass-effect"
                        onClick={() => setIsMenuOpen(false)}
                        whileHover={{ 
                          scale: 1.1, 
                          x: 5, 
                          textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        whileTap={{ 
                          scale: 0.95, 
                          x: -2,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)'
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <motion.span
                          initial={{ display: 'inline-block' }}
                          whileHover={{ 
                            y: [0, -3, 0],
                            transition: { 
                              y: { repeat: Infinity, repeatType: 'mirror', duration: 0.5 } 
                            }
                          }}
                        >
                          {item}
                        </motion.span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}
