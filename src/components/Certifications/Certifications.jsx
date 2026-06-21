import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CertificationCard } from './CertificationCard';
import './Certifications.css';

export function Certifications({ official, training }) {
  return (
    <section id="certificaciones" className="certifications" aria-labelledby="certs-heading">
      <SectionHeading title="Certificaciones" />

      <div className="blocks">
        <div className="block">
          <h3 className="blockLabel">Oficiales — Red Hat</h3>
          <ul className="officialList" aria-label="Certificaciones Red Hat">
            {official.map((cert) => (
              <li key={cert.id}>
                <CertificationCard {...cert} variant="official" />
              </li>
            ))}
          </ul>
        </div>

        <div className="block">
          <h3 className="blockLabel">Formación continua</h3>
          <ul className="trainingList" aria-label="Cursos Udemy">
            {training.map((cert) => (
              <li key={cert.id}>
                <CertificationCard {...cert} variant="training" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
