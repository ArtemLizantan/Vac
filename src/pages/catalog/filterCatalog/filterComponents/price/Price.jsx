import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useEffect, useState } from "react";

export const Price = ({ cards, setCards }) => {
  const [value, setValue] = useState([0, 200000]);
  const [originalCards, setOriginalCards] = useState(cards);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dollarValue = (value) => {
    return `$${value.toLocaleString()}`;
  };

  useEffect(() => {
    const [minPrice, maxPrice] = value;
    setCards(
      originalCards.filter(
        (card) => card.price >= minPrice && card.price <= maxPrice
      )
    );
  }, [value]);

  return (
    <Box sx={{ width: 260 }}>
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
