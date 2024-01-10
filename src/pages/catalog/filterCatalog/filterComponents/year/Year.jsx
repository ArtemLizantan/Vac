import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState ,useEffect} from "react";
import { useFilters } from "../../../../../context/FilterContenxt";
export const Year = () => {
  const initialRange = [2000, 2023];
  const [value, setValue] = useState(initialRange);
  const { setYearFilter,clearFilter } = useFilters();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setYearFilter(newValue);
  };

  useEffect(() => {
    if (clearFilter) {
      setValue(initialRange);
    }
  }, [clearFilter, initialRange, setYearFilter]);

  return (
    <Box sx={{ width: "100%"}}>
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
