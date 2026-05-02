import React, { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiBriefcase,
  FiLayers,
  FiShield,
  FiBell,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import rebuyImg from "../assets/rebuy.png";
import WellnessBuddyImg from "../assets/wellness.png";
import ToDoApp from "../assets/ToDoApp.png";
import dashboard from "../assets/admindashboard.png";
import petbuddy from "../assets/petbuddy.png";
import financialAdvisor from "../assets/Finance-Advisor.png";
import campusnexus from "../assets/campusnexus.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "CampusNexus",
      subtitle: "Smart Campus Operations Hub",
      description:
        "A full-stack university management platform for resource booking, maintenance ticketing, real-time notifications, OAuth authentication, and admin analytics.",
      contribution:
        "My contribution: Facilities & Assets Catalogue, Notification System, Google OAuth Authentication, Admin Dashboard Analytics, User Home Page, About Us, Contact Page, and overall frontend UI design.",
      highlights: [
        "Resource Management",
        "Real-time Notifications",
        "OAuth Security",
        "Admin Analytics",
      ],
      image: campusnexus,
      technologies: [
        "React",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "WebSocket",
      ],
      githubLink:
        "https://github.com/Tharushi111/it3030-paf-2026-smart-campus-group21_Y3S1-WD_1.2",
      liveLink: null,
      featured: true,
      type: "web",
      category: "Academic Project",
      status: "Completed",
      special: true,
    },
    {
      title: "UniCollab",
      subtitle: "Smart Study Group Collaboration System",
      description:
        "A MERN-based collaborative learning platform designed for university students to create study groups, manage sessions, share resources, and improve learning through peer collaboration with AI support.",
      contribution:
        "My contribution: Study Group & Session Management System, AI Study Assistant integration, group collaboration features, and frontend UI design.",
      highlights: [
        "Study Group Management",
        "Session Scheduling",
        "AI Study Assistant",
        "Resource Sharing"
      ],
      image: require("../assets/unicollab_img.png"), 
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini API"
      ],
      githubLink:
        "https://github.com/Tharushi111/Smart-Study-Group-Management-and-Collaboration-System",
      liveLink: null,
      featured: true,
      type: "web",
      category: "Academic Project",
      status: "Completed",
      special: true
    },
    {
      title: "Financial Advisor Portfolio",
      subtitle: "Client-based Project",
      description:
        "A professional portfolio website for a financial advisor showcasing services, expertise, testimonials, and secure contact sections.",
      image: financialAdvisor,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/Tharushi111/Financial-Advisor-Portfolio",
      liveLink: "https://rakindu-rajapaksha.netlify.app",
      featured: true,
      type: "web",
      category: "Client Project",
      status: "Completed",
      client: true,
    },
    {
      title: "ReBuy.lk",
      subtitle: "E-Commerce Platform",
      description:
        "A full-stack second-hand goods marketplace with user authentication, product management, and marketplace workflows.",
      image: rebuyImg,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink:
        "https://github.com/Tharushi111/Second-Hand-Goods-Marketplace.git",
      liveLink: null,
      featured: true,
      type: "web",
      category: "Web App",
      status: "Completed",
    },
    {
      title: "Singlish Transliteration Testing",
      subtitle: "Automation Testing Project",
      description:
        "An automated testing project that evaluates the accuracy of Singlish to Sinhala transliteration using Playwright. The system is tested against 50 negative test cases covering 24 Singlish input types to identify weaknesses in the translation logic.",
      contribution:
        "My contribution: Designed 50 negative test cases, implemented Playwright automation, analyzed transliteration failures, and documented results using Excel.",
      highlights: [
        "Playwright Automation",
        "Test Case Design",
        "Failure Analysis",
        "Excel Reporting"
      ],
      image: require("../assets/testing.jpg"), 
      technologies: [
        "Python",
        "Playwright",
        "OpenPyXL",
        "Excel"
      ],
      githubLink:
        "https://github.com/Tharushi111/IT3040-Assignment1_singlish-sinhala-transliteration-testing-pixelssuite-chat-translator",
      liveLink: null,
      featured: true,
      type: "Testing",
      category: "Academic Project",
      status: "Completed",
    },
    {
      title: "WellnessBuddy",
      subtitle: "Habit Tracking Mobile App",
      description:
        "Android application for building healthy habits, mood tracking, hydration reminders, and daily wellness routines.",
      image: WellnessBuddyImg,
      technologies: ["Kotlin", "Android Studio", "Room DB", "Material Design"],
      githubLink: "https://github.com/Tharushi111/WellnessBuddy.git",
      liveLink: null,
      featured: true,
      type: "mobile",
      category: "Mobile App",
      status: "Completed",
    },
    {
      title: "PetBuddy",
      subtitle: "Pet Care Mobile App",
      description:
        "Mobile app designed to help pet owners manage pet care, activities, and daily needs with a clean mobile interface.",
      image: petbuddy,
      technologies: ["Kotlin", "Android Studio", "SQLite", "Firebase"],
      githubLink: "https://github.com/Tharushi111/PetBuddyApp.git",
      liveLink: null,
      featured: true,
      type: "mobile",
      category: "Mobile App",
      status: "Completed",
    },
    {
      title: "TodoMaster",
      subtitle: "Productivity Web App",
      description:
        "A simple and clean to-do web application with task management, priority handling, and local storage support.",
      image: ToDoApp,
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "LocalStorage"],
      githubLink: "https://github.com/Tharushi111/To-Do-App.git",
      liveLink: "https://www.youtube.com/watch?v=dSmouA9yPVU",
      featured: false,
      type: "web",
      category: "Web App",
      status: "Completed",
    },
    {
      title: "ShopSphere",
      subtitle: "E-Commerce Dashboard",
      description:
        "Java Servlet MVC-based e-commerce dashboard with CRUD operations, JWT authentication, and MySQL database integration.",
      image: dashboard,
      technologies: ["Java", "Servlet", "Tailwind CSS", "JWT", "MySQL"],
      githubLink: "https://github.com/Tharushi111/Online-E-Shopping-Store.git",
      liveLink: null,
      featured: true,
      type: "web",
      category: "Web App",
      status: "Completed",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: FiCode },
    { id: "web", label: "Web Apps", icon: FiGlobe },
    { id: "mobile", label: "Mobile Apps", icon: FiSmartphone },
    { id: "featured", label: "Featured", icon: FiStar },
    { id: "client", label: "Client Work", icon: FiBriefcase },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "client") return project.client;
    return project.type === activeFilter;
  });

  const getTypeIcon = (project) => {
    if (project.client) return <FiBriefcase className="h-4 w-4" />;
    if (project.type === "mobile") return <FiSmartphone className="h-4 w-4" />;
    return <FiGlobe className="h-4 w-4" />;
  };

  const getHighlightIcon = (item) => {
    if (item.includes("Resource")) return <FiLayers />;
    if (item.includes("Notification")) return <FiBell />;
    if (item.includes("OAuth")) return <FiShield />;
    if (item.includes("Analytics")) return <FiBarChart2 />;
    return <FiCheckCircle />;
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#06111f] py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300"
          >
            <FiCode />
            Portfolio Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-5 text-base leading-8 text-slate-300 sm:text-lg"
          >
            A collection of my full-stack web applications, mobile projects,
            academic systems, and client-based development work.
          </motion.p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                activeFilter === filter.id
                  ? "border-emerald-400 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[28px] border bg-white/[0.055] shadow-2xl backdrop-blur-xl transition-all duration-500 ${
                  project.special
                    ? "border-emerald-400/40 md:col-span-2 lg:col-span-2"
                    : project.client
                    ? "border-amber-400/30"
                    : "border-white/10"
                }`}
              >
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    project.special
                      ? "bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent"
                      : project.client
                      ? "bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent"
                      : "bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent"
                  }`}
                />

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-[#06111f]/30 to-transparent" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {project.status}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1.5 text-xs font-bold text-cyan-300 backdrop-blur-md">
                        <FiStar />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${
                        project.client
                          ? "border-amber-400/40 bg-amber-400/15 text-amber-300"
                          : project.special
                          ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                          : "border-white/15 bg-black/30 text-slate-200"
                      }`}
                    >
                      {getTypeIcon(project)}
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-emerald-200">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 sm:p-7">
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  {project.contribution && (
                    <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                      <p className="text-sm font-semibold leading-7 text-emerald-200">
                        {project.contribution}
                      </p>
                    </div>
                  )}

                  {project.highlights && (
                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200"
                        >
                          <span className="text-emerald-300">
                            {getHighlightIcon(item)}
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex items-center gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                        >
                          <FiGithub />
                          Code
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          <FiExternalLink />
                          Demo
                        </a>
                      )}
                    </div>

                    <span
                      className={`h-3 w-3 rounded-full ${
                        project.status === "Completed"
                          ? "bg-emerald-400 shadow-lg shadow-emerald-400/50"
                          : "bg-amber-400"
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-[28px] border border-emerald-400/20 bg-white/[0.055] p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">
              Want to explore more?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Visit my GitHub profile to see more projects, experiments, and
              development work.
            </p>

            <a
              href="https://github.com/Tharushi111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-bold text-white shadow-xl shadow-emerald-500/25 transition hover:scale-105"
            >
              <FiGithub />
              Explore My GitHub
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;