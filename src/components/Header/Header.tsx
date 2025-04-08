import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Nya<span className={styles.logoByte}>Byte</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
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
