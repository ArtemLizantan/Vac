import React, { useState } from "react";
import { inventory } from "../../../data/inventory";

import { FilterByPriority } from "./filterByPriority/FilterByPrioruty";
import { FilterSearch } from "./filterSearch/FilterSearch";
import "./index.scss";
import { RenderFilters } from "./renderFilters/RenderFilters";
import { RenderProducts } from "./renderFilters/RenderProducts";
export const FilterCatalog = () => {
  const [cards, setCards] = useState(inventory);

  return (
    <div className="filter">
      <div className="container">
        <div className="filter__body">
          <div className="filter__sidebar filter-sidebar">
            <div className="filter-sidebar__top">
              <h3 className="filter-sidebar__title">Detailed search</h3>
              <button className="filter-sidebar__clear">Clear filters</button>
            </div>
            <ul className="filter-sidebar__list">
              <RenderFilters cards={cards} setCards={setCards} />
            </ul>
          </div>
          <div className="filter__wrapper">
            <div className="filter__top">
              <div className="filter__top-left">
                <FilterSearch
                  placeholder={"Find a dream car..."}
                  share
                  width={350}
                  data={cards}
                />
              </div>
              <FilterByPriority cards={cards} setCards={setCards} />
            </div>
            <div className="filter__bottom">
              <div className="filter__products">
                <RenderProducts data={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
