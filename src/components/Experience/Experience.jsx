import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Experience.css';

function CompanyLogo({ brand }) {
  return (
    <div className={`companyLogo companyLogo-${brand.variant}`} aria-label={`Logo ${brand.name}`}>
      <span className="companyLogoMark" aria-hidden="true">
        {brand.code}
      </span>
      <span>{brand.name}</span>
    </div>
  );
}

/** Timeline limpio — periodo | rol | hechos técnicos. */
export function Experience({ items }) {
  return (
    <section id="experiencia" className="experience" aria-labelledby="exp-heading">
      <SectionHeading title="Experiencia" />

      <div className="timeline" role="list">
        {items.map((job) => (
          <article key={job.id} className="entry" role="listitem" tabIndex={0}>
            <div className="entryPeriod">
              <time>{job.period}</time>
            </div>

            <div className="entryBody">
              <span className={`entryBrand entryBrand-${job.brand.variant}`}>
                <span className="entryBrandSymbol" aria-hidden="true" />
                {job.brand.name}
              </span>

              <h3 className="entryRole">
                {job.role}
                <span className="entryCompany"> — {job.company}</span>
              </h3>

              <ul className="highlights">
                {job.highlights.map((point) => (
                  <li key={point} className="highlight">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
