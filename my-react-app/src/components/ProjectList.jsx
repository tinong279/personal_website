import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ 新版用 modules
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProjectList.module.css";

const projects = [
  {
    date: "May",
    year: "2025",
    title: "個人網站",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/A1.jpg", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  {
    date: "Mar",
    year: "2025",
    title: "潛水網站",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/墾丁.jpg", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  {
    date: "Apr",
    year: "2024",
    title: "朝聖之路",
    description:
      "Ithome Blog Upload On Readme is a GitHub Action that automatically uploads the latest blog post from Ithome to the README.md file of a GitHub repository. It uses Node.js and Puppeteer to crawl the Ithome website and retrieve the latest blog post. The action is triggered by a...",
    image: "/潮境公園.webp", // 實際圖片路徑
    link: "https://github.com/your-project",
  },
  // 可再加更多 project 資料
];

const ProjectList = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

 

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.leftPanel}>
          <h2 className={styles.title}>Project List</h2>
          <p className={styles.subtitle}>
            Here are some of the projects I have worked on. I always try to make
            side projects to learn new things. I hope you like them.
          </p>
          <div className={styles.ton}>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <Swiper
           
            modules={[Navigation]}
            // navigation={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            // pagination={{ clickable: true }}
          >
            
            {projects.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.slideContent}>
                  <img src={item.image} alt={`Slide ${i + 1}`} />
                  <div>
                    <p>
                      {item.year}/{item.date}
                    </p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
