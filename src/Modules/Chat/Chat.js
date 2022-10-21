// import Echo from "laravel-echo";
import { useContext, useState } from "react";
import ChatButton from "./ChatButton/ChatButton";

import ChatBox from "./ChatBox/ChatBox";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBoxLayout from "./ChatBoxLayout/ChatBoxLayout";
import AuthContext from "../../store/auth-context";
import { NavLink } from "react-router-dom";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  function toggleChatBoxHandler() {
    setTimeout(() => {
      setOpen(!open);
    }, 100);
  }

  return (
    <>
      {loggedIn && <ChatButton toggleChatBoxHandler={toggleChatBoxHandler} />}
      {!loggedIn && (
        <NavLink to="/signin">
          <ChatButton />
        </NavLink>
      )}

      {open && (
        <ChatBoxLayout>
          <ChatHeader toggleChatBoxHandler={toggleChatBoxHandler} />
          <ChatBox />
        </ChatBoxLayout>
      )}
    </>
  );
};
export default Chat;
