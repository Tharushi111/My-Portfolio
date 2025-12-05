// src/components/About.jsx
import React from 'react';
import { 
  FiCode, 
  FiLayout, 
  FiMonitor, 
  FiTool, 
  FiDatabase, 
  FiCloud,
  FiTrendingUp,
  FiAward
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
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiTypescript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import aboutImage from '../assets/aboutImage.jpeg';

const About = () => {
  const skills = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies and frameworks.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase']
    },
    {
      icon: FiLayout,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with clean code and best practices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React']
    },
    {
      icon: FiMonitor,
      title: 'UI/UX Engineering',
      description: 'Designing user-centered interfaces with focus on usability and aesthetic appeal.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing']
    },
    {
      icon: FiDatabase,
      title: 'Database Management',
      description: 'Designing and managing efficient database systems for scalable applications.',
      technologies: ['MongoDB', 'MySQL', 'Firestore', 'Database Design']
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on cloud platforms with CI/CD pipelines.',
      technologies: ['Firebase', 'Git', 'GitHub', 'Netlify', 'Vercel']
    },
    {
      icon: FiTool,
      title: 'Tools & Technologies',
      description: 'Working with modern development tools and frameworks to build efficient solutions.',
      technologies: ['VS Code', 'Postman', 'Chrome DevTools', 'NPM/Yarn']
    }
  ];

  const programmingLanguages = [
    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500', level: 'Advanced' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500', level: 'Advanced' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', level: 'Advanced' },
    { icon: SiReact, name: 'React', color: 'text-cyan-500', level: 'Advanced' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500', level: 'Intermediate' },
    { icon: FaJava, name: 'Java', color: 'text-red-500', level: 'Intermediate' },
    { icon: SiPython, name: 'Python', color: 'text-blue-400', level: 'Intermediate' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600', level: 'Beginner' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400', level: 'Intermediate' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-300', level: 'Intermediate' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-400', level: 'Advanced' },
    { icon: SiGit, name: 'Git', color: 'text-orange-600', level: 'Intermediate' }
  ];

  const achievements = [
    { number: '5+', label: 'Projects Completed', icon: FiTrendingUp },
    { number: '7+', label: 'Technologies Mastered', icon: FiCode }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl mb-6 shadow-lg shadow-emerald-500/10">
            <FiCode className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate IT Undergraduate & Full-Stack Developer crafting digital experiences that inspire and innovate ✨
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Text Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-12 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
                <h3 className="text-3xl font-bold text-white">
                  Hello! I'm <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Tharushi Paranagama</span>
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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
            </div>

            {/* Education & Achievements */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                  <FiAward className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Education & Achievements</h4>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-cyan-500/10">
                  <p className="text-emerald-400 font-bold text-lg">🎓 BSc in Information Technology</p>
                  <p className="text-gray-400">SLIIT, Malabe</p>
                  <p className="text-gray-400 text-sm mt-1">2023 - Present | 3rd Year </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-emerald-500/10 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex justify-center mb-2">
                        <item.icon className={`w-8 h-8 ${
                          index === 0 ? 'text-emerald-400' : 'text-cyan-400'
                        }`} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{item.number}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden border-4 border-transparent bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-500 p-1 shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Tharushi Paranagama" 
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Languages</span> & Technologies
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <lang.icon className={`w-10 h-10 mb-3 ${lang.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-white text-sm font-medium text-center">{lang.name}</span>
                  <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                    lang.level === 'Advanced' ? 'bg-emerald-500/20 text-emerald-400' :
                    lang.level === 'Intermediate' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;