import React, { useState, useRef, useEffect } from "react";
import { useFilters } from "../../../../context/FilterContenxt";
import styles from "../../../../UI/dropDown/index.module.scss";
import { recomendations } from "./../../../../data/recomendation";

export const FilterByPriority = () => {
  const [selectedValue, setSelectedValue] = useState(recomendations[0].name);
  const [dropDownTitle, setDropDownTitle] = useState("Recommendations");
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);
  const { setFilteredPriority } = useFilters();

  const handleItemButtonClick = (value) => {
    setSelectedValue(value);
    setDropDownTitle(value);
    setActive(false);
  };

  const filteredSelect = recomendations.filter(
    ({ name }) => name !== selectedValue
  );
  const handleDropDown = () => {
    setActive((prevActive) => !prevActive);
  };

  const handleSort = (id) => {
    setFilteredPriority(id);
  };

  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter__top-right">
      <span>Sorted by </span>

      <div
        ref={dropdownRef}
        style={{ maxWidth: "237" }}
        className={styles.dropdown}
      >
        <div className={`${styles.body} ${active ? styles.active : ""}`}>
          <div onClick={handleDropDown} className={styles.top}>
            <h4 className={styles.title}>{dropDownTitle}</h4>
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
              position: "absolute",
              top: "100%",
              width: "100%",
              background: "#ffff",
              zIndex: 1000,
              borderBottom: "1px solid #d7d7d7",
            }}
            className={`${styles.bottom} ${active ? styles.active : ""}`}
          >
            <ul ref={popupRef} className="recommendations__list">
              {filteredSelect.map(({ id, name }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      handleItemButtonClick(name);
                      handleSort(id);
                    }}
                    className="recommendations__list-btn"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
