import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.container}> */}
      <div className={styles.tainer}>
        <a href="#navbar">
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>
              YenTing's
              <br />
              <span className={styles.logoSub}>Portfolio</span>
            </span>
          </div>
        </a>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.navLinks}>
          <a href="#about" onClick={toggleMenu}>
            About Me
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#career" onClick={toggleMenu}>
            Career
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </div>
      </div>
      <div className={`${styles.navIcons} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/yen-ting-tung-65225a329"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tinong279"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:tinong279@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      {/* <div className={styles.spacer}></div> */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
