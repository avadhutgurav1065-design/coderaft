'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Layout, Shield, Cpu, Activity, Server, Zap, CheckCircle2, Smartphone, Network } from 'lucide-react';
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
    image: '/neon_interface_1.jpg'
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
    image: '/process_build.jpg'
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
    image: '/process_deploy.jpg'
  },
  {
    id: 'mobile-engineering',
    title: 'Mobile Architecture',
    shortTitle: 'Mobile Engineering',
    tagline: 'High-octane native and cross-platform mobile experiences.',
    desc: 'We don\'t just build mobile apps; we engineer fluid, high-performance native experiences. From 120fps animations to complex offline-first database sync, we deliver apps that dominate the App Store.',
    icon: Smartphone,
    metrics: [
      { label: 'Render Target', value: '120 FPS' },
      { label: 'Crash-free Users', value: '99.9%' },
      { label: 'Offline Sync', value: 'Instant' },
      { label: 'Payload Size', value: '< 20MB' }
    ],
    tech: ['React Native', 'Swift', 'Kotlin', 'WatermelonDB', 'Reanimated'],
    architecture: 'Local-first architecture using SQLite with background synchronization, leveraging JSI for direct C++ to JavaScript communication without bridge latency.',
    deliverables: ['iOS/Android Binaries', 'App Store Optimization (ASO)', 'CI/CD with Fastlane', 'Native Modules', 'Over-The-Air (OTA) Updates'],
    processes: ['UX/UI Prototyping', 'Native Bridge Configuration', 'Memory Profiling', 'Beta Testing (TestFlight)', 'Store Deployment'],
    color: 'from-pink-600 to-rose-500',
    theme: 'pink',
    image: '/neon_interface_2.jpg'
  },
  {
    id: 'web3-blockchain',
    title: 'Decentralized Systems',
    shortTitle: 'Web3 & Blockchain',
    tagline: 'Immutable ledgers, smart contracts, and decentralized finance protocols.',
    desc: 'Secure, audited, and gas-optimized smart contracts. We build the decentralized infrastructure that powers the next generation of financial and identity systems.',
    icon: Network,
    metrics: [
      { label: 'Smart Contract Audit', value: 'Passed' },
      { label: 'Gas Optimization', value: 'Max' },
      { label: 'Consensus', value: 'PoS / PoW' },
      { label: 'Transaction Latency', value: '< 2s' }
    ],
    tech: ['Solidity', 'Rust', 'Hardhat', 'Ethers.js', 'IPFS'],
    architecture: 'Modular smart contract architecture with proxy patterns for upgradeability, backed by off-chain indexing via The Graph.',
    deliverables: ['Audited Smart Contracts', 'DApp Frontend', 'Custom Subgraphs', 'Tokenomics Design', 'Wallet Integration'],
    processes: ['Protocol Design', 'Testnet Deployment', 'Formal Verification', 'Mainnet Launch', 'Bug Bounty Setup'],
    color: 'from-yellow-600 to-amber-500',
    theme: 'yellow',
    image: '/neon_interface_3.jpg'
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
    image: '/process_qa.jpg'
  }
];

