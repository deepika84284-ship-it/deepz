import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Terminal, Sparkles } from 'lucide-react';

const coreTech = [
  "React.js", "JavaScript", "HTML", "CSS", 
  "Node.js", "Express.js", "MongoDB", "Mongoose", 
  "Firebase", "Git", "GitHub", "Postman"
];

const aiTech = [
  "Google Gemini", "ChatGPT", "Claude", "Cursor", 
  "GitHub Copilot", "Ollama", "Qwen2.5 7B"
];

export const TechStack = () => {
  return (
    <section id="techstack" className="py-24 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] opacity-40 mb-3 font-mono">04 // TECH STACK SHOWCASE</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">
              Tech <br /> <span className="text-outline">Stack</span>
            </h2>
          </div>
          <p className="max-w-md text-base opacity-70 leading-relaxed font-light">
            Core development stack & specialized AI engines powering full-stack web products and intelligent local assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-zinc-200">Core Web Technologies</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {coreTech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200 hover:border-white/40 hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-zinc-200">AI Engines & LLM Tools</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {aiTech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200 hover:border-white/40 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-white/60" /> {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
