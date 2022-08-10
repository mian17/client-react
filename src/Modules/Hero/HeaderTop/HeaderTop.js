import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";

const HeaderTop = () => {
  // Ready for API connection
  // const [error, setError] = useState(null);
  // const fetchBanners = useCallback(async () => {
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
  //     const transformedBanners = data.map((bannerData) => {
  //       return new Banner();
  //     });
  //
  //       setBanners(transformedBanners);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //
  // }, []);

  // Request banners
  // useEffect(() => {
  //     fetchBanners();
  // }, [fetchBanners]);

  return (
    <Box sx={{ padding: 0, backgroundColor: "#ff6429" }}>
      <Typography
        sx={{
          textAlign: "center",
          margin: "8px 0",
          color: "#f4f1e0",
        }}
      >
        Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ
      </Typography>
    </Box>
  );
};
export default HeaderTop;
