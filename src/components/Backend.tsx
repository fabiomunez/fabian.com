// Backend component
import { ServerIcon, DatabaseIcon, ShieldIcon, GitBranchIcon } from 'lucide-react';

export const Backend = () => {
  // Recent backend projects
  const recentProjects = [
    {
      title: "Content Management System",
      description: "A custom CMS with role-based access control, content versioning, and API integrations for a media company.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      title: "Inventory Management API",
      description: "A scalable backend system for real-time inventory tracking with webhook notifications and reporting features.",
      technologies: ["Laravel", "MySQL", "Redis", "Docker"]
    }
  ];

  const backendSkills = [
    {
      title: "API Development",
      description: "Building robust and scalable RESTful and GraphQL APIs to power web and mobile applications.",
      icon: <ServerIcon className="w-6 h-6" />
    },
    {
      title: "Database Management",
      description: "Working with SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB, and Firebase.",
      icon: <DatabaseIcon className="w-6 h-6" />
    },
    {
      title: "Security Implementation",
      description: "Implementing authentication, authorization, and data protection measures to secure applications.",
      icon: <ShieldIcon className="w-6 h-6" />
    },
    {
      title: "DevOps & Deployment",
      description: "Setting up CI/CD pipelines, containerization with Docker, and cloud deployment on AWS, Azure, and GCP.",
      icon: <GitBranchIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="backend" className="py-20 relative overflow-hidden">
      {/* 3D decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl transform rotate-12 perspective-element"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl transform -rotate-12 perspective-element"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text text-3d flex items-center justify-center gap-2 perspective-element">
              <ServerIcon className="w-8 h-8" />
              <span>Backend Development</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {backendSkills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="p-6 rounded-xl glass-effect hover-lift perspective-card"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 text-white">
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
          <h3 className="text-2xl font-bold text-center text-white mb-8">Recent Backend Projects</h3>
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
            Developing powerful, secure, and scalable server-side applications and APIs 
            that form the foundation of modern web and mobile applications.
          </p>
          
          <div className="inline-block">
            <a 
              href="#works" 
              className="px-8 py-3 rounded-full animated-border bg-black hover-lift perspective-button"
            >
              View Backend Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
