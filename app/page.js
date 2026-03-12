export default function Home() {
  return (
    <main className="container">
      
      {/* Hero Section */}
      <section className="hero">
        <p className="mono-text text-green">HELLO_WORLD</p>
        <h1>I'm Govind.</h1>
        <p>
          A Computer Science Engineering student building clean, minimal, and highly functional digital experiences.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="#contact" className="btn">Get in touch &rarr;</a>
        </div>
      </section>

      {/* Skills Section (Using the grid style) */}
      <section>
        <h2 style={{ marginBottom: '1.5rem' }}>// Toolkit</h2>
        <div className="skills-grid">
          <div className="skill-tag">Linux</div>
          <div className="skill-tag">Docker</div>
          <div className="skill-tag">Bash</div>
          <div className="skill-tag">Next.js</div>
          <div className="skill-tag">HTML/CSS</div>
          <div className="skill-tag">C/C++</div>
        </div>
      </section>

      {/* Projects Section (Using the card style) */}
      <section>
        <h2 style={{ marginBottom: '1.5rem' }}>// Projects</h2>
        
        <div className="project-card">
          <h3>Miniature Automated Air Purifier</h3>
          <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>HARDWARE | SENSOR LOGIC</p>
          <p>
            Designed and built a fully automated, functional air purification system condensed into a 5cm cube for a college project. 
          </p>
          <a href="#" className="btn" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>View Details</a>
        </div>

        <div className="project-card">
          <h3>Linux Unfiltered Interactive Grid</h3>
          <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>FRONTEND | UI/UX</p>
          <p>
            Developed a highly aesthetic, responsive 60-grid interface to display student IDs, featuring real-time search filtering and dynamic routing.
          </p>
          <a href="#" className="btn" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>View Code</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '2rem' }}>
        <h2>Let's Build Something.</h2>
        <p style={{ margin: '1rem 0 2rem' }}>Currently open for new opportunities and collaborations.</p>
        <a href="mailto:your-email@example.com" className="btn">Say Hello</a>
      </section>

    </main>
  );
}
