import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const controls = useAnimation();
  const [countedProjects, setCountedProjects] = useState(0);
  const [countedTechnologies, setCountedTechnologies] = useState(0);
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      if (!countingStarted) {
        setCountingStarted(true);
        startCounting();
      }
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, countingStarted]); // Added countingStarted to dependency array

  const startCounting = () => {
    // Animate projects count (5+)
    let projectsCount = 0;
    const projectsInterval = setInterval(() => {
      if (projectsCount < 5) {
        projectsCount++;
        setCountedProjects(projectsCount);
      } else {
        clearInterval(projectsInterval);
      }
    }, 100);

    // Animate technologies count (7+)
    let techCount = 0;
    const techInterval = setInterval(() => {
      if (techCount < 7) {
        techCount++;
        setCountedTechnologies(techCount);
      } else {
        clearInterval(techInterval);
      }
    }, 80);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const techIconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.2
      }
    }
  };

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
    { number: '5+', label: 'Projects Completed', icon: FiCode, desc: 'Web Applications', count: countedProjects },
    { number: '7+', label: 'Technologies', icon: FiTrendingUp, desc: 'Mastered', count: countedTechnologies },
    { number: '3rd', label: 'Year Student', icon: FaUserGraduate, desc: 'SLIIT', count: null },
    { number: 'BSc', label: 'IT Degree', icon: FiAward, desc: 'Information Technology', count: null }
  ];

  const expertiseAreas = [
    { title: 'Web Development', desc: 'Building responsive and interactive websites', icon: FiCode },
    { title: 'UI/UX Design', desc: 'Creating user-friendly interfaces', icon: FiTarget },
    { title: 'Problem Solving', desc: 'Analyzing and solving complex technical challenges', icon: FiTool }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <motion.div 
              className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                hidden: { width: 0 },
                visible: { width: 32, transition: { duration: 0.8, delay: 0.3 } }
              }}
            />
            <motion.span 
              className="text-emerald-400 font-medium tracking-wider"
              variants={itemVariants}
            >
              ABOUT ME
            </motion.span>
            <motion.div 
              className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                hidden: { width: 0 },
                visible: { width: 32, transition: { duration: 0.8, delay: 0.4 } }
              }}
            />
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Get to Know <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Learn about my journey, skills, and passion for technology
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Column 1: Image with Education */}
          <div className="space-y-8">
            {/* Profile Image - SIMPLIFIED */}
            <motion.div 
              className="relative group"
              variants={slideInLeft}
            >
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={aboutImage} 
                  alt="Tharushi Paranagama" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              
              {/* Removed rotating decorative elements */}
            </motion.div>

            {/* Education Card */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/20 backdrop-blur-sm"
              variants={cardVariants}
              custom={0}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 bg-emerald-500/10 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <FiBookOpen className="text-2xl text-emerald-400" />
                </motion.div>
                <h4 className="text-xl font-bold text-white">Education</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-emerald-400">SLIIT Malabe</h5>
                    <p className="text-gray-300">BSc in Information Technology</p>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                  </div>
                  <motion.span 
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    3rd Year
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Introduction & Achievements */}
          <div className="space-y-8 lg:col-span-2">
            {/* Introduction */}
            <motion.div 
              className="space-y-6"
              variants={slideInRight}
            >
              <h3 className="text-3xl font-bold text-white">
                Hello, I'm <span className="text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text">Tharushi Paranagama</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  I'm a passionate <span className="text-emerald-400 font-semibold">3rd year IT undergraduate</span> at 
                  Sri Lanka Institute of Information Technology (SLIIT), currently pursuing my 
                  <span className="text-cyan-400 font-semibold"> Bachelor's degree in Information Technology</span>.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  My journey in technology began with curiosity and has evolved into a deep passion 
                  for creating <span className="text-white font-medium">innovative digital solutions</span>. 
                  I specialize in developing modern web applications with clean, efficient code 
                  and user-centered design principles.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  projects, or learning about the latest trends in web development and UI/UX design.
                </motion.p>
              </div>
            </motion.div>

            {/* Expertise Areas with Professional Animation */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <area.icon className="text-xl text-emerald-400" />
                    </motion.div>
                    <h4 className="font-bold text-white">{area.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400">{area.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement Stats with Counting Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 rounded-xl bg-gray-800/30 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1 flex justify-center items-center">
                      {item.count !== null ? (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.count}+
                        </motion.span>
                      ) : (
                        item.number
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div 
          className="space-y-12"
          variants={fadeInUp}
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              My <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Tech Stack</span>
            </motion.h3>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Technologies and programming languages I use to build modern web applications
            </motion.p>
          </div>

          {/* Skills Grid with Professional Animation */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={techIconVariants}
                whileHover="hover"
                className="group relative p-4 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  {/* Skill Icon */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <lang.icon className={`text-4xl ${lang.color}`} />
                    </motion.div>
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
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center pt-8"
            variants={fadeInUp}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <motion.a 
                href="#projects" 
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a 
                href="https://github.com/Tharushi111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-800 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="text-lg" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;