import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Code2,
    accent: "text-sky-400 border-sky-500/20 hover:border-sky-400/50",
    skills: [
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
      { name: "JavaScript", tag: "ES6+" },
      { name: "React.js", tag: "UI Library" }
    ]
  },
  {
    title: "BACKEND",
    icon: Server,
    accent: "text-emerald-400 border-emerald-500/20 hover:border-emerald-400/50",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "REST Framework" }
    ]
  },
  {
    title: "DATABASE",
    icon: Database,
    accent: "text-indigo-400 border-indigo-500/20 hover:border-indigo-400/50",
    skills: [
      { name: "MongoDB", tag: "NoSQL DB" },
      { name: "Mongoose", tag: "ODM Library" }
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    icon: Wrench,
    accent: "text-amber-400 border-amber-500/20 hover:border-amber-400/50",
    skills: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Version Control" },
      { name: "Postman", tag: "API Testing" },
      { name: "Vite", tag: "Build Tool" },
      { name: "Firebase", tag: "Auth & DB" },
      { name: "Vercel", tag: "Deployment" },
      { name: "Netlify", tag: "Deployment" }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-4 md:px-8 bg-[#050508] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
              02 // TECHNICAL SKILLS
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter uppercase">
              Core Technical <br /> <span className="text-outline">Stack</span>
            </h2>
          </div>
          <p className="max-w-md text-base opacity-75 leading-relaxed font-light">
            Interactive breakdown of core technologies used for building production-ready web applications and scalable backends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl glass-card transition-all duration-300 flex flex-col justify-between group ${category.accent}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-display font-bold uppercase tracking-wider text-zinc-200">{category.title}</h3>
                  </div>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between hover:border-white/30 hover:bg-zinc-800/80 transition-all duration-200"
                      >
                        <span className="text-xs font-semibold font-mono text-zinc-100">{skill.name}</span>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{skill.tag}</span>
                      </div>
                    ))}
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
