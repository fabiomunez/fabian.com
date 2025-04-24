import { Code2Icon, ServerIcon, SmartphoneIcon, Sparkles } from 'lucide-react';
import fabio from '../assets/fabio.jpg';

export const About = () => {
  const strengths = [{
    icon: <Code2Icon className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and intuitive user interfaces using modern frameworks and best practices.'
  }, {
    icon: <ServerIcon className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs with secure and scalable architectures.'
  }, {
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with Flutter and modern mobile technologies.'
  }];
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-white/10 opacity-30 float-delay-1" />
      <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full border border-white/10 opacity-30 float-delay-2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text">
              About Me
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Fullstack Developer with extensive experience in
              both frontend and backend development. My journey in software
              development has equipped me with a comprehensive understanding of
              the entire development lifecycle.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise in multiple technologies and frameworks, I
              specialize in creating seamless, user-centric applications that
              deliver exceptional experiences. My approach combines technical
              excellence with creative problem-solving to build innovative
              solutions.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-full glass-effect hover-lift">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              {/* Image frame with animated border */}
              <div className="absolute inset-0 animated-border rounded-2xl"></div>
              
              {/* Inner frame with glass effect */}
              <div className="absolute inset-[3px] rounded-2xl overflow-hidden glass-effect">
                <img 
                  src={fabio} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-indigo-500/30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-pink-500/30 blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl glass-effect hover-lift"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 mb-4 text-primary-400">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {strength.title}
              </h3>
              <p className="text-gray-300">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};