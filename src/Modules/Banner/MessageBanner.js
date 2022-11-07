import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { textBoxSx } from "./messageBannerSx/messageBannerSx";

const MessageBanner = () => {
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
        height: "90vh",
      }}
    >
      <Box sx={textBoxSx}>
        <Typography
          fontFamily={"Libre Bodoni"}
          color="#321e1e"
          component="h3"
          variant={tabletScreenMatch ? "h4" : "h3"}
          lineHeight={1.4}
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          Niềm vui của bạn chính là niềm vui của chúng tôi
          <br />
        </Typography>
        {/*"#f4f1e0"*/}
        <Typography component="h4" variant="body1" color="#321e1e" mb={2}>
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
