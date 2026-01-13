import React, { useState, useEffect, useMemo } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const navItems = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ], []);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Handle smooth scroll to section
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const getActiveIndicatorPosition = () => {
    const index = navItems.findIndex(item => item.id === activeSection);
    if (isMobile) {
      return { x: 0, width: 0 }; // Hide on mobile
    }
    // Adjust for different screen sizes
    if (window.innerWidth >= 1024) {
      // Desktop
      return { x: index * 112 + 16, width: 64 };
    } else if (window.innerWidth >= 768) {
      // Tablet
      return { x: index * 88 + 12, width: 56 };
    }
    return { x: index * 96 + 16, width: 64 };
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 py-2' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => handleNavClick('home')}
              className="group relative"
            >
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 bg-clip-text text-transparent">
                Tharushi<span className="hidden sm:inline"> Paranagama</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0 lg:space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 group ${
                  activeSection === item.id 
                    ? 'text-emerald-300' 
                    : 'text-gray-300 hover:text-emerald-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium text-sm lg:text-base">
                  {item.name}
                </span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-500/30"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/10 group-hover:to-green-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </motion.button>
            ))}
            
            {/* Download CV Button */}
            <motion.a
              href="/assets/Tharushi_CV.pdf"
              download="Tharushi_CV.pdf"
              className="ml-2 lg:ml-4 px-4 py-1.5 lg:px-6 lg:py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={16} className="lg:w-5 lg:h-5" />
              <span className="text-sm lg:text-base">CV</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2 sm:space-x-4">
            {/* Mobile Download Button */}
            <motion.a
              href="/assets/Tharushi_CV.pdf"
              download="Tharushi_CV.pdf"
              className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">CV</span>
            </motion.a>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 border border-emerald-500/20 text-emerald-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={20} className="sm:w-6 sm:h-6" /> : <FiMenu size={20} className="sm:w-6 sm:h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-3 py-4 px-4 bg-gray-900/98 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-emerald-400'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-base">{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        layoutId="mobileActiveDot"
                        initial={false}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile Download Button */}
                <motion.a
                  href="/assets/Tharushi_CV.pdf"
                  download="Tharushi_CV.pdf"
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium text-center shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload size={18} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated underline for active section (desktop) */}
      <motion.div
        className="hidden md:block absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"
        animate={getActiveIndicatorPosition()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.nav>
  );
};

export default Navbar;