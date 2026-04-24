const Contact = () => {
  const contacts = [
    { icon: 'gh', label: 'GitHub',   sub: 'feyruzb',                    href: 'https://github.com/feyruzb' },
    { icon: 'in', label: 'LinkedIn', sub: 'feyruz',                     href: 'https://linkedin.com/in/feyruz' },
    { icon: 'tg', label: 'Telegram', sub: 'S1MILARITY',                 href: 'https://t.me/S1MILARITY' },
    { icon: '@',  label: 'Email',    sub: 'feyruzbaghirov@gmail.com',   href: 'mailto:feyruzbaghirov@gmail.com' },
  ];

  const ContactItem = ({ icon, label, sub, href }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? '#111110' : '#0a0a09',
          padding: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          position: 'relative',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
      >
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 16,
          color: hovered ? '#d4a853' : '#4a4845',
          width: 28,
          textAlign: 'center',
          transition: 'color 0.2s',
          flexShrink: 0,
        }}>{icon}</div>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: '#ede9e0' }}>{label}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845' }}>{sub}</div>
        </div>
        <div style={{
          position: 'absolute',
          right: 28,
          top: '50%',
          transform: 'translateY(-50%)',
          color: hovered ? '#d4a853' : '#4a4845',
          fontSize: 14,
          transition: 'color 0.2s',
        }}>↗</div>
      </a>
    );
  };

  return (
    <section style={{ padding: '88px 48px', borderTop: '1px solid #252523' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ borderBottom: '1px solid #252523', paddingBottom: 20, marginBottom: 48 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4845', textTransform: 'uppercase', marginBottom: 8 }}>Contact</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#ede9e0' }}>Get in Touch</h2>
        </div>

        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: '#8a8780', maxWidth: 480, lineHeight: 1.8, marginBottom: 48 }}>
          Open to interesting projects, collaborations, and full-time opportunities.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#252523', border: '1px solid #252523' }}>
          {contacts.map(c => <ContactItem key={c.label} {...c} />)}
        </div>

        <div style={{
          marginTop: 56,
          paddingTop: 28,
          borderTop: '1px solid #252523',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: '#4a4845',
        }}>
          <span>© 2025 Feyruz Baghirov</span>
          <span>feyruz.dev</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Contact });
