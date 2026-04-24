const Nav = ({ active, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['experience', 'projects', 'about', 'contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 48px',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      background: scrolled ? 'rgba(10,10,9,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #252523' : '1px solid transparent',
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#8a8780', userSelect: 'none' }}>
        <span style={{ color: '#d4a853' }}>fb</span> / feyruz baghirov
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(id => (
          <NavLink key={id} id={id} active={active} onNav={onNav} />
        ))}
      </div>
    </nav>
  );
};

const NavLink = ({ id, active, onNav }) => {
  const [hovered, setHovered] = React.useState(false);
  const isActive = active === id;
  return (
    <a
      href={`#${id}`}
      onClick={(e) => { e.preventDefault(); onNav(id); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: isActive ? '#d4a853' : hovered ? '#ede9e0' : '#4a4845',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color 0.2s',
      }}
    >
      {id}
    </a>
  );
};

Object.assign(window, { Nav });
