import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        {/* Massive CTA Section */}
        <div className="w-full mb-16 pb-16 border-b border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let&apos;s build <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">something extraordinary.</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-md text-lg">
              We specialize in robust platforms, beautiful design, and performant AI systems.
            </p>
          </div>
          <Link href="/contact" className="w-full md:w-auto text-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform whitespace-nowrap">
            Start a Project
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className={`${styles.brand} col-span-2 lg:col-span-2 mb-4 md:mb-0`}>
            <Link href="/" className={styles.logo}>
              <img src="/coderaft_logo_white.jpg" alt="Coderaft" className="h-10 md:h-14 lg:h-16 w-auto object-contain mix-blend-screen mb-4" />
            </Link>
            <p className={styles.tagline}>
              Software that ships. Full-stack web platforms, custom AI systems,
              and infrastructure — built and maintained end to end.
            </p>
          </div>

          {/* Sitemap column */}
          <div className={`${styles.footerCol} col-span-1`}>
            <span className={styles.colTitle}>Sitemap</span>
            <Link href="/services" className={styles.footerLink}>Services</Link>
            <Link href="/work" className={styles.footerLink}>Work</Link>
            <Link href="/team" className={styles.footerLink}>Team</Link>
            <Link href="/process" className={styles.footerLink}>Process</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
          </div>

          {/* Contact column */}
          <div className={`${styles.footerCol} col-span-1`}>
            <span className={styles.colTitle}>Get in touch</span>
            <a href="mailto:coderaft4@gmail.com" className={styles.footerLink}>
              Email Us
            </a>
            <a href="https://github.com/coderaft" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              GitHub
            </a>
            <a href="https://wa.me/919518780272" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
          <div className={styles.copyright}>
            <div>© {currentYear} Coderaft. Based in Pune, Maharashtra.</div>
            <div className="text-[var(--text-primary)] font-medium mt-1">Designed and developed by coderaft</div>
          </div>
          <div className={styles.status}>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
