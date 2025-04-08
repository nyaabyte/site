import React from 'react';
import styles from './Contact.module.css';
// Optional: Import icons if you have an icon library installed
// import { FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  // Replace with your actual links
  const githubLink = 'https://github.com/nyabyte'; // Example org link
  const emailAddress = 'contact@nyabyte.dev'; // Example email

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>
          <span className={styles.highlight}>Contacts</span>
        </h2>
        <p className={styles.intro}>Let's yap, contact us here :3</p>

        <div className={styles.contactMethods}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactCard} ${styles.github}`}
          >
            <div className={styles.iconPlaceholder}>💻</div>
            <h3>Check our GitHub</h3>
            <p>Come look at our cool shit!</p>
            <span className={styles.cta}>View Organization &rarr;</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            className={`${styles.contactCard} ${styles.email}`}
          >
            {/* Optional Icon: <FaEnvelope size={40} /> */}
            <div className={styles.iconPlaceholder}>✉️</div> {/* Placeholder */}
            <h3>Send us an Email</h3>
            <p> Contact us quickly!</p>
            <span className={styles.cta}>{emailAddress} &rarr;</span>
          </a>
        </div>
      </div>
      {/* Add a cool background effect element */}
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  );
};

export default Contact;
