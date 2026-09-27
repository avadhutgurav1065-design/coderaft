import Link from 'next/link';

export const metadata = {
  title: '404 — Page not found',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--signal)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '16px',
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-h2)',
          fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: '16px',
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p
        style={{
          fontSize: 'var(--text-body)',
          color: 'var(--slate)',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        The page you&apos;re looking for has been moved or never existed.
        Here are some places to go instead:
      </p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link href="/work" className="btn-primary">
          See our work
        </Link>
        <Link href="/contact" className="btn-secondary">
          Get in touch →
        </Link>
      </div>
    </section>
  );
}
