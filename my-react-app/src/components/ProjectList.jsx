import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProjectList.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    date: "May",
    year: "2025",
    title: "朝聖之路",
    description:
      "朝聖之路是一個團體協作專題，前端是用React，後端用Node.js連結Neon資料庫來完成",
    image: "/A3.png",
    link: "https://github.com/ScottLinxplore/Camino_team1.git",
  },
  {
    date: "Mar",
    year: "2025",
    title: "潛水網站",
    description:
      "這是一個給有潛水需求的客戶，可以利用此網站找到可以潛水的景點，也包含各項潛水用品的購買",
    image: "/A5.png",
    link: "https://github.com/tinong279/AAA.git",
  },
  {
    date: "Apr",
    year: "2025",
    title: "圈圈叉叉遊戲實作",
    description: "這是利用React製作的一個小遊戲，下方會即時記錄遊戲歷程",
    image: "/A4.png",
    link: "https://github.com/tinong279/tic-tac-toe.git",
  },
  // 可再加更多 project 資料
];

const ProjectList = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const swiperRef = useRef(null);
  return (
    <div className={styles.container} id="projects">
      <div className={styles.slider}>
        <div className={styles.leftPanel}>
          <h2 className={styles.title}>Project List</h2>
          <p className={styles.subtitle}>
            以下是我目前的實作專案，並持續透過專案開發深化各項技能。
          </p>
          <div className={styles.ton}>
            <button
              className={styles.arrow}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className={styles.arrow}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <Swiper
            modules={[Navigation]}
            // navigation={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={false}
            // pagination={{ clickable: true }}
          >
            {projects.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.slideContent}>
                  <img src={item.image} alt={`Slide ${i + 1}`} />
                  <div className={styles.card}>
                    <p>
                      {item.year}/{item.date}
                    </p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btn}
                    >
                      查看專題
                    </a>
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
