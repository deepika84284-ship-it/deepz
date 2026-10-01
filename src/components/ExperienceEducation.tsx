import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Zazu Technologies",
    location: "Coimbatore",
    period: "01 Aug 2026 – 30 Aug 2026",
    points: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, integrating REST APIs and CRUD operations.",
      "Gained hands-on experience with SQL, database concepts, authentication, debugging, and responsive web development."
    ]
  },
  {
    role: "Full Stack Development Intern",
    company: "DecodeLabs",
    location: "Virtual Internship",
    period: "Jun 2026 – Jul 2026",
    points: [
      "Completed a virtual full-stack development internship, translating theoretical concepts into production-ready solutions.",
      "Built and delivered backend REST APIs with 5+ endpoints, reducing manual data-handling effort through structured error handling."
    ]
  },
  {
    role: "Web Development Intern",
    company: "SyntexHub",
    location: "Virtual Internship",
    period: "Dec 2025 – Jan 2026 & Jun 2026 – Jul 2026",
    points: [
      "Completed two web development internships building and deploying 5+ production-ready responsive pages using HTML, CSS, JavaScript, and React.js.",
      "Utilized Git version control and agile workflow practices."
    ]
  }
];

const achievements = [
  "Winner — Project/Product Expo, Mohamed Sathak Engineering College (2023)",
  "Regional Finalist — EDII-TN Innovation Hackathon 2024",
  "MSEC Alumni Meet 2026 Pitch Finalist — Frontend Specialist for ArogyaNext",
  "Winner — Tata Crucible Campus Quiz 2025, Level 1"
];

const certifications = [
  "NetBeans Certification — Score 96%, IIT Bombay",
  "Programming Foundations — LinkedIn Learning (2024)",
  "Full Stack Developer Internship — Zazu Technologies",
  "Full Stack Development Internship — DecodeLabs",
  "Web Development Internship — SyntexHub"
];

export const ExperienceEducation = () => {
  return (
    <section className="py-28 px-4 md:px-8 bg-[#050508] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* EXPERIENCE VERTICAL TIMELINE SECTION */}
        <div id="experience" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
                07 // INDUSTRY EXPERIENCE
              </div>
              <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter uppercase">
                Internship <br /> <span className="text-outline">Timeline</span>
              </h2>
            </div>
            <p className="max-w-md text-base opacity-75 leading-relaxed font-light">
              Hands-on developer internship experience delivering production REST APIs, full-stack application modules, and responsive web pages.
            </p>
          </div>

          {/* VERTICAL TIMELINE WITH GLOWING DOTS */}
          <div className="relative border-l border-white/15 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                {/* TIMELINE GLOWING DOT */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 transition-all shadow-[0_0_12px_rgba(56,189,248,0.6)]" />

                <div className="p-6 rounded-2xl glass-card border border-white/10 group-hover:border-sky-500/40 transition-all">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-zinc-300 font-semibold mb-4 flex items-center gap-4">
                    <span className="text-white font-bold">{exp.company}</span>
                    <span className="text-zinc-500">• {exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, index) => (
                      <li key={index} className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2 font-light">
                        <span className="text-sky-400 shrink-0 mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION & ACADEMIC CARDS */}
        <div id="education" className="scroll-mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-sky-400 mb-3 font-mono font-semibold">
                08 // ACADEMIC PROFILE
              </div>
              <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter uppercase">
                Education & <br /> <span className="text-outline">Achievements</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* EDUCATION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold uppercase tracking-wider text-zinc-200">Degree & Institution</h3>
                    <p className="text-xs font-mono text-zinc-400">Affiliated to Anna University</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-xl font-bold text-white">B.E. – Computer Science and Engineering</h4>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-zinc-300">Expected 2027</span>
                  </div>
                  
                  <p className="text-sm text-zinc-300 font-light">
                    Mohamed Sathak Engineering College, Kilakarai, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/15 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-400 font-semibold">Academic CGPA</span>
                <span className="text-2xl font-bold font-mono text-white text-sky-400">8.24 / 10</span>
              </div>
            </motion.div>

            {/* ACHIEVEMENTS & CERTIFICATIONS */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl glass-card border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xs font-display font-bold uppercase tracking-wider text-zinc-200">Key Achievements</h3>
                </div>

                <div className="space-y-2.5">
                  {achievements.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-zinc-200 leading-relaxed font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl glass-card border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <Award className="w-5 h-5 text-sky-400" />
                  <h3 className="text-xs font-display font-bold uppercase tracking-wider text-zinc-200">Certifications</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-300">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
