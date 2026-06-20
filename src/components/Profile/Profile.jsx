import './Profile.css';

/** Perfil tecnico — statement + foco operativo, sin encabezados genericos. */
export function Profile({ summary }) {
  return (
    <section id="perfil" className="profile" aria-label="Perfil profesional">
      <p className="statement">{summary.statement}</p>

      <ul className="focusList">
        {summary.focus.map((item) => (
          <li key={item} className="focusItem">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
