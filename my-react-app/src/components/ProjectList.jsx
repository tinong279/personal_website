import React, { useState } from "react";
import styles from "./ProjectList.module.css";

const projects = [
  {
    date: "Apr 14",
    year: "2024",
    title: "ITHOME BLOG UPLOAD README GITHUB ACTION",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/assets/github-action.png", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  {
    date: "Apr 14",
    year: "2024",
    title: "a2",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/assets/github-action.png", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  {
    date: "Apr 14",
    year: "2024",
    title: "b3",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/assets/github-action.png", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  // 可再加更多 project 資料
];

const ProjectList = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.but}>
          <h2 className={styles.title}>Project List</h2>
          <p className={styles.subtitle}>
            Here are some of the projects I have worked on. I always try to make
            side projects to learn new things. I hope you like them.
          </p>
          <button className={styles.arrow} onClick={prev}>
            ◀
          </button>
          <button className={styles.arrow} onClick={next}>
            ▶
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.date}>
            <span>{project.date}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <div className={styles.content}>
            <img src={project.image} alt="project" className={styles.image} />
            <div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a
                href={project.link}
                className={styles.button}
                target="_blank"
                rel="noreferrer"
              >
                GO TO PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
