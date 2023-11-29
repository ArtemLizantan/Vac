import React from "react";
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";
export const Transmission = () => {
  return (
    <div className="transmission">
      <div className="transmission__body">
        <ul className="transmission__list">
          <li className="transmission__list-item">
            <label className="transmission__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Automatic"
              />
              <div className="transmission__list-item-wrapper">
                <span>Automatic</span>
              </div>
            </label>
          </li>
          <li className="transmission__list-item">
            <label className="transmission__list-item-check">
              <Checkbox
                size={20}
                borderColor="#d7d7d7"
                icon={<FiCheck color="#7481ff" size={20} />}
                value="Manual"
              />
              <div className="transmission__list-item-wrapper">
                <span>Manual</span>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
