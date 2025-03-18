import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <MailIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Email
              </h3>
              <a href="mailto:fabiomunez5@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                fabiomunez5@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center p-8 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <PhoneIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Phone
              </h3>
              <p className="text-gray-600">+255 718 945 911</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <MapPinIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Location
              </h3>
              <p className="text-gray-600">Sakina, Arusha - Tanzania</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};