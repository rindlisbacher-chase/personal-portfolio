import { ResumeDownloadButton } from '../components/ResumeDownloadButton'
import { site } from '../data/site'
import './pages.css'

export function ResumePage() {
  return (
    <section className="resume-page">
      <div className="section__inner resume-page__inner">
        <header className="resume-page__header">
          <h1>Resume</h1>
          <p className="resume-page__meta">{site.resume.updatedLabel}</p>
          <div className="resume-page__actions">
            <ResumeDownloadButton />
            <a
              className="button-secondary"
              href={site.resume.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF in New Tab
            </a>
          </div>
        </header>

        <div className="resume-page__mobile-fallback">
          <p>
            Inline PDF preview is not available on your device. Open the resume
            in a new tab or download it directly.
          </p>
          <div className="resume-page__actions">
            <a
              className="button-secondary"
              href={site.resume.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF in New Tab
            </a>
            <ResumeDownloadButton variant="secondary" />
          </div>
        </div>

        <iframe
          className="resume-page__viewer"
          src={site.resume.url}
          title={`${site.name} resume preview`}
        />

        <p className="resume-page__fallback">
          Can&apos;t view the PDF inline?{' '}
          <a
            href={site.resume.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open it in a new tab
          </a>{' '}
          or use the download button above.
        </p>
      </div>
    </section>
  )
}
