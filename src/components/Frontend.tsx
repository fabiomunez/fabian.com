// Frontend component
import { Code2Icon, LayoutIcon, SmartphoneIcon, PaintbrushIcon } from 'lucide-react';

export const Frontend = () => {
  // Recent frontend projects
  const recentProjects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce website with product filtering, cart functionality, and seamless checkout experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"]
    },
    {
      title: "Portfolio Dashboard",
      description: "An interactive dashboard for creative professionals to showcase their work with dynamic filtering and animations.",
      technologies: ["Vue.js", "GSAP", "CSS Grid", "Firebase"]
    }
  ];

  const frontendSkills = [
    {
      title: "Responsive Web Design",
      description: "Creating websites that provide optimal viewing experience across all devices with fluid layouts and flexible images.",
      icon: <LayoutIcon className="w-6 h-6" />
    },
    {
      title: "Modern JavaScript Frameworks",
      description: "Building interactive user interfaces with React, Angular, and Vue.js for seamless user experiences.",
      icon: <Code2Icon className="w-6 h-6" />
    },
    {
      title: "CSS Frameworks & Preprocessors",
      description: "Utilizing Tailwind CSS, Bootstrap, SASS, and LESS to streamline styling and maintain consistency.",
      icon: <PaintbrushIcon className="w-6 h-6" />
    },
    {
      title: "Mobile-First Development",
      description: "Prioritizing mobile device optimization while ensuring excellent experience across all screen sizes.",
      icon: <SmartphoneIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="frontend" className="py-20 relative overflow-hidden">
      {/* 3D decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl transform rotate-12 perspective-element"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl transform -rotate-12 perspective-element"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text text-3d flex items-center justify-center gap-2 perspective-element">
              <Code2Icon className="w-8 h-8" />
              <span>Frontend Development</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frontendSkills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="p-6 rounded-xl glass-effect hover-lift perspective-card"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-white">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Recent Frontend Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="p-6 rounded-xl glass-effect hover-lift perspective-card"
                style={{ 
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 text-gray-200 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Specializing in creating beautiful, responsive, and user-friendly interfaces 
            that provide exceptional user experiences across all devices.
          </p>
          
          <div className="inline-block">
            <a 
              href="#works" 
              className="px-8 py-3 rounded-full animated-border bg-black hover-lift perspective-button"
            >
              View Frontend Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
