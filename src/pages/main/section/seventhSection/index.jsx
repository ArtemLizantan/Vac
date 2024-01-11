import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "./seventhSection.scss";

import styles from "./index.module.scss";

import family from "../../img/family.jpg";

const SeventhSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos="zoom-out-right"
          data-aos-anchor-placement="center-center"
          className={styles.title}
        >
          What our client say about us!
        </div>
        <div className={styles.wrapper}>
          <Swiper
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out"
            data-aos-anchor-placement="center-center"
            className={styles.slider + " seventhSwiper"}
            modules={[Navigation]}
            navigation
            loop
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.img}>
                <img src={family} alt="family" loading="lazy" />
              </div>
              <div className={styles.slideWrapper}>
                <div className={styles.name}>Laura Chaisson</div>
                <div className={styles.text}>
                  In irure et ipsum eiusmod adipisicing id elit cillum proident.
                  Adipisicing ullamco nisi veniam occaecat id excepteur ad non.
                  Sunt occaecat elit ullamco commodo exercitation. Anim mollit
                  irure Lorem proident veniam excepteur non irure Lorem. Lorem
                  esse sint in nisi id esse.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.img}>
                <img src={family} alt="family" loading="lazy" />
              </div>
              <div className={styles.slideWrapper}>
                <div className={styles.name}>Laura Chaisson</div>
                <div className={styles.text}>
                  In irure et ipsum eiusmod adipisicing id elit cillum proident.
                  Adipisicing ullamco nisi veniam occaecat id excepteur ad non.
                  Sunt occaecat elit ullamco commodo exercitation. Anim mollit
                  irure Lorem proident veniam excepteur non irure Lorem. Lorem
                  esse sint in nisi id esse.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
