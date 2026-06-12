import { site } from '../data/site'
import './ResumeDownloadButton.css'

interface ResumeDownloadButtonProps {
  variant?: 'primary' | 'secondary' | 'header'
  showUpdatedLabel?: boolean
}

export function ResumeDownloadButton({
  variant = 'primary',
  showUpdatedLabel = false,
}: ResumeDownloadButtonProps) {
  return (
    <div className="resume-download">
      <a
        className={`resume-download__button resume-download__button--${variant}`}
        href={site.resume.url}
        download={site.resume.downloadName}
      >
        Download Resume
      </a>
      {showUpdatedLabel && (
        <span className="resume-download__label">{site.resume.updatedLabel}</span>
      )}
    </div>
  )
}
