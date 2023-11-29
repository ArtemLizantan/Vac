import React from "react";

import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";
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
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Trucks"
              />
              <div className="type__list-item-wrapper">
                <span>Trucks</span>
                <img src={trucks} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="SUV"
              />
              <div className="type__list-item-wrapper">
                <span>SUV</span>
                <img src={suv} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Sedan"
              />
              <div className="type__list-item-wrapper">
                <span>Sedan</span>
                <img src={sedan} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Hatchback"
              />
              <div className="type__list-item-wrapper">
                <span>Hatchback</span>
                <img src={hatchback} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Coupe"
              />
              <div className="type__list-item-wrapper">
                <span>Coupe</span>
                <img src={coupe} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Convertiable"
              />
              <div className="type__list-item-wrapper">
                <span>Convertiable</span>
                <img src={convertiable} alt="" />
              </div>
            </label>
          </li>
          <li className="type__list-item">
            <label className="type__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="VAN"
              />
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
