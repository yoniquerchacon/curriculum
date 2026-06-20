import { useState } from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './TechStack.css';

const compactLogoMap = {
  'PHP / Laravel': ['PHP', 'Laravel'],
  Microservicios: ['Services', 'REST', 'Containers'],
  'Domain-Driven Design': ['DDD', 'Bounded Contexts', 'Aggregates'],
  'Docker Swarm': ['Docker', 'Swarm'],
  GitOps: ['GitOps', 'Declarative Config'],
  GitFlow: ['Git', 'Branches', 'Releases'],
  'Vector DBs': ['Embeddings', 'Semantic Search'],
};

function logoClassName(label) {
  return `techLogo techLogo-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function logoInitials(label) {
  const words = label.split(/[^A-Za-z0-9]+/).filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function TechLogoCloud({ logos }) {
  return (
    <div className="techLogoCloud" aria-label="Logos de tecnologías relacionadas">
      {logos.map((logo) => (
        <span className={logoClassName(logo)} key={logo}>
          <span className="techLogoMark" aria-hidden="true">
            {logoInitials(logo)}
          </span>
          {logo}
        </span>
      ))}
    </div>
  );
}

function StackPanel({ tech }) {
  if (!tech) {
    return (
      <aside className="stackPanel" aria-label="Panel de stack tecnológico">
        <div className="stackPanelContent stackPanelNeutral">
          <span className="stackPanelEyebrow">Stack Inspect</span>
          <p>Pasa el cursor por una tecnología para inspeccionar su ecosistema.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="stackPanel" aria-label={`Tecnologías relacionadas con ${tech.name}`}>
      <div className="stackPanelContent" key={tech.name}>
        <span className="stackPanelEyebrow">Stack Inspect</span>
        <h3>{tech.name}</h3>
        {tech.keywords && <p>{tech.keywords}</p>}

        {tech.tradeoff && (
          <div className="stackTradeoff" aria-label="Criterio arquitectónico">
            <span className="stackTradeoffLabel">Trade-off Arquitectónico</span>
            <p>{tech.tradeoff}</p>
          </div>
        )}

        <span className="stackLogoLabel">Logos y tecnologías</span>
        <TechLogoCloud logos={tech.logos || [tech.name]} />
      </div>
    </aside>
  );
}

/**
 * Matriz tipográfica — nombre en negrita + dominio real.
 * Sin cards. Separación por líneas finas y espacio.
 */
export function TechStack({ categories }) {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <section id="tecnologias" className="techStack" aria-labelledby="stack-heading">
      <SectionHeading title="Stack" />

      <div className="stackGrid">
        <div className="matrix">
          {categories.map((group) => (
            <div key={group.category} className="group">
              <h3 className="groupLabel">{group.category}</h3>

              <ul className="rows">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className={`row ${activeTech?.name === tech.name ? 'rowActive' : ''}`}
                    tabIndex={0}
                    title={tech.tradeoff || ''}
                    onMouseEnter={() => setActiveTech(tech)}
                    onFocus={() => setActiveTech(tech)}
                  >
                    <span className="techName">{tech.name}</span>
                    {tech.keywords && (
                      <>
                        <span className="separator">·</span>
                        <span className="keywords">{tech.keywords}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {group.compact?.length > 0 && (
                <p className="compact">
                  <span className="compactLabel">También</span>
                  {group.compact.map((name, i) => (
                    <span key={name}>
                      {i > 0 && <span className="compactSep">·</span>}
                      <span
                        className="compactItem"
                        tabIndex={0}
                        onMouseEnter={() =>
                          setActiveTech({
                            name,
                            keywords: 'Tecnología complementaria dentro del ecosistema de la categoría.',
                            logos: compactLogoMap[name] || [name],
                          })
                        }
                        onFocus={() =>
                          setActiveTech({
                            name,
                            keywords: 'Tecnología complementaria dentro del ecosistema de la categoría.',
                            logos: compactLogoMap[name] || [name],
                          })
                        }
                      >
                        {name}
                      </span>
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <StackPanel tech={activeTech} />
      </div>
    </section>
  );
}
