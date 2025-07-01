import React, { useState } from 'react';
import { Code, Database, Cloud, Brain, Server, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'blue',
      proficiency: [95, 85, 80, 90]
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: ['React', 'Node.js', 'HTML/CSS', 'RESTful APIs'],
      color: 'green',
      proficiency: [85, 90, 85, 88]
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'SQL Server', 'Database Design'],
      color: 'purple',
      proficiency: [85, 90, 85, 88]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      skills: ['AWS', 'Cloud Computing', 'Server Management', 'MLOps'],
      color: 'orange',
      proficiency: [90, 85, 80, 85]
    },
    {
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      skills: ['YOLO', 'SVM', 'Computer Vision', 'Deep Learning'],
      color: 'red',
      proficiency: [95, 90, 92, 88]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['API Development', 'Database Integration', 'System Architecture', 'Microservices'],
      color: 'indigo',
      proficiency: [88, 90, 85, 82]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-200 bg-blue-50',
      green: 'from-green-500 to-green-600 border-green-200 bg-green-50',
      purple: 'from-purple-500 to-purple-600 border-purple-200 bg-purple-50',
      orange: 'from-orange-500 to-orange-600 border-orange-200 bg-orange-50',
      red: 'from-red-500 to-red-600 border-red-200 bg-red-50',
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-200 bg-indigo-50'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`${getColorClasses(category.color)} p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up group`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} p-3 rounded-full w-fit mb-4 group-hover:animate-bounce-slow transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-full animate-pulse`}></div>
                          <span className="text-gray-700 font-medium">{skill}</span>
                        </div>
                        <span className="text-xs text-gray-500">{category.proficiency[skillIndex]}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredSkill === index ? `${category.proficiency[skillIndex]}%` : '0%' 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;