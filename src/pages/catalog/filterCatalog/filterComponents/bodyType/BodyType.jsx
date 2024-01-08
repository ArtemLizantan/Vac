import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";
import { useFilters } from "../../../../../context/FilterContenxt";
import sedan from "../../../../../img/catalog/Sedan.svg";
import convertiable from "../../../../../img/catalog/convertiable.svg";
import coupe from "../../../../../img/catalog/coupe.svg";
import hatchback from "../../../../../img/catalog/hatchback.svg";
import suv from "../../../../../img/catalog/suv.svg";
import trucks from "../../../../../img/catalog/truck.svg";
import van from "../../../../../img/catalog/van.svg";
import { SelectedFilterButton } from "./../selectedFilterButton/SelectedFilterButton";
export const bodyType = [
  {
    id: "trucks",
    value: false,
    name: "Trucks",
    image: trucks,
  },
  {
    id: "suv",
    value: false,
    name: "SUV",
    image: suv,
  },
  {
    id: "sedan",
    value: false,
    name: "Sedan",
    image: sedan,
  },
  {
    id: "coupe",
    value: false,
    name: "Coupe",
    image: coupe,
  },
  {
    id: "hatchback",
    value: false,
    name: "Hatchback",
    image: hatchback,
  },
  {
    id: "convertible",
    value: false,
    name: "Convertible",
    image: convertiable,
  },
  {
    id: "van",
    value: false,
    name: "Van",
    image: van,
  },
];

export const BodyType = () => {
  const [bodyTypeState, setBodyTypeState] = useState(bodyType);
  const { setBodyTypeFilters, clearFilter } = useFilters();

  const handleCheckboxChange = (id) => {
    const updatedBodyType = bodyTypeState.map((bodyType) =>
      bodyType.id === id ? { ...bodyType, value: !bodyType.value } : bodyType
    );

    setBodyTypeState(updatedBodyType);

    const selectedType = updatedBodyType
      .filter(({ value }) => value)
      .map(({ name }) => name);

    setBodyTypeFilters(selectedType);
  };

  return (
    <div className="type">
      <div className="type__body">
        <ul className="type__list">
          {bodyTypeState.map(({ name, id, value, image }) => (
            <li key={id} className="type__list-item">
              <label className="type__list-item-check">
                <Checkbox
                  checked={value}
                  onChange={() => handleCheckboxChange(id)}
                  size={20}
                  borderColor="#d7d7d7"
                  icon={<FiCheck color="#7481ff" size={20} />}
                  value={value}
                />
                <div className="type__list-item-wrapper">
                  <span>{name}</span>
                  <img src={image} alt="" />
                </div>
              </label>
            </li>
          ))}
        </ul>
        {clearFilter === false && (
          <ul className="selected-filters">
            {bodyTypeState.map(({ name, value, id }) =>
              value ? (
                <li key={`selected-filter-${id}`}>
                  <SelectedFilterButton
                    onClick={() => handleCheckboxChange(id)}
                    name={name}
                  />
                </li>
              ) : null
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
