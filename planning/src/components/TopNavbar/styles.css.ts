import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  position: "fixed",
  backgroundColor: "#ffffff",
  alignItems: "center",
  width: "100%",
  borderBottomWidth: "2px",
});

export const process = style({
  fontStyle: "italic",
  letterSpacing: "0.05em",
});
