import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FolderCode, Code2, Bot } from 'lucide-react';

const stats = [
  {
    value: "8.24",
    label: "CGPA",
    subtext: "Computer Science & Engg",
    icon: GraduationCap
  },
  {
    value: "11+",
    label: "Projects",
    subtext: "Real-World Applications",
    icon: FolderCode
  },
  {
    value: "Full Stack",
    label: "Development",
    subtext: "MERN & Web Platforms",
    icon: Code2
  },
  {
    value: "AI",
    label: "Application Development",
    subtext: "LLMs, APIs & Workflows",
    icon: Bot
  }
];

export const QuickStats = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-zinc-950 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    STAT 0{i + 1}
                  </span>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-1">
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
    </section>
  );
};
