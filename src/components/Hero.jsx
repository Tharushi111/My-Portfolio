// src/components/Hero.jsx
import React from 'react';
import myPhoto from '../assets/myPhoto.jpeg';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 overflow-hidden pt-16">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      {/* Main Content - Side by Side Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text">Tharushi</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-6">
              3rd Year IT Undergraduate
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Passionate about creating digital experiences that make a difference through 
              innovative web solutions and modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/assets/Tharushi_CV.pdf"
                download
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <FiDownload className="text-lg" />
                Download CV
              </a>
              
              <a
                href="#contact"
                className="group border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FiMail className="text-lg" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FiGithub, href: "https://github.com/Tharushi111", label: "GitHub" },
                { icon: FiLinkedin, href: "www.linkedin.com/in/tharushi-paranagama-a0b657355", label: "LinkedIn" },
                { icon: FiMail, href: "tharushiparanagama1@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-4 bg-gray-800 hover:bg-emerald-500 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl text-gray-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image - Right Side - BIGGER SIZE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container with Larger Size */}
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Main Image with Unique Border Radius - Bigger */}
                <div className="relative w-full h-full rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border-4 border-emerald-400/50 shadow-2xl transition-all duration-500 group-hover:rounded-[50%_50%_50%_50%] group-hover:border-emerald-400/80">
                  <img 
                    src={myPhoto} 
                    alt="Tharushi Paranagama" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements - Adjusted for larger size */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110 blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110 blur-sm"></div>
                
                {/* Animated Border - Adjusted for larger size */}
                <div className="absolute -inset-6 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-2 border-emerald-400/30 animate-pulse group-hover:animate-none group-hover:border-emerald-400/60 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;