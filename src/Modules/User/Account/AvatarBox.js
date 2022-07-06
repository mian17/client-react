import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const AvatarBox = (props) => {
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
        {props.imgUrl ? (
          <Avatar sx={{ width: 56, height: 56 }} src={props.imgUrl}></Avatar>
        ) : (
          <Avatar sx={{ width: 56, height: 56 }}>
            <PersonOutlinedIcon sx={{ width: 32, height: 32 }} />
          </Avatar>
        )}
      </Grid>
      <Grid item lg={8}>
        <Typography sx={{ fontWeight: "bold" }} component="h3">
          Username
        </Typography>
        <Link href="/user/account/profile">Sửa hồ sơ</Link>
      </Grid>
    </Grid>
  );
};
export default AvatarBox;
