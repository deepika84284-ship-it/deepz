import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, Eye, ArrowUpRight, Cpu, Layers, ShieldCheck, Gamepad2, Landmark, MapPin, Stethoscope, Sprout, Receipt } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filters: string[];
  type: string;
  isAI: boolean;
  isFeatured?: boolean;
  problem?: string;
  solution?: string;
  aiUsage?: string;
  purpose?: string;
  functionality?: string;
  features?: string[];
  technologies: string[];
  contribution?: string;
  context?: string;
  github?: string;
  demo?: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: "guardiandrive",
    title: "GuardianDrive AI",
    category: "AI / Full Stack",
    filters: ["AI", "FULL STACK"],
    type: "AI Application",
    isAI: true,
    isFeatured: true,
    problem: "Driver fatigue, drowsiness, and distraction lead to high risks of road hazards and fatal vehicular accidents.",
    solution: "An AI-assisted real-time driver monitoring web system that analyzes ocular keypoints and facial expressions to issue instant audio/visual safety warnings.",
    aiUsage: "Leveraged computer vision algorithms and real-time AI model evaluation to monitor ocular blinks, head orientation, and distraction levels.",
    technologies: ["React.js", "Node.js", "Express.js", "AI Detection APIs", "Tailwind CSS"],
    contribution: "Designed responsive frontend interface, integrated AI video stream handlers, developed alert triggers, and structured REST endpoints.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "luna",
    title: "Luna – Privacy-First Local AI Desktop Assistant",
    category: "AI / Desktop",
    filters: ["AI", "DESKTOP"],
    type: "Local AI Desktop App",
    isAI: true,
    context: "Developed as part of the Luna Desktop Application Hackathon.",
    purpose: "Luna is a privacy-first local AI desktop assistant designed to run completely offline on a laptop.",
    solution: "Processes all AI tasks locally without cloud dependency, eliminating privacy risks and subscription fees for students and low-connectivity environments.",
    features: [
      "LOCAL AI & 100% OFFLINE (No internet required after setup)",
      "POWERED BY QWEN2.5 7B THROUGH OLLAMA LOCAL LLM",
      "ELECTRON + REACT + NODE.JS + EXPRESS DESKTOP ARCHITECTURE",
      "ZERO SUBSCRIPTION COST & PRIVACY-FIRST WORKFLOWS",
      "DESIGNED FOR STUDENTS AND LOW-CONNECTIVITY ENVIRONMENTS"
    ],
    aiUsage: "Integrated local LLM runner (Ollama with Qwen2.5 7B model) via local IPC REST bridge for offline text generation, summarization, and task assistance.",
    technologies: ["Electron", "React.js", "Node.js", "Express.js", "Ollama", "Qwen2.5 7B"],
    contribution: "Built desktop application shell with Electron, designed React frontend, set up local Ollama backend integration, and crafted privacy-first prompt workflows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "aquaguard",
    title: "AquaGuard AI",
    category: "AI / Social Impact",
    filters: ["AI", "WEB"],
    type: "AI Water Management App",
    isAI: true,
    problem: "Inefficient water allocation, undetected municipal pipeline leakages, and lack of predictive insights during regional water shortages.",
    solution: "An AI-powered water management platform that monitors real-time consumption metrics, predicts shortages, and alerts users to leaks.",
    aiUsage: "Implemented predictive analytics algorithms for water demand forecasting and automated leakage anomaly detection.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "AI Prediction APIs"],
    contribution: "Built interactive telemetry dashboards, connected predictive REST APIs, and designed real-time consumption visualizers.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "safecart",
    title: "SafeCart",
    category: "AI / Web Application",
    filters: ["AI", "WEB", "FULL STACK"],
    type: "Fraud Detection & Safety Platform",
    isAI: true,
    purpose: "Full-stack e-commerce safety platform helping users identify and avoid online shopping scams and suspicious online stores.",
    functionality: "Evaluates seller credibility, analyzes suspicious store domains and transaction patterns, and provides real-time risk scores and Copilot guidance.",
    aiUsage: "Integrated an AI Copilot feature for scam guidance and automated threat evaluation. Used ChatGPT & Google Gemini for AI-assisted development and debugging.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Role-based Access"],
    github: "https://github.com/deepika84284-ship-it/safecart",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bikeracearena",
    title: "Bike Race Arena",
    category: "Full Stack / Interactive Web Game",
    filters: ["FULL STACK", "INTERACTIVE"],
    type: "Interactive Web Game",
    isAI: false,
    purpose: "Bike Race Arena is a full-stack web-based interactive racing game with multiplayer-style racing simulation and interactive game features.",
    features: [
      "Multiplayer-style racing mechanics with 4-player simulation engine",
      "Dynamic coin collection system during high-speed races",
      "In-game Shop system for purchasing bikes, helmets, and outfits",
      "Firebase Authentication for user accounts and profile progress",
      "Firestore database integration for real-time leaderboard and score tracking"
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Firebase", "Firebase Authentication", "Firestore"],
    contribution: "Engineered game loop simulation, built canvas/DOM interactions, configured Firebase Auth, and set up Firestore real-time leaderboards.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ammustore",
    title: "Ammu Store",
    category: "Full Stack / E-Commerce",
    filters: ["FULL STACK", "WEB"],
    type: "E-Commerce Application",
    isAI: false,
    purpose: "Full-featured e-commerce platform designed for smooth product showcase, order placement, and payment verification.",
    features: [
      "Interactive Product & Photo Albums gallery",
      "Comprehensive Admin Order Dashboard for inventory management",
      "Integrated UPI Payment Verification workflow",
      "Step-by-step Order Status Flow tracking pipeline"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "UPI Verification"],
    contribution: "Built admin order portal, photo gallery UI, UPI payment verification logic, and order status transition handler.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cleancity",
    title: "Clean City – Waste Pickup & Complaint Reporting System",
    category: "Full Stack / Civic-Tech / Web Application",
    filters: ["FULL STACK", "CIVIC-TECH", "WEB"],
    type: "Civic-Tech Web Platform",
    isAI: false,
    purpose: "Clean City is a web application designed to help users report waste-related issues in their locality in a simple and efficient way.",
    features: [
      "Waste image upload for visual reporting",
      "Location detail attachment for precise pickup routing",
      "Secure user login using Google Authentication",
      "Firebase real-time backend integration",
      "Demo-based complaint status tracking interface"
    ],
    technologies: ["React.js", "Firebase", "Firebase Authentication", "Google Authentication"],
    contribution: "Designed user reporting workflow, integrated Firebase storage for image uploads, and built demo complaint tracking portal.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nearbyxz",
    title: "NearbyXZ",
    category: "Full Stack / Web Application",
    filters: ["FULL STACK", "WEB"],
    type: "Location & Locality Web App",
    isAI: false,
    purpose: "Location and locality-based application connecting users with nearby essential services, local businesses, and community updates.",
    functionality: "Interactive location searching, category-based filtering, verified local store profiles, and distance-based search query processing.",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    contribution: "Developed responsive user interface, implemented distance filtering logic, and integrated backend location APIs.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "arogyanext",
    title: "ArogyaNext",
    category: "Full Stack / Web Application",
    filters: ["FULL STACK", "WEB"],
    type: "Healthcare Web Platform",
    isAI: false,
    purpose: "Digital healthcare platform streamlining patient records, consultation scheduling, and medical resource access.",
    features: [
      "Modular & Responsive Healthcare UI components",
      "Role-based Healthcare Dashboards for patients & doctors",
      "Patient records visualizer and appointment booking",
      "Recognized at MSEC Alumni Meet 2026 (Frontend Specialist)"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "CSS3"],
    contribution: "Served as Frontend Specialist; designed 10+ reusable healthcare UI components and doctor/patient dashboards.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "agrinext",
    title: "AgriNext – Smart Agriculture",
    category: "Web Application / Smart Agriculture",
    filters: ["WEB"],
    type: "Smart Agriculture Web Platform",
    isAI: false,
    purpose: "Smart agriculture web application built to support farmers in making informed agricultural and crop management decisions.",
    features: [
      "Designed 10+ reusable, modern UI components with React and TypeScript",
      "Built crop decision support workflows for farmers",
      "Soil and weather monitoring data interface"
    ],
    technologies: ["React", "TypeScript", "Vite", "CSS3"],
    github: "https://github.com/deepika84284-ship-it/agri-ai-system",
    demo: "https://agri.techtigers.in",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "expensetracker",
    title: "Expense Tracker API",
    category: "Backend / API",
    filters: ["BACKEND", "FULL STACK"],
    type: "Backend REST API",
    isAI: false,
    purpose: "Production-ready backend RESTful API for personal and enterprise financial expense tracking.",
    functionality: "Developed a RESTful API with 5+ endpoints covering complete CRUD operations with structured HTTP status codes.",
    technologies: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Postman"],
    contribution: "Built REST API endpoints, integrated MongoDB Atlas using Mongoose for persistent data storage during DecodeLabs Internship.",
    github: "https://github.com/deepika84284-ship-it/expense-tracker-api",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  }
];

