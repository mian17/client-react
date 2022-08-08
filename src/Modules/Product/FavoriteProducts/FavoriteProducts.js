import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProductItem from "../ProductItem/ProductItem";

const products = [
  {
    productId: 1,
    imageUrl: "/img/favorite-products/favorite-product-1.png",
    altImageUrl: "something",
    imageUrlOnHover: "/img/favorite-products/favorite-product-1-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "Táo Braeburn",
    price: 159000,
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    statusCode: 0,
  },
  {
    productId: 2,
    imageUrl: "/img/favorite-products/favorite-product-1.png",
    altImageUrl: "something",
    imageUrlOnHover: "/img/favorite-products/favorite-product-1-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "Táo Braeburn",
    price: 159000,
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    statusCode: 1,
  },
  {
    productId: 3,
    imageUrl: "/img/favorite-products/organic-products/th-true-milk.png",
    altImageUrl: "something",
    imageUrlOnHover:
      "/img/favorite-products/organic-products/th-true-milk-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "TH True Milk Organic - 500ml",
    price: 159000,
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    statusCode: 2,
    discountedPrice: 12000,
  },
];

const FavoriteProducts = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container>
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
      {products.map((product, index) => {
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
