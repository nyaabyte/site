import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>
          What is <span className={styles.highlight}>NyaByte</span>?
        </h2>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            earum, officiis natus error enim minus fugiat, quaerat, voluptates
            perferendis sed perspiciatis tempore officia? Hic quaerat dolorum
            rerum distinctio nulla doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            itaque. Exercitationem facere, voluptas quae explicabo eaque
            doloremque recusandae quidem molestiae iste, veritatis nobis hic
            earum tempora reiciendis, alias nostrum pariatur!
          </p>
          {/* Add more details, maybe images or icons */}
        </div>
      </div>
    </section>
  );
};

export default About;
