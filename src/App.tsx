import React from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { InteractiveBackground } from './components/common/InteractiveBackground';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Architecture } from './components/Architecture/Architecture';
import { Services } from './components/Services/Services';
import { GitHub } from './components/GitHub/GitHub';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-[#0F172A] dark:text-[#F3F4F6] selection:bg-[#00F0FF]/25 selection:text-[#00F0FF] transition-colors duration-300">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Hardware-Accelerated Smooth Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Performant Low-GPU Interactive Background */}
      <InteractiveBackground />

      {/* Sticky Glassmorphic Navbar with Active Section Detection */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Services />
        <GitHub />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
