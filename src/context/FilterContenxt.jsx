import { createContext, useState } from "react";

const FilterContenxt = createContext();
export const FilterProvider = ({ children }) => {
  const [transmissionFilter, setTransmissionFilter] = useState([]);
  const [bodyTypeFilters, setBodyTypeFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [kilometresFilters, setKilometresFilters] = useState([]);

  const contextValue = {
    transmissionFilter,
    setTransmissionFilter,
    bodyTypeFilters,
    setBodyTypeFilters,
    priceFilters,
    setPriceFilters,
    kilometresFilters,
    setKilometresFilters,
  };

  return (
    <FilterContenxt.Provider value={contextValue}>
      {children}
    </FilterContenxt.Provider>
  );
};
