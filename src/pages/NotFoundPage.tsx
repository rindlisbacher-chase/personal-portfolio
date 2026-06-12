import { Link } from 'react-router-dom'
import './pages.css'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p className="not-found__message">This page could not be found.</p>
      <Link className="button-secondary" to="/">
        Back to Home
      </Link>
    </section>
  )
}
