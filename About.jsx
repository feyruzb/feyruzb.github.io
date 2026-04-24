const About = () => {
  const tagColors = {
    systems:  { color: '#b8b4ad', borderColor: '#3a3a3f' },
    scripting: { color: '#d4a853', borderColor: '#3a3010' },
    web:      { color: '#3dcfbe', borderColor: '#0f3e3a' },
    default:  { color: '#8a8780', borderColor: '#333330' },
  };

  const Tag = ({ name, type }) => {
    const [hovered, setHovered] = React.useState(false);
    const colors = tagColors[type] || tagColors.default;
    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          padding: '5px 12px',
          border: `1px solid ${hovered ? '#d4a853' : colors.borderColor}`,
          color: hovered ? '#ede9e0' : colors.color,
          cursor: 'default',
          transition: 'all 0.2s',
          display: 'inline-block',
        }}
      >{name}</span>
    );
  };

  const CategoryHeader = ({ label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#252523' }} />
    </div>
  );

  const categories = [
    {
      label: 'Languages',
      tags: [
        { name: 'Python', type: 'scripting' }, { name: 'Java', type: 'systems' }, { name: 'C', type: 'systems' }, { name: 'C++', type: 'systems' }, 
        { name: 'C#', type: 'systems' }, { name: 'TypeScript', type: 'web' }, { name: 'JavaScript', type: 'web' },
        { name: 'Shell Script', type: 'scripting' }, { name: 'SQL', type: 'default' }, { name: 'PowerShell', type: 'default' },
      ],
    },
    {
      label: 'Frameworks & Infra',
      tags: [
        { name: 'Spring Boot', type: 'web' }, { name: 'Angular', type: 'web' }, { name: 'React', type: 'web' },
        { name: 'Svelte', type: 'web' }, { name: 'Laravel', type: 'web' }, { name: 'Flask', type: 'web' },
        { name: 'Docker', type: 'default' }, { name: 'Oracle Cloud', type: 'default' }, { name: 'Git', type: 'default' },
      ],
    },
    {
      label: 'Compiler & Security',
      tags: [
        { name: 'LLVM', type: 'systems' }, { name: 'Clang', type: 'systems' },
        { name: 'OAuth2', type: 'scripting' }, { name: 'Microsoft Entra ID', type: 'scripting' },
      ],
    },
  ];

  return (
    <section style={{
      background: '#111110',
      borderTop: '1px solid #252523',
      borderBottom: '1px solid #252523',
      padding: '88px 48px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', textTransform: 'uppercase', marginBottom: 20 }}>About</div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            lineHeight: 1.1,
            color: '#ede9e0',
            marginBottom: 20,
          }}>
            Building things that{' '}
            <em style={{ fontStyle: 'normal', color: '#d4a853', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>work.</em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
            {[
              'MSc student at ELTE (Software & Service Architectures) and software developer at Ericsson with upstream open-source contributions to LLVM/Clang.',
              'Worked across the full stack with depth in C/C++, Java, and TypeScript. Experience spans compiler tooling, cloud auth systems, and tools people actually use at work every day.',
              'Also teach OOP and networking at university level — which means explaining things clearly matters as much as building them correctly.',
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#8a8780', lineHeight: 1.85 }}>{text}</p>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 24, paddingTop: 24, borderTop: '1px solid #252523' }}>
            {[
              { name: 'English', level: 'Professional' },
              { name: 'Russian', level: 'Professional' },
              { name: 'Azerbaijani', level: 'Native' },
            ].map(({ name, level }) => (
              <div key={name}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 13, color: '#ede9e0' }}>{name}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845' }}>{level}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', textTransform: 'uppercase', marginBottom: 24 }}>Skills & Stack</div>

          {categories.map((cat, i) => (
            <div key={cat.label} style={{ marginBottom: 32 }}>
              <CategoryHeader label={cat.label} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.tags.map(t => <Tag key={t.name} name={t.name} type={t.type} />)}
              </div>
            </div>
          ))}

          <div>
            <CategoryHeader label="Education" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#8a8780' }}>MSc Computer Science · ELTE · 2025–</p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#4a4845' }}>BSc Computer Science · ELTE · GPA 3.81/5 · 2020–2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { About });
