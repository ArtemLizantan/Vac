import React from "react";

import styles from "./index.module.scss";

import Honda from "../../img/Honda.png";
import Lexus from "../../img/Lexus.png";

const HowToWork = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div
          data-aos-once="true"
          data-aos-duration="800"
          data-aos="zoom-out-down"
          data-aos-anchor-placement="top-center"
          className={styles.card}
        >
          <div className={styles.cardTitle}>How does it work?</div>
          <div className={styles.cardSubTitle}>
            From your Phone to your Home
          </div>
          <div className={styles.cardDescr}>
            We make it easy for you to buy your dream car from your phone
            without ever having to step into a dealership! We deliver your
            vehicle to your home for you to test drive before you sign anything.
          </div>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos-duration="800"
        data-aos="zoom-out-right"
        data-aos-anchor-placement="top-center"
        className={styles.honda}
      >
        <img src={Honda} alt="honda" loading="lazy" />
      </div>
      <div
        data-aos-once="true"
        data-aos-duration="800"
        data-aos="zoom-out-left"
        data-aos-anchor-placement="top-center"
        className={styles.lexus}
      >
        <img src={Lexus} alt="lexus" loading="lazy" />
      </div>
    </div>
  );
};

export default HowToWork;
