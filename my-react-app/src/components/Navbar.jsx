import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* 左側 LOGO 與文字 */}
      <div className={styles.container}>
        <a href="#navbar">
          <div className={styles.logoContainer}>
            {/* <img src="/blacklogo.svg" alt="logo" className={styles.logoImage} /> */}
            <span className={styles.logoText}>
              YenTing's
              <br />
              <span className={styles.logoSub}>Portfolio</span>
            </span>
          </div>
        </a>

        {/* 中間導覽列 */}
        <div className={styles.navLinks}>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#career">Career</a>
          <a href="#projects">Projects</a>
        </div>

        {/* 右側社群圖示 */}
        <div className={styles.socialIcons}>
          <a
            href="www.linkedin.com/in/yen-ting-tung-65225a329"
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
    </nav>
  );
};

export default Navbar;
