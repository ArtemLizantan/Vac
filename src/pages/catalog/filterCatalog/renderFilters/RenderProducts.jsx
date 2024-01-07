import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFilters } from "../../../../context/FilterContenxt";
import { FilterProducts } from "../filterProducts/FilterProducts";

// Импорт стилей Swiper
import "swiper/swiper-bundle.css";

import { Grid, Pagination } from "swiper/modules";

export const RenderProducts = () => {
  const { filteredProducts } = useFilters();

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedProducts = chunkArray(filteredProducts, 6);

  return (
    <Swiper
      style={{ paddingBottom: "65px", width: "100%" }}
      slidesPerView={1}
      autoHeight={true}
      grid={{
        rows: 1,
      }}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      {chunkedProducts.map((group, groupIndex) => (
        <SwiperSlide key={groupIndex}>
          <div  className="all-products">
            {group.map(
              ({
                name,
                model,
                year,
                bodyType,
                img,
                transmission,
                kilometres,
                price,
                id,
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
