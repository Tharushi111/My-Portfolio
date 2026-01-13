import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp, FiMapPin, FiPhone} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Tharushi111', label: 'GitHub', color: 'text-gray-300', bg: 'bg-gray-800/50', hover: 'hover:bg-gray-700/50' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/tharushi-paranagama-a0b657355', label: 'LinkedIn', color: 'text-blue-400', bg: 'bg-blue-500/10', hover: 'hover:bg-blue-500/20' },
    { icon: FaWhatsapp, href: 'https://wa.me/94743572773', label: 'WhatsApp', color: 'text-green-400', bg: 'bg-green-500/10', hover: 'hover:bg-green-500/20' },
    { icon: FiMail, href: 'mailto:tharushiparanagama1@gmail.com', label: 'Email', color: 'text-red-400', bg: 'bg-red-500/10', hover: 'hover:bg-red-500/20' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black border-t border-emerald-500/20 overflow-hidden">
      {/* Background Effects - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 sm:-top-20 left-5 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-xl sm:blur-3xl"></div>
        <div className="absolute -bottom-10 sm:-bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-xl sm:blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 z-10">
        {/* Main Footer Content - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <motion.a
              href="#home"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tharushi Paranagama<span className="text-white"></span>
            </motion.a>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs">
              IT Undergraduate passionate about creating innovative web solutions and digital experiences that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${social.bg} ${social.hover} border border-gray-700 backdrop-blur-sm transition-all duration-300 group`}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className={`text-lg sm:text-xl ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500"></div>
              Navigation
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="w-1 h-1 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500 transition-all duration-300"></div>
                    <span>{link.name}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/50 group-hover:via-emerald-500/30 group-hover:to-emerald-500/0 transition-all duration-300"></div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500"></div>
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: FiMapPin, text: 'Malabe, Sri Lanka', color: 'text-emerald-400' },
                { icon: FiMail, text: 'tharushiparanagama1@gmail.com', color: 'text-cyan-400' },
                { icon: FiPhone, text: '+94 74 357 2773', color: 'text-purple-400' },
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 group">
                  <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-800/50 ${contact.color.replace('text', 'bg')}/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <contact.icon className={`text-base sm:text-lg ${contact.color}`} />
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base break-words">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter/Connect Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
              Let's Connect
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Interested in collaborating? Feel free to reach out for project discussions, tech talks, or just to say hello!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 rounded-lg sm:rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium text-sm sm:text-base">Get In Touch</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="text-lg sm:text-xl hidden sm:inline"
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-6 sm:mb-8"></div>

        {/* Bottom Bar - Stack on mobile, row on tablet+ */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <motion.p 
            className="text-gray-400 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Tharushi Paranagama</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="sm:hidden block w-full h-0"></span>
            <span>All rights reserved</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              Made by
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <FiHeart className="text-red-500 mx-1" />
              </motion.span>
              Tharushi Paranagama
            </span>
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-emerald-500/20 hover:border-emerald-400/40 text-emerald-400 transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xs sm:text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <FiArrowUp className="text-base sm:text-lg" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Floating Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
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
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;