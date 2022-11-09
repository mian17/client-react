import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import { chatInputSx, chatLayoutSx } from "./ChatInputSx";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import apiClient from "../../../api";

const pusher = new Pusher("23dcf659521322c3c5c3", {
  cluster: "ap1",
});
const channel = pusher.subscribe("chat-channel");

const ChatInput = (props) => {
  const [hasCreatedChatRoom, setHasCreatedChatRoom] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUserUuid, setCurrentUserUuid] = useState("");

  Pusher.logToConsole = true;
  const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));

  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      apiClient
        .get("api/user/account/profile", {
          headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
          },
        })
        .then((response) => {
          setCurrentUserUuid(response.data.user.uuid);
          props.getUserUuid(response.data.user.uuid);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    channel.bind(currentUserUuid, function (data) {
      // channel.bind("my-event", function (data) {
      setMessages([...messages, { content: data.content, uuid: data.uuid }]);
    });
    props.getMessages(messages);

    // return channel.unbind("my-event");
  }, [currentUserUuid, messages, props]);

  function submitMessageEnter(e) {
    if (e.keyCode === 13 && message.length > 0) {
      submitMessage();
      setMessage("");
    }
  }

  function sendMessage() {
    apiClient
      .post(
        "/api/send-message",
        {
          content: message,
          uuid: currentUserUuid,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitMessage() {
    if (hasCreatedChatRoom === false) {
      if (message.length > 0) {
        apiClient
          .post(
            "/api/create-chat-room",
            {
              uuid: currentUserUuid,
            },
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
                Accept: "application/json",
              },
            }
          )
          .then(() => {
            // console.log(response);
            setTimeout(sendMessage, 100);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      setHasCreatedChatRoom(true);
    } else {
      if (message.length > 0) {
        sendMessage();
      }
    }
    // setMessages([...messages, { content: message, uuid: currentUserUuid }]);
    setMessage("");
  }

  function textMessageChangeHandler(e) {
    setMessage(e.target.value);
  }

  return (
    <Box sx={chatLayoutSx}>
      <InputBase
        type="text"
        sx={chatInputSx}
        autoFocus
        onChange={textMessageChangeHandler}
        onKeyDown={submitMessageEnter}
        value={message}
        placeholder="Aa"
      />
      <IconButton onClick={submitMessage}>
        <SendIcon color="customGreen" size="small" />
      </IconButton>
    </Box>
  );
};
export default ChatInput;
