import data from './data.json';

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <nav className="navbar">
        <a href="#about">// ABOUT</a>
        <a href="#experience">// EXPERIENCE</a>
        <a href="#skills">// SKILLS</a>
        <a href="#projects">// PROJECTS</a>
        <a href="#education">// EDUCATION & EXPO</a>
      </nav>

      <main className="container">
        
        {/* HERO / ABOUT SECTION */}
        <section id="about" className="hero">
          <p className="mono-text text-green">HELLO_WORLD</p>
          <h1>I'm {data.personal.name}.</h1>
          <p>{data.personal.role} based in {data.personal.location}.</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${data.personal.email}`} className="btn">Email</a>
            <a href={data.personal.github} target="_blank" rel="noreferrer" className="btn" style={{background: 'var(--primary-green)'}}>GitHub</a>
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
            <a href={data.personal.instagram} target="_blank" rel="noreferrer" className="btn">Instagram</a>
          </div>
                 </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h2 style={{ marginBottom: '2rem' }}>// Experience</h2>
          <div className="grid-2">
            {data.experience.map((exp, index) => (
              <div key={index} className="project-card">
                <h3>{exp.title}</h3>
                <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  {exp.company} | {exp.location} | {exp.date}
                </p>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <h2 style={{ marginBottom: '2rem' }}>// Skills Matrix</h2>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h2 style={{ marginBottom: '2rem' }}>// Projects</h2>
          <div className="grid-2">
            {data.projects.map((project, index) => (
              <div key={index} className="project-card compact">
                <h3>{project.title}</h3>
                <p className="mono-text text-green" style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>{project.tech}</p>
                <p style={{ marginBottom: project.link ? '1.5rem' : '0' }}>{project.description}</p>
                
                {/* Conditional Rendering for the Link pushes perfectly to bottom because of .mt-auto flex utility class */}
                {project.link && (
                  <div className="mt-auto" style={{ alignSelf: 'flex-start', display: 'flex' }}>
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                      View Project &rarr;
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & RECOGNITION SECTION */}
        <section id="education">
          <h2 style={{ marginBottom: '2rem' }}>// Education & Engagements</h2>
          
          <div className="grid-2">
            {/* Education Column using Flexbox for spacing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="mono-text text-green" style={{ marginBottom: '0.5rem' }}>EDUCATION</h3>
              {data.education.map((edu, index) => (
                <div key={index} className="project-card compact">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <div className="mt-auto">
                    <p className="mono-text" style={{ fontSize: '0.8rem', marginTop: '0.8rem' }}>{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition Column using Flexbox for spacing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <h3 className="mono-text text-green" style={{ marginBottom: '0.5rem' }}>EXPO & RECOGNITION</h3>
               {data.recognition.map((rec, index) => (
                 <div key={index} className="project-card compact">
                   <h3>{rec.title}</h3>
                   <p style={{fontSize: '0.9rem'}}>{rec.details}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
