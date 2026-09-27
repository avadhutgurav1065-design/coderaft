'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './TerminalAnimation.module.css';

const LINES = [
  { type: 'prompt', text: '~/project $ ', content: 'npm run build', delay: 0 },
  { type: 'comment', text: '', content: '  Compiling...', delay: 800 },
  { type: 'comment', text: '', content: '  Bundling 47 modules', delay: 400 },
  { type: 'comment', text: '', content: '  Optimizing assets', delay: 600 },
  { type: 'comment', text: '', content: '  Running test suite .......... passed', delay: 800 },
  { type: 'comment', text: '', content: '  Lighthouse: 97 / 100 / 100 / 100', delay: 600 },
  { type: 'blank', text: '', content: '', delay: 300 },
  { type: 'prompt', text: '~/project $ ', content: 'deploy --prod', delay: 500 },
  { type: 'comment', text: '', content: '  Pushing to production...', delay: 1000 },
  { type: 'success', text: '', content: '  ✓ Site deployed successfully', delay: 800 },
  { type: 'blank', text: '', content: '', delay: 200 },
  { type: 'prompt', text: '~/project $ ', content: '', delay: 0 },
];

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentTyping, setCurrentTyping] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const terminalRef = useRef(null);
  const observerRef = useRef(null);

  // Start animation when terminal enters viewport
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observerRef.current.observe(terminalRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [started]);

  // Type lines sequentially
  useEffect(() => {
    if (!started || lineIndex >= LINES.length) return;

    const line = LINES[lineIndex];

    // Delay before starting this line
    const delayTimer = setTimeout(() => {
      if (line.type === 'blank') {
        setVisibleLines((prev) => [...prev, { ...line }]);
        setLineIndex((i) => i + 1);
        return;
      }

      // Non-prompt lines appear instantly
      if (line.type !== 'prompt') {
        setVisibleLines((prev) => [...prev, { ...line, full: line.content }]);
        setLineIndex((i) => i + 1);
        return;
      }

      // Prompt lines get typed character by character
      setIsTyping(true);
      setCurrentTyping('');
      setCharIndex(0);
    }, line.delay);

    return () => clearTimeout(delayTimer);
  }, [lineIndex, started]);

  // Character-by-character typing for prompt lines
  useEffect(() => {
    if (!isTyping || lineIndex >= LINES.length) return;

    const line = LINES[lineIndex];
    if (charIndex < line.content.length) {
      const timer = setTimeout(() => {
        setCurrentTyping((prev) => prev + line.content[charIndex]);
        setCharIndex((i) => i + 1);
      }, 40 + Math.random() * 30);
      return () => clearTimeout(timer);
    } else {
      // Done typing this line
      setVisibleLines((prev) => [
        ...prev,
        { ...line, full: line.content },
      ]);
      setCurrentTyping('');
      setIsTyping(false);
      setLineIndex((i) => i + 1);
    }
  }, [isTyping, charIndex, lineIndex]);

  const isLastLine = lineIndex >= LINES.length;

  return (
    <div className={styles.terminal} ref={terminalRef}>
      <div className={styles.terminalBar}>
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
        <span className={styles.terminalTitle}>terminal</span>
      </div>
      <div className={styles.terminalBody}>
        {visibleLines.map((line, i) => {
          if (line.type === 'blank') {
            return <span key={i} className={styles.line}>&nbsp;</span>;
          }
          return (
            <span key={i} className={styles.line}>
              {line.text && (
                <span className={styles.prompt}>{line.text}</span>
              )}
              <span className={styles[line.type] || ''}>
                {line.full}
              </span>
            </span>
          );
        })}

        {/* Currently typing line */}
        {isTyping && lineIndex < LINES.length && (
          <span className={styles.line}>
            <span className={styles.prompt}>
              {LINES[lineIndex].text}
            </span>
            <span>{currentTyping}</span>
            <span className={styles.cursor} />
          </span>
        )}

        {/* Final cursor */}
        {isLastLine && (
          <span className={styles.line}>
            <span className={styles.prompt}>~/project $ </span>
            <span className={styles.cursor} />
          </span>
        )}
      </div>
    </div>
  );
}
