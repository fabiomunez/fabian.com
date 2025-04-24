import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Works } from './components/Works';

export function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px]" />
      </div>
      
      {/* Animated grid pattern */}
      <div className="fixed inset-0 z-0 opacity-10 bg-grid-pattern" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
        </main>
      </div>
    </div>
  );
}