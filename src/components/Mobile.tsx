// Mobile Development component
import { SmartphoneIcon, AppWindowIcon, ZapIcon, LayersIcon } from 'lucide-react';

export const Mobile = () => {
  const mobileSkills = [
    {
      title: "Flutter Development",
      description: "Building beautiful cross-platform mobile applications with Flutter and Dart for iOS and Android.",
      icon: <SmartphoneIcon className="w-6 h-6" />
    },
    {
      title: "Native App Integration",
      description: "Integrating device features like camera, GPS, biometrics, and push notifications for enhanced functionality.",
      icon: <AppWindowIcon className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "Ensuring smooth animations, fast load times, and efficient resource usage for optimal mobile experience.",
      icon: <ZapIcon className="w-6 h-6" />
    },
    {
      title: "Offline Capabilities",
      description: "Implementing data persistence and synchronization strategies for apps that work with or without internet.",
      icon: <LayersIcon className="w-6 h-6" />
    }
  ];

  // Recent mobile projects
  const recentProjects = [
    {
      title: "Health Tracker App",
      description: "A Flutter-based fitness and health tracking application with real-time data synchronization and personalized insights.",
      technologies: ["Flutter", "Dart", "Firebase", "Health APIs"]
    },
    {
      title: "E-commerce Mobile App",
      description: "A feature-rich shopping application with integrated payment gateways, product scanning, and AR product preview.",
      technologies: ["Flutter", "RESTful APIs", "Stripe", "AR Kit"]
    }
  ];

  return (
    <section id="mobile" className="py-20 relative overflow-hidden">
      {/* 3D decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl transform rotate-12 perspective-element"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl transform -rotate-12 perspective-element"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text text-3d flex items-center justify-center gap-2 perspective-element">
              <SmartphoneIcon className="w-8 h-8" />
              <span>Mobile Development</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mobileSkills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="p-6 rounded-xl glass-effect hover-lift perspective-card"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white">
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
          <h3 className="text-2xl font-bold text-center text-white mb-8">Recent Mobile Projects</h3>
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
            Creating intuitive and high-performance mobile applications that provide 
            exceptional user experiences across iOS and Android platforms.
          </p>
          
          <div className="inline-block">
            <a 
              href="#works" 
              className="px-8 py-3 rounded-full animated-border bg-black hover-lift perspective-button"
            >
              View Mobile Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
