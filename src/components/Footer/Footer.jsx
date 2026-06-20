import { IconEmail, IconGitHub, IconLinkedIn } from '../Icons/Icons';
import './Footer.css';

export function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footerText">{year} · {profile.fullName}</p>
      <div className="social">
        <a className="socialLink" href={`mailto:${profile.email}`} aria-label="Email">
          <IconEmail />
        </a>
        <a
          className="socialLink"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </a>
        <a
          className="socialLink"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>
      </div>
    </footer>
  );
}
