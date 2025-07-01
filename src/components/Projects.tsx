import React from 'react';
import { Eye, Github, ArrowRight, Zap, Target, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Handwritten Recognition System',
      description: 'A comprehensive machine learning project that recognizes handwritten text using Support Vector Machine (SVM) algorithm implemented in Python. The system includes advanced preprocessing techniques, feature extraction using HOG descriptors, and achieves 94% accuracy on test datasets.',
      technologies: ['Python', 'SVM', 'OpenCV', 'Scikit-learn', 'NumPy', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      highlights: ['94% Accuracy', 'Real-time Processing', 'Production Ready']
    }
  ];

  const stats = [
    {
      icon: <Target size={24} />,
      number: '15+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Zap size={24} />,
      number: '10+',
      label: 'POCs Delivered',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award size={24} />,
      number: '100%',
      label: 'Success Rate',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Featured Projects & Achievements
          </h2>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-full w-fit mx-auto mb-4 animate-bounce-slow`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 animate-count-up">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <span key={highlightIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium animate-pulse">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 group"
                      >
                        <Github size={18} className="group-hover:animate-spin" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 group"
                      >
                        <Eye size={18} className="group-hover:animate-bounce" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Portfolio</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With 15+ successfully completed projects and 10+ proof of concepts, I've consistently 
                delivered innovative machine learning solutions that drive business value and technical excellence.
              </p>
            </div>
            <a 
              href="#"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>View Complete Portfolio</span>
              <ArrowRight size={20} className="group-hover:animate-bounce-x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;