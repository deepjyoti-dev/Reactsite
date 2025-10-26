import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200; // offset for header
      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Header / Navbar */}
      <header className="App-header">
        <h1 className="logo">Deepjyoti Das</h1>
        <nav className={menuOpen ? 'open' : ''}>
          <button
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="section hero fade-in">
        <h2>Hello, I'm Deepjyoti</h2>
        <p>I'm a developer creating modern websites and apps.</p>
        <button onClick={() => scrollToSection('projects')}>See My Work</button>
      </section>

      {/* About Section */}
      <section id="about" className="section fade-in">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in web and mobile apps. I love coding, designing,
          and solving problems creatively.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section fade-in">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
          <div className="project-card">Project 4</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section fade-in">
        <h2>Contact Me</h2>
        <p>Email: yourname@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <button onClick={() => window.location = 'mailto:yourname@example.com'}>Email Me</button>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2025 Deepjyoti Das. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
