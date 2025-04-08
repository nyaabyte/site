import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Members from './components/Members/Members';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Members />
        <Contact />
      </main>
    </div>
  );
};

export default App;
