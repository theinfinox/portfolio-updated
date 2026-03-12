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
          <h1>I'm Govind S R.</h1>
          <p>
            A Computer Science Engineering student based in Thiruvananthapuram, Kerala, India.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:1sreegovind@gmail.com" className="btn">Email</a>
            <a href="https://github.com/theinfinox" target="_blank" className="btn" style={{background: 'var(--primary-green)'}}>GitHub</a>
            <a href="https://linkedin.com/in/theinfinox" target="_blank" className="btn">LinkedIn</a>
            <a href="https://govindsr.me" target="_blank" className="btn">Website</a>
          </div>
          
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h2 style={{ marginBottom: '1.5rem' }}>// Experience</h2>
          <div className="grid-2">
            
            <div className="project-card">
              <h3>Freelance Cloud Consultant & System Administrator</h3>
              <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>SELF-EMPLOYED | REMOTE | JUNE 2024 - PRESENT</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li style={{marginBottom: '0.5rem'}}>Designed and managed multi-cloud infrastructures across AWS, Azure, GCP, and DigitalOcean with secure and optimized configurations.</li>
                <li style={{marginBottom: '0.5rem'}}>Implemented Cloudflare CDN, Zero-Trust, and secure tunneling solutions to enhance system performance and access security.</li>
                <li style={{marginBottom: '0.5rem'}}>Led cyber-attack mitigation, incident response, and recovery operations ensuring high availability and minimal downtime.</li>
                <li>Containerized and deployed applications using Docker, improving portability, reliability, and operational efficiency.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>General Manager</h3>
              <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>MANAV PRAKRITI FOUNDATION | HYBRID | MAR 2024 - SEP 2025</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li style={{marginBottom: '0.5rem'}}>Oversaw end-to-end web administration, ensuring secure, high-performance website operations.</li>
                <li style={{marginBottom: '0.5rem'}}>Produced and edited multimedia content to strengthen organizational outreach and engagement.</li>
                <li style={{marginBottom: '0.5rem'}}>Managed social media strategy, increasing brand visibility and audience reach across platforms.</li>
                <li>Designed graphics and marketing assets that enhanced the foundation's digital and offline presence.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>DevOps Intern under IHRD</h3>
              <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>KERALA LEGISLATIVE ASSEMBLY | FEB 2024 - MAY 2024</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li style={{marginBottom: '0.5rem'}}>Administer Linux servers, ensuring secure, stable, and optimized operational environments.</li>
                <li style={{marginBottom: '0.5rem'}}>Strengthen network security through firewall policies, vulnerability assessments, and access controls.</li>
                <li style={{marginBottom: '0.5rem'}}>Containerize internal applications using Docker to streamline deployment and improve reliability.</li>
                <li>Develop and enhance CI/CD workflows using GitHub Actions, enabling fully automated builds and testing.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Technical Lead</h3>
              <p className="mono-text text-green" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>FOSS CELL, CE ATTINGAL | JUNE 2023 - MAY 2024</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li style={{marginBottom: '0.5rem'}}>Architected and deployed a self-hosted server stack to run APIs with minimal infrastructure cost.</li>
                <li style={{marginBottom: '0.5rem'}}>Led development contributions to automated WhatsApp Bot systems for campus productivity.</li>
                <li>Represented the club and college at Freedom Fest 2023, IEDC Summit 2023, and Keraleeyam 2023 with innovative tech showcases.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" style={{ marginTop: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>// Skills Matrix</h2>
          <div className="skills-grid">
            <div className="skill-tag">C/C++</div>
            <div className="skill-tag">Linux / Shell</div>
            <div className="skill-tag">Docker / YAML</div>
            <div className="skill-tag">AWS / Azure / GCP</div>
            <div className="skill-tag">DigitalOcean</div>
            <div className="skill-tag">Git / GitHub Actions</div>
            <div className="skill-tag">Nmap / Firewalls</div>
            <div className="skill-tag">Cloudflare Zero Trust</div>
            <div className="skill-tag">Raspberry Pi / Arduino</div>
            <div className="skill-tag">NodeMCU / ARM / STM32</div>
            <div className="skill-tag">I2C / SPI / UART / MQTT</div>
            <div className="skill-tag">MySQL</div>
            <div className="skill-tag">Amazon SES</div>
            <div className="skill-tag">Postman / Retool</div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ marginTop: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>// Projects</h2>
          <div className="grid-2">
            
            <div className="project-card compact">
              <h3>Project Haajar</h3>
              <p>A smart College Management System. front-end frameworks Flutter, Reactjs. The Back-end relies on Appwrite. Test and Production Server: PiCloud v1.0 SMTP Server: Amazon SES</p>
            </div>

            <div className="project-card compact">
              <h3>PiCloud</h3>
              <p>Using a home LAN connection and harnessing Raspberry Pi technology to host web applications. CloudFlare Zero Trust, Docker, Appwrite, GitHub Actions</p>
            </div>

            <div className="project-card compact">
              <h3>Transit Master</h3>
              <p>Co-developed urban mobility solution in collaboration with a team. Introduced NFC-enabled smart card system for efficient public transportation. Highlighted fusion of innovation and practicality for sustainable urban development.</p>
            </div>

            <div className="project-card compact">
              <h3>LAN Based Media Controller</h3>
              <p>A project that helps to control a pe's running multimedia (Play/Pause/Next/Previous/Volume control) Built with NodeJs, JavaScript</p>
            </div>

            <div className="project-card compact">
              <h3>Python Voice Assistant</h3>
              <p>Using Alexa SDK, installed and customized Alexa answers for college purposes. Voice assisted room automation system</p>
            </div>

            <div className="project-card compact">
              <h3>Logistics Management System</h3>
              <p>IoT based agriculture consumption tracking project that helps with live monitoring and logging of RH and temperature along with live tracking using GPS.</p>
            </div>

            <div className="project-card compact">
              <h3>Customized Alexa (COVID-19)</h3>
              <p>Using Alexa SDK, installed and customized Alexa answers for college purposes. Voice assisted room automation system</p>
            </div>

            <div className="project-card compact">
              <h3>Alexa Mood Analysis Skill</h3>
              <p>AWS lambda function and spin up a simple mood analysis skill.</p>
            </div>

            <div className="project-card compact">
              <h3>Custom Hardware Alexa Unit</h3>
              <p>Using Alexa SDK, installed and customized Alexa answers for college purposes. on custom hardware. Includes Raspberry PI. The project focus was to switch ON and OFF lights and other devices in public spaces during lockdown using voice.</p>
            </div>

            <div className="project-card compact">
              <h3>Smart Drip Irrigation</h3>
              <p>Created an IoT-based automation device for a drip irrigation system. Using Google assistant Blynk, IFTTT, NodeMCU</p>
            </div>

            <div className="project-card compact">
              <h3>Google Assistant Home Auto</h3>
              <p>Created an IoT device for home automation with Blynk, IFTTT, NodeMCU</p>
            </div>

            <div className="project-card compact">
              <h3>Tissue Culture Lab Robot</h3>
              <p>A Realtime controlled mobile robot over cloud. via MQTT</p>
            </div>

          </div>
        </section>

        {/* EDUCATION & RECOGNITION SECTION */}
        <section id="education" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>// Education & Engagements</h2>
          
          <div className="grid-2">
            <div>
              <h3 className="mono-text text-green" style={{ marginBottom: '1rem' }}>EDUCATION</h3>
              <div className="project-card compact" style={{marginBottom: '1rem'}}>
                <h3>B. Tech. Computer Science and Engineering</h3>
                <p>College of Engineering Attingal, Affiliated to Kerala Technological University. Thiruvananthapuram, Kerala</p>
              </div>
              <div className="project-card compact" style={{marginBottom: '1rem'}}>
                <h3>Higher Secondary Education | Computer Science</h3>
                <p>Govt. Model BHSS, Thycaud — Percentage: 86%</p>
              </div>
              <div className="project-card compact">
                <h3>SSLC/10th</h3>
                <p>New HSS Nellimood — Percentage: 100%</p>
              </div>
            </div>

            <div>
               <h3 className="mono-text text-green" style={{ marginBottom: '1rem' }}>EXPO & RECOGNITION</h3>
               <div className="project-card compact" style={{marginBottom: '1rem'}}>
                <h3>Project Expos</h3>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                  <li><strong>Global Science Festival Kerala 2024:</strong> Recognized for the project "PiCloud" (The Project was included in official video of Kerala Technological University)</li>
                  <li><strong>Keraleeyam 2023:</strong> Recognized for the project "PiCloud", Transit Master</li>
                  <li><strong>KSUM IEDC Summit 2023:</strong> Recognized for the project "PiCloud", Transit Master</li>
                  <li><strong>Freedom Fest 2023:</strong> Recognized for the project "PiCloud", Transit Master</li>
                </ul>
              </div>

              <div className="project-card compact" style={{marginBottom: '1rem'}}>
                <h3>Awards & Certifications</h3>
                <p style={{fontSize: '0.9rem'}}>State Level 'B' grade in Webpage Designing || Kerala School Shastrolsavam Education Department Recognized for the quick learner skill. (Nov 2016)</p>
              </div>

              <div className="project-card compact">
                <h3>Publications</h3>
                <p style={{fontSize: '0.9rem'}}>Manav Prakriti Foundation (2026) Kerala: The Coasts That Once Was. Zenodo. doi:10.5281/zenodo.18919264. Documentary Editor. (Mar 2026)</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
