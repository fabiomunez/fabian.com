import { BrainCircuit } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [{
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Tailwind CSS', 'Bootstrap']
  }, {
    title: 'Backend',
    skills: ['Laravel', 'MySQL', 'Firebase','Node.js','PHP',]
  }, {
    title: 'Mobile',
    skills: ['Flutter', 'Dart']
  }, {
    title: 'Design',
    skills: ['Photoshop', 'Illustrator', 'Canva', 'Figma',]
  }, {
    title: 'CMS',
    skills: ['WordPress',]
  },{
    title:'DevOps',
    skills:['Docker','Git','GitHub','GitLab','Bitbucket']
  },{
    title:'Others',
    skills:['C++','Java','Blender','Microsoft Office','Google Workspace','Visual Studio','Android Studio','Cursor']
  }
];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text flex items-center justify-center gap-2">
              <BrainCircuit className="w-8 h-8" />
              <span>Skills & Expertise</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="p-6 rounded-xl glass-effect hover-lift"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 text-gray-200 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};