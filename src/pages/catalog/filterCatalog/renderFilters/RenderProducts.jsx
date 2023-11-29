import React from "react";
import { inventory } from "../../../../data/inventory";
import { FilterProducts } from "../filterProducts/FilterProducts";
export const RenderProducts = () => {
  return (
    <>
      {inventory.map(
        ({
          name,
          model,
          year,
          bodyType,
          img,
          transmission,
          kilometres,
          price,
        }) => (
          <FilterProducts
            name={name}
            model={model}
            type={bodyType}
            price={price}
            img={img}
            year={year}
            bodyType={bodyType}
            transmission={transmission}
            kilometres={kilometres}
          />
        )
      )}
    </>
  );
};
