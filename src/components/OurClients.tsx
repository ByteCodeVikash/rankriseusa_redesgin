import React from 'react';

/* ─── OurClients — Ultra Professional Planetary Orbit ────── */
const ring1 = ['2-1', '3-1', '4-1', '5-1', '6-1', '7', '8', '9', '10', '11'];
const ring2 = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
const ring3 = ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '1-1'];
const ring4 = ['13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

export default function OurClients() {
  return (
    <section
      id="our-clients"
      style={{
        background: '#080c14',
        padding: '160px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1
      }}
    >
      <style>{`
        .oc-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 1000px;
          perspective: 1000px;
        }
        .oc-container {
          position: relative;
          width: 1000px;
          height: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Center Badge - Luxury Style */
        .oc-center {
          position: relative;
          z-index: 100;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 0 8px rgba(255,187,67,0.1),
            0 0 0 15px rgba(255,187,67,0.05),
            0 25px 60px rgba(0,0,0,0.5);
          border: 5px solid #FFBB43;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .oc-center:hover {
          transform: scale(1.05);
        }
        .oc-center .brand-name {
          font-family: "Inter", sans-serif;
          font-weight: 900;
          font-size: 22px;
          color: #080c14;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .oc-center .brand-usa {
          font-family: "Inter", sans-serif;
          font-weight: 900;
          font-size: 32px;
          color: #FFBB43;
          margin-top: -2px;
        }
        .oc-center .brand-line {
          width: 40px; height: 3px;
          background: #080c14;
          margin: 12px 0;
          border-radius: 2px;
        }
        .oc-center .brand-tag {
          font-size: 10px;
          font-weight: 800;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        /* Orbiting Rings */
        .oc-ring-line {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.08);
          pointer-events: none;
        }

        /* Rotation Core */
        @keyframes rotate-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rotate-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        .orbiting-content {
          position: absolute;
          width: 100%; height: 100%;
          top: 0; left: 0;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .cw  { animation-name: rotate-cw; }
        .ccw { animation-name: rotate-ccw; }

        /* Individual Logos */
        .orbit-logo-wrap {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
        }
        .orbit-logo-inner {
          position: absolute;
          width: 72px; height: 72px;
          transform: translate(-50%, -50%);
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          padding: 14px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbit-logo-inner img {
          width: 100%; height: 100%;
          object-fit: contain;
        }
        .orbit-logo-inner:hover {
          scale: 1.2;
          box-shadow: 0 0 25px #FFBB43;
          z-index: 200;
        }

        /* Responsive Scaling - The most professional way */
        @media (max-width: 1100px) {
          .oc-container { transform: scale(0.75); }
        }
        @media (max-width: 800px) {
          .oc-container { transform: scale(0.55); }
          .oc-wrapper { min-height: 600px; }
        }
        @media (max-width: 500px) {
          .oc-container { transform: scale(0.38); }
          .oc-wrapper { min-height: 450px; }
          #our-clients { padding: 80px 0; }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 style={{
          fontSize: 'clamp(40px, 7vw, 84px)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '-0.04em',
          margin: 0,
        }}>
          Our <span style={{ color: '#FFBB43' }}>Clients</span>
        </h2>
        <div style={{ width: '80px', height: '4px', background: '#FFBB43', margin: '20px auto 0' }}></div>
      </div>

      <div className="oc-wrapper">
        <div className="oc-container">

          {/* Center Badge */}
          <div className="oc-center">
            <span className="brand-name">Rankriseusa</span>
            <div className="brand-line"></div>
            <span className="brand-tag">Agency Partner</span>
          </div>

          {/* RINGS — Radii distributed for MAX clarity (240, 380, 520, 660) */}
          <Ring logos={ring1} radius={240} duration={28} direction="cw" />
          <Ring logos={ring2} radius={380} duration={38} direction="ccw" />
          <Ring logos={ring3} radius={520} duration={48} direction="cw" />
          <Ring logos={ring4} radius={660} duration={62} direction="ccw" />

        </div>
      </div>
    </section>
  );
}

function Ring({ logos, radius, duration, direction }: { logos: string[], radius: number, duration: number, direction: 'cw' | 'ccw' }) {
  return (
    <>
      {/* Visual Orbit Line */}
      <div className="oc-ring-line" style={{ width: radius * 2, height: radius * 2 }} />

      {/* Rotating Ring Container */}
      <div className={`orbiting-content ${direction}`} style={{ animationDuration: `${duration}s` }}>
        {logos.map((n, i) => {
          const angleDeg = (i / logos.length) * 360;
          const angleRad = (angleDeg * Math.PI) / 180;

          // Pre-calculate positions
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <div
              key={i}
              className="orbit-logo-wrap"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              {/* Counter-rotate to stay upright */}
              <div
                className={`orbiting-content ${direction === 'cw' ? 'ccw' : 'cw'}`}
                style={{ animationDuration: `${duration}s`, width: '80px', height: '80px', transform: 'translate(-50%, -50%)' }}
              >
                <div className="orbit-logo-inner">
                  <img
                    src={`https://admarkdigitalmedia.com/wp-content/uploads/2025/12/${logos.length === 13 && i >= 12 ? '1-1' : n.includes('/') ? n : n + '.png'}`}
                    alt="client"
                    onError={(e) => {
                      if (logos === ring4) {
                        (e.target as HTMLImageElement).src = `https://admarkdigitalmedia.com/wp-content/uploads/2026/01/${n}.png`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
