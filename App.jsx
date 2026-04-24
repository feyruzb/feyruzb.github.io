const App = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const sections = ['home', 'experience', 'projects', 'about', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div style={{ background: '#0a0a09', minHeight: '100vh', color: '#ede9e0' }}>
      <Nav active={activeSection} onNav={scrollTo} />
      <div id="home"><Hero onNav={scrollTo} /></div>
      <MarqueeBand />
      <div id="experience" className="reveal"><Experience /></div>
      <div id="projects" className="reveal"><Projects /></div>
      <div id="about" className="reveal"><About /></div>
      <div id="contact" className="reveal"><Contact /></div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
