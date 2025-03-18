import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Fabian Prosper
          </h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-white md:bg-transparent w-full md:w-auto p-6 md:p-0 shadow-lg md:shadow-none rounded-lg md:rounded-none">
              <li>
                <a
                  href="#home"
                  className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
