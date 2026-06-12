import { site } from './data/site'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <main className="app-main">
        <p className="app-eyebrow">{site.title}</p>
        <h1>{site.name}</h1>
        <p className="app-tagline">{site.tagline}</p>
      </main>
    </div>
  )
}

export default App
