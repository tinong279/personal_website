import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: "url('/A1.jpg')" }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>CHARON YU</h1>
        <h2 className={styles.subtitle}>RESUME</h2>
        <p className={styles.description}>
          React Developer / Full Stack Engineer
        </p>
        <a href="#about" className={styles.button}>
          Know More About Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
