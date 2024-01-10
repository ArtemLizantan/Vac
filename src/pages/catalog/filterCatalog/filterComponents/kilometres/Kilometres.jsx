import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState,useEffect } from "react";
import { useFilters } from "../../../../../context/FilterContenxt";
export const Kilometres = () => {


  const initialRange = [0];
  const [value, setValue] = useState(initialRange);
  const { setKilometresFilters, clearFilter } = useFilters();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setKilometresFilters(newValue);

    if (newValue[0] === 0) {
      setKilometresFilters("");
    }
  };

  const kmValue = (value) => {
    return `${value.toLocaleString()} or less`;
  };

  useEffect(() => {
    if (clearFilter) {
      setValue(initialRange);
    }
  }, [clearFilter, initialRange, setKilometresFilters]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div className="price__counts">
        <span>{kmValue(value[0])}</span>
      </div>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={500000}
        min={0}
        step={10000}
        sx={{
          color: "#7481FF",
          "& .MuiSlider-rail": {
            color: "#D7D7D7",
          },
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
        }}
      />
    </Box>
  );
};
