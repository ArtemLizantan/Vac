import React, { useEffect, useState } from "react";
import { useFilters } from "../../../../../context/FilterContenxt";
import { SelectedFilterButton } from "./../selectedFilterButton/SelectedFilterButton";
const filterCarsSearch = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }

  const uniqueNames = new Set();

  return listOfCars.filter(({ name }) => {
    const lowerCaseName = name.toLowerCase();

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

export const SearchMake = ({ data }) => {
  const [carList, setCarList] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [activeFilterCars, setActiveFilterCars] = useState(false);
  const [make, setMake] = useState([]);
  const { setMakeFiltered, search, setSearch } = useFilters();

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
    setMakeFiltered(value);
    setMake(value);
    setSearch(value)
  };

  const handleDeleteSelect = () => {
    setMakeFiltered("");
    setMake([]);
    setSearch("")
  };

  const uniqueNames = [...new Set(carList.map((car) => car.name))];

  useEffect(() => {
    setMakeFiltered(search);
    setMake(search);
  }, [search]);

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
                {uniqueNames.map((name) => (
                  <li key={name}>
                    <button
                      onClick={() => {
                        handleItemButtonClick(name);
                        handleBlur();
                      }}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
      {make.length === 0 ? null : (
        <ul style={{ marginTop: "0" }} className="selected-filters">
          <li>
            <SelectedFilterButton
              marginTop={0}
              onClick={() => handleDeleteSelect()}
              name={make}
            />
          </li>
        </ul>
      )}
    </>
  );
};
