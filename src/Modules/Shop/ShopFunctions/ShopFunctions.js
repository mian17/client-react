import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import FilterServiceModal from "./FilterService/FilterServiceModal/FilterServiceModal";

const ShoppingFunctions = (props) => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const openFilterModalHandler = () => {
    setOpenFilterModal(!openFilterModal);
  };

  const boxSX = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "8vh",
    pl: 4,
    pr: laptopScreenMatch ? 4 : 7,
    borderBottom: "1px solid #bdb498",
  };

  let translationLayer = "";
  switch (props.filteredValueLabel) {
    case "featured":
      translationLayer = "Nổi bật";
      break;
    case "low-to-high":
      translationLayer = "Giá từ thấp đến cao";
      break;
    case "high-to-low":
      translationLayer = "Giá cao đến thấp";
      break;
    case null:
      break;
    default:
      console.log("Value is not in specified list of cases");
      break;
  }
  const getFilteredValue = (val) => {
    // console.log(val);
    props.getFilterValue(val);
  };
  const closeModalHandler = () => {
    setOpenFilterModal(false);
  };

  return (
    <Box>
      <FilterServiceModal
        open={openFilterModal}
        onClose={closeModalHandler}
        getFilteredValue={getFilteredValue}
      />
      <Box component="section" sx={boxSX}>
        {laptopScreenMatch && (
          <>
            <Button
              sx={{ width: "100%" }}
              size="large"
              variant="outlined"
              color="primary"
              disableRipple
              onClick={openFilterModalHandler}
            >
              Sắp xếp
            </Button>
          </>
        )}
        {!laptopScreenMatch && (
          <>
            {/*<Box>*/}
            {/*  <ButtonBase*/}
            {/*    sx={{ position: "relative" }}*/}
            {/*    onClick={props.onClick}*/}
            {/*    disableRipple*/}
            {/*  >*/}
            {/*    <Typography*/}
            {/*      component="p"*/}
            {/*      variant="subtitle1"*/}
            {/*      fontFamily={"Libre Bodoni"}*/}
            {/*      sx={{*/}
            {/*        fontWeight: 700,*/}
            {/*        textTransform: "uppercase",*/}
            {/*        lineHeight: 1,*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      Lọc sản phẩm*/}
            {/*    </Typography>*/}
            {/*    <Box*/}
            {/*      sx={{*/}
            {/*        position: "absolute",*/}
            {/*        top: -6,*/}
            {/*        right: -28,*/}
            {/*        transition: "all 0.3s",*/}
            {/*        ...(props.filterIsClicked ? props.animatedIcon : {}),*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <KeyboardArrowUpIcon />*/}
            {/*    </Box>*/}
            {/*  </ButtonBase>*/}
            {/*</Box>*/}
            <Box>
              <ButtonBase
                sx={{ position: "relative" }}
                onClick={props.onClick1}
                disableRipple
              >
                <Typography
                  component="p"
                  variant="subtitle1"
                  fontFamily={"Libre Bodoni"}
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Sắp xếp: {translationLayer}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: -6,
                    right: -28,
                    transition: "all 0.3s",
                    ...(props.sortIsClicked ? props.animatedIcon : {}),
                  }}
                >
                  <KeyboardArrowUpIcon />
                </Box>
              </ButtonBase>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

ShoppingFunctions.propTypes = {
  onClick: PropTypes.func,
  filterIsClicked: PropTypes.bool,
  animatedIcon: PropTypes.shape({ transform: PropTypes.string }),
  onClick1: PropTypes.func,
  sortIsClicked: PropTypes.bool,
};
export default ShoppingFunctions;
