// src/components/About.jsx
import React from 'react';
import {
  FiCode,
  FiTrendingUp,
  FiBookOpen,
  FiAward,
  FiTool,
  FiTarget
} from 'react-icons/fi';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiGithub
} from 'react-icons/si';

import { FaJava, FaUserGraduate } from 'react-icons/fa';
import aboutImage from '../assets/aboutImage.jpeg';

const About = () => {
  const programmingLanguages = [
    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500', level: 'Advanced', category: 'Frontend' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500', level: 'Advanced', category: 'Frontend' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', level: 'Advanced', category: 'Frontend' },
    { icon: SiReact, name: 'React', color: 'text-cyan-500', level: 'Advanced', category: 'Frontend' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-400', level: 'Advanced', category: 'Frontend' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500', level: 'Intermediate', category: 'Backend' },
    { icon: FaJava, name: 'Java', color: 'text-red-500', level: 'Intermediate', category: 'Backend' },
    { icon: SiPython, name: 'Python', color: 'text-blue-400', level: 'Intermediate', category: 'Backend' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600', level: 'Beginner', category: 'Frontend' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400', level: 'Intermediate', category: 'Database' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-300', level: 'Intermediate', category: 'Database' },
    { icon: SiGit, name: 'Git', color: 'text-orange-600', level: 'Intermediate', category: 'Tools' }
  ];

  const achievements = [
    { number: '5+', label: 'Projects Completed', icon: FiCode, desc: 'Web Applications' },
    { number: '7+', label: 'Technologies', icon: FiTrendingUp, desc: 'Mastered' },
    { number: '3rd', label: 'Year Student', icon: FaUserGraduate, desc: 'SLIIT' },
    { number: 'BSc', label: 'IT Degree', icon: FiAward, desc: 'Information Technology' }
  ];

  const expertiseAreas = [
    { title: 'Web Development', desc: 'Building responsive and interactive websites', icon: FiCode },
    { title: 'UI/UX Design', desc: 'Creating user-friendly interfaces', icon: FiTarget },
    { title: 'Problem Solving', desc: 'Analyzing and solving complex technical challenges', icon: FiTool }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            <span className="text-emerald-400 font-medium tracking-wider">ABOUT ME</span>
            <div className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get to Know <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn about my journey, skills, and passion for technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Column 1: Image with Education */}
          <div className="space-y-8">
            {/* Profile Image - PROPERLY DISPLAYED */}
            <div className="relative group">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30">
                <img 
                  src={aboutImage} 
                  alt="Tharushi Paranagama" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-emerald-400 rounded-tl-xl opacity-60"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-cyan-400 rounded-br-xl opacity-60"></div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <FiBookOpen className="text-2xl text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Education</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-emerald-400">SLIIT Malabe</h5>
                    <p className="text-gray-300">BSc in Information Technology</p>
                    <p className="text-gray-400 text-sm">2022 - Present</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">
                    3rd Year
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Introduction & Achievements */}
          <div className="space-y-8 lg:col-span-2">
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hello, I'm <span className="text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text">Tharushi Paranagama</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate <span className="text-emerald-400 font-semibold">3rd year IT undergraduate</span> at 
                  Sri Lanka Institute of Information Technology (SLIIT), currently pursuing my 
                  <span className="text-cyan-400 font-semibold"> Bachelor's degree in Information Technology</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in technology began with curiosity and has evolved into a deep passion 
                  for creating <span className="text-white font-medium">innovative digital solutions</span>. 
                  I specialize in developing modern web applications with clean, efficient code 
                  and user-centered design principles.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  projects, or learning about the latest trends in web development and UI/UX design.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="grid md:grid-cols-3 gap-4">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <area.icon className="text-xl text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-white">{area.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400">{area.desc}</p>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-gray-800/30 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{item.number}</div>
                    <div className="text-sm font-medium text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Tech Stack</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and programming languages I use to build modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  {/* Skill Icon */}
                  <div className="relative">
                    <lang.icon className={`text-4xl ${lang.color} transition-transform duration-300 group-hover:scale-110`} />
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  
                  {/* Skill Info */}
                  <div className="text-center space-y-1">
                    <p className="font-medium text-white text-sm">{lang.name}</p>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-400">{lang.level}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${lang.category === 'Frontend' ? 'bg-blue-500/10 text-blue-400' : 
                                        lang.category === 'Backend' ? 'bg-green-500/10 text-green-400' :
                                        lang.category === 'Database' ? 'bg-purple-500/10 text-purple-400' :
                                        'bg-orange-500/10 text-orange-400'}`}>
                        {lang.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                View My Projects
              </a>
              <a 
                href="https://github.com/Tharushi111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-800 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 transition-all duration-300 hover:scale-105"
              >
                <SiGithub className="text-lg" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;