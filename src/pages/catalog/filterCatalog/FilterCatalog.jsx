import React from "react";
import DropDown from "./../../../UI/dropDown/DropDown";
import { FilterSearch } from "./filterSearch/FilterSearch";
import "./index.scss";
import { RenderFilters } from "./renderFilters/RenderFilters";
export const FilterCatalog = () => {
  return (
    <div className="filter">
      <div className="container">
        <div className="filter__body">
          <div className="filter__sidebar filter-sidebar">
            <div className="filter-sidebar__top">
              <h3 className="filter-sidebar__title">Detailed search</h3>
              <button className="filter-sidebar__clear">Clear filters</button>
            </div>
            <ul className="filter-sidebar__list">
              <RenderFilters />
            </ul>
          </div>
          <div className="filter__wrapper">
            <div className="filter__top">
              <div className="filter__top-left">
                <FilterSearch placeholder={"Find a dream car..."} share width={350} />
              </div>
              <div className="filter__top-right">
                <span>Sorted by </span>
                <DropDown width={237} title={"Recommendations"} />
              </div>
            </div>
            <div className="filter__bottom">
              <div className="filter__products">1313</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
