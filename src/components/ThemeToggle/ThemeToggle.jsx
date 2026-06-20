import './ThemeToggle.css';

export function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className="toggle"
      onClick={onToggle}
      aria-label={isLight ? 'Modo oscuro' : 'Modo claro'}
    >
      <span className={`toggleTrack ${isLight ? 'toggleTrackLight' : ''}`}>
        <span className="toggleThumb" />
      </span>
    </button>
  );
}
