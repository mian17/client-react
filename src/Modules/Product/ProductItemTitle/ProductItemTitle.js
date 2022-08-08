import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductItemTitle = (props) => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        borderBottom: "1px solid #bdb498",
        borderRight: "1px solid #bdb498",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Typography
        component="h4"
        variant={tabletScreenMatch ? "h5" : "h4"}
        sx={{ fontWeight: 700 }}
        fontFamily="Libre Bodoni"
      >
        {props.title}
      </Typography>
      <Typography
        // paragraph
        variant=" body"
        sx={{
          color: "inherit",
          textAlign: "right",
          fontSize: tabletScreenMatch ? 14 : 16,
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};
export default ProductItemTitle;
