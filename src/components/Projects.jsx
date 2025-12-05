// src/components/Projects.jsx
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import rebuyImg from '../assets/rebuy.png';
import WellnessBuddyImg from '../assets/wellness.png';
import ToDoApp from '../assets/ToDoApp.png';
import dashboard from '../assets/admindashboard.png';
import petbuddy from '../assets/petbuddy.png';

const Projects = () => {
  const projects = [
    {
      title: 'ReBuy.lk - E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, inventory management, and payment integration.',
      image: rebuyImg,
      technologies: ['React', 'Node.js', 'MERN Stack', 'Stripe'],
      githubLink: 'https://github.com/Tharushi111/Second-Hand-Goods-Marketplace.git',
      featured: true
    },
    {
      title: 'WellnessBuddy – Habbit Traking App',
      description: 'WellnessBuddy is an Android mobile application designed to help users build healthy habits, track their moods, and stay consistent with hydration reminders, all in one beautiful, calm interface.',
      image: WellnessBuddyImg,
      technologies: ['Kotlin'],
      githubLink: 'https://github.com/Tharushi111/WellnessBuddy.git',
      featured: true
    },
    {
      title: 'PetBuddy – Pet Care App',
      description: 'PetBuddy is a mobile application designed to help pet owners love, care, and track their pets’ daily needs.',
      image: petbuddy,
      technologies: ['Kotlin'],
      githubLink: 'https://github.com/Tharushi111/PetBuddyApp.git',
      featured: false
    },
    {
      title: 'To-Do-App',
      description: 'A simple, clean, and user-friendly To-Do web application built with HTML, JavaScript, and Tailwind CSS.',
      image: ToDoApp,
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/Tharushi111/To-Do-App.git',
      liveLink: 'https://www.youtube.com/watch?v=dSmouA9yPVU',
      featured: false
    },
    {
      title: 'Online E-Shopping Store',
      description: 'The poject is to create web application using Java servlet MVC architecture with all the CRUD operations.',
      image: dashboard,
      technologies: ['Java', 'Tailwind CSS', 'JWT'],
      githubLink: 'https://github.com/Tharushi111/Online-E-Shopping-Store.git',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubLink}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-emerald-400 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-emerald-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Tharushi111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <FiGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;