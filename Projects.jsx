const Projects = () => {
  const FeaturedCard = ({ num, name, description, lang, href, badgeText, isOpenSource }) => {
    const [hovered, setHovered] = React.useState(false);
    const badgeColor = isOpenSource ? '#3dcfbe' : '#d4a853';
    const badgeBg = isOpenSource ? 'rgba(61,207,190,0.07)' : 'rgba(212,168,83,0.08)';
    const badgeBorder = isOpenSource ? 'rgba(61,207,190,0.2)' : 'rgba(212,168,83,0.2)';

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? '#1a1a18' : '#111110',
          border: `1px solid ${hovered ? 'rgba(212,168,83,0.3)' : '#252523'}`,
          padding: 32,
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          transition: 'background 0.2s, border-color 0.2s',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: '#d4a853',
          transform: `scaleX(${hovered ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        }} />

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: badgeColor,
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
          padding: '4px 10px',
          marginBottom: 20,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: badgeColor, animation: 'pulse 2s infinite' }} />
          {badgeText}
        </div>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', marginBottom: 14 }}>Featured · {num}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#ede9e0', marginBottom: 10 }}>{name}</div>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#8a8780', lineHeight: 1.7, marginBottom: 20 }}>{description}</p>

        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: '#3dcfbe',
          background: 'rgba(61,207,190,0.07)',
          padding: '4px 12px',
        }}>{lang}</span>

        <div style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          fontSize: 16,
          color: hovered ? '#d4a853' : '#4a4845',
          transition: 'all 0.2s',
          transform: hovered ? 'translate(3px, -3px)' : 'none',
        }}>↗</div>
      </a>
    );
  };

  const SmallCard = ({ num, name, description, lang, href, isLast }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: 24,
          borderRight: isLast ? 'none' : '1px solid #252523',
          display: 'block',
          background: hovered ? '#111110' : 'transparent',
          position: 'relative',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: hovered ? '#d4a853' : '#4a4845',
          fontSize: 14,
          transition: 'color 0.2s',
        }}>↗</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', marginBottom: 10 }}>{num}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: '#ede9e0', marginBottom: 8, paddingRight: 24 }}>{name}</div>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#8a8780', lineHeight: 1.6, marginBottom: 12 }}>{description}</p>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#3dcfbe' }}>{lang}</div>
      </a>
    );
  };

  const smallCards = [
    { num: '003', name: 'Budget Tracker', description: 'Track spending and income across multiple sources.', lang: 'Laravel', href: 'https://github.com/feyruzb/budget_tracker' },
    { num: '004', name: 'Canvas Simulator', description: 'LMS with student/teacher interactions and task management.', lang: 'Angular · Laravel', href: 'https://github.com/feyruzb/canvas_simulator' },
    { num: '005', name: 'Package Tracker', description: 'Real-time package tracking web application.', lang: 'NodeJS', href: 'https://github.com/mamedov6119/TrackNParcel' },
    { num: '006', name: 'HaCat', description: 'PC builder assistant within a specified budget.', lang: 'Vue · Python · DevOps', href: 'https://github.com/mamedov6119/HaCat' },
  ];

  return (
    <section style={{ padding: '88px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid #252523',
          paddingBottom: 20,
          marginBottom: 56,
        }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', textTransform: 'uppercase', marginBottom: 8 }}>Work</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#ede9e0' }}>Projects</h2>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#4a4845' }}>06 selected</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <FeaturedCard
            num="001"
            name="Burger Alert"
            description="Group lunch ordering and car-pool coordination for the office. Self-hosted on Oracle Cloud using Docker and Caddy. 18 GitHub stars, 3 releases — used daily by colleagues."
            lang="Python · Flask · Docker · Oracle Cloud"
            href="https://github.com/feyruzb/burger-alert"
            badgeText="Live in production"
            isOpenSource={false}
          />
          <FeaturedCard
            num="002"
            name="CodeChecker"
            description="Contributed OAuth2 integration (BFF + Entra ID), Filter Presets, and LLVM refactors across 28 files merged into llvm:main. 2.5k+ GitHub stars — used by ~3,000 engineers at Ericsson."
            lang="C++ · Python · TypeScript · LLVM"
            href="https://github.com/Ericsson/codechecker"
            badgeText="Open source · Ericsson"
            isOpenSource={true}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid #252523' }}>
          {smallCards.map((card, i) => (
            <SmallCard key={card.num} {...card} isLast={i === smallCards.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Projects });
