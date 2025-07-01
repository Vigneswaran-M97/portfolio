import React from 'react';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: '2nd Place Winner',
      description: 'Technical Competition',
      year: '2019',
      icon: <Trophy size={32} />,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Best Employee Award #1',
      description: 'Outstanding Performance Recognition',
      year: '2023',
      icon: <Award size={32} />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Best Employee Award #2',
      description: 'Excellence in ML Engineering',
      year: '2023',
      icon: <Medal size={32} />,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Best Employee Award #3',
      description: 'Innovation & Leadership',
      year: '2024',
      icon: <Star size={32} />,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Participation Award #1',
      description: 'Technical Event Participation',
      year: '2019',
      icon: <Medal size={32} />,
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Participation Award #2',
      description: 'Technical Event Participation',
      year: '2019',
      icon: <Star size={32} />,
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className={`${award.bgColor} p-8 rounded-2xl border-2 ${award.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105 text-center animate-fade-in-up group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${award.color} p-4 rounded-full w-fit mx-auto mb-6 group-hover:animate-spin-slow transition-transform duration-300`}>
                  <div className="text-white">
                    {award.icon}
                  </div>
                </div>
                <div className="text-sm text-gray-500 font-medium mb-2">{award.year}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition Summary</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Consistently recognized for excellence in machine learning engineering, technical innovation, 
                and outstanding performance. These awards reflect my commitment to delivering high-quality 
                solutions and contributing to team success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;