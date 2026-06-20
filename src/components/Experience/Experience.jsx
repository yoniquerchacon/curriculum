import { useState } from 'react';
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

function ExperiencePanel({ job }) {
  if (!job) {
    return (
      <aside className="experiencePanel" aria-label="Panel de compañía">
        <div className="experiencePanelContent experiencePanelNeutral">
          <span className="experiencePanelEyebrow">Company Inspect</span>
          <p>Pasa el cursor por una empresa para ver su marca y contexto operativo.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="experiencePanel" aria-label={`Detalle de ${job.company}`}>
      <div className="experiencePanelContent" key={job.id}>
        <span className="experiencePanelEyebrow">Company Inspect</span>
        <CompanyLogo brand={job.brand} />

        <div className="experiencePanelMeta">
          <span>{job.brand.code}</span>
          <span>{job.period}</span>
        </div>

        <h3>{job.role}</h3>
        <p>{job.brand.focus}</p>

        <dl className="experienceSignals">
          <div>
            <dt>Compañía</dt>
            <dd>{job.company}</dd>
          </div>
          {job.location && (
            <div>
              <dt>Base</dt>
              <dd>{job.location}</dd>
            </div>
          )}
        </dl>
      </div>
    </aside>
  );
}

/** Timeline limpio — periodo | rol | hechos técnicos. */
export function Experience({ items }) {
  const [activeJob, setActiveJob] = useState(null);

  return (
    <section id="experiencia" className="experience" aria-labelledby="exp-heading">
      <SectionHeading title="Experiencia" />

      <div className="experienceGrid">
        <div className="timeline" role="list">
          {items.map((job) => (
            <article
              key={job.id}
              className={`entry ${activeJob?.id === job.id ? 'entryActive' : ''}`}
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setActiveJob(job)}
              onFocus={() => setActiveJob(job)}
            >
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

        <ExperiencePanel job={activeJob} />
      </div>
    </section>
  );
}
