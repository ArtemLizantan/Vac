import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

const DropDown = ({
  title,
  width,
  children,
  id,
  gap,
  position,
  onClick,
  top,
  left,
  borderLeft,
  borderRight,
  widthPopup,
  borderBottom,
}) => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropDown = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div
      ref={dropdownRef}
      style={{ maxWidth: width }}
      className={styles.dropdown}
      id={id}
    >
      <div className={`${styles.body} ${active ? styles.active : ""}`}>
        <div onClick={handleDropDown} className={styles.top}>
          <h4 className={styles.title}>{title}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            style={{
              transform: active ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
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
        <div
          style={{
            gap: gap,
            position: position,
            top: top,
            left: left,
            width: widthPopup,
            background: "#ffff",
            zIndex: 1000,
            borderLeft: borderLeft,
            borderRight: borderRight,
            borderBottom: borderBottom,
          }}
          className={`${styles.bottom} ${active ? styles.active : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
