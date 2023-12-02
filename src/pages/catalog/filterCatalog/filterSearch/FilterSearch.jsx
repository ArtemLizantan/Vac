import React, { useEffect, useState } from "react";

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }

  return listOfCars.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const FilterSearch = ({ width, placeholder, data }) => {
  const [carList, setCarList] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [activeFilterCars, setActiveFilterCars] = useState(false);

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
          // onBlur={handleBlur}
          autoComplete="off"
        />
        <button className="filter__search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.9184 10.4535C18.9184 15.1212 15.1322 18.907 10.4592 18.907C5.78629 18.907 2 15.1212 2 10.4535C2 5.78579 5.78629 2 10.4592 2C15.1322 2 18.9184 5.78579 18.9184 10.4535ZM17.1074 18.5239C15.3001 20.0128 12.9841 20.907 10.4592 20.907C4.68275 20.907 0 16.2268 0 10.4535C0 4.68018 4.68275 0 10.4592 0C16.2357 0 20.9184 4.68018 20.9184 10.4535C20.9184 12.9832 20.0194 15.3031 18.5231 17.1113L23.707 22.2923C24.0977 22.6827 24.0978 23.3159 23.7074 23.7065C23.317 24.0972 22.6838 24.0973 22.2932 23.7069L17.1074 18.5239Z"
              fill="#41456B"
            />
          </svg>
        </button>
        {activeFilterCars && (
          <div className="filter__search-popup">
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
