import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
	const githubLink = "https://github.com/nyaabyte";
	const emailAddress = "contact@nyabyte.dev";
	const donateLink = "https://meowguardon.top";
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

					<a
						href={`mailto:${emailAddress}`}
						className={`${styles.contactCard} ${styles.email}`}
					>
						<div className={styles.iconPlaceholder}>✉️</div>
						<h3>Send us an Email</h3>
						<p> Contact us quickly!</p>
						<span className={styles.cta}>{emailAddress} &rarr;</span>
					</a>
				</div>

				<br />

				<div className={styles.contactMethods}>
					<a
						href={donateLink}
						target="_blank"
						rel="noopener noreferrer"
						className={`${styles.contactCard} ${styles.github}`}
					>
						<div className={styles.iconPlaceholder}>💸</div>
						<h3>Help us make more</h3>
						<p>Donate and help us pay for bigger projects.</p>
						<span className={styles.cta}>Open our Kofi &rarr;</span>
					</a>

					{/* <a
						href={`mailto:${emailAddress}`}
						className={`${styles.contactCard} ${styles.email}`}
					>
						<div className={styles.iconPlaceholder}>✉️</div>
						<h3>Send us an Email</h3>
						<p> Contact us quickly!</p>
						<span className={styles.cta}>{emailAddress} &rarr;</span>
					</a> */}
				</div>
			</div>

			<div className={styles.backgroundShapes}>
				<div className={`${styles.shape} ${styles.shape1}`}></div>
				<div className={`${styles.shape} ${styles.shape2}`}></div>
				<div className={`${styles.shape} ${styles.shape3}`}></div>
			</div>
		</section>
	);
};

export default Contact;
