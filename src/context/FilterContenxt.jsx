import React, { createContext, useContext, useEffect, useState } from "react";
import { inventory } from "../data/inventory";
const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [transmissionFilter, setTransmissionFilter] = useState([]);
  const [bodyTypeFilters, setBodyTypeFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [kilometresFilters, setKilometresFilters] = useState([]);
  const [search, setSearch] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredPriority, setFilteredPriority] = useState([]);
  const [makeFiltered, setMakeFiltered] = useState([]);
  const [modelFiltered, setModelFiltered] = useState([]);
  useEffect(() => {
    setProducts(inventory);
  }, []);

  const [minPrice, maxPrice] = priceFilters;
  const [minYear, maxYear] = yearFilter;

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) =>
        (!transmissionFilter.length ||
          transmissionFilter.includes(item.transmission)) &&
        (!bodyTypeFilters.length || bodyTypeFilters.includes(item.bodyType)) &&
        (!priceFilters.length ||
          (item.price >= minPrice && item.price <= maxPrice)) &&
        (!kilometresFilters.length || item.kilometres < kilometresFilters) &&
        (!yearFilter.length ||
          (item.year >= minYear && item.year <= maxYear)) &&
        (filteredPriority === "newest" ||
          filteredPriority === "lowest" ||
          filteredPriority === "highest" ||
          filteredPriority === "recommendations" ||
          !filteredPriority) &&
        (!search.length ||
          item.name.toLowerCase().includes(search.toLowerCase())) &&
        (!makeFiltered.length || item.name.includes(makeFiltered)) &&
        (!modelFiltered.length || item.model.includes(modelFiltered))
    );

    const sortedProducts =
      filteredPriority === "lowest"
        ? filteredProducts.sort((a, b) => a.price - b.price)
        : filteredPriority === "highest"
        ? filteredProducts.sort((a, b) => b.price - a.price)
        : filteredPriority === "recommendations"
        ? filteredProducts.sort((a, b) => a.kilometres - b.kilometres)
        : filteredPriority === "newest"
        ? filteredProducts.sort((a, b) => b.year - a.year)
        : filteredProducts;

    setFilteredProducts(sortedProducts);
  }, [
    bodyTypeFilters,
    transmissionFilter,
    priceFilters,
    kilometresFilters,
    yearFilter,
    filteredPriority,
    search,
    makeFiltered,
    modelFiltered,
  ]);

  const contextValue = {
    transmissionFilter,
    setTransmissionFilter,
    bodyTypeFilters,
    setBodyTypeFilters,
    priceFilters,
    setPriceFilters,
    kilometresFilters,
    setKilometresFilters,
    products,
    setProducts,
    filteredProducts,
    yearFilter,
    setYearFilter,
    filteredPriority,
    setFilteredPriority,
    setSearch,
    search,
    makeFiltered,
    setMakeFiltered,
    modelFiltered,
    setModelFiltered,
    filteredProducts,
  };

  console.log(contextValue);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
