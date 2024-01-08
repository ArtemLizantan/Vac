import React, { useState } from "react";
import { DropDownFilterItems } from "../../../../UI/dropDown/dropDownFilterItems/dropDownFilterItems";
import { useFilters } from "../../../../context/FilterContenxt";
import DropDown from "./../../../../UI/dropDown/DropDown";
import { recomendations } from "./../../../../data/recomendation";
export const FilterByPriority = () => {
  const [selectedValue, setSelectedValue] = useState(recomendations[0].name);
  const [dropDownTitle, setDropDownTitle] = useState("Recommendations");

  const { setFilteredPriority } = useFilters();

  const handleItemButtonClick = (value) => {
    setSelectedValue(value);
    setDropDownTitle(value);
  };

  const filteredSelect = recomendations.filter(
    ({ name }) => name !== selectedValue
  );

  const handleSort = (id) => {
    setFilteredPriority(id);
  };



  return (
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
        onClick
      >
        <ul className="recommendations__list">
          {filteredSelect.map(({ id, name }) => (
            <li key={id}>
              <button
                onClick={() => {
                  handleItemButtonClick(name);
                  handleSort(id);
                }}
                className="recommendations__list-btn"
              >
                <DropDownFilterItems content={name} />
              </button>
            </li>
          ))}
        </ul>
      </DropDown>
    </div>
  );
};
