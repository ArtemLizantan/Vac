import React from "react";

import LinkSolid from "../../../../UI/links/linkSolid/LinkSolid";

import styles from "./index.module.scss";

import Corola from "../../img/Corola.png";
import Honda from "../../img/HondaLeft.png";

const Customers = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <div
              data-aos-once="true"
              data-aos-duration="800"
              data-aos="zoom-out-right"
              data-aos-anchor-placement="center-center"
              className={styles.honda}
            >
              <img src={Honda} alt="honda" loading="lazy" />
            </div>
            <div
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos="zoom-out-left"
              data-aos-anchor-placement="center-center"
              className={styles.toyota}
            >
              <img src={Corola} alt="toyota" loading="lazy" />
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out-left"
            data-aos-anchor-placement="center-center"
            className={styles.container}
          >
            <div className={styles.title}>
              Сhoose your dream vehicle in our catalog
            </div>
            <div className={styles.containerWrapper}>
              <div className={styles.subtitle}>
                In our catalogue there are many models of vehicles. Choose your
                car to your liking.
              </div>
              <LinkSolid to={"/catalog"} wx={190} ws={"auto"}>
                Inventory
              </LinkSolid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
