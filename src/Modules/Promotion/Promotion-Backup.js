// import Grid from "@mui/material/Grid";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
//
// const Promotion = () => {
//   const theme = useTheme();
//   const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
//   const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
//   return (
//     <Grid sx={{ position: "relative", height: "80vh" }} container>
//       <Box
//         sx={{
//           position: "absolute",
//           textAlign: "center",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <Typography
//           fontFamily={"Libre Bodoni"}
//           color="#f4f1e0"
//           component="h3"
//           variant={smallScreenMatch ? "h4" : "h2"}
//           lineHeight={1.4}
//           mb={2}
//         >
//           SALE ĐẬM NHÂN DIỆP GIÁNG SINH
//           <br />
//         </Typography>
//         <Typography component="h4" variant="body1" color="#f4f1e0" mb={2}>
//           Giảm tối đa đến 88% cho các ngành hàng
//         </Typography>
//
//         <Button variant="contained" size="large">
//           Săn sale ngay
//         </Button>
//       </Box>
//       <Grid
//         lg={4}
//         md={4}
//         sm={6}
//         xs={6}
//         item
//         sx={{
//           backgroundImage:
//             "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url('/img/promotion/promotion-1.jpg')",
//           width: "100%",
//           height: "auto",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></Grid>
//
//       <Grid
//         lg={4}
//         md={4}
//         sm={6}
//         xs={6}
//         item
//         sx={{
//           backgroundImage:
//             "linear-gradient(rgba(85, 85, 85, 0.26), rgba(85, 85, 85, 0.26)), url('/img/promotion/promotion-2.jpg')",
//           width: "100%",
//           height: "auto",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />
//
//       <Grid
//         lg={4}
//         md={4}
//         sm={6}
//         xs={6}
//         item
//         sx={{
//           backgroundImage:
//             "linear-gradient(rgba(85, 85, 85, 0.26), rgba(85, 85, 85, 0.26)), url('/img/promotion/promotion-3.jpg')",
//           width: "100%",
//           height: "auto",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />
//
//       {tabletScreenMatch && (
//         <Grid
//           lg={0}
//           md={0}
//           sm={6}
//           xs={6}
//           item
//           sx={{
//             backgroundImage:
//               "linear-gradient(rgba(85, 85, 85, 0.26), rgba(85, 85, 85, 0.26)), url('/img/promotion/promotion-4.jpg')",
//             width: "100%",
//             height: "auto",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       )}
//     </Grid>
//   );
// };
// export default Promotion;
