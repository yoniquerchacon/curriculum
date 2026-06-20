import { Navigation } from '../Navigation/Navigation';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { IconEmail, IconGitHub, IconLinkedIn } from '../Icons/Icons';
import './Sidebar.css';

/** Sidebar integrado — navegación + iconos monocromáticos. */
export function Sidebar({ navItems, profile, theme, onToggleTheme }) {
  return (
    <aside className="sidebar" aria-label="Navegación principal">
      <div className="sidebarTop">
        <div className="brand">
          <span className="brandName">{profile.name}</span>
          <span className="brandRole">{profile.role}</span>
        </div>
        <Navigation items={navItems} />

        <a
          className="cvButton"
          href={profile.cvUrl || '#'}
          download
          aria-label="Descargar CV en PDF"
        >
          Descargar CV (PDF)
        </a>
      </div>

      <div className="sidebarBottom">
        <div className="social">
          <a
            className="socialLink"
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
          >
            <IconEmail />
          </a>
          <a
            className="socialLink"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a
            className="socialLink"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <IconGitHub />
          </a>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </aside>
  );
}
