

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
    skills:['C++','Java','Blender','Microsoft Office','Google Workspace','Visual Studio','Android Studio','Microsoft Office','Google Workspace','Visual Studio','Android Studio','Cursor']
  }
];
  return <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(category => <div key={category.title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => <span key={skill} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};