import React, { useState } from "react";
import LinkSolidWhite from "../../../../UI/links/linkSolidWhite/LinkSolidWhite";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "./firstSection.scss";

import styles from "./index.module.scss";

import Dodge from "../../img/Dodge.png";
import Ford from "../../img/Ford.png";
import Nissan from "../../img/Nissan.png";
import Ram from "../../img/Ram.png";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const cars = ["suv", "car", "truck", "van"];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div
            data-aos-once="true"
            data-aos-duration="800"
            data-aos="zoom-out-right"
            className={styles.title}
          >
            The easiest way to buy a car in Canada
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out-right"
            className={styles.btn}
          >
            <LinkSolidWhite to={"/quiz"} wx={200} ws={214}>
              Request a {cars[slide]}
            </LinkSolidWhite>
          </div>

          <Swiper
            data-aos-once="true"
            data-aos-duration="800"
            data-aos="zoom-out-left"
            slidesPerView={"auto"}
            centeredSlides
            spaceBetween={60}
            modules={[Navigation]}
            navigation
            className={styles.slider + " firstSlider"}
            onSlideChange={(swiper) => setSlide(swiper.activeIndex)}
          >
            <SwiperSlide className={styles.slide}>
              <img src={Nissan} alt="auto" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Ford} alt="auto" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Ram} alt="auto" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Dodge} alt="auto" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
