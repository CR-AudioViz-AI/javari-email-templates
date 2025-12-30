'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Wand2, Download, Eye, Palette, Layout, Code, Smartphone, Zap, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

const TEMPLATES = [
  { name: 'Newsletter', icon: '📰', desc: 'Weekly updates & content' },
  { name: 'Welcome', icon: '👋', desc: 'New subscriber onboarding' },
  { name: 'Promotional', icon: '🎉', desc: 'Sales & special offers' },
  { name: 'Transactional', icon: '📧', desc: 'Receipts & confirmations' },
  { name: 'Announcement', icon: '📢', desc: 'Product launches & news' },
  { name: 'Re-engagement', icon: '💌', desc: 'Win back inactive users' },
];

const FEATURES = [
  { icon: Wand2, title: 'AI Content Generation', description: 'Describe your email and AI creates compelling copy that converts.', color: 'from-purple-500 to-pink-600' },
  { icon: Layout, title: 'Drag & Drop Builder', description: 'Intuitive visual editor with pre-built blocks for any content type.', color: 'from-blue-500 to-cyan-600' },
  { icon: Smartphone, title: 'Mobile Responsive', description: 'Every template looks perfect on desktop, tablet, and mobile.', color: 'from-green-500 to-emerald-600' },
  { icon: Palette, title: 'Brand Customization', description: 'Match your brand colors, fonts, and style with one click.', color: 'from-amber-500 to-orange-600' },
  { icon: Code, title: 'Clean HTML Export', description: 'Export battle-tested HTML that works in all email clients.', color: 'from-red-500 to-rose-600' },
  { icon: Eye, title: 'Live Preview', description: 'See exactly how your email looks across different clients.', color: 'from-indigo-500 to-purple-600' },
];

const STATS = [
  { value: '25K+', label: 'Emails Created' },
  { value: '50+', label: 'Templates' },
  { value: '99%', label: 'Client Compatible' },
  { value: '3 credits', label: 'Per Template' },
];

export default function EmailTemplatePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Email Builder</span>
                <span className="text-cyan-400 text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#templates" className="text-gray-300 hover:text-white">Templates</a>
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="/create" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg">Create Email</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Email Design</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Beautiful Emails
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">That Convert</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Create responsive, beautiful email templates in minutes. AI handles the design and copy so you can focus on results.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="/create" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center gap-2">
              Start Building <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#templates" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5">Browse Templates</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Email Templates for Every Purpose</h2>
            <p className="text-gray-400">Start from a template or let AI create a custom design</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEMPLATES.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-cyan-500/50 transition cursor-pointer group">
                <div className="text-3xl mb-2">{t.icon}</div>
                <div className="font-medium text-white group-hover:text-cyan-400 transition">{t.name}</div>
                <div className="text-xs text-gray-500">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Professional email design made simple.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create?</h2>
          <p className="text-xl text-gray-400 mb-8">Design emails that get opened, read, and clicked.</p>
          <a href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl">
            Build Your Email <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-semibold">Email Template Builder</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} CR AudioViz AI, LLC.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
