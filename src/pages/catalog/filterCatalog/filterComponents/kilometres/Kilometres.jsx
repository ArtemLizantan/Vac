import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState, useEffect } from "react";

export const Kilometres = ({ cards, setCards }) => {
  const [value, setValue] = useState([0]);
  const [originalCards, setOriginalCards] = useState(cards);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const kmValue = (value) => {
    return `${value.toLocaleString()} or less`;
  };

  useEffect(() => {
    value[0] === 0
      ? setCards(originalCards)
      : setCards(originalCards.filter((card) => card.kilometres <= value[0]));
  }, [value, originalCards, setCards]);

  return (
    <Box sx={{ width: 260 }}>
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
