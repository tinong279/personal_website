import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>YenTing</p>
      <p>謝謝您觀看我的網站。</p>
      <p>如果你想進一步交流，歡迎透過以下方式聯絡我！</p>

      <p>期待未來有機會與您合作</p>
    </footer>
  );
};

export default Footer;
