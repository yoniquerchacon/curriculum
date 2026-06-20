import './SectionHeading.css';

/** Encabezado de sección — solo título, sin etiquetas numeradas. */
export function SectionHeading({ title }) {
  return (
    <header className="sectionHeading">
      <h2 className="sectionTitle">{title}</h2>
    </header>
  );
}
