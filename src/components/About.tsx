import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FolderCode, Code2, Bot, BookOpen, Sparkles } from 'lucide-react';

const stats = [
  {
    value: "8.24",
    label: "CGPA",
    subtext: "Computer Science & Engg",
    icon: GraduationCap,
    accent: "text-sky-400 border-sky-500/30"
  },
  {
    value: "12+",
    label: "Projects",
    subtext: "Real-World Applications",
    icon: FolderCode,
    accent: "text-emerald-400 border-emerald-500/30"
  },
  {
    value: "Full Stack",
    label: "Developer",
    subtext: "MERN Stack & REST APIs",
    icon: Code2,
    accent: "text-indigo-400 border-indigo-500/30"
  },
  {
    value: "AI Application",
    label: "Developer",
    subtext: "Local LLMs & AI Tools",
    icon: Bot,
    accent: "text-amber-400 border-amber-500/30"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-4 md:px-8 border-b border-white/10 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONCISE INTRO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
                01 // ABOUT ME
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter uppercase text-white">
                Computer Science <br />
                <span className="text-outline">& AI Developer</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg font-light leading-relaxed text-zinc-300">
              I am a Computer Science and Engineering student and Full Stack Developer interested in building practical web applications and AI applications. I enjoy solving real-world problems through modern frontend, backend, database and AI technologies.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs text-zinc-300">
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" /> B.E. Computer Science & Engg
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" /> Mohamed Sathak Engineering College
              </span>
            </div>
          </motion.div>

          {/* RIGHT: LARGE STATS CARDS */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label + stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl glass-card border flex flex-col justify-between group ${stat.accent}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-zinc-200">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono mt-1">
                      {stat.subtext}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
