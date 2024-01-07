import React from "react";
import { SearchModel } from "../searchModel/SearchModel";
import { inventory } from "./../../../../../data/inventory";
import { SearchMake } from "./../searchMakeModel/SearchMakeModel";
export const Make = () => {
  return (
    <div className="make">
      <div className="make__wrapper">
        <h2 className="make__title">Name</h2>
        <SearchMake placeholder={"Search Make..."} data={inventory} />
      </div>
      <div className="make__wrapper">
        <h2 className="make__title">Model</h2>
        <SearchModel placeholder={"Search Model..."} data={inventory} />
      </div>
    </div>
  );
};
