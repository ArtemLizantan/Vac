import React from "react";
import "./filterProduct.scss";
export const FilterProducts = ({
  img,
  name,
  price,
  year,
  type,
  transmission,
  kilometres,
  model,
}) => {
  return (
    <div className="car-product">
      <div className="car-product__body">
        <div className="car-product__top">
          <img src={img} alt="" />
        </div>
        <div className="car-product__bottom">
          <div className="car-product__main-info">
            <h3 className="car-product__title">{name + " " + model}</h3>
            <span className="car-product__price">
            {`$ ${parseFloat(price).toLocaleString()}`}
            </span>
          </div>
          <div className="car-product__secondary-info">
            <ul className="car-product__secondary-info-list">
              <li>{year} year</li>
              <li>{type}</li>
              <li>{transmission}</li>
              <li>{kilometres} km</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
