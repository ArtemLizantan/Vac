import React from "react";

export const Transmission = () => {
  return (
    <div className="transmission">
      <div className="transmission__body">
        <ul className="transmission__list">
          <li className="transmission__list-item">
            <label className="transmission__list-item-check">
              <input type="checkbox" />
              <div className="transmission__list-item-wrapper">
                <span>Automatic</span>
              </div>
            </label>
          </li>
          <li className="transmission__list-item">
            <label className="transmission__list-item-check">
              <input type="checkbox" />
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
