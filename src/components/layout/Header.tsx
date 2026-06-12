import { NavLink } from 'react-router-dom'
import { site } from '../../data/site'
import { ResumeDownloadButton } from '../ResumeDownloadButton'
import './layout.css'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__brand">
          {site.name}
        </NavLink>

        <nav className="site-header__nav" aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `site-header__link${isActive ? ' site-header__link--active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `site-header__link${isActive ? ' site-header__link--active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `site-header__link${isActive ? ' site-header__link--active' : ''}`
            }
          >
            Resume
          </NavLink>
        </nav>

        <div className="site-header__actions">
          <ResumeDownloadButton variant="header" />
        </div>
      </div>
    </header>
  )
}
