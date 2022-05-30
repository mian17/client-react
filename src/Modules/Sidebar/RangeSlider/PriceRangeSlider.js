import * as React from "react";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";

function valuetext(val) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format((val + 1) * 10000);
}
const minDistance = 10;

const marks = [
  {
    value: 0,
    label: new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(10000),
  },

  {
    value: 49,
    label: new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(500000),
  },

  {
    value: 99,
    label: new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(1000000),
  },
];

const PriceRangeSlider = () => {
  const [value, setValue] = React.useState([20, 50]);

  const handleSliderChange = (event, newValue, activeThumb) => {
    const MAX_SLIDER_VALUE = 99;
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], MAX_SLIDER_VALUE - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  // const handleInputChange0 = (event) => {
  //   if (value[0] < value[1]) {
  //     setValue((prevState) => {
  //       return event.target.value === ""
  //         ? ""
  //         : [Number(event.target.value), prevState[1]];
  //     });
  //   } else {
  //     setValue((prevState) => {
  //       return event.target.value === ""
  //         ? ""
  //         : [Number(event.target.value) - 1, prevState[1]];
  //     });
  //   }
  // };
  //
  // const handleInputChange1 = (event) => {
  //   if (value[1] > value[0]) {
  //     setValue((prevState) => {
  //       return event.target.value === ""
  //         ? ""
  //         : [prevState[0], Number(event.target.value)];
  //     });
  //   } else {
  //     setValue((prevState) => {
  //       return event.target.value === ""
  //         ? ""
  //         : [prevState[0], Number(event.target.value) + 1];
  //     });
  //   }
  // };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  return (
    <Box>
      <Slider
        getAriaLabel={() => "Tìm sản phẩm khoảng giá tiền"}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap={true}
        valueLabelFormat={valuetext}
        max={99}
        marks={marks}
      />
      {/*<Input*/}
      {/*  value={value[0]}*/}
      {/*  size="small"*/}
      {/*  onChange={handleInputChange0}*/}
      {/*  onBlur={handleBlur}*/}
      {/*  inputProps={{*/}
      {/*    step: 1,*/}
      {/*    min: 1,*/}
      {/*    max: 89,*/}
      {/*    type: "number",*/}
      {/*    "aria-labelledby": "input-slider",*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  value={value[1]}*/}
      {/*  size="small"*/}
      {/*  onChange={handleInputChange1}*/}
      {/*  onBlur={handleBlur}*/}
      {/*  inputProps={{*/}
      {/*    step: 1,*/}
      {/*    min: 2,*/}
      {/*    max: 100,*/}
      {/*    type: "number",*/}
      {/*    "aria-labelledby": "input-slider",*/}
      {/*  }}*/}
      {/*/>*/}
    </Box>
  );
};
export default PriceRangeSlider;
