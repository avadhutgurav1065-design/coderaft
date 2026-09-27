'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Code2, Database, LayoutTemplate, Zap, Server, Network, Shield, Smartphone } from 'lucide-react';

const TEAM = [
  {
    id: 'avadhut',
    name: 'Avadhut Gurav',
    role: 'Founder & Frontend Engineer',
    phone: '9518780272',
    email: 'avadhutgurav1065@gmail.com',
    image: '/Avadhut Gurav.png',
    bio: 'Obsessed with pixel-perfect design and uncompromised performance. Avadhut leads the visual and interactive architecture at Coderaft, crafting digital experiences that feel alive. From micro-interactions to complex state management, he bridges the gap between stunning UI and robust frontend engineering.',
    skills: [
      { name: 'UI/UX Architecture', icon: LayoutTemplate, level: 98 },
      { name: 'Next.js & React Ecosystem', icon: Code2, level: 95 },
      { name: 'Advanced CSS & Framer Motion', icon: Zap, level: 96 },
      { name: 'Mobile Responsiveness', icon: Smartphone, level: 99 },
    ],
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500/30'
  },
  {
    id: 'jayesh',
    name: 'Jayesh Mahajan',
    role: 'Founder & Backend Architect',
    phone: '9022554823',
    email: 'jayeshmahajan340@gmail.com',
    image: '/Jayesh mahajan.png',
    bio: 'The engine running under the hood. Jayesh engineers scalable, fault-tolerant infrastructure and complex backend architectures. With a focus on security, data integrity, and high-availability APIs, he ensures that the systems Coderaft builds can handle extreme loads without breaking a sweat.',
    skills: [
      { name: 'Database Architecture', icon: Database, level: 97 },
      { name: 'API Design & GraphQL', icon: Network, level: 94 },
      { name: 'Cloud & Server Operations', icon: Server, level: 96 },
      { name: 'System Security', icon: Shield, level: 95 },
    ],
    color: 'from-emerald-500 to-green-400',
    border: 'border-emerald-500/30'
  }
];

export default function Team() {
  const containerRef = useRef(null);
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--bg-primary)] overflow-hidden" ref={containerRef}>
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `48px 48px`
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            THE CORE TEAM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            A specialized duo combining hyper-focused frontend aesthetics with bulletproof backend architecture. 
            We do not just write code; we engineer digital platforms.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {TEAM.map((member, index) => (
            <MemberSection key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberSection({ member, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
    >
      {/* Profile Image Column */}
      <div className="w-full lg:w-5/12 relative">
        <motion.div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-20 blur-3xl`}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={`relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden border border-[var(--border-strong)] bg-[#0a0a0c] shadow-2xl group p-4`}>
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10`} />
          <motion.img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover rounded-2xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 relative z-0"
          />
          {/* Contact Overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
            <a href={`mailto:${member.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors">
              <Mail size={16} className="text-[var(--text-secondary)]" />
              <span className="text-sm font-mono truncate">{member.email}</span>
            </a>
            <a href={`tel:${member.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors">
              <Phone size={16} className="text-[var(--text-secondary)]" />
              <span className="text-sm font-mono">{member.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-7/12 flex flex-col gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{member.name}</h2>
          <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${member.color} text-white font-medium text-sm tracking-wide mb-6 shadow-lg`}>
            {member.role}
          </div>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {member.bio}
          </p>
        </div>

        <div className="h-[1px] w-full bg-[var(--border-subtle)] relative">
          <div className={`absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r ${member.color} opacity-50`} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-[var(--text-secondary)]" />
            Core Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {member.skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:${member.border} transition-colors group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[var(--bg-primary)]">
                      <Icon size={20} className="text-[var(--text-primary)]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{skill.name}</h4>
                      <div className="w-full h-1 bg-[var(--bg-primary)] rounded-full mt-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                          className={`h-full bg-gradient-to-r ${member.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
