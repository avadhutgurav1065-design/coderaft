'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertCircle, Lightbulb, TrendingUp, Layers, Code2, Cpu, ArrowRight } from 'lucide-react';
import styles from './casestudy.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function CaseStudyUI({ project, prevProject, nextProject, diagram }) {
  // Standard Base Theme
  const theme = {
    bg: 'bg-[var(--bg-primary)]',
    textPrimary: 'text-[var(--text-primary)]',
    textSecondary: 'text-[var(--text-secondary)]',
    cardBg: 'bg-[var(--bg-secondary)]',
    border: 'border-[var(--border-subtle)]',
    borderStrong: 'border-[var(--border-strong)]',
    accentText: 'text-blue-400',
    accentHover: 'group-hover:text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/30',
    heroBg: 'bg-black',
    diagramAccent: 'text-blue-500/50',
    diagramHover: 'hover:border-blue-500/60',
  };

  return (
    <div className={`pt-32 pb-24 min-h-screen ${theme.bg} ${theme.textPrimary} overflow-hidden transition-colors duration-700`}>
      {/* Abstract Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `48px 48px`
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeIn} className={`inline-block py-1 px-3 rounded-full border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText} text-sm font-mono tracking-widest uppercase mb-6`}>
            {project.category}
          </motion.span>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {project.title}
          </motion.h1>
        </motion.div>

        {/* Hero Image */}
        {project.heroImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`relative rounded-3xl overflow-hidden border ${theme.borderStrong} ${theme.heroBg} shadow-2xl mb-24 group`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src={project.heroImage} 
              alt={`${project.title} Hero`} 
              className="w-full h-auto max-h-[80vh] object-cover transition-transform duration-1000 group-hover:scale-105 relative z-0"
            />
          </motion.div>
        )}

        {/* At a Glance (Bento Metrics) */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32"
        >
          {[
            { label: 'Timeline', value: project.timeline },
            { label: 'Role', value: project.role.split('+')[0].trim() },
            { label: 'Stack', value: project.techTags.slice(0, 2).join(', ') },
            { label: 'Result', value: project.tagline }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeIn} className={`p-6 md:p-8 rounded-2xl border ${theme.border} ${theme.cardBg} ${theme.hoverBorder} transition-colors group`}>
              <span className={`block text-xs font-mono ${theme.textSecondary} uppercase tracking-widest mb-4 ${theme.accentHover} transition-colors`}>{stat.label}</span>
              <span className={`block text-lg md:text-xl font-semibold ${theme.textPrimary} leading-tight`}>{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-32 mb-32">
          
          {/* The Problem */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-center"
          >
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8">
                <AlertCircle className="text-red-500" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Problem</h2>
              <p className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed`}>
                {project.problem}
              </p>
            </div>
            <div className={`w-full md:w-1/2 aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent border ${theme.border} flex items-center justify-center relative overflow-hidden`}>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="w-32 h-32 rounded-full border border-red-500/20 absolute blur-xl animate-pulse"></div>
               <AlertCircle className="text-red-500/20" size={120} />
            </div>
          </motion.div>

          {/* The Approach */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center"
          >
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                <Lightbulb className="text-blue-500" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Approach</h2>
              <p className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed`}>
                {project.approach}
              </p>
            </div>
            <div className={`w-full md:w-1/2 aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent border ${theme.border} flex items-center justify-center relative overflow-hidden`}>
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="w-32 h-32 rounded-full border border-blue-500/20 absolute blur-xl animate-pulse delay-75"></div>
               <Lightbulb className="text-blue-500/20" size={120} />
            </div>
          </motion.div>

          {/* The Result */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-center"
          >
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                <TrendingUp className="text-emerald-500" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Result</h2>
              <p className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed`}>
                {project.result}
              </p>
            </div>
            <div className={`w-full md:w-1/2 aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent border ${theme.border} flex items-center justify-center relative overflow-hidden`}>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="w-32 h-32 rounded-full border border-emerald-500/20 absolute blur-xl animate-pulse delay-150"></div>
               <TrendingUp className="text-emerald-500/20" size={120} />
            </div>
          </motion.div>

        </div>

        {diagram && (
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <Layers className={theme.textSecondary} />
              <h2 className="text-3xl font-bold">System Architecture</h2>
            </div>
            <div className={`p-8 md:p-16 rounded-3xl ${theme.cardBg} border ${theme.borderStrong} overflow-hidden relative`}>
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
                {diagram.map((node, i) => (
                  <motion.div key={node} variants={fadeIn} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <div className={`px-6 py-4 rounded-xl bg-[var(--bg-primary)] border ${theme.accentBorder} shadow-[0_0_20px_rgba(59,130,246,0.05)] text-sm md:text-base font-mono font-medium text-center hover:scale-105 ${theme.diagramHover} transition-all cursor-default`}>
                      {node}
                    </div>
                    {i < diagram.length - 1 && (
                      <div className={`${theme.diagramAccent} hidden md:block`}>
                        <ArrowRight size={24} />
                      </div>
                    )}
                    {i < diagram.length - 1 && (
                      <div className={`${theme.diagramAccent} block md:hidden rotate-90`}>
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <Cpu className={theme.textSecondary} />
              <h2 className="text-3xl font-bold">Interface & Implementation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <motion.div key={idx} variants={fadeIn} className={`group relative overflow-hidden rounded-3xl border ${theme.borderStrong} ${theme.heroBg} shadow-2xl`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={img} 
                    alt={`${project.title} Screenshot ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <Code2 className={theme.textSecondary} />
            <h2 className="text-3xl font-bold">Technology Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(project.stack).map(([layer, items]) => (
              <div key={layer} className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} ${theme.hoverBorder} transition-colors group`}>
                <span className={`block text-xs font-mono ${theme.textSecondary} uppercase tracking-widest mb-6 ${theme.accentHover} transition-colors`}>{layer}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className={`px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] border ${theme.borderStrong} text-sm font-medium ${theme.textPrimary}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prev/Next Navigation */}
        <nav className={`grid grid-cols-1 md:grid-cols-2 gap-4 border-t ${theme.border} pt-16`}>
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className={`p-8 rounded-3xl border border-transparent ${theme.hoverBorder} hover:bg-[var(--bg-secondary)] transition-all group flex flex-col`}
            >
              <span className={`text-sm font-mono ${theme.textSecondary} uppercase tracking-widest mb-4 ${theme.accentHover} transition-colors`}>← Previous Project</span>
              <span className={`text-2xl font-bold ${theme.textPrimary}`}>{prevProject.title}</span>
            </Link>
          ) : <div />}
          
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className={`p-8 rounded-3xl border border-transparent ${theme.hoverBorder} hover:bg-[var(--bg-secondary)] transition-all group flex flex-col text-right items-end`}
            >
              <span className={`text-sm font-mono ${theme.textSecondary} uppercase tracking-widest mb-4 ${theme.accentHover} transition-colors`}>Next Project →</span>
              <span className={`text-2xl font-bold ${theme.textPrimary}`}>{nextProject.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </div>
  );
}
