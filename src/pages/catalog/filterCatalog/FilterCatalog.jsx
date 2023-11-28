import React from "react";
import "./index.scss";
export const FilterCatalog = () => {
  return (
    <div className="filter">
      <div className="container">
        <div className="filter__body">
          <div className="filter__sidebar filter-sidebar">
            <h3 className="filter-sidebar__title">Detailed search</h3>
            <ul className="filter-sidebar__list"></ul>
          </div>
          <div className="filter__top"></div>
          <div className="filter__bottom">
            <div className="filter__products"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
