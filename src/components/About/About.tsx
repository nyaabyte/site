import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>
          What is <span className={styles.highlight}>NyaByte</span>?
        </h2>
        <div className={styles.content}>
          <p>
            We are a group of silly people who like making random coding
            projects for fun. We started making these silly things in April of
            2025, and met through botting a site called "Youtube Draws".
          </p>
          <p>
            So far, we have made this website together and are currently working
            on creating a new social media from scratch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
