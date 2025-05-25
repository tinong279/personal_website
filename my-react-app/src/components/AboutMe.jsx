import React from "react";
import styles from "./AboutMe.module.css";
import profileImage from "/A1.jpg"; // ✅ 請依你的實際圖片路徑調整

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <img src={profileImage} alt="Profile" className={styles.profileImage} />
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        I am a React frontend engineer with a passion for continuous learning
        and exploring new technologies. I enjoy applying this knowledge to
        create high-quality websites and mobile applications, always striving to
        provide a better user experience. The sense of accomplishment I feel
        upon completing a project is immense, and I constantly seek ways to
        refine and elevate my skills. I look forward to collaborating with teams
        that share a common goal, aiming to develop astonishing applications
        together. Thank you for reading.
      </p>
    </div>
  );
};

export default AboutMe;
