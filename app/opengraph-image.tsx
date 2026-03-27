import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Top Down Gutter & Windows — Northern California Exterior Cleaning Experts';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Diagonal pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(201,144,42,0.04) 0px, rgba(201,144,42,0.04) 1px, transparent 1px, transparent 60px)',
          }}
        />

        {/* Gold top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #9B6D1A, #C9902A, #E8B84B, #C9902A, #9B6D1A)',
          }}
        />

        {/* Gold bottom border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #9B6D1A, #C9902A, #E8B84B, #C9902A, #9B6D1A)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            padding: '0 80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              color: '#C9902A',
              fontSize: 18,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            NORTHERN CALIFORNIA&apos;S TRUSTED EXPERTS
          </div>

          {/* Brand name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 80,
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
              }}
            >
              TOP DOWN
            </span>
            <span
              style={{
                color: '#C9902A',
                fontSize: 32,
                letterSpacing: '0.3em',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
              }}
            >
              GUTTER &amp; WINDOWS
            </span>
          </div>

          {/* Gold divider */}
          <div
            style={{
              background: '#C9902A',
              height: 3,
              width: 80,
              borderRadius: 2,
              margin: '24px 0',
            }}
          />

          {/* Tagline */}
          <p
            style={{
              color: '#8CA3C0',
              fontSize: 26,
              textAlign: 'center',
              maxWidth: 680,
              lineHeight: 1.4,
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            From Roof to Windows, Let Us Clean Your Home From The Top Down
          </p>

          {/* Service area chips */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 24,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['Redding', 'Chico', 'Oroville', 'Yuba City', 'Paradise'].map((city) => (
              <div
                key={city}
                style={{
                  background: 'rgba(201,144,42,0.12)',
                  border: '1px solid rgba(201,144,42,0.35)',
                  borderRadius: 20,
                  padding: '6px 18px',
                  color: '#E8B84B',
                  fontSize: 16,
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                {city}
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <div
            style={{
              background: '#C9902A',
              color: '#0B1628',
              padding: '14px 40px',
              borderRadius: 50,
              fontSize: 28,
              fontWeight: 700,
              marginTop: 32,
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            ☎ (614) 350-5978
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
