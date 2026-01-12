import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myPhoto from '../assets/myPhoto.jpeg';
import myCV from '../assets/Tharushi_CV.pdf';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiDownload, 
  FiChevronRight,
  FiCalendar,
  FiBook,
  FiMapPin
} from 'react-icons/fi';
import { 
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.8,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }),
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const techIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 overflow-hidden pt-16"
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Background Glow */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Introduction */}
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <motion.div 
                  className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.span 
                  className="text-emerald-400 font-medium tracking-wider"
                  variants={itemVariants}
                >
                  HELLO, I'M
                </motion.span>
              </div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
                variants={slideInLeft}
              >
                <span className="text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 bg-clip-text">
                  Tharushi
                </span>
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Paranagama
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Title */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-3"
                variants={itemVariants}
              >
                3rd Year IT Undergraduate
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Passionate Full Stack Developer specializing in creating innovative digital solutions 
                with modern web technologies. Currently pursuing BSc in Information Technology at SLIIT.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              variants={containerVariants}
            >
              {/* CV Download Button */}
              <motion.a
                href={myCV}
                download="Tharushi_Paranagama_CV.pdf"
                className="group relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <FiDownload className="text-lg relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              {/* Get In Touch Button */}
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-gray-800 to-gray-900 text-emerald-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/50 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <FiChevronRight className="text-xl" />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              {[
                { 
                  icon: FiGithub, 
                  href: "https://github.com/Tharushi111", 
                  label: "GitHub",
                  color: "from-gray-800 to-gray-900",
                  iconColor: "text-gray-300"
                },
                { 
                  icon: FiLinkedin, 
                  href: "https://www.linkedin.com/in/tharushi-paranagama-a0b657355", 
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800",
                  iconColor: "text-blue-300"
                },
                { 
                  icon: FiMail, 
                  href: "mailto:tharushiparanagama1@gmail.com", 
                  label: "Email",
                  color: "from-red-500 to-red-700",
                  iconColor: "text-red-300"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-4 rounded-xl bg-gradient-to-br ${social.color} backdrop-blur-sm border border-emerald-500/20 transition-all duration-300 overflow-hidden`}
                  aria-label={social.label}
                  custom={index}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <social.icon className={`text-xl ${social.iconColor} group-hover:text-white transition-colors`} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      {social.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div 
            className="lg:col-span-5"
            variants={slideInRight}
            initial="hidden"
            animate={controls}
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Floating background elements */}
              <motion.div
                className="absolute w-[420px] h-[420px]"
                variants={floatAnimation}
                animate="float"
              >
                <motion.div
                  className="absolute bottom-10 right-10 w-4 h-4 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-full blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
              </motion.div>

              {/* Main Image Container */}
              <motion.div
                className="relative w-[380px] h-[380px]"
                variants={floatAnimation}
                animate="float"
                transition={{ duration: 3 }}
              >
                {/* Image */}
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  onAnimationComplete={() => setImageLoaded(true)}
                >
                  <img 
                    src={myPhoto} 
                    alt="Tharushi Paranagama" 
                    className="w-full h-full object-cover"
                  />
                  
                 
                </motion.div>

                
                
                <motion.div
                  className="absolute -bottom-3 -left-3 w-8 h-8"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full border-b-2 border-l-2 border-cyan-400 rounded-bl-xl"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </motion.section>
  );
};

export default Hero;