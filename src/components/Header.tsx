import { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="group flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg animated-border flex items-center justify-center bg-black">
              <Code size={20} className="text-white" />
            </div>
            <h1 className={`text-xl font-bold gradient-text transition-opacity duration-300 ${
              scrolled ? 'opacity-100' : 'opacity-90'
            }`}>
              Fabian Prosper
            </h1>
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 glass-effect rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className={`${
            isMenuOpen 
              ? 'block absolute top-full left-0 right-0 glass-effect mt-2 py-4 px-6 border-t border-white/10' 
              : 'hidden'
            } md:block md:static md:bg-transparent md:p-0 md:border-0`}
          >
            <ul className="md:flex space-y-4 md:space-y-0 md:space-x-1">
              {['Home', 'About', 'Skills', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg hover:glass-effect transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
