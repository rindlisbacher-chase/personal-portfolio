import type { Project } from '../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={project.thumbnailUrl}
          alt=""
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags" aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-card__links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
