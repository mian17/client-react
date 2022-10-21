import MessageIcon from "@mui/icons-material/Message";
import Button from "@mui/material/Button";
import { chatButtonSx } from "./ChatButtonSx";

const ChatButton = (props) => {
  return (
    <Button
      sx={chatButtonSx}
      color="customGreen"
      variant="contained"
      onClick={props.toggleChatBoxHandler}
    >
      <MessageIcon />
    </Button>
  );
};
export default ChatButton;
