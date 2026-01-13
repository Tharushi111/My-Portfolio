import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook, FaSchool, FaCalendarAlt, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { FiTarget, FiAward } from 'react-icons/fi';

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const educationData = [
    {
      title: "Bachelor's Degree",
      subtitle: "BSc (Hons) in IT Specializing Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 – Present",
      icon: FaGraduationCap,
      color: "from-emerald-400 to-cyan-500",
      status: "In Progress",
      cgpa: "3.78",
      achievements: [
        "Maintained a CGPA of 3.78 out of 4.00",
        "MERN Stack, Java & Spring Boot Development",
        "Focus on Software Architecture & Problem Solving"
      ]
    },
    {
      title: "Secondary Education",
      subtitle: "GCE Advanced Level – Commerce Stream",
      institution: "Gnanodaya National College Kalutara",
      period: "2020 – 2022",
      icon: FaBook,
      color: "from-blue-500 to-indigo-600",
      status: "Completed",
      achievements: [
        "Subjects: Accounting, Business Management, Economics",
        "High proficiency in Financial Mathematics"
      ]
    },
    {
      title: "GCE Ordinary Level",
      subtitle: "GCE Ordinary Level",
      institution: "Gnanodaya National College Kalutara",
      period: "2019",
      icon: FaSchool,
      color: "from-purple-500 to-pink-500",
      status: "Completed",
      achievements: [
        "Excellent results in ICT and Mathematics",
        "Early foundation in computational thinking"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="education" className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-[#030712] overflow-hidden" ref={ref}>
      {/* Background Glows - Responsive */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-emerald-500/10 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/10 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full"
          >
            Academic Background
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
          >
            Education <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            A chronological look at my academic foundations and technical certifications.
          </motion.p>
        </motion.div>

        {/* Timeline/Grid Container - Responsive columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group h-full"
            >
              <div className="h-full relative z-10 p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-gray-900/40 border border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 shadow-lg sm:shadow-xl lg:shadow-2xl">
                
                {/* Top Badge & Date */}
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${edu.color} shadow-lg shadow-emerald-500/20`}>
                    <edu.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <span className="flex items-center gap-1 sm:gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <FaCalendarAlt className="text-emerald-400 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-xs">{edu.period}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {edu.title}
                    </h3>
                    <p className="text-emerald-400/90 font-medium mt-1 text-xs sm:text-sm uppercase tracking-wide line-clamp-2">
                      {edu.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-400 leading-relaxed font-medium text-sm sm:text-base">
                    {edu.institution}
                  </p>

                  {/* CGPA Card for Highlight */}
                  {edu.cgpa && (
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 mt-4 sm:mt-6">
                      <div className="p-1.5 sm:p-2 bg-emerald-400/20 rounded-md sm:rounded-lg flex-shrink-0">
                        <FaChartLine className="text-emerald-400 text-base sm:text-lg" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-[0.1em] truncate">Current Grade</p>
                        <p className="text-lg sm:text-xl font-bold text-white truncate">
                          {edu.cgpa} <span className="text-xs sm:text-sm text-gray-500">/ 4.00</span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <ul className="space-y-2 sm:space-y-3 pt-3 sm:pt-4">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 sm:mt-1 flex-shrink-0 text-xs sm:text-sm" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Status */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] ${edu.status === 'In Progress' ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {edu.status}
                  </span>
                  <FiAward className="text-gray-600 group-hover:text-emerald-400 transition-colors text-base sm:text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA / Quote - Responsive */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 sm:mt-16 lg:mt-20 flex justify-center"
        >
          <div className="relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gray-900/50 rounded-xl sm:rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-emerald-500/20 transition-all w-full max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <FiTarget className="text-emerald-400 animate-pulse text-sm sm:text-base" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Focused on <span className="text-white font-semibold">Continuous Learning</span> & Self-Development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;