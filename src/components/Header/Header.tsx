import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logoSrc from "/src/assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
	const [scrolled, setScrolled] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolled(false);
		} else {
			setScrolled(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// handleScroll();

	return (
		<header
			// className={styles.header}
			className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
		>
			<div className={styles.container}>
				<Link to="top" smooth={true} duration={500} className={styles.link}>
					<div className={styles.logo}>
						<img src={logoSrc} alt="NyaByte Logo" />
					</div>
				</Link>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Link
								to="about"
								smooth={true}
								duration={500}
								offset={-60}
								className={styles.link}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="projects"
								smooth={true}
								duration={500}
								offset={-60}
								className={styles.link}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="members"
								smooth={true}
								duration={500}
								offset={-60}
								className={styles.link}
							>
								Members
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								offset={-60}
								className={styles.link}
							>
								Contacts
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
