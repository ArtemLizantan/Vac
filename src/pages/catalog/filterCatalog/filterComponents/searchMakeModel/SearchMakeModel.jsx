import React, { useEffect, useState } from "react";

export const SearchMakeModel = ({ width, placeholder, data }) => {
  const [carList, setCarList] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [activeFilterCars, setActiveFilterCars] = useState(false);

  const filterCars = (searchText, listOfCars) => {
    if (!searchText) {
      return listOfCars;
    }

    if (modelSearch) {
      return listOfCars.filter(({ model }) =>
        model.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return listOfCars.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCars = filterCars(searchItem, data);
      setCarList(filteredCars);
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchItem, data]);

  const handleFocus = () => setActiveFilterCars(true);
  const handleBlur = () => setActiveFilterCars(false);

  return (
    <form className="filter__search">
      <div style={{ maxWidth: width }} className="filter__search-wrapper">
        <input
          type="text"
          placeholder={placeholder}
          className="filter__input"
          onChange={(e) => setSearchItem(e.target.value)}
          onFocus={handleFocus}
        //   onBlur={handleBlur}
          autoComplete="off"
        />

        {activeFilterCars && (
          <div className="filter__search-popup filter__search-popup--infilter">
            <ul className="filter__search-list">
              {carList.map(({ name, id }) => (
                <li key={id}>
                  <button>{name}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};
