import { style } from "@vanilla-extract/css";

export const sessions = style({
  display: "flex",
  gap: "1rem",
});

export const cardsGrid = style({
  display: "grid",
  paddingTop: "2rem",
  justifyContent: "center",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "2rem",
});

export const confirmButton = style({
  paddingTop: "2rem",
});
