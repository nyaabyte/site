import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
// Import the logo image
import logoSrc from '/src/assets/logo.png'; // Adjust path if necessary

const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Element with id 'projects' not found.");
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to
          <img src={logoSrc} alt="NyaByte Logo" className={styles.heroLogo} />
        </h1>
        <div className={styles.typeAnimationWrapper}>
          <TypeAnimation
            sequence={[
              "We're silly.",
              2000,
              "We're something else.",
              2000,
              "We're another thing.",
              2000,
              "We're last thing.",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: '2em',
              display: 'inline-block',
              fontFamily: 'var(--font-code)',
            }}
          />
        </div>
        <p className={styles.subtitle}>Just some silly guys</p>
        <button onClick={handleScrollToProjects} className={styles.ctaButton}>
          Explore Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
