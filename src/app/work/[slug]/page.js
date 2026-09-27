import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd, { getCaseStudySchema } from '@/components/JsonLd';
import projects from '@/data/projects.json';
import CaseStudyUI from './CaseStudyUI';

// Architecture diagrams for projects that have them
const ARCHITECTURE_DIAGRAMS = {
  'imed-ai-placement-pipeline': [
    'Smart Match Router',
    'Predictive Analytics',
    'Risk Telemetry',
    'Resume Analyzer',
    'AI Interview Coach',
  ],
  'genspeech-wordpress-plugin': [
    'WordPress Hooks',
    'Content Extraction',
    'TTS API Call',
    'Audio Caching',
    'Vanilla JS Player',
  ],
  'storyline-erp-system': [
    'Client Portal',
    'Next.js API',
    'Supabase DB',
    'Role Engine',
    'Dashboard',
  ],
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: `${project.tagline} — A Coderaft case study.`,
    openGraph: {
      title: `${project.title} — Coderaft`,
      description: project.tagline,
    },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const diagram = ARCHITECTURE_DIAGRAMS[project.slug];

  return (
    <>
      <JsonLd data={getCaseStudySchema(project)} />
      <CaseStudyUI 
        project={project} 
        prevProject={prevProject} 
        nextProject={nextProject} 
        diagram={diagram} 
      />
    </>
  );
}
