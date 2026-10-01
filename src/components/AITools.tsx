import React from 'react';
import { motion } from 'motion/react';
import { Bot, Sparkles, Workflow, Cpu, ShieldCheck } from 'lucide-react';

const aiTools = [
  { name: "ChatGPT", category: "LLM Assistant" },
  { name: "Google Gemini", category: "Multimodal AI" },
  { name: "Claude", category: "Reasoning LLM" },
  { name: "GitHub Copilot", category: "Code Completion" },
  { name: "Cursor", category: "AI Code Editor" },
  { name: "Ollama", category: "Local LLM Server" },
  { name: "CodeRabbit", category: "AI Code Review" },
  { name: "Snyk", category: "AI Security" },
  { name: "DeepSource", category: "Code Analysis" },
  { name: "Reviewpad", category: "PR Automation" },
  { name: "Perplexity", category: "AI Search" },
  { name: "NotebookLM", category: "Research AI" },
  { name: "Zapier", category: "AI Workflows" },
  { name: "Gamma", category: "AI Presentations" },
  { name: "Otter.ai", category: "AI Transcription" }
];

const aiWorkflows = [
  "Prompt Engineering",
  "AI-assisted Development",
  "AI Application Development",
  "LLM Workflows",
  "AI API Integration"
];

export const AITools = () => {
  return (
    <section id="aitools" className="py-28 px-4 md:px-8 bg-[#050508] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
              03 // AI TOOLSTACK
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter uppercase">
              AI Tools & <br /> <span className="text-outline">Technologies</span>
            </h2>
          </div>
          <p className="max-w-md text-base opacity-75 leading-relaxed font-light">
            Modern AI platforms, developer tools, code reviewers, and LLM development workflows used to build practical applications and accelerate productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* AI / DEVELOPMENT WORKFLOWS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold uppercase tracking-wider text-zinc-200">AI / DEVELOPMENT WORKFLOWS</h3>
              </div>

              <p className="text-xs opacity-70 mb-6 font-mono leading-relaxed">
                Core methodologies, prompt engineering techniques, and API integrations applied in AI-driven development.
              </p>

              <div className="space-y-3">
                {aiWorkflows.map((item) => (
                  <div 
                    key={item}
                    className="p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between hover:border-sky-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200 font-mono">{item}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Skill</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI TOOLS GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold uppercase tracking-wider text-zinc-200">AI TOOLS & PLATFORMS USED</h3>
              </div>

              <p className="text-xs opacity-70 mb-6 font-mono leading-relaxed">
                AI coding assistants, local LLM engines, code review tools, and research utilities.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {aiTools.map((tool) => (
                  <div 
                    key={tool.name}
                    className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-sky-500/30 hover:bg-zinc-800/80 transition-all duration-200"
                  >
                    <div className="text-xs font-semibold font-mono text-zinc-100">{tool.name}</div>
                    <div className="text-[10px] font-mono text-zinc-500">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
              <span>* Practical AI tools integrated into daily development and workflow acceleration.</span>
              <span className="text-sky-400 font-bold">15+ AI Tools</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
