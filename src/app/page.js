'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe2, Layers, Server, Zap } from 'lucide-react';
import JsonLd, { getLocalBusinessSchema } from '@/components/JsonLd';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextReveal from '@/components/ui/TextReveal';
import { useState } from 'react';
import styles from './home.module.css';

const SERVICES = [
  {
    icon: Globe2,
    title: 'Web Platforms',
    desc: 'High-performance React/Next.js architectures designed for scale and SEO.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    icon: Cpu,
    title: 'AI Systems',
    desc: 'Custom LLM integrations, RAG pipelines, and automated workflows.',
    tags: ['OpenAI', 'LangChain', 'Python'],
  },
  {
    icon: Layers,
    title: 'Infrastructure',
    desc: 'Cloud deployment, CI/CD, and robust database architecture.',
    tags: ['AWS', 'Vercel', 'PostgreSQL'],
  },
  {
    icon: Code2,
    title: 'Plugins & Tools',
    desc: 'Bespoke internal tooling and CMS extensions for your team.',
    tags: ['Node.js', 'APIs', 'Extensions'],
  },
];

const METRICS = [
  { value: '100%', label: 'Delivery Rate' },
  { value: '< 2s', label: 'Load Times' },
  { value: '24/7', label: 'Support' },
  { value: '∞', label: 'Scalability' },
];

const CAPABILITIES = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    code: `export default function Architecture() {\n  return (\n    <ReactServerComponents>\n      <Suspense boundary={Loading}>\n        <DynamicEdgeRender />\n      </Suspense>\n    </ReactServerComponents>\n  )\n}`,
    benefits: ['Sub-second LCP', 'Edge caching', 'Zero layout shift'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    code: `async function processData(req) {\n  const auth = await verify(req);\n  if (!auth) throw new Unauthorized();\n  \n  const result = await db.transaction(tx => {\n    return tx.execute(complexQuery);\n  });\n  return new Response(result);\n}`,
    benefits: ['ACID Compliance', 'GraphQL / REST', 'Microservices'],
    color: 'from-emerald-500 to-green-400'
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    code: `def build_rag_pipeline(query):\n    vector = encoder.encode(query)\n    context = vector_db.similarity_search(vector, k=5)\n    \n    prompt = create_prompt(context, query)\n    return llm.generate(prompt)`,
    benefits: ['RAG Pipelines', 'Local LLMs', 'Vector DBs'],
    color: 'from-purple-500 to-fuchsia-400'
  }
];

