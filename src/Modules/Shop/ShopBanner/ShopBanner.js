import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendServerPath } from "../../common/utils/backendServerPath";
import { textBoxSx } from "./shopbannerSx/shopBannerSx";

const ShopBanner = () => {
  const theme = useTheme();
  const hideSocialMediaLinks = useMediaQuery(theme.breakpoints.down("lg"));
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [currentParentCategoryImage, setCurrentParentCategoryImage] =
    useState(null);
  const [currentParentCategoryTitle, setCurrentParentCategoryTitle] =
    useState(null);

  const { id: categoryId } = useParams();
  const [currentCategoryId, setCurrentCategoryId] = useState(categoryId);

  // Ready for API connection
  const [error, setError] = useState(null);
  const fetchShopBannerData = useCallback(async () => {
    setError(null);
    try {
      //Get Id from url
      setCurrentCategoryId(categoryId);
      // Get from api
      const response = await fetch(
        "http://127.0.0.1:8000/api/category/" + currentCategoryId
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      // console.log(data);
      setCurrentParentCategoryImage(
        backendServerPath + data["desired_category"]["img_url"]
      );
      setCurrentParentCategoryTitle(
        data["desired_category"]["name"].toString()
      );
      // console.log(data["desired_category"]["name"]);
    } catch (error) {
      setError(error.message);
    }
  }, [categoryId, currentCategoryId]);

  // Request categories
  useEffect(() => {
    fetchShopBannerData();
  }, [fetchShopBannerData, categoryId]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        borderBottom: `1px solid ${
          hideSocialMediaLinks ? "transparent" : "#321e1e"
        }`,
        backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url("${currentParentCategoryImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "72vh",
      }}
    >
      <Box sx={textBoxSx}>
        <Typography
          fontFamily={"Libre Bodoni"}
          color="#f4f1e0"
          component="h3"
          variant={tabletScreenMatch ? "h4" : "h3"}
          lineHeight={1.4}
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          {currentParentCategoryTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShopBanner;
