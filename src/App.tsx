const projects = [
  {
    title: "Wall-Climbing Quadruped",
    description:
      "A quadruped robot with active suction feet for free-form surface adhesion, built around an STM32F407 controller and twelve bus servos.",
    tags: ["Robot design", "Embedded control", "Active suction"],
    href: "https://github.com/FelixtheFelinae/wall-climbing-quadruped",
    accent: "violet",
  },
  {
    title: "Dexterous Hand Expansion for Leju Kuavo",
    description:
      "Integration work extending the Leju Kuavo humanoid platform with dexterous-hand capabilities and a practical control interface.",
    tags: ["Humanoid robotics", "Dexterous hand", "Python"],
    href: "https://github.com/FelixtheFelinae/Dexterous-Hand-Expansion-for-Leju-Kuavo",
    accent: "magenta",
  },
];

const notes = [
  {
    type: "Personal",
    date: "Sep 2026",
    title: "A quieter place for the work",
    summary:
      "Rebuilding this site around clear research context, honest project records and room for longer notes as the work develops.",
  },
  {
    type: "Project note",
    date: "Aug 2026",
    title: "Wall-climbing quadruped: system overview",
    summary:
      "A compact introduction to the mechanical, adhesion and embedded-control ideas behind the platform.",
    href: "https://github.com/FelixtheFelinae/wall-climbing-quadruped",
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M6 3h7v7M13 3 5 11M11 8v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
  </svg>
);

const Navigation = ({ className = "" }: { className?: string }) => (
  <nav className={className} aria-label="Primary navigation">
    <a href="#about">About</a>
    <a href="#publications">Publications</a>
    <a href="#projects">Projects</a>
    <a href="#blog">Notes</a>
    <a href="#contact">Contact</a>
  </nav>
);

export function App() {
  return (
    <div className="site-shell">
      <div className="ambient-backdrop" aria-hidden="true">
        <div className="aurora-wash" />
        <div className="star-field" />
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Zimo Zhou, home">
          Zimo Zhou
        </a>
        <Navigation className="desktop-nav" />
        <details className="mobile-menu">
          <summary>Menu</summary>
          <Navigation />
        </details>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="portrait-wrap">
            <div className="portrait-halo" aria-hidden="true" />
            <img src="/nova07.png" alt="FelixtheFelinae cybernetic cat portrait" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Robotics and embodied intelligence</p>
            <h1 id="hero-title">Zimo Zhou</h1>
            <p className="handle">@FelixtheFelinae</p>
            <p className="intro">
              I work on robotic systems that connect perception, control and physical interaction.
              I am especially interested in machines that can operate reliably outside carefully
              controlled laboratory settings.
            </p>

            <div className="hero-links">
              <a className="primary-link" href="#projects">
                View projects <ArrowIcon />
              </a>
              <a className="icon-link" href="https://github.com/FelixtheFelinae" target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </div>

            <ul className="interest-list" aria-label="Research interests">
              <li>Robot Design</li>
              <li>Manipulation</li>
              <li>Machine Perception</li>
              <li>Embodied AI</li>
            </ul>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-kicker">
            <span>About</span>
          </div>
          <div className="about-copy">
            <h2>Research interests</h2>
            <div className="prose-columns">
              <p>
                My interests sit across robotics hardware, perception and control. I enjoy working on
                complete systems: from mechanical constraints and embedded implementation to the software
                that turns sensing into useful action.
              </p>
              <p>
                Recent work includes a wall-climbing quadruped, dexterous-hand integration and practical
                perception-to-control pipelines. I use this site to keep the outcomes, decisions and
                lessons from that work in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" id="publications">
          <div className="section-heading">
            <div>
              <p className="section-label">Research</p>
              <h2>Publications</h2>
            </div>
            <p className="section-intro">
              Papers and technical reports, listed with links to the manuscript, code and project page.
            </p>
          </div>
          <div className="publication-status">
            <div>
              <h3>No formal publications listed yet</h3>
              <p>
                Until there is finished work to cite, implementation details and open-source records
                are available in the projects section.
              </p>
            </div>
            <a href="#projects">Explore projects <ArrowIcon /></a>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">Work</p>
              <h2>Projects</h2>
            </div>
            <p className="section-intro">
              Robotics projects documented through the problem, the system and the contribution.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <a
                className={`project-card project-${project.accent}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} topics`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <span className="project-open" aria-label="Open project"><ExternalIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section" id="blog">
          <div className="section-heading">
            <div>
              <p className="section-label">Writing</p>
              <h2>Notes</h2>
            </div>
            <p className="section-intro">
              Short writing on research, engineering choices and life around the work.
            </p>
          </div>

          <div className="note-list">
            {notes.map((note) => {
              const body = (
                <>
                  <div className="note-meta"><span>{note.type}</span><span>{note.date}</span></div>
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>
                  {note.href && <span className="note-arrow"><ExternalIcon /></span>}
                </>
              );

              return note.href ? (
                <a className="note-row" href={note.href} target="_blank" rel="noreferrer" key={note.title}>
                  {body}
                </a>
              ) : (
                <article className="note-row" key={note.title}>{body}</article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid">
            <h2>Contact</h2>
            <div>
              <p>
                I am interested in conversations about robots, embodied systems and practical hardware.
                GitHub is currently the best place to find my work and get in touch.
              </p>
              <a className="primary-link" href="https://github.com/FelixtheFelinae" target="_blank" rel="noreferrer">
                Find me on GitHub <ExternalIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Zimo Zhou</span>
        <span>Robotics · Embodied Intelligence</span>
      </footer>
    </div>
  );
}
