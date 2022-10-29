import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import apiClient from "../../../api";
import { backendServerPath } from "../../common/utils/backendServerPath";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AvatarBox = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("username");

  const fetchUserInfo = useCallback(async () => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
        .get("api/user/account/profile", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          const data = response.data.user;
          setAvatarUrl(backendServerPath + data.avatar);
          setUsername(data.username);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      spacing={1}
      // columns={{ xs: 4, sm: 8, md: 12 }}
      p={2}
      pl={3}
    >
      <Grid item lg={4}>
        {avatarUrl.length > 0 ? (
          <Avatar sx={{ width: 56, height: 56 }} src={avatarUrl}></Avatar>
        ) : (
          <Avatar sx={{ width: 56, height: 56 }}>
            <PersonOutlinedIcon sx={{ width: 32, height: 32 }} />
          </Avatar>
        )}
      </Grid>
      <Grid item lg={8}>
        <Typography sx={{ fontWeight: "bold" }} component="h3">
          {username}
        </Typography>
        <Link
          as={NavLink}
          to="/user/account/profile"
          sx={{
            color: "#321e1e",
            "&:hover": {
              color: "inherit",
            },
          }}
        >
          Sửa hồ sơ
        </Link>
      </Grid>
    </Grid>
  );
};
export default AvatarBox;
