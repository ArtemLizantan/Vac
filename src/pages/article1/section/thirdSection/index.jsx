import React from "react";

import LinkLiner from "../../../../UI/links/linkLiner/LinkLiner";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Article from "../../../../components/article/Article";

import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./index.module.scss";
import "./thirdSection.scss";

import art3 from "../../../../img/articles/article3.jpg";
import art5 from "../../../../img/articles/article5.jpg";
import art6 from "../../../../img/articles/article6.jpg";
import art8 from "../../../../img/articles/article8.jpg";

const ThirdSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.title}>You might like it</div>
          <div className={styles.btn}>
            <LinkLiner to={"/blog"} wx={180} ws={"auto"}>
              all article
            </LinkLiner>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            className={styles.slider + " thirdSection"}
            breakpoints={{
              1920: {
                slidesPerView: 3, // Show 2 slides on screens equal to or larger than 768px
              },
              768: {
                slidesPerView: 2, // Show 2 slides on screens equal to or larger than 768px
              },
              567: {
                slidesPerView: 1, // Show 1 slide on screens equal to or larger than 567px
              },
            }}
          >
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog/2"}
                img={art5}
                title={
                  "How to save on buying a car? Why is it better to buy from us"
                }
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog/2"}
                img={art3}
                title={"How fast can you order a car in Canada?"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog/2"}
                img={art6}
                title={
                  "How to save on buying a car? Why is it better to buy from us"
                }
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={"/blog/2"}
                img={art8}
                title={
                  "How to save on buying a car? Why is it better to buy from us"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
