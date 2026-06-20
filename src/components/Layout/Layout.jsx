import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.css';

/**
 * Estructura principal: sidebar fijo + área de contenido scrollable.
 */
export function Layout({ children, navItems, profile, theme, onToggleTheme }) {
  return (
    <div className="layout">
      <Sidebar
        navItems={navItems}
        profile={profile}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
      <main className="main" id="main-content">
        <div className="mainInner">{children}</div>
      </main>
    </div>
  );
}
