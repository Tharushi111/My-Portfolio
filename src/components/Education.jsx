import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook, FaSchool, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  const sectionRef = useRef();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const educationData = [
    {
      title: "Bachelor's Degree",
      subtitle: "BSc (Hons) in IT Specializing Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 – Present",
      icon: FaGraduationCap,
      color: "from-emerald-500 to-cyan-500",
      iconColor: "text-emerald-400",
      achievements: [
        "Maintained a CGPA of 3.78 out of 4.00",
        "Comprehensive curriculum covering software development, databases, and web technologies",
        "Hands-on experience through individual and group projects",
        "Learning modern technologies: Java, MERN Stack, React, Spring Boot",
        "Strong focus on problem-solving and practical application"
      ]
    },
    {
      title: "Secondary Education",
      subtitle: "GCE Advanced Level (A/L) – Commerce Stream",
      institution: "Gnanodaya National College Kalutara",
      period: "2020 – 2022",
      icon: FaBook,
      color: "from-blue-500 to-purple-500",
      iconColor: "text-blue-400",
      achievements: [
        "Subjects: Accounting, Business Management, Economics",
        "Completed with good results in all subjects"
      ]
    },
    {
      title: "GCE Ordinary Level (O/L)",
      subtitle: "Secondary Education",
      institution: "Gnanodaya National College Kalutara",
      period: "2019",
      icon: FaSchool,
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400",
      achievements: [
        "Successfully completed with good results including ICT and Mathematics",
        "Early interest in programming and technology subjects"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      id="education"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6"
            variants={headerVariants}
          >
            <motion.div 
              className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                hidden: { width: 0 },
                visible: { width: 32, transition: { duration: 0.8, delay: 0.3 } }
              }}
            />
            <FaGraduationCap className="text-3xl text-emerald-400" />
            <motion.div 
              className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                hidden: { width: 0 },
                visible: { width: 32, transition: { duration: 0.8, delay: 0.4 } }
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={headerVariants}
          >
            Education <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Journey</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            My academic path that shaped my technical expertise and problem-solving skills
          </motion.p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
                {/* Card Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${edu.color}/20`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <edu.icon className={`text-2xl ${edu.iconColor}`} />
                    </motion.div>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 bg-gray-800/50 px-3 py 1.5 rounded-full">
                      <FaCalendarAlt className="text-sm" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-lg font-semibold text-emerald-400 mb-1">{edu.subtitle}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>

                {/* CGPA for Bachelor's */}
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 0.4, duration: 0.5 }
                      }
                    }}
                    className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaChartLine className="text-emerald-400 text-xl" />
                        <div>
                          <p className="text-white font-semibold">Current CGPA</p>
                          <p className="text-sm text-gray-400">Out of 4.00 scale</p>
                        </div>
                      </div>
                      <motion.div 
                        className="text-3xl font-bold text-emerald-400"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { 
                            opacity: 1,
                            transition: { delay: 0.6, duration: 0.8 }
                          }
                        }}
                      >
                        3.78
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Achievements List */}
                <div className="space-y-3 mb-6">
                  {edu.achievements.map((achievement, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.2 + (i * 0.1) }
                        }
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        animate={{ 
                          opacity: [1, 0.5, 1],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-xs text-gray-400">Completed</span>
                    </div>
                    <div className="text-xs text-gray-400">{index === 0 ? "In Progress" : "Completed"}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.6, duration: 0.5 }
            }
          }}
          className="mt-12"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
              <FiTarget className="text-emerald-400 text-xl" />
              <p className="text-gray-300">
                Continuously learning through online courses, coding challenges, and personal projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;