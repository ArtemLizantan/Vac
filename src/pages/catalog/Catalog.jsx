import React from "react";
import { Helmet } from "react-helmet";
import { FilterCatalog } from "./filterCatalog/FilterCatalog";
export const Catalog = () => {
  return (
    <>
      <Helmet>
        <title>Catalog page - VAC</title>
      </Helmet>
      <FilterCatalog />
    </>
  );
};
