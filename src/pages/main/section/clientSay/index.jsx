import React from "react";

import LinkSolid from "../../../../UI/links/linkSolid/LinkSolid";
import Metrics from "../../../../components/metrics/Metrics";

import styles from "./index.module.scss";

const ClientSay = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <div
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-center"
            className={styles.wrapper}
          >
            <div className={styles.title}>Happy customers</div>
            <div className={styles.descr}>
              Since 2017, we have helped thousands of Canadians get their dream
              vehicles from the comfort of their homes.
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out-right"
            data-aos-anchor-placement="top-center"
            className={styles.wrapperBtn}
          >
            <div className={styles.subtitle}>
              What are you waiting? <br /> Get started right now!
            </div>
            <LinkSolid to={"/quiz"} wx={200} ws={"auto"}>
              Request a car
            </LinkSolid>
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos="zoom-out-left"
            data-aos-anchor-placement="center-center"
            className={styles.wrapperCard}
          >
            <Metrics text={"7,988+"} descr={"Sold Cars"} />
            <Metrics text={"16,974+"} descr={"Vehicles To Choose From"} />
            <Metrics text={"123"} descr={"Experts Across Canada"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