export default function Home() {
  const [activeCap, setActiveCap] = useState(CAPABILITIES[0]);
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroContent}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--accent-blue)] uppercase tracking-widest">SYSTEM.INIT // READY</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-white">We architect</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="neon-text block mt-2"
              >
                software that ships.
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-mono max-w-2xl mx-auto mb-10 leading-relaxed">
              &gt; Premium full-stack engineering for startups and enterprise. We transform complex problems into elegant, scalable digital experiences.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                START_PROJECT <ArrowRight size={18} />
              </Link>
              <Link href="/work" className="btn-secondary">
                VIEW_ARCHIVES
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.heroVisual}
          >
            <div className="relative w-full aspect-square max-h-[600px]">
              <motion.img
                src="/hero_neon_1.jpg"
                alt="IMED OS Dashboard"
                className="absolute top-0 right-0 w-3/4 h-3/4 object-cover rounded-sm border border-[var(--border-strong)] shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-700"
                initial={{ y: 20 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="/hero_neon_2.jpg"
                alt="GenSpeech Voice Platform"
                className="absolute bottom-0 left-0 w-2/3 h-2/3 object-cover rounded-sm border border-[var(--border-strong)] shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-700"
                initial={{ y: -20 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              {/* Floating tech spec card */}
              <motion.div
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.8)] backdrop-blur-xl p-4 rounded-sm border border-[var(--accent-blue)] shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1, delay: 0.5 } }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                  <span className="font-mono text-[10px] text-[var(--accent-blue)]">PERFORMANCE_METRIC</span>
                </div>
                <div className="text-white font-mono text-sm tracking-wider">Lighthouse: 100/100</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className={styles.metrics}>
        <div className={styles.metricsInner}>
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.metricItem}
            >
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee / Deep Dive */}
      <section className="py-10 md:py-12 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-[var(--content-max)] mx-auto px-[var(--gutter)] mb-8">
          <h2 className="text-[var(--text-secondary)] font-mono text-sm uppercase tracking-widest text-center">
            Engineered with enterprise-grade technology
          </h2>
        </div>
        <div className="relative overflow-hidden group flex">
          <div className="py-4 animate-marquee whitespace-nowrap flex items-center space-x-8 sm:space-x-12 min-w-full shrink-0">
            {['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'PyTorch', 'LangChain', 'ChromaDB', 'Vercel', 'AWS', 'Docker'].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-[var(--border-strong)] mx-4 sm:mx-8 transition-colors hover:text-[var(--accent-blue)] cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center space-x-8 sm:space-x-12 min-w-full shrink-0">
            {['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'PyTorch', 'LangChain', 'ChromaDB', 'Vercel', 'AWS', 'Docker'].map((tech, i) => (
              <span key={`dup-${i}`} className="text-2xl md:text-4xl font-bold text-[var(--border-strong)] mx-4 sm:mx-8 transition-colors hover:text-[var(--accent-blue)] cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Epic Featured Case Study */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(59,130,246,0.05)] to-transparent pointer-events-none" />
        <div className="max-w-[var(--content-max)] mx-auto px-[var(--gutter)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Case Study Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-[var(--accent-blue)] text-[var(--accent-blue)] text-xs font-mono uppercase tracking-wider bg-[rgba(59,130,246,0.1)]">
                  Featured Case Study
                </span>
                <span className="text-[var(--text-tertiary)] font-mono text-sm">AI SYSTEM</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                IMED AI Placement <br className="hidden md:block" /> Intelligence Pipeline
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed max-w-xl">
                We engineered an end-to-end RAG (Retrieval-Augmented Generation) pipeline that automates student-to-job matching. By ingesting thousands of resumes and parsing unstructured job descriptions, the system dynamically ranks candidates with 94% accuracy, cutting manual review time by weeks.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">300+</div>
                  <div className="text-[var(--text-tertiary)] text-sm uppercase tracking-wider font-mono">Hours Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">94%</div>
                  <div className="text-[var(--text-tertiary)] text-sm uppercase tracking-wider font-mono">Match Accuracy</div>
                </div>
              </div>

              <Link href="/work/imed-ai-placement-pipeline" className="group inline-flex items-center gap-2 text-white font-medium hover:text-[var(--accent-blue)] transition-colors">
                Read the full deep dive
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Case Study Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-2xl mt-8 lg:mt-0"
            >
              {/* Main Image Layer */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-black shadow-2xl group">
                <img
                  src="/imed-os-1.png"
                  alt="IMED OS Platform Engine"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
              </div>

              {/* Layer 2: Dashboard Screenshot (Floating Bottom Right) */}
              <motion.div
                className="absolute right-0 md:-right-12 bottom-24 md:-bottom-12 w-[85%] md:w-[70%] aspect-video rounded-xl md:rounded-2xl border border-[var(--border-strong)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img src="/imed-os-2.png" alt="IMED OS Student Workspace" className="w-full h-full object-cover object-left-top" />
              </motion.div>

              {/* Layer 3: Test UI Screenshot (Floating Top Left) */}
              <motion.div
                className="absolute -left-2 md:-left-10 top-6 md:top-16 w-[70%] md:w-[55%] aspect-video rounded-xl border border-[var(--border-strong)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img src="/imed-os-3.png" alt="IMED OS Question Map" className="w-full h-full object-cover object-left-top" />
              </motion.div>

              {/* Floating Data UI */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-[rgba(10,10,12,0.85)] backdrop-blur-xl border border-[var(--border-subtle)] p-4 md:p-6 rounded-xl z-20">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] md:text-xs text-[var(--text-secondary)]">PROCESSING_BATCH_942</span>
                  <div className="flex gap-1">
                    <span className="w-1 md:w-1.5 h-3 md:h-4 bg-green-500 rounded-sm animate-pulse"></span>
                    <span className="w-1 md:w-1.5 h-3 md:h-4 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '100ms' }}></span>
                    <span className="w-1 md:w-1.5 h-3 md:h-4 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '200ms' }}></span>
                  </div>
                </div>
                <div className="w-full h-1 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[94%]"></div>
                </div>
                <div className="mt-2 text-right font-mono text-[9px] md:text-[10px] text-[var(--accent-blue)]">
                  MATCH_CONFIDENCE: 0.9412
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Capabilities Showcase */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden relative border-t border-[var(--border-subtle)]">
        <div className="absolute top-0 right-0 w-full max-w-[800px] h-[800px] bg-gradient-to-br from-[rgba(59,130,246,0.05)] to-[rgba(168,85,247,0.05)] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[var(--content-max)] mx-auto px-[var(--gutter)] relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Unfair Advantage Engineering</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We don't just write code. We architect systems that give your business an unfair advantage in the market. Click to explore our core disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {CAPABILITIES.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCap(cap)}
                  className={`text-left p-6 rounded-xl border transition-all duration-300 ${activeCap.id === cap.id
                    ? 'bg-[var(--bg-glass)] border-[var(--border-strong)] shadow-lg shadow-[rgba(0,0,0,0.5)] scale-105'
                    : 'bg-transparent border-[var(--border-subtle)] opacity-50 hover:opacity-100 hover:border-[var(--border-strong)]'
                    }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${activeCap.id === cap.id ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                    {cap.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap mt-4">
                    {cap.benefits.map(b => (
                      <span key={b} className={`text-xs font-mono px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] ${activeCap.id === cap.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive Code Window */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeCap.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-full h-full min-h-[400px] rounded-2xl border border-[var(--border-strong)] bg-[#0a0a0c] shadow-2xl overflow-hidden flex flex-col relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br ${activeCap.color} opacity-5 blur-[120px] pointer-events-none`} />

                {/* Window Header */}
                <div className="flex items-center px-4 py-3 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto text-xs font-mono text-[var(--text-tertiary)]">
                    {activeCap.id}.sys
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-8 flex-1 overflow-x-auto">
                  <pre className="font-mono text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    <code dangerouslySetInnerHTML={{ __html: activeCap.code.replace(/export|function|return|async|const|await|if|throw|def/g, match => `<span class="text-pink-400">${match}</span>`).replace(/ReactServerComponents|Suspense|DynamicEdgeRender|Response|Unauthorized/g, match => `<span class="text-blue-400">${match}</span>`).replace(/import|from/g, match => `<span class="text-purple-400">${match}</span>`) }} />
                  </pre>
                </div>

                {/* Status Footer */}
                <div className="px-6 py-3 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] flex justify-between items-center">
                  <span className="flex items-center gap-2 text-xs font-mono text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    COMPILED_SUCCESSFULLY
                  </span>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">
                    ~0ms latency
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Engineering Excellence</h2>
            <p className={styles.sectionDesc}>End-to-end capabilities tailored for modern demands.</p>
          </div>

          <div className={styles.bentoGrid}>
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <SpotlightCard className="h-full relative overflow-hidden group">
                  {/* Hover Image Reveal */}
                  <motion.div className="absolute inset-0 z-0 opacity-[0.05] sm:opacity-0 sm:group-hover:opacity-20 transition-opacity duration-700">
                    <img
                      src={
                        i === 0 ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' :
                            i === 2 ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' :
                              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
                      }
                      alt=""
                      className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                    />
                  </motion.div>

                  <div className={`relative z-10 ${styles.bentoContent}`}>
                    <div className={`${styles.iconBox} transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                      <service.icon size={24} className={styles.serviceIcon} />
                    </div>
                    <h3 className={`${styles.serviceTitle} transition-colors duration-300 group-hover:text-white`}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                    <div className={styles.serviceTags}>
                      {service.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extreme Engagement Models Section */}
      <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[var(--content-max)] mx-auto px-[var(--gutter)] relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">How We Engage</h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Transparent, flexible models designed for startups scaling fast and enterprises demanding perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Model 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-[var(--border-strong)] to-transparent hover:from-[var(--accent-blue)] transition-colors duration-500"
            >
              <div className="h-full bg-[var(--bg-glass)] backdrop-blur-xl rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Layers size={100} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Project Based</h3>
                <p className="text-[var(--text-secondary)] mb-8 flex-1">End-to-end delivery of a specific platform, app, or system.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Fixed scope & timeline</li>
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Dedicated Project Manager</li>
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Post-launch support</li>
                </ul>
                <div className="pt-6 border-t border-[var(--border-subtle)] text-white font-mono font-bold tracking-wider">
                  FROM $15,000
                </div>
              </div>
            </motion.div>

            {/* Model 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-[var(--accent-blue)] to-[rgba(59,130,246,0.1)] shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-shadow duration-500 md:-translate-y-4"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-blue)] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full z-20">
                Most Popular
              </div>
              <div className="h-full bg-[rgba(10,10,15,0.95)] backdrop-blur-xl rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Cpu size={100} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Dedicated Team</h3>
                <p className="text-[var(--text-secondary)] mb-8 flex-1">A specialized squad embedded directly into your startup or company.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-white"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Senior Engineers Only</li>
                  <li className="flex items-center gap-3 text-sm text-white"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Direct Slack/Discord Access</li>
                  <li className="flex items-center gap-3 text-sm text-white"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> Flexible Monthly Scaling</li>
                </ul>
                <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] text-white font-mono font-bold tracking-wider">
                  $8,000 / MONTH
                </div>
              </div>
            </motion.div>

            {/* Model 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-[var(--border-strong)] to-transparent hover:from-[var(--accent-blue)] transition-colors duration-500"
            >
              <div className="h-full bg-[var(--bg-glass)] backdrop-blur-xl rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Server size={100} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Advisory</h3>
                <p className="text-[var(--text-secondary)] mb-8 flex-1">High-level architectural consulting for existing engineering teams.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> System Audits</li>
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> AWS/GCP Cost Optimization</li>
                  <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" /> AI/LLM Strategy</li>
                </ul>
                <div className="pt-6 border-t border-[var(--border-subtle)] text-white font-mono font-bold tracking-wider">
                  CUSTOM HOURLY
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Methodology Section */}
      <section className="py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
        <div className="max-w-[var(--content-max)] mx-auto px-[var(--gutter)]">
          <div className="flex flex-col md:flex-row gap-16 justify-between mb-24">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                No handoffs.<br />
                <span className="text-[var(--text-tertiary)]">No excuses.</span>
              </h2>
            </div>
            <div className="md:w-1/2 text-xl text-[var(--text-secondary)] leading-relaxed flex flex-col justify-end">
              <p>
                We are a founder-led, engineering-first studio. That means the people who architect your platform are the exact same people writing the code, reviewing the deployments, and maintaining the servers. We don't farm your project out to juniors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[var(--border-subtle)] pt-16">
            <div className="group">
              <div className="text-4xl font-mono text-[var(--border-strong)] mb-8 transition-colors group-hover:text-[var(--accent-blue)]">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lighthouse Gate</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We don't ship until your platform scores 90+ across all four Lighthouse categories: Performance, Accessibility, Best Practices, and SEO. This isn't a goal; it's a strict deployment gate engineered into our CI/CD pipelines.
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-mono text-[var(--border-strong)] mb-8 transition-colors group-hover:text-[var(--accent-blue)]">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Zero-Downtime Architecture</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                From Dockerized environments to edge-network deployments via Vercel and AWS, your infrastructure is designed to handle massive traffic spikes without breaking a sweat. We build for horizontal scaling from day one.
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-mono text-[var(--border-strong)] mb-8 transition-colors group-hover:text-[var(--accent-blue)]">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Native Integration</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We don't just bolt-on ChatGPT APIs. We build custom RAG pipelines, fine-tune models, and deploy local open-source LLMs that live securely on your infrastructure, ensuring your proprietary data never leaves your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className={styles.ctaBox}>
              <div className={styles.ctaGlow} />
              <Zap size={40} className={styles.ctaIcon} />
              <h2>Ready to build something extraordinary?</h2>
              <p>Skip the agency fluff. Work directly with engineers who deliver.</p>
              <Link href="/contact" className="btn-primary">
                Initialize Project <ArrowRight size={18} />
              </Link>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
