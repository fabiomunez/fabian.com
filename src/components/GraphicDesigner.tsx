import { PaletteIcon, ImageIcon, PenToolIcon, LayersIcon } from 'lucide-react';

export const GraphicDesigner = () => {
  const designProjects = [
    {
      title: "Brand Identity Design",
      description: "Creating cohesive visual identities for businesses including logos, color palettes, and brand guidelines.",
      icon: <PaletteIcon className="w-6 h-6" />
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user interfaces for web and mobile applications.",
      icon: <LayersIcon className="w-6 h-6" />
    },
    {
      title: "Print Design",
      description: "Designing marketing materials, business cards, brochures, and other print collateral.",
      icon: <PenToolIcon className="w-6 h-6" />
    },
    {
      title: "Digital Illustration",
      description: "Creating custom illustrations and graphics for various digital platforms and marketing campaigns.",
      icon: <ImageIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="graphic-design" className="overflow-hidden relative py-20">
      {/* 3D decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br rounded-xl transform rotate-12 from-pink-500/20 to-purple-500/20 perspective-element"></div>
      <div className="absolute right-20 bottom-20 w-40 h-40 bg-gradient-to-br rounded-xl transform -rotate-12 from-blue-500/20 to-indigo-500/20 perspective-element"></div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex justify-center items-center mb-12">
          <div className="relative">
            <h2 className="flex gap-2 justify-center items-center text-3xl font-bold text-center gradient-text">
              <PaletteIcon className="w-8 h-8" />
              <span>Graphic Design</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {designProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="p-6 rounded-xl transition-transform duration-500 transform glass-effect hover-lift perspective-card"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 text-white bg-gradient-to-br rounded-lg from-pink-500/20 to-purple-500/20">
                  {project.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Combining artistic vision with technical skills to create visually stunning designs 
            that communicate effectively and leave a lasting impression.
          </p>
          
          <div className="inline-block">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-black rounded-full animated-border hover-lift perspective-button"
            >
              Discuss Your Design Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
