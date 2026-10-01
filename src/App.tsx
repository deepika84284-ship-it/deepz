import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AITools } from './components/AITools';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { AIProjectsHighlight } from './components/AIProjectsHighlight';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Lenis from '@studio-freight/lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#050508] text-white selection:bg-sky-400 selection:text-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AITools />
      <TechStack />
      <Projects />
      <AIProjectsHighlight />
      <ExperienceEducation />
      <Contact />
      <Footer />
    </main>
  );
}
