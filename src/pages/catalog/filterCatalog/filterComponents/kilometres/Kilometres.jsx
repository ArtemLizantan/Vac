import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";

export const Kilometres = () => {
  const [value, setValue] = useState([0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const kmValue = (value) => {
    return `${value.toLocaleString()} or less`;
  };

  return (
    <Box sx={{ width: 260 }}>
      <div className="price__counts">
        <span>{kmValue(value[0])}</span>
      </div>

      <Slider
        value={value}
        onChange={handleChange}
        aria-label="Default"
        valueLabelDisplay="auto"
        max={500000}
        min={0}
        step={100000}
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
