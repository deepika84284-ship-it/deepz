import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-28 px-4 md:px-8 relative overflow-hidden bg-[#050508] text-white border-b border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-sky-400 font-mono font-semibold">
            09 // CONTACT ME
          </div>

          <h2 className="text-4xl sm:text-7xl font-display font-bold uppercase tracking-tight text-white">
            LET'S BUILD <span className="text-outline">SOMETHING</span>
          </h2>

          <p className="text-base sm:text-xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Open for Full Stack Developer & AI Application Developer opportunities, internships, and project collaborations.
          </p>
        </motion.div>

        {/* GLASS CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left font-mono">
          <a
            href="mailto:deepika84284@gmail.com"
            className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-400/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">EMAIL ADDRESS</div>
            <div className="text-xs font-bold text-white truncate">deepika84284@gmail.com</div>
          </a>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">PHONE NUMBER</div>
            <div className="text-xs font-bold text-white">+91 9789719885</div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">LOCATION</div>
            <div className="text-xs font-bold text-white">Tamil Nadu, India</div>
          </div>
        </div>

        {/* LARGE CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-6 flex flex-wrap justify-center items-center gap-4"
        >
          <a 
            href="mailto:deepika84284@gmail.com" 
            className="px-8 py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-sky-400 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105"
          >
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Resume_M_DEEPIKA.pdf"
            download="Resume_M_DEEPIKA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass-card border-white/20 hover:border-sky-400 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105"
          >
            <Download className="w-4 h-4 text-sky-400" /> DOWNLOAD RESUME
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <div className="pt-8 flex justify-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <a
            href="https://github.com/deepika84284-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" /> GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/m-deepika-6aa17a325"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};
