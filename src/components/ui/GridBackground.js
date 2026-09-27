'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Radial Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,0,0,0)_0%,rgba(5,5,5,1)_100%)]" />
    </div>
  );
}
