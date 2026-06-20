import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Education.css';

export function Education({ education }) {
  return (
    <section id="formacion" className="education" aria-labelledby="edu-heading">
      <SectionHeading title="Formación" />

      <ul className="eduList">
        {education.map((edu) => (
          <li key={edu.institution} className="eduItem">
            <span className="eduPeriod">{edu.period}</span>
            <div>
              <p className="eduDegree">{edu.degree}</p>
              <p className="eduInstitution">{edu.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
