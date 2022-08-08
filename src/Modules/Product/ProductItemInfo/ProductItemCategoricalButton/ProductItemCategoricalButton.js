import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from "@mui/material/Tooltip";

const ProductItemCategoricalButton = (props) => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Tooltip enterTouchDelay={0} title={props.toolTipName}>
      <Box
        component="li"
        sx={{
          p: 1,
          borderRadius: 50,
          border: `1px solid ${
            props.position === props.selectedPos ? "#321e1e" : "transparent"
          }`,
          width: tabletScreenMatch ? 24 : 32,
          height: tabletScreenMatch ? 24 : 32,
          position: "relative",
          listStyleType: "none",
        }}
        data-position={props.position}
        onClick={props.onClick}
      >
        <Box
          sx={{
            content: '""',
            backgroundColor: props.colorCode,
            width: tabletScreenMatch ? "80%" : "90%",
            height: tabletScreenMatch ? "80%" : "90%",
            position: "absolute",
            top: "50%",
            left: "50%",
            borderRadius: 50,

            // border: "1px solid #321e1e",
            transform: "translate(-50%, -50%)",
          }}
        ></Box>
      </Box>
    </Tooltip>
  );
};

export default ProductItemCategoricalButton;
