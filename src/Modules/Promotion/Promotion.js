import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Promotion = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      component="section"
      sx={{
        position: "relative",
        borderBottom: "1px solid #bdb498",
        ":after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26))",
          // zIndex: -1,
        },
      }}
      container
    >
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 100,
        }}
      >
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
