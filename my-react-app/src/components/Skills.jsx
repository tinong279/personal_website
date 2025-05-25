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
    <div className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.subtitle}>
        I have experience in the following technologies.
      </p>
      <div className={styles.grid}>
        <SkillSection
          icon={<FaReact className={styles.icon} />}
          title="Frontend"
          skills={[
            "React",
            "React Native",
            "Next.js",
            "TypeScript",
            "Styled Components",
            "Tailwind CSS",
            "Redux/Zustand",
            "Jest Unit Test",
            "React Query",
            "i18n / react-intl",
            "WebRTC/WebSocket",
            "Dexie.js",
            "Three.js",
          ]}
        />
        <SkillSection
          icon={<FaNodeJs className={styles.icon} />}
          title="Backend"
          skills={[
            "Node.js",
            "Express",
            "PHP",
            "RESTful API",
            "GCP Compute Engine",
            "JWT/Bcrypt",
            "Docker",
            "Github Action CI/CD",
            "Crawling",
            "Flask",
            "Line Bot",
          ]}
        />
        <SkillSection
          icon={<FaDatabase className={styles.icon} />}
          title="DataBase & Tools"
          skills={[
            "Git",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Postgresql",
            "LightHouse",
            "Vercel / Netlify / Github pages",
            "Figma",
            "Github",
            "Asana",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