const filterOptions = [
  "ALL",
  "AI",
  "FULL STACK",
  "WEB",
  "BACKEND",
  "DESKTOP",
  "INTERACTIVE",
  "CIVIC-TECH"
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const featuredProject = projects[0];
  
  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === "ALL") return true;
    return proj.filters.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-28 px-4 md:px-8 bg-[#050508] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
              05 // FEATURED SHOWCASE
            </div>
            <h2 className="text-4xl sm:text-7xl font-display font-bold tracking-tighter uppercase">
              Selected <br /> <span className="text-outline">Projects</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>11 Real-World Applications</span>
          </div>
        </div>

        {/* FILTER BAR WITH PILL BUTTONS */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-white/10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 uppercase tracking-wider ${
                activeFilter === filter
                  ? "bg-white text-black shadow-lg shadow-sky-500/20 scale-105"
                  : "bg-zinc-900/80 text-zinc-400 border border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* FEATURED LARGE HERO PROJECT SHOWCASE (When filter is ALL) */}
        {activeFilter === "ALL" && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(featuredProject)}
            className="mb-12 group cursor-pointer rounded-2xl glass-panel border border-white/10 hover:border-sky-500/40 p-6 md:p-8 transition-all duration-300 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider bg-sky-400 text-black rounded-lg flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" /> FEATURED PRODUCT
                  </span>
                  <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20 rounded-lg">
                    {featuredProject.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  AI & FULL STACK MONITORED SAFETY SYSTEM
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {featuredProject.solution}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-lg text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-sky-400 transition-colors flex items-center gap-2">
                    <Eye className="w-4 h-4" /> View Case Study & Details <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECTS GRID (MEDIUM & COMPACT CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => activeFilter !== "ALL" || p.id !== featuredProject.id)
            .map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between ${
                  project.id === "luna" ? "border-indigo-500/30 bg-indigo-950/10" : ""
                }`}
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900 mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {project.id === "luna" && (
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-400 text-black rounded-md flex items-center gap-1 shadow-lg">
                          <Cpu className="w-3 h-3" /> LOCAL AI • OFFLINE
                        </span>
                      )}
                      {project.isAI && project.id !== "luna" && (
                        <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-white text-black rounded-md flex items-center gap-1 shadow-lg">
                          <Sparkles className="w-3 h-3" /> AI Project
                        </span>
                      )}
                      <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20 rounded-md">
                        {project.type}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <Eye className="w-4 h-4" /> View Details & Tech
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed font-light">
                    {project.purpose || project.solution || project.functionality || project.problem}
                  </p>

                  {/* LUNA SPECIAL BADGES */}
                  {project.id === "luna" && (
                    <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold">LOCAL AI</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">OFFLINE</span>
                      <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">QWEN2.5 7B</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">OLLAMA</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[11px] font-mono bg-white/5 border border-white/10 rounded-md text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">Click card to inspect</span>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white hover:text-black transition-colors flex items-center gap-1.5 font-medium text-[11px]"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-3 py-1.5 rounded-lg bg-white text-black hover:bg-sky-400 transition-colors flex items-center gap-1.5 font-bold text-[11px]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* PREMIUM CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 text-white shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-white/10 rounded-lg border border-white/20 text-zinc-300">
                  {selectedProject.category}
                </span>
                {selectedProject.isAI && (
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-sky-400 text-black rounded-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> AI Application
                  </span>
                )}
                {selectedProject.id === "luna" && (
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-indigo-400 text-black rounded-lg flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> LOCAL AI • OFFLINE
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold mb-6 text-white">{selectedProject.title}</h2>

              <div className="space-y-5 text-sm text-zinc-300 leading-relaxed font-light">
                {selectedProject.purpose && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-sky-400 mb-1 font-semibold">Overview & Purpose</div>
                    <p>{selectedProject.purpose}</p>
                  </div>
                )}

                {selectedProject.problem && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-rose-400 mb-1 font-semibold">Problem Statement</div>
                    <p>{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-emerald-400 mb-1 font-semibold">Solution Implemented</div>
                    <p>{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.functionality && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-indigo-400 mb-1 font-semibold">Main Functionality</div>
                    <p>{selectedProject.functionality}</p>
                  </div>
                )}

                {selectedProject.aiUsage && (
                  <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30">
                    <div className="font-mono text-xs uppercase text-sky-300 mb-1 flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> AI Implementation Details
                    </div>
                    <p>{selectedProject.aiUsage}</p>
                  </div>
                )}

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-zinc-400 mb-2 font-semibold">Key Features</div>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.contribution && (
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10">
                    <div className="font-mono text-xs uppercase text-amber-400 mb-1 font-semibold">My Contribution</div>
                    <p>{selectedProject.contribution}</p>
                  </div>
                )}

                <div>
                  <div className="font-mono text-xs uppercase text-zinc-400 mb-3 font-semibold">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end gap-3 flex-wrap">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
                  >
                    <Github className="w-4 h-4" /> View GitHub ↗
                  </a>
                )}
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-sky-400 transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4" /> Launch Live Demo ↗
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-xs uppercase tracking-wider font-mono"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
