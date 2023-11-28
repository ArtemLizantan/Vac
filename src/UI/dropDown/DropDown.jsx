import React, { useState } from "react";

import styles from "./index.module.scss";

const DropDown = ({ title, width, children, id }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ maxWidth: width }}
      onClick={() => setActive(true)}
      className={styles.dropdown}
      id={id}
    >
      <div className={`${styles.body} ${active ? styles.active : ""}`}>
        <div className={styles.top}>
          <h4 className={styles.title}>{title}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
          >
            <path
              d="M17 1L9 9L1 1"
              stroke="#41456B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={`${styles.bottom} ${active ? styles.active : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
