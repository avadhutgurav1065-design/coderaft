import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/ui/GridBackground';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

export const metadata = {
  metadataBase: new URL('https://coderaft.dev'),
  title: {
    default: 'Coderaft — Software that ships',
    template: '%s — Coderaft',
  },
  description:
    'Full-stack web platforms, custom AI systems, and infrastructure — built and maintained end to end. Based in Pune, Maharashtra.',
  keywords: [
    'software development agency Pune',
    'web development Pune',
    'custom AI integration',
    'full-stack development',
    'Next.js development',
    'server maintenance',
    'UI/UX design agency',
  ],
  authors: [
    { name: 'Avadhut Gurav' },
    { name: 'Jayesh Mahajan' },
  ],
  creator: 'Coderaft',
  openGraph: {
    title: 'Coderaft — Software that ships',
    description:
      'Full-stack web platforms, custom AI systems, and infrastructure — built and maintained end to end.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Coderaft',
    url: 'https://coderaft.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coderaft — Software that ships',
    description:
      'Full-stack web platforms, custom AI systems, and infrastructure — built and maintained end to end.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://coderaft.dev',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} overflow-x-hidden w-full`}>
      <body className="overflow-x-hidden w-full relative m-0 p-0 max-w-[100vw]">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw] relative">
          <GridBackground />
          <Header />
          <main id="main-content" className="flex-grow w-full overflow-x-hidden max-w-[100vw]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
