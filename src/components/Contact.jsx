import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiX, FiMessageSquare, FiUser, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: '', // 'success' or 'error'
    title: '',
    message: ''
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (type, title, message) => {
    setToast({ show: true, type, title, message });

    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 5000);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Netlify form submission
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => {
        showToast(
          'success',
          'Message Sent Successfully! ',
          "Your message has been delivered. I'll get back to you within 24 hours."
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Form Submission Error:', error);
        showToast(
          'error',
          'Message Failed to Send',
          'There was an error sending your message. Please try again or email me directly.'
        );
      })
      .finally(() => setIsLoading(false));
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

  const socialLinks = [
    { icon: FaWhatsapp, href: "https://wa.me/94743572773", label: "WhatsApp", color: "from-green-500 to-emerald-600", bgColor: "bg-green-500/10", textColor: "text-green-400" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/tharushi-paranagama-a0b657355", label: "LinkedIn", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-500/10", textColor: "text-blue-400" },
    { icon: FaGithub, href: "https://github.com/Tharushi111", label: "GitHub", color: "from-gray-800 to-gray-900", bgColor: "bg-gray-500/10", textColor: "text-gray-400" },
    { icon: FiMail, href: "mailto:tharushiparanagama1@gmail.com", label: "Email", color: "from-red-500 to-red-700", bgColor: "bg-red-500/10", textColor: "text-red-400" }
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Background Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/10 rounded-full hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Glow Effects - Reduced on mobile */}
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 rounded-full blur-2xl md:blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/5 rounded-full blur-2xl md:blur-3xl"
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

      {/* Toast Notification - Mobile responsive */}
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:max-w-md px-4"
        >
          <div
            className={`rounded-xl md:rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl ${
              toast.type === 'success'
                ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/10 border border-emerald-500/30'
                : 'bg-gradient-to-r from-red-500/20 to-orange-500/10 border border-red-500/30'
            }`}
          >
            <div className="p-4 md:p-5 flex items-start">
              <div className="flex-shrink-0">
                {toast.type === 'success' ? (
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg md:rounded-xl flex items-center justify-center">
                    <FiCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center">
                    <FiAlertCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="ml-3 md:ml-4 flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3
                    className={`text-base md:text-lg font-bold truncate ${
                      toast.type === 'success' ? 'text-emerald-300' : 'text-red-300'
                    }`}
                  >
                    {toast.title}
                  </h3>
                  <motion.button
                    onClick={() => setToast({ ...toast, show: false })}
                    className="ml-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="w-4 h-4" />
                  </motion.button>
                </div>
                <p
                  className={`mt-1 text-xs md:text-sm ${
                    toast.type === 'success' ? 'text-emerald-400/80' : 'text-red-400/80'
                  } line-clamp-2`}
                >
                  {toast.message}
                </p>

                {/* Progress bar */}
                <div className="mt-2 md:mt-3">
                  <div
                    className={`h-1 w-full ${
                      toast.type === 'success' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                    } rounded-full overflow-hidden`}
                  >
                    <motion.div
                      className={`h-full ${
                        toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header - Responsive text sizes */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 md:mb-6"
            variants={itemVariants}
          >
            <div className="h-1 w-6 md:w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            <FaRegEnvelope className="text-2xl md:text-3xl text-emerald-400" />
            <div className="h-1 w-6 md:w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
            variants={itemVariants}
          >
            Get In <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 bg-clip-text">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            Let's create something amazing together. Drop me a message and let's bring your ideas to life! 
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-emerald-500/20 shadow-xl md:shadow-2xl shadow-black/30"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-4 md:mb-6"
                variants={itemVariants}
              >
                <div className="p-2 md:p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg md:rounded-xl">
                  <FiMessageSquare className="text-xl md:text-2xl text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Let's Build the Future Together! 
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg"
                variants={itemVariants}
              >
                Whether you have a groundbreaking project idea, need technical expertise,
                or just want to connect over tech. I'm always excited to explore new possibilities.
                Feel free to reach out through any social media below!
              </motion.p>

              <div className="space-y-4 md:space-y-6">
                {/* Contact Items */}
                {[
                  { icon: FiMail, title: "Email", content: "tharushiparanagama1@gmail.com", href: "mailto:tharushiparanagama1@gmail.com", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: FiPhone, title: "Phone", content: "+94 74 357 2773", href: "tel:+94743572773", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { icon: FiMapPin, title: "Location", content: "Malabe, Sri Lanka", color: "text-purple-400", bg: "bg-purple-500/10" }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${contact.bg} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <contact.icon className={`text-lg md:text-2xl ${contact.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-1 text-sm md:text-base group-hover:text-emerald-400 transition-colors truncate">
                        {contact.title}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors truncate">
                        {contact.content}
                      </p>
                    </div>
                    <div className="text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                      <FiGlobe className="text-lg md:text-xl" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div 
                className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-700"
                variants={itemVariants}
              >
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Connect With Me</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative p-3 md:p-4 rounded-lg md:rounded-xl ${social.bgColor} border border-gray-700 hover:border-${social.textColor.split('-')[1]}-500/50 transition-all duration-300`}
                    >
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <div className={`p-1 md:p-2 rounded-md md:rounded-lg ${social.bgColor}`}>
                          <social.icon className={`text-base md:text-xl ${social.textColor}`} />
                        </div>
                        <span className={`text-xs md:text-sm font-medium ${social.textColor} text-center`}>{social.label}</span>
                      </div>
                      <div className={`absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Contact Form */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-emerald-500/20 shadow-xl md:shadow-2xl shadow-black/30"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="mb-6 md:mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg md:rounded-xl">
                  <FiUser className="text-xl md:text-2xl text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Send Me a Message</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base">I typically respond within 24 hours</p>
            </motion.div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  className="group"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2 text-white mb-2 md:mb-3 font-semibold text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500"></span>
                    <span>Full Name</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:bg-gray-800 transition-all duration-300 placeholder-gray-400 shadow-inner text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2 text-white mb-2 md:mb-3 font-semibold text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500"></span>
                    <span>Email Address</span>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:bg-gray-800 transition-all duration-300 placeholder-gray-400 shadow-inner text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="group"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2 text-white mb-2 md:mb-3 font-semibold text-sm md:text-base">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></span>
                  <span>Subject</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:bg-gray-800 transition-all duration-300 placeholder-gray-400 shadow-inner text-sm md:text-base"
                    placeholder="Let's work together!"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>

              <motion.div 
                className="group"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2 text-white mb-2 md:mb-3 font-semibold text-sm md:text-base">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></span>
                  <span>Message</span>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:bg-gray-800 transition-all duration-300 placeholder-gray-400 shadow-inner text-sm md:text-base resize-none"
                    placeholder="Hello! I'd like to discuss a potential project with you..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-3 md:py-4 lg:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm md:text-base">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} className="md:w-6 md:h-6" />
                    <span className="text-sm md:text-base">Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                      className="hidden md:inline"
                    >
                      →
                    </motion.span>
                  </>
                )}
              </motion.button>

              <motion.p 
                className="text-center text-gray-400 text-xs md:text-sm mt-4 md:mt-6"
                variants={itemVariants}
              >
                Your information is secure and will never be shared
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;