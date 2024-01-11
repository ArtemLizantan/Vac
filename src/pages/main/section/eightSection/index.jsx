import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LinkLiner from "../../../../UI/links/linkLiner/LinkLiner";
import Article from "../../../../components/article/Article";

import "swiper/scss";
import "swiper/scss/navigation";
import "./eightSection.scss";

import styles from "./index.module.scss";

import article1 from "../../../../img/articles/article1.jpg";
import article2 from "../../../../img/articles/article2.jpg";
import article3 from "../../../../img/articles/article3.jpg";

const EightSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos="zoom-out-right"
              data-aos-anchor-placement="center-center"
              className={styles.title}
            >
              Interesting to read
            </div>
            <div
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos="zoom-out-left"
              data-aos-anchor-placement="center-center"
              className={styles.btn}
            >
              <LinkLiner to={"/blog"} wx={180} ws={"auto"}>
                All articles
              </LinkLiner>
            </div>
          </div>

          <Swiper
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            className={styles.slider + " eightSlider"}
            spaceBetween={20}
            slidesPerView={"auto"}
            modules={[Navigation]}
            navigation
            autoHeight
          >
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog"}
                img={article1}
                title={
                  "How to save on buying a car?Why is it better to buy from us"
                }
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog"}
                img={article2}
                title={"How fast can you order a car in Canada?"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog"}
                img={article3}
                title={
                  "How to save on buying a car?Why is it better to buy from us"
                }
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog"}
                img={article1}
                title={
                  "How to save on buying a car?Why is it better to buy from us"
                }
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog"}
                img={article1}
                title={
                  "How to save on buying a car?Why is it better to buy from us"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EightSection;
