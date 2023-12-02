import React from "react";
import { inventory } from "./../../../../../data/inventory";
import { FilterSearch } from "./../../filterSearch/FilterSearch";
import { SearchMakeModel } from "./../searchMakeModel/SearchMakeModel";

export const Make = () => {
  return (
    <div className="make">
      <div className="make__wrapper">
        <h2 className="make__title">Make</h2>
        <SearchMakeModel placeholder={"Search Make..."} data={inventory} />
      </div>
      <div className="make__wrapper">
        <h2 className="make__title">Model</h2>
        <SearchMakeModel placeholder={"Search Model..."} data={inventory} />
      </div>
    </div>
  );
};
