import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  padding: "1.5rem",
  transitionDuration: "500ms",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "0.25rem",
  borderWidth: "2px",
  borderColor: "#6B7280",
});

export const unavailableCard = style({
  cursor: "pointer",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
});

export const availableCard = style({
  backgroundColor: "#EDE9FE",
});

export const cardName = style({
  color: "#374151",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
});

export const comingSoon = style({
  color: "#8B5CF6",
  fontStyle: "italic",
});

export const cardDescription = style({
  color: "#4B5563",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});
