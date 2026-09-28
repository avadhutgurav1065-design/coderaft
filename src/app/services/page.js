'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Layout, Shield, Cpu, Activity, Server, Zap, CheckCircle2 } from 'lucide-react';
import TextReveal from '@/components/ui/TextReveal';

const SERVICES = [
  {
    id: 'web-platforms',
    title: 'Enterprise Web Platforms',
    shortTitle: 'Web Platforms',
    tagline: 'High-performance React architectures designed for extreme scale.',
    desc: 'We architect mission-critical web applications with server-side rendering, edge caching, and atomic component design. If your current site is bottlenecking your growth, we engineer the solution from the ground up.',
    icon: Layout,
    metrics: [
      { label: 'Lighthouse Score', value: '100' },
      { label: 'Time to Interactive', value: '< 1.2s' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Global Edge Latency', value: '< 50ms' }
    ],
    tech: ['Next.js 14', 'React Server Components', 'Tailwind CSS', 'Framer Motion', 'Turbopack'],
    architecture: 'Edge network deployment via Vercel with global CDN caching, atomic deployments, and ISR (Incremental Static Regeneration) for real-time data without performance hits.',
    deliverables: ['Custom Design System', 'Headless CMS Integration (Sanity/Contentful)', 'Automated CI/CD Pipeline', 'Technical SEO Setup', 'E2E Testing Suite (Cypress)'],
    processes: ['Requirements Discovery', 'Component Driven Architecture', 'Performance Budgeting', 'Automated QA', 'Blue/Green Deployment'],
    color: 'from-blue-600 to-cyan-500',
    theme: 'blue',
    image: '1451187580459-43490279c0fa'
  },
  {
    id: 'ai-systems',
    title: 'AI & Data Intelligence',
    shortTitle: 'AI Intelligence',
    tagline: 'Custom LLM integrations and proprietary RAG pipelines.',
    desc: 'Stop relying on generic ChatGPT wrappers. We architect custom, private AI pipelines that ingest your proprietary company data, automate complex workflows, and run securely on your own infrastructure.',
    icon: Cpu,
    metrics: [
      { label: 'Query Latency', value: '< 200ms' },
      { label: 'Match Accuracy', value: '94%+' },
      { label: 'Data Privacy', value: '100% Local' },
      { label: 'Tokens Processed/sec', value: '10k+' }
    ],
    tech: ['Python / FastAPI', 'LangChain', 'ChromaDB', 'Local Open-Source LLMs', 'PyTorch'],
    architecture: 'Vector database ingestion paired with semantic search, chunking algorithms, and localized LLM inference running on dedicated GPU clusters.',
    deliverables: ['Private Vector Database', 'Custom Model Fine-tuning', 'API Gateway Setup', 'Data Sanitization Pipeline', 'Admin Analytics Dashboard'],
    processes: ['Data Auditing', 'Vectorization Strategy', 'Model Selection (Llama 3 / Mistral)', 'Prompt Engineering', 'Evaluation & Guardrails'],
    color: 'from-purple-600 to-fuchsia-500',
    theme: 'purple',
    image: '1677442136019-21780ecad995'
  },
  {
    id: 'infrastructure',
    title: 'Cloud Infrastructure',
    shortTitle: 'Infrastructure',
    tagline: 'Zero-downtime architecture and automated CI/CD pipelines.',
    desc: 'We stabilize fragile systems. By containerizing your applications and implementing infrastructure as code (IaC), we ensure your platforms can handle massive traffic spikes without a single dropped request.',
    icon: Database,
    metrics: [
      { label: 'Deployment Time', value: '< 3m' },
      { label: 'Auto-scaling', value: 'Dynamic' },
      { label: 'Security Standard', value: 'SOC2 Ready' },
      { label: 'Backup Frequency', value: 'Hourly' }
    ],
    tech: ['Docker', 'AWS / GCP', 'PostgreSQL', 'Redis', 'Terraform'],
    architecture: 'Containerized microservices orchestrated behind automated load balancers with read-replica databases and in-memory Redis caching.',
    deliverables: ['Docker Swarm / K8s Setup', 'Automated Backups', 'DDoS Protection', 'Zero-downtime Deployments', '24/7 Uptime Monitoring'],
    processes: ['Security Audit', 'Infrastructure as Code Translation', 'Load Testing', 'Disaster Recovery Plan', 'Monitoring Setup'],
    color: 'from-emerald-600 to-green-500',
    theme: 'emerald',
    image: '1558494949-ef010cbdcc31'
  },
  {
    id: 'cybersecurity',
    title: 'Security & Penetration',
    shortTitle: 'Cybersecurity',
    tagline: 'Hardening digital perimeters against modern attack vectors.',
    desc: 'Security isn\'t an afterthought. We conduct deep-dive vulnerability assessments, secure your APIs against OWASP top 10 threats, and implement zero-trust architectures for internal tooling.',
    icon: Shield,
    metrics: [
      { label: 'Vulnerabilities', value: '0' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Authentication', value: 'MFA/SSO' },
      { label: 'Audit Score', value: 'A+' }
    ],
    tech: ['Cloudflare', 'Auth0', 'OWASP Standards', 'JWT', 'WAF'],
    architecture: 'Zero-trust network architecture with Web Application Firewalls (WAF) and strict rate-limiting at the edge.',
    deliverables: ['Penetration Testing Report', 'API Security Hardening', 'Role-Based Access Control (RBAC)', 'Data Encryption at Rest', 'Compliance Auditing'],
    processes: ['Threat Modeling', 'Automated Scanning', 'Manual Pen Testing', 'Patch Implementation', 'Continuous Monitoring'],
    color: 'from-red-600 to-orange-500',
    theme: 'red',
    image: '1550439062-609e1531270e'
  }
];

export default function Services() {
  return (
    <div className="bg-[#020202] min-h-screen pt-32 pb-20 flex flex-col">
      {/* Header */}
      <div className="px-[var(--gutter)] max-w-[1600px] mx-auto w-full mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Engineering <span className="text-[var(--text-tertiary)]">Disciplines</span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Explore our architecture topologies, deliverables, and technology stacks.
        </p>
      </div>

      {/* Services Stack */}
      <div className="px-[var(--gutter)] max-w-[1200px] mx-auto w-full flex flex-col gap-32">
        {SERVICES.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <h2 className={`text-4xl md:text-5xl font-bold text-white flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)] pb-4 mb-2`}>
                <ServiceIcon className={`text-${service.theme}-500`} size={40} />
                {service.shortTitle}
              </h2>

              {/* Massive Service Card */}
              <div className="bg-[#050505] border border-[var(--border-strong)] rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all hover:border-[rgba(255,255,255,0.1)] hover:shadow-[0_0_120px_rgba(0,0,0,0.8)]">

                {/* Cinematic Header Image */}
                <div className="relative w-full min-h-[400px] lg:min-h-[450px] flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-20 mix-blend-overlay z-10`} />
                  <img
                    src={`https://images.unsplash.com/photo-${service.image}?auto=format&fit=crop&q=80&w=1600`}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"
                  />

                  {/* Overlay Header Info */}
                  <div className="relative z-20 p-8 lg:p-12">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${service.theme}-500/10 border border-${service.theme}-500/20 text-${service.theme}-400 text-xs font-mono uppercase tracking-widest mb-4`}>
                      <ServiceIcon size={14} /> System Verified
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Data Grid Area */}
                <div className="p-8 lg:p-12">

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {service.metrics.map(m => (
                      <div key={m.label} className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] flex flex-col justify-center">
                        <div className="text-3xl font-bold text-white mb-2">{m.value}</div>
                        <div className="text-xs font-mono uppercase text-[var(--text-tertiary)]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Architecture & Tech */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Database className={`text-${service.theme}-400`} />
                        Architecture & Tech Stack
                      </h3>
                      <div className="p-6 rounded-2xl bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)] mb-6">
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          <strong className="text-white block mb-2 font-mono text-sm uppercase">Topology Context:</strong>
                          {service.architecture}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg text-sm font-mono text-white">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Process */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Activity className={`text-${service.theme}-400`} />
                        Execution & Deliverables
                      </h3>

                      <div className="mb-8">
                        <h4 className="text-sm font-mono uppercase text-[var(--text-tertiary)] mb-4">Core Deliverables</h4>
                        <ul className="space-y-3">
                          {service.deliverables.map(d => (
                            <li key={d} className="flex items-start gap-3 text-[var(--text-secondary)]">
                              <CheckCircle2 size={18} className={`text-${service.theme}-500 shrink-0 mt-0.5`} />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono uppercase text-[var(--text-tertiary)] mb-4">Pipeline Protocol</h4>
                        <div className="flex flex-col gap-2 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[rgba(255,255,255,0.1)]">
                          {service.processes.map((p, i) => (
                            <div key={p} className="flex items-center gap-4 relative z-10 pl-8">
                              <div className="absolute left-1.5 w-2 h-2 rounded-full bg-[var(--text-tertiary)] border-2 border-[#050505]" />
                              <span className="text-sm text-[var(--text-secondary)]">{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Terminal Output */}
                  <div className="w-full bg-[#030303] rounded-xl border border-[rgba(255,255,255,0.1)] p-6 font-mono text-xs overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-[var(--text-tertiary)] ml-2">sys_monitor_d</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[var(--text-tertiary)]">$ initializing {service.id} module...</p>
                      <p className="text-[var(--text-secondary)]">LOADING DEPENDENCIES: [{service.tech.join(', ')}]</p>
                      <p className={`text-${service.theme}-400`}>ESTABLISHING SECURE CONNECTION...</p>
                      <p className="text-green-500 font-bold">STATUS: READY FOR DEPLOYMENT</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Global CTA at the bottom */}
        <div className="mt-12 p-8 lg:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-center max-w-3xl mx-auto w-full mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <Zap size={48} className="text-[var(--accent-blue)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              We architect bespoke engineering solutions outside these core disciplines. Tell us about your technical challenges.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Contact Engineering <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
