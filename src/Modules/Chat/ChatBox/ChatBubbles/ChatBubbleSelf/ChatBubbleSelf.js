import Box from "@mui/material/Box";
import { chatBubbleSelfSx } from "./ChatBubbleSelfSx";

const ChatBubbleSelf = (props) => {
  return <Box sx={chatBubbleSelfSx}>{props.content}</Box>;
};
export default ChatBubbleSelf;
