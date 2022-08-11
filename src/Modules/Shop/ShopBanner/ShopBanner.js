import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ShopBanner = (props) => {
  const theme = useTheme();
  const hideSocialMediaLinks = useMediaQuery(theme.breakpoints.down("lg"));
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  // Ready for API connection
  // const [error, setError] = useState(null);
  // const fetchCategories = useCallback(async () => {
  //   setError(null);
  //   try {
  //     // Get from api
  //     const response = await fetch("https://example.com");
  //     if (!response.ok) {
  //       throw new Error("Không lấy được dữ liệu");
  //     }
  //
  //     const data = await response.json();
  //     // console.log(data);
  //     const transformedCategory = data.map((categoryData) => {
  //       return new Category()
  //     });
  //
  //     setCategories(transformedCategory);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //
  // }, []);
  // Request categories
  // useEffect(() => {
  //     fetchCategories();
  // }, [fetchCategories]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        borderBottom: `1px solid ${
          hideSocialMediaLinks ? "transparent" : "#321e1e"
        }`,
        backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url(${props.backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "72vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 30,
        }}
      >
        <Typography
          fontFamily={"Libre Bodoni"}
          color="#f4f1e0"
          component="h3"
          variant={tabletScreenMatch ? "h4" : "h3"}
          lineHeight={1.4}
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShopBanner;
