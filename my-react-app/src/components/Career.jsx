import React from "react";
import styles from "./Career.module.css";
import { FaCircle } from "react-icons/fa";

const Job = ({ date, company, title, tags, descriptions, logo }) => (
  <div className={styles.jobBlock}>
    <div className={styles.date}>{date}</div>
    <div className={styles.logoAndTitle}>
      <img src={logo} alt={company} className={styles.logo} />
      <h3 className={styles.jobTitle}>
        {company}–{title}
      </h3>
    </div>
    <div className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
    <ul className={styles.description}>
      {descriptions.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
  </div>
);

const Career = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Career</h2>
      <div className={styles.timeline}>
        <div className={styles.line}></div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="Feb 2024 ~ Present"
            company="MetaCRM"
            title="Full Stack Engineer"
            logo="/A1.jpg" // 替換為實際圖片路徑
            tags={[
              "react.js",
              "redux",
              "storybook",
              "vscode Extension",
              "material-ui",
              "react-intl",
              "echarts",
              "node.js",
              "mongodb",
              "git",
            ]}
            descriptions={[
              "Responsible for developing and maintaining the company's web3 CRM system.",
              "Developed and maintained the company's CRM system using React, Redux, and related tools.",
              "Developed custom Storybook components for the company's UI design based on Material-UI (MUI).",
              "Created Bash scripts to automate project setup for QA testing.",
              "Developed a VS Code Extension to help developers quickly insert react-intl snippets into their code.",
              "Occasionally involved in backend development and assisting in troubleshooting backend issues.",
              "Regularly participate in code reviews with colleagues, collaborating to discuss best practices and optimize code quality.",
            ]}
          />
        </div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="Feb 2023 ~ Jan 2024"
            company="FANXI"
            title="Full Stack Engineer"
            logo="/A1.jpg"
            tags={[
              "reactjs",
              "nextjs",
              "redux/zustand",
              "tailwind css",
              "typescript",
              "web3",
              "websocket",
              "webRTC",
              "dexie.js",
              "lighthouse",
              "react profiler",
              "coverage",
              "git",
            ]}
            descriptions={[
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
            ]}
          />
        </div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="Feb 2023 ~ Jan 2024"
            company="FANXI"
            title="Full Stack Engineer"
            logo="/A1.jpg"
            tags={[
              "reactjs",
              "nextjs",
              "redux/zustand",
              "tailwind css",
              "typescript",
              "web3",
              "websocket",
              "webRTC",
              "dexie.js",
              "lighthouse",
              "react profiler",
              "coverage",
              "git",
            ]}
            descriptions={[
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
              "In charge of the company's product web design and feature development.",
              "Using typeScript to develop and maintain the company's website, ensuring high-quality code and user experience.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
