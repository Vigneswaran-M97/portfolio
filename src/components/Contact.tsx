import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            Let's Connect & Collaborate
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative ML projects, 
                or share insights about machine learning and AI. Let's connect and explore how we can 
                work together to create impactful solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-medium">vigneswaran.ml@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                    <Phone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
                    <MapPin size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-medium">Available for Remote Work</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-110 group">
                    <Github size={20} className="group-hover:animate-spin" />
                  </a>
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 group">
                    <Linkedin size={20} className="group-hover:animate-bounce" />
                  </a>
                  <a href="#" className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 group">
                    <Mail size={20} className="group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100 animate-fade-in-up animation-delay-300">
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle size={24} className="text-blue-600 animate-bounce-slow" />
                <h3 className="text-2xl font-semibold text-gray-800">Send a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 group shadow-lg hover:shadow-xl"
                >
                  <Send size={20} className="group-hover:animate-bounce" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;