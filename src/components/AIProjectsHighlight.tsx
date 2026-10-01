import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, ShieldCheck, Cpu, Droplets, Car } from 'lucide-react';

const aiHighlights = [
  {
    title: "GuardianDrive AI",
    badge: "Computer Vision & AI",
    icon: Car,
    summary: "Real-time AI driver monitoring system processing ocular keypoints to prevent drowsiness and road hazards.",
    tech: ["React.js", "Node.js", "Express.js", "AI Detection APIs"]
  },
  {
    title: "Luna – Privacy-First Local AI Assistant",
    badge: "Local AI & Ollama Engine",
    icon: Cpu,
    summary: "Desktop AI assistant running 100% offline using Qwen2.5 7B through Ollama, built for privacy and zero subscription costs.",
    tech: ["Electron", "React.js", "Node.js", "Express.js", "Ollama", "Qwen2.5 7B"]
  },
  {
    title: "AquaGuard AI",
    badge: "Predictive Analytics AI",
    icon: Droplets,
    summary: "Water management platform using AI predictive algorithms to forecast regional water shortages and detect network leaks.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Prediction APIs"]
  },
  {
    title: "SafeCart",
    badge: "AI Scam Guidance & Copilot",
    icon: ShieldCheck,
    summary: "Fraud detection platform integrating an AI Copilot feature for real-time scam threat analysis and shopping safety guidance.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Copilot"]
  }
];

export const AIProjectsHighlight = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] opacity-40 mb-3 font-mono">06 // PRACTICAL AI EXPERIENCE</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">
              AI Application <br /> <span className="text-outline">Spotlight</span>
            </h2>
          </div>
          <p className="max-w-md text-base opacity-75 leading-relaxed font-light">
            Demonstrated hands-on experience building practical AI applications using computer vision, local offline LLMs, predictive models, and AI Copilots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-white/10 text-zinc-300 rounded-md border border-white/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold mb-2 text-white group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] font-mono bg-zinc-900 border border-white/10 rounded text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
