export const Works = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product management, cart functionality, and secure checkout.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'Laravel', 'MySQL'],
      
    },
    {
      title: 'Task Management App',
      description:
        'A mobile-first task management application with real-time updates and team collaboration features.',
      image:
        'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Flutter', 'Firebase'],
      
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern and responsive portfolio website built with React and Tailwind CSS.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'Tailwind'],
      
    },
  ]
  return (
    <section
      id="works"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Recent Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    // href={project.liveLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <ExternalLinkIcon size={16} />
                    <span>Live Demo</span> */}
                  </a>
                  <a
                    // href={project.githubLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <GithubIcon size={16} />
                    <span>Source Code</span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
