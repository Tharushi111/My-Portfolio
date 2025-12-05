// src/components/About.jsx
import React from 'react';
import { FiCode, FiLayout, FiMonitor } from 'react-icons/fi';
import aboutImage from '../assets/aboutImage.jpeg'; 

const About = () => {
  const skills = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies and frameworks.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      icon: FiLayout,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with clean code and best practices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      icon: FiMonitor,
      title: 'UI/UX Engineering',
      description: 'Designing user-centered interfaces with focus on usability and aesthetic appeal.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate IT undergraduate with a drive for creating digital solutions that make an impact.
          </p>
        </div>

        {/* Main Content - Updated layout with image */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Text Content - Now takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Hello! I'm Tharushi Paranagama
            </h3>
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm a 3rd year undergraduate at Sri Lanka Institute of Information Technology (SLIIT), 
                pursuing a Bachelor's degree in Information Technology. My journey in tech started with 
                curiosity and has evolved into a passion for creating meaningful digital experiences.
              </p>
              <p>
                I specialize in full-stack development with a keen eye for UI/UX design. I believe 
                that great applications are built at the intersection of functionality and aesthetics.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in web development.
              </p>
            </div>

            {/* Education */}
            <div className="p-6 bg-gray-900 rounded-lg border-l-4 border-emerald-500">
              <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
              <p className="text-emerald-400 font-medium">BSc in Information Technology</p>
              <p className="text-gray-400">Sri Lanka Institute of Information Technology (SLIIT), Malabe</p>
              <p className="text-gray-400">2023 - Present | 3rd Year Undergraduate</p>
            </div>
          </div>

          {/* Image Section - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden border-4 border-emerald-500/30 shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Tharushi Paranagama" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-emerald-400 rounded-tr-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-green-400 rounded-bl-2xl opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Skills Grid - Moved below the main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg mr-4 group-hover:bg-emerald-500/20 transition-colors">
                  <skill.icon className="text-2xl text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-white">{skill.title}</h4>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300">Currently learning: Advanced Java and improving my ui/ux design skills</span>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;