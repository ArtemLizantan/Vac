import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState ,useEffect } from "react";
import { useFilters } from "../../../../../context/FilterContenxt";
export const Price = () => {
  const initialRange = [0, 200000];
  const [value, setValue] = useState(initialRange);
  const { setPriceFilters ,clearFilter} = useFilters();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPriceFilters(newValue);
  };

  const dollarValue = (value) => {
    return `$${value.toLocaleString()}`;
  };

  useEffect(() => {
    if (clearFilter) {
      setValue(initialRange);
    }
  }, [clearFilter, initialRange, setPriceFilters]);

  return (
    <Box sx={{ width: "100%"}}>
      <div className="price__counts">
        <span>{dollarValue(value[0])}</span>
        <span>{dollarValue(value[1])}</span>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={200000} // Set the maximum value to 1000
        step={10000}
        sx={{
          color: "#7481FF",
          "&.MuiSlider-rail": {
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
