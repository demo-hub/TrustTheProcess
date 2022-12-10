import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  textAlign: "center",
  gap: "0.75rem",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  },
});

export const error = style({
  color: "#EF4444",
});
