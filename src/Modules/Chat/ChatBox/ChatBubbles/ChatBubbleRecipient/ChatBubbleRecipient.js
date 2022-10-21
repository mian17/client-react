import Box from "@mui/material/Box";
import { chatBubbleRecipientSx } from "./ChatBubbleRecipientSx";

const ChatBubbleRecipient = (props) => {
  return <Box sx={chatBubbleRecipientSx}>{props.content}</Box>;
};
export default ChatBubbleRecipient;
