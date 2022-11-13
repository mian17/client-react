import ChatInput from "../ChatInput/ChatInput";
import Box from "@mui/material/Box";
import ChatBubbleSelf from "./ChatBubbles/ChatBubbleSelf/ChatBubbleSelf";
import ChatBubbleRecipient from "./ChatBubbles/ChatBubbleRecipient/ChatBubbleRecipient";
import { createRef, useCallback, useEffect, useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserUuid, setCurrentUserUuid] = useState("");

  const getUserUuid = (value) => {
    setCurrentUserUuid(value);
  };

  const getMessages = (messages) => {
    setMessages(messages);
  };

  const messagesEndRef = createRef();
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, messages]);
  // console.log(messages);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1, p: 2, height: "352px", overflow: "scroll" }}>
        {messages.map((message, index) => {
          if (message.uuid === currentUserUuid) {
            return <ChatBubbleSelf content={message.content} key={index} />;
          }
          return <ChatBubbleRecipient content={message.content} key={index} />;
        })}
        <Box ref={messagesEndRef} />
      </Box>
      <ChatInput
        getUserUuid={getUserUuid}
        getMessages={getMessages}
        sx={{ alignSelf: "self-end", marginTop: "auto" }}
      />
    </Box>
  );
};
export default ChatBox;
