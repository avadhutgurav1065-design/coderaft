export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Coderaft',
    description:
      'Full-stack web platforms, custom AI systems, and infrastructure — built and maintained end to end.',
    url: 'https://coderaft.dev',
    telephone: '+919518780272',
    email: 'hello@coderaft.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5204,
      longitude: 73.8567,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Pune, Maharashtra, India',
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Avadhut Gurav',
      },
      {
        '@type': 'Person',
        name: 'Jayesh Mahajan',
      },
    ],
    knowsAbout: [
      'Web Development',
      'AI Integration',
      'Software Engineering',
      'UI/UX Design',
      'Server Administration',
    ],
    priceRange: '₹₹',
    sameAs: ['https://github.com/coderaft'],
  };
}

export function getCaseStudySchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.problem,
    author: {
      '@type': 'Organization',
      name: 'Coderaft',
      url: 'https://coderaft.dev',
    },
    about: {
      '@type': 'Thing',
      name: project.category,
    },
    keywords: project.techTags.join(', '),
    ...(project.liveUrl && { url: project.liveUrl }),
  };
}
