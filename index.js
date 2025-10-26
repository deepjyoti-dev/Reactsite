import './App.css';
import { useState, useEffect } from 'react';
import project1Img from './projects/project1.png';
import project2Img from './projects/project2.png';
import project3Img from './projects/project3.png';
import project4Img from './projects/project4.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A React app that shows real-time weather information.',
      img: project1Img,
      live: 'https://your-weather-app.com',
      github: 'https://github.com/deepjyoti/weather-app',
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'A task management app with create/edit/delete features.',
      img: project2Img,
      live: 'https://your-task-manager.com',
      github: 'https://github.com/deepjyoti/task-manager',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing projects and skills.',
      img: project3Img,
      live: 'https://your-portfolio.com',
      github: 'https://github.com/deepjyoti/portfolio',
    },
    {
      id: 4,
      title: 'E-Commerce App',
      description: 'An online shopping app with cart and payment integration.',
      img: project4Img,
      live: 'https://your-ecommerce.com',
      github: 'https://github.com/deepjyoti/ecommerce-app',
    },
  ];

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;
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
      {/* Header */}
      <header className="App-header">
        <h1 className="logo">Deepjyoti Das</h1>
        <nav className={menuOpen ? 'open' : ''}>
          {['home', 'about', 'projects', 'contact'].map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
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

      {/* Hero */}
      <section id="home" className="section hero fade-in">
        <h2>Hello, I'm Deepjyoti</h2>
        <p>I'm a developer creating modern websites and apps.</p>
        <button onClick={() => scrollToSection('projects')}>See My Work</button>
      </section>

      {/* About */}
      <section id="about" className="section fade-in">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in web and mobile apps. I love coding, designing,
          and solving problems creatively.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section fade-in">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
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
