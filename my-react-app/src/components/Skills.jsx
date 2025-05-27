import React from "react";
import styles from "./Skills.module.css";
import { FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";

const SkillSection = ({ icon, title, skills }) => (
  <div className={styles.skillBlock}>
    <div className={styles.iconTitle}>
      {icon}
      <h3>{title}</h3>
    </div>
    <div className={styles.tags}>
      {skills.map((skill) => (
        <span key={skill} className={styles.tag}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.subtitle}>以下是我學習並使用過的技術。</p>
      <div className={styles.grid}>
        <SkillSection
          icon={<FaReact className={styles.icon} />}
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "jQuery",
            "React",
            "Bootstrap",
          ]}
        />
        <SkillSection
          icon={<FaNodeJs className={styles.icon} />}
          title="Backend"
          skills={["Node.js", "Express", "PHP", "RESTful API"]}
        />
        <SkillSection
          icon={<FaDatabase className={styles.icon} />}
          title="DataBase & Tools"
          skills={[
            "Git",
            "Neon",
            "MySQL",
            "Figma",
            "Github",
            "Postman",
            "VSCode",
            "Render",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
