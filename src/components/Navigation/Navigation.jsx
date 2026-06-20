import { useActiveSection } from '../../hooks/useActiveSection';
import './Navigation.css';

/**
 * Navegación por anclas con scroll suave y estado activo.
 */
export function Navigation({ items }) {
  const sectionIds = items.map((item) => item.id);
  const activeId = useActiveSection(sectionIds);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav" aria-label="Secciones">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`navLink ${activeId === id ? 'navLinkActive' : ''}`}
          onClick={(e) => handleClick(e, id)}
          aria-current={activeId === id ? 'true' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
