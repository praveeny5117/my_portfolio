import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, AlertCircle, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { socialLinks } from '../../data/social';
import { GitHubIcon, LinkedInIcon } from '../common/BrandIcons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "yonaspraveen@gmail.com";
  const phoneNumber = "+91 96268 30829";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = "Full name or organization is required";
    } else if (form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address (e.g. name@company.com)";
    }

    if (!form.message.trim()) {
      errs.message = "Message details are required";
    } else if (form.message.trim().length < 15) {
      errs.message = "Please include at least 15 characters describing your project";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch pipeline
    // Integration point: replace this with EmailJS, Formspree, or your AWS SES Node endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#3B82F6', '#10B981']
      });

      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
            <span>Initiate Direct Contact</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-[1.05]">
            LET'S BUILD <br />
            <span className="text-[#00F0FF]">SOMETHING GREAT.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-xl font-sans leading-relaxed">
            Whether you have an enterprise platform in need of architectural leadership, a high-throughput API requiring optimization, or a greenfield SaaS product—I am ready to help.
          </p>
        </motion.div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels & Quick Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick Copy Email & Contact Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase text-zinc-400">
                Direct Communication Channels:
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-white">
                <span className="truncate">{emailAddress}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#00F0FF] hover:text-black transition-all flex items-center gap-1.5 shrink-0 hover:-translate-y-0.5 active:translate-y-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-bold text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-white">
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{phoneNumber}</span>
                </span>
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/30 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5"
                >
                  Call Direct
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Kallakurichi, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-zinc-400">
                Verified Social Profiles:
              </div>

              <div className="space-y-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 hover:border-[#00F0FF]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00F0FF]/15 group-hover:text-[#00F0FF] transition-all duration-200 group-hover:scale-105">
                        {item.name === 'GitHub' && <GitHubIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                        {item.name === 'LinkedIn' && <LinkedInIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                        {item.name === 'Email' && <Mail className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm text-white dark:text-white light:text-zinc-900 group-hover:text-[#00F0FF] transition-colors">
                          {item.name}
                        </div>
                        <div className="font-mono text-xs text-zinc-400">
                          {item.handle}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00F0FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 shadow-2xl relative">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 mb-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Message Dispatched Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto">
                      Thank you for reaching out. Your transmission has been recorded and I will respond to your provided address shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-mono font-medium transition-colors"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-2">
                    Your Name or Organization *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Elena Rostova / Acme Enterprise"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border ${
                      errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 dark:border-white/10 light:border-zinc-300'
                    } text-white dark:text-white light:text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] text-sm transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="elena@acme-corp.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 dark:border-white/10 light:border-zinc-300'
                    } text-white dark:text-white light:text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] text-sm transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-2">
                    Engagement Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="SaaS Platform Architecture / Lead Full Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 text-white dark:text-white light:text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] text-sm transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-2">
                    Project Scope / Transmission Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your tech stack, system requirements, timeline, and current engineering roadblocks..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 dark:border-white/10 light:border-zinc-300'
                    } text-white dark:text-white light:text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] text-sm transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4 px-6 rounded-xl bg-white dark:bg-white light:bg-zinc-950 text-black dark:text-black light:text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF] dark:hover:bg-[#00F0FF] light:hover:bg-zinc-800 transition-all duration-200 shadow-lg hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
