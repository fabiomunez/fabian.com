import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Works } from './components/Works';
import { GraphicDesigner } from './components/GraphicDesigner';
import { Frontend } from './components/Frontend';
import { Backend } from './components/Backend';
import { Mobile } from './components/Mobile';

export function App() {
  // Add 3D effect with mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.perspective-card');
      const buttons = document.querySelectorAll('.perspective-button');
      const elements = document.querySelectorAll('.perspective-element');
      const parallaxBgs = document.querySelectorAll('.parallax-bg');
      
      // Get mouse position
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      // Apply enhanced 3D effect to cards with depth
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const depth = 1 + (index % 3) * 0.2; // Varying depth for more dynamic effect
        element.style.transform = `perspective(1000px) rotateY(${x * 10 * depth}deg) rotateX(${y * -10 * depth}deg) translateZ(${15 * depth}px) scale(${1 + Math.abs(x * y) * 0.05})`;
      });
      
      // Apply enhanced 3D effect to buttons with glow
      buttons.forEach((button, index) => {
        const element = button as HTMLElement;
        const delay = index * 0.1;
        element.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateZ(10px) translateY(${y * -5}px)`;
        element.style.boxShadow = `0 ${5 + Math.abs(y) * 10}px ${10 + Math.abs(x) * 15}px -5px rgba(128, 90, 213, ${0.3 + Math.abs(x * y) * 0.3})`;
        element.style.transitionDelay = `${delay}s`;
      });
      
      // Apply floating 3D effect to decorative elements with rotation
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 1 + (index % 4) * 0.5; // Varying speeds
        element.style.transform = `perspective(1000px) rotateY(${x * 20 * speed}deg) rotateX(${y * -15 * speed}deg) translateZ(${25 * speed}px) scale(${1 + Math.abs(x * y) * 0.1})`;
      });

      // Apply parallax effect to background elements
      parallaxBgs.forEach((bg, index) => {
        const element = bg as HTMLElement;
        const parallaxFactor = 0.05 + (index % 3) * 0.03; // Different parallax factors
        const xOffset = -x * 100 * parallaxFactor;
        const yOffset = -y * 100 * parallaxFactor;
        element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0) scale(${1 + Math.abs(x * y) * 0.1})`;
      });
    };
    
    // Add scroll-based animations
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      // Add subtle rotation to elements based on scroll position
      document.querySelectorAll('.perspective-card, .perspective-element').forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < viewportHeight && rect.bottom > 0;
        
        if (isInView) {
          const scrollProgress = 1 - (rect.top / viewportHeight);
          const rotationFactor = Math.min(Math.max(scrollProgress, 0), 1) * 5;
          const translateFactor = Math.min(Math.max(scrollProgress, 0), 1) * 15;
          const scaleFactor = 1 + Math.min(Math.max(scrollProgress, 0), 1) * 0.05;
          
          // Apply subtle rotation and scale based on scroll position
          element.style.transform = `perspective(1000px) rotateX(${rotationFactor}deg) translateZ(${translateFactor}px) scale(${scaleFactor})`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set positions
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="w-full min-h-screen text-white overflow-hidden relative">
      {/* Scanline effect for futuristic look */}
      <div className="scanline" />
      
      {/* Background decorative elements with parallax effect */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600 rounded-full filter blur-[100px] parallax-bg" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-[100px] parallax-bg" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px] parallax-bg pulse-effect" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[25%] right-[15%] w-64 h-64 bg-blue-600 rounded-full filter blur-[90px] parallax-bg" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[15%] left-[20%] w-56 h-56 bg-cyan-600 rounded-full filter blur-[80px] parallax-bg" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Cyber grid background with subtle movement */}
      <div className="fixed inset-0 z-0 opacity-15 cyber-grid parallax-bg" />
      
      {/* Digital circuit lines */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-0 left-[90%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        
        <div className="absolute left-0 top-[15%] w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-0 top-[45%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute left-0 top-[75%] w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
      
      {/* Digital particles */}
      <div className="fixed inset-0 z-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out ${Math.random() * 5}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Frontend />
          <Backend />
          <Mobile />
          <GraphicDesigner />
          <Works />
          <Contact />
        </main>
      </div>
    </div>
  );
}