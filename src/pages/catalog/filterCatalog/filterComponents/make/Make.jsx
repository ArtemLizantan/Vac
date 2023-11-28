import React from "react";
import { FilterSearch } from "./../../filterSearch/FilterSearch";

export const Make = () => {
  return (
    <div className="make">
      <div className="make__wrapper">
        <h2 className="make__title">Make</h2>
        <FilterSearch placeholder={"Search Make..."} />
      </div>
      <div className="make__wrapper">
        <h2 className="make__title">Model</h2>
        <FilterSearch placeholder={"Search Model..."} />
      </div>
    </div>
  );
};
