import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const hideSocialMediaLinks = useMediaQuery(theme.breakpoints.down("lg"));
  const footerLayoutChangeCondition = useMediaQuery(
    theme.breakpoints.down("md")
  );
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const heightForPrivacyOptions = "78,7833px";

  return (
    <Box component="footer">
      <Grid container>
        {hideSocialMediaLinks && (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                py: 8,
                px: 24,
                borderBottom: "1px solid #321e1e",
                // height: "225px",
              }}
            >
              <Box
                component={Link}
                href="https://www.facebook.com/vinh.lethe.16"
                sx={{
                  ":hover": {
                    color: "inherit",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 32 }} />
              </Box>
              <Box
                component={Link}
                href="/"
                sx={{
                  ":hover": {
                    color: "inherit",
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: 32 }} />
              </Box>
              <Box
                component={Link}
                href="/"
                sx={{
                  ":hover": {
                    color: "inherit",
                  },
                }}
              >
                <TwitterIcon sx={{ fontSize: 32 }} />
              </Box>
            </Box>
          </Grid>
        )}
        <Grid
          lg={9}
          md={12}
          sm={12}
          xs={12}
          sx={{
            borderRight: `1px solid ${
              laptopScreenMatch ? "transparent" : "#321e1e"
            }`,
          }}
          item
        >
          <Box component="ul">
            <Box
              p={2}
              component="li"
              sx={{ listStyleType: "none", borderBottom: "1px solid #321e1e" }}
            >
              <Typography
                component={NavLink}
                to="/user/account/profile"
                variant={tabletScreenMatch ? "h5" : "h4"}
                fontFamily={"Libre Bodoni"}
                sx={{
                  textTransform: "uppercase",
                  color: "inherit",
                  ":hover": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                Tài khoản của tôi
              </Typography>
            </Box>
            <Box
              p={2}
              component="li"
              sx={{ listStyleType: "none", borderBottom: "1px solid #321e1e" }}
            >
              <Typography
                component={NavLink}
                to="/contact"
                variant={tabletScreenMatch ? "h5" : "h4"}
                fontFamily={"Libre Bodoni"}
                sx={{
                  textTransform: "uppercase",
                  color: "inherit",
                  ":hover": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                Liên Hệ
              </Typography>
            </Box>
            <Box
              p={2}
              component="li"
              sx={{ listStyleType: "none", borderBottom: "1px solid #321e1e" }}
            >
              <Typography
                component={NavLink}
                to="/faq"
                variant={tabletScreenMatch ? "h5" : "h4"}
                fontFamily={"Libre Bodoni"}
                sx={{
                  textTransform: "uppercase",
                  color: "inherit",
                  ":hover": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                Các câu hỏi thường gặp
              </Typography>
            </Box>
            <Box
              p={2}
              component="li"
              sx={{ listStyleType: "none", borderBottom: "1px solid #321e1e" }}
            >
              <Typography
                component={NavLink}
                to="/privacy-terms"
                variant={tabletScreenMatch ? "h5" : "h4"}
                fontFamily={"Libre Bodoni"}
                sx={{
                  textTransform: "uppercase",
                  color: "inherit",
                  ":hover": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                Chính sách bảo mật thông tin cá nhân
              </Typography>
            </Box>
            <Box
              p={2}
              component="li"
              sx={{ listStyleType: "none", borderBottom: "1px solid #321e1e" }}
            >
              <Typography
                component={NavLink}
                to="/terms-of-service"
                variant={tabletScreenMatch ? "h5" : "h4"}
                fontFamily={"Libre Bodoni"}
                sx={{
                  textTransform: "uppercase",
                  color: "inherit",
                  ":hover": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                Điều khoản sử dụng
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid lg={3} md={12} sm={12} xs={12} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {!hideSocialMediaLinks && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  py: 8,
                  borderBottom: "1px solid #321e1e",
                  height: "225px",
                }}
              >
                <Box
                  component={Link}
                  href="https://www.facebook.com/vinh.lethe.16"
                  sx={{
                    ":hover": {
                      color: "inherit",
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    ":hover": {
                      color: "inherit",
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    ":hover": {
                      color: "inherit",
                    },
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 32 }} />
                </Box>
              </Box>
            )}
            <Box component="ul" sx={{ height: heightForPrivacyOptions }}>
              <Box sx={{ height: heightForPrivacyOptions }}>
                <Box
                  py={0.72}
                  px={2}
                  component="li"
                  sx={{
                    listStyleType: "none",
                    borderBottom: "1px solid #321e1e",
                    textAlign: "right",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/user/account/profile"
                    variant="subtitle2"
                    sx={{
                      color: "inherit",
                      ":hover": {
                        color: "inherit",
                        textDecoration: "none",
                      },
                    }}
                  >
                    Chính sách vận chuyển
                  </Typography>
                </Box>
                <Box
                  py={0.72}
                  px={2}
                  component="li"
                  sx={{
                    listStyleType: "none",
                    borderBottom: "1px solid #321e1e",
                    textAlign: "right",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/contact"
                    variant="subtitle2"
                    sx={{
                      color: "inherit",
                      ":hover": {
                        color: "inherit",
                        textDecoration: "none",
                      },
                    }}
                  >
                    Tùy chọn dữ liệu cá nhân
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: heightForPrivacyOptions }}>
                <Box
                  pt="6.17px"
                  pb={0.76}
                  // py={0.76}
                  px={2}
                  component="li"
                  sx={{
                    listStyleType: "none",
                    borderBottom: "1px solid #321e1e",
                    textAlign: "right",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/faq"
                    variant="subtitle2"
                    sx={{
                      color: "inherit",
                      ":hover": {
                        color: "inherit",
                        textDecoration: "none",
                      },
                    }}
                  >
                    Yêu cầu không bán thông tin của tôi
                  </Typography>
                </Box>
                <Box
                  py={0.75}
                  px={2}
                  component="li"
                  sx={{
                    listStyleType: "none",
                    borderBottom: "1px solid #321e1e",
                    textAlign: "right",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/faq"
                    variant="subtitle2"
                    sx={{
                      color: "inherit",
                      ":hover": {
                        color: "inherit",
                        textDecoration: "none",
                      },
                    }}
                  >
                    Tùy chọn thông tin quảng cáo
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} item>
          <Box
            component="img"
            src="/img/footer-shop-banner/footer-shop-banner.png"
            sx={{ width: "100%", height: "100%" }}
            alt="Wieder_ Markt's logo"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
