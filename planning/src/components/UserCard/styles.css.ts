import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  padding: "1rem",
  transitionDuration: "500ms",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "0.25rem",
  borderWidth: "2px",
  borderColor: "#6B7280",
  gap: "0.5rem",
});

export const name = style({
  color: "#C4B5FD",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  fontWeight: 700,
});

export const role = style({
  color: "#374151",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
});
