import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[100px]" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center gradient-text">
              Get In Touch
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-white/10 hover:border-indigo-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 mb-4">
                  <MailIcon size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Email
                </h3>
                <a 
                  href="mailto:fabiomunez5@gmail.com" 
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  fabiomunez5@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-white/10 hover:border-purple-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 mb-4">
                  <PhoneIcon size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Phone
                </h3>
                <p className="text-gray-300">+255 718 945 911</p>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 border border-white/10 hover:border-pink-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-indigo-500/20 border border-white/10 mb-4">
                  <MapPinIcon size={24} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Location
                </h3>
                <p className="text-gray-300">Sakina, Arusha - Tanzania</p>
              </div>
            </div>
          </div>
          
          {/* Footer copyright */}
          <div className="mt-20 text-center text-gray-400 text-sm">
            <p> {new Date().getFullYear()} Fabian Prosper. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};