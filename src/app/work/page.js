'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import projects from '@/data/projects.json';
import styles from './work.module.css';

const FILTERS = ['All', 'Websites', 'Plugins', 'AI Systems'];

function WorkContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'All';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && FILTERS.includes(filter)) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="relative pt-32 pb-20">
        {/* Abstract background elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                Selected Work
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                A showcase of digital products, platforms, and AI systems engineered for scale.
                Explore how we transform complex challenges into elegant solutions.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 bg-[var(--bg-secondary)] p-2 rounded-2xl border border-[var(--border-subtle)]">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`px-5 py-2.5 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-300 ${activeFilter === filter
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                      : 'text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-primary)] border border-transparent'
                    }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="flex flex-col gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    key={project.slug}
                    className={`flex flex-col gap-12 group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
                  >
                    {/* Image Section */}
                    <Link href={`/work/${project.slug}`} className="w-full lg:w-3/5 relative block">
                      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--border-strong)] bg-black shadow-2xl transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.img
                          src={project.heroImage || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&seed=${project.title}`}
                          alt={project.title}
                          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Interactive overlay elements */}
                        <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <div className="flex gap-3 flex-wrap">
                            {project.techTags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-mono text-white tracking-widest uppercase">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Content Section */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="font-mono text-sm tracking-widest uppercase text-blue-400">
                          {project.category}
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500">
                        {project.title}
                      </h2>

                      <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                        {project.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-10 pt-8 border-t border-[var(--border-subtle)]">
                        <div>
                          <span className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-2">Timeline</span>
                          <span className="text-white font-medium">{project.timeline || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-2">Role</span>
                          <span className="text-white font-medium">{project.role ? project.role.split('+')[0] : 'Engineering'}</span>
                        </div>
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-3 text-white font-medium hover:text-blue-400 transition-colors w-fit border-b border-transparent hover:border-blue-400 pb-1"
                      >
                        Explore Case Study
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xl text-[var(--text-secondary)] py-32 border border-dashed border-[var(--border-strong)] rounded-3xl"
                >
                  No projects found in this category.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default function Work() {
  return (
    <section className={styles.work}>
      <div className={styles.workInner}>
        <Suspense fallback={null}>
          <WorkContent />
        </Suspense>
      </div>
    </section>
  );
}
