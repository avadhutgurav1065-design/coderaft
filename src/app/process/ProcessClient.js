'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TerminalAnimation from '@/components/TerminalAnimation';
import { 
  GitMerge, Terminal, Cpu, ShieldCheck, Rocket, 
  Code2, Database, Globe, Settings, Workflow, 
  CheckCircle2, Lock, Zap
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    desc: 'We start with a scoping call to understand your business, your users, and what "done" looks like. Then we run a technical audit if you have existing systems, and deliver a proposal with fixed milestones, a clear timeline, and transparent pricing. No surprises.',
    details: [
      'Technical Feasibility Audit',
      'Architecture Topology Design',
      'Milestone Definition',
      'Security & Scale Requirements'
    ],
    image: '/process_discovery.jpg'
  },
  {
    number: '02',
    title: 'Engineering & Build',
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    desc: 'Development runs in focused sprints. You get a staging environment from day one — not a reveal at the end. Weekly check-ins keep you in the loop without eating your calendar. We write clean, documented code because we\'re the ones maintaining it later.',
    details: [
      'CI/CD Pipeline Setup',
      'Atomic Component Architecture',
      'Weekly Live Staging Deployments',
      'Database Schema Engineering'
    ],
    image: '/process_build.jpg'
  },
  {
    number: '03',
    title: 'Quality Assurance & Security',
    icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    desc: 'Before anything goes live, we run a full QA pass across devices, a performance audit (our gate is 90+ on all four Lighthouse categories), and a security review. Deployment is automated — no manual FTP uploads, no crossing fingers.',
    details: [
      'Lighthouse 90+ Performance Gate',
      'Penetration & Vulnerability Testing',
      'Cross-Browser & Device Matrix',
      'Automated Test Suites (E2E & Unit)'
    ],
    image: '/process_qa.jpg'
  },
  {
    number: '04',
    title: 'Deployment & Scaling',
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    desc: 'After launch, we handle ongoing server monitoring, security patches, uptime alerts, and iterative improvements. Your site doesn\'t become an orphan the day it ships. Most of our clients stay with us because this part works.',
    details: [
      'Zero-Downtime Blue/Green Deployment',
      'CDN & Edge Caching Setup',
      '24/7 Uptime Monitoring',
      'Scalable Auto-Provisioning'
    ],
    image: '/process_deploy.jpg'
  },
];

const PHILOSOPHIES = [
  {
    title: 'Code Over Slides',
    desc: 'We don\'t waste your time with 50-page slide decks. We build prototypes and staging links. You can click, interact, and test real software.',
    icon: <Terminal className="text-[var(--accent-blue)]" size={32} />
  },
  {
    title: 'Founder-Led Execution',
    desc: 'No junior devs experimenting on your dime. The founders scope the architecture, write the core logic, and review every single PR.',
    icon: <GitMerge className="text-[var(--accent-blue)]" size={32} />
  },
  {
    title: 'Performance as a Baseline',
    desc: 'Speed isn\'t an afterthought. Every project we ship must pass strict performance, accessibility, and SEO gates before deployment.',
    icon: <Zap className="text-[var(--accent-blue)]" size={32} />
  },
  {
    title: 'Fort Knox Security',
    desc: 'From parameterized queries to CSRF tokens and JWTs, security is embedded in our workflow. We build systems that are hardened by default.',
    icon: <Lock className="text-[var(--accent-blue)]" size={32} />
  }
];

export default function ProcessClient() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-32 overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm mb-8">
            <Workflow size={16} /> The Coderaft Methodology
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            How we engineer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Digital Dominance</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
            We don&apos;t subcontract your project to juniors or offshore teams. The engineers who scope your project are the same ones who write the code, configure the servers, and deploy to production.
          </p>
        </motion.div>
      </div>

      {/* Terminal Animation Break */}
      <div className="max-w-5xl mx-auto px-6 mb-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-[var(--border-strong)] shadow-[0_0_50px_rgba(59,130,246,0.1)] bg-black/50 backdrop-blur-md p-4"
        >
          <TerminalAnimation lines={[
            "> Initiating project protocol...",
            "> Loading requirements...",
            "> Auditing legacy architecture... [WARNING: Inefficiencies detected]",
            "> Compiling new system topology...",
            "> Deploying to staging... SUCCESS",
            "> System is ready for review."
          ]} />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Four steps. Zero handoffs.</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            A linear, transparent, and battle-tested pipeline that turns complex problems into scalable software.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden md:block" />
          
          <div className="space-y-32">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center relative`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#050505] border-2 border-blue-500/50 items-center justify-center z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)] text-blue-400 font-mono font-bold text-xl">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-12">
                    <div className="md:hidden inline-flex items-center gap-4 mb-6">
                       <span className="text-3xl font-mono text-blue-500 font-bold opacity-50">{step.number}</span>
                       <div className="h-px bg-blue-500/30 flex-grow" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      {step.icon}
                      <h3 className="text-3xl lg:text-4xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                      {step.desc}
                    </p>
                    <ul className="space-y-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-[var(--text-tertiary)] font-mono text-sm bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg">
                          <CheckCircle2 className="text-blue-500 w-4 h-4 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Card */}
                  <div className="w-full md:w-1/2">
                    <SpotlightCard className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay z-10 group-hover:opacity-100 transition-opacity opacity-0" />
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:mix-blend-normal transition-all duration-700"
                      />
                      <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
                    </SpotlightCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Philosophies Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Philosophies</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            We operate differently than traditional agencies. This is what you can expect when you partner with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full p-10 flex flex-col gap-6 hover:border-[rgba(59,130,246,0.3)] transition-colors bg-[#050505]">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-strong)] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
