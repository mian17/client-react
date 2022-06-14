import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterProductItems = (props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter__item">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-5">
          <div className="filter__sort">
            <FormControl fullWidth>
              <InputLabel id="product-filter">Sắp xếp theo</InputLabel>
              <Select
                labelId="product-filter"
                id="product-filter"
                value={filter}
                label="Sắp xếp theo"
                onChange={handleChange}
              >
                <MenuItem value={"price-goes-up"}>
                  Giá: từ thấp đến cao
                </MenuItem>
                <MenuItem value={"price-goes-down"}>
                  Giá: từ cao đến thấp
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="col-lg-5 col-md-4">
          <div className="filter__found">
            <h6>
              <span>{props.foundNum}</span> sản phẩm được tìm thấy
            </h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="filter__option">
            <span className="icon_grid-2x2"></span>
            <span className="icon_ul"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProductItems;
