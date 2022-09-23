import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import * as React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  left: 0,
  top: 0,
  display: "inline-block",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  // marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),

    // vertical padding + font size from searchIcon
    borderRadius: theme.shape.borderRadius,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    transition: "all 0.3s",
    "&:hover, &:focus": {
      boxShadow:
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2),\n" +
        "    0px 6px 10px 0px rgba(0, 0, 0, 0.14),\n" +
        "    0px 1px 18px 0px rgba(0,0,0,.12);",
    },
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0rem",
      "&:focus, &:hover": {
        width: "12rem",
      },
    },
  },
}));

export default function SearchBox() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Tìm kiếm"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
