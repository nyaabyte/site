import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css";
// Import the logo image
import logoSrc from "/src/assets/logo.png"; // Adjust path if necessary

const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
              "We're gay.",
              2000,
              "We're goobers.",
              2000,
              "We're goofy.",
              2000,
              "We make silly things.",
              2000,
              "We do silly things.",
              2000,
              "Meow",
              2000,
              '"Cat"',
              2000,
              "Trans rights",
              2000,
              "Where is 🏳️‍⚧️",
              2000,
              "And why are all the cute girls from there?",
              2000,
              "Why are you still reading this?",
              2000,
              "Go check out the rest of the site.",
              2000,
              "Go click on Lyca's username :3.",
              2000,
              "And now it's going to restart",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontFamily: "var(--font-code)",
            }}
          />
        </div>
        <p className={styles.subtitle}>Just some silly people</p>
        <button onClick={handleScrollToProjects} className={styles.ctaButton}>
          Explore Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
