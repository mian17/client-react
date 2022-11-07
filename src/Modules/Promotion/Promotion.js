import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grayLayerSx, textBoxSx } from "./promotionSx/promotionSx";

const Promotion = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid component="section" sx={grayLayerSx} container>
      <Box sx={textBoxSx}>
        <Typography
          fontFamily={"Libre Bodoni"}
          color="#f4f1e0"
          component="h3"
          variant={smallScreenMatch ? "h4" : "h2"}
          lineHeight={1.4}
          mb={2}
        >
          SALE ĐẬM NHÂN DIỆP GIÁNG SINH
          <br />
        </Typography>
        <Typography component="h4" variant="body1" color="#f4f1e0" mb={2}>
          Giảm tối đa đến 88% cho các ngành hàng
        </Typography>

        <Button variant="contained" size="large">
          Săn sale ngay
        </Button>
      </Box>
      <Grid lg={4} md={6} sm={6} xs={6} item sx={{}}>
        <Box
          component="img"
          src="/img/promotion/promotion-1.jpg"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>

      <Grid lg={4} md={6} sm={6} xs={6} item sx={{}}>
        <Box
          component="img"
          src="/img/promotion/promotion-2.jpg"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>

      <Grid lg={4} md={6} sm={6} xs={6} item sx={{}}>
        <Box
          component="img"
          src="/img/promotion/promotion-3.jpg"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>

      {laptopScreenMatch && (
        <Grid lg={0} md={6} sm={6} xs={6} item sx={{}}>
          <Box
            component="img"
            src="/img/promotion/promotion-4.jpg"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
      )}
    </Grid>
  );
};
export default Promotion;
