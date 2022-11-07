export const grayLayerSx = {
  position: "relative",
  borderBottom: "1px solid #bdb498",
  ":after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26))",
  },
};
export const textBoxSx = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 100,
};
