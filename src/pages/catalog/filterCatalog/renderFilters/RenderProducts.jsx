import React from "react";
import { FilterProducts } from "../filterProducts/FilterProducts";
export const RenderProducts = ({ data, setData }) => {
  return (
    <>
      {data.map(
        ({
          name,
          model,
          year,
          bodyType,
          img,
          transmission,
          kilometres,
          price,
          id
        }) => (
          <FilterProducts
            key={id}
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
