// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import ProductItem from "../ProductItem/ProductItem";
// const products = [
//   {
//     productId: 1,
//     imageUrl: "/img/favorite-products/spotlight-product-1.png",
//     altImageUrl: "something",
//     imageUrlOnHover: "/img/favorite-products/spotlight-product-1-hover.jpg",
//     altImageUrlOnHover: "other something",
//     productName: "Táo Braeburn",
//     price: "10000",
//     description:
//       "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
//     status: "Hàng mới!",
//   },
//   {
//     productId: 2,
//     imageUrl: "/img/favorite-products/spotlight-product-1.png",
//     altImageUrl: "something",
//     imageUrlOnHover: "/img/favorite-products/spotlight-product-1-hover.jpg",
//     altImageUrlOnHover: "other something",
//     productName: "Táo Braeburn",
//     price: "20000",
//     description:
//       "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
//     status: "Hàng mới!",
//   },
//   {
//     productId: 3,
//     imageUrl: "/img/favorite-products/spotlight-product-1.png",
//     altImageUrl: "something",
//     imageUrlOnHover: "/img/favorite-products/spotlight-product-1-hover.jpg",
//     altImageUrlOnHover: "other something",
//     productName: "Táo Braeburn",
//     price: "30000",
//     description:
//       "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
//     status: "Hàng mới!",
//   },
//   {
//     productId: 4,
//     imageUrl: "/img/favorite-products/spotlight-product-1.png",
//     altImageUrl: "something",
//     imageUrlOnHover: "/img/favorite-products/spotlight-product-1-hover.jpg",
//     altImageUrlOnHover: "other something",
//     productName: "Táo Braeburn",
//     price: "40000",
//     description:
//       "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
//     status: "Hàng mới!",
//   },
//   {
//     productId: 5,
//     imageUrl: "/img/favorite-products/spotlight-product-1.png",
//     altImageUrl: "something",
//     imageUrlOnHover: "/img/favorite-products/spotlight-product-1-hover.jpg",
//     altImageUrlOnHover: "other something",
//     productName: "Táo Braeburn",
//     price: "40000",
//     description:
//       "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
//     status: "Hàng mới!",
//   },
// ];
// const ProductListing = () => {
//   const theme = useTheme();
//   const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
//
//   return (
//     <Grid sx={{ gridAutoFlow: "column dense" }} container>
//       <Grid
//         lg={4}
//         md={6}
//         sm={6}
//         xs={6}
//         sx={{
//           borderBottom: "1px solid #bdb498",
//           borderRight: "1px solid #bdb498",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           p: 2,
//
//           // maxWidth: "25%",
//         }}
//         item
//       >
//         <Typography
//           component="h4"
//           variant={tabletScreenMatch ? "h5" : "h4"}
//           sx={{ fontWeight: 700 }}
//           fontFamily="Libre Bodoni"
//         >
//           Top các sản phẩm bán chạy nhất
//         </Typography>
//         <Typography
//           // paragraph
//           variant=" body"
//           sx={{
//             color: "inherit",
//             textAlign: "right",
//             fontSize: tabletScreenMatch ? 14 : 16,
//           }}
//         >
//           A id laborum minus necessitatibus unde. Dolores laboriosam porro quo
//           recusandae tempore velit vitae!
//         </Typography>
//       </Grid>
//       {products.map((product, i, arr) => {
//         return (
//           <Grid
//             key={i}
//             lg={i === 3 ? 8 : 4}
//             md={6}
//             sm={6}
//             xs={6}
//             component="article"
//             sx={{
//               borderBottom: "1px solid #bdb498",
//               borderRight: "1px solid #bdb498",
//               blockSize: "fit-content",
//             }}
//             item
//           >
//             <ProductItem product={product} />
//           </Grid>
//         );
//       })}
//     </Grid>
//   );
// };
// export default ProductListing;
