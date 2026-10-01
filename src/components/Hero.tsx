import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ThreeScene } from './ThreeScene';
import { Download, Github, Linkedin, FolderGit2, ArrowRight, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.innerText.split('');
      titleRef.current.innerHTML = chars
        .map((char) => `<span class="char inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.fromTo(
        '.char',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power4.out',
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-4 md:px-8 pt-28 pb-16 overflow-hidden bg-grid-pattern">
      <ThreeScene />

      {/* Ambient Lighting Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-xs uppercase tracking-widest font-mono text-sky-300 font-semibold">
                Available for Full Stack & AI Roles
              </span>
            </div>

            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
              CGPA: <span className="text-white font-bold">8.24 / 10</span>
            </div>
          </motion.div>

          <div className="space-y-2">
            <h1 
              ref={titleRef}
              className="text-[13vw] sm:text-[9vw] lg:text-[7vw] font-anton leading-[0.85] uppercase tracking-tight text-white drop-shadow-2xl"
            >
              M DEEPIKA
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 flex-wrap text-lg sm:text-2xl font-display font-bold text-zinc-200 tracking-tight"
            >
              <span className="text-sky-400">Full Stack Developer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" /> AI Application Developer
              </span>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg font-light leading-relaxed text-zinc-300 max-w-xl"
          >
            Building practical web applications and AI-powered solutions using modern technologies.
          </motion.p>

          {/* PRIMARY CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-sky-400 hover:text-black transition-all duration-300 flex items-center gap-2.5 shadow-xl hover:scale-105"
            >
              <FolderGit2 className="w-4 h-4" /> View Projects <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/Resume_M_DEEPIKA.pdf"
              download="Resume_M_DEEPIKA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl glass-card border-white/20 hover:border-sky-400/50 hover:bg-sky-500/10 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 shadow-xl hover:scale-105"
            >
              <Download className="w-4 h-4 text-sky-400" /> Download Resume
            </a>
          </motion.div>

          {/* SECONDARY SOCIAL LINKS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-4 flex items-center gap-6 text-xs uppercase tracking-widest font-mono text-zinc-400"
          >
            <a
              href="https://github.com/deepika84284-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-zinc-300" /> GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/m-deepika-6aa17a325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-zinc-300" /> LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: DEVELOPER FLOATING VISUAL CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative glass-panel rounded-2xl p-6 border-white/10 shadow-2xl animate-float space-y-5 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" /> deepika.config.ts
              </span>
            </div>

            {/* Code Snippet Card */}
            <div className="space-y-2 font-mono text-xs leading-relaxed text-zinc-300">
              <p className="text-zinc-500">// Full Stack & AI Application Specialist</p>
              <p>
                <span className="text-sky-400">const</span> developer = &#123;
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">name</span>: <span className="text-emerald-400 font-semibold">"M Deepika"</span>,
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">education</span>: <span className="text-emerald-400">"B.E. CSE (CGPA 8.24)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">stack</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"MongoDB"</span>],
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">aiTools</span>: [<span className="text-sky-300">"Gemini"</span>, <span className="text-sky-300">"Ollama"</span>, <span className="text-sky-300">"Copilot"</span>],
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">projectsBuilt</span>: <span className="text-emerald-400 font-bold">11</span>,
              </p>
              <p>&#125;;</p>
            </div>

            {/* Floating Tech Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> React.js
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Node.js
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> MongoDB
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Local AI (Ollama)
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
