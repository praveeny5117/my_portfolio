import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const { toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Services', href: '#services' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  const sectionIds = navLinks.map(l => l.href.substring(1));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#050505]/85 dark:bg-[#050505]/85 light:bg-[#FFFFFF]/85 backdrop-blur-md border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Status indicator */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white dark:text-white light:text-zinc-900 transition-colors"
                aria-label="Praveen Yonas Portfolio Home"
              >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 group-hover:border-[#00F0FF]/50 group-hover:scale-105 transition-all duration-200">
                  <Terminal className="w-4 h-4 text-[#00F0FF] transition-transform duration-200 group-hover:rotate-6" />
                </div>
                <span className="flex items-center tracking-wider transition-colors duration-200 group-hover:text-white">
                  PRAVEEN<span className="text-[#00F0FF] font-mono">.YONAS</span>
                </span>
              </a>

              {/* Status Indicator Badge (Desktop) */}
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium transition-transform duration-200 hover:scale-[1.02]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Q2 Projects</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100/90 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 ${
                      isActive
                        ? 'text-white dark:text-white light:text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBubble"
                        className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/10 light:bg-zinc-300/60 border border-white/15 dark:border-white/15 light:border-zinc-400/50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right side: Theme toggle + Let's Talk CTA */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-[#00F0FF] dark:hover:text-[#00F0FF] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50"
              >
                {isDark ? <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" /> : <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />}
              </button>

              {/* CTA Let's Talk */}
              <button
                onClick={() => {
                  if (onContactClick) onContactClick();
                  handleLinkClick('#contact');
                }}
                className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase font-mono rounded-lg bg-[#00F0FF] hover:bg-[#38F8FF] text-black shadow-glow-accent transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 focus:outline-none transition-transform duration-200 active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-[#0D0D0D]/95 dark:bg-[#0D0D0D]/95 light:bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-zinc-200 px-6 py-6 shadow-2xl"
          >
            {/* Mobile status banner */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for high-impact opportunities</span>
            </motion.div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.03, duration: 0.25 }}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/10 dark:bg-white/10 light:bg-zinc-200 text-[#00F0FF] font-semibold'
                        : 'text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.03, duration: 0.25 }}
                onClick={() => handleLinkClick('#contact')}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#00F0FF] text-black font-semibold font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
              >
                <span>Initiate Conversation</span>
                <Sparkles className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
