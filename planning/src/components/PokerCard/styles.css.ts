import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "3rem",
  textAlign: "center",
  borderRadius: "0.25rem",
  borderWidth: "1px",
  borderColor: "#6B7280",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
});

export const selectable = style({
  cursor: "pointer",
});

export const selected = style({
  backgroundColor: "#EDE9FE",
});

export const opaque = style({
  opacity: 0.5,
});

export const selectedText = style({
  color: "#8B5CF6",
});

export const text = style({
  color: "#C4B5FD",
});

export const textSize = style({
  fontSize: "3.75rem",
  lineHeight: 1,
  fontWeight: 700,
});
