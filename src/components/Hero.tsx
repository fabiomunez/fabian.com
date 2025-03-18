import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Fabian Prosper
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold">
            Fullstack Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating seamless web experiences with expertise in
            both frontend and backend development.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="#" className="p-3 hover:text-blue-600 transition-colors duration-300 rounded-full hover:bg-gray-100">
              <GithubIcon size={28} />
            </a>
            <a href="#" className="p-3 hover:text-blue-600 transition-colors duration-300 rounded-full hover:bg-gray-100">
              <LinkedinIcon size={28} />
            </a>
            <a href="#" className="p-3 hover:text-blue-600 transition-colors duration-300 rounded-full hover:bg-gray-100">
              <MailIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};