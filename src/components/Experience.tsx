import React from 'react';
import { Briefcase, TrendingUp, Award, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    {
      icon: <Target size={32} />,
      number: '15+',
      label: 'Projects Completed',
      description: 'Successfully delivered complex ML solutions',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <TrendingUp size={32} />,
      number: '10+',
      label: 'POCs Delivered',
      description: 'Proof of concepts that drove business decisions',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Award size={32} />,
      number: '3',
      label: 'Best Employee Awards',
      description: 'Recognition for outstanding performance',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Professional Experience
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100 mb-12 animate-fade-in-up animation-delay-300">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-4 rounded-full animate-pulse">
                <Briefcase size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Machine Learning Engineer</h3>
                <p className="text-blue-600 font-semibold mb-4">Current Role</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Leading machine learning initiatives and developing AI-powered solutions that drive business value. 
                  Specializing in end-to-end ML pipeline development, from data preprocessing to model deployment 
                  and monitoring in production environments.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ML Model Development</li>
                      <li>• Data Pipeline Architecture</li>
                      <li>• Production Deployment</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Python & ML Libraries</li>
                      <li>• AWS Cloud Services</li>
                      <li>• Database Management</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Impact</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 15+ Projects Delivered</li>
                      <li>• 10+ POCs Completed</li>
                      <li>• 3 Excellence Awards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`${achievement.bgColor} p-8 rounded-2xl border-2 ${achievement.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105 text-center animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${achievement.color} p-4 rounded-full w-fit mx-auto mb-6 animate-bounce-slow`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 animate-count-up">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{achievement.label}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;