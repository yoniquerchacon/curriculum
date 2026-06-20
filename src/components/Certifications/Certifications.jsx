import { useState } from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CertificationCard } from './CertificationCard';
import './Certifications.css';

function IssuerMark({ issuer }) {
  const isRedHat = issuer.toLowerCase().includes('red hat');
  const label = isRedHat ? 'RED HAT' : 'Udemy';

  return (
    <div className={`issuerMark ${isRedHat ? 'issuerMarkRedHat' : 'issuerMarkUdemy'}`}>
      <span className="issuerMarkSymbol" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function TechInspectPanel({ certification }) {
  if (!certification) {
    return (
      <aside className="inspectPanel" aria-label="Panel de inspección técnica">
        <div className="inspectNeutral" aria-hidden="true">
          <span className="node nodePrimary" />
          <span className="node nodeSecondary" />
          <span className="node nodeTertiary" />
          <span className="node nodeQuaternary" />
          <span className="connection connectionOne" />
          <span className="connection connectionTwo" />
          <span className="connection connectionThree" />
        </div>
        <div className="inspectContent inspectContentNeutral">
          <span className="inspectEyebrow">Tech Inspect</span>
          <p className="inspectPrompt">
            Selecciona una certificación para inspeccionar los detalles técnicos.
          </p>
        </div>
      </aside>
    );
  }

  const { issuer, name, code, inspect } = certification;
  const badge = inspect?.badge || issuer;
  const skills = inspect?.skills || [];

  return (
    <aside className="inspectPanel" aria-label={`Detalles técnicos de ${name}`}>
      <div className="inspectContent" key={certification.id}>
        <span className="inspectEyebrow">Tech Inspect</span>
        <div className="inspectBadge" aria-label={`Entidad emisora ${badge}`}>
          <IssuerMark issuer={issuer} />
        </div>

        <div className="inspectMeta">
          {code && <span>{code}</span>}
          <span>{issuer}</span>
        </div>

        <h3 className="inspectTitle">{name}</h3>

        <span className="inspectStackLabel">Tecnologías utilizadas</span>
        <div className="skillTags" aria-label="Habilidades clave validadas">
          {skills.map((skill) => (
            <span className="skillTag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        {inspect?.impact && (
          <div className="impactBlock">
            <span className="impactLabel">Impacto Arquitectónico</span>
            <p>{inspect.impact}</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export function Certifications({ official, training }) {
  const [activeCertification, setActiveCertification] = useState(null);

  const handleActivate = (certification) => {
    setActiveCertification(certification);
  };

  return (
    <section id="certificaciones" className="certifications" aria-labelledby="certs-heading">
      <SectionHeading title="Certificaciones" />

      <div className="certificationsGrid">
        <div className="blocks">
          <div className="block">
            <h3 className="blockLabel">Oficiales — Red Hat</h3>
            <ul className="officialList" aria-label="Certificaciones Red Hat">
              {official.map((cert) => (
                <li key={cert.id}>
                  <CertificationCard
                    {...cert}
                    variant="official"
                    isActive={activeCertification?.id === cert.id}
                    onMouseEnter={() => handleActivate(cert)}
                    onFocus={() => handleActivate(cert)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <h3 className="blockLabel">Formación continua</h3>
            <ul className="trainingList" aria-label="Cursos Udemy">
              {training.map((cert) => (
                <li key={cert.id}>
                  <CertificationCard
                    {...cert}
                    variant="training"
                    isActive={activeCertification?.id === cert.id}
                    onMouseEnter={() => handleActivate(cert)}
                    onFocus={() => handleActivate(cert)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TechInspectPanel certification={activeCertification} />
      </div>
    </section>
  );
}
