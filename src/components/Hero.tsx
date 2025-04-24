import { GithubIcon, LinkedinIcon, MailIcon, Code2Icon, SparklesIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-white/20 float" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full border border-white/20 float-delay-1" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full border border-white/20 float-delay-2" />
        
        {/* Code-like elements */}
        <div className="absolute top-1/4 right-1/3 opacity-20 text-xs font-mono float">
          &lt;div className="developer"&gt;<br />
          &nbsp;&nbsp;fullstack_expertise = true;<br />
          &lt;/div&gt;
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 text-xs font-mono float-delay-1">
          const passion = () =&gt; createAmazingExperiences();<br />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 text-xs font-medium rounded-full glass-effect">
              <SparklesIcon className="inline-block w-4 h-4 mr-1" /> Portfolio 2025
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Fabian Prosper
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 relative z-10">
              <span className="relative">
                Fullstack Developer
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-purple-500/30 rounded-full"></span>
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating seamless web experiences with expertise in
            both frontend and backend development.
          </p>
          
          <div className="mt-8 flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-3 hover-lift glass-effect rounded-xl transition-all duration-300">
                <GithubIcon size={24} className="text-white" />
              </a>
              <a href="#" className="p-3 hover-lift glass-effect rounded-xl transition-all duration-300">
                <LinkedinIcon size={24} className="text-white" />
              </a>
              <a href="#" className="p-3 hover-lift glass-effect rounded-xl transition-all duration-300">
                <MailIcon size={24} className="text-white" />
              </a>
              <a href="#" className="p-3 hover-lift glass-effect rounded-xl transition-all duration-300">
                <Code2Icon size={24} className="text-white" />
              </a>
            </div>
            
            <a 
              href="#works" 
              className="px-8 py-3 rounded-full animated-border bg-black hover-lift"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};