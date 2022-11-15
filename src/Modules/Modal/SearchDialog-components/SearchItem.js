import { currencyFormatOptions } from "../../../utils/utils";
import * as React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function SearchItem(props) {
  const productPrice = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(props.product.price);
  const [isHovered, setIsHovered] = useState(false);
  const onHoveredMouseEnterHandler = () => {
    setIsHovered(true);
  };
  const onHoveredMouseOutHandler = () => {
    setIsHovered(false);
  };

  return (
    <Link
      as={NavLink}
      to={`/product/${props.product.id}`}
      sx={{ textDecoration: "none", "&:hover": { textDecoration: "none" } }}
    >
      <Box
        py={1}
        sx={{
          border: `1px solid ${isHovered ? "#321e1e" : "#eee"}`,
          borderRadius: "9px",
          backgroundColor: `${isHovered ? "#255957" : "inherit"}`,
          transition: "all 0.3s",
          mb: 1,
        }}
        onMouseOver={onHoveredMouseEnterHandler}
        onMouseOut={onHoveredMouseOutHandler}
      >
        <Grid spacing={1} container sx={{ alignItems: "center", p: 2 }}>
          <Grid item xs={12} sm={3} md={2} sx={{ flexGrow: 1 }}>
            <img
              style={{
                height: "auto",
                borderRadius: "9px",
                maxWidth: "96px",
              }}
              src={props.product.imgUrl}
              alt=""
            />
          </Grid>
          <Grid item xs={8} sm={7} md={8}>
            <Typography
              component="h5"
              variant="body1"
              sx={{
                color: `${isHovered ? "#eee" : "#321e1e"}`,
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              {props.product.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sm={2}
            md={2}
            justifySelf="flex-end"
            alignSelf="center"
          >
            <Typography
              sx={{
                color: `${isHovered ? "#eee" : "#321e1e"}`,
                textDecoration: "none",
                pr: 2,
              }}
              display="inline"
            >
              {productPrice}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/*<Divider />*/}
    </Link>
  );
}
