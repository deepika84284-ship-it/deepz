import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-[#050508] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-base font-display font-bold uppercase tracking-wider text-white">
            M DEEPIKA
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Full Stack Developer | AI Application Developer
          </p>
        </div>

        <div className="flex gap-6 text-xs uppercase tracking-widest font-mono text-zinc-400">
          <a 
            href="https://github.com/deepika84284-ship-it" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>

          <a 
            href="https://linkedin.com/in/m-deepika-6aa17a325" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>

          <a 
            href="mailto:deepika84284@gmail.com" 
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-500">
            © 2026 M Deepika
          </span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-sky-400 hover:text-black transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
