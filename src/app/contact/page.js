'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle2, Phone, Briefcase, IndianRupee, Clock, Activity, Compass, Building2 } from 'lucide-react';
import styles from './contact.module.css';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextReveal from '@/components/ui/TextReveal';

const STEPS = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    question: 'SYSTEM OVERRIDE: PROJECT_TYPE',
    options: ['Web Platform', 'AI Integration', 'Custom SaaS / ERP', 'Mobile Application', 'Ongoing Maintenance'],
  },
  {
    icon: <Activity className="w-5 h-5" />,
    question: 'DIAGNOSTIC: CURRENT_STATE',
    options: ['Starting from scratch', 'Redesigning existing', 'Scaling an MVP', 'Rescuing a failing project'],
  },
  {
    icon: <Compass className="w-5 h-5" />,
    question: 'TARGET: PRIMARY_OBJECTIVE',
    options: ['Generate Leads / Sales', 'Automate Workflows', 'Internal Operations', 'Brand Awareness'],
  },
  {
    icon: <IndianRupee className="w-5 h-5" />,
    question: 'ALLOCATION: BUDGET_RANGE',
    options: ['₹25K – ₹50K', '₹50K – ₹1L', '₹1L – ₹3L', '₹3L+'],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: 'ESTIMATE: TIMELINE_REQ',
    options: ['ASAP (Expedited)', '1–3 months', '3–6 months', 'Flexible timeline'],
  },
];

