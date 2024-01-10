import React, { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";
import { useFilters } from "../../../../../context/FilterContenxt";
import { SelectedFilterButton } from "./../selectedFilterButton/SelectedFilterButton";

export const transmission = [
  {
    id: "automatic",
    value: false,
    name: "Automatic",
  },
  {
    id: "manual",
    value: false,
    name: "Manual",
  },
];

export const Transmission = () => {
  const [transmissionsState, setTransmissionsState] = useState(transmission);
  const { setTransmissionFilter, clearFilter } = useFilters();

  useEffect(() => {
    if (clearFilter) {
      // Если clearFilter равно true, сбрасываем значения чекбоксов на false
      setTransmissionsState((prevTransmissionsState) =>
        prevTransmissionsState.map((transmission) => ({
          ...transmission,
          value: false,
        }))
      );
      setTransmissionFilter([]); // Сбрасываем выбранные фильтры
    }
  }, [clearFilter, setTransmissionFilter]);

  const handleCheckboxChange = (name) => {
    const updatedTransmissions = transmissionsState.map((transmission) =>
      transmission.name === name
        ? { ...transmission, value: !transmission.value }
        : transmission
    );
    setTransmissionsState(updatedTransmissions);

    const selectedTransmissions = updatedTransmissions
      .filter(({ value }) => value)
      .map(({ name }) => name);

    setTransmissionFilter(selectedTransmissions);
  };

  return (
    <div className="transmission">
      <div className="transmission__body">
        <ul className="transmission__list">
          {transmissionsState.map(({ name, id, value }) => (
            <li key={id} className="transmission__list-item">
              <label className="transmission__list-item-check">
                <Checkbox
                  checked={value}
                  onChange={() => handleCheckboxChange(name)}
                  size={20}
                  borderColor="#d7d7d7"
                  icon={<FiCheck color="#7481ff" size={20} />}
                  value={value}
                />
                <div className="transmission__list-item-wrapper">
                  <span>{name}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
        {clearFilter === false && (
          <ul className="selected-filters">
            {transmissionsState.map(({ name, value, id }) =>
              value ? (
                <li key={`selected-filter-${id}`}>
                  <SelectedFilterButton
                    onClick={() => handleCheckboxChange(name)}
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
