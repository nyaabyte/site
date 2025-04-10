import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css";
import { Link } from "react-scroll";
import { typingData } from "../../data/typing.ts";
// Import the logo image
import logoSrc from "/src/assets/logo.png"; // Adjust path if necessary

const Hero: React.FC = () => {
  // const handleScrollToProjects = () => {
  //   const projectsSection = document.getElementById("projects");
  //   if (projectsSection) {
  //     projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  //   } else {
  //     console.warn("Element with id 'projects' not found.");
  //   }1
  // };

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to
          <img src={logoSrc} alt="NyaByte Logo" className={styles.heroLogo} />
        </h1>
        <div className={styles.typeAnimationWrapper}>
          <TypeAnimation
            sequence={typingData}
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
        <p className={styles.subtitle}>
          We are just some silly people doing silly things
        </p>
        <Link to="projects" smooth={true} duration={500} offset={-60}>
          <button className={styles.ctaButton}>Explore Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
