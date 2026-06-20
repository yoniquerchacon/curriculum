import './Hero.css';

/** Apertura — declaración directa, sin bloques corporativos. */
export function Hero({ profile }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="heroTitle">
        {profile.headline}
      </h1>
      <p className="heroSubline">{profile.subline}</p>

      <div className="heroMeta">
        <span>{profile.fullName}</span>
        <span className="metaSep">·</span>
        <span>{profile.location}</span>
        <span className="metaSep">·</span>
        <a className="metaLink" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  );
}
