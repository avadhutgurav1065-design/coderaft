'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextReveal from '@/components/ui/TextReveal';

const STEPS = [
  {
    question: 'What type of project?',
    options: ['Website', 'AI System', 'Plugin or Tool', 'Ongoing Maintenance'],
  },
  {
    question: 'What\'s your budget range?',
    options: ['₹25K – ₹50K', '₹50K – ₹1L', '₹1L – ₹3L', '₹3L+'],
  },
  {
    question: 'What\'s your timeline?',
    options: ['ASAP', '1–3 months', '3–6 months', 'Flexible'],
  },
];

const WHATSAPP_NUMBER = '919518780272';

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [name, setName] = useState('');
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
    // Contact details step
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
    const budget = selections[1] || 'Not specified';
    const timeline = selections[2] || 'Not specified';

    let message = `Hi Coderaft! 👋\n\n`;
    message += `I'm ${name} and I'd like to discuss a project.\n\n`;
    message += `📋 Project type: ${projectType}\n`;
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
          <SpotlightCard className="p-12 text-center">
            <h1 className={styles.confirmationTitle}>
              You&apos;re all set.
            </h1>
            <p className={styles.confirmationDesc}>
              Your message has been sent via WhatsApp. We&apos;ll reply within
              one business day. If WhatsApp didn&apos;t open, you can reach us
              directly at{' '}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>
                +91 95187 80272
              </a>.
            </p>
          </SpotlightCard>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactHeader}>
          <TextReveal as="h1" className={styles.contactTitle}>Start a project</TextReveal>
          <p className={styles.contactSubhead}>
            Tell us what you need. This takes about 30 seconds.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* Form */}
          <SpotlightCard className="p-8 md:p-12 h-full flex flex-col">
            {/* Progress */}
            <div className={styles.progress}>
              <span className={styles.progressStep}>
                {String(currentStep + 1).padStart(2, '0')}/{String(totalSteps).padStart(2, '0')}
              </span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Radio selection steps */}
            {currentStep < STEPS.length && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepQuestion}>
                  {STEPS[currentStep].question}
                </h2>
                <div className={styles.options}>
                  {STEPS[currentStep].options.map((option) => (
                    <div
                      key={option}
                      className={`${styles.option} ${
                        selections[currentStep] === option
                          ? styles.selected
                          : ''
                      }`}
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
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact details step */}
            {currentStep === STEPS.length && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepQuestion}>How can we reach you?</h2>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="notes">
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    id="notes"
                    className={styles.textarea}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Project details, deadlines, specific requirements..."
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={styles.formNav}>
              {currentStep > 0 ? (
                <button className={styles.backBtn} onClick={handleBack}>
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < STEPS.length ? (
                <button
                  className={`btn-primary ${styles.nextBtn}`}
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue →
                </button>
              ) : (
                <button
                  className={styles.whatsappBtn}
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                >
                  Send via WhatsApp →
                </button>
              )}
            </div>
          </SpotlightCard>

          {/* Sidebar */}
          <SpotlightCard className="p-8 md:p-10 h-full bg-[var(--bg-secondary)] border-[var(--border-strong)]">
            <h3 className={styles.sidebarTitle}>What happens next</h3>
            <div className={styles.sidebarSteps}>
              <div className={styles.sidebarStep}>
                <span className={styles.sidebarStepNumber}>01</span>
                <p className={styles.sidebarStepText}>
                  Your message arrives on WhatsApp. We reply within one
                  business day — usually faster.
                </p>
              </div>
              <div className={styles.sidebarStep}>
                <span className={styles.sidebarStepNumber}>02</span>
                <p className={styles.sidebarStepText}>
                  We schedule a 30-minute scoping call to understand your
                  requirements and constraints.
                </p>
              </div>
              <div className={styles.sidebarStep}>
                <span className={styles.sidebarStepNumber}>03</span>
                <p className={styles.sidebarStepText}>
                  You receive a proposal with fixed milestones, timeline, and
                  pricing. No open-ended retainers.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