const WHATSAPP_NUMBER = '919518780272';

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = STEPS.length + 1; // +1 for contact details
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleSelect = (option) => {
    setSelections({ ...selections, [currentStep]: option });
  };

  const canProceed = () => {
    if (currentStep < STEPS.length) {
      return selections[currentStep] !== undefined;
    }
    return name.trim() !== '' && email.trim() !== '';
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const buildWhatsAppMessage = () => {
    const projectType = selections[0] || 'Not specified';
    const currentState = selections[1] || 'Not specified';
    const objective = selections[2] || 'Not specified';
    const budget = selections[3] || 'Not specified';
    const timeline = selections[4] || 'Not specified';

    let message = `Hi Coderaft! 👋\n\n`;
    message += `I'm ${name}${company ? ` from ${company}` : ''} and I'd like to discuss a project.\n\n`;
    message += `📋 Project type: ${projectType}\n`;
    message += `🏗️ Current State: ${currentState}\n`;
    message += `🎯 Objective: ${objective}\n`;
    message += `💰 Budget: ${budget}\n`;
    message += `⏱️ Timeline: ${timeline}\n`;
    if (email) message += `📧 Email: ${email}\n`;
    if (notes) message += `\n📝 Notes: ${notes}`;

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-12 text-center border-emerald-500/30 bg-emerald-950/10">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h1 className={styles.confirmationTitle}>TRANSMISSION_SUCCESS</h1>
              <p className={styles.confirmationDesc}>
                Your data has been encrypted and sent to our WhatsApp terminal.<br />
                We will decrypt and reply within [24:00:00] hours.<br /><br />
                Manual override link: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-emerald-400 hover:text-emerald-300 neon-text transition-colors">+91 95187 80272</a>
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactHeader}>
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-blue-500" />
            <TextReveal as="h1" className={styles.contactTitle}>INITIATE_HANDSHAKE</TextReveal>
          </div>
          <p className={styles.contactSubhead}>
            Establish a secure connection with our engineering team. We need detailed parameters to configure the optimal architecture.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* Main Form Area */}
          <SpotlightCard className="p-8 md:p-12 h-full flex flex-col relative overflow-hidden backdrop-blur-xl bg-black/40 border-white/10">
            {/* Cyber Grid Background inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

            <div className="relative z-10 flex-grow flex flex-col">
              {/* Progress Bar */}
              <div className={styles.progress}>
                <span className={styles.progressStep}>
                  SEQ_0{currentStep + 1} // 0{totalSteps}
                </span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  {/* Step 1 to N-1 (Radio Selectors) */}
                  {currentStep < STEPS.length && (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className={styles.stepContent}
                    >
                      <div className="flex items-center gap-3 mb-6 text-blue-400">
                        {STEPS[currentStep].icon}
                        <h2 className={styles.stepQuestion}>
                          {STEPS[currentStep].question}
                        </h2>
                      </div>

                      <div className={styles.options}>
                        {STEPS[currentStep].options.map((option, index) => (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={option}
                            className={`${styles.option} ${selections[currentStep] === option ? styles.selected : ''}`}
                            onClick={() => handleSelect(option)}
                            role="radio"
                            aria-checked={selections[currentStep] === option}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleSelect(option);
                              }
                            }}
                          >
                            <span className={styles.radio}>
                              <span className={styles.radioDot} />
                            </span>
                            <span className="font-mono text-sm tracking-wide">{option}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Final Step (Contact Details) */}
                  {currentStep === STEPS.length && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className={styles.stepContent}
                    >
                      <div className="flex items-center gap-3 mb-6 text-blue-400">
                        <Phone className="w-5 h-5" />
                        <h2 className={styles.stepQuestion}>TARGET_COORDINATES</h2>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel} htmlFor="name">
                              {'>'} IDENTIFIER [NAME] *
                            </label>
                            <input
                              id="name"
                              type="text"
                              className={styles.input}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel} htmlFor="company">
                              {'>'} ORG_AFFILIATION [COMPANY]
                            </label>
                            <input
                              id="company"
                              type="text"
                              className={styles.input}
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="Acme Corp (Optional)"
                            />
                          </div>
                        </div>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel} htmlFor="email">
                            {'>'} COMM_LINK [EMAIL] *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel} htmlFor="notes">
                            {'>'} DATA_PAYLOAD [NOTES / URLS]
                          </label>
                          <textarea
                            id="notes"
                            className={styles.textarea}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Transmission parameters, specific tech stacks, or existing URLs..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className={styles.formNav}>
                {currentStep > 0 ? (
                  <button className={styles.backBtn} onClick={handleBack}>
                    {'<'} REVERT
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < STEPS.length ? (
                  <button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    EXECUTE_NEXT {'>'}
                  </button>
                ) : (
                  <button
                    className={styles.whatsappBtn}
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                  >
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      TRANSMIT_DATA
                    </span>
                  </button>
                )}
              </div>
            </div>
          </SpotlightCard>

          {/* Cyberpunk Sidebar */}
          <SpotlightCard className="p-8 md:p-10 h-full backdrop-blur-xl bg-blue-950/10 border-blue-500/20 flex flex-col justify-between">
            <div>
              <h3 className={styles.sidebarTitle}>PROTOCOL_SEQUENCE</h3>
              <div className={styles.sidebarSteps}>
                <div className={styles.sidebarStep}>
                  <span className={styles.sidebarStepNumber}>[01]</span>
                  <p className={styles.sidebarStepText}>
                    Transmission encrypted and sent via WhatsApp node. Response ETA: &lt; 24h.
                  </p>
                </div>
                <div className={styles.sidebarStep}>
                  <span className={styles.sidebarStepNumber}>[02]</span>
                  <p className={styles.sidebarStepText}>
                    Establish secure 30-min scoping link to map requirements and architectural constraints.
                  </p>
                </div>
                <div className={styles.sidebarStep}>
                  <span className={styles.sidebarStepNumber}>[03]</span>
                  <p className={styles.sidebarStepText}>
                    Deploy fixed milestone blueprint with transparent pricing vectors. No hidden variables.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-blue-500/20">
                <h4 className="font-mono text-sm text-blue-400 mb-4">SYSTEM_CONSTRAINTS</h4>
                <ul className="space-y-3 font-mono text-xs text-text-secondary">
                  <li className="flex gap-2"><span className="text-rose-500">❌</span> We do not use cheap templates.</li>
                  <li className="flex gap-2"><span className="text-emerald-400">✔️</span> We build bespoke, scalable architectures.</li>
                  <li className="flex gap-2"><span className="text-emerald-400">✔️</span> Code ownership transfers fully on completion.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <div className="font-mono text-xs text-blue-500/60 mb-2">SYSTEM_STATUS</div>
              <div className="flex items-center gap-2 text-sm text-blue-400 font-mono">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                AWAITING_INPUT
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
