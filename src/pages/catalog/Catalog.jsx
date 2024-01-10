import React from "react";
import { Helmet } from "react-helmet";
import { FilterProvider } from "../../context/FilterContenxt";
import { FilterCatalog } from "./filterCatalog/FilterCatalog";
const Catalog = () => {
  return (
    <>
      <Helmet>
        <title>Catalog page - VAC</title>
      </Helmet>
      <FilterProvider>
        <FilterCatalog />
      </FilterProvider>
    </>
  );
};
export default Catalog;
