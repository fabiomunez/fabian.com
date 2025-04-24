import { Sparkles } from 'lucide-react';

export const Works = () => {
  const projects = [
    {
      title: 'Zaqtu Safaris Website',
      description:
        'A modern tourism website for Zaqtu Safaris showcasing travel packages, destinations, and booking functionality.',
      image:
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',
      technologies: ['WordPress', 'CSS', 'JavaScript'],
    },
    {
      title: 'POS Platform',
      description:
        'A comprehensive point of sale system with inventory management, sales tracking, and reporting features.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Laravel', 'JavaScript', 'MySQL'],
    },
    {
      title: 'Driving Management System',
      description:
        'A platform for driving schools to manage students, instructors, schedules, and track progress.',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'Shortcourse Management System',
      description:
        'A comprehensive platform for managing short courses, enrollments, instructors, and certifications.',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Laravel', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Grocery Delivery App',
      description:
        'A mobile application for ordering groceries with real-time tracking and secure payment processing.',
      image:
        'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Flutter', 'Dart', 'Laravel API'],
    },
    {
      title: 'Attendance, Application Tracking & Timetable System',
      description:
        'An integrated platform for tracking attendance, monitoring applications, and managing timetables for educational institutions.',
      image:
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Laravel', 'React', 'Flutter', 'MySQL'],
    },
  ]
  
  return (
    <section
      id="works"
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-indigo-500/10 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/10 rounded-full filter blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span>Recent Works</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden hover-lift relative group"
            >
              {/* Animated border */}
              <div className="absolute inset-0 animated-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card content with glass effect */}
              <div className="glass-effect rounded-xl overflow-hidden relative z-10">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
