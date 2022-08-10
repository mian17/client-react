import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProductItem from "../ProductItem/ProductItem";

import { favoriteProducts } from "./favoriteProducts-test-data/favoriteProducts";

const FavoriteProducts = () => {
  const theme = useTheme();
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
    <Grid component="section" container>
      <Grid
        lg={3}
        md={6}
        sm={6}
        xs={6}
        sx={{
          borderBottom: "1px solid #bdb498",
          borderRight: "1px solid #bdb498",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
          // maxWidth: "25%",
        }}
        item
      >
        <Typography
          component="h4"
          variant={tabletScreenMatch ? "h5" : "h4"}
          sx={{ fontWeight: 700 }}
          fontFamily="Libre Bodoni"
        >
          Sản phẩm Organic
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
          A id laborum minus necessitatibus unde. Dolores laboriosam porro quo
          recusandae tempore velit vitae!
        </Typography>
      </Grid>
      {favoriteProducts.map((product, index) => {
        return (
          <Grid
            key={index}
            lg={3}
            md={6}
            sm={6}
            xs={6}
            sx={{
              borderBottom: "1px solid #bdb498",
              borderRight: "1px solid #bdb498",
            }}
            item
          >
            <ProductItem product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FavoriteProducts;
