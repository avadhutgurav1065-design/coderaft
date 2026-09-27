import { ImageResponse } from 'next/og';

export const alt = 'Coderaft — Software that ships';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
            fontFamily: 'monospace',
            fontSize: '24px',
            color: '#2452FF',
            marginBottom: '24px',
            letterSpacing: '0.1em',
          }}
        >
          CODERAFT
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '56px',
            color: '#F6F5F1',
            lineHeight: 1.1,
            marginBottom: '32px',
            maxWidth: '800px',
          }}
        >
          We build software that ships.
        </div>
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: '22px',
            color: '#5B6270',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Full-stack web platforms, custom AI systems, and infrastructure
          — built and maintained end to end.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontFamily: 'monospace',
            fontSize: '16px',
            color: '#5B6270',
          }}
        >
          Based in Pune, Maharashtra · coderaft.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
