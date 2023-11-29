import React, { useState } from "react";
import { DropDownFilterItems } from "../../../UI/dropDown/dropDownFilterItems/dropDownFilterItems";
import { recomendations } from "../../../data/recomendation";
import DropDown from "./../../../UI/dropDown/DropDown";
import { inventory } from "./../../../data/inventory";
import { FilterSearch } from "./filterSearch/FilterSearch";
import "./index.scss";
import { RenderFilters } from "./renderFilters/RenderFilters";
import { RenderProducts } from "./renderFilters/RenderProducts";
export const FilterCatalog = () => {
  const [selectedValue, setSelectedValue] = useState(recomendations[0].name);
  const [dropDownTitle, setDropDownTitle] = useState("Recommendations"); // Add state for drop-down title

  const handleItemButtonClick = (value) => {
    setSelectedValue(value);
    setDropDownTitle(value);
  };

  const filteredSelect = recomendations.filter(
    ({ name }) => name !== selectedValue
  );

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
                <FilterSearch
                  placeholder={"Find a dream car..."}
                  share
                  width={350}
                  data={inventory}
                  position={"absolute"}
                  top={"100%"}
                />
              </div>
              <div className="filter__top-right">
                <span>Sorted by </span>
                <DropDown
                  position={"absolute"}
                  width={237}
                  title={selectedValue}
                  top={"100%"}
                  widthPopup={"100%"}
                  left={"0px"}
                  borderBottom={"1px solid #d7d7d7"}
                  borderRight={"1px solid #d7d7d7"}
                  borderLeft={"1px solid #d7d7d7"}
                  onClick
                >
                  <ul className="recommendations__list">
                    {filteredSelect.map(({ id, name }) => (
                      <li key={id}>
                        <button
                          onClick={() => handleItemButtonClick(name)}
                          className="recommendations__list-btn"
                        >
                          <DropDownFilterItems content={name} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </DropDown>
              </div>
            </div>
            <div className="filter__bottom">
              <div className="filter__products">
                <RenderProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
