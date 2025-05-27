import React from "react";
import styles from "./AboutMe.module.css";
import profileImage from "/A2.jpg";

const AboutMe = () => {
  return (
    <div className={styles.container} id="about">
      <img src={profileImage} alt="Profile" className={styles.profileImage} />
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        我是一名前端工程師，目前正在學習更多前端技術。
        我熱愛學習與挑戰自己，在編碼的過程中時常需要學習新事物與技術，透過這些新技術
        完成一個專案後，會使我很有成就感。
        每一次的挑戰都是讓我前進的力量，那我也期待可以與更厲害的團隊合作，
        創造和完成更多有意義的項目。感謝您的閱讀。
      </p>
    </div>
  );
};

export default AboutMe;
