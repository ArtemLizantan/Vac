import React from "react";
import "./selectedFilter.scss";
export const SelectedFilterButton = ({ name, onClick }) => {
  return (
    <div className="selected-filter">
      <div className="selected-filter__body">
        <button onClick={onClick} className="selected-filter__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M1.375 1.375L9.62496 9.62513"
              stroke="#7481FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.625 1.375L1.37504 9.62513"
              stroke="#7481FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="selected-filter__name">{name}</span>
      </div>
    </div>
  );
};
