const Experience = () => {
  const Tag = ({ children }) => (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#4a4845',
      border: '1px solid #252523',
      padding: '3px 10px',
    }}>{children}</span>
  );

  const Bullet = ({ children }) => (
    <li style={{
      position: 'relative',
      paddingLeft: 16,
      listStyle: 'none',
      marginBottom: 8,
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 14,
      color: '#8a8780',
      lineHeight: 1.7,
    }}>
      <span style={{ position: 'absolute', left: 0 }}>—</span>
      {children}
    </li>
  );

  const B = ({ children }) => (
    <strong style={{ color: '#ede9e0', fontWeight: 500 }}>{children}</strong>
  );

  const items = [
    {
      period: 'Jul 2024 – Present',
      company: 'Ericsson',
      title: 'Software Developer',
      subtitle: '@BNEW SAN · CodeChecker',
      bullets: [
        <Bullet key={1}>Contributed upstream to <B>LLVM/Clang</B>: refactored memory-error diagnostics across <B>28 files</B> in Clang Static Analyzer, clang-tidy, and clang-tools-extra — merged into <B>llvm:main</B>.</Bullet>,
        <Bullet key={2}>Delivered production <B>OAuth2 integration</B> (Google, Microsoft, GitHub) using BFF architecture with Microsoft Entra ID — securing a platform with 2.5k+ stars used by <B>~3,000 engineers</B>.</Bullet>,
        <Bullet key={3}>Designed and shipped the <B>Filter Preset feature</B> end-to-end: save, manage, and apply named filter configurations across the platform.</Bullet>,
        <Bullet key={4}>Implemented a <B>Thrift API version consistency check</B> in CI to detect virtual environment mismatches, preventing silent runtime failures.</Bullet>,
      ],
      tags: ['C++', 'Python', 'TypeScript', 'LLVM', 'OAuth2', 'Microsoft Entra ID'],
      last: false,
    },
    {
      period: 'Aug 2025 – Present',
      company: 'ELTE',
      title: 'Practice Teacher',
      subtitle: 'Eötvös Loránd University',
      bullets: [
        <Bullet key={1}><B>OOP / Java</B> (Feb 2026–): Weekly practice sessions on core OOP principles; review and grade projects with Javadoc and unit tests.</Bullet>,
        <Bullet key={2}><B>Telecommunication Networks</B> (Sep–Jan 2026): TCP/UDP, socket programming, Wireshark, subnetting; lab sessions using Mininet and Linux networking tools.</Bullet>,
      ],
      tags: ['Java', 'OOP', 'TCP/IP', 'Mininet', 'Linux'],
      last: false,
    },
    {
      period: 'Feb 2023 – Jul 2024',
      company: 'Ericsson',
      title: 'Software Developer Intern',
      subtitle: '@BNEW SAN · CodeChecker',
      bullets: [
        <Bullet key={1}>Designed and implemented the <B>initial OAuth2 authentication framework</B> for CodeChecker — integrated Google, Microsoft, and GitHub identity providers; established the security architecture later delivered to production.</Bullet>,
      ],
      tags: ['Python', 'OAuth2', 'CodeChecker'],
      last: true,
    },
  ];

  return (
    <section style={{
      background: '#111110',
      borderTop: '1px solid #252523',
      borderBottom: '1px solid #252523',
      padding: '88px 48px',
    }}>
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
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#ede9e0' }}>Experience</h2>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#4a4845' }}>Budapest, Hungary</div>
        </div>

        <div>
          {items.map((item, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              padding: '36px 0',
              borderBottom: item.last ? 'none' : '1px solid #252523',
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#d4a853', marginBottom: 4 }}>{item.period}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#4a4845' }}>{item.company}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: '#ede9e0', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#3dcfbe', marginBottom: 14 }}>{item.subtitle}</div>
                <ul style={{ padding: 0, margin: '0 0 14px 0' }}>
                  {item.bullets}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Experience });
