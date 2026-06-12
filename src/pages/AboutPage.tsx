import { Link } from 'react-router-dom'
import { ResumeDownloadButton } from '../components/ResumeDownloadButton'
import { site } from '../data/site'
import './pages.css'

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__photo-wrap">
          <img
            src={site.profilePhoto}
            alt={`Photo of ${site.name}`}
            className="about-hero__photo"
            width={200}
            height={250}
          />
        </div>
        <div>
          <p className="hero__eyebrow">{site.title}</p>
          <h1>About Me</h1>
          <p className="about-hero__location">{site.location}</p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner about-section">
          <h2>Introduction</h2>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="about-section__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__inner about-section">
          <h2>Experience & Education</h2>
          <ul className="about-list">
            {site.about.experience.map((item) => (
              <li key={item.role} className="about-list__item">
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
            {site.about.education.map((item) => (
              <li key={item.degree} className="about-list__item">
                <h3>{item.degree}</h3>
                <p>
                  {item.school} · {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section__inner about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {site.about.skills.map((group) => (
              <div key={group.category} className="skills-group">
                <h3>{group.category}</h3>
                <ul className="skills-group__list">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner about-section">
          <h2>Interests</h2>
          <ul className="interests-list">
            {site.about.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-cta">
        <div className="section__inner about-cta__inner">
          <h2>Let&apos;s Connect</h2>
          <p>
            Interested in working together? View or download my resume, or
            reach out on LinkedIn.
          </p>
          <div className="about-cta__actions">
            <ResumeDownloadButton showUpdatedLabel />
            <Link className="button-secondary" to="/resume">
              View Resume
            </Link>
            <a
              className="button-secondary"
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <Link className="button-secondary" to="/#projects">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
