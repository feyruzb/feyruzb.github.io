const Hero = ({ onNav }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh',
    }}>
      <div style={{
        padding: '80px 48px 64px',
        borderRight: '1px solid #252523',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <div style={{ ...fade(0), display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: '#d4a853', flexShrink: 0 }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: '#d4a853',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>Software Developer · Budapest</span>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div style={{
            ...fade(100),
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 6.5vw, 6.5rem)',
            lineHeight: 0.95,
            color: '#ede9e0',
          }}>Feyruz</div>
          <div style={{
            ...fade(160),
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 6.5vw, 6.5rem)',
            lineHeight: 0.95,
            color: '#d4a853',
          }}>Baghirov.</div>
        </div>

        <div style={{
          ...fade(260),
          borderLeft: '2px solid #333330',
          paddingLeft: 20,
          marginBottom: 44,
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            color: '#8a8780',
            lineHeight: 1.8,
            maxWidth: 380,
          }}>
            I write <span style={{ color: '#d4a853', fontWeight: 500 }}>python code</span> that ships to 3,000 engineers. I also taught myself enough of everything else to be dangerous.
          </p>
        </div>

        <div style={{ ...fade(360), display: 'flex', gap: 12, marginBottom: 56 }}>
          <HeroButton onClick={() => onNav('experience')} primary>See My Work →</HeroButton>
          <HeroButton onClick={() => onNav('contact')} primary={false}>Get in Touch</HeroButton>
        </div>

        <div style={{ ...fade(460), display: 'flex', gap: 36 }}>
          {[
            { num: '2yr', label: 'at Ericsson' },
            { num: '28', label: 'LLVM files' },
            { num: 'llvm:main', label: 'merged' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 26,
                color: '#ede9e0',
              }}>{num}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: '#4a4845',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="img/photo.jpg"
          alt="Feyruz Baghirov"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'grayscale(25%) brightness(0.65)',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,9,0.35) 0%, transparent 60%)',
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: 'rgba(237,233,224,0.35)',
          writingMode: 'vertical-rl',
          position: 'absolute',
          bottom: 40,
          right: 40,
          letterSpacing: '0.08em',
        }}>Budapest · 2026</div>
      </div>
    </section>
  );
};

const HeroButton = ({ children, onClick, primary }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        border: primary ? 'none' : `1px solid ${hovered ? '#d4a853' : '#333330'}`,
        background: primary ? (hovered ? '#ede9e0' : '#d4a853') : 'transparent',
        color: primary ? '#0a0a09' : (hovered ? '#d4a853' : '#8a8780'),
        padding: '12px 24px',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >{children}</button>
  );
};

const MarqueeBand = () => {
  const skills = ['Java', 'TypeScript', 'C/C++', 'Spring Boot', 'Angular', 'LLVM', 'Clang', 'Docker', 'OAuth2', 'Microsoft Entra ID', 'Oracle Cloud', 'Python', 'Flask', 'React', 'Svelte', 'SQL', 'Git'];
  const doubled = [...skills, ...skills];

  return (
    <div style={{
      borderTop: '1px solid #252523',
      borderBottom: '1px solid #252523',
      padding: '14px 0',
      overflow: 'hidden',
      background: '#111110',
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'marquee 28s linear infinite',
      }}>
        {doubled.map((skill, i) => (
          <React.Fragment key={i}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#4a4845',
              padding: '0 28px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>{skill}</span>
            <span style={{ color: '#d4a853', lineHeight: 1 }}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Hero, MarqueeBand });
