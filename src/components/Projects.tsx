import React from 'react';
import { ArrowRight, Zap, Target, Award, Star } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  featured?: boolean;
};

type Category = {
  name: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    name: 'Core Machine Learning & Computer Vision',
    projects: [
      {
        title: 'I-Masking – Aadhaar Compliance Automation',
        description:
          'Built a large-scale computer vision system to automatically detect and mask sensitive Aadhaar information in document images for regulatory compliance. Implemented a YOLO-based object detection pipeline and high-throughput image processing workflow using Python and OpenCV. Processed over 120 million images in production. Developed REST APIs using Django and stored audit metadata in MongoDB.',
        technologies: ['Python', 'YOLO', 'OpenCV', 'Django REST Framework', 'MongoDB'],
        highlights: ['Featured Project', '120M+ Images Processed', 'Production Scale'],
        featured: true
      },
      {
        title: 'I-Vision – Invoice Intelligence System',
        description:
          'Developed an end-to-end machine learning pipeline to automate invoice digitization and structured data extraction. Implemented YOLO and FastRCNN for layout detection and SpaCy for entity extraction. Designed annotation workflows and deployed using Django on IIS. Received Innovation of the Month award (2024).',
        technologies: ['Python', 'YOLO', 'FastRCNN', 'SpaCy', 'Django'],
        highlights: ['Innovation of the Month (2024)']
      },
      {
        title: 'OVD – KYC Document Intelligence (Vision-Language Model)',
        description:
          'Built an automated document intelligence system using Vision-Language Model (Qwen 2.5-VL 3B) integrated via Ollama. Converted unstructured document images into structured JSON outputs for banking workflows.',
        technologies: ['Python', 'Django', 'Ollama', 'Vision-Language Models']
      }
    ]
  },
  {
    name: 'Classical Machine Learning',
    projects: [
      {
        title: 'Handwritten Character Recognition System',
        description:
          'Developed an SVM-based classification model trained on 500,000+ handwritten character samples. Applied preprocessing and feature extraction techniques and deployed the model for real-time inference.',
        technologies: ['Python', 'Scikit-learn', 'SVM'],
        highlights: ['500,000+ Samples', 'Real-time Inference']
      }
    ]
  },
  {
    name: 'IoT & Systems Engineering',
    projects: [
      {
        title: 'Baby Sensor – IoT Health Monitoring',
        description:
          'Developed IoT-based real-time monitoring system for newborn health parameters. Built backend services and integrated MongoDB with GCP for continuous data streaming.',
        technologies: ['Node.js', 'MongoDB', 'GCP', 'Firebase']
      },
      {
        title: 'TAP – IoT-Based Animal Monitoring',
        description:
          'Designed animal health monitoring system using Raspberry Pi and thermal cameras. Built backend services and deployed using AWS and Docker.',
        technologies: ['Raspberry Pi', 'Node.js', 'AWS', 'Docker']
      }
    ]
  }
];

const Projects: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Featured Projects & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-full w-fit mx-auto mb-4 animate-bounce-slow`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 animate-count-up">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{category.name}</h3>
                <div className="grid gap-6">
                  {category.projects.map((project) => (
                    <article
                      key={project.title}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800">{project.title}</h4>
                        {project.featured && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold whitespace-nowrap">
                            <Star size={16} /> Featured
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>

                      {project.highlights && (
                        <div className="mb-5">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Highlights</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Portfolio</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With 15+ successfully completed projects and 10+ proof of concepts, I&apos;ve consistently
                delivered innovative machine learning and systems solutions with measurable business impact.
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
