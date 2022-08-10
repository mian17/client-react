import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as PropTypes from "prop-types";
import { useState } from "react";

export default function SortServiceBox(props) {
  const [filteredValue, setFilteredValue] = useState(null);
  const radioButtonChangeHandler = (event) => {
    setFilteredValue(event.target.value);
  };
  return (
    <Grid
      lg={2}
      sx={{
        borderRight: "1px solid #bdb498",
        borderBottom: "1px solid #bdb498",
        p: 4,
      }}
      item
    >
      <FormControl>
        <FormLabel id="sort-by">
          <Typography
            component="h5"
            variant="h4"
            fontFamily={"Libre Bodoni"}
            sx={{ textTransform: "uppercase" }}
          >
            Sắp xếp:
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="sort-by"
          value={filteredValue}
          onChange={radioButtonChangeHandler}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="featured"
            control={<Radio />}
            label="Nổi bật"
          />
          <FormControlLabel
            value="low-to-high"
            control={<Radio />}
            label="Giá từ thấp đến cao"
          />
          <FormControlLabel
            value="high-to-low"
            control={<Radio />}
            label="Giá từ cao đến thấp"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
