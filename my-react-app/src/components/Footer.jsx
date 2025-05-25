import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Charonyu</p>
      <p>Thank you for visiting my website.</p>
      <p>I hope you found it enjoyable and informative.</p>
      <p>
        If you have any questions or suggestions, please feel free to reach
        <br />
        out to me.
      </p>
      <p>
        I am always eager to hear from you. You can contact me via email,
        <br />
        or connect with me on LinkedIn or GitHub.
      </p>
      <p>Looking forward to connecting with you! 😁</p>
    </footer>
  );
};

export default Footer;
