import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useEffect, useState } from "react";

export const Year = ({ cards, setCards }) => {
  const [value, setValue] = useState([2000, 2023]);
  const [originalCards, setOriginalCards] = useState(cards);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const [minYear, maxYear] = value;
    setCards(
      originalCards.filter(
        (card) => card.year >= minYear && card.year <= maxYear
      )
    );
  }, [value]);

  return (
    <Box sx={{ width: 260 }}>
      <div className="price__counts">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
      <Slider
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
