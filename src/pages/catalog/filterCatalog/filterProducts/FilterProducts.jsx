import React from "react";
import "./filterProduct.scss";
import { Link } from "react-router-dom";

export const FilterProducts = ({
  img,
  name,
  price,
  year,
  type,
  transmission,
  kilometres,
  model,
  id,
}) => {
  return (
    <Link to={`/products/${id}`} className="car-product">
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
    </Link>
  );
};