export default function Services() {
  return (
    <div className="bg-[#020202] min-h-screen pt-32 pb-20 flex flex-col relative overflow-hidden">
      
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-blue)] rounded-full mix-blend-screen filter blur-[150px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent-purple)] rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[var(--accent-glow)] rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000"></div>
        
        {/* Geometric Tech Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}></div>
      </div>

      {/* Header */}
      <div className="px-[var(--gutter)] max-w-[1600px] mx-auto w-full mb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--accent-blue)] bg-[rgba(0,240,255,0.05)] text-[var(--accent-blue)] text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            Core Competencies
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-2xl">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-glow)] filter drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              Disciplines
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto font-light">
            Explore our architecture topologies, deliverables, and technology stacks engineered for unparalleled scale.
          </p>
        </motion.div>
      </div>

      {/* Services Stack */}
      <div className="px-[var(--gutter)] max-w-[1200px] mx-auto w-full flex flex-col gap-40 relative z-10">
        {SERVICES.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="flex flex-col gap-8 relative"
            >
              {/* Connecting Line from Previous (if not first) */}
              {index !== 0 && (
                <div className="absolute -top-[120px] left-8 w-[2px] h-[80px] bg-gradient-to-b from-transparent to-[var(--border-strong)]" />
              )}

              <h2 className={`text-4xl md:text-5xl font-bold text-white flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)] pb-4 mb-2 pl-4`}>
                <div className={`p-3 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] shadow-[0_0_30px_rgba(255,255,255,0.02)]`}>
                  <ServiceIcon className={`text-${service.theme}-400 drop-shadow-[0_0_10px_currentColor]`} size={40} />
                </div>
                <span className="tracking-tight">{service.shortTitle}</span>
              </h2>

              {/* Massive Service Card */}
              <div className={`bg-[rgba(5,5,5,0.7)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[rgba(255,255,255,0.15)] group`}>
                
                {/* Dynamic Glow Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`} />

                {/* Cinematic Header Image */}
                <div className="relative w-full min-h-[400px] lg:min-h-[500px] flex flex-col justify-end overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,1)] via-[rgba(5,5,5,0.8)] to-transparent z-10" />
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-[0.15] mix-blend-screen z-10 transition-opacity duration-1000 group-hover:opacity-[0.25]`} />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 transition-opacity duration-1000 group-hover:opacity-60"
                  />

                  {/* Overlay Header Info */}
                  <div className="relative z-20 p-8 lg:p-14">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${service.theme}-500/10 border border-${service.theme}-500/20 text-${service.theme}-400 text-xs font-mono uppercase tracking-widest mb-6 shadow-md`}>
                      <ServiceIcon size={14} /> SYSTEM_VERIFIED
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-[var(--text-secondary)] max-w-4xl font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Data Grid Area */}
                <div className="p-8 lg:p-14 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.01)] relative z-20">

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {service.metrics.map(m => (
                      <div key={m.label} className="p-8 rounded-3xl bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.03)] flex flex-col justify-center relative overflow-hidden group/metric hover:border-[rgba(255,255,255,0.1)] transition-colors">
                        <div className={`absolute -right-4 -top-4 w-16 h-16 bg-${service.theme}-500 opacity-0 group-hover/metric:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
                        <div className="text-4xl font-bold text-white mb-3 tracking-tight">{m.value}</div>
                        <div className="text-xs font-mono uppercase text-[var(--text-tertiary)] tracking-widest">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Architecture & Tech */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 border-b border-[rgba(255,255,255,0.05)] pb-4">
                        <Database className={`text-${service.theme}-400 drop-shadow-[0_0_8px_currentColor]`} />
                        Architecture & Tech Stack
                      </h3>
                      <div className="p-8 rounded-3xl bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.03)] mb-8 shadow-inner">
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                          <strong className="text-white block mb-3 font-mono text-sm uppercase tracking-wider">Topology Context:</strong>
                          {service.architecture}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {service.tech.map(t => (
                          <span key={t} className="px-5 py-2.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-xl text-sm font-mono text-[var(--text-secondary)] hover:text-white transition-colors cursor-default shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Process */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 border-b border-[rgba(255,255,255,0.05)] pb-4">
                        <Activity className={`text-${service.theme}-400 drop-shadow-[0_0_8px_currentColor]`} />
                        Execution & Deliverables
                      </h3>

                      <div className="mb-10">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-6">Core Deliverables</h4>
                        <ul className="space-y-4">
                          {service.deliverables.map(d => (
                            <li key={d} className="flex items-start gap-4 text-lg text-[var(--text-secondary)]">
                              <CheckCircle2 size={22} className={`text-${service.theme}-500 shrink-0 mt-0.5 drop-shadow-[0_0_5px_currentColor]`} />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.02)]">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-6">Pipeline Protocol</h4>
                        <div className="flex flex-col gap-4 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-[rgba(255,255,255,0.05)]">
                          {service.processes.map((p, i) => (
                            <div key={p} className="flex items-center gap-6 relative z-10 pl-10 group/process">
                              <div className={`absolute left-1.5 w-3 h-3 rounded-full bg-[var(--text-tertiary)] border-[3px] border-[#0a0a0a] group-hover/process:bg-${service.theme}-400 group-hover/process:scale-125 transition-all duration-300`} />
                              <span className="text-base font-medium text-[var(--text-secondary)] group-hover/process:text-white transition-colors">{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Terminal Output */}
                  <div className="w-full bg-[#030303] rounded-2xl border border-[rgba(255,255,255,0.05)] p-8 font-mono text-sm overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(255,255,255,0.02)] rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
                      </div>
                      <span className="text-[var(--text-tertiary)] text-xs">sys_monitor_daemon // target: {service.id}</span>
                    </div>
                    <div className="space-y-3 opacity-90">
                      <p className="text-[var(--text-tertiary)]"><span className="text-white">$</span> initializing <span className={`text-${service.theme}-400`}>{service.id}</span> execution module...</p>
                      <p className="text-[var(--text-secondary)]">LOADING CORE DEPENDENCIES: [{service.tech.join(', ')}]</p>
                      <p className={`text-${service.theme}-400 animate-pulse`}>ESTABLISHING SECURE CONNECTION PROTOCOL...</p>
                      <p className="text-green-400 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">STATUS: 200 OK - READY FOR DEPLOYMENT</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Global CTA at the bottom */}
        <div className="mt-20 p-12 lg:p-20 rounded-[3rem] border border-[var(--border-strong)] bg-gradient-to-b from-[rgba(10,10,12,0.8)] to-[#000] text-center w-full relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group/cta">
          
          {/* Animated CTA Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-blue)] rounded-full mix-blend-screen opacity-0 group-hover/cta:opacity-10 filter blur-[150px] transition-opacity duration-1000 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="p-6 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] mb-8 shadow-inner">
              <Zap size={48} className="text-[var(--accent-blue)] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">System Ready.</h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 font-light">
              We architect bespoke engineering solutions beyond these core disciplines. Deploy us to solve your most complex technical constraints.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[var(--accent-blue)] hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300">
              Initialize Deployment <ArrowRight size={20} className="mt-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
