// src/components/Hero.jsx
import React from 'react';
import myPhoto from '../assets/myPhoto.jpeg';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 overflow-hidden pt-16">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className="lg:col-span-7">
            {/* Introduction */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                <span className="text-emerald-400 font-medium tracking-wider">HELLO, I'M</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                <span className="text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 bg-clip-text">
                  Tharushi
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-2">
                  Paranagama
                </span>
              </h1>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-3">
                3rd Year IT Undergraduate
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Passionate Full Stack Developer specializing in creating innovative digital solutions 
                with modern web technologies. Currently pursuing BSc in Information Technology at SLIIT.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">3rd</div>
                <div className="text-sm text-gray-400 mt-1">Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">SLIIT</div>
                <div className="text-sm text-gray-400 mt-1">Malabe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">BSc</div>
                <div className="text-sm text-gray-400 mt-1">IT Degree</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* CV Coming Soon Button */}
              <div className="relative group">
                <button
                  disabled
                  className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border border-gray-700 cursor-not-allowed"
                >
                  <FiDownload className="text-lg" />
                  <span>CV Coming Soon</span>
                </button>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-gray-300 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
                  CV is being updated
                </div>
              </div>
              
              {/* Get In Touch Button */}
              <a
                href="#contact"
                className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
              >
                <span>Get In Touch</span>
                <FiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { 
                  icon: FiGithub, 
                  href: "https://github.com/Tharushi111", 
                  label: "GitHub"
                },
                { 
                  icon: FiLinkedin, 
                  href: "https://www.linkedin.com/in/tharushi-paranagama-a0b657355", 
                  label: "LinkedIn"
                },
                { 
                  icon: FiMail, 
                  href: "mailto:tharushiparanagama1@gmail.com", 
                  label: "Email"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl text-emerald-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="lg:col-span-5">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative w-[400px] h-[400px]">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-emerald-400/20 rounded-full animate-spin-slow">
                  <div className="absolute top-1/2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                </div>

                {/* Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-emerald-500/20 shadow-2xl">
                  <img 
                    src={myPhoto} 
                    alt="Tharushi Paranagama" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Simple Corner Accents */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;