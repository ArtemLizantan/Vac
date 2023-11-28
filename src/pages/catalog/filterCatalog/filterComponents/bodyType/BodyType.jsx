import React from "react";

import sedan from "../../../../../img/catalog/Sedan.svg";
import convertiable from "../../../../../img/catalog/convertiable.svg";
import coupe from "../../../../../img/catalog/coupe.svg";
import hatchback from "../../../../../img/catalog/hatchback.svg";
import suv from "../../../../../img/catalog/suv.svg";
import trucks from "../../../../../img/catalog/truck.svg";
import van from "../../../../../img/catalog/van.svg";

export const BodyType = () => {
  return (
    <div className="type">
      <div className="type__body">
        <ul className="type__list">
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>Trucks</span>
                <img src={trucks} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>SUV</span>
                <img src={suv} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>Sedan</span>
                <img src={sedan} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>Hatchback</span>
                <img src={hatchback} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>Coupe</span>
                <img src={coupe} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>Convertiable</span>
                <img src={convertiable} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <input type="checkbox" />
              <div className="type__list-item-wrapper">
                <span>VAN</span>
                <img src={van} alt="" />
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
