import Box from "@mui/material/Box";

const ChatBoxLayout = (props) => {
  return (
    <Box
      sx={{
        height: "460px",
        width: "340px",
        backgroundColor: "#f4f1e0",
        position: "fixed",
        bottom: 0,
        right: "90px",
        borderRadius: "13px",
        zIndex: 888,
        boxShadow: "0 0 10px #555",
      }}
    >
      {props.children}
    </Box>
  );
};
export default ChatBoxLayout;
