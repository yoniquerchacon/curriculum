import { IconExternal } from '../Icons/Icons';
import './CertificationCard.css';

const PLACEHOLDER = 'URL_PDF_AQUÍ';

/** Credencial — lista con borde fino, sin card box. */
export function CertificationCard({
  name,
  issuer,
  technicalFocus,
  verifyUrl,
  documentUrl,
  code,
  version,
  variant = 'training',
}) {
  const hasDocument = documentUrl && documentUrl !== PLACEHOLDER;
  const isOfficial = variant === 'official';

  return (
    <article
      className={`credential ${isOfficial ? 'credentialOfficial' : ''}`}
      aria-label={`${name} — ${issuer}`}
      tabIndex={0}
    >
      <span
        className={`credentialIssuerMark ${
          isOfficial ? 'credentialIssuerMarkRedHat' : 'credentialIssuerMarkUdemy'
        }`}
        aria-hidden="true"
      >
        <span className="credentialIssuerSymbol" />
        {isOfficial ? 'Red Hat' : 'Udemy'}
      </span>

      <header className="credentialHeader">
        {isOfficial && code && <span className="credentialCode">{code}</span>}
        <h4 className="credentialTitle">{name}</h4>
      </header>

      <span className="credentialIssuer">
        {issuer}
        {version && ` · v${version}`}
      </span>

      <p className="credentialFocus">{technicalFocus}</p>

      <footer className="credentialActions">
        <a
          className="credentialLink credentialLinkPrimary"
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verificar
          <IconExternal className="linkIcon" />
        </a>
        {hasDocument && (
          <a
            className="credentialLink"
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
            <IconExternal className="linkIcon" />
          </a>
        )}
      </footer>
    </article>
  );
}
