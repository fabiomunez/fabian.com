import { Code2Icon, ServerIcon, SmartphoneIcon } from 'lucide-react';
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
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Fullstack Developer with extensive experience in
              both frontend and backend development. My journey in software
              development has equipped me with a comprehensive understanding of
              the entire development lifecycle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With expertise in multiple technologies and frameworks, I
              specialize in creating seamless, user-centric applications that
              deliver exceptional experiences. My approach combines technical
              excellence with creative problem-solving to build innovative
              solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <img src={fabio} alt="Professional headshot" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4 text-blue-600">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {strength.title}
              </h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};