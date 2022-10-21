import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ChatHeader = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        borderBottom: "1px solid #321e1e",
      }}
    >
      <Typography
        component="h3"
        variant="subtitle1"
        sx={{ ml: 1, fontWeight: 500 }}
      >
        Nhắn tin với admin
      </Typography>
      <Box>
        <IconButton size="small" onClick={props.toggleChatBoxHandler}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ChatHeader;
