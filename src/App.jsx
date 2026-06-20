import { Layout } from './components/Layout/Layout';
import { Hero } from './components/Hero/Hero';
import { Profile } from './components/Profile/Profile';
import { Experience } from './components/Experience/Experience';
import { TechStack } from './components/TechStack/TechStack';
import { Certifications } from './components/Certifications/Certifications';
import { Education } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './hooks/useTheme';
import {
  profile,
  navigation,
  professionalSummary,
  experience,
  techStack,
} from './data/profile';
import { education, officialCertifications, continuousTraining } from './data/certifications';

/**
 * Portafolio profesional — Single Page Application.
 * Composición modular de secciones con navegación por anclas.
 */
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout
      navItems={navigation}
      profile={profile}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      <Hero profile={profile} />
      <Profile summary={professionalSummary} />
      <Experience items={experience} />
      <TechStack categories={techStack} />
      <Certifications official={officialCertifications} training={continuousTraining} />
      <Education education={education} />
      <Footer profile={profile} />
    </Layout>
  );
}

export default App;
