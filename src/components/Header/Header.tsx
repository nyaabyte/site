import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logoSrc from "/src/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down from the top of the page
    if (window.scrollY > 0) {
      setScrolled(false); // If scrolled, show the header
    } else {
      setScrolled(true); // If at the top, hide the header
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      // className={styles.header}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <a href="#top">
          <div className={styles.logo}>
            <img src={logoSrc} alt="NyaByte Logo" />
          </div>
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#members">Members</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
