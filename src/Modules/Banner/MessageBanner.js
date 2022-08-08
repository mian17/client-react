import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MessageBanner = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        borderBottom: "1px solid #bdb498",
        backgroundImage:
          "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url('/img/message-banner/message-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
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
          variant={smallScreenMatch ? "h4" : "h3"}
          lineHeight={1.4}
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          Niềm vui của bạn chính là niềm vui của chúng tôi
          <br />
        </Typography>
        <Typography component="h4" variant="body1" color="#f4f1e0" mb={2}>
          loremLorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium autem consequatur dolore exercitationem fugiat fugit illum
          iure laudantium natus neque officiis pariatur, perspiciatis quaerat
          quasi quisquam quos saepe sint temporibus.
        </Typography>
      </Box>
    </Box>
  );
};
export default MessageBanner;
