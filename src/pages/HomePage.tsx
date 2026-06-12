import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { ResumeDownloadButton } from '../components/ResumeDownloadButton'
import { projects } from '../data/projects'
import { site } from '../data/site'
import './pages.css'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">{site.title}</p>
          <h1>{site.name}</h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__location">
            {site.location} · {site.workPreference}
          </p>

          <div className="hero__actions">
            <ResumeDownloadButton showUpdatedLabel />
            <Link className="button-secondary" to="/resume">
              View Resume
            </Link>
            <a className="button-secondary" href="#projects">
              View Projects
            </a>
            <Link className="button-secondary" to="/about">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <img
            src={site.profilePhoto}
            alt={`Photo of ${site.name}`}
            className="hero__photo"
            width={320}
            height={400}
          />
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section__inner">
          <div className="section__header">
            <h2>Projects</h2>
            <p className="section__lead">
              A selection of things I have built — from themed minigames to
              full-stack web apps.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-teaser">
        <div className="section__inner about-teaser__inner">
          <div>
            <h2>About Me</h2>
            <p className="about-teaser__text">{site.about.paragraphs[0]}</p>
            <Link className="text-link" to="/about">
              Read more about me →
            </Link>
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="section__inner contact-strip__inner">
          <h2>Get in Touch</h2>
          <p className="contact-strip__lead">
            Open to full-stack and web developer roles, plus DevOps opportunities.
          </p>
          <div className="contact-strip__links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
