import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Background</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Science graduate with a passion for technology and innovation. 
                My journey in tech has been marked by continuous learning and hands-on experience in 
                various domains including machine learning, web development, and database management.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I thrive on solving complex problems and building solutions that make a real impact. 
                My experience spans from developing machine learning models to creating full-stack 
                web applications using modern technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Bachelor of Technology</h4>
                  <p className="text-blue-600 font-medium">Computer Science</p>
                  <div className="flex items-center space-x-4 mt-2 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;