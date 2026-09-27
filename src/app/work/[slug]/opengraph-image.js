import { ImageResponse } from 'next/og';
import projects from '@/data/projects.json';

export const alt = 'Coderaft Case Study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return [{ id: 'og', size, alt, contentType }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#12141A',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            fontSize: '32px',
            color: '#F6F5F1',
          }}
        >
          Coderaft
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#12141A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '18px',
              color: '#2452FF',
              letterSpacing: '0.1em',
            }}
          >
            CODERAFT
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '16px',
              color: '#5B6270',
            }}
          >
            / Case Study
          </div>
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '48px',
            color: '#F6F5F1',
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: '24px',
            color: '#5B6270',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          {project.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            position: 'absolute',
            bottom: '60px',
            left: '80px',
          }}
        >
          {project.techTags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                fontFamily: 'monospace',
                fontSize: '14px',
                color: '#5B6270',
                border: '1px solid rgba(246,245,241,0.12)',
                padding: '6px 12px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
