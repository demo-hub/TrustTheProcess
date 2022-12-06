import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  position: "fixed",
  backgroundColor: "#ffffff",
  alignItems: "center",
  width: "100%",
  borderBottom: "2px",
});

export const process = style({
  fontStyle: "italic",
  letterSpacing: "0.05em",
});

export const text = style({
  padding: "0.5rem",
  color: "#374151",
  fontWeight: 700,
});

export const buttons = style({
  marginRight: "0.5rem",
  color: "#374151",
});
