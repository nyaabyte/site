import styles from './Projects.module.css';
import { sampleProjects, Project } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>
          Our <span className={styles.highlight}>Creations</span>
        </h2>
        <p className={styles.intro}>Cool shit by cool guys</p>
        <div className={styles.grid}>
          {sampleProjects.map((project: Project) => (
            <div key={project.id} className={styles.card}>
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className={styles.cardImage}
                  loading="lazy"
                />
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      Repo
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkButton} ${styles.liveLink}`}
                    >
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
