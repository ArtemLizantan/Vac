import React, { useEffect, useState } from "react";
import { useFilters } from "../../../../../context/FilterContenxt";
import { SelectedFilterButton } from "./../selectedFilterButton/SelectedFilterButton";
const filterCarsSearch = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }

  const uniqueNames = new Set();

  return listOfCars.filter(({ model }) => {
    const lowerCaseName = model.toLowerCase();

    if (
      lowerCaseName.includes(searchText.toLowerCase()) &&
      !uniqueNames.has(lowerCaseName)
    ) {
      uniqueNames.add(lowerCaseName);
      return true;
    }

    return false;
  });
};

export const SearchModel = ({ data }) => {
  const [carList, setCarList] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [activeFilterCars, setActiveFilterCars] = useState(false);
  const [model, setModel] = useState([]);
  const { setModelFiltered, makeFiltered, filteredProducts, setMakeFiltered } =
    useFilters();

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCars = filterCarsSearch(searchItem, data);
      setCarList(filteredCars);
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchItem, data]);

  const handleFocus = () => setActiveFilterCars(true);
  const handleBlur = () => setActiveFilterCars(false);

  const handleItemButtonClick = (value) => {
    setModelFiltered(value);
    setModel(value);
  };

  const handleDeleteSelect = () => {
    setModelFiltered("")
    setModel([])
  };

  return (
    <>
      <form className="filter__search">
        <div className="filter__search-wrapper">
          <input
            type="text"
            placeholder={"Search Make..."}
            className="filter__input"
            onChange={(e) => setSearchItem(e.target.value)}
            onFocus={handleFocus}
            autoComplete="off"
          />

          {activeFilterCars && (
            <div className="filter__search-popup filter__search-popup--infilter">
              <ul className="filter__search-list">
                {makeFiltered.length === 0
                  ? "Select the car name"
                  : filteredProducts.map(({ model, id }) => (
                      <li key={id}>
                        <button
                          onClick={() => {
                            handleItemButtonClick(model);
                            handleBlur();
                          }}
                        >
                          {model}
                        </button>
                      </li>
                    ))}
              </ul>
            </div>
          )}
        </div>
      </form>
      {model.length === 0 ? null : (
        <ul style={{ marginTop: "0" }} className="selected-filters">
          <li>
            <SelectedFilterButton
              marginTop={0}
              onClick={() => handleDeleteSelect()}
              name={model}
            />
          </li>
        </ul>
      )}
    </>
  );
};
