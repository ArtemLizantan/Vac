import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";

export const Price = () => {
  const [value, setValue] = useState([0, 100000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dollarValue = (value) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <Box sx={{ width: 260 }}>
      <div className="price__counts">
        <span>{dollarValue(value[0])}</span>
        <span>{dollarValue(value[1])}</span>
      </div>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={100000} // Set the maximum value to 1000
        step={1}
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
