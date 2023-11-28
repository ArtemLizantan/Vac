import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";

export const Year = () => {
  const [value, setValue] = useState([2000, 2023]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 260 }}>
      <div className="price__counts">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
      <Slider
        getAriaLabel={() => "Year range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={2023} 
        min={2000}
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
