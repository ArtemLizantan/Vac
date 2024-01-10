import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFilters } from "../../../../context/FilterContenxt";
import { FilterProducts } from "../filterProducts/FilterProducts";

// Импорт стилей Swiper
import "swiper/swiper-bundle.css";

import { Grid, Pagination } from "swiper/modules";

export const RenderProducts = () => {
  const { filteredProducts, clearAllFilters } = useFilters();

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedProducts = chunkArray(filteredProducts, 6);

  return filteredProducts.length === 0 ? (
    <div className="error">
      <div className="error__body">
        <div className="error__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="30"
            viewBox="0 0 90 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.4252 11.4386L65.298 11.8733L65.3706 12.3205L66.7246 20.6613V23.8984H59.3693C59.2835 24.6063 59.0841 25.2792 58.79 25.8984H66.7246C67.8292 25.8984 68.7246 25.003 68.7246 23.8984V20.5L67.3448 12L68.069 9.52391C68.4135 8.34599 67.6256 7.1385 66.4087 6.97936L61.7754 6.37347C61.6666 6.35924 61.5667 6.30599 61.4943 6.22362C58.0156 2.26746 53.0024 0 47.7344 0H34.0224C31.8645 0 29.7465 0.581409 27.891 1.68309L18.933 7.00192C18.624 7.18539 18.2713 7.28221 17.9119 7.28221H12.8448H12.5626C6.09099 7.28221 0.844758 12.5284 0.844758 19V22L0.31971 22.8187C-0.533932 24.1499 0.421931 25.8984 2.00326 25.8984H11.6417C12.6874 28.0997 14.9311 29.6217 17.5303 29.6217C21.1288 29.6217 24.046 26.7045 24.046 23.106C24.046 19.5075 21.1288 16.5903 17.5303 16.5903C13.9318 16.5903 11.0146 19.5075 11.0146 23.106C11.0146 23.3742 11.0309 23.6387 11.0623 23.8984H2.00326L2.52831 23.0796L2.84476 22.5862V22V19C2.84476 13.633 7.19556 9.28221 12.5626 9.28221H12.8448H17.9119C18.6306 9.28221 19.3361 9.08856 19.9541 8.72163L28.9121 3.4028C30.4586 2.48458 32.2239 2 34.0224 2H47.7344C52.4274 2 56.8934 4.01996 59.9924 7.54429C60.385 7.99081 60.9265 8.27948 61.5161 8.35658L66.1494 8.96248L65.4252 11.4386ZM47.0125 25.8984C48.0583 28.0997 50.302 29.6217 52.9012 29.6217C56.4997 29.6217 59.4169 26.7045 59.4169 23.106C59.4169 19.5075 56.4997 16.5903 52.9012 16.5903C49.3027 16.5903 46.3855 19.5075 46.3855 23.106C46.3855 23.3742 46.4017 23.6387 46.4332 23.8984H23.9984C23.9126 24.6063 23.7132 25.2792 23.4191 25.8984H47.0125ZM29.7949 10.0054C29.2426 10.0054 28.7949 10.4531 28.7949 11.0054C28.7949 11.5577 29.2426 12.0054 29.7949 12.0054H33.5182C34.0704 12.0054 34.5182 11.5577 34.5182 11.0054C34.5182 10.4531 34.0704 10.0054 33.5182 10.0054H29.7949ZM17.5303 27.6217C20.0242 27.6217 22.046 25.5999 22.046 23.106C22.046 20.6121 20.0242 18.5903 17.5303 18.5903C15.0364 18.5903 13.0146 20.6121 13.0146 23.106C13.0146 25.5999 15.0364 27.6217 17.5303 27.6217ZM57.4169 23.106C57.4169 25.5999 55.3951 27.6217 52.9012 27.6217C50.4073 27.6217 48.3855 25.5999 48.3855 23.106C48.3855 20.6121 50.4073 18.5903 52.9012 18.5903C55.3951 18.5903 57.4169 20.6121 57.4169 23.106ZM52.9014 25.106C54.0059 25.106 54.9014 24.2105 54.9014 23.106C54.9014 22.0014 54.0059 21.106 52.9014 21.106C51.7968 21.106 50.9014 22.0014 50.9014 23.106C50.9014 24.2105 51.7968 25.106 52.9014 25.106ZM19.5303 23.106C19.5303 24.2105 18.6349 25.106 17.5303 25.106C16.4257 25.106 15.5303 24.2105 15.5303 23.106C15.5303 22.0014 16.4257 21.106 17.5303 21.106C18.6349 21.106 19.5303 22.0014 19.5303 23.106Z"
              fill="#41456B"
            />
            <path
              d="M76.8447 9H83.7921"
              stroke="#41456B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76.8447 15H88.8447"
              stroke="#41456B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76.8447 21H80.6342"
              stroke="#41456B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="error__title">
          Unfortunately there are no matches for your query.
        </h2>
        <div className="error__subtitle">
          Try using other filter settings or request a car of your choice.
        </div>
        <button onClick={clearAllFilters} className="error__clear">
          Clear filters
        </button>
      </div>
    </div>
  ) : (
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
          <div className="all-products">
            {group.map(
              ({
                name,
                model,
                year,
                bodyType,
                images,
                transmission,
                kilometres,
                price,
                id,
              }) => {
                return (
                  <FilterProducts
                    key={id}
                    id={id}
                    name={name}
                    model={model}
                    type={bodyType}
                    price={price}
                    img={images[0]}
                    year={year}
                    bodyType={bodyType}
                    transmission={transmission}
                    kilometres={kilometres}
                  />
                );
              }
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
