import React from "react";
import styles from "./Career.module.css";
import { FaCircle } from "react-icons/fa";

const Job = ({ date, company, title, tags, descriptions, logo }) => (
  <div className={styles.jobBlock}>
    <div className={styles.date}>{date}</div>
    <div className={styles.logoAndTitle}>
      <img src={logo} alt={company} className={styles.logo} />
      <h3 className={styles.jobTitle}>
        {company}
        {title}
      </h3>
    </div>
    <div className={styles.tags}></div>
    <ul className={styles.description}>
      {descriptions.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
  </div>
);

const Career = () => {
  return (
    <div className={styles.container} id="career">
      <h2 className={styles.title}>Career</h2>
      <div className={styles.timeline}>
        <div className={styles.line}></div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="2024/12 ~ 2025/05"
            company="資策會前端工程師養成班"
            logo="/A1.jpg"
            descriptions={[
              "HTML、CSS 與 JavaScript 的基礎語法與應用",
              "使用 React 框架進行元件化開發",
              "Node.js後端連接資料庫的處理",
              "Git 版本控制與 GitHub 協作流程",
              "使用 API 串接資料、處理非同步請求",
              "基本的 RWD（響應式網頁設計）與 Flexbox、Grid 排版技巧",
              "個人專題-潛水網站",
              "團體協作專題-朝聖之路",
            ]}
          />
        </div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="2019/8 ~ 2024/12"
            company="中國信託台灣人壽"
            title="保險業務"
            logo="/A1.jpg"
            descriptions={[
              "在財務規劃業務的工作中，我完成了近百位的財務規畫實務",
              "透過這些實務經驗學習到如何解決與理解別人的問題，消化與吸收後才給予對方一個符合對方的解決方案",
              "用結構化邏輯處理複雜問題、並以使用者為中心提出具體回應",
            ]}
          />
        </div>
        <div className={styles.timelineItem}>
          <FaCircle className={styles.bullet} />
          <Job
            date="2017/11 ~ 2019/8"
            company="十藝設計"
            title="室內設計師助理"
            logo="/A1.jpg"
            descriptions={[
              "協助製作設計提案簡報、平面圖、立面圖與3D 模擬圖",
              "在案場裡也學習到如何與人溝通協調問題，讓工程安排順利。",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
